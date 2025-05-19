import { Theme, TypographyVariantsOptions } from '@mui/material/styles';

// export type Component<T extends keyof Components> = (theme: Theme, typography: TypographyOptions) => Components[T];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type Component<T> = (theme: Theme, typography: TypographyVariantsOptions) => any;
