import React, { useState } from "react";
import axios from "./axios";
import styled from "styled-components";

interface PokemonType {
  name: string;
  url: string;
}

export default function AxiosPage() {
  const [pokemon, setPokemon] = useState<PokemonType[]>();
  const getApi = async () => {
    try {
      const res = await axios.get("pokemon");

      const data = await res.data.results;
      setPokemon((pre) => (pre?.[0].name === data[0].name ? null : data));
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Container>
      <h2>Axios 테스트</h2>
      <Btn type="button" onClick={getApi}>
        테스트
      </Btn>
      {pokemon?.map((poke) => (
        <div key={poke.url}>{poke.name}</div>
      ))}
    </Container>
  );
}
const Container = styled.div`
  margin: 50px auto;
  padding-bottom: 50px;
  width: 300px;
  border: 1px solid #000;
`;

const Btn = styled.button`
  margin-bottom: 20px;
`;
