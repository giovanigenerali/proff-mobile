import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8257E5",
    justifyContent: "center",
    padding: 40,
  },
  banner: {
    width: "100%",
    resizeMode: "contain",
  },
  title: {
    fontFamily: "Poppins_400Regular",
    fontSize: 20,
    color: "#fff",
    lineHeight: 30,
    marginTop: 80,
  },
  titleBold: {
    fontFamily: "Poppins_600SemiBold",
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 40,
    justifyContent: "space-between",
  },
  button: {
    height: 150,
    width: "48%",
    borderRadius: 8,
    padding: 24,
    justifyContent: "space-between",
  },
  buttonPrimary: {
    backgroundColor: "#9871F5",
  },
  buttonSecondary: {
    backgroundColor: "#04D361",
  },
  buttonText: {
    fontFamily: "Archivo_700Bold",
    fontSize: 20,
    color: "#fff",
  },
  totalConnections: {
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
    color: "#D4C2FF",
    lineHeight: 20,
    maxWidth: "48 %",
    marginTop: 40,
  },
});

export default styles;
