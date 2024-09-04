import React from "react";
import { Page, Text, Image, Document, View } from "@react-pdf/renderer";

import { styles } from "./styles";

const PdfDocument = ({ text, image }) => (
  <Document>
    <Page style={styles.page}>
      <Text style={styles.text}>{text}</Text>

      {image && <Image style={styles.image} src={image} />}
    </Page>
  </Document>
);

export default PdfDocument;
