export type TipoTitulo = "filme" | "serie";
export type StatusTitulo = "quero_ver" | "assistindo" | "assisti";

export interface TituloCatalogo {
  readonly id: number;
  titulo: string;
  tipo: TipoTitulo;
  status: StatusTitulo;
  generos: string[];
}
