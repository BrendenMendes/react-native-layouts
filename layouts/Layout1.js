import React from 'react';
import { StyleSheet, View } from 'react-native';

const Layout1screen = () => {
    return (
		<View style={styles.container}>
			<View style={styles.container1} />
			<View style={styles.container2}>
				<View style={styles.container2_1}>
					<View style={styles.box1} />
				</View>
				<View style={styles.container2_2}>
					<View style={styles.box2} />
					<View style={styles.box3} />
				</View>
			</View>
			{/* 
			
			
			<View style={styles.box4} /> */}
		</View>
    )
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
	},
	container1: {
		flex: 1,
		backgroundColor: 'powderblue'
	},
	box1: {
		backgroundColor: 'red',
		alignSelf: 'stretch',
		height: 50
	},
	container2: {
		flex: 2,
	},
	container2_1: {
		flex: 1,
		padding: 15,
	},
	container2_2: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
	},
	box2: {
		backgroundColor: 'blue',
		alignSelf: 'stretch',
		height: 50,
		marginHorizontal: 10,
	},
	box3: {
		backgroundColor: 'green',
		alignSelf: 'stretch',
		height: 50,
		marginTop: 10,
		marginHorizontal: 10,
	},
});

export default Layout1screen