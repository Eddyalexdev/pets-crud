import { createBrowserRouter } from "react-router-dom";
import { PetsList, PetsCreate } from "@/views";

export const routes = createBrowserRouter([
  {
    path: "/pets/list",
    element: <PetsList />,
  },
  {
    path: "/pets/create",
    element: <PetsCreate />,
  },
]);
