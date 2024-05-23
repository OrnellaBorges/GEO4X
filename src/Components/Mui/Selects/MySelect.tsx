import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { useState } from "react";

export default function MySelect() {
  const [method, setMethod] = useState<string>("");

  const methodsItems = [
    { value: "A", label: "Méthode A" },
    { value: "B", label: "Méthode B" },
    { value: "C", label: "Méthode C" },
  ];

  return (
    <FormControl fullWidth size="small">
      <InputLabel id="demo-simple-select-label" sx={{ fontStyle: "italic" }}>
        Méthode de calcul
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={method}
        label="Méthode de calcul"
        onChange={(e) => setMethod(e.target.value)}
      >
        {methodsItems.map((item, indexItem) => (
          <MenuItem key={`${item.value}-${indexItem}`} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
