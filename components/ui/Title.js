import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    borderWidth: 2,
    borderColor: Colors.white,
    color: Colors.white,
    fontSize: 24,
    textAlign: "center",
    padding: 12,
  },
});
