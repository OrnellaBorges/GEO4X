import {
  Box,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

export default function SelectV1() {
  return (
    <FormControl sx={{ m: 0, width: "100%" }} size="small">
      {/*<InputLabel id="demo-select-small-label">Méthode de calcul</InputLabel>
       */}
      <TextField
        label="Méthode de calcul"
        fullWidth
        select
        /* sx={{ "& .MuiInputLabel-root": { fontStyle: "italic" } }} */
      >
        <MenuItem value="A">Méthode A</MenuItem>
        <MenuItem value="B">Méthode B</MenuItem>
      </TextField>
    </FormControl>
  );
}
