import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { ButtonComponent } from './ButtonComponent';

export const ShowMovie = (props) => {
    const { image, title, viewers, isHome, isRecommended, rating, location } = props;

    const numberWithCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };
    return (
        <View style={[styles.horizontalDataContainer,
        { flex: isHome ? null : 1 }]}>

            <Image
                style={styles.movieImage}
                source={image}
            />
            <View style={styles.horizontalTitleContainer}>
                
                <Text style={styles.horizontalTitle}>
                    {title}
                </Text>
            </View>
            <View style={styles.horizontalTitleContainer}>
                
                <Text style={styles.horizontalTitle}>
                    {location}
                </Text>
            </View>
            



            <View style={styles.viewersContainer}>
                <Icon name='person-outline' type='ionicon' size={20} />
                <View style={styles.viewersText}>
                    <Text>{numberWithCommas(viewers)}</Text>

                </View>
            </View>




            {/* <View style={styles.viewersContainer}>
                    <Icon name='person-outline' type='ionicon' size={20} />
                    <View style={styles.viewersText}>
                        <Text>{viewers}</Text>
                    </View>
                </View> */}
        </View>


    )
};
const styles = StyleSheet.create({
    horizontalDataContainer: {
        margin: 8,
        width: 180,
        alignItems: 'center',
        borderColor: '#96ceb4',
        borderWidth: 2,
        borderRadius: 10,
        padding: 16,
        backgroundColor: '#cfdad6'
    },
    horizontalTitleContainer: {
        marginTop: 8,
        marginBottom: 8
    },
    horizontalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    movieImage: {
        width: 130,
        height: 200,
        borderRadius: 10
    },
    viewersContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    viewersText: {
        marginLeft: 8
    },
    mainContainer: {
        flexDirection: 'row',
        margin: 8
    },
    nameContainer: {
        flex: 1
    },
    generalFontSize: {
        fontSize: 16
    },
    valueContainer: {
        flex: 3
    },
    textValue: {
        textAlign: 'justify',
        fontSize: 16
    },
    ratingImage: {
        width: 100,
        height: 20,
    }
});