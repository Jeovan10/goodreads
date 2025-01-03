import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useEffect } from 'react';
import { MovieExplanation } from '../components/MovieComponent';
import MostViewedScreen from '../screens/MostViewedScreen';
import { ScrollView } from 'react-native-gesture-handler';

const DetailMovieScreen = (props) => {
  const { route } = props;
  const { title, year } = route.params;
  const movie = route.params.item;
  useEffect(() => {
    console.log(movie);
    // console.log(year);

  }, []);



  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View style={styles.movieContainer}>

          <View style={styles.middle}>
            <Image style={styles.image} source={{ uri: movie.imageLink }} />
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{movie.title}</Text>
          </View>
          <MovieExplanation name="Year" value={movie.year} />
          <MovieExplanation name="Writer" value={movie.starring} />
          <MovieExplanation name="Desc" value={movie.description} />
          <MovieExplanation name="Readers" value={movie.viewers} />
          <MovieExplanation name="Rating" isRating={true} rating={movie.rating} />



        </View>
      </View>
    </ScrollView >
  )
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  movieContainer: {
    margin: 8,
    padding: 8
  },
  middle: {
    alignItems: 'center'
  },
  image: {
    width: 200,
    height: 300,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#ffbe7bff'
  },
  titleContainer: {
    marginTop: 8,
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 8,
    backgroundColor: '#9BAF8E',
    borderRadius: 10,
    color: 'white',
  },
});





export default DetailMovieScreen;