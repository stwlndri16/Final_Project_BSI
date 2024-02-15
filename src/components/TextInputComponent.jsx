import { TextInput, StyleSheet, Dimensions } from "react-native";

const size = Dimensions.get("window");

const TextInputComponent = ({ value, onChange, isPassword, placeholder }) => {
  const handleInput = (newValue) => {
    onChange(newValue ?? "");
  };

  return (
    <TextInput
      value={value}
      onChangeText={handleInput}
      secureTextEntry={isPassword}
      placeholder={placeholder}
      style={styles.textInput}
    />
  );
};

export default TextInputComponent;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#D9D9D9",
    width: size.width - 24,
    fontSize: 14,
    padding: 14,
    borderRadius: 12,
  },
});
