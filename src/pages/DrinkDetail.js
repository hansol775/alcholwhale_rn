import React, { Component } from 'react';
import { Image, View, SafeAreaView, Text, TextInput, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import { inject, observer } from "mobx-react";
import { Container, Content } from 'native-base';

@inject('userStore')
@observer
export default class DrinkDetail extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            active: true,
            mokupData: [
                {
                    id: 1,
                    name: '한라산',
                    company: '화이트진로',
                    star: 3.5,
                },
                {
                    id: 2,
                    name: '한라산',
                    company: '화이트진로',
                    star: 3.5
                },
                {
                    id: 3,
                    name: '한라산',
                    company: '화이트진로',
                    star: 3.5
                },
            ]
        };
        this.window = Dimensions.get('window');
        this.width = this.window.width
    }


    renderRankingList(item) {
        return (
            <View style={{ backgroundColor: '#FFF', marginHorizontal: 13 }}>
                <View style={{ width: 144, height: 253, backgroudColor: '#FFF', shadowColor: '#000', shadowOpacity: 0.2 }}>
                    <Image style={{ width: 24, height: 24 }} source={require('../icons/ranking_1.png')} />
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('../images/mokup_2.png')} style={{ width: 61, height: 148, paddingHorizontal: 45, paddingVertical: 19 }} resizeMode='contain' />
                    </View>
                    <View style={{ marginHorizontal: 18 }}>
                        <Text style={{ fontSize: 16, color: '#353535', fontWeight: '400', marginBottom: 5, marginTop: 16 }}>{item.name}</Text>
                        <Text style={{ fontSize: 12, color: '#9B9B9B', marginBottom: 5 }}>{item.company}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('../icons/rate_fill_color.png')} style={{ width: 9.4, height: 9, marginRight: 5 }} resizeMode='contain' />
                            <Text style={{ fontSize: 11, color: '#BB996A' }}>{item.star}</Text>
                        </View>
                    </View>

                </View>
            </View>
        )
    }

    render() {
        const drink = this.props.navigation.getParam('drink', null)
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#F2F2F2' }}>
                <Container style={{ backgroundColor: '#F2F2F2' }}>
                    <View style={{ flex: 0.05, padding: 20, paddingBottom: 0, flexDirection: 'row', borderBottomColor: '#BB996A', borderBottomWidth: 3, marginBottom: 20, backgroundColor: '#F2F2F2' }}>
                        <TouchableOpacity
                            style={{ marginRight: 20 }}
                            onPress={() => this.props.navigation.goBack()}>
                            <Image source={require('../icons/arrow_back.png')} style={{ width: 20, height: 20 }} resizeMode='contain' />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 20, color: '#000' }}>{drink}</Text>
                    </View>
                    <Content contentContainerStyle={{ backgroundColor: '#F2F2F2' }}>
                        <View style={{ padding: 20, backgroundColor: '#F2F2F2' }}>
                            <Text style={{ color: '#000', fontSize: 16, fontWeight: '400' }}>취향분석 <Text style={{ color: '#BB996A', fontSize: 16, fontWeight: '400' }}>추천</Text></Text>
                        </View>
                        <View style={{ flex: 1, backgroundColor: '#F2F2F2' }}>
                            <View style={{ flex: 0.9, flexDirection: 'row', marginBottom: 20, backgroundColor: '#FFF' }}>
                                <View style={{ flex: 0.3, marginHorizontal: 15, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={require('../images/mokup_1.png')} style={{ width: 100, height: 250 }} />
                                </View>

                                <View style={{ flex: 0.7, marginRight: 20 }}>
                                    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                                        <View style={{ paddingTop: 20 }}>
                                            <Text style={{ fontSize: 18, color: '#000', marginBottom: 10 }}>대장부</Text>
                                            <Text style={{ fontSize: 14, color: '#000' }}>롯데주류</Text>
                                        </View>
                                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                                            <Image source={require('../icons/rate_fill_color.png')} style={{ width: 15, height: 15, marginRight: 5 }} />
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
                            </View>
                            <View style={{ flex: 0.1, justifyContent: 'flex-end', alignItems: 'flex-end', marginRight: 20, marginBottom: 20 }}>
                                <TouchableOpacity style={{ flexDirection: 'row' }}>
                                    <Text style={{ color: '#000', fontSize: 14, marginRight: 10 }}>더 많은 추천 받기</Text>
                                    <Image source={require('../icons/arrow_viewmore.png')} style={{ width: 15, height: 15 }} resizeMode='contain' />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ backgroundColor: '#F4F1EE', flex: 1 }}>
                            <View style={{ paddingHorizontal: 20, paddingTop: 20, }}>
                                <Text style={{ color: '#000', fontSize: 16, fontWeight: '400' }}>술고래 <Text style={{ color: '#BB996A', fontSize: 16, fontWeight: '400' }}>{drink} 랭킹</Text></Text>
                                <Text style={{ color: '#353535', fontSize: 9, marginTop: 6 }}>2019.01.10</Text>
                            </View>
                            <View style={{ flex: 1, backgroundColor: '#F4F1EE', paddingHorizontal: 18, paddingTop: 18, paddingBottom: 25 }}>
                                <FlatList
                                    data={this.state.mokupData}
                                    renderItem={({ item }) => (this.renderRankingList(item))}
                                    keyExtractor={item => item.id.toString()}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                />
                            </View>
                            <View style={{ flex: 0.1, justifyContent: 'flex-end', alignItems: 'flex-end', marginRight: 20, marginBottom: 20 }}>
                                <TouchableOpacity style={{ flexDirection: 'row' }}>
                                    <Text style={{ color: '#000', fontSize: 14, marginRight: 10 }}>더보기</Text>
                                    <Image source={require('../icons/arrow_viewmore.png')} style={{ width: 15, height: 15 }} resizeMode='contain' />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Content>
                </Container>
            </SafeAreaView>
        )
    }
}