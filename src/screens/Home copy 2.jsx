import { useEffect, useState } from "react";
import { View, Dimensions, Text, TouchableOpacity } from "react-native";
import Container from "../components/Container";
// import OptionComponent from "../components/OptionComponent";

const size = Dimensions.get("window");

const Home = () => {
  console.log('first')
  const [result, setResult] = useState("");
  const [playerOption, setPlayerOption] = useState("");
  const [computerOption, setComputerOption] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const choices = [{ name: "stone" }, { name: "paper" }, { name: "scissor" }];


  useEffect(() => {
    if (playerOption !== "" && computerOption !== "") {
      getResult();
    }
    console.log(computerOption, playerOption)
  }, [computerOption, playerOption])
  
  const getComputerOption = async () => {
    const options = ["stone", "paper", "scissor"];
    const index = await Math.floor(Math.random() * 3); // get random number (0, 1, 2)
    setComputerOption(options[index]);
  };

  const handlePlayerOption = (type) => {
    getComputerOption();
    setPlayerOption(type);
    // console.log(playerOption, computerOption);
    // getResult();
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
          <TouchableOpacity activeOpacity={1}>
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
              {computerOption == "stone" && (
                <Text style={{ fontSize: 48 }}>✊</Text>
              )}
              {computerOption == "paper" && (
                <Text style={{ fontSize: 48 }}>🖐</Text>
              )}
              {computerOption == "scissor" && (
                <Text style={{ fontSize: 48 }}>✌️</Text>
              )}
              {!["stone", "paper", "scissor"].includes(computerOption) && (
                <Text style={{ fontSize: 48 }}>?</Text>
              )}
            </View>
          </TouchableOpacity>
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
        {choices.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              handlePlayerOption(item.name);
              console.log('ini di button', computerOption, playerOption)
            }}
            activeOpacity={1}
          >
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
              {item.name == "stone" && <Text style={{ fontSize: 48 }}>✊</Text>}
              {item.name == "paper" && <Text style={{ fontSize: 48 }}>🖐</Text>}
              {item.name == "scissor" && (
                <Text style={{ fontSize: 48 }}>✌️</Text>
              )}
              {!["stone", "paper", "scissor"].includes(item.name) && (
                <Text style={{ fontSize: 48 }}>?</Text>
              )}
            </View>
          </TouchableOpacity>
        ))}
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
