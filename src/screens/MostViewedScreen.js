import { View, Text, StyleSheet, FlatList, Image, ImageBackground } from 'react-native';
import React, { useEffect } from 'react';
import { ShowMovie } from '../components/CommunityComponent'
import { CommunityData } from '../../data/CommunityData';





const MostViewedScreen = (props) => {
  const { route, navigation, navigate } = props;


 
  return (
    <ImageBackground  resizeMode="cover" style={styles.ScreenBackground}>

    <View>
      <FlatList contentContainerStyle={styles.mainDataContainer}
        data={CommunityData} keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <ShowMovie
              image={{ uri: item.imageLink }}
              title={item.title}
              viewers={item.viewers}
              location={item.location}
              
              
            />
      
          )

        }}
        numColumns={2} key={2}
      />
    </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  mainDataContainer: {
    padding: 8
  },
  movieContainer: {
    margin: 8,
    padding: 16,
    backgroundColor: 'skyblue'
  },
  movieImage: {
    width: 130,
    height: 200
  },
  ScreenBackground: {
    backgroundColor: "#a0afa8"
}
});

export default MostViewedScreen;