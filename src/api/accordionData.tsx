import { FormControl, MenuItem, TextField, Typography } from "@mui/material";
import MyTable from "../Components/Mui/Tables/MyTable";
import { coordsTable } from "./mockCoords";
import { distancesTable } from "./mockDistances";

// il faudra creer une fonction de transformation :
// pour appeler le bon composant mui en fonction du type de donnée reçu
// afin de genener un nouveau tableau

export const accordionData = [
  {
    summary: "Aires",
    content: (
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Typography>
    ),
    componentType: "Typography",
  },
  {
    summary: "Volumes",
    content: (
      <FormControl sx={{ m: 0, width: "100%" }} size="small">
        <TextField
          label="Méthode de calcul"
          select
          value="A"
          fullWidth
          sx={{ "& .MuiInputLabel-root": { fontStyle: "italic" } }}
        >
          <MenuItem value="A">Méthode A</MenuItem>
          <MenuItem value="B">Méthode B</MenuItem>
        </TextField>
      </FormControl>
    ),
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
        <Typography>Lorem1</Typography>
        <Typography>Lorem2</Typography>
      </>
    ),
    content: <MyTable tableHead={["2D (m)", "3D (m)"]} rows={distancesTable} />,
    componentType: "Table",
  },
];
