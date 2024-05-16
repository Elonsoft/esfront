import { ComponentPropsWithoutRef } from 'react';

import { styled } from '@mui/material/styles';
import { inputBaseClasses, TextField, TypographyProps } from '@mui/material';

const InlineTextFieldRoot = styled(TextField, {
  name: 'ESInlineTextField',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})<{
  ownerState: { typography: Exclude<TypographyProps['variant'], 'inherit' | undefined> };
}>(({ theme, ownerState }) => ({
  '.MuiInput-root:not(.Mui-error)::before': {
    borderBottom: '1px solid transparent'
  },

  '.MuiInput-root.Mui-disabled::before': {
    borderBottom: `1px dotted ${theme.palette.monoA.A200}`
  },

  '.MuiInput-root:hover:not(.Mui-disabled, .Mui-error)::before': {
    borderBottom: `1px solid ${theme.palette.monoA.A200}`
  },

  [`& .${inputBaseClasses.root}`]: {
    padding: 0
  },

  [`& .${inputBaseClasses.input}`]: {
    ...theme.typography[ownerState.typography],
    padding: '5px 0',

    '&::placeholder': {
      color: theme.palette.monoA.A400,
      opacity: 1
    },

    '&, &:disabled': {
      color: theme.palette.monoA.A900,
      WebkitTextFillColor: 'unset'
    }
  }
}));

export const InlineTextField = ({
  typography = 'body200',
  placeholder,
  ...props
}: Omit<ComponentPropsWithoutRef<typeof InlineTextFieldRoot>, 'ownerState'> & {
  typography?: Exclude<TypographyProps['variant'], 'inherit'>;
}) => {
  return (
    <InlineTextFieldRoot
      multiline
      ownerState={{ typography }}
      placeholder={placeholder ?? '-'}
      variant="standard"
      {...props}
    />
  );
};
