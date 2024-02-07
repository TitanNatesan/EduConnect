// App.js
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './pages/home';
import LoginScreen from './pages/login';
import FOEScreen from './pages/FOEScreen';
import AboutScreen from './pages/About';
import DepartmentScreen from './pages/Departments';
import YearScreen from './pages/Year';
import SubjectScreen from './pages/Subjects';
import TopicScreen from './pages/Topics';
import DashboardScreen from './pages/Dashboard';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="FOE" component={FOEScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Department" component={DepartmentScreen} />
        <Stack.Screen name="Year" component={YearScreen} />
        <Stack.Screen name="Subject" component={SubjectScreen} />
        <Stack.Screen name="Topic" component={TopicScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
initialRouteName="Home"