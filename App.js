import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Ex1 from './Ex1';
import Ex2 from './Ex2';
import Ex3 from './Ex3';
import Ex4 from './Ex4';
import Ex5 from './Ex5';
import Ex6 from './Ex6';
import Ex7 from './Ex7';
import Ex8 from './Ex8';



const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Ex1', title: 'Ex1', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'Ex2', title: 'Ex2', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'Ex3', title: 'Ex3', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'Ex4', title: 'Ex4', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'Ex5', title: 'Ex5', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'Ex6', title: 'Ex6', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'Ex7', title: 'Ex7', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'Ex8', title: 'Ex8', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    Ex1: Ex1,
    Ex2: Ex2,
    Ex3: Ex3,
    Ex4: Ex4,
    Ex5:Ex5,
    Ex6: Ex6,
    Ex7: Ex7,
    Ex8: Ex8,
  });

  return (
    <SafeAreaProvider>
       <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
    </SafeAreaProvider>
   
  );
};

export default MyComponent;