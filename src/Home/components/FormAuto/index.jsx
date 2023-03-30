import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Botao } from "../Button/index.jsx";
import { DivBase, DivForm, PlaceInput, PlaceLabel } from "../Form/index";
import { useState } from "react";
export const FormAuto = () => {
  const { register, handleSubmit } = useForm({});

  const [insert, setInsert] = useState([]);

  function inserir(data) {
    setInsert([...insert, data]);
    console.log(data);
  }

  return (
    <DivBase>
      <DivForm onSubmit={handleSubmit(inserir)}>
        <PlaceLabel>Marca</PlaceLabel>
        <PlaceInput {...register("marca")} label="marca" type="text" />
        <PlaceLabel>Modelo</PlaceLabel>
        <PlaceInput {...register("modelo")} label="cpf" type="text" />
        <PlaceLabel>Ano</PlaceLabel>
        <PlaceInput {...register("ano")} label="ano" type="number" />
        <PlaceLabel>Cor</PlaceLabel>
        <PlaceInput {...register("cor")} label="cor" type="text" />
        <PlaceLabel>Renavam</PlaceLabel>
        <PlaceInput {...register("renavam")} label="renavam" type="number" />
        <PlaceLabel>chassi</PlaceLabel>
        <PlaceInput {...register("chassi")} label="numero" type="text" />
        <PlaceLabel>Placa</PlaceLabel>
        <PlaceInput {...register("placa")} label="placa" type="text" />
        <Link to='/FormPay'>
          <Botao text="Enviar" />
        </Link>
      </DivForm>
    </DivBase>
  );
};

/*MARCA
MODELO
ANO
COR
RENAVAM
CHASSI
PLACA
*/
