import { useState } from "react";
import { FormAuto } from "../FormAuto";
import { Form } from "react-router-dom";
import { FormPay } from "../FormPay";
import { Botao } from "../Button/index.jsx";


export const Settings = () => {
  const [dados, setDados] = useState({});

  function inserir(data) {
    setDados((prevDados) => ({ ...prevDados, ...data }));
  }

  return (
    <>
      <Form onSubmit={inserir} />
      <FormAuto onSubmit={inserir} />
      <FormPay onSubmit={inserir} />
      <Botao onClick={() => console.log(dados)} text="Mostrar dados" />
    </>
  );
};