// https://gitlab.com/catamphetamine/input-format/-/blob/master/source/format.js

export function countOccurences(symbol: string, string: string) {
  let count = 0;

  for (const character of string) {
    if (character === symbol) {
      count++;
    }
  }

  return count;
}

export function closeBraces(retained_template: string, template: string, placeholder = 'x', empty_placeholder = ' ') {
  let cut_before = retained_template.length;

  const opening_braces = countOccurences('(', retained_template);
  const closing_braces = countOccurences(')', retained_template);

  let dangling_braces = opening_braces - closing_braces;

  while (dangling_braces > 0 && cut_before < template.length) {
    retained_template += template[cut_before].replace(placeholder, empty_placeholder);

    if (template[cut_before] === ')') {
      dangling_braces--;
    }

    cut_before++;
  }

  return retained_template;
}

// Takes a `template` where character placeholders are denoted by 'x'es (e.g. 'x (xxx) xxx-xx-xx').
//
// Returns a function which takes `value` characters and returns the `template` filled with those characters.
// If the `template` can only be partially filled then it is cut off.
//
// If `should_close_braces` is `true`, then it will also make sure all dangling braces are closed, e.g. "8 (8" -> "8 (8  )" (iPhone style phone number input).
export function templateFormatter(
  template: string,
  placeholder = 'x',
  should_close_braces?: boolean
): string | ((value: string) => { text: string; template?: string }) {
  if (!template) {
    return (value) => ({ text: value });
  }

  const characters_in_template = countOccurences(placeholder, template);

  return function (value: string) {
    if (!value) {
      return { text: '', template };
    }

    let value_character_index = 0;
    let filled_in_template = '';

    for (const character of template) {
      if (character !== placeholder) {
        filled_in_template += character;
        continue;
      }

      filled_in_template += value[value_character_index];
      value_character_index++;

      // If the last available value character has been filled in, then return the filled in template (either trim the right part or retain it, if no more character placeholders in there).
      if (value_character_index === value.length) {
        // If there are more character placeholders in the right part of the template then simply trim it.
        if (value.length < characters_in_template) {
          break;
        }
      }
    }

    if (should_close_braces) {
      filled_in_template = closeBraces(filled_in_template, template);
    }

    return { text: filled_in_template, template };
  };
}

// Formats `value` value preserving `caret` at the same character.
//
// `{ value, caret }` attribute is the result of `parse()` function call.
//
// Returns `{ text, caret }` where the new `caret` is the caret position
// inside `text` text corresponding to the original `caret` position inside `value`.
//
// `formatter(value)` is a function returning `{ text, template }`.
//
// `text` is the `value` value formatted using `template`.
// It may either cut off the non-filled right part of the `template`
// or it may fill the non-filled character placeholders
// in the right part of the `template` with `spacer`
// which is a space (' ') character by default.
//
// `template` is the template used to format the `value`.
// It can be either a full-length template or a partial template.
//
// `formatter` can also be a string — a `template`
// where character placeholders are denoted by 'x'es.
// In this case `formatter` function is automatically created.
//
// Example:
//
// `value` is '880',
// `caret` is `2` (before the first `0`)
//
// `formatter` is `'880' =>
//   { text: '8 (80 )', template: 'x (xxx) xxx-xx-xx' }`
//
// The result is `{ text: '8 (80 )', caret: 4 }`.
//
export function format(
  value: string,
  caret: number,
  formatter: string | ((value: string) => { text: string; template?: string })
): { text: string; caret: number } {
  if (typeof formatter === 'string') {
    formatter = templateFormatter(formatter);
  }

  let { text, template } = formatter(value) || {};

  if (text === undefined) {
    text = value;
  }

  if (template) {
    if (caret === undefined) {
      caret = text.length;
    } else {
      let index = 0;
      let found = false;

      let possibly_last_input_character_index = -1;

      while (index < text.length && index < template.length) {
        // Character placeholder found
        if (text[index] !== template[index]) {
          if (caret === 0) {
            found = true;
            caret = index;
            break;
          }

          possibly_last_input_character_index = index;

          caret--;
        }

        index++;
      }

      // If the caret was positioned after last input character,
      // then the text caret index is just after the last input character.
      if (!found) {
        caret = possibly_last_input_character_index + 1;
      }
    }
  }

  return { text, caret };
}

// Gets <input/> selection bounds
export function getSelection(element: HTMLInputElement) {
  // If no selection, return nothing
  if (element.selectionStart === element.selectionEnd) {
    return;
  }

  return { start: element.selectionStart, end: element.selectionEnd };
}

// Finds out the operation to be intercepted and performed
// based on the key down event `keyCode`.
export function getOperation(event: KeyboardEvent) {
  if (event.key === 'Backspace' || event.key === 'Delete') {
    return event.key;
  }

  return '';
}

export function getCaretPosition(element: HTMLInputElement) {
  return element.selectionStart;
}

export const ANDROID_USER_AGENT_REG_EXP = /Android/i;

export function isAndroid() {
  if (typeof navigator !== 'undefined') {
    return ANDROID_USER_AGENT_REG_EXP.test(navigator.userAgent);
  }
}

export function setCaretPosition(element: HTMLInputElement, caret_position: number) {
  // https://github.com/catamphetamine/input-format/issues/2
  // https://github.com/text-mask/text-mask/issues/300
  // https://github.com/text-mask/text-mask/pull/400/files
  if (isAndroid()) {
    setTimeout(() => element.setSelectionRange(caret_position, caret_position), 0);
  } else {
    element.setSelectionRange(caret_position, caret_position);
  }
}

export function edit(value: string, caret: number, operation: string) {
  switch (operation) {
    case 'Backspace':
      // If there exists the previous character,
      // then erase it and reposition the caret.
      if (caret > 0) {
        // Remove the previous character
        value = value.slice(0, caret - 1) + value.slice(caret);
        // Position the caret where the previous (erased) character was
        caret--;
      }

      break;
    case 'Delete':
      // Remove current digit (if any)
      value = value.slice(0, caret) + value.slice(caret + 1);
      break;
  }

  return { value, caret };
}

// Parses the `text`.
//
// Returns `{ value, caret }` where `caret` is
// the caret position inside `value`
// corresponding to the `caret_position` inside `text`.
//
// The `text` is parsed by feeding each character sequentially to
// `parse_character(character, value, context)` function
// and appending the result (if it's not `undefined`) to `value`.
//
// `context` argument is just a utility empty object that is shared within the bounds
// of parsing a single input string. The `_parse()` function could use that object
// to store any kind of "flags" in it in order to alter its behavior based when
// parsing next characters within the same string. Or it could completely ignore it.
//
// Example:
//
// `text` is `8 (800) 555-35-35`,
// `caret_position` is `4` (before the first `0`).
// `parse_character` is `(character, value) =>
//   if (character >= '0' && character <= '9') { return character }`.
//
// then `parse()` outputs `{ value: '88005553535', caret: 2 }`.
//
export default function parse(
  text: string,
  caret_position: number,
  parse_character: (char: string, value: string, context: any) => string
) {
  const context = {};

  let value = '';

  let focused_input_character_index = 0;

  let index = 0;

  while (index < text.length) {
    const character = parse_character(text[index], value, context);

    if (character !== undefined) {
      value += character;

      if (caret_position !== undefined) {
        if (caret_position === index) {
          focused_input_character_index = value.length - 1;
        } else if (caret_position > index) {
          focused_input_character_index = value.length;
        }
      }
    }

    index++;
  }

  // If caret position wasn't specified
  if (caret_position === undefined) {
    // Then set caret position to "after the last input character"
    focused_input_character_index = value.length;
  }

  const result = {
    value,
    caret: focused_input_character_index,
  };

  return result;
}

export function eraseSelection(input: HTMLInputElement, selection: { start: number; end?: number }) {
  let text = input.value;
  text = text.slice(0, selection.start) + text.slice(selection.end);

  input.value = text;
  setCaretPosition(input, selection.start);
}
