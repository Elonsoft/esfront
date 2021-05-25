import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    border: `1px dashed ${theme.palette.monoA.A200}`,
    color: theme.palette.text.primary,
    padding: 16,
    ...(theme.components?.ESEmptyState?.styleOverrides?.root as any)
  },
  heading: {
    marginBottom: 4,
    ...(theme.components?.ESEmptyState?.styleOverrides?.heading as any)
  }
}));

export type ESEmptyStateClasses = {
  root: string;
  heading: string;
};
export type ESEmptyStateClassKey = keyof ESEmptyStateClasses;
