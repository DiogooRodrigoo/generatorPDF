"use client";

import React, { useMemo, useState } from "react";
import { pdf, PDFDownloadLink } from "@react-pdf/renderer";

import * as C from "./styles";

import PdfDocument from "@/components/PdfDocument/PdfDocument";
import uploadPDF from "@/data/api/uploadPDF";

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

  const generatePDF = async () => {
    const blob = await pdf(
      <PdfDocument title={title} text={text} image={image} />
    ).toBlob();

    const url = URL.createObjectURL(blob);
    setPdfUrl(url);

    // MOCK SIMULANDO ENVIO PARA API
    try {
      const result = await uploadPDF(blob);
      console.log("PDF enviado com sucesso:", result);
    } catch (error) {
      console.error("Erro ao enviar PDF:", error);
    }
  };

  const memoizedPdfDocument = useMemo(
    () => <PdfDocument title={title} text={text} image={image} />,
    [title, text, image]
  );

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

      <C.ButtonPDF onClick={generatePDF}>
        <C.LabelButtonPDF>Gerar PDF</C.LabelButtonPDF>
      </C.ButtonPDF>

      {pdfUrl && (
        <>
          <C.ViewPDF>
            <C.LabelViewPDF>Visualização do PDF</C.LabelViewPDF>
            <iframe src={pdfUrl} style={{ width: "100%", height: "500px" }} />
          </C.ViewPDF>

          <C.ButtonPDF>
            <PDFDownloadLink
              document={memoizedPdfDocument}
              fileName="document.pdf"
            >
              {({ loading }) => (
                <C.LabelButtonPDF>
                  {loading ? "Gerando PDF..." : "Baixar PDF"}
                </C.LabelButtonPDF>
              )}
            </PDFDownloadLink>
          </C.ButtonPDF>
        </>
      )}
    </C.Container>
  );
}

export default FormInput;
