import { View, StyleSheet, ActivityIndicator } from "react-native";
import Colors from "../../constants/colors";

export default function Loader({ children, isFetching }) {
  return isFetching ? (
    <View style={styles.container}>
      <ActivityIndicator color="white" size="large" />
    </View>
  ) : (
    children
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: Colors.primary700,
  },
});
