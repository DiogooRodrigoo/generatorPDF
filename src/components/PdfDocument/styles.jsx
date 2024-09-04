import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 20,
  },
  header: {
    position: "fixed",
    left: 0,
    top: 0,
    right: 0,
    backgroundColor: "#f2f2f2",
    padding: 10,
    borderBottom: "1px solid #ccc",
    textAlign: "center",
  },
  content: {
    margin: 30,
  },
  imagePage: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  image: {
    width: "100%",
    height: "auto",
  },
  text: {
    fontSize: 12,
    textAlign: "justify",
  },
});
