import { StatusBar } from 'expo-status-bar';
import { Button, Platform, StyleSheet } from 'react-native';
import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';
import { Text, View } from '@/components/Themed';
import { useBears } from '@/stores/useBears';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    box: {
        width: 100,
        height: 80,
        backgroundColor: 'black',
        margin: 30,
    },
});

export default function ModalScreen() {
    const bearStore = useBears();
    const bears = bearStore.bears;
    const randomWidth = useSharedValue(10);

    const config = {
        duration: 500,
        easing: Easing.bezier(0.5, 0.01, 0, 1),
    };

    const style = useAnimatedStyle(() => {
        return {
            width: withTiming(randomWidth.value, config),
        };
    });

    const addBear = () => {
        bearStore.increasePopulation();
        randomWidth.value = Math.random() * 350;
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Amount of bears: {bears} 🐻</Text>

            <View darkColor="rgba(255,255,255,0.1)" lightColor="#eee" style={styles.separator} />

            <Animated.View style={[styles.box, style]} />

            <Button onPress={addBear} title="Add bear" />

            {/* Use a light status bar on iOS to account for the black space above the modal */}
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </View>
    );
}
