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
          {tableHead.map((head: string, headIndex: number) => (
            <TableCell sx={{ fontWeight: 700 }} key={`${head}-${headIndex}`}>
              {head}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row: Row, rowIndex: number) => (
          <TableRow key={`${row.lat}-${rowIndex}`}>
            {Object.values(row).map((values: number, cellIndex: number) => (
              <TableCell key={`${values}-${cellIndex}`}>{values}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
