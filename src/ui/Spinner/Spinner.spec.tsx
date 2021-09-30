import { render, screen } from '../../testing';

import { SpinnerColor } from './Spinner.types';

import {
  SpinnerDashRing,
  SpinnerFadingBars,
  SpinnerFadingDots,
  SpinnerFadingDoubleRing,
  SpinnerFadingRing,
  SpinnerRing
} from '.';

import { palettes } from '../../theming/palettes';

const COLORS = {
  inherit: 'currentColor',
  primary: palettes.light.primary[300],
  secondary: palettes.light.secondary[300],
  monoA: palettes.light.monoA[500]
};

const COMPONENTS = {
  SpinnerDashRing,
  SpinnerFadingBars,
  SpinnerFadingDots,
  SpinnerFadingDoubleRing,
  SpinnerFadingRing,
  SpinnerRing
};

const SIZE = 25;

describe('Spinner', () => {
  Object.keys(COMPONENTS).forEach((component) => {
    const Component = COMPONENTS[component as keyof typeof COMPONENTS];

    Object.keys(COLORS).forEach((color) => {
      it(`Should display ${component} with ${color} color`, async () => {
        render(<Component color={color as SpinnerColor} />);
        expect(screen.getByTestId('svg')).toHaveStyle({ color: COLORS[color as SpinnerColor] });
      });
    });

    it(`Should display ${component} with ${SIZE} size`, async () => {
      render(<Component size={SIZE} />);
      expect(screen.getByTestId('svg')).toHaveAttribute('width', `${SIZE}`);
      expect(screen.getByTestId('svg')).toHaveAttribute('height', `${SIZE}`);
    });
  });
});
