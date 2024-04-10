import React, { useEffect, useMemo, useState } from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import { useTheme, MD3Theme, Button, Text } from "react-native-paper";

import serviceData from "../utility/home_services.json";
import { HomeServiceDao } from "../models/uiModel";

function HomeOneScreen() {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const [service, setServices] = useState<HomeServiceDao[]>([]);
  useEffect(() => {
    setServices(serviceData);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.topView}></View>
      <View style={styles.serviceView}>
        <View style={styles.gridView}>
          {service.map((item) => (
            <TouchableHighlight key={item.serviceCode}>
              <View style={styles.gridItem}>
                <Image
                  style={styles.gridItemImage}
                  source={require(`../../assets/images/tax.png`)}
                />
                <Text style={styles.gridItemName} variant="labelMedium">
                  {item.serviceName}
                </Text>
              </View>
            </TouchableHighlight>
          ))}
        </View>
      </View>
      <View style={styles.bottomView}>
        <Image
          style={styles.bottomBanner}
          source={{
            uri: "https://goldeneagle.comviva.com/idm-service/idm/v0/assets/images/Icon_comviva_orb.png",
          }}
        />
        <View>
          <Text variant="headlineMedium">Refer & Earn!</Text>
          <Text variant="bodyMedium">Spread the word we'll reward you</Text>
          <Button mode="contained">Click to share Now</Button>
        </View>
      </View>
    </View>
  );
}

export default HomeOneScreen;
const createStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    topView: {
      height: 200,
    },
    navView: {
      marginTop: 32,
      flexDirection: "row",
      padding: 5,
      justifyContent: "space-between",
      alignItems: "center",
    },
    navRightView: {
      flexDirection: "row",
      padding: 4,
      alignItems: "baseline",
    },
    logo: {
      width: 140,
      height: 80,
      resizeMode: "contain",
    },
    bottomView: {
      height: 140,
      backgroundColor: "blue",
      flexDirection: "row",
    },
    bottomBanner: {
      width: 120,
      resizeMode: "contain",
    },
    serviceView: {
      flex: 1,
      backgroundColor: "yellow",
    },
    gridView: {
      flexDirection: "row",
      flexWrap: "wrap",
      flex: 3,
      gap: 8,
      padding: 8,
    },
    gridItem: {
      flexDirection: "column",
      gap: 8,
      height: 60,
      padding: 16,
      margin: 16,
    },
    gridItemImage: {
      width: 50,
      height: 50,
    },
    gridItemName: {
      width: 50,
      flexWrap: "wrap",
    },
    serviceTitle: {
      padding: 4,
      margin: 4,
      alignSelf: "center",
    },
  });
