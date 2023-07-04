import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Dimensions, TouchableOpacity, } from 'react-native';
import styles from './styles';
import FastImage from 'react-native-fast-image';

const { height, width } = Dimensions.get('window');

const City = ({
    navigation,
    route
}) => {

    const [city, setCity] = useState();

    useEffect(() => {
        if (route?.params) setCity(route?.params?.city)
    }, [route, navigation])
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <FastImage
                        source={require('../assets/images/chevron-right-icon.png')}
                        style={{
                            width: 20, height: 20, transform: [{ rotate: '180deg' }],
                        }}
                        resizeMode='contain'
                    />
                </TouchableOpacity>


                <Text style={styles.headerText}>{city?.location?.name}</Text>

            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: '100%' }}>
                <FastImage
                    style={styles.favoriteIcon}
                    source={{
                        uri: 'https:' + city?.current?.condition?.icon,
                    }}
                    resizeMode={'contain'}
                />
                <View>
                    <Text style={styles.favoriteCity}>{city?.location?.name + ' - ' + city?.location?.country}</Text>
                    <Text style={styles.favoriteCity}>{city?.location?.region}</Text>
                    <Text style={styles.favoriteTemperature}>{city?.current?.temp_c + '°C / ' + city?.current?.temp_f + '°F'}</Text>

                    <Text style={styles.favoriteTemperature}>{city?.current?.condition?.text}</Text>
                </View>

            </View>


        </View>
    );
}

export default City;