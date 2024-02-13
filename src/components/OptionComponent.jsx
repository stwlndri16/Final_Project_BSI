import { View, Text, TouchableOpacity } from "react-native";

const OptionComponent = ({ type, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={1}>
      <View
        style={{
          width: 100,
          height: 100,
          borderRadius: 99,
          alignItems: "center",
          justifyContent: "center",
          borderColor: "#000",
          borderWidth: 2,
          padding: 18,
          backgroundColor: "#fff",
          marginHorizontal: 10,
        }}
      >
        {type == "stone" && <Text style={{ fontSize: 48 }}>✊</Text>}
        {type == "paper" && <Text style={{ fontSize: 48 }}>🖐</Text>}
        {type == "scissor" && <Text style={{ fontSize: 48 }}>✌️</Text>}
        {!["stone", "paper", "scissor"].includes(type) && (
          <Text style={{ fontSize: 48 }}>?</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default OptionComponent;
