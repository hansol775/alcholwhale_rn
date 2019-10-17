import React, {Component} from 'react';
import {Easing, Animated, Image} from 'react-native'
import {createStackNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation';
import StackViewStyleInterpolator from  'react-navigation-stack/src/views/StackView/StackViewStyleInterpolator';
import Main from "../src/pages/Main";
import Rate from '../src/pages/Rate';
import Bell from '../src/pages/Bell';
import MyPage from '../src/pages/MyPage';
import Splash from "../src/pages/Splash";
import Search from '../src/pages/Search';

const HomeTab = createStackNavigator({
    Main: {screen: Main},
    Search: {screen: Search}
},{
    initialRouteName: 'Main',
    navigationOptions: {
        header: null,
        headerBackTitle: '뒤로',
    },
})


const RateTab = createStackNavigator({
    Rate: {screen: Rate},
},{
    initialRouteName: 'Rate',
    navigationOptions: {
        header: null,
        headerBackTitle: '뒤로',
    }
})

const BellTab = createStackNavigator({
    Bell: {screen: Bell},
},{
    initialRouteName: 'Bell',
    navigationOptions: {
        header: null,
        headerBackTitle: '뒤로',
    }
})



const MyPageTab = createStackNavigator({
    MyPage: {screen: MyPage},
},{
    initialRouteName: 'MyPage',
    navigationOptions: {
        header: null,
        headerBackTitle: '뒤로',
    }
})

const MainTab = createBottomTabNavigator({
    Main: HomeTab,
    Rate: RateTab,
    Bell: BellTab,
    MyPage: MyPageTab
},{
    initialRouteName: 'Main',
    navigationOptions: {
        header: null,
        headerBackTitle: '뒤로',
    },
    defaultNavigationOptions: ({navigation}) => ({
        tabBarIcon: ({ focused }) => {
            const { routeName } = navigation.state;
            switch (routeName) {
                case 'Main':
                    return (
                        <Image source={focused ? require('../src/icons/home_fill.png') : require('../src/icons/home_stroke.png')} resizeMode={'contain'} style={{width: 25, height: 25, marginTop:3}}/>
                    )
                    break;
                case 'Rate':
                    return (
                        <Image source={focused ? require('../src/icons/rate_fill.png') : require('../src/icons/rate_stroke.png')} resizeMode={'contain'} style={{width: 25, height: 25, marginTop:3}}/>
                    )
                    break;
                case 'Bell':
                    return (
                        <Image source={focused ? require('../src/icons/notice_fill.png') : require('../src/icons/notice_stroke.png')} resizeMode={'contain'} style={{width: 25, height: 25, marginTop:3}}/>
                    )
                    break;
                default:
                    return (
                        <Image source={focused ? require('../src/icons/mypage_fill.png') : require('../src/icons/mypage_stroke.png')} resizeMode={'contain'} style={{width: 25, height: 25, marginTop:3}}/>
                    )
                    break;
            }
        }
    }),
    lazy: true,
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
        scrollEnabled: true,
        activeTintColor : '#000',
        showLabel: false,
    }
});



const AppNavigator = createStackNavigator({
    Splash: { screen: Splash },
    // Login: { screen: Login},
    // SignUp: {screen: SignUp},
    MainTab: { screen: MainTab},
    // ImageSelect : {screen: ImageSelect},
    // ProfileImageSelect: {screen: ProfileImageSelect}
},{
    initialRouteName: 'Splash',
    transitionConfig: (navigation) => {
        return {
            transitionSpec: {
                duration: 500,
                easing: Easing.out(Easing.poly(4)),
                timing: Animated.timing,
                useNativeDriver: true,
            },
            screenInterpolator: (screenProps) => {
                return StackViewStyleInterpolator.forHorizontal(screenProps)
            }
        }
    }
});

export default createAppContainer(AppNavigator)