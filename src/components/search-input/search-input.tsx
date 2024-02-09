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
  const [isShow, setIsShow] = useState<boolean>(false);
  const [locations, setLocations] = useState<Array<Number>>([1, 2, 3]);

  const handleShowInput = () => {
    setIsShow(!isShow);
  };

  const handleLibation = (loc) => {
    console.log(123);
  };

  return (
    <View style={styles.wrapper}>
      <View
        style={[
          styles.inputWrapper,
          !isShow && { backgroundColor: "transparent" },
        ]}
      >
        {isShow && (
          <TextInput
            style={styles.input}
            placeholder="Search cite"
            placeholderTextColor={Colors.gray}
          />
        )}
        <TouchableOpacity onPress={handleShowInput} style={styles.inputIcon}>
          <MagnifyingGlassIcon size="24" color={Colors.white} />
        </TouchableOpacity>
      </View>
      {isShow && locations && (
        <View style={styles.options}>
          {locations.map((location, index) => (
            <TouchableOpacity
              key={index}
              style={styles.option}
              onPress={handleLibation}
            >
              <MapPinIcon size={24} color={Colors.white} />
              <Text style={styles.optionText}>United Kingdom</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    zIndex: 999,
    marginTop: 16,
    marginHorizontal: 16,
  },
  inputWrapper: {
    borderRadius: 24,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-end",
    backgroundColor: Colors.white20,
  },
  input: {
    flex: 1,
    padding: 16,
    height: 48,
    color: Colors.white,
  },
  inputIcon: {
    padding: 16,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.white30,
  },
  options: {
    flex: 1,
    gap: 16,
    top: 64,
    width: "100%",
    borderRadius: 24,
    paddingVertical: 16,
    position: "absolute",
    backgroundColor: Colors.green,
  },
  option: {
    gap: 8,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 16,
  },
  optionText: {
    color: Colors.white,
  },
});
