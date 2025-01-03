import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ImageBackground} from 'react-native';
import { useEffect, useState } from 'react';
import { movieData } from '../../data/MovieData';
import { userData } from '../../data/TryCodeData'
import { ShowMovie } from '../components/MovieComponent';
import { Button, Icon } from 'react-native-elements';
import { ButtonComponent } from '../components/ButtonComponent';
import MostViewedScreen from './MostViewedScreen';

// import { Icon } from 'react-native-elements';


const HomeScreen = (props) => {
    const { navigation } = props;

    const [recommended, setRecommended] = useState([]);

    const [mostViewed, setMostViewed] = useState([]);

    const [allMostViewed, setAllMostViewed] = useState([]);

    const [allRecommended, setAllRecommended] = useState([]);

    const compareRating = (a, b) => {
        const ratingA = a.rating;
        const ratingB = b.rating;
        if (ratingA > ratingB) {
            return -1;
        } else if (ratingA < ratingB) {
            return 1;
        } else {
            return 0;
        }
    };

    const compareViewers = (a, b) => {
        const ViewersA = a.viewers;
        const ViewersB = b.viewers;
        if (ViewersA > ViewersB) {
            return -1;
        } else if (ViewersA < ViewersB) {
            return 1;
        } else {
            return 0;
        }
    };

    useEffect(() => {
        const threeRecommended = [];
        const threeMostViewed = [];

        const sortedRecommended = [...movieData].
            sort(compareRating);
        setRecommended(sortedRecommended);
        const sortedMostViewed = [...movieData].
            sort(compareViewers);
        setMostViewed(sortedMostViewed);
        setAllMostViewed(sortedMostViewed);
        setAllRecommended(sortedRecommended);


       
        for (let i = 0; i < 3; i++) {
            threeMostViewed.push(sortedMostViewed[i]);
        };
        setMostViewed(threeMostViewed);
        for (let i = 0; i < 3; i++) {
            threeRecommended.push(sortedRecommended[i]);
        };
        setRecommended(threeRecommended);
    }, []);



    return (
        <View style={styles.mainContainer}>
            <ImageBackground  resizeMode="cover" style={styles.homeScreenBackground}>

            <FlatList
                data={recommended} // movieData diganti recommended untuk mengurutkan dari rating tertinggi
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.flatListContainer}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.dataContainer}>
                            <Image
                                style={styles.movieImage}
                                source={{ uri: item.imageLink }}
                            />
                            <View style={styles.movieDescriptionContainer}>
                                <Text style={styles.title}>{item.title}</Text>

                                <View style={styles.yearContainer}>

                                    <Text style={styles.yearText}><Icon name='calendar-outline' type='ionicon' size={20} style={styles.yearIcon} />{item.year}</Text>
                                </View>
                                <Text>
                                    <Icon
                                        name='star-rate' type='material' size={20}
                                    />

                                    {
                                        item.rating === 5 ?
                                            <Image
                                                style={styles.ratingStyles}
                                                source={require('../../assets/images/five-stars.png')}
                                            />
                                            :
                                            item.rating === 4 ?
                                                <Image
                                                    style={styles.ratingStyles}
                                                    source={require('../../assets/images/four-stars.png')}
                                                />
                                                :
                                                item.rating === 3 ?
                                                    <Image
                                                        style={styles.ratingStyles}
                                                        source={require('../../assets/images/three-stars.png')}
                                                    />
                                                    :
                                                    item.rating === 2 ?
                                                        <Image
                                                            style={styles.ratingStyles}
                                                            source={require('../../assets/images/two-stars.png')}
                                                        />
                                                        :
                                                        t === 1 ?
                                                            <Image
                                                                style={styles.ratingStyles}
                                                                source={require('../../assets/images/star.png')}
                                                            />
                                                            :
                                                            null
                                    }
                                </Text>
                                <ButtonComponent onPress={() => navigation.navigate('DetailMovie', { item })} />
                            </View>
                        </View>
                    )
                }}
                ListHeaderComponent={
                    <View>
                        <View style={styles.mainCategoryContainer}>
                            <View style={styles.categoryContainer}>
                                <Text style={styles.categoryText}>
                                    Most Read
                                </Text>
                            </View>
                            {/* <View style={styles.seeAllContainer}>
                                <TouchableOpacity onPress={
                                    () => navigation.navigate('MostViewed', {allMostViewed})
                                }>
                                    <Text style={styles.seeAllText}>See All</Text>
                                </TouchableOpacity>
                            </View> */}
                        </View>
                        <FlatList
                            horizontal
                            contentContainerStyle={styles.flatListContainer}
                            data={mostViewed} // Ganti menjadi state mostViewed yang kita buat diatas tadi
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => {
                                return (
                                    <ShowMovie
                                        image={{ uri: item.imageLink }}
                                        title={item.title}
                                        viewers={item.viewers}
                                        isHome={true}
                                    />
                                )
                            }}
                        />
                        <View style={styles.mainCategoryContainer}>
                            <View style={styles.categoryContainer}>
                                <Text style={styles.categoryText}>
                                    Recommended
                                </Text>
                                {/* <View style={styles.seeAllContainer}>
                                    <TouchableOpacity onPress={() => navigation.navigate('RecommendedScreen', {allRecommended})}>
                                    <Text style={styles.seeAllText}>See All</Text>

                                    </TouchableOpacity>

                                </View> */}
                            </View>
                        </View>
                    </View>
                }
            />
            </ImageBackground>
        </View>
        
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        
    },
    flatListContainer: {
        padding: 8,
        
    },
    movieImage: {
        width: 130,
        height: 200,
        borderRadius: 10
    },
    dataContainer: {
        margin: 8,
        padding: 16,
        borderWidth: 2,
        borderColor: '#96ceb4',
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: '#cfdad6'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    movieDescriptionContainer: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 8
    },
    yearContainer: {
        marginTop: 8,
        marginBottom: 8,
        
    },
    mainCategoryContainer: {
        marginTop: 8,
        marginLeft: 8,
        marginRight: 8,
        flexDirection: 'row'
    },
    categoryContainer: {
        flex: 1
    },
    categoryText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    ratingStyles: {
        width: 100,
        height: 20,
    },
    seeAllContainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    seeAllText: {
        color: '#009688',
        textDecorationLine: 'underline'
    },
    yearIcon: {
        justifyContent: 'center',
    },
    yearText: {
        justifyContent: 'center',
    },
    homeScreenBackground: {
        backgroundColor: "#a0afa8"
    }
});

export default HomeScreen;