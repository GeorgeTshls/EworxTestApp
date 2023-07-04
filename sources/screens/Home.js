import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import axios from 'axios';
import FastImage from 'react-native-fast-image';
import { useDispatch, useSelector } from 'react-redux';
import { addCity, removeCity } from '../redux/actions';

const { height, width } = Dimensions.get('window');

const Home = ({
    navigation,
}) => {

    const [cities, setCities] = useState();
    const [city, setCity] = useState();
    const [favorites, setFavorites] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const reduxCities = useSelector((state) => state.cities);
    const dispatch = useDispatch();

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (searchQuery.trim() !== '') {
                autoComplete();
            }
        }, 1000);

        return () => clearTimeout(delayDebounceFn);
    }, [searchQuery]);

    const autoComplete = async () => {
        try {
            const response = await axios.get('https://api.weatherapi.com/v1/search.json', {
                params: {
                    key: '59c74256d8654bec98b100329221207 ',
                    q: searchQuery,
                },
            });

            setCities(response.data);
        } catch (error) {
            console.log('Error fetching cities:', error);
        }
    };

    const fetchForecast = async (selectedCity) => {
        try {
            const response = await axios.get('https://api.weatherapi.com/v1/forecast.json', {
                params: {
                    key: '59c74256d8654bec98b100329221207 ',
                    q: selectedCity,
                    days: 5, // Adjust the number of forecast days as needed
                },
            });

            // Process the forecast data as per your requirements
            let tempfavs = [];
            if (favorites?.length == 0) tempfavs = [response?.data]

            favorites?.filter((city) => {
                if (city?.location?.name == response?.data?.location?.name) {
                    return
                } else {
                    tempfavs = favorites?.concat(response?.data)
                }
            })

            dispatch(addCity(tempfavs))
            setFavorites(tempfavs)

        } catch (error) {
            console.log('Error fetching forecast:', error);
        }
    }



    return (
        <View style={styles.container}>

            <TextInput
                style={styles.searchCont}
                placeholder="Search cities..."
                onChangeText={(text) => setSearchQuery(text)}
                value={searchQuery}
            />



            {cities && cities?.length > 0 &&
                <View style={styles.resultWrapper}>
                    {cities?.map((result) => (
                        <TouchableOpacity key={result?.name+Math.random().toString()} style={styles.resultCont} onPress={() => {

                            setCity(result?.name)
                            setCities([])
                            setSearchQuery('')
                            fetchForecast(result?.name);
                        }}
                        >
                            <Text key={result.id} style={styles.resultText}>{result.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            }

       
            <View style={styles.favoriteWrapper}>
                {reduxCities && reduxCities?.length > 0 &&
                    <FlatList
                        data={reduxCities}
                        renderItem={(item) => {
                            return (
                                <TouchableOpacity onPress={()=>navigation.navigate('City', {city:item?.item})} style={styles.favoriteCont}>
                                    <FastImage
                                        style={styles.favoriteIcon}
                                        source={{
                                            uri: 'https:' + item?.item?.current?.condition?.icon,
                                        }}
                                        resizeMode={'contain'}
                                    />
                                    <View style={{width:'60%'}}>
                                        <Text style={styles.favoriteCity}>{item?.item?.location?.name}</Text>
                                        <Text style={styles.favoriteCondition}>{item?.item?.location?.country}</Text>
                                    </View>
                                    <View>
                                        <TouchableOpacity onPress={() => dispatch(removeCity(item?.item?.location?.name))}>
                                            <FastImage
                                                source={require('../assets/images/trash-icon.png')}
                                                style={{ width: 20, height: 20}}
                                                resizeMode='contain'
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                        ItemSeparatorComponent={() => {
                            return (
                                <View style={styles.seperator} />
                            )
                        }}

                    />
                }
            </View>

        </View>
    );
}

export default Home;