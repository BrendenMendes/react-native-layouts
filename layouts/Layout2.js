import React from 'react';
import { StyleSheet, View } from 'react-native';

const Layout2screen = () => {
    return (
		<View style={styles.container}>
			<View style={styles.box1} />
			<View style={styles.box2} />
			<View style={styles.box3} />
		</View>
    )
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
	},
	box1: {
        backgroundColor: 'red',
        flex: 1,
        margin: 5,
        marginTop: 20,
	},
	box2: {
		backgroundColor: 'blue',
        flex: 3,
        margin: 5,
	},
	box3: {
		backgroundColor: 'green',
        flex: 1,
        margin: 5,
	},
});

export default Layout2screen