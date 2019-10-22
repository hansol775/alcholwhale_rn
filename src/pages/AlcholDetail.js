import React, {Component} from 'react';
import {Image, View, SafeAreaView, Text, TextInput, Dimensions, TouchableOpacity} from 'react-native';
import {inject, observer} from "mobx-react";
import { Container, Content } from 'native-base';

@inject('userStore')
@observer
export default class AlcholDetail extends Component {
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
                    <View style={{flex:0.1, margin:20, marginBottom:0}}>
                        <TouchableOpacity onPress={()=> this.props.navigation.goBack()}>
                            <Image source={require('../icons/arrow_back.png')} style={{width:20, height:20}} resizeMode='contain'/>
                        </TouchableOpacity>
                    </View>
                    <Content>
                        <View style={{backgroundColor:'#EFEFEF', justifyContent:'center', alignItems:'center'}}>
                            <Image source={require('../images/mokup_1.png')} style={{width:250, height:250}} resizeMode='contain'/>
                        </View>
                        <View>
                            <View style={{position:'absolute', right:30, top:20, width:35, height:35, borderWidth:1, borderColor:'#EAEAEA', borderRadius:35/2, justifyContent:'center', alignItems:'center'}}>
                                <TouchableOpacity style={{}}>
                                    <Image source={require('../icons/bookmark_stroke.png')} style={{width:15, height:15}} resizeMode='contain'/>
                                </TouchableOpacity>
                            </View>
                            <View style={{margin:30, marginBottom:20}}> 
                                <Text style={{fontSize:24, fontWeight:'400', color:'#4A4A4A', marginBottom:10}}>참이슬 오리지널</Text>
                                <Text style={{fontSize:20, fontWeight:'300', color:'#9B9B9B', marginBottom:30}}>하이트진로</Text>
                                <Text style={{fontSize:16, fontWeight:'400', color:'#4A4A4A'}}>360ml / 1700원</Text>
                            </View>
                            <View style={{backgroundColor:'#BB996A', height:4}}/>
                            
                            
                        </View>
                    </Content>
                </Container>
            </SafeAreaView>
        )
    }
}