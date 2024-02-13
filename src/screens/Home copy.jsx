import { useState } from "react";
import { View, Dimensions, Text } from "react-native";
import Container from "../components/Container";
import OptionComponent from "../components/OptionComponent";

const size = Dimensions.get("window");

const Home = () => {
  const [result, setResult] = useState("");
  const [playerOption, setPlayerOption] = useState("");
  const [computerOption, setComputerOption] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const choices = [
    { name: "batu" },
    { name: "gunting" },
    { name: "kertas" },
  ];

  const getComputerOption = () => {
    const options = ["stone", "paper", "scissor"];
    const index = Math.floor(Math.random() * 3); // get random number (0, 1, 2)
    setComputerOption(options[index]);
  };

  const handlePlayerOption = (type) => {
    getComputerOption();
    setPlayerOption(type);
    console.log(playerOption, computerOption);
    getResult();
  };

  const getResult = () => {
    if (playerOption && computerOption && playerOption == computerOption) {
      setResult("SERI");
    } else if (
      (playerOption == "stone" && computerOption == "scissor") ||
      (playerOption == "paper" && computerOption == "stone") ||
      (playerOption == "scissor" && computerOption == "paper")
    ) {
      setResult("MENANG");
      setPlayerScore((prev) => prev + 1);
    } else {
      setResult("KALAH");
      setComputerScore((prev) => prev + 1);
    }
  };

  return (
    <Container
      styles={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "red",
          flex: 1,
          width: size.width,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {result && playerOption && computerOption && (
          <OptionComponent type={computerOption} />
        )}
      </View>
      <View
        style={{
          backgroundColor: "blue",
          flex: 1,
          width: size.width,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <OptionComponent
          type="stone"
          onPress={() => {
            handlePlayerOption("stone");
          }}
        />
        <OptionComponent
          type="paper"
          onPress={() => {
            handlePlayerOption("paper");
          }}
        />
        <OptionComponent
          type="scissor"
          onPress={() => {
            handlePlayerOption("scissor");
          }}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          position: "absolute",
        }}
      >
        <View
          style={{
            width: size.width * 0.2,
            height: 80,
            backgroundColor: "yellow",
            borderRadius: 14,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 32, fontWeight: "500" }}>
            {playerScore.toString()}
          </Text>
        </View>
        <View
          style={{
            width: size.width * 0.4,
            height: 80,
            marginHorizontal: 10,
            backgroundColor: "yellow",
            borderRadius: 14,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 32, fontWeight: "500" }}>{result}</Text>
        </View>
        <View
          style={{
            width: size.width * 0.2,
            height: 80,
            backgroundColor: "yellow",
            borderRadius: 14,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 32, fontWeight: "500" }}>
            {computerScore.toString()}
          </Text>
        </View>
      </View>
    </Container>
  );
};

export default Home;
