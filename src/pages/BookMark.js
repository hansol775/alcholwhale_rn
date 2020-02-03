import React, {Component} from 'react';
import {Image, View, SafeAreaView, Text, TouchableOpacity, Dimensions} from 'react-native';
import {inject, observer} from "mobx-react";
import { Container, Content } from 'native-base';

@inject('userStore')
@observer
export default class BookMark extends Component {
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
        this.inputWidth = this.window.width - 40
    }


    render(){
        return (
            <SafeAreaView style={{flex:1}}>
                <Container style={{backgroundColor:'#F2F2F2'}}>
                    <View style={{flex:0.1, margin:15, marginBottom:0}}>
                        <TouchableOpacity onPress={()=> this.props.navigation.goBack()}>
                            <Image source={require('../icons/arrow_back.png')} style={{width:20, height:20}} resizeMode='contain'/>
                        </TouchableOpacity>
                    </View>
                    <Content>
                        <Text>북마크화면</Text>
                    </Content>
                </Container>
            </SafeAreaView>
        )
    }
}