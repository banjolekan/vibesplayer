import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabScreen from "./Screens/BottomTabScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screens/HomeScreen";
import PdfScreen from "./Screens/PdfScreen";
import WordScreen from "./Screens/WordScreen";
import Upgrade from "./Screens/Upgrade";
 


// const App = () => {
  const Stack = createNativeStackNavigator();
export default function App() {
return(
  <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="botton"
     component={BottomTabScreen} 
     options={{headerShown: false}} />
    <Stack.Screen name="home" component={HomeScreen} options={{headerShown: false}} />
    <Stack.Screen name="pdf" component ={PdfScreen} options={{ headerShown: false }}/>
    <Stack.Screen name="Upgrade" component ={Upgrade} options={{ headerShown: false }}/>
    <Stack.Screen name="word" component={WordScreen} />
    



    </Stack.Navigator>
  </NavigationContainer>
);

}




