import { StyleSheet, Text, View } from "react-native";
import React, { useMemo } from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/navigation";
import { MD3Theme, useTheme } from "react-native-paper";
const HomeScreen = ({ route, navigation }: HomeScreenInitialProps) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const createStyles = (theme: MD3Theme) => StyleSheet.create({})

type HomeScreenInitialProps = NativeStackScreenProps<
  RootStackParamList,
  "Home"
>;