import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import Layout1Screen from './layouts/Layout1';
import Layout2Screen from './layouts/Layout2';
import Layout3Screen from './layouts/Layout3';
import Layout4Screen from './layouts/Layout4';
import Layout5Screen from './layouts/Layout5';
import Layout6Screen from './layouts/Layout6';

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Layout1" component={Layout1Screen} />
				<Stack.Screen name="Layout2" component={Layout2Screen} />
				<Stack.Screen name="Layout3" component={Layout3Screen} />
				<Stack.Screen name="Layout4" component={Layout4Screen} />
				<Stack.Screen name="Layout5" component={Layout5Screen} />
				<Stack.Screen name="Layout6" component={Layout6Screen} />
			</Stack.Navigator>
    	</NavigationContainer>
	);
}
