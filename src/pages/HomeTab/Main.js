import React, { Component } from 'react';
import { Image, View, SafeAreaView, Text, TextInput, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import { inject, observer } from "mobx-react";
import { Container, Content } from 'native-base';

@inject('userStore')
@observer
export default class Main extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null
        };
        this.window = Dimensions.get('window');
        this.width = this.window.width
    }


    render() {
        return (
            // <SafeAreaView style={{flex:1}}>
            <Container>
                <ImageBackground source={require('../../images/loading_png.png')} style={{ width: '100%', height: '100%' }}>
                    <Content>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: 30, paddingTop: 100 }}>
                            <Image source={require('../../images/alcohol-whale_main-page.png')} style={{ width: this.width, height: 150 }} resizeMode='contain' />
                        </View>
                        <View style={{ flexDirection: 'row', marginHorizontal: 20, marginBottom: 20 }}>
                            <TouchableOpacity
                                style={{ marginRight: 15 }}
                                onPress={() => this.props.navigation.navigate('Search')}>
                                <Image source={require('../../icons/Search_color.png')} style={{ width: 25, height: 25 }} />
                            </TouchableOpacity>
                            <TextInput
                                placeholder='소주, 맥주, 양주, 와인을 검색해주세요.'
                                placeholderTextColor='#9B9B9B'
                                TouchableOpacity
                                onFocus={() => this.props.navigation.navigate('Search')} />
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', borderTopColor: '#BB996A', borderTopWidth: 3, borderBottomColor: '#BB996A', borderBottomWidth: 1 }}>
                            <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center', paddingVertical: 10, marginVertical: 10, borderRightWidth: 0.5, borderRightColor: '#BB996A' }}>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('DrinkDetail', { drink: '소주' })}
                                    style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={require('../../icons/liquor/soju_gold.png')} style={{ width: 20, height: 20, marginVertical: 15 }} resizeMode='contain' />
                                    <Text style={{ color: '#BB996A', fontSize: 14, textAlign: 'center' }}>소주</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center', marginVertical: 10, borderRightWidth: 0.5, borderRightColor: '#BB996A' }}>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('DrinkDetail', { drink: '맥주' })}
                                    style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={require('../../icons/liquor/beer_gold.png')} style={{ width: 30, height: 30, marginBottom: 20 }} resizeMode='contain' />
                                    <Text style={{ color: '#BB996A', fontSize: 14, textAlign: 'center' }}>맥주</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center', marginVertical: 10, borderRightWidth: 0.5, borderRightColor: '#BB996A' }}>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('DrinkDetail', { drink: '양주' })}
                                    style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={require('../../icons/liquor/western_gold.png')} style={{ width: 30, height: 30, marginBottom: 20 }} resizeMode='contain' />
                                    <Text style={{ color: '#BB996A', fontSize: 14, textAlign: 'center' }}>양주</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center', paddingVertical: 20 }}>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('DrinkDetail', { drink: '와인' })}
                                    style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={require('../../icons/liquor/wine_gold.png')} style={{ width: 30, height: 30, marginBottom: 20 }} resizeMode='contain' />
                                    <Text style={{ color: '#BB996A', fontSize: 14, textAlign: 'center' }}>와인</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ padding: 20 }}>
                            <Text style={{ color: '#000', fontSize: 16, fontWeight: '400' }}>여선주 님을 위한 술고래의 <Text style={{ color: '#BB996A', fontSize: 16, fontWeight: '400' }}>추천</Text></Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('AlcholDetail')}
                                style={{ flex: 1, flexDirection: 'row', marginBottom: 20, backgroundColor: '#FFF' }}>
                                <View style={{ flex: 0.3, marginHorizontal: 15, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={require('../../images/mokup_1.png')} style={{ width: 100, height: 250 }} />
                                </View>

                                <View style={{ flex: 0.7, marginRight: 20 }}>
                                    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                                        <View style={{ paddingTop: 20 }}>
                                            <Text style={{ fontSize: 18, color: '#000', marginBottom: 10 }}>대장부</Text>
                                            <Text style={{ fontSize: 14, color: '#000' }}>롯데주류</Text>
                                        </View>
                                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                                            <Image source={require('../../icons/rate_fill_color.png')} style={{ width: 15, height: 15, marginRight: 5 }} />
                                            <Text style={{ fontSize: 14, color: '#BB996A' }}>3.5</Text>
                                        </View>
                                    </View>
                                    <View style={{ borderBottomColor: '#B4B4B4', borderBottomWidth: 0.5, marginBottom: 10 }} />
                                    <View style={{ marginBottom: 5 }}>
                                        <Text style={{ color: '#BB8306', fontSize: 16, fontWeight: '300' }}>차별화된 맛과 향의 증류소주</Text>
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 14, color: '#000', lineHeight: 20 }}>‘대장부’는 100% 국산쌀의 외피를 도정한 속살을 원료로 하여 15도 이하의 저온에서 발효와 숙성을 거쳐 부드러운 목넘김을 구현한 제품입니다. 또한 청주를 빚을 때 사용하는 고향기 효모를 넣어 더 깊고 은은한 향을 살렸으며 최고급 설화, 국향을 빚어내는 롯데주류의 증류기술 노하우를 바탕으로 깔끔한 맛을 더했습니다.</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </Content>
                </ImageBackground>
            </Container>
            // </SafeAreaView>
        )
    }
}