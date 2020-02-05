import React, { Component } from 'react';
import {
    Image,
    View,
    SafeAreaView,
    Text,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { inject, observer } from 'mobx-react';
import { Container, Content } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

@inject('userStore')
@observer
export default class Service_Settings extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
        };
        this.window = Dimensions.get('window');
        this.inputWidth = this.window.width - 40;
    }

    render() {
        return (
            <SafeAreaView
                style={{
                    flex: 1,
                }}>
                <Container backgroundColor="#FFFFFF">
                    <View style={{ margin: 20 }}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Image
                                source={require('../../icons/arrow_back.png')}
                                style={{ width: 20, height: 20 }}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </View>
                    <Content backgroundColor="#FFFFFF">

                        <View
                            style={{
                                height: 52,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                marginLeft: 20,
                                borderBottomColor: '#353535',
                                borderBottomWidth: 0.5,
                            }}>
                            <Text
                                style={{
                                    color: '#353535',
                                    fontSize: 23,
                                    fontWeight: '800',
                                    paddingLeft: 5,
                                }}>
                                서비스 설정
                </Text>
                        </View>

                        <TouchableOpacity>
                            <View
                                style={{
                                    width: this.inputWidth,
                                    marginLeft: 20,
                                    height: 69,
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    borderBottomColor: '#353535',
                                    borderBottomWidth: 0.5,
                                }}>
                                <Text
                                    style={{
                                        justifyContent: 'flex-start',
                                        color: '#353535',
                                        fontSize: 15,
                                        fontWeight: '500',
                                        paddingLeft: 5,
                                    }}>
                                    언어
                </Text>
                                <Text
                                    style={{
                                        justifyContent: 'flex-start',
                                        marginTop: 10,
                                        color: '#bb996a',
                                        fontSize: 13,
                                        fontWeight: '500',
                                        paddingLeft: 5,
                                    }}>
                                    한국어
                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View
                                style={{
                                    width: this.inputWidth,
                                    marginLeft: 20,
                                    height: 69,
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    borderBottomColor: '#353535',
                                    borderBottomWidth: 0.5,
                                }}>
                                <Text
                                    style={{
                                        justifyContent: 'flex-start',
                                        color: '#353535',
                                        fontSize: 15,
                                        fontWeight: '500',
                                        paddingLeft: 5,
                                    }}>
                                    국가
                </Text>
                                <Text
                                    style={{
                                        justifyContent: 'flex-start',
                                        marginTop: 10,
                                        color: '#bb996a',
                                        fontSize: 13,
                                        fontWeight: '500',
                                        paddingLeft: 5,
                                    }}>
                                    Republic of Korea
                </Text>
                            </View>
                        </TouchableOpacity>

                        {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}> */}
                        <View
                            style={{
                                width: this.inputWidth,
                                marginTop: 62,
                                marginLeft: 20,
                                paddingRight: 5,
                                height: 60,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                marginLeft: 23,
                                borderBottomColor: '#353535',
                                borderBottomWidth: 0.5,
                            }}>
                            <Text
                                style={{
                                    color: '#353535',
                                    fontSize: 15,
                                    fontWeight: '500',
                                    paddingLeft: 5,
                                }}>
                                페이스북 계정 연동
                </Text>

                            <TouchableOpacity>

                                <Image
                                    style={{ width: 11.1, height: 11.1 }}
                                    source={require('../../icons/delete.png')}
                                    resizeMode="contain" />

                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                width: this.inputWidth,

                                marginLeft: 20,
                                paddingRight: 5,
                                height: 60,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                marginLeft: 23,
                                borderBottomColor: '#353535',
                                borderBottomWidth: 0.5,
                            }}>
                            <Text
                                style={{
                                    color: '#353535',
                                    fontSize: 15,
                                    fontWeight: '500',
                                    paddingLeft: 5,
                                }}>
                                카카오톡 계정 연동
                </Text>

                            <TouchableOpacity>

                                <Image
                                    style={{ width: 11.1, height: 11.1 }}
                                    source={require('../../icons/delete.png')}
                                    resizeMode="contain" />

                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                width: this.inputWidth,

                                marginLeft: 20,
                                paddingRight: 5,
                                height: 60,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                marginLeft: 23,
                                borderBottomColor: '#353535',
                                borderBottomWidth: 0.5,
                            }}>
                            <Text
                                style={{
                                    color: '#353535',
                                    fontSize: 15,
                                    fontWeight: '500',
                                    paddingLeft: 5,
                                }}>
                                네이버 계정 연동
                </Text>

                            <TouchableOpacity>

                                <Image
                                    style={{ width: 11.1, height: 11.1 }}
                                    source={require('../../icons/delete.png')}
                                    resizeMode="contain" />

                            </TouchableOpacity>
                        </View>

                    </Content>
                </Container>
            </SafeAreaView >
        );
    }
}

// Touchableopacity 동그라미 icon 만 해야 되는지
// 줄 단위로 모두 해야 되는지
