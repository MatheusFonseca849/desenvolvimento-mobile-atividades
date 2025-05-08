import React from "react";

import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CrestScreen from "../screens/CrestScreen";
import PlayersScreen from "../screens/PlayersScreen";
import TitlesScreen from "../screens/TitlesScreen";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="CrestScreen"
        component={CrestScreen}
        options={{
          title: "Brasão",
          drawerIcon: (color, size) => (
            <Ionicons name="shield" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="PlayersScreen"
        component={PlayersScreen}
        options={{
          title: "Jogadores",
          drawerIcon: (color, size) => (
            <Ionicons name="person-circle" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="TitlesScreen"
        component={TitlesScreen}
        options={{
          title: "Títulos",
          drawerIcon: (color, size) => (
            <Ionicons name="trophy" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
