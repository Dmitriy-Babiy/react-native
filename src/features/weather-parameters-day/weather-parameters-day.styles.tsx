import { Colors } from "@/styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  parameter: {
    gap: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 24,
    height: 24,
  },
  text: {
    color: Colors.white,
  },
});
