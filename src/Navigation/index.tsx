import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../Screen';
// import {useSelector, useDispatch} from 'react-redux';

const Stack = createNativeStackNavigator();

const MainOfNavigation = () => {
  // const dispatch = useDispatch();
  // const state = useSelector((state: IState) => state);

  return (
    <React.Fragment>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </React.Fragment>
  );
};

export default MainOfNavigation;
