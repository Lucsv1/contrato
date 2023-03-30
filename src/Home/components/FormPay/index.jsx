import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Botao } from "../Button/index.jsx";
import { DivBase, DivForm, PlaceInput, PlaceLabel } from "../Form/index";
import { useState } from "react";
import { Docxtemplater } from "docxtemplater";
import JSZip from "jszip";
import { saveAs } from "file-saver";
export const FormPay = () => {
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
