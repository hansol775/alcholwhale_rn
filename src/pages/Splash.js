import React, {Component} from 'react';
import {Image, View, SafeAreaView, Text, TextInput, Dimensions} from 'react-native';
import {inject, observer} from "mobx-react";
import { Container, Content } from 'native-base';

@inject('userStore')
@observer
export default class Splash extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props){
        super(props);
        this.state = {
            email: null,
            password: null
        };
        this.window = Dimensions.get('window');
        this.width = this.window.width
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.replace('MainTab')
        }, 2000)   
    }


    render(){
        return (
            <SafeAreaView style={{flex:1}}>
                <Container style={{justifyContent:'center', alignItems:'center'}}>
                    <Image source={require('../images/alcohol-whale_loading-page.png')} style={{width: this.width, height:200}} resizeMode='contain'/>
                </Container>
            </SafeAreaView>
        )
    }
}