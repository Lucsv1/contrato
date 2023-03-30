import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Botao } from "../Button/index.jsx";
import { DivBase, DivForm, PlaceInput, PlaceLabel } from "../Form/index";
import { useState } from "react";
export const FormPay = () => {
  const { register, handleSubmit } = useForm({});

  const [insert, setInsert] = useState([]);

  function inserir(data) {
    setInsert([...insert, data]);
    console.log(data);
  }

  return (
    <DivBase>
      <DivForm onSubmit={handleSubmit(inserir)}>
        <PlaceLabel>Valor Total</PlaceLabel>
        <PlaceInput {...register("valorT")} type="text" />
        <Link to="/Main">
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
