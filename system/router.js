import React, {Component} from 'react';
import {Easing, Animated, Image} from 'react-native'
import {createStackNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation';
import StackViewStyleInterpolator from  'react-navigation-stack/src/views/StackView/StackViewStyleInterpolator';
// import Main from "../src/pages/Main";
// import Menu from '../src/pages/Menu';
// import MenuDetail from '../src/pages/MenuDetail';
// import Post from '../src/pages/Post';
// import Chat from '../src/pages/Chat';
// import MyPage from '../src/pages/MyPage';
// import Login from '../src/pages/Login';
import Splash from "../src/pages/Splash";


// const HomeTab = createStackNavigator({
//     Main: {screen: Main},
//     SetLocation: {screen: SetLocation},
//     SellerProductList: {screen: SellerProductList},
//     ProductDetail: {screen: ProductDetail}
// },{
//     initialRouteName: 'Main',
//     navigationOptions: {
//         header: null,
//         headerBackTitle: '뒤로',
//     },
// })


// const MenuTab = createStackNavigator({
//     Menu: {screen: Menu},
//     MenuDetail: {screen: MenuDetail},
//     AutoFilter: {screen: AutoFilter},
//     Search: {screen: Search}
// },{
//     initialRouteName: 'Menu',
//     navigationOptions: {
//         header: null,
//         headerBackTitle: '뒤로',
//     }
// })

// const MyPageTab = createStackNavigator({
//     MyPage: {screen: MyPage},
//     SetLocation: {screen: SetLocation},
//     Favorites: {screen: Favorites},
//     SettingKeyword: {screen: SettingKeyword},
//     SalesHistory: {screen: SalesHistory},
//     ServiceCenter: {screen: ServiceCenter},
//     OperatingPolicy: {screen: OperatingPolicy},
//     Notice: {screen: Notice},
//     NoticeDetail: {screen: NoticeDetail},
//     FAQ: {screen: FAQ},
//     FAQDetail: {screen: FAQDetail},
//     QNA: {screen: QNA},
//     AppSetting: {screen: AppSetting}
// },{
//     initialRouteName: 'MyPage',
//     navigationOptions: {
//         header: null,
//         headerBackTitle: '뒤로',
//     }
// })

// const MainTab = createBottomTabNavigator({
//     Main: HomeTab,
//     Menu: MenuTab,
//     Post: { screen: Post},
//     Chat: { screen: Chat},
//     MyPage: MyPageTab
// },{
//     initialRouteName: 'Menu',
//     navigationOptions: {
//         header: null,
//         headerBackTitle: '뒤로',
//     },
//     defaultNavigationOptions: ({navigation}) => ({
//         tabBarIcon: ({ focused }) => {
//             const { routeName } = navigation.state;
//             switch (routeName) {
//                 case 'HomeTab':
//                     return (
//                         <Image source={focused ? require('../src/icons/bottom/home_b.png') : require('../src/icons/bottom/home.png')} resizeMode={'contain'} style={{width: 25, height: 25, marginTop:3}}/>
//                     )
//                     break;
//                 case 'Menu':
//                     return (
//                         <Image source={focused ? require('../src/icons/bottom/list_b.png') : require('../src/icons/bottom/list.png')} resizeMode={'contain'} style={{width: 25, height: 25, marginTop:3}}/>
//                     )
//                     break;
//                 case 'Post':
//                     return (
//                         <Image source={focused ? require('../src/icons/bottom/post_b.png') : require('../src/icons/bottom/post.png')} resizeMode={'contain'} style={{width: 25, height: 25, marginTop:3}}/>
//                     )
//                     break;
//                 case 'Chat':
//                     return (
//                         <Image source={focused ? require('../src/icons/bottom/chat_b.png') : require('../src/icons/bottom/chat.png')} resizeMode={'contain'} style={{width: 25, height: 25, marginTop:3}}/>
//                     )
//                     break;
//                 default:
//                     return (
//                         <Image source={focused ? require('../src/icons/bottom/mypage_b.png') : require('../src/icons/bottom/mypage.png')} resizeMode={'contain'} style={{width: 25, height: 25, marginTop:3}}/>
//                     )
//                     break;
//             }
//         }
//     }),
//     lazy: true,
//     animationEnabled: true,
//     swipeEnabled: true,
//     tabBarPosition: 'bottom',
//     tabBarOptions: {
//         scrollEnabled: true,
//         activeTintColor : '#000',
//         showLabel: false,
//     }
// });



const AppNavigator = createStackNavigator({
    Splash: { screen: Splash },
    // Login: { screen: Login},
    // SignUp: {screen: SignUp},
    // MainTab: { screen: MainTab},
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