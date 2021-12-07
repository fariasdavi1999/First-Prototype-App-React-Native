import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    StyleSheet,
    Text,
    Image,
    View,
    ActivityIndicator,
    TouchableOpacity
} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';



export default () => {

    const navigation = useNavigation();

    const [page, setPage] = useState(true)


    useEffect(() => {
        setTimeout(() => {
            setPage(false)
        }, 500)
        return () => {

        }
    }, [])



    function SearchScreen() {
        navigation.reset({
            routes: [{ name: 'Search' }]
        });
    }


    return (
        <SafeAreaView style={styles.container}>
            <Image fadeDuration={500} style={styles.logo} source={require('../assets/saude.png')} />

            {
                page ? <ActivityIndicator style={styles.ActivityIndicator} size='large' color='#202977' /> :

                    <ScrollView style={styles.Scroller}>

                        <View style={styles.HeaderArea}>
                            <Text style={styles.HeaderTitle}>Sobre o App "UDFarma"</Text>
                        </View>

                        <View style={styles.BodyArea}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                                Nossa Missão
                            </Text>
                            <Text style={styles.BodyText}>
                                É facilitar a sua busca por medicamentos
                            </Text>
                            <Text style={styles.BodyText}>
                                e economizar seu tempo!
                            </Text>
                            <View style={styles.buttonArea}>
                                <TouchableOpacity style={styles.button} onPress={SearchScreen}>
                                    <Text style={{ color: 'white' }}>Expectorante</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button} onPress={SearchScreen}>
                                    <Text style={{ color: 'white' }}>Anti-biótico</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button} onPress={SearchScreen}>
                                    <Text style={{ color: 'white' }}>Anti-histamínico</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button} onPress={SearchScreen}>
                                    <Text style={{ color: 'white' }}>Analgésicos</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button} onPress={SearchScreen}>
                                    <Text style={{ color: 'white' }}>Laxantes</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button} onPress={SearchScreen}>
                                    <Text style={{ color: 'white' }}>Anti-Depressivo</Text>
                                </TouchableOpacity>
                            </View>

                        </View>

                    </ScrollView>
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

    Scroller: {
        flex: 1,
        padding: 20,
    },
    buttonArea: {
        marginTop: 90,
        flex: 3,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },

    button: {
        alignItems: 'center',
        backgroundColor: '#202977',
        padding: 10,
        borderRadius: 10,
        margin: 10,
        borderWidth: 1,
        width: "35%",
    },

    logo: {
        resizeMode: 'contain',
        width: 250,
        height: 250
    },

    HeaderArea: {
        flex: 1,
        alignItems: 'center',
    },

    HeaderTitle: {
        fontSize: 25,
        fontWeight: 'bold',
    },

    BodyArea: {
        flex: 1,
        alignItems: 'center',
        marginTop: 30,

    },

    BodyText: {
        fontSize: 18,
        textShadowColor: 'black'
    },

});
