import React from 'react';
import { StyleSheet, View } from 'react-native';

const Layout4screen = () => {
    return (
		<View style={styles.container}>
			<View style={styles.containerGrid}>
				<View style={styles.gridElement}>
					<View style={styles.box1} />
					<View style={styles.box1} />
					<View style={styles.box1} />
				</View>
				<View style={styles.gridElement}>
					<View style={styles.box1} />
					<View style={styles.box1} />
					<View style={styles.box1} />
				</View>
				<View style={styles.gridElement}>
					<View style={styles.box1} />
					<View style={styles.box1} />
					<View style={styles.box1} />
				</View>
			</View>
			<View style={styles.containerOther}>
				<View style={styles.box2} />
			</View>
		</View>
    )
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
  	},
	containerGrid: {
		flex: 4,
		paddingTop: 60,
	},
	containerOther: {
		flex: 1,
		flexDirection: 'row-reverse',
	},
	gridElement: {
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	box1: {
        backgroundColor: 'red',
        width: 100,
        height: 100,
        margin: 10,
	},
    box2: {
		backgroundColor: 'blue',
        width: 80,
		height: 80,
		margin: 10,
	},
});

export default Layout4screen