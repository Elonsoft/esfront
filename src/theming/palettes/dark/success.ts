export const successPalette = {
  500: '#47d6a3',
  A50: 'rgba(71, 214, 163, 0.04)',
  A75: 'rgba(71, 214, 163, 0.06)',
  A100: 'rgba(71, 214, 163, 0.08)',
  A150: 'rgba(71, 214, 163, 0.1)',
  A200: 'rgba(71, 214, 163, 0.12)',
  A300: 'rgba(71, 214, 163, 0.16)',
  A400: 'rgba(71, 214, 163, 0.24)',
  A500: 'rgba(71, 214, 163, 0.32)',
  A600: 'rgba(71, 214, 163, 0.52)',
  A700: 'rgba(71, 214, 163, 0.58)',
  A800: 'rgba(71, 214, 163, 0.7)',
  A900: 'rgba(71, 214, 163, 0.86)'
};

export const success = {
  ...successPalette,
  main: successPalette[500]
};