import React from "react";
import { Page, Text, Image, Document, View } from "@react-pdf/renderer";

import { styles } from "./styles";

const PdfDocument = ({ title, text, image }) => (
  <Document>
    {text && (
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text>{title}</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>{text}</Text>
        </View>
      </Page>
    )}

    {image && (
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text>{title}</Text>
        </View>
        <View style={styles.imagePage}>
          <Image style={styles.image} src={image} />
        </View>
      </Page>
    )}
  </Document>
);

export default PdfDocument;
