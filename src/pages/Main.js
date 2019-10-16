import React, {Component} from 'react';
import {Image, View, SafeAreaView, Text, TextInput, Dimensions, TouchableOpacity} from 'react-native';
import {inject, observer} from "mobx-react";
import { Container, Content } from 'native-base';

@inject('userStore')
@observer
export default class Main extends Component {
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


    render(){
        return (
            <SafeAreaView style={{flex:1}}>
                <Container>
                    <Content>
                        <View style={{flex:1, justifyContent:'center',alignItems:'center', paddingVertical:30, backgroundColor:(['rgba(198, 165, 111, 0.2)'],['rgba(255, 255, 255, 0.6)']) }}>
                            <Image source={require('../images/alcohol-whale_loading-page.png')} style={{width: this.width, height:200}} resizeMode='contain'/>
                        </View>
                        <View style={{flexDirection:'row', marginHorizontal:20}}>
                            <TouchableOpacity style={{marginRight:15}}>
                                <Image source={require('../icons/Search_color.png')} style={{width:25, height:25}}/>
                            </TouchableOpacity>
                            <TextInput
                                placeholder='소주, 맥주, 양주, 와인을 검색해주세요.'
                                placeholderTextColor='#9B9B9B'
                            />
                        </View>
                    </Content>
                </Container>
            </SafeAreaView>
        )
    }
}