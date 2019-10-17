import React, {Component} from 'react';
import {Image, View, SafeAreaView, Text, TextInput, Dimensions, TouchableOpacity} from 'react-native';
import {inject, observer} from "mobx-react";
import { Container, Content } from 'native-base';

@inject('userStore')
@observer
export default class Search extends Component {
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
                    <View style={{flex:0.1, margin:20}}>
                        <TouchableOpacity onPress={()=> this.props.navigation.goBack()}>
                            <Image source={require('../icons/arrow_back.png')} style={{width:20, height:20}} resizeMode='contain'/>
                        </TouchableOpacity>
                    </View>
                    <Content>
                        <View style={{flexDirection:'row', marginHorizontal:20, justifyContent:'space-between'}}>
                            <TextInput
                                placeholder='소주, 맥주, 양주, 와인을 검색해주세요.'
                                placeholderTextColor='#9B9B9B'
                                autoFocus
                            />
                            <TouchableOpacity>
                                <Image source={require('../icons/Search_black.png')} style={{width:25, height:25}}/>
                            </TouchableOpacity>
                        </View>
                    </Content>
                </Container>
            </SafeAreaView>
        )
    }
}