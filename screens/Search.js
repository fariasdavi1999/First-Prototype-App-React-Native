import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    StyleSheet,
    Text,
    Image,
    View,
    RefreshControl,
    ActivityIndicator,
    TextInput,
    FlatList,
    ScrollView,

} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import { MEDICAMENTOS } from '../APISimulator/MEDICAMENTOS';

//import api from '../service/api';

export default () => {


    const navigation = useNavigation();

    const [pageSearch, setPageSearch] = useState(false);
    const [refreshing, setRefreshing] = useState(false);


    const [searchText, setSearchText] = useState('');
    const [list, setList] = useState(MEDICAMENTOS);

    useEffect(() => {
        if (searchText === '') {
            setList(MEDICAMENTOS);
        } else {
            setList(
                MEDICAMENTOS.filter(item => {
                    if (item.PRODUTO.toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
                        return true;
                    } if (item['PRINCIPIO ATIVO'].toLowerCase().indexOf(searchText.toLowerCase()) > - 1) {
                        return true;
                    } if (item['CLASSE TERAPEUTICA'].toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
                        return true;
                    } else {
                        return false;
                    }
                })
            );
        }

    }, [searchText]);



    setTimeout(() => {
        setPageSearch(true);
    }, 2500);

    const onRefresh = () => {
        setRefreshing(false);
        setPageSearch();
    }

    const medLista = ({ item }) => {
        return (
            <TouchableOpacity>
                <Text style={styles.ListText}> {item.PRODUTO} | {item['PRINCIPIO ATIVO']} | {item["CLASSE TERAPEUTICA"]}</Text>
            </TouchableOpacity>
        )
    }

    return (

        <SafeAreaView style={styles.container} >
            {
                pageSearch ? <View refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }>




                    <View style={styles.HeaderArea}>
                        <Text style={styles.HeaderTitle} >Screen Search</Text>
                        <Image fadeDuration={500} style={styles.logo} source={require('../assets/saude.png')} />
                    </View>


                    <View style={styles.BodyArea}>
                        <TextInput style={styles.inputSearch} placeholder='Seu Medicamento...' placeholderTextColor={'#000'}
                            onChangeText={(texto) => setSearchText(texto)} value={searchText} />

                        <Text style={styles.BodyText}>Lista de Medicamentos: {searchText}</Text>
                        <FlatList data={list} renderItem={medLista}
                            keyExtractor={item => item.REGISTRO} />

                    </View>
                </View>


                    :

                    <ActivityIndicator style={styles.ActivityIndicator} size='large' color='#202977' />
            }

        </SafeAreaView >
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(105, 120, 203, 0.4)',
        alignItems: 'center'
    },


    logo: {
        resizeMode: 'contain',
        width: 35,
        height: 35,
    },

    ActivityIndicator: {
        marginTop: 30
    },

    inputSearch: {
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: 'lightgray',
        height: 35,
        width: 300,
        marginBottom: 30,
        color: '#000',
        alignContent: 'center',
    },

    HeaderArea: {
        alignItems: 'center',
        alignContent: 'center',
    },

    HeaderTitle: {
        alignContent: 'center',
        alignItems: 'center',
        fontSize: 24,
        fontWeight: 'bold',
    },

    BodyArea: {
        alignItems: 'center',
        marginTop: 30,

    },
    BodyText: {
        fontSize: 17,
        textShadowColor: 'black'
    },
    ListText: {
        margin: 6,
        padding: 6,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#B7C5FF'
    },

});
