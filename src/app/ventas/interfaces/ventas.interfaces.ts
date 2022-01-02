//enum: rojo = 0, negro = 1, azul = 2, verde = 3, amarillo = 4
export enum Color {
  rojo,
  negro,
  azul,
  verde,
  amarillo,
}
export interface Heroe {
  nombre: string;
  vuela: boolean;
  color: Color;
}
