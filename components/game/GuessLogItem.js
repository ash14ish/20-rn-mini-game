import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const GuessLogItem = ({ roundNumber, guess }) => {
  return (
    <View style={styles.listItem}>
      <Text># {roundNumber}</Text>
      <Text>Opponent's Guess : {guess}</Text>
    </View>
  );
};

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
});
