import { Colors, Typography } from "@/styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1 },
  backgroundImg: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  forecastSection: {
    marginHorizontal: 16,
    justifyContent: "space-around",
    display: "flex",
    flex: 1,
  },
  city: {
    ...Typography.body_xxl_bold,
    color: Colors.white,
    textAlign: "center",
  },
  country: {
    ...Typography.body_l,
    color: Colors.gray,
    textAlign: "center",
  },
  weatherImgWrapper: {
    flexDirection: "row",
    justifyContent: "center",
  },
  weatherImg: {
    width: 200,
    height: 200,
  },
  weatherToday: {
    display: "flex",
    alignItems: "center",
  },
  degrees: {
    ...Typography.title_medium,
    marginLeft: 16,
    color: Colors.white,
  },
  description: {
    ...Typography.body_l,
    color: Colors.white,
    letterSpacing: 0.5,
  },
});
