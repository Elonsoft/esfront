import { Theme } from '@mui/material/styles';
import { Components } from '@mui/material/styles/components';
import { TypographyOptions } from '@mui/material/styles/createTypography';

export type Component<T extends keyof Components> = (theme: Theme, typography: TypographyOptions) => Components[T];
