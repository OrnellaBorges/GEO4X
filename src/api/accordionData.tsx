import { Typography } from "@mui/material";
import MyTable from "../Components/Mui/Tables/MyTable";
import MySelect from "../Components/Mui/Selects/MySelect";
import { coordsTable } from "./mockCoords";
import { distancesTable } from "./mockDistances";

// il faudra creer une fonction de transformation :
// pour appeler le bon composant mui en fonction du type de donnée reçu
// afin de genener un nouveau tableau

export const accordionData = [
  {
    summary: "Aires",
    content: <Typography>Lorem ipsum dolor sit amet.</Typography>,
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
        <Typography sx={{ fontWeight: 700 }}>Total 2D:</Typography>
        <Typography sx={{ fontWeight: 700 }}>Total 3D:</Typography>
      </>
    ),
    content: <MyTable tableHead={["2D (m)", "3D (m)"]} rows={distancesTable} />,
    componentType: "Table",
  },
];
