import Intro from '../screen/Intro';
import { NavigationNativeContainer } from '@react-navigation/native';
import React from 'react';
import { ScreenProps } from '../../types';
import Temp from '../screen/Temp';
import { createStackNavigator } from '@react-navigation/stack';
import TextSplitting from '../screen/TextSplitting';
import Modal from '../screen/Modal';

const Stack = createStackNavigator();

function RootNavigator({
  screenProps,
}: {
  screenProps: ScreenProps;
}): React.ReactElement {
  const { theme } = screenProps;
  return (
    <NavigationNativeContainer>
      <Stack.Navigator
        initialRouteName="Intro"
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.background,
          },
          headerTitleStyle: { color: theme.fontColor },
          headerTintColor: theme.tintColor,
        }}
      >
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Temp" component={Temp} />
        <Stack.Screen name="TextSplitting" component={TextSplitting} />
        <Stack.Screen name="Modal" component={Modal} />
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
}

export default RootNavigator;
