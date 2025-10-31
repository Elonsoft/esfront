function extractValues(s) {
  return s
    .matchAll(/\d+/g)
    .toArray()
    .flatMap((m) => +m[0]);
}

function sortAtRules(queries) {
  return queries.sort((a, b) => {
    const valuesA = extractValues(a);
    const valuesB = extractValues(b);

    if (valuesA.length && !valuesB.length) {
      return -1;
    }

    if (!valuesA.length && valuesB.length) {
      return 1;
    }

    if (valuesA.length === valuesB.length) {
      for (const i in valuesA.length) {
        if (valuesA[i] !== valuesB[i]) {
          return valuesA[i] - valuesB[i];
        }
      }

      return 0;
    }

    return valuesA.length - valuesB.length;
  });
}

module.exports = () => {
  return {
    postcssPlugin: 'postcss-sort-media-queries',
    OnceExit(root, { AtRule }) {
      const atRules = [];

      root.walkAtRules('media', (atRule) => {
        const query = atRule.params;

        if (!atRules[query]) {
          atRules[query] = new AtRule({
            name: atRule.name,
            params: atRule.params,
            source: atRule.source,
          });
        }

        atRule.nodes.forEach((node) => {
          atRules[query].append(node.clone());
        });

        atRule.remove();
      });

      if (atRules) {
        sortAtRules(Object.keys(atRules)).forEach((query) => {
          root.append(atRules[query]);
        });
      }
    },
  };
};

module.exports.postcss = true;
