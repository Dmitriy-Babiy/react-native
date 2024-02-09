import { Image, ScrollView, Text, View } from "react-native";
import { CalendarDaysIcon } from "react-native-heroicons/outline";
import { Colors } from "@/styles";
import { styles } from "./weather-predictions-list.styles";

const DAYS = [
  { day: "Monday", degrees: "24.6" },
  { day: "Tuesday", degrees: "35.2" },
  { day: "Wednesday", degrees: "23.4" },
  { day: "Thursday", degrees: "12" },
  { day: "Friday", degrees: "23.6" },
  { day: "Saturday", degrees: "23.7" },
  { day: "Sunday", degrees: "23.1" },
];

export const WeatherPredictionsList = () => {
  return (
    <View>
      <View style={styles.calendar_wrapper}>
        <CalendarDaysIcon size={24} color={Colors.white} />
        <Text style={styles.calendar_text}>Daily forecast</Text>
      </View>

      <ScrollView
        horizontal
        contentContainerStyle={{ gap: 16 }}
        showsHorizontalScrollIndicator={false}
      >
        {DAYS.map((item) => (
          <View key={item.day} style={styles.card_wrapper}>
            <Image
              style={styles.card_image}
              source={require("@assets/images/heavyrain.png")}
            />
            <Text style={styles.card_day}>{item.day}</Text>
            <Text style={styles.card_degrees}>{item.degrees}&#176;</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
