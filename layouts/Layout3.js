import React from 'react';
import { StyleSheet, View } from 'react-native';

const Layout3screen = () => {
    return (
		<View style={styles.container}>
			<View style={styles.container1}>
				<View style={styles.box1} />
				<View style={styles.box2} />
			</View>
			<View style={styles.container2}>
				<View style={styles.box3} />
				<View style={styles.box4} />
			</View>
		</View>
    )
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
	},
	container1: {
		flex: 1.5,
	},
	box1: {
        backgroundColor: 'red',
        width: 50,
        height: 50,
		marginTop: 80,
		marginRight: 10,
		alignSelf: 'flex-end',
	},
	box2: {
		backgroundColor: 'blue',
        alignSelf: 'stretch',
        height: 120,
        margin: 10,
	},
	container2: {
		flex: 2,
		backgroundColor: 'aliceblue',
		justifyContent: 'flex-end'
	},
	box3: {
		backgroundColor: 'green',
        alignSelf: 'stretch',
        height: 90,
        margin: 10,
    },
    box4: {
		backgroundColor: 'yellow',
        alignSelf: 'stretch',
        height: 60,
        marginTop: 1,
        margin: 10,
	},
});

export default Layout3screen