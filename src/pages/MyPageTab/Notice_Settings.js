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
export default class Notice_Settings extends Component {
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
                                새로운 술 출시
                </Text>

                            <TouchableOpacity>

                                <Image
                                    style={{ width: 11.1, height: 11.1 }}
                                    source={require('../../icons/circle_check.png')}
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
                                무료 이벤트 관련
                </Text>

                            <TouchableOpacity>

                                <Image
                                    style={{ width: 11.1, height: 11.1 }}
                                    source={require('../../icons/circle_check.png')}
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
                                중요 공지사항 및 약관 변경
                </Text>

                            <TouchableOpacity>

                                <Image
                                    style={{ width: 11.1, height: 11.1 }}
                                    source={require('../../icons/circle_check.png')}
                                    resizeMode="contain" />

                            </TouchableOpacity>
                        </View>

                    </Content>
                </Container>
            </SafeAreaView >
        );
    }
}


// 동그라미 넓게 설정해야 됨.

