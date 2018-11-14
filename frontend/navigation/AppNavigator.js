import React from 'react'
import { Platform } from 'react-native'
import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
} from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import PostAdScreen from '../screens/PostAdScreen'
import AdScreen from '../screens/AdScreen'
import ProfileScreen from '../screens/ProfileScreen'
import AuthLoadingScreen from '../screens/AuthLoadingScreen'
import AuthScreen from '../screens/AuthScreen'
import ImageUpload from '../components/ImageUpload'
import CongratulationsScreen from '../screens/CongratulationsScreen'
import { InputPriceScreen } from '../screens/InputPriceScreen'

const HomeStack = createStackNavigator({
  HomeScreenRoute: HomeScreen,
  AdScreenRoute: AdScreen,
})

HomeStack.navigationOptions = {
  tabBarLabel: 'Utforska',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
}

const PostAdStack = createStackNavigator({
  // PostAdScreenRoute: PostAdScreen,
  PostAdScreenRoute: {
    screen: PostAdScreen,
    navigationOptions: () => ({
      title: `Ny annons`,
    }),
  },
  ImageUploadRoute: {
    screen: ImageUpload,
    navigationOptions: () => ({
      title: `Lägg till foto`,
    }),
  },
  InputPriceScreenRoute: InputPriceScreen,
  CongratulationsScreenRoute: CongratulationsScreen,
})

PostAdStack.navigationOptions = {
  tabBarLabel: 'Ny annons',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-link${focused ? '' : '-outline'}`
          : 'md-link'
      }
    />
  ),
}

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
})

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profil',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-options${focused ? '' : '-outline'}`
          : 'md-options'
      }
    />
  ),
}

const MainTabNavigator = createBottomTabNavigator({
  HomeStack,
  PostAdStack,
  ProfileStack,
})

// For authentication
export default createSwitchNavigator(
  {
    AuthLoadingScreenRoute: AuthLoadingScreen,
    AuthScreenRoute: AuthScreen,
    MainRoute: MainTabNavigator,
  },
  {
    initialRouteName: 'AuthLoadingScreenRoute',
  }
)
