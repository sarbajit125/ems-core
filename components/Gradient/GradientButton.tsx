import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "react-native-paper";

const GradientButton = (props: GradientButtonProps) => {
    const theme = useTheme();
  return (
    <TouchableOpacity onPress={props.onPress}>
      <LinearGradient
        colors={props.colors}
        start={{ x: 0.1, y: 0.9 }}
        end={{ x: 0.9, y: 0.1 }}
        style= {{
            display: 'flex',
            flexDirection: 'row',
            padding: 14,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 16,
        }}
      >
        <Text style={{color: theme.colors.onPrimary}}>{props.title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientButton;

const styles = StyleSheet.create({});

interface GradientButtonProps {
  title: string;
  onPress: () => void;
  colors: string[];
}
