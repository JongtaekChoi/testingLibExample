import Intro from '../screen/Intro';
import { NavigationNativeContainer } from '@react-navigation/native';
import React from 'react';
import { ScreenProps } from '../../types';
import Temp from '../screen/Temp';
import { createStackNavigator } from '@react-navigation/stack';
import TextSplitting from '../screen/TextSplitting';

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
        initialRouteName="TextSplitting"
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
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
}

export default RootNavigator;
