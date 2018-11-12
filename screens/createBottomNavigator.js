import React from 'react';
import {Header} from 'react-native-elements'
import { Button, Text, View, Platform } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

class HomeScreen extends React.Component {
    render() {
        return (
            <Header
                placement="left"
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'E2Plan', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />
        );
    }
}

class SettingsScreen extends React.Component {
    render() {
        return (
            <Header
                placement="left"
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'E2Plan', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />
        );
    }
}

export default createBottomTabNavigator({
    Home: HomeScreen,
    Settings: SettingsScreen,

},

    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `md-calendar${focused ? '' : ''}`;
                } else if (routeName === 'Settings') {
                    iconName = `md-person${focused ? '' : ''}`;
                }
                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
            },
        }),


        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }
);