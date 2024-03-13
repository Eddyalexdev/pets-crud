import { Box, Card, Typography } from "@mui/material";

interface IModal {
  name: string;
  type: string;
  image: string;
}

const Modal = ({ name, type, image }: IModal) => {
  return (
    <Box>
      <Card>
        <img src={`${image ?? ""}`} />
        <Typography>Nombre: {name}</Typography>
        <Typography>Tipo: {type}</Typography>
      </Card>
    </Box>
  );
};

export default Modal;
