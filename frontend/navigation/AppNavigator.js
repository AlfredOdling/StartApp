import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import PostAdScreen from '../screens/PostAdScreen'
import ProfileScreen from '../screens/ProfileScreen'
import AuthLoadingScreen from '../screens/AuthLoadingScreen'

const HomeStack = createStackNavigator({
  Home: HomeScreen,
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
  postAd: PostAdScreen,
},
{
  headerMode: 'none',
})

PostAdStack.navigationOptions = {
  tabBarLabel: 'Ny annons',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
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
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
}

const MainTabNavigator = createBottomTabNavigator({
  HomeStack,
  PostAdStack,
  ProfileStack,
})

// For authentication
export default createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Main: MainTabNavigator,
  // Auth: AuthStack,
},
{
  initialRouteName: 'AuthLoading',
})
