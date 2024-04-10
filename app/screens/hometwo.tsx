


import { StyleSheet, Text, View } from 'react-native'
import React, { useMemo } from 'react'
import { useTheme, MD3Theme } from 'react-native-paper';

const HomeTwoScreen = () => {
    const theme = useTheme();
    const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <View>
      <Text>hometwo</Text>
    </View>
  )
}

export default HomeTwoScreen

const createStyles = (theme: MD3Theme) => StyleSheet.create({})