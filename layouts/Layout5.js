import React from 'react';
import { StyleSheet, View } from 'react-native';

const Layout5screen = () => {
    return (
		<View style={styles.container}>
            <View style={styles.container1}>
                <View style={styles.box1} />
                <View style={styles.box1} />
                <View style={styles.box1} />
                <View style={styles.box1} />
            </View>
            <View style={styles.container2}>
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
        paddingTop: 50,
    },
	box1: {
        backgroundColor: 'red',
        alignSelf: 'stretch',
        height: 80,
        marginTop: 10,
        marginHorizontal: 10,
        flexDirection: 'row-reverse',
    },
    container2:{
        flex: 1,
        alignItems: 'flex-end',
    },
	box2: {
		backgroundColor: 'blue',
        width: 60,
        height: 60,
        margin: 20,
	},
});

export default Layout5screen