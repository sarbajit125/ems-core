import { View, Image, StyleSheet } from "react-native";
import { TextInput, Icon, Button } from "react-native-paper";
import React from "react";
import { Fontisto, MaterialCommunityIcons } from "@expo/vector-icons";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/images/Logo_Colour.png")}
      />
      <TextInput
        label={"E-mail/Employee Id"}
        style={styles.textfield}
        left={<MaterialCommunityIcons name="email" size={24} color="black" />}
      />
      <TextInput
        label={"PIN"}
        secureTextEntry={true}
        style={styles.textfield}
        left={<Fontisto name="locked" size={24} color="black" />}
      />
      <Button icon={'check-circle-outline'}>Keep me Logged In</Button>
      <Button mode="contained">LOGIN</Button>

    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection:"column",
    gap: 3,
  },
  logo: {
    width: 220,
    height: 80,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  textfield: {
    height:56,
    marginTop:8,
    padding:6,
  }
});
