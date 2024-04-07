import { View, Image, StyleSheet } from "react-native";
import { TextInput, Icon, Button, Text } from "react-native-paper";
import React from "react";
import { Fontisto, MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import GradientButton from "@/components/Gradient/GradientButton";
import { ColorDao } from "@/constants/Colors";

const LoginScreen = () => {
  const theme = useTheme();
  return (
    <LinearGradient
      colors={[ColorDao.topBackgroundGradient, ColorDao.bottomBackgroundGradient]}
      style={styles.background}
      start={{ x: 0.1, y: 0.9 }}
      end={{ x: 0.9, y: 0.1 }}
    >
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={{
            uri: "https://goldeneagle.comviva.com/idm-service/idm/v0/assets/images/Icon_comviva_orb.png",
          }}
        />
        <Text
          style={{
            alignSelf: "center",
            fontSize: 18,
            color: theme.colors.onPrimary,
            marginVertical: 6,
          }}
        >
          Welcome to EMS
        </Text>
        <View style={styles.textFieldView}>
          <TextInput
            label={"E-mail/Employee Id"}
            style={styles.textfield}
            mode="outlined"
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
            mode="outlined"
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
          <Button icon={"check-circle-outline"} style={styles.keepBtn}>
            Keep me Logged In
          </Button>
          <GradientButton title={"LOGIN"} onPress={function (): void {
            throw new Error("Function not implemented.");
          } } />
          <Button>Forgot password .. ?</Button>
        </View>
        <View style={styles.separatorView}>
          <View style={styles.separator} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.separator} />
        </View>
        <View style={styles.accountView}>
          <Text style={{color: theme.colors.onPrimary}}>Don't have an account?</Text>
          <GradientButton title="Create now" onPress={() => console.log("Registration flow")} />
        </View>
      </View>
    </LinearGradient>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {},
  logo: {
    width: 180,
    height: 180,
    alignSelf: "center",
    resizeMode: "contain",
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
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "baseline",
  },
  title: {
    alignSelf: "center",
    fontSize: 18,
    color: "grey",
    marginVertical: 6,
  },
  keepBtn: {
    alignSelf: "flex-start",
  },
  background: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    gap: 3,
  },
});
