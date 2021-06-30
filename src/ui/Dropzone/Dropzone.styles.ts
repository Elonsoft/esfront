import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      display: 'grid',
      gap: 8,
      gridAutoFlow: 'row'
    },
    dropzoneDragOver: {
      '& .MuiTouchRipple-root': {
        backgroundColor: theme.palette.primary.A100
      }
    },
    dropzone: {
      width: '100%',
      '&.MuiButtonBase-root': {
        backgroundColor: theme.palette.monoA.A50,
        border: `1px dashed ${theme.palette.monoA.A200}`,
        borderRadius: 4,
        display: 'flex',
        flexDirection: 'column',
        padding: '22px 24px',
        transitionDuration: theme.transitions.duration.short,
        transitionProperty: 'background-color, border',
        transitionTimingFunction: theme.transitions.easing.easeInOut
      },
      '& .MuiTouchRipple-root': {
        transitionDuration: theme.transitions.duration.short,
        transitionProperty: 'background-color, border',
        transitionTimingFunction: theme.transitions.easing.easeInOut
      },
      '&:hover .MuiTouchRipple-root, &:focus-visible .MuiTouchRipple-root': {
        backgroundColor: theme.palette.monoA.A50
      }
    },
    dropzoneDragOverDocument: {
      '&.MuiButtonBase-root': {
        backgroundColor: theme.palette.primary.A50,
        border: `1px dashed ${theme.palette.primary.A500}`
      }
    },
    dropzoneError: {
      '&.MuiButtonBase-root': {
        backgroundColor: theme.palette.error.A50,
        border: `1px dashed ${theme.palette.error.A800}`
      }
    },
    heading: {
      alignItems: 'center',
      color: theme.palette.primary[300],
      display: 'grid',
      gap: 4,
      gridAutoFlow: 'column',
      justifyContent: 'center'
    },
    headingText: {
      paddingBottom: 8,
      paddingTop: 8,
      '&.MuiTypography-root': {
        lineHeight: theme.typography.pxToRem(16)
      }
    },
    subheading: {
      color: theme.palette.monoA.A500,
      '&.MuiTypography-root': {
        marginTop: 4
      }
    },
    helperText: {
      color: theme.palette.monoA.A700
    },
    errorText: {
      color: theme.palette.error.A800
    },
    icon: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center'
    },
    input: {
      display: 'none'
    }
  }),
  {
    // stylelint-disable-next-line
    name: 'ESDropzone'
  }
);

export type DropzoneClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the dropzone element. */
  dropzone: string;
  /** Styles applied to the dropzone element if file is dragged over th document. */
  dropzoneDragOverDocument: string;
  /** Styles applied to the dropzone element if file is dragged over. */
  dropzoneDragOver: string;
  /** Styles applied to the dropzone element if `error={true}`. */
  dropzoneError: string;
  /** Styles applied to the input element. */
  input: string;
  /** Styles applied to the icon wrapper element. */
  icon: string;
  /** Styles applied to the heading element. */
  heading: string;
  /** Styles applied to the headingText element. */
  headingText: string;
  /** Styles applied to the subheading element. */
  subheading: string;
  /** Styles applied to the helperText element. */
  helperText: string;
  /** Styles applied to the errorText element. */
  errorText: string;
};

export type DropzoneClassKey = keyof DropzoneClasses;
