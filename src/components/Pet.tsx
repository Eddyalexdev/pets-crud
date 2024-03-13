import { deletePet } from "@/store/states/pets.state";
import { Button, Card, Grid, Stack, Typography } from "@mui/material";
import { useDispatch } from "react-redux";

interface IPet {
  name: string;
  type: string;
  image: string;
}

const Pet = ({ name, type, image }: IPet) => {
  const dispatch = useDispatch();

  const handleDeletePet = (name: string) => {
    dispatch(deletePet(name));
  };

  return (
    <Card key={name} sx={{ p: 2 }}>
      <Grid container spacing={2}>
        <Grid item md={4} spacing={2}>
          <img src={`${image ?? ""}`} />
        </Grid>
        <Grid item md={8}>
          <Stack spacing={2} justifyContent={"center"} sx={{ height: "100%" }}>
            <Typography variant="h4" component="h3">
              {name}
            </Typography>
            <Typography>{type}</Typography>
            <Button color="error" onClick={() => handleDeletePet(name)}>
              Eliminar Mascota
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Pet;
