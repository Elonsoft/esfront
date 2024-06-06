import { Component } from '../component';

export const createFormControl: Component<'MuiFormControl'> = () => {
  return {
    defaultProps: {
      variant: 'outlined',
    },
    styleOverrides: {
      root: {
        '& .MuiOutlinedInput-root': {
          minHeight: '56px',

          '& .MuiOutlinedInput-input': {
            padding: '16.5px 12px',

            '&.MuiSelect-select': {
              paddingRight: '32px',
            },
          },

          '& .MuiSelect-outlined': {
            alignItems: 'center',
            display: 'flex',
          },

          '&.MuiInputBase-multiline': {
            padding: '0 12px',
            '& .MuiOutlinedInput-input': {
              padding: '12px 0',
            },
          },

          '&.MuiInputBase-adornedStart': {
            paddingLeft: 12,
            '& .MuiOutlinedInput-input': {
              paddingLeft: 0,
            },
          },

          '&.MuiInputBase-adornedEnd': {
            paddingRight: 12,
            '& .MuiOutlinedInput-input': {
              paddingRight: 0,
            },
            '& .MuiSelect-select ~ .MuiInputAdornment-positionEnd': {
              paddingRight: 32,
            },
          },

          '& .MuiInputAdornment-root': {
            alignSelf: 'flex-start',
            height: 56,
            maxHeight: 'none',
          },
        },

        '& .MuiInputLabel-outlined': {
          transform: 'translate(12px, 16px) scale(1)',
          '&.MuiInputLabel-shrink': {
            transform: 'translate(12px, -8.5px) scale(0.75)',
          },
        },
      },
    },
    variants: [
      {
        props: { size: '48' },
        style: {
          '& .MuiOutlinedInput-root': {
            minHeight: '48px',

            '& .MuiOutlinedInput-input': {
              padding: '12.5px 12px',
            },

            '&.MuiInputBase-multiline .MuiOutlinedInput-input': {
              padding: '8px 0',
            },

            '& .MuiInputAdornment-root': {
              height: 48,
            },
          },
          '& .MuiInputLabel-outlined': {
            transform: 'translate(12px, 12.5px) scale(1)',
          },
        },
      },
      {
        props: { size: '40' },
        style: {
          '& .MuiOutlinedInput-root': {
            minHeight: '40px',

            '& .MuiOutlinedInput-input': {
              padding: '8.5px 12px',
            },

            '&.MuiInputBase-multiline .MuiOutlinedInput-input': {
              padding: '4px 0',
            },

            '& .MuiInputAdornment-root': {
              height: 40,
            },
          },
          '& .MuiInputLabel-outlined': {
            transform: 'translate(12px, 8.5px) scale(1)',
          },
        },
      },
      {
        props: { size: '32' },
        style: {
          '& .MuiOutlinedInput-root': {
            minHeight: '32px',

            '& .MuiOutlinedInput-input': {
              padding: '4.5px 12px',
            },

            '&.MuiInputBase-multiline .MuiOutlinedInput-input': {
              padding: '4px 0',
            },

            '& .MuiInputAdornment-root': {
              height: 32,
            },
          },
          '& .MuiInputLabel-outlined': {
            transform: 'translate(12px, 4.5px) scale(1)',
          },
        },
      },
    ],
  };
};
