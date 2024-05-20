import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

export default function MyTable() {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Head</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Value</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
