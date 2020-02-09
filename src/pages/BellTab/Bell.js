import React, { Component } from 'react';
import { Image, View, SafeAreaView, Text, TextInput, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import { inject, observer } from "mobx-react";
import { Container, Content } from 'native-base';

@inject('userStore')
@observer
export default class Bell extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            mokup_data: [
                {
                    id: '1',
                    title: '깔루아밀크 딸기맛 출시',
                    content: '많은 사랑을 받고 있던 깔루아밀크가 새로운 맛으로 다시 찾아왔습니다! 전과 같이 우유에 타먹으면 술맛이 거의 나지 않아, 술을 즐기지 않는 사람의 취향도 탕탕 저격시키는 마법의 술로 둔갑할 수 있습니다',

                },
                {
                    id: '2',
                    title: '깔루아밀크 딸기맛 출시',
                    content: '많은 사랑을 받고 있던 깔루아밀크가 새로운 맛으로 다시 찾아왔습니다! 전과 같이 우유에 타먹으면 술맛이 거의 나지 않아, 술을 즐기지 않는 사람의 취향도 탕탕 저격시키는 마법의 술로 둔갑할 수 있습니다',

                },
                {
                    id: '3',
                    title: '깔루아밀크 딸기맛 출시',
                    content: '많은 사랑을 받고 있던 깔루아밀크가 새로운 맛으로 다시 찾아왔습니다! 전과 같이 우유에 타먹으면 술맛이 거의 나지 않아, 술을 즐기지 않는 사람의 취향도 탕탕 저격시키는 마법의 술로 둔갑할 수 있습니다',

                },
                {
                    id: '4',
                    title: '깔루아밀크 딸기맛 출시',
                    content: '많은 사랑을 받고 있던 깔루아밀크가 새로운 맛으로 다시 찾아왔습니다! 전과 같이 우유에 타먹으면 술맛이 거의 나지 않아, 술을 즐기지 않는 사람의 취향도 탕탕 저격시키는 마법의 술로 둔갑할 수 있습니다',

                },
                {
                    id: '5',
                    title: '깔루아밀크 딸기맛 출시',
                    content: '많은 사랑을 받고 있던 깔루아밀크가 새로운 맛으로 다시 찾아왔습니다! 전과 같이 우유에 타먹으면 술맛이 거의 나지 않아, 술을 즐기지 않는 사람의 취향도 탕탕 저격시키는 마법의 술로 둔갑할 수 있습니다',

                },
                {
                    id: '6',
                    title: '깔루아밀크 딸기맛 출시',
                    content: '많은 사랑을 받고 있던 깔루아밀크가 새로운 맛으로 다시 찾아왔습니다! 전과 같이 우유에 타먹으면 술맛이 거의 나지 않아, 술을 즐기지 않는 사람의 취향도 탕탕 저격시키는 마법의 술로 둔갑할 수 있습니다',

                },
            ]
        };

        this.window = Dimensions.get('window');
        this.inputWidth = this.window.width - 40
    }

    renderNoticeList(item) {
        return (
            <View>
                <TouchableOpacity>
                    <View
                        style={{
                            marginLeft: 23,
                            paddingRight: 24,
                            height: 129,
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
                                fontWeight: '700',
                                paddingLeft: 5,
                            }}>
                            {item.title}
                        </Text>
                        <Text
                            style={{

                                justifyContent: 'flex-start',
                                marginTop: 10,
                                color: '#232323',
                                fontSize: 13,
                                fontWeight: '200',
                                paddingLeft: 5,
                            }}>
                            {item.content}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Container backgroundColor="#FFFFFF">

                    <View
                        style={{
                            marginTop: 30,
                            height: 52,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            paddingLeft: 20,
                            paddingBottom: 10,
                            borderBottomColor: '#353535',
                            borderBottomWidth: 0.5,
                        }}>
                        <Text
                            style={{
                                color: '#353535',
                                fontSize: 23,
                                // fontWeight: '800',
                                paddingLeft: 5,
                            }}>
                            소식
                        </Text>
                    </View>
                    <Content>
                        <FlatList
                            data={this.state.mokup_data}
                            renderItem={({ item }) => this.renderNoticeList(item)}
                            keyExtracto={item => item.id}
                            showsVerticalScrollIndicator={false}
                        />

                    </Content>
                </Container>
            </SafeAreaView>
        )
    }
}