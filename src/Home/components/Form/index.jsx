import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import { Botao } from "../Button/index.jsx";
import { DivBase, DivForm, PlaceInput, PlaceLabel } from ".";
import { useState } from "react";
export const Forms = () => {
  const { register, handleSubmit } = useForm({});

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
        <PlaceLabel>CPF</PlaceLabel>
        <PlaceInput {...register("cpf")} label="cpf" type="text" />
        <PlaceLabel>CEP</PlaceLabel>
        <PlaceInput {...register("cep")} label="cep" type="number" />
        <PlaceLabel>Bairro</PlaceLabel>
        <PlaceInput {...register("bairro")} label="bairro" type="text" />
        <PlaceLabel>Endereco</PlaceLabel>
        <PlaceInput {...register("endereco")} label="endereco" type="text" />
        <PlaceLabel>Numero</PlaceLabel>
        <PlaceInput {...register("numero")} label="numero" type="number" />
        <PlaceLabel>Complemento</PlaceLabel>
        <PlaceInput
          {...register("complemento")}
          label="complento"
          type="text"
        />
        <PlaceLabel>Celular</PlaceLabel>
        <PlaceInput {...register("celular")} label="celular" type="text" />
        <PlaceLabel>Email</PlaceLabel>
        <PlaceInput {...register("email")} label="email" type="text" />
          <Botao type="submit" text="Enviar" />
      </DivForm>
      
    </DivBase>
  );
};

/*NOME -
CPF-
ENDERECO-
CEP-
BAIRRO-
NUMERO-
COMPLEMENTO-
CELULAR-
EMAIL-
*/

/*MARCA
MODELO
ANO
COR
RENAVAM
CHASSI
PLACA
*/
