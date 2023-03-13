import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Botao } from "../Button/index.jsx";
import { DivBase, DivForm, PlaceInput, PlaceLabel } from ".";
import { useState } from "react";
export const Forms = () => {


  const {
    register,
    handleSubmit,
  } = useForm({});

  const [insert, setInsert] = useState([]);


  function inserir(data) {
    setInsert([...insert, data]);
    console.log(data);
  }

  return (
    <DivBase>
      <DivForm onSubmit={handleSubmit(inserir)}>
        <PlaceLabel>Nome</PlaceLabel>
        <PlaceInput {...register("nome")} label="nome" type="text" />
        <PlaceLabel>Endereco</PlaceLabel>
        <PlaceInput {...register("endereco")} label="endereco" type="endereco" />
        <Botao text="Entrar " />
      </DivForm>

    </DivBase>
  );
};
