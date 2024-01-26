import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Template } from '../types';
import Name from '../templates/name';
import DateOfBirth from '../templates/dateOfBirth';
import { Text } from '@/components/Themed';

const styles = StyleSheet.create({
    dynamicScreenContainer: {
        padding: 15,
    },
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 30,
    },
    previousButton: {
        backgroundColor: 'lightgray',
        height: 40,
        width: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    nextButton: {
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        height: 55,
    },
    progressBar: {
        width: 30,
        height: 5,
        marginHorizontal: 5,
        borderRadius: 4,
    },
    progressContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
});

interface DynamicScreenProps {
    index: number;
    onNext: () => void;
    onPrevious: () => void;
    question: any;
    questions: any;
}

function DynamicScreen(props: DynamicScreenProps) {
    const { index, onNext, onPrevious, question, questions } = props;

    const TemplateComponent = () => {
        switch (question.template) {
            case Template.NAME:
                return <Name />;
            case Template.DATE_OF_BIRTH:
                return <DateOfBirth />;
            default:
                return <></>;
        }
    };

    return (
        <View style={styles.dynamicScreenContainer}>
            <View style={styles.headerContainer}>
                {index !== 0 && (
                    <Pressable onPress={onPrevious} style={styles.previousButton}>
                        {({ pressed }) => (
                            <FontAwesome
                                name="chevron-left"
                                size={20}
                                style={{ opacity: pressed ? 0.5 : 1 }}
                            />
                        )}
                    </Pressable>
                )}

                <View style={styles.progressContainer}>
                    {questions.map((_: string, i: number) => (
                        <View
                            key={i}
                            style={[
                                styles.progressBar,
                                { backgroundColor: index === i ? 'blue' : 'lightgray' },
                            ]}
                        />
                    ))}
                </View>

                <View />
            </View>

            <TemplateComponent />

            <Pressable onPress={onNext} style={styles.nextButton}>
                <Text>Continue</Text>
            </Pressable>
        </View>
    );
}

export default DynamicScreen;
