import { useRef, useState } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';

import { Popper } from './Popper';

import { Button } from '../Button';
import { Grow } from '../Grow';

import { flip, offset, shift } from '@floating-ui/react-dom';

const meta: Meta<typeof Popper> = {
  tags: ['autodocs'],
  component: Popper,
  parameters: {
    references: ['Popper'],
  },
  argTypes: {
    anchorEl: { table: { disable: true } },
    children: { table: { disable: true } },
    open: { table: { disable: true } },
  },
};

export default meta;

type Story = StoryObj<typeof Popper>;

const content = (
  <div
    style={{
      background: 'var(--es-surface-100)',
      borderRadius: '4px',
      boxShadow: 'var(--es-shadow-100)',
      padding: '8px 12px',
    }}
  >
    Popper content
  </div>
);

export const Demo: Story = {
  render: function Render(args) {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    return (
      <div style={{ display: 'flex', justifyContent: 'center', padding: '80px' }}>
        <Button
          color="primary"
          variant="contained"
          onClick={(event) => setAnchorEl(anchorEl ? null : event.currentTarget)}
        >
          Toggle
        </Button>
        <Popper {...args} anchorEl={anchorEl} middleware={[offset(8), flip(), shift({ padding: 8 })]} open={!!anchorEl}>
          {content}
        </Popper>
      </div>
    );
  },
};

export const Placements: Story = {
  render: function Render() {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    return (
      <div style={{ display: 'flex', justifyContent: 'center', padding: '120px' }}>
        <Button ref={setAnchorEl} variant="outlined">
          Anchor
        </Button>
        {(['top', 'right', 'bottom', 'left', 'top-start', 'bottom-end'] as const).map((placement) => (
          <Popper key={placement} anchorEl={anchorEl} middleware={[offset(8)]} open={!!anchorEl} placement={placement}>
            <div
              style={{
                background: 'var(--es-surface-100)',
                border: '1px solid var(--es-mono-a-300)',
                padding: '2px 6px',
              }}
            >
              {placement}
            </div>
          </Popper>
        ))}
      </div>
    );
  },
};

export const Transition: Story = {
  render: function Render() {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    return (
      <div style={{ display: 'flex', justifyContent: 'center', padding: '80px' }}>
        <Button
          color="primary"
          variant="contained"
          onClick={(event) => setAnchorEl(anchorEl ? null : event.currentTarget)}
        >
          Toggle
        </Button>
        <Popper transition anchorEl={anchorEl} middleware={[offset(8), flip()]} open={!!anchorEl}>
          {({ TransitionProps }) => (
            <Grow
              in={TransitionProps?.in}
              timeout={200}
              onEnter={TransitionProps?.onEnter}
              onExited={TransitionProps?.onExited}
            >
              {content}
            </Grow>
          )}
        </Popper>
      </div>
    );
  },
};

export const VirtualAnchor: Story = {
  render: function Render() {
    const positionRef = useRef({ x: 0, y: 0 });
    const popperRef = useRef<{ update: () => void } | null>(null);
    const [open, setOpen] = useState(false);

    return (
      <div
        style={{ background: 'var(--es-surface-200)', height: '240px' }}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onMouseMove={(event) => {
          positionRef.current = { x: event.clientX, y: event.clientY };
          popperRef.current?.update();
        }}
      >
        Move the cursor here
        <Popper
          anchorEl={{ getBoundingClientRect: () => new DOMRect(positionRef.current.x, positionRef.current.y, 0, 0) }}
          middleware={[offset(12)]}
          open={open}
          popperRef={popperRef}
        >
          {content}
        </Popper>
      </div>
    );
  },
};
