import styled from "styled-components";
import Input from "../input/input";
import { useState } from "react";
import { livros } from "./dadosPerquisas";

const PesquisaContainer = styled.section`
  background-image: linear-gradient(90deg, #002f52, 355, #326589, 165%);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 100%;
`;

const Titulo = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;
const Subtitulo = styled.h4`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

function Pesquisa() {
  const [livroPesqisados, setLivrosPesquisados] = useState([]);

  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar</Titulo>
      <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
      <Input
        placeholder="Escreva sua preoxima leitura"
        onBlur={(evento) => {
          const textoDigitado = evento.target.value;
          const resuldadoPesquisa = livros.filter((livro) =>
            livro.nome.includes(textoDigitado)
          );
          setLivrosPesquisados(resuldadoPesquisa);
        }}
      />
      {livroPesqisados.map((livro) => (
        <div>
          <p>{livro.nome}</p>
          <img src={livro.src} />
        </div>
      ))}
    </PesquisaContainer>
  );
}
export default Pesquisa;
