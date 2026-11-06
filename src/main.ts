import { catalogo } from "./dados";
import { elemento } from "./dom";
import type { StatusTitulo, TipoTitulo } from "./tipos";

const rotulosTipo: Record<TipoTitulo, string> = {
  filme: "Filme",
  serie: "Série",
};

const rotulosStatus: Record<StatusTitulo, string> = {
  quero_ver: "Quero ver",
  assistindo: "Assistindo",
  assisti: "Assisti",
};

elemento("nome-do-projeto").textContent = "Catálogo de Filmes e Séries";
elemento("versao").textContent = "0.1.0";

const lista = elemento("lista-catalogo");

for (const registro of catalogo) {
  const item = document.createElement("li");
  item.className = "registro";

  const titulo = document.createElement("h3");
  titulo.textContent = registro.titulo;

  const detalhes = document.createElement("p");
  detalhes.textContent =
    `${rotulosTipo[registro.tipo]} · ${rotulosStatus[registro.status]}`;

  const generos = document.createElement("p");
  generos.textContent = `Gêneros: ${registro.generos.join(", ")}`;

  item.append(titulo, detalhes, generos);
  lista.append(item);
}
