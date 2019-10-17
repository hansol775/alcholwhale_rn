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
                    <ImageBackground source={require('../images/loading_png.png')} style={{ width:'100%', height:'100%'}}>
                        <Content>
                            <View style={{flex:1, justifyContent:'center',alignItems:'center', paddingVertical:30, paddingTop:100}}>
                                <Image source={require('../images/alcohol-whale_main-page.png')} style={{width: this.width, height:150}} resizeMode='contain'/>
                            </View>
                            <View style={{flexDirection:'row', marginHorizontal:20, marginBottom:20}}>
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
                            <View style={{flex:1, flexDirection:'row', borderTopColor:'#BB996A', borderTopWidth:3, borderBottomColor:'#BB996A', borderBottomWidth:1}}>
                                <View style={{flex:0.25, justifyContent:'center', alignItems:'center', paddingVertical:10, marginVertical:10, borderRightWidth:0.5, borderRightColor:'#BB996A'}}>
                                    <TouchableOpacity 
                                        onPress={()=> this.props.navigation.navigate('DrinkDetail', {drink: '소주'})}
                                        style={{justifyContent:'center', alignItems:'center'}}>
                                        <Image source={require('../icons/liquor/soju_gold.png')} style={{width:20, height:20, marginVertical:15}} resizeMode='contain'/>
                                        <Text style={{color:'#BB996A', fontSize:14, textAlign:'center'}}>소주</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{flex:0.25, justifyContent:'center', alignItems:'center', marginVertical:10, borderRightWidth:0.5, borderRightColor:'#BB996A'}}>
                                    <TouchableOpacity style={{justifyContent:'center', alignItems:'center'}}>
                                        <Image source={require('../icons/liquor/beer_gold.png')} style={{width:30, height:30, marginBottom:20}} resizeMode='contain'/>
                                        <Text style={{color:'#BB996A', fontSize:14, textAlign:'center'}}>맥주</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{flex:0.25, justifyContent:'center', alignItems:'center', marginVertical:10, borderRightWidth:0.5, borderRightColor:'#BB996A'}}>
                                    <TouchableOpacity style={{justifyContent:'center', alignItems:'center'}}>
                                        <Image source={require('../icons/liquor/western_gold.png')} style={{width:30, height:30, marginBottom:20}} resizeMode='contain'/>
                                        <Text style={{color:'#BB996A', fontSize:14, textAlign:'center'}}>양주</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{flex:0.25, justifyContent:'center', alignItems:'center', paddingVertical:20}}>
                                    <TouchableOpacity style={{justifyContent:'center', alignItems:'center'}}>
                                        <Image source={require('../icons/liquor/wine_gold.png')} style={{width:30, height:30, marginBottom:20}} resizeMode='contain'/>
                                        <Text style={{color:'#BB996A', fontSize:14, textAlign:'center'}}>와인</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Content>
                    </ImageBackground>
                </Container>
            // </SafeAreaView>
        )
    }
}