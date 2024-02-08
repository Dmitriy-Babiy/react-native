import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Image, StyleSheet, Text } from "react-native";
import { SearchInput } from "@/components";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        blurRadius={70}
        style={styles.backgroundImg}
        source={require("@assets/images/bg.png")}
      />
      <SafeAreaView>
        <SearchInput />
        <View style={{ flex: 1 }}>
          <Text>123</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, position: "relative" },
  backgroundImg: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});

export default HomeScreen;
