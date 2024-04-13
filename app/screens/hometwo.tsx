import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import {
  useTheme,
  MD3Theme,
  Avatar,
  Card,
  Icon,
  Text,
} from "react-native-paper";
import { ColorDao, generateRadomBGColors } from "@/constants/Colors";
import { DateFormats } from "@/constants/CoreConstants";
import dayjs from "dayjs";
import { LinearGradient } from "expo-linear-gradient";
import serviceData from "../utility/home_services.json";
import { HomeServiceDao } from "../models/uiModel";
import { getImageValueByKey } from "@/constants/ImageConstants";
import { MaterialIcons } from "@expo/vector-icons";

const HomeTwoScreen = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const [service, setServices] = useState<HomeServiceDao[]>([]);
  useEffect(() => {
    setServices(serviceData);
  }, []);
  return (
    <ScrollView>
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
          <Text variant="headlineSmall" style={styles.greetingText}>
            {" "}
            Hello Jon
          </Text>
          <Card style={styles.card}>
            <Card.Content>
              <Text>{dayjs().format(DateFormats.spacedData)}</Text>
              <Text>Hooray ! Today is your payday!, Get yourself a treat</Text>
            </Card.Content>
          </Card>
        </View>
      </LinearGradient>
      <View style={styles.servicesView}>
        <View style={styles.gridView}>
          {service.map((item) => (
            <TouchableHighlight key={item.serviceCode}>
              <LinearGradient
                start={{ x: 0.1, y: 0.9 }}
                end={{ x: 1.0, y: 1.0 }}
                colors={generateRadomBGColors()}
                style={styles.serviceCard}
              >
                <Text
                  variant="labelLarge"
                  style={{ color: theme.colors.onPrimary, padding: 5 }}
                >
                  {item.serviceName}
                </Text>
                <View style={styles.serviceBottom}>
                  <Image source={getImageValueByKey(item.serviceImg)} style={styles.serviceImage} />
                  <MaterialIcons
                    name="arrow-downward"
                    size={22}
                    color={theme.colors.onPrimary}
                  />
                </View>
              </LinearGradient>
            </TouchableHighlight>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeTwoScreen;

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
    greetingView: {
      paddingLeft: 16,
      paddingRight: 16,
      flexDirection: "column",
    },
    greetingText: {
      color: theme.colors.onPrimary,
    },
    card: {
      marginTop: 8,
      borderRadius: 4,
    },
    servicesView: {
      flex: 1,
    },
    gridView: {
      flexDirection: "row",
      flexWrap: "wrap",
      flex: 2,
      gap: 8,
      padding: 4,
    },
    serviceCard: {
      height: 120,
      minWidth: 180,
      flexDirection: 'column',
      padding: 5,
      justifyContent: 'space-between',
      borderRadius: 12,
    },
    serviceImage: {
      width: 25,
      height: 25,
      resizeMode: "contain",
    },
    serviceBottom: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 5,
    }
  });
