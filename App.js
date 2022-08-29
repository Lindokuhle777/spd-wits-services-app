import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/Splash/Splash';
import Landing from './src/Auth/Landing';
import Home from './src/StudentsApp/Home/Home';
import Signin from './src/Auth/Signup';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} 
        options ={{header: ()=> null}}/>
        <Stack.Screen name = "Landing" component={Landing}
        options = {{header: ()=> null}}/>
        <Stack.Screen name = "Home" component={Home}
        options = {{header: ()=> null}}/>
        <Stack.Screen name = "Signin" component={Signin}
        options = {{header: ()=> null}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
