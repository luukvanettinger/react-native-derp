import { Pressable, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useColorScheme } from '@/components/useColorScheme';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import Colors from '@/constants/Colors';

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
});

export default function TabOneScreen() {
    const colorScheme = useColorScheme();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tab One</Text>
            <View darkColor="rgba(255,255,255,0.1)" lightColor="#eee" style={styles.separator} />
            <EditScreenInfo path="app/(tabs)/index.tsx" />
            <Link asChild href="/onboarding/">
                <Pressable>
                    {({ pressed }) => (
                        <FontAwesome
                            color={Colors[colorScheme ?? 'light'].text}
                            name="user-circle"
                            size={25}
                            style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                        />
                    )}
                </Pressable>
            </Link>
        </View>
    );
}
