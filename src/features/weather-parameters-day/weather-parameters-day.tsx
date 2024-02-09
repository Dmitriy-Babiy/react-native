import { styles } from "./weather-parameters-day.styles";
import { Image, ImageSourcePropType, Text, View } from "react-native";

interface IWeatherParametersDayProps {
  items: Array<{ icon: ImageSourcePropType; text: string }>;
}

export const WeatherParametersDay = ({ items }: IWeatherParametersDayProps) => {
  return (
    <View style={styles.wrapper}>
      {items.map((information, index) => (
        <View key={index} style={styles.parameter}>
          <Image style={styles.image} source={information.icon} />
          <Text style={styles.text}>{information.text}</Text>
        </View>
      ))}
    </View>
  );
};
