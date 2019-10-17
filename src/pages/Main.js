import React, {Component} from 'react';
import {Image, View, SafeAreaView, Text, TextInput, Dimensions, TouchableOpacity, ImageBackground} from 'react-native';
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
            // <SafeAreaView style={{flex:1}}>
                <Container>
                    <Content>
                        <ImageBackground source={require('../images/loading_png.png')} style={{ width:'100%', height:'100%'}}>
                            <View style={{flex:1, justifyContent:'center',alignItems:'center', paddingVertical:30}}>
                                <Image source={require('../images/alcohol-whale_loading-page.png')} style={{width: this.width, height:200}} resizeMode='contain'/>
                            </View>
                            <View style={{flexDirection:'row', marginHorizontal:20}}>
                                <TouchableOpacity 
                                    style={{marginRight:15}}
                                    onPress={()=> this.props.navigation.navigate('Search')}>
                                    <Image source={require('../icons/Search_color.png')} style={{width:25, height:25}}/>
                                </TouchableOpacity>
                                <TextInput
                                    placeholder='소주, 맥주, 양주, 와인을 검색해주세요.'
                                    placeholderTextColor='#9B9B9B'
                                    TouchableOpacity
                                    onFocus={()=> this.props.navigation.navigate('Search')}/>
                            </View>
                        </ImageBackground>
                    </Content>
                </Container>
            // </SafeAreaView>
        )
    }
}