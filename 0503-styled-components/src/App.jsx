import React from 'react';
import styled from 'styled-components';

const Titulo = styled.h1`
  font-size: 2.5rem;
  color: red;
`;

const Paragrafo = styled.p`
  font-size: 1.25rem;
  color: blue;
`;

const ProdutosContainer = styled.div`
  display: flex;
`;

const Produto = styled.div`
  flex: 1;
`;

const Preco = styled.p`
  background: rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255});
  color: white;
`

const Comprar = styled.button`
  background: ${({ativo}) => ativo ? 'black' : 'white'};
  font-size: 1rem;
  border: 2px solid black;
  border-radius: 5px;
  padding: .5rem;
  color: white;
  cursor: pointer;
  &:hover{
    background: red;
  }
`

const App = () => {
  const [ativo, setAtivo] = React.useState(false);

  function handleClick(){
    setAtivo(!ativo);
  }

  return (
    <ProdutosContainer>
      <Produto>
        <Titulo>Meu titulo</Titulo>
        <Paragrafo>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur repellendus, vitae esse reiciendis ut assumenda. Quidem eum corrupti unde, inventore   voluptas  eaque nostrum repellat doloribus deserunt ducimus qui suscipit ea.</Paragrafo>
        <Preco>R$ 1000</Preco>
        <Comprar ativo={ativo} onClick={handleClick}>Compre aqui</Comprar>
      </Produto>
      <Produto>
        <Titulo>Smartphone</Titulo>
        <Paragrafo>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur repellendus, vitae esse reiciendis ut assumenda. Quidem eum corrupti unde, inventore   voluptas  eaque nostrum repellat doloribus deserunt ducimus qui suscipit ea.</Paragrafo>
        <Preco>R$ 2000</Preco>
      </Produto>
    </ProdutosContainer>
  )
}

export default App
