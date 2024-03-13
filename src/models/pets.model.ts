type PetType = "Perro" | "Gato" | "Canario";

export interface Pet {
  name: string;
  type: PetType;
  sexo: string;
  image: any;
}
