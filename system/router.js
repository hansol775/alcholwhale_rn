import React, { Component } from 'react';
import { Easing, Animated, Image } from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation';
import StackViewStyleInterpolator from 'react-navigation-stack/src/views/StackView/StackViewStyleInterpolator';
import Main from '../src/pages/HomeTab/Main';
import Rate from '../src/pages/RateTab/Rate';
import Bell from '../src/pages/BellTab/Bell';
import MyPage from '../src/pages/MyPageTab/MyPage';
import Splash from '../src/pages/Splash';
import Search from '../src/pages/HomeTab/Search';
import DrinkDetail from '../src/pages/DrinkDetail';
import AlcholDetail from '../src/pages/AlcholDetail';
import BookMark from '../src/pages/MyPageTab/BookMark';
import Settings from '../src/pages/MyPageTab/Settings';
import Account_Settings from '../src/pages/MyPageTab/Account_Settings';
import Service_Settings from '../src/pages/MyPageTab/Service_Settings';
import Notice_Settings from '../src/pages/MyPageTab/Notice_Settings';
import ServiceCenter_Settings from '../src/pages/MyPageTab/ServiceCenter_Settings';
import Info_Settings from '../src/pages/MyPageTab/Info_Settings';
import FAQ_Settings from '../src/pages/MyPageTab/FAQ_Settings';
import Drank_Settings from '../src/pages/MyPageTab/Drank_Settings';
import Review from '../src/pages/MyPageTab/Review';
import Review_More from '../src/pages/Review_More';
import Review_Writing from '../src/pages/Review_Writing';

// 메인탭 화면들
const HomeTab = createStackNavigator(
  {
    Main: { screen: Main },
    Search: { screen: Search },
  },
  {
    initialRouteName: 'Main',
    navigationOptions: {
      header: null,
      headerBackTitle: '뒤로',
    },
  },
);

// 평점탭 화면들
const RateTab = createStackNavigator(
  {
    Rate: { screen: Rate },
  },
  {
    initialRouteName: 'Rate',
    navigationOptions: {
      header: null,
      headerBackTitle: '뒤로',
    },
  },
);

// 소식탭 화면들
const BellTab = createStackNavigator(
  {
    Bell: { screen: Bell },
  },
  {
    initialRouteName: 'Bell',
    navigationOptions: {
      header: null,
      headerBackTitle: '뒤로',
    },
  },
);

// 마이페이지 화면들
const MyPageTab = createStackNavigator(
  {
    MyPage: { screen: MyPage },
    BookMark: { screen: BookMark },
    Settings: { screen: Settings },
    Account_Settings: { screen: Account_Settings },
    Service_Settings: { screen: Service_Settings },
    Notice_Settings: { screen: Notice_Settings },
    ServiceCenter_Settings: { screen: ServiceCenter_Settings },
    Info_Settings: { screen: Info_Settings },
    FAQ_Settings: { screen: FAQ_Settings },
    Drank_Settings: { screen: Drank_Settings },
    Review: { screen: Review } // 마이페이지에서 쓰이는 화면이라 마이페이지스택에 넣어준다. screen: '스크린이름' 이 이름으로 쓰임.
  },

  {
    initialRouteName: 'MyPage',
    navigationOptions: {
      header: null,
      headerBackTitle: '뒤로',
    },
  },
);

const MainTab = createBottomTabNavigator(
  {
    Main: HomeTab,
    Rate: RateTab,
    Bell: BellTab,
    MyPage: MyPageTab,
  },
  {
    initialRouteName: 'Main',
    navigationOptions: {
      header: null,
      headerBackTitle: '뒤로',
    },
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        switch (routeName) {
          case 'Main':
            return (
              <Image
                source={
                  focused
                    ? require('../src/icons/home_fill.png')
                    : require('../src/icons/home_stroke.png')
                }
                resizeMode={'contain'}
                style={{ width: 25, height: 25, marginTop: 3 }}
              />
            );
            break;
          case 'Rate':
            return (
              <Image
                source={
                  focused
                    ? require('../src/icons/rate_fill.png')
                    : require('../src/icons/rate_stroke.png')
                }
                resizeMode={'contain'}
                style={{ width: 25, height: 25, marginTop: 3 }}
              />
            );
            break;
          case 'Bell':
            return (
              <Image
                source={
                  focused
                    ? require('../src/icons/notice_fill.png')
                    : require('../src/icons/notice_stroke.png')
                }
                resizeMode={'contain'}
                style={{ width: 25, height: 25, marginTop: 3 }}
              />
            );
            break;
          default:
            return (
              <Image
                source={
                  focused
                    ? require('../src/icons/mypage_fill.png')
                    : require('../src/icons/mypage_stroke.png')
                }
                resizeMode={'contain'}
                style={{ width: 25, height: 25, marginTop: 3 }}
              />
            );
            break;
        }
      },
    }),
    lazy: true,
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      scrollEnabled: true,
      activeTintColor: '#000',
      showLabel: false,
    },
  },
);

const AppNavigator = createStackNavigator(
  {
    Splash: { screen: Splash },
    // Login: { screen: Login},
    // SignUp: {screen: SignUp},
    MainTab: { screen: MainTab },
    AlcholDetail: { screen: AlcholDetail },
    Review_More: { screen: Review_More },
    Review_Writing: { screen: Review_Writing },
    DrinkDetail: { screen: DrinkDetail },
  },
  {
    initialRouteName: 'Splash',
    transitionConfig: navigation => {
      return {
        transitionSpec: {
          duration: 500,
          easing: Easing.out(Easing.poly(4)),
          timing: Animated.timing,
          useNativeDriver: true,
        },
        screenInterpolator: screenProps => {
          return StackViewStyleInterpolator.forHorizontal(screenProps);
        },
      };
    },
  },
);

export default createAppContainer(AppNavigator);
