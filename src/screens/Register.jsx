import { useState } from "react";
import { View } from "react-native";
import Container from "../components/Container";
import TextComponent from "../components/TextComponent";
import TextInputComponent from "../components/TextInputComponent";
import ButtonComponent from "../components/ButtonComponent";

const Register = () => {
  const [name, setName] = useState("");
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
        <TextComponent styles={{ marginBottom: 8 }}>Name</TextComponent>
        <TextInputComponent
          placeholder="Masukkan nama lengkap"
          value={name}
          onChange={setName}
        />
      </View>

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
          label="Register"
          styles={{ backgroundColor: "#00ff" }}
          textStyles={{ color: "#fff", fontSize: 18, fontWeight: "500" }}
        />
      </View>
    </Container>
  );
};

export default Register;
