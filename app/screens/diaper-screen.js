import React from "react";
import { StyleSheet, View, Text } from 'react-native';
import { AppButton } from '../components/app-button';

export function DiaperScreen() {
    return (
        <View style={styles.container}>
            <Text>Welcome to the diaper page!</Text>
            <AppButton onPress={buttonOnPress} title="Press Me!"/>
        </View>
    );
}

const buttonOnPress = () => {
    alert("You pressed the button!")
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
});