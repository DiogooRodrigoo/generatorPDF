import axios from "axios";

// FUNÇÃO CRIADA SOMENTE PARA EXEMPLO, NÃO ESTA CONECTANDO EM NENHUMA API
const uploadPDF = async (pdfBlob) => {
  try {
    const formData = new FormData();
    formData.append("file", pdfBlob, "document.pdf");

    const response = await axios.post("/api/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Erro ao enviar PDF:", error);
    throw error;
  }
};

export default uploadPDF;
