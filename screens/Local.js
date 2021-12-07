import React, { Component } from 'react';

import {
    StyleSheet,
    Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import MapView from 'react-native-maps'



export default class Local extends Component {

    state = {
        places: [
            {
                id: 1,
                title: 'UDFarma Sede',
                description: 'Farmácia hipotética Sede',
                latitude: -15.802546887343535,
                longitude: -47.89938709982695,
            },
            {
                id: 2,
                title: 'UDFarma 4R',
                description: 'Farmácia hipotética 4R',
                latitude: -15.799418271979254,
                longitude: -47.899453830161896,
            },
            {
                id: 3,
                title: 'Centro de Brasília',
                description: 'Centro da capital do Brasil',
                latitude: -15.796731541089787,
                longitude: -47.86977182147405,
            },
        ]
    };



    _mapReady = () => {
        this.state.places[0].mark.showCallout();
    }



    /*
        useEffect(() => {
            setTimeout(() => {
                mapView.animateToCoordinate({
                    latitude: -15.796731541089787,
                    longitude: -47.86977182147405
                }, 1300)
            }, 4000)
    
        }, [mapView])
    */


    render() {
        const { latitude, longitude } = this.state.places[0];

        return (
            <SafeAreaView style={styles.container} >

                <MapView
                    ref={map => this.mapView = map}
                    initialRegion={{
                        latitude,
                        longitude,
                        latitudeDelta: 0.0140,
                        longitudeDelta: 0.0200,
                    }}
                    style={styles.MapView}
                    rotateEnabled={false}
                    scrollEnabled={true}
                    zoomEnabled={false}
                    showsPointsOfInterest={false}
                    onMapReady={this._mapReady}
                >

                    {this.state.places.map(place => {
                        return (
                            <MapView.Marker
                                ref={mark => place.mark = mark}
                                title={place.title}
                                description={place.description}
                                key={place.id}
                                coordinate={{
                                    latitude: place.latitude,
                                    longitude: place.longitude,
                                }} />
                        );
                    })}

                </MapView>


            </SafeAreaView >
        );
    }


}

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(105, 120, 203, 0.4)',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'

    },

    HeaderTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },


    placesContainer: {
        width: '100%',
        maxHeight: 200
    },
    place: {
        width: width - 40,
        maxHeight: 100,
        backgroundColor: '#fff',
        marginHorizontal: 20,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1
    },
    MapView: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    }
});
