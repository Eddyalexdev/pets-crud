import { Pet } from "@/components";
import Layout from "@/components/Layout";
import { IRootState } from "@/store";
import { Stack } from "@mui/material";
import { useSelector } from "react-redux";

const PetsList = () => {
  const pets = useSelector((state: IRootState) => state.pets);
  return (
    <Layout>
      <Stack spacing={2}>
        {pets.map((pet) => (
          <Pet name={pet.name} type={pet.type} image={pet.image} />
        ))}
      </Stack>
    </Layout>
  );
};

export default PetsList;
