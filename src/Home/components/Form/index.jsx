import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import { Botao } from "../Button/index.jsx";
import { DivBase, DivForm, PlaceInput, PlaceLabel } from ".";
import { useState } from "react";
import { Docxtemplater } from "docxtemplater";
import JSZip from "jszip";
import { saveAs } from "file-saver";
export const Forms = () => {
  const { register, handleSubmit } = useForm({});

  const [insert, setInsert] = useState([]);

  function inserir(data) {
    setInsert([...insert, data]);
    console.log(data);

      // Carrega o modelo de documento
      const file = "meu_modelo.docx";
      const xhr = new XMLHttpRequest();
      xhr.open("GET", file, { async: false });
      xhr.responseType = "arraybuffer";
      xhr.send();
      const buffer = xhr.response;

      // Cria um objeto com os dados do formulário
      const context = {
        nome: data.nome,
        cpf: data.cpf,
        endereco: data.endereco,
      };

      // Substitui os marcadores pelos valores do formulário
      const zip = new JSZip(buffer);
      const doc = new Docxtemplater();
      doc.loadZip(zip);
      doc.setData(context);
      doc.render();

      // Salva o novo documento
      const docBuffer = doc.getZip().generate({ type: "arraybuffer" });
      saveAs(
        new Blob([docBuffer], { type: "application/octet-stream" }),
        "meu_documento.docx"
      );
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
}

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
