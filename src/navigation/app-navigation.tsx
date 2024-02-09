import { WeatherScreen } from "@/screens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Weather"
          options={{ headerShown: false }}
          component={WeatherScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
