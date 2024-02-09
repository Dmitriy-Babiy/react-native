import { Colors, Typography } from "@/styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  calendar_wrapper: {
    gap: 8,
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 16,
  },
  calendar_text: {
    ...Typography.body_l,
    color: Colors.white,
  },
  card_wrapper: {
    gap: 4,
    alignItems: "center",
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 24,
    backgroundColor: Colors.white10,
  },
  card_image: {
    width: 32,
    height: 32,
  },
  card_day: {
    ...Typography.body_m,
    color: Colors.white,
  },
  card_degrees: {
    ...Typography.body_xl_medium,
    color: Colors.white,
  },
});
