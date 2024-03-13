import Layout from "@/components/Layout";
import { petType } from "@/data";
import { Pet } from "@/models/pets.model";
import { addPet } from "@/store/states/pets.state";
import {
  Button,
  Card,
  FormControlLabel,
  MenuItem,
  RadioGroup,
  Select,
  TextField,
  Typography,
  Radio,
  FormControl,
  InputLabel,
  Stack,
  FormLabel,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const PetsCreate = () => {
  const form = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const dispatch = useDispatch();

  const handleCreatePet = (data: Pet) => {
    dispatch(addPet({ ...data }));
  };

  return (
    <Layout>
      <Card sx={{ p: 5 }}>
        <Typography sx={{ mb: 5 }} component="h1">
          Registro de mascota desaparecida
        </Typography>
        <form onSubmit={handleSubmit(handleCreatePet)}>
          <Stack spacing={4}>
            <TextField
              fullWidth
              {...register("name", {
                required: "Debe agregar un nombre a la mascota",
                pattern: /([A-Z])\w+/,
              })}
              label="Nombre de la Mascota"
              error={!!errors.name}
              helperText={`${errors.name?.message ?? ""}`}
            />
            <FormControl fullWidth>
              <InputLabel>Tipo de Mascota</InputLabel>
              <Select defaultValue={""} {...register("type")}>
                {petType.map((pet) => (
                  <MenuItem key={pet} value={pet}>
                    {pet}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Genero de la Mascota</FormLabel>
              <RadioGroup defaultValue="F" {...register("sexo")}>
                <FormControlLabel value="F" control={<Radio />} label="F" />
                <FormControlLabel value="M" control={<Radio />} label="M" />
              </RadioGroup>
            </FormControl>
            <TextField
              fullWidth
              {...register("image", {
                pattern:
                  /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi,
              })}
              label="Imagen de la Mascota"
              error={!!errors.image}
              helperText={`${errors.image ? "El campo debe ser una url" : ""}`}
            />
            <Button type="submit">Crear Mascota</Button>
          </Stack>
        </form>
      </Card>
    </Layout>
  );
};

export default PetsCreate;
