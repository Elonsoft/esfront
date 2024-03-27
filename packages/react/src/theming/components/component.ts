import { Theme } from '@mui/material/styles';
import { TypographyOptions } from '@mui/material/styles/createTypography';

// export type Component<T extends keyof Components> = (theme: Theme, typography: TypographyOptions) => Components[T];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type Component<T> = (theme: Theme, typography: TypographyOptions) => any;
