"use client";

import React, { useEffect, useState } from "react";
import { pdf, PDFDownloadLink } from "@react-pdf/renderer";

import * as C from "./styles";

import PdfDocument from "@/components/PdfDocument/PdfDocument";

function FormInput() {
  const [text, setText] = useState();
  const [image, setImage] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);

  const content = [text, image];

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const render = new FileReader();
      render.onloadend = () => {
        setImage(render.result);
      };

      render.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const generatePDF = async () => {
      const blob = await pdf(
        <PdfDocument text={text} image={image} />
      ).toBlob();

      const url = URL.createObjectURL(blob);
      setPdfUrl(url);
    };

    generatePDF();
  }, [text, image]);

  return (
    <C.Container>
      <C.Title>Gerador De PDF</C.Title>
      <C.TextArea
        value={text}
        placeholder="Digite seu texto aqui"
        onChange={(e) => setText(e.target.value)}
      ></C.TextArea>

      <C.LabelImage for="file-input">Escolha uma imagem</C.LabelImage>
      <C.InputImage type="file" accept="image/*" onChange={handleImageChange} />

      {pdfUrl && (
        <div>
          <h2>Visualização do PDF</h2>
          <iframe src={pdfUrl} style={{ width: "100%", height: "100%" }} />
        </div>
      )}

      <C.DownloadPDF>
        <PDFDownloadLink
          document={
            <PdfDocument text={text} image={image} fileName="document.pdf" />
          }
        >
          {({ loading }) => (loading ? "Gerando PDF..." : "Baixar PDF")}
        </PDFDownloadLink>
      </C.DownloadPDF>

      <PdfDocument />
    </C.Container>
  );
}

export default FormInput;
