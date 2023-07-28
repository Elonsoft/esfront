import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ScrollbarsDemoName = styled(Typography)(({ theme }) => ({
  display: 'inline-block',
  marginBottom: '8px',
  padding: '3px 5px',
  borderRadius: '3px',
  fontSize: '13px',
  backgroundColor: theme.palette.monoA.A50,
  border: `1px solid ${theme.palette.monoA.A75}`
})) as typeof Typography;

export const ScrollbarsDemo = () => {
  const content = (
    <Typography
      component="div"
      sx={{ height: '1000px', width: '1000px', padding: '8px', backgroundColor: 'monoA.A75', color: 'monoA.A900' }}
      variant="body200"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Typography>
  );

  return (
    <Box>
      <ScrollbarsDemoName component="code">normal</ScrollbarsDemoName>
      <Box
        sx={(theme) => ({
          height: '150px',
          ...theme.scrollbars.normal
        })}
      >
        {content}
      </Box>
      <ScrollbarsDemoName component="code" sx={{ marginTop: '16px' }}>
        thin
      </ScrollbarsDemoName>
      <Box
        sx={(theme) => ({
          height: '150px',
          ...theme.scrollbars.thin
        })}
      >
        {content}
      </Box>
      <ScrollbarsDemoName component="code" sx={{ marginTop: '16px' }}>
        overlay
      </ScrollbarsDemoName>
      <Box
        sx={(theme) => ({
          height: '150px',
          ...theme.scrollbars.overlay
        })}
      >
        {content}
      </Box>
    </Box>
  );
};
