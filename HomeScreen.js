import React from 'react';
import { StyleSheet, View, Button, SafeAreaView } from 'react-native';

const Separator = () => (
	<View style={styles.separator} />
);

export default function Home(props) {
	return (
		<SafeAreaView style={styles.container}>
			<View>
				<Button
					title="Layout 1"
					onPress={() => props.navigation.navigate('Layout1')}
				/>
    		</View>
    		<Separator />
			<View>
				<Button
					title="Layout 2"
					onPress={() => props.navigation.navigate('Layout2')}
				/>
    		</View>
			<Separator />
			<View>
				<Button
					title="Layout 3"
					onPress={() => props.navigation.navigate('Layout3')}
				/>
    		</View>
			<Separator />
			<View>
				<Button
					title="Layout 4"
					onPress={() => props.navigation.navigate('Layout4')}
				/>
    		</View>
			<Separator />
			<View>
				<Button
					title="Layout 5"
					onPress={() => props.navigation.navigate('Layout5')}
				/>
    		</View>
			<Separator />
			<View>
				<Button
					title="Layout 6"
					onPress={() => props.navigation.navigate('Layout6')}
				/>
    		</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		marginHorizontal: 50,
	},
	title: {
		textAlign: 'center',
		marginVertical: 8,
	},
	fixToText: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	separator: {
		marginVertical: 20,
		borderBottomColor: '#737373',
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
});
