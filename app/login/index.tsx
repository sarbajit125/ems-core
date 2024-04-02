import { View, Image, StyleSheet } from "react-native";
import { TextInput, Icon, Button, Text } from "react-native-paper";
import React from "react";
import { Fontisto, MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "react-native-paper";

const LoginScreen = () => {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/images/Logo_Colour.png")}
      />
      <Text style={styles.title}> Welcome to EMS </Text>
      <View style={styles.textFieldView}>
        <TextInput
          label={"E-mail/Employee Id"}
          style={styles.textfield}
          theme={{ roundness: 20 }}
          left={
            <TextInput.Icon
              icon={() => (
                <View
                  style={{
                    flex: 1,
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="email"
                    size={24}
                    color={theme.colors.primary}
                  />
                </View>
              )}
            />
          }
        />
        <TextInput
          label={"PIN"}
          secureTextEntry={true}
          style={styles.textfield}
          theme={{ roundness: 20 }}
          left={
            <TextInput.Icon
              icon={() => (
                <View
                  style={{
                    flex: 1,
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <Fontisto
                    name="locked"
                    size={24}
                    color={theme.colors.primary}
                  />
                </View>
              )}
            />
          }
        />
      </View>
      <View style={styles.textFieldView}>
        <Button icon={"check-circle-outline"}>Keep me Logged In</Button>
        <Button mode="contained">LOGIN</Button>
        <Button>Forgot password .. ?</Button>
      </View>
      <View style={styles.separatorView}>
        <View style={styles.separator} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.separator} />
      </View>
      <View style={styles.accountView}>
        <Text>Don't have an account?</Text>
        <Button mode="contained">Create now</Button>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    gap: 3,
  },
  logo: {
    width: 220,
    height: 80,
    alignSelf: "center",
  },
  separator: {
    height: 1,
    backgroundColor: "grey",
    marginLeft: 6,
    flex: 1,
  },
  textfield: {
    marginTop: 8,
    padding: 6,
  },
  textFieldView: {
    marginHorizontal: 16,
    marginTop: 6,
  },
  separatorView: {
    marginHorizontal: 16,
    marginTop: 6,
    flexDirection: "row",
    alignItems: "center",
    height: 40,
  },
  orText: {
    fontSize: 16,
    marginHorizontal: 4,
    padding: 4,
    color: "grey",
  },
  accountView: {
    marginHorizontal: 16,
    marginTop: 6,
    flexDirection: 'row',
    gap: 8,
    alignItems: 'baseline',
  },
  title: {
    alignSelf: 'center',
    fontSize: 18,
    color: 'grey',
  }
});
