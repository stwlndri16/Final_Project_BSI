import { useState } from "react";
import { View } from "react-native";
import Container from "../components/Container";
import TextInputComponent from "../components/TextInputComponent";
import TextComponent from "../components/TextComponent";
import ButtonComponent from "../components/ButtonComponent";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container
      styles={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* username input */}
      <View style={{ marginBottom: 16 }}>
        <TextComponent styles={{ marginBottom: 8 }}>Username</TextComponent>
        <TextInputComponent
          placeholder="Masukkan username"
          value={username}
          onChange={setUsername}
        />
      </View>

      {/* password input */}
      <View style={{ marginBottom: 16 }}>
        <TextComponent styles={{ marginBottom: 8 }}>Password</TextComponent>
        <TextInputComponent
          placeholder="Masukkan password"
          value={password}
          onChange={setPassword}
        />
      </View>

      {/* login button */}
      <View style={{ marginTop: 32 }}>
        <ButtonComponent
          label="Login"
          styles={{ backgroundColor: "#00ff" }}
          textStyles={{ color: "#fff", fontSize: 18, fontWeight: "500" }}
        />
        <View style={{ marginVertical: 10 }} />
        <ButtonComponent
          label="Register"
          styles={{ borderColor: "#00ff", borderWidth: 1 }}
          textStyles={{ color: "#00ff", fontSize: 18, fontWeight: "500" }}
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </Container>
  );
};

export default Login;
