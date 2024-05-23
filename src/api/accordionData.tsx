import { Typography } from "@mui/material";
import MyTable from "../Components/Mui/Tables/MyTable";
import MySelect from "../Components/Mui/Selects/MySelect";
import { coordsTable } from "./mockCoords";
import { distancesTable } from "./mockDistances";

export const accordionData = [
  {
    summary: "Aires",
    content: <Typography>Welcome Corentin</Typography>,
    componentType: "Typography",
  },
  {
    summary: "Volumes",
    content: <MySelect />,
    componentType: "Typography",
  },
  {
    summary: "Coordonées",
    content: <MyTable tableHead={["lat", "lng", "alt"]} rows={coordsTable} />,
    componentType: "Table",
  },
  {
    summary: "Distances",
    titleTable: (
      <>
        <Typography sx={{ fontWeight: 600 }}>Total 2D: 1961.41 m</Typography>
        <Typography sx={{ fontWeight: 600 }}>Total 3D: 1996.006 m</Typography>
      </>
    ),
    content: <MyTable tableHead={["2D (m)", "3D (m)"]} rows={distancesTable} />,
    componentType: "Table",
  },
];
