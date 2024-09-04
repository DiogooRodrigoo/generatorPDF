import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 20,
  },
  header: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: 300,
    marginBottom: 10,
    backgroundColor: "#f4f4f4",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1,
    padding: 10,
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
    fontSize: 18,
    textAlign: "justify",
  },
});
