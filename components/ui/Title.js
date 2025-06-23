import { Platform, StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    // borderWidth: Platform.OS === "android" ? 2 : 0,
    borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderColor: Colors.white,
    color: Colors.white,
    fontSize: 24,
    textAlign: "center",
    padding: 12,
    maxWidth: "80%",
  },
});
