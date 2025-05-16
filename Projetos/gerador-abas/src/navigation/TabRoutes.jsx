import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import JogoDoBichoScreen from "../screens/JogoDoBichoScreen";
import MegaSenaScreen from "../screens/MegaSenaScreen";


const TabRoutes = () => {
  
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="MegaSena" 
        component={MegaSenaScreen} 
        options={{ 
          title: "Mega-Sena" 
        }} 
      />
      <Tab.Screen 
        name="JogoDoBicho" 
        component={JogoDoBichoScreen} 
        options={{ 
          title: "Jogo do Bicho" 
        }} 
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
