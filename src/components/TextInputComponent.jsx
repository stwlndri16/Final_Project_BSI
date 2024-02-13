import { TextInput, StyleSheet, Dimensions } from "react-native";

const size = Dimensions.get("window");

const TextInputComponent = ({ value, onChange, isPassword, placeholder }) => {
  const handleInput = (value) => {
    onChange(value ?? "");
  };

  return (
    <TextInput
      value={value}
      onChange={handleInput}
      secureTextEntry={isPassword}
      placeholder={placeholder}
      style={styles.textInput}
    />
  );
};

export default TextInputComponent;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#fff",
    width: size.width - 24,
    fontSize: 14,
    padding: 14,
    borderRadius: 12,
  },
});
