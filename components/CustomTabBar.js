import React from 'react';
import styled from 'styled-components/native';

import { Image } from 'react-native';



const TabArea = styled.View`
    height: 60px;
    background-color: rgba(32, 41, 119, 0.8);
    flex-direction: row;
`;

const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;



export default ({ state, navigation }) => {

    const goTo = (screenName) => {
        navigation.navigate(screenName)
    }

    return (
        <TabArea>
            <TabItem onPress={() => goTo('Search')}>
                <Image style={{ opacity: state.index === 1 ? 1 : 0.5 }} source={require('../assets/Search.png')} />
            </TabItem>
            <TabItem onPress={() => goTo('Home')}>
                <Image style={{ opacity: state.index === 0 ? 1 : 0.5 }} source={require('../assets/Home.png')} />
            </TabItem>

            <TabItem onPress={() => goTo('Local')}>
                <Image style={{ opacity: state.index === 2 ? 1 : 0.5 }} source={require('../assets/Local.png')} />
            </TabItem>
        </TabArea>
    );
}
