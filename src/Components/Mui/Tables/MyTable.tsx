import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

// Typage des props

type Row = {
  lat?: number;
  lng?: number;
  alt?: number;
  "2D"?: number;
  "3D"?: number;
};

type MyTableProps = {
  tableHead: string[];
  rows: Row[];
};

export default function MyTable({ tableHead, rows }: MyTableProps) {
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
