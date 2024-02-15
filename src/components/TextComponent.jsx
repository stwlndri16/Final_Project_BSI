import { Text } from "react-native";

const TextComponent = ({ children, fontSize, color, fontWeight, styles }) => {
  return (
    <Text style={{ ...styles, fontSize, color, fontWeight }}>{children}</Text>
  );
};

export default TextComponent;
