import { Component } from '../component';

export const createOutlinedInput: Component<'MuiOutlinedInput'> = (theme, typography) => {
  return {
    styleOverrides: {
      root: {
        color: 'var(--es-mono-a-a900)',
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderWidth: '2px',
          borderColor: 'var(--es-mono-a-a200)',
          top: '-4.5px',
        },
        '&.Mui-disabled': {
          color: 'var(--es-mono-a-a500)',
          '& .MuiOutlinedInput-notchedOutline': {
            borderWidth: '1px',
            borderColor: 'var(--es-mono-a-a200)',
            top: '-5px',
          },
          '& .MuiInputAdornment-root .MuiIcon-root': {
            color: 'var(--es-mono-a-a400)',
          },
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: 'var(--es-primary-300)',
          top: '-4.5px',
        },
        '&.Mui-error .MuiOutlinedInput-notchedOutline': {
          borderColor: 'var(--es-error-300)',
          borderWidth: '2px',
          top: '-4.5px',
        },
      },
      input: {
        ...typography.subtitle1,
        '&.Mui-disabled': {
          WebkitTextFillColor: 'currentColor',
        },
        '&::placeholder': {
          color: 'var(--es-mono-a-a400)',
          opacity: 1,
        },
      },
      notchedOutline: {
        borderColor: 'var(--es-mono-a-a200)',
        padding: '0 6px',
      },
    },
  };
};
