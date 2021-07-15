import { Theme } from '@material-ui/core/styles';
import { Components } from '@material-ui/core/styles/components';
import { TypographyOptions } from '@material-ui/core/styles/createTypography';

export type Component<T extends keyof Components> = (theme: Theme, typography: TypographyOptions) => Components[T];
