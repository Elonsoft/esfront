import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

export const TypographyDemo = () => {
  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Variant</TableCell>
            <TableCell>Display</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <code>h1</code>
            </TableCell>
            <TableCell>
              <Typography component="div" variant="h1">
                Heading 1
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>h2</code>
            </TableCell>
            <TableCell>
              <Typography component="div" variant="h2">
                Heading 2
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>h3</code>
            </TableCell>
            <TableCell>
              <Typography component="div" variant="h3">
                Heading 3
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>h4</code>
            </TableCell>
            <TableCell>
              <Typography component="div" variant="h4">
                Heading 4
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>h5</code>
            </TableCell>
            <TableCell>
              <Typography component="div" variant="h5">
                Heading 5
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>h6</code>
            </TableCell>
            <TableCell>
              <Typography component="div" variant="h6">
                Heading 6
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>subtitle1</code>
            </TableCell>
            <TableCell>
              <Typography component="div" variant="subtitle1">
                Subtitle 1
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>subtitle2</code>
            </TableCell>
            <TableCell>
              <Typography component="div" variant="subtitle2">
                Subtitle 2
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>body400</code>
            </TableCell>
            <TableCell>
              <Typography component="div" variant="body400">
                Body 400
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>body400W40</code>
            </TableCell>
            <TableCell>
              <Typography component="div" variant="body400W40">
                Body 400 | W40
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>body400W50</code>
            </TableCell>
            <TableCell>
              <Typography component="div" variant="body400W50">
                Body 400 | W50
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>body300</code>
            </TableCell>
            <TableCell>
              <Typography component="div" variant="body300">
                Body 300
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>body300W40</code>
            </TableCell>
            <TableCell>
              <Typography component="div" variant="body300W40">
                Body 300 | W40
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>body300W50</code>
            </TableCell>
            <TableCell>
              <Typography component="div" variant="body300W50">
                Body 300 | W50
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>body200</code>
            </TableCell>
            <TableCell>
              <Typography component="div" variant="body200">
                Body 200
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>body200W40</code>
            </TableCell>
            <TableCell>
              <Typography component="div" variant="body200W40">
                Body 200 | W40
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>body200W50</code>
            </TableCell>
            <TableCell>
              <Typography component="div" variant="body200W50">
                Body 200 | W50
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>body100</code>
            </TableCell>
            <TableCell>
              <Typography component="div" variant="body100">
                Body 100
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>body100W40</code>
            </TableCell>
            <TableCell>
              <Typography component="div" variant="body100W40">
                Body 100 | W40
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>body100W50</code>
            </TableCell>
            <TableCell>
              <Typography component="div" variant="body100W50">
                Body 100 | Bold
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>mini200</code>
            </TableCell>
            <TableCell>
              <Typography component="div" variant="mini200">
                Mini 200
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>mini100</code>
            </TableCell>
            <TableCell>
              <Typography component="div" variant="mini100">
                Mini 100
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>mini100W50</code>
            </TableCell>
            <TableCell>
              <Typography component="div" variant="mini100W50">
                Mini 100 | W50
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>micro</code>
            </TableCell>
            <TableCell>
              <Typography component="div" variant="micro">
                Micro
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>button</code>
            </TableCell>
            <TableCell>
              <Typography component="div" variant="button">
                Button
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>caption</code>
            </TableCell>
            <TableCell>
              <Typography component="div" variant="caption">
                Caption
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>captionW40</code>
            </TableCell>
            <TableCell>
              <Typography component="div" variant="captionW40">
                Caption | W40
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>captionW50</code>
            </TableCell>
            <TableCell>
              <Typography component="div" variant="captionW50">
                Caption | W50
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>overline</code>
            </TableCell>
            <TableCell>
              <Typography component="div" variant="overline">
                Overline
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};
