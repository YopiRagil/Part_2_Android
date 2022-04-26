import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import TopNavbar from '../Component/Navbar';
import HomeScreen from '../Screen';
import {ROUTES} from './Routes';
import LoginScreen from '../Screen/Login/Login';
import UserScreen from '../Screen/User/User';
import MapScreen from '../Screen/User/Map';
import WebViewScreen from '../Screen/WebView';
import ProfileScreen from '../Screen/User/Profile';

const Stack = createNativeStackNavigator();

const MainOfNavigation = () => {
  const screenList = [
    {Component: LoginScreen, name: ROUTES.LOGIN, title: null},
    {Component: HomeScreen, name: ROUTES.HOME, title: ROUTES.HOME},
    {Component: UserScreen, name: ROUTES.USERS.USER, title: ROUTES.USERS.USER},
    {Component: MapScreen, name: ROUTES.USERS.MAP, title: ROUTES.USERS.MAP},
    {Component: WebViewScreen, name: ROUTES.WEBVIEW, title: ''},
    {Component: ProfileScreen, name: ROUTES.USERS.PROFILE, title: null},
  ];
  return (
    <React.Fragment>
      <Stack.Navigator initialRouteName={ROUTES.LOGIN}>
        {screenList.map((Screen, index) => (
          <Stack.Screen
            key={index}
            options={{
              headerShown: Screen.title !== null,
              title: Screen.title ? Screen.title : '',
              header: props => <TopNavbar {...props} />,
            }}
            name={Screen.name}
            component={Screen.Component}
          />
        ))}
      </Stack.Navigator>
    </React.Fragment>
  );
};

export default MainOfNavigation;
