import React, { Component } from 'react';
import { Image, View, SafeAreaView, Text, TextInput, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import { inject, observer } from "mobx-react";
import { Container, Content, Fab } from 'native-base';

@inject('userStore')
@observer
export default class AlcholDetail extends Component {
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
                    name: '참이슬',
                    company: '화이트진로',
                    star: 3.5,
                },
                {
                    id: 2,
                    name: '참이슬',
                    company: '화이트진로',
                    star: 3.5
                },
                {
                    id: 3,
                    name: '참이슬',
                    company: '화이트진로',
                    star: 3.5
                },
            ]
        };
        this.window = Dimensions.get('window');
        this.width = this.window.width
    }

    renderProductList(item) {
        return (
            <View style={{ backgroundColor: '#FFF', marginHorizontal: 13 }}>
                <View style={{ width: 144, height: 166, backgroundColor: '#FFF', justifyContent: 'center', alignItems: 'center', shadowColor: '#000', shadowOpacity: 0.2 }}>
                    <Image source={require('../images/mokup_2.png')} style={{ width: 100, height: 100, paddingHorizontal: 45, paddingVertical: 19 }} resizeMode='contain' />
                </View>
                <View style={{ backgroundColor: '#F4F1EE' }}>
                    <Text style={{ fontSize: 16, color: '#353535', fontWeight: '400', marginBottom: 5, marginTop: 16 }}>{item.name}</Text>
                    <Text style={{ fontSize: 14, color: '#9B9B9B', marginBottom: 5 }}>{item.company}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../icons/rate_fill_color.png')} style={{ width: 15, height: 15, marginRight: 5 }} resizeMode='contain' />
                        <Text style={{ fontSize: 14, color: '#BB996A' }}>{item.star}</Text>
                    </View>

                </View>
            </View>
        )
    }


    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Container>
                    <View style={{ flex: 0.1, margin: 15, marginBottom: 0 }}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Image source={require('../icons/arrow_back.png')} style={{ width: 20, height: 20 }} resizeMode='contain' />
                        </TouchableOpacity>
                    </View>
                    <Content>
                        <View style={{ backgroundColor: '#EFEFEF', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../images/mokup_1.png')} style={{ width: 250, height: 250 }} resizeMode='contain' />
                        </View>
                        <View style={{ marginBottom: 20 }}>
                            <View style={{ position: 'absolute', right: 30, top: 20, width: 35, height: 35, borderWidth: 1, borderColor: '#EAEAEA', borderRadius: 35 / 2, justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity style={{}}>
                                    <Image source={require('../icons/bookmark_fill_grey.png')} style={{ width: 15, height: 15 }} resizeMode='contain' />
                                </TouchableOpacity>
                            </View>
                            <View style={{ margin: 23, marginBottom: 20 }}>
                                <Text style={{ fontSize: 24, fontWeight: '500', color: '#4A4A4A', marginBottom: 10 }}>참이슬 오리지널</Text>
                                <Text style={{ fontSize: 20, fontWeight: '300', color: '#9B9B9B', marginBottom: 30 }}>하이트진로</Text>
                                <Text style={{ fontSize: 16, fontWeight: '400', color: '#4A4A4A' }}>360ml / 1700원</Text>
                            </View>
                            <View style={{ backgroundColor: '#BB996A', height: 4 }} />
                        </View>
                        <View style={{ marginHorizontal: 23, marginBottom: 20 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ color: '#000', fontSize: 17, marginRight: 30, fontWeight: '600' }}>총 평점</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>
                                    <Image source={require('../icons/rate_fill_color.png')} style={{ width: 15, height: 15, marginRight: 5 }} resizeMode='contain' />
                                    <Text style={{ color: '#BB996A', fontSize: 18, fontWeight: '500' }}>3.0</Text>
                                </View>

                                <Text style={{ color: '#494949', fontSize: 14, fontWeight: '200' }}>( 381명 )</Text>
                            </View>
                        </View>
                        <View style={{ marginHorizontal: 23, marginBottom: 30 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ color: '#000', fontSize: 17, marginRight: 30, fontWeight: '600' }}>내 평점</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>
                                    <Image source={require('../icons/rate_stroke.png')} style={{ width: 30, height: 30, marginRight: 5 }} resizeMode='contain' />
                                    <Image source={require('../icons/rate_stroke.png')} style={{ width: 30, height: 30, marginRight: 5 }} resizeMode='contain' />
                                    <Image source={require('../icons/rate_stroke.png')} style={{ width: 30, height: 30, marginRight: 5 }} resizeMode='contain' />
                                    <Image source={require('../icons/rate_stroke.png')} style={{ width: 30, height: 30, marginRight: 5 }} resizeMode='contain' />
                                    <Image source={require('../icons/rate_stroke.png')} style={{ width: 30, height: 30, marginRight: 15 }} resizeMode='contain' />
                                    <Text style={{ color: '#BB996A', fontSize: 18, fontWeight: '500' }}>0.0</Text>
                                </View>

                            </View>
                        </View>
                        <View style={{ backgroundColor: '#9B9B9B', height: 1, marginLeft: 23, marginBottom: 25 }} />
                        <View style={{ marginLeft: 23, marginBottom: 18 }}>
                            <View style={{ flexDirection: 'row', marginBottom: 16, marginRight: 23 }}>
                                <Text style={{ color: '#000', fontSize: 17, marginRight: 50, fontWeight: '600' }}>맛</Text>
                                <View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                                        <View style={{
                                            backgroundColor: '#F4F1EE', borderWidth: 0.5, borderColor: '#EAEAEA', borderRadius: 20,
                                            paddingHorizontal: 10, paddingVertical: 5, justifyContent: 'center', alignItems: 'center', marginRight: 10
                                        }}>
                                            <Text style={{ fontSize: 14, color: '#000' }}>#국내</Text>
                                        </View>
                                        <View style={{
                                            backgroundColor: '#F4F1EE', borderWidth: 0.5, borderColor: '#EAEAEA', borderRadius: 20,
                                            paddingHorizontal: 10, paddingVertical: 5, justifyContent: 'center', alignItems: 'center', marginRight: 10
                                        }}>
                                            <Text style={{ fontSize: 14, color: '#000' }}>#쓴</Text>
                                        </View>
                                        <View style={{
                                            backgroundColor: '#F4F1EE', borderWidth: 0.5, borderColor: '#EAEAEA', borderRadius: 20,
                                            paddingHorizontal: 10, paddingVertical: 5, justifyContent: 'center', alignItems: 'center', marginRight: 10
                                        }}>
                                            <Text style={{ fontSize: 14, color: '#000' }}>#20대</Text>
                                        </View>
                                        <View style={{
                                            backgroundColor: '#F4F1EE', borderWidth: 0.5, borderColor: '#EAEAEA', borderRadius: 20,
                                            paddingHorizontal: 10, paddingVertical: 5, justifyContent: 'center', alignItems: 'center', marginRight: 10
                                        }}>
                                            <Text style={{ fontSize: 14, color: '#000' }}>#30대</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{
                                            backgroundColor: '#F4F1EE', borderWidth: 0.5, borderColor: '#EAEAEA', borderRadius: 20,
                                            paddingHorizontal: 10, paddingVertical: 5, justifyContent: 'center', alignItems: 'center', marginRight: 10
                                        }}>
                                            <Text style={{ fontSize: 14, color: '#000' }}>#저렴한</Text>
                                        </View>
                                        <View style={{
                                            backgroundColor: '#F4F1EE', borderWidth: 0.5, borderColor: '#EAEAEA', borderRadius: 20,
                                            paddingHorizontal: 10, paddingVertical: 5, justifyContent: 'center', alignItems: 'center', marginRight: 10
                                        }}>
                                            <Text style={{ fontSize: 14, color: '#000' }}>#두부김치</Text>
                                        </View>
                                        <View style={{
                                            backgroundColor: '#F4F1EE', borderWidth: 0.5, borderColor: '#EAEAEA', borderRadius: 20,
                                            paddingHorizontal: 10, paddingVertical: 5, justifyContent: 'center', alignItems: 'center', marginRight: 10
                                        }}>
                                            <Text style={{ fontSize: 14, color: '#000' }}>#오돌뼈</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={{ backgroundColor: '#9B9B9B', height: 1, marginLeft: 63, marginBottom: 18 }} />
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16, marginRight: 23 }}>
                                <Text style={{ color: '#000', fontSize: 17, marginRight: 50, fontWeight: '600' }}>도수</Text>
                                <View>
                                    <Text style={{ color: '#494949', fontSize: 17, fontWeight: '500' }}>20.1%</Text>
                                </View>
                            </View>
                            <View style={{ backgroundColor: '#9B9B9B', height: 1, marginLeft: 63, marginBottom: 18 }} />
                            <View style={{ flexDirection: 'row', marginBottom: 16, marginRight: 23 }}>
                                <Text style={{ color: '#000', fontSize: 17, marginRight: 50, fontWeight: '600' }}>특징</Text>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ color: '#494949', fontSize: 14, lineHeight: 20 }}>대한민국 소주의 정통성을 지켜온 정통소주로서 대나무 숯으로 4번 걸러, 숙취 유발 물질을 깨끗하게 제거하고 레귤러 대비 높은 도수로, 깊고 진한 맛을 구현해 진짜 소주의 참맛을 아는 소비자들에게 꾸준히 사랑받는 제품입니다.</Text>
                                </View>
                            </View>
                            <View style={{ backgroundColor: '#9B9B9B', height: 1, marginLeft: 63, marginBottom: 18 }} />
                            <View style={{ flexDirection: 'row', marginRight: 23 }}>
                                <Text style={{ color: '#000', fontSize: 17, marginRight: 30, fontWeight: '600' }}>생산지</Text>
                                <View>
                                    <Text style={{ color: '#494949', fontSize: 14, lineHeight: 20 }}>대한민국, 속초</Text>
                                </View>
                                <Text style={{ color: '#000', fontSize: 17, marginHorizontal: 30, fontWeight: '600' }}>카테고리</Text>
                                <View>
                                    <Text style={{ color: '#494949', fontSize: 14, lineHeight: 20 }}>소주</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ backgroundColor: '#9B9B9B', height: 1, marginLeft: 23, marginBottom: 25 }} />
                        <View style={{ flexDirection: 'row', marginLeft: 23, alignItems: 'center', marginBottom: 21 }}>
                            <Text style={{ color: '#000', fontSize: 17, marginRight: 6, fontWeight: '600' }}>리뷰</Text>
                            <Text style={{ color: '#BB996A', fontSize: 17, fontWeight: '500' }}>381</Text>
                        </View>
                        <View style={{ marginHorizontal: 23 }}>
                            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 16, fontWeight: '400', color: '#000', marginRight: 10 }}>이학연</Text>
                                        <Text style={{ fontSize: 12, color: '#818181' }}>2018.8.29</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
                                        <Image source={require('../icons/rate_fill_color.png')} style={{ width: 15, height: 15, marginRight: 5 }} resizeMode='contain' />
                                        <Text style={{ color: '#BB996A', fontSize: 18, fontWeight: '500' }}>3.5</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                                <View style={{
                                    backgroundColor: '#F4F1EE', borderWidth: 0.5, borderColor: '#EAEAEA', borderRadius: 20,
                                    paddingHorizontal: 10, paddingVertical: 5, justifyContent: 'center', alignItems: 'center', marginRight: 10
                                }}>
                                    <Text style={{ fontSize: 14, color: '#000' }}>#쓴</Text>
                                </View>
                                <View style={{
                                    backgroundColor: '#F4F1EE', borderWidth: 0.5, borderColor: '#EAEAEA', borderRadius: 20,
                                    paddingHorizontal: 10, paddingVertical: 5, justifyContent: 'center', alignItems: 'center', marginRight: 10
                                }}>
                                    <Text style={{ fontSize: 14, color: '#000' }}>#20대</Text>
                                </View>
                            </View>
                            <View style={{ marginBottom: 10 }}>
                                <Text style={{ color: '#3A3A38', fontSize: 14 }}>맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다..</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
                                        <Image source={require('../icons/heart_gray.png')} style={{ width: 15, height: 15, marginRight: 5 }} resizeMode='contain' />
                                        <Text style={{ color: '#3A3A38', fontSize: 18, fontWeight: '500' }}>18</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image source={require('../icons/photo.png')} style={{ width: 18, height: 18 }} resizeMode='contain' />
                                    </View>
                                </View>
                            </View>
                            <View style={{ backgroundColor: '#9B9B9B', height: 1, marginBottom: 20 }} />
                        </View>
                        <View style={{ marginHorizontal: 23 }}>
                            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 16, fontWeight: '400', color: '#000', marginRight: 10 }}>이학연</Text>
                                        <Text style={{ fontSize: 12, color: '#818181' }}>2018.8.29</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
                                        <Image source={require('../icons/rate_fill_color.png')} style={{ width: 15, height: 15, marginRight: 5 }} resizeMode='contain' />
                                        <Text style={{ color: '#BB996A', fontSize: 18, fontWeight: '500' }}>3.5</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                                <View style={{
                                    backgroundColor: '#F4F1EE', borderWidth: 0.5, borderColor: '#EAEAEA', borderRadius: 20,
                                    paddingHorizontal: 10, paddingVertical: 5, justifyContent: 'center', alignItems: 'center', marginRight: 10
                                }}>
                                    <Text style={{ fontSize: 14, color: '#000' }}>#쓴</Text>
                                </View>
                                <View style={{
                                    backgroundColor: '#F4F1EE', borderWidth: 0.5, borderColor: '#EAEAEA', borderRadius: 20,
                                    paddingHorizontal: 10, paddingVertical: 5, justifyContent: 'center', alignItems: 'center', marginRight: 10
                                }}>
                                    <Text style={{ fontSize: 14, color: '#000' }}>#20대</Text>
                                </View>
                            </View>
                            <View style={{ marginBottom: 10 }}>
                                <Text style={{ color: '#3A3A38', fontSize: 14 }}>맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다.. 맛이 쓰다..</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
                                        <Image source={require('../icons/heart_gray.png')} style={{ width: 15, height: 15, marginRight: 5 }} resizeMode='contain' />
                                        <Text style={{ color: '#3A3A38', fontSize: 18, fontWeight: '500' }}>18</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image source={require('../icons/photo.png')} style={{ width: 18, height: 18 }} resizeMode='contain' />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Review_More')}>
                            <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end', flexDirection: 'row', marginHorizontal: 23, marginBottom: 23 }}>
                                <Text style={{ marginRight: 5 }}>50개의 리뷰 더보기</Text>
                                <Image source={require('../icons/arrow_viewmore.png')} style={{ width: 15, height: 15 }} resizeMode='contain' />
                            </View>
                        </TouchableOpacity>
                        <View style={{ flex: 1, backgroundColor: '#F4F1EE', paddingHorizontal: 23, paddingVertical: 63 }}>
                            <FlatList
                                data={this.state.mokupData}
                                renderItem={({ item }) => (this.renderProductList(item))}
                                keyExtractor={item => item.id.toString()}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                    </Content>
                    <Fab
                        active={this.state.active}
                        direction="up"
                        style={{ backgroundColor: '#FFF' }}
                        position={"bottomRight"}
                    >
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Review_Writing')}>
                            <Image source={require('../icons/write_stroke.png')} style={{ width: 25, height: 25 }} />
                        </TouchableOpacity>
                    </Fab>
                </Container>
            </SafeAreaView>
        )
    }
}

