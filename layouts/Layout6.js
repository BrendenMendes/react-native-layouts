import React from 'react';
import { StyleSheet, View } from 'react-native';

const Layout6screen = () => {
    return (
		<View style={styles.container}>
            <View style={styles.container1}>
                <View style={styles.box1} />
            </View>
            <View style={styles.container2}>
			    <View style={styles.box2} />
			    <View style={styles.box2} />
			    <View style={styles.box2} />
			    <View style={styles.box2} />
            </View>
		</View>
    )
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
    },
    container1: {
        flex: 5,
        justifyContent: 'flex-start',
        padding: 1,
    },
	box1: {
        flex: 1,
        backgroundColor: 'red',
        alignSelf: 'stretch',
        marginTop: 10,
        marginHorizontal: 10,
    },
    container2:{
        flex: 1,
        flexDirection: 'row-reverse',
        justifyContent: 'space-around',
        backgroundColor: 'powderblue', 
        margin: 10
    },
	box2: {
		backgroundColor: 'blue',
        width: 60,
        height: 60,
        alignSelf: 'center'
	},
});

export default Layout6screen