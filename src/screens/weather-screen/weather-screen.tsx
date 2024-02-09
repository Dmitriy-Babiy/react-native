import { SearchInput } from "@/components";
import { StatusBar } from "expo-status-bar";
import { styles } from "./wather-screen.styles";
import { View, Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WeatherParametersDay, WeatherPredictionsList } from "@/features";
import { useEffect } from "react";
import api from "@/api";

const WEATHER_INFORMATION = [
  { icon: require("@assets/icons/wind.png"), text: "22km" },
  { icon: require("@assets/icons/drop.png"), text: "27%" },
  { icon: require("@assets/icons/sun.png"), text: "6:05 AM" },
];

const WeatherScreen = () => {
  useEffect(() => {
    async function fetchData() {
      try {
        const locations = await api().weatherForecast.getLocations('London');
        console.log(locations);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        blurRadius={70}
        style={styles.backgroundImg}
        source={require("@assets/images/bg.png")}
      />
      <SafeAreaView style={styles.container}>
        <SearchInput />

        <View style={styles.forecastSection}>
          <Text style={styles.city}>
            {`London, `}
            <Text style={styles.country}>United Kingdom</Text>
          </Text>

          <View style={styles.weatherImgWrapper}>
            <Image
              style={styles.weatherImg}
              source={require("@assets/images/partlycloudy.png")}
            />
          </View>

          <View style={styles.weatherToday}>
            <Text style={styles.degrees}>23&#176;</Text>
            <Text style={styles.description}>Partly cloudy</Text>
          </View>

          <WeatherParametersDay items={WEATHER_INFORMATION} />

          <WeatherPredictionsList />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default WeatherScreen;
