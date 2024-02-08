import { Colors } from "@/styles";
import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  MagnifyingGlassIcon,
  MapPinIcon,
} from "react-native-heroicons/outline";

export const SearchInput = () => {
  const [isShow, setIsShow] = useState<boolean>(true);
  const [locations, setLocations] = useState<Array<Number>>([1, 2, 3]);

  const handleShowInput = () => {
    setIsShow(!isShow);
  };

  const handleLibation = (loc) => {
    console.log(123);
  };

  return (
    <View style={styles().wrapper}>
      <View style={[styles(isShow).inputWrapper]}>
        {isShow && (
          <TextInput
            style={styles().input}
            placeholderTextColor={"lightgray"}
            placeholder="Search cite"
          />
        )}
        <Pressable onPress={handleShowInput} style={styles().inputIcon}>
          <MagnifyingGlassIcon size="24" color={"white"} />
        </Pressable>
      </View>
      {isShow && locations && (
        <View style={styles().options}>
          {locations.map((location, index) => (
            <Pressable
              key={index}
              style={styles().option}
              onPress={handleLibation}
            >
              <MapPinIcon size={24} color={"white"} />
              <Text style={styles().optionText}>United Kingdom</Text>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = (isShow?: boolean) =>
  StyleSheet.create({
    wrapper: {
      marginTop: 16,
      marginLeft: 16,
      marginRight: 16,
    },
    inputWrapper: {
      borderRadius: 100,
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "flex-end",
      backgroundColor: isShow ? Colors.opacityWhite(0.2) : "transparent",
    },
    input: {
      flex: 1,
      padding: 16,
      height: 48,
      color: Colors.opacityWhite(1),
    },
    inputIcon: {
      padding: 16,
      borderRadius: 100,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: Colors.opacityWhite(0.3),
    },
    options: {
      position: "absolute",
      flex: 1,
      width: "100%",
      gap: 16,
      marginTop: 64,
      borderRadius: 24,
      paddingVertical: 16,
      backgroundColor: Colors.opacityWhite(0.2),
    },
    option: {
      gap: 8,
      alignItems: "center",
      flexDirection: "row",
      paddingHorizontal: 16,
    },
    optionText: {
      color: Colors.opacityWhite(1),
    },
  });
