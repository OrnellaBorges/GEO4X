import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { useState } from "react";

export default function MySelect() {
  const [method, setMethod] = useState<string>("");

  /*   const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  }; */

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Méthode de calcul</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={method}
        label="Méthode de calcul"
        /* onChange={handleChange} */
      >
        {/* créer un map ici pour plus tard */}
        <MenuItem value="A">Méthode A</MenuItem>
      </Select>
    </FormControl>
  );
}
