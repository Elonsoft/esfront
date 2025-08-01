import Typography from '@mui/material/Typography';
import { styled } from '@mui/material-pigment-css';

const ScrollbarsDemoName = styled(Typography)(({ theme }) => ({
  display: 'inline-block',
  marginBottom: '8px',
  padding: '3px 5px',
  borderRadius: '3px',
  fontSize: '13px',
  backgroundColor: theme.vars.palette.monoA.A50,
  border: `1px solid ${theme.vars.palette.monoA.A75}`,
})) as typeof Typography;

export const ScrollbarsDemo = () => {
  const content = (
    <Typography component="div" sx={{ height: '1000px', width: '1000px', padding: '8px' }} variant="body200">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Typography>
  );

  return (
    <div>
      <ScrollbarsDemoName component="code">normalMonoA</ScrollbarsDemoName>
      <div
        sx={(theme) => ({
          height: '150px',
          backgroundColor: 'monoB.A75',
          color: 'monoA.A900',
          ...theme.scrollbars.normalMonoA,
        })}
      >
        {content}
      </div>
      <ScrollbarsDemoName component="code" sx={{ marginTop: '16px' }}>
        normalMonoB
      </ScrollbarsDemoName>
      <div
        sx={(theme) => ({
          height: '150px',
          backgroundColor: 'monoA.A800',
          color: 'monoB.A900',
          ...theme.scrollbars.normalMonoB,
        })}
      >
        {content}
      </div>
      <ScrollbarsDemoName component="code" sx={{ marginTop: '16px' }}>
        normalBlack
      </ScrollbarsDemoName>
      <div
        sx={(theme) => ({
          height: '150px',
          backgroundColor: 'white.A800',
          color: 'black.A900',
          ...theme.scrollbars.normalBlack,
        })}
      >
        {content}
      </div>
      <ScrollbarsDemoName component="code" sx={{ marginTop: '16px' }}>
        normalWhite
      </ScrollbarsDemoName>
      <div
        sx={(theme) => ({
          height: '150px',
          backgroundColor: 'black.A800',
          color: 'white.A900',
          ...theme.scrollbars.normalWhite,
        })}
      >
        {content}
      </div>
      <ScrollbarsDemoName component="code" sx={{ marginTop: '16px' }}>
        thinMonoA
      </ScrollbarsDemoName>
      <div
        sx={(theme) => ({
          height: '150px',
          backgroundColor: 'monoA.A75',
          ...theme.scrollbars.thinMonoA,
        })}
      >
        {content}
      </div>
      <ScrollbarsDemoName component="code" sx={{ marginTop: '16px' }}>
        thinMonoB
      </ScrollbarsDemoName>
      <div
        sx={(theme) => ({
          height: '150px',
          backgroundColor: 'monoA.A800',
          color: 'monoB.A900',
          ...theme.scrollbars.thinMonoB,
        })}
      >
        {content}
      </div>
      <ScrollbarsDemoName component="code" sx={{ marginTop: '16px' }}>
        thinBlack
      </ScrollbarsDemoName>
      <div
        sx={(theme) => ({
          height: '150px',
          backgroundColor: 'white.A800',
          color: 'black.A900',
          ...theme.scrollbars.thinBlack,
        })}
      >
        {content}
      </div>
      <ScrollbarsDemoName component="code" sx={{ marginTop: '16px' }}>
        thinWhite
      </ScrollbarsDemoName>
      <div
        sx={(theme) => ({
          height: '150px',
          backgroundColor: 'black.A800',
          color: 'white.A900',
          ...theme.scrollbars.thinWhite,
        })}
      >
        {content}
      </div>
      <ScrollbarsDemoName component="code" sx={{ marginTop: '16px' }}>
        overlayMonoA
      </ScrollbarsDemoName>
      <div
        sx={(theme) => ({
          height: '150px',
          backgroundColor: 'monoB.A75',
          color: 'monoA.A900',
          ...theme.scrollbars.overlayMonoA,
        })}
      >
        {content}
      </div>
      <ScrollbarsDemoName component="code" sx={{ marginTop: '16px' }}>
        overlayMonoB
      </ScrollbarsDemoName>
      <div
        sx={(theme) => ({
          height: '150px',
          backgroundColor: 'monoA.A800',
          color: 'monoB.A900',
          ...theme.scrollbars.overlayMonoB,
        })}
      >
        {content}
      </div>
      <ScrollbarsDemoName component="code" sx={{ marginTop: '16px' }}>
        overlayBlack
      </ScrollbarsDemoName>
      <div
        sx={(theme) => ({
          height: '150px',
          backgroundColor: 'white.A800',
          color: 'black.A900',
          ...theme.scrollbars.overlayBlack,
        })}
      >
        {content}
      </div>
      <ScrollbarsDemoName component="code" sx={{ marginTop: '16px' }}>
        overlayWhite
      </ScrollbarsDemoName>
      <div
        sx={(theme) => ({
          height: '150px',
          backgroundColor: 'black.A800',
          color: 'white.A900',
          ...theme.scrollbars.overlayWhite,
        })}
      >
        {content}
      </div>
    </div>
  );
};
