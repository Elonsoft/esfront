import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

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
              <code>mini1</code>
            </TableCell>
            <TableCell>
              <Typography component="div" variant="mini1">
                Mini 1
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>mini2</code>
            </TableCell>
            <TableCell>
              <Typography component="div" variant="mini2">
                Mini 2
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
