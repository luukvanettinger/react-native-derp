import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Text } from '@/components/Themed';

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
    },
    input: {
        backgroundColor: 'lightgray',
        marginVertical: 10,
        padding: 15,
    },
});

function Name() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    return (
        <View>
            <Text style={styles.title}>Lets get started</Text>

            <TextInput
                onChangeText={setFirstName}
                placeholder="First name"
                style={styles.input}
                value={firstName}
            />

            <TextInput
                onChangeText={setLastName}
                placeholder="Last name"
                style={styles.input}
                value={lastName}
            />
        </View>
    );
}

export default Name;
