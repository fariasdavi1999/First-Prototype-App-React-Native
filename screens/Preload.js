import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
    StyleSheet,
    SafeAreaView,
    ActivityIndicator,
    Image,
    TouchableOpacity,
    Text,
} from 'react-native';

export default () => {

    const navigation = useNavigation();

    const [showActivityIndicator, setShowActivityIndicator] = useState(true)


    useEffect(() => {
        setTimeout(() => {
            setShowActivityIndicator(false)
        }, 2000);
        return () => {
            useNavigation();
        }
    }, [])

    function HomeScreen() {
        navigation.reset({
            routes: [{ name: 'MainTab' }]
        });
    }



    return (
        <SafeAreaView style={styles.container} >
            <Image fadeDuration={2000} style={styles.logo} source={require('../assets/saude.png')} />

            {
                showActivityIndicator ? <ActivityIndicator style={styles.ActivityIndicator} size='large' color='black' /> :
                    <TouchableOpacity style={styles.button} onPress={HomeScreen}>
                        <Text style={{ color: 'white' }}>Início</Text>
                    </TouchableOpacity>
            }



        </SafeAreaView >


    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6978CB',
        alignItems: 'center',
        justifyContent: 'center'

    },
    logo: {

    },
    ActivityIndicator: {
        marginTop: 100

    },
    button: {
        alignItems: 'center',
        backgroundColor: '#202977',
        padding: 15,
        marginTop: 100,
        borderRadius: 10,
        width: 100
    }
});
