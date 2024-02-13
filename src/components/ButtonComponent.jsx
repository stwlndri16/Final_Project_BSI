import { TouchableOpacity, Text, Dimensions } from "react-native";

const size = Dimensions.get("window");

const ButtonComponent = ({ label, onPress, styles, textStyles }) => {
  return (
    <TouchableOpacity
      style={{
        ...styles,
        width: size.width - 24,
        paddingVertical: 12,
        borderRadius: 12,
      }}
      onPress={onPress}
    >
      <Text style={{ ...textStyles, textAlign: "center" }}>{label}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
