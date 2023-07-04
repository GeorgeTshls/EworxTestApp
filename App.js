import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import City from './sources/screens/City';
import Home from './sources/screens/Home';


const App = () => {

  const HomeStack = createStackNavigator();
  return (
    <NavigationContainer>
      <HomeStack.Navigator
        initialRouteName={"Home"}>
        <HomeStack.Screen
          name={"Home"}
          component={Home}
          screenOptions={{ gestureEnabled: false }}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name={"City"}
          component={City}
          screenOptions={{ gestureEnabled: false }}
          options={{ headerShown: false }}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );

}

export default App;
