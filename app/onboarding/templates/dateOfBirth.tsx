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

function DateOfBirth() {
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    return (
        <View>
            <Text style={styles.title}>Date of birth</Text>

            <TextInput onChangeText={setDay} placeholder="Day" style={styles.input} value={day} />

            <TextInput
                onChangeText={setMonth}
                placeholder="Month"
                style={styles.input}
                value={month}
            />

            <TextInput
                onChangeText={setYear}
                placeholder="year"
                style={styles.input}
                value={year}
            />
        </View>
    );
}

export default DateOfBirth;
