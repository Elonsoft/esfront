import { ReactNode } from 'react';

const ScrollbarsDemoName = ({ children }: { children: ReactNode }) => {
  return (
    <code
      style={{
        display: 'inline-block',
        marginBottom: '8px',
        padding: '3px 5px',
        borderRadius: '3px',
        fontSize: '13px',
        backgroundColor: 'var(--es-mono-a-a50)',
        border: '1px solid var(--es-mono-a-a75)',
        marginTop: '16px',
      }}
    >
      {children}
    </code>
  );
};

export const ScrollbarsDemo = () => {
  const content = (
    <div className="body200" style={{ height: '1000px', width: '1000px', padding: '8px' }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
  );

  return (
    <div>
      <ScrollbarsDemoName>normalMonoA</ScrollbarsDemoName>
      <div
        className="scrollbar-normal-mono-a"
        style={{
          height: '150px',
          backgroundColor: 'var(--es-mono-b-a75)',
          color: 'var(--es-mono-a-a900)',
        }}
      >
        {content}
      </div>
      <ScrollbarsDemoName>normalMonoB</ScrollbarsDemoName>
      <div
        className="scrollbar-normal-mono-b"
        style={{
          height: '150px',
          backgroundColor: 'var(--es-mono-a-a800)',
          color: 'var(--es-mono-b-a900)',
        }}
      >
        {content}
      </div>
      <ScrollbarsDemoName>normalBlack</ScrollbarsDemoName>
      <div
        className="scrollbar-normal-black"
        style={{
          height: '150px',
          backgroundColor: 'var(--es-white-a800)',
          color: 'var(--es-black-a900)',
        }}
      >
        {content}
      </div>
      <ScrollbarsDemoName>normalWhite</ScrollbarsDemoName>
      <div
        className="scrollbar-normal-white"
        style={{
          height: '150px',
          backgroundColor: 'var(--es-black-a800)',
          color: 'var(--es-white-a900)',
        }}
      >
        {content}
      </div>
      <ScrollbarsDemoName>thinMonoA</ScrollbarsDemoName>
      <div
        className="scrollbar-thin-mono-a"
        style={{
          height: '150px',
          backgroundColor: 'var(--es-mono-b-a75)',
          color: 'var(--es-mono-a-a900)',
        }}
      >
        {content}
      </div>
      <ScrollbarsDemoName>thinMonoB</ScrollbarsDemoName>
      <div
        className="scrollbar-thin-mono-b"
        style={{
          height: '150px',
          backgroundColor: 'var(--es-mono-a-a800)',
          color: 'var(--es-mono-b-a900)',
        }}
      >
        {content}
      </div>
      <ScrollbarsDemoName>thinBlack</ScrollbarsDemoName>
      <div
        className="scrollbar-thin-black"
        style={{
          height: '150px',
          backgroundColor: 'var(--es-white-a800)',
          color: 'var(--es-black-a900)',
        }}
      >
        {content}
      </div>
      <ScrollbarsDemoName>thinWhite</ScrollbarsDemoName>
      <div
        className="scrollbar-thin-white"
        style={{
          height: '150px',
          backgroundColor: 'var(--es-black-a800)',
          color: 'var(--es-white-a900)',
        }}
      >
        {content}
      </div>
      <ScrollbarsDemoName>overlayMonoA</ScrollbarsDemoName>
      <div
        className="scrollbar-overlay-mono-a"
        style={{
          height: '150px',
          backgroundColor: 'var(--es-mono-b-a75)',
          color: 'var(--es-mono-a-a900)',
        }}
      >
        {content}
      </div>
      <ScrollbarsDemoName>overlayMonoB</ScrollbarsDemoName>
      <div
        className="scrollbar-overlay-mono-b"
        style={{
          height: '150px',
          backgroundColor: 'var(--es-mono-a-a800)',
          color: 'var(--es-mono-b-a900)',
        }}
      >
        {content}
      </div>
      <ScrollbarsDemoName>overlayBlack</ScrollbarsDemoName>
      <div
        className="scrollbar-overlay-black"
        style={{
          height: '150px',
          backgroundColor: 'var(--es-white-a800)',
          color: 'var(--es-black-a900)',
        }}
      >
        {content}
      </div>
      <ScrollbarsDemoName>overlayWhite</ScrollbarsDemoName>
      <div
        className="scrollbar-overlay-white"
        style={{
          height: '150px',
          backgroundColor: 'var(--es-black-a800)',
          color: 'var(--es-white-a900)',
        }}
      >
        {content}
      </div>
    </div>
  );
};
