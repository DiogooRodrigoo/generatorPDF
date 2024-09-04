"use client";

import React, { useEffect, useState } from "react";
import { pdf, PDFDownloadLink } from "@react-pdf/renderer";

import * as C from "./styles";

import PdfDocument from "@/components/PdfDocument/PdfDocument";

function FormInput() {
  const [title, setTitle] = useState();
  const [text, setText] = useState();
  const [image, setImage] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);

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
      <C.LabelInputs>Título das páginas</C.LabelInputs>
      <C.InputTitle
        type="text"
        value={title}
        placeholder="Título exibido em todas páginas"
        onChange={(e) => setTitle(e.target.value)}
      ></C.InputTitle>

      <C.LabelInputs>Digite seu texto aqui</C.LabelInputs>
      <C.TextArea
        value={text}
        placeholder="Parágrado de texto"
        onChange={(e) => setText(e.target.value)}
      ></C.TextArea>

      <C.LabelInputs>Escolha uma imagem para adiconar ao seu PDF</C.LabelInputs>
      <C.InputImage type="file" accept="image/*" onChange={handleImageChange} />

      {pdfUrl && (
        <C.ViewPDF>
          <C.LabelViewPDF>Visualização do PDF</C.LabelViewPDF>
          <iframe src={pdfUrl} style={{ width: "100%", height: "100%" }} />
        </C.ViewPDF>
      )}

      <C.DownloadButton>
        <PDFDownloadLink
          document={
            <PdfDocument text={text} image={image} fileName="document.pdf" />
          }
        >
          {({ loading }) => (
            <C.DownloadLabelButton>
              {loading ? "Gerando PDF..." : "Baixar PDF"}
            </C.DownloadLabelButton>
          )}
        </PDFDownloadLink>
      </C.DownloadButton>

      <PdfDocument />
    </C.Container>
  );
}

export default FormInput;
