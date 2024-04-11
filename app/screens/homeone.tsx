import React, { useEffect, useMemo, useState } from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import {
  useTheme,
  MD3Theme,
  Button,
  Text,
  Avatar,
  Icon,
  Card,
} from "react-native-paper";

import serviceData from "../utility/home_services.json";
import { HomeServiceDao } from "../models/uiModel";
import { getImageValueByKey } from "@/constants/ImageConstants";
import dayjs from "dayjs";
import { DateFormats } from "@/constants/CoreConstants";
import { ColorDao } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";

function HomeOneScreen() {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const [service, setServices] = useState<HomeServiceDao[]>([]);
  useEffect(() => {
    setServices(serviceData);
  }, []);
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[
          ColorDao.topBackgroundGradient,
          ColorDao.bottomBackgroundGradient,
        ]}
        style={styles.topView}
        start={{ x: 0.1, y: 0.9 }}
        end={{ x: 0.9, y: 0.1 }}
      >
        <View style={styles.navView}>
          <Image
            style={styles.logo}
            source={require("../../assets/images/Logo_Colour.png")}
          />
          <View style={styles.navRightView}>
            <TouchableHighlight style={styles.navRightItem}>
              <Icon source={"bell"} size={22} color={theme.colors.onPrimary} />
            </TouchableHighlight>
            <TouchableHighlight style={styles.navRightItem}>
              <Avatar.Image
                size={22}
                source={require("../../assets/images/user.png")}
              />
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.greetingView}>
          <Text variant="headlineSmall" style={styles.greetingText}> Hello Jon</Text>
          <Card style={styles.card}>
            <Card.Content>
              <Text>{dayjs().format(DateFormats.spacedData)}</Text>
              <Text>Hooray ! Today is your payday!, Get yourself a treat</Text>
            </Card.Content>
          </Card>
        </View>
      </LinearGradient>
      <View style={styles.serviceView}>
        <View style={styles.gridView}>
          {service.map((item) => (
            <TouchableHighlight key={item.serviceCode}>
              <View style={styles.gridItem}>
                <Image
                  style={styles.gridItemImage}
                  source={getImageValueByKey(item.serviceImg)}
                />
                <Text style={styles.gridItemName} variant="labelMedium">
                  {item.serviceName}
                </Text>
              </View>
            </TouchableHighlight>
          ))}
        </View>
      </View>
      <LinearGradient
        colors={[
          ColorDao.topBackgroundGradient,
          ColorDao.bottomBackgroundGradient,
        ]}
        start={{ x: 0.1, y: 0.9 }}
        end={{ x: 0.9, y: 0.1 }}
        style={styles.bottomView}
      >
        <Image
          style={styles.bottomBanner}
          source={{
            uri: "https://goldeneagle.comviva.com/idm-service/idm/v0/assets/images/Icon_comviva_orb.png",
          }}
        />
        <View style={styles.bannerTextView}>
          <Text variant="headlineSmall" style={styles.greetingText}>Refer & Earn!</Text>
          <Text variant="bodyMedium" style={styles.greetingText}>Spread the word we'll reward you</Text>
          <Button mode="contained">Click to share Now</Button>
        </View>
      </LinearGradient>
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
      borderBottomLeftRadius: 12,
      borderBottomRightRadius: 12,
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
      alignItems: "center",
    },
    navRightItem: {
      padding: 3,
    },
    logo: {
      width: 140,
      height: 40,
      resizeMode: "contain",
    },
    bottomView: {
      height: 140,
      flexDirection: "row",
      padding: 2,
      marginTop: 8,
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
    },
    bottomBanner: {
      width: 120,
      height: 80,
      alignSelf: "center",
      resizeMode: "contain",
    },
    serviceView: {
      flex: 1,
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
      height: 80,
      padding: 14,
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
    greetingView: {
      paddingLeft: 16,
      paddingRight: 16,
      flexDirection: "column",
    },
    card: {
      marginTop: 8,
      borderRadius: 4,
    },
    bannerTextView: {
      flexDirection: "column",
      gap: 6,
      justifyContent: "center",
    },
    greetingText: {
      color: theme.colors.onPrimary,
    }
  });
