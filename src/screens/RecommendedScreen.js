import { View, Text, FlatList, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import { ShowMovie, isRecommended } from '../components/MovieComponent';
import DetailMovieScreen from './DetailMovieScreen';
import { movieData } from '../../data/MovieData';
import { TextInput } from 'react-native';
import { Icon } from 'react-native-elements';
import { useState } from 'react';


const RecommendedScreen = (props) => {
    const { route, navigation, navigate } = props;
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState(movieData);

    const handleSearch = (query) => {
        setSearchQuery(query);

        if (query) {
            const newData = movieData.filter((item) =>
                item.title.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredData(newData);
        } else {
            setFilteredData(movieData); // Jika query kosong, tampilkan semua data
        }
    };

    return (
        <ImageBackground resizeMode="cover" style={styles.ScreenBackground}>


            <View styles={styles.mainContainer}>

                <TextInput
                    style={styles.searchBar}
                    placeholder="Search..."
                    value={searchQuery}
                    onChangeText={handleSearch}
                />




                <FlatList
                    data={filteredData}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={styles.mainContainer}
                    numColumns={2}
                    key={2}

                    renderItem={({ item }) => {
                        return (
                            <ShowMovie
                                image={{ uri: item.imageLink }}
                                title={item.title}
                                isRecommended={3}
                                rating={item.rating}
                                onPress={() => navigation.navigate('DetailMovie', { item })}
                            />
                        )
                    }}
                />
            </View>
        </ImageBackground>
    )

}
const styles = StyleSheet.create({
    mainContainer: {
        padding: 8,
        height: 2100
    },
    searchBox: {
        flexDirection: 'row',
        borderWidth: 1,
        marginTop: 8,
        paddingTop: 8,
        borderRadius: 10,
        flex: 1,
        alignItems: 'center',
        
        
    },
    searchIcon: {
        padding: 8,
        paddingRight: 0
    },
    searchInput: {
        height: 30,
        padding: 8,
        flex: 1,
    },
    container: {
        flex: 1,
        padding: 16,
    },
    searchBar: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 8,
        padding: 8,
        backgroundColor: '#f7f1ec',
        

    },
    item: {
        padding: 25,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    ScreenBackground: {
        backgroundColor: "#a0afa8"
    }
});

export default RecommendedScreen