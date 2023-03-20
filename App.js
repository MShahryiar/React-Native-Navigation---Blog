import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//importing different pages
import HomePage from "./screens/Home"
import ContactPage from "./screens/Contact"
import AboutPage from "./screens/About"
import MainScreen from "./screens/Main"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
<NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen
        name="mainscreen"
        component={MainScreen}
        options={{headerShown:false}}
      />
    {/* <Stack.Screen
        name="home"
        component={HomePage}
        options={{headerShown:false}}
      />  */}
      <Stack.Screen
        name="home"
        component={HomePage}
        options={{headerShown:true, title:'Home',
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      
      }}
      /> 
      <Stack.Screen
        name="about"
        component={AboutPage}
        options={{headerShown:false}}      
      /> 
      <Stack.Screen
        name="contact"
        component={ContactPage}
        options={{headerShown:false}}
      />
    </Stack.Navigator>
</NavigationContainer>
  );
}
