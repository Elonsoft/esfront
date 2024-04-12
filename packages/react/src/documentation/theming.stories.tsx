import { PaletteDemo } from './components/PaletteDemo';
import { TypographyDemo } from './components/TypographyDemo';

export default {
  title: 'Getting Started/Theming',

  parameters: {
    viewMode: 'docs'
  }
};

export const Palette = {
  render: () => <PaletteDemo />
};

export const Typography = {
  render: () => <TypographyDemo />
};
