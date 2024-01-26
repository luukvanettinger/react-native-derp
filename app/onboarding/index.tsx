import React, { useRef, useState } from 'react';
import PagerView from 'react-native-pager-view';
import DynamicScreen from './components/DynamicScreen';
import Data from '@/mock_data/data.json';

const pagerStyle = { flex: 1 };

export default function OnboardingScreen() {
    const ref = useRef() as React.MutableRefObject<PagerView>;
    const questions = Data;

    const [currentPage, setCurrentPage] = useState(0);
    const lastPage = currentPage >= questions.length - 1;

    const onNext = () => {
        if (lastPage) {
            // do something else
        } else {
            ref.current?.setPage(currentPage + 1);
        }
    };

    const onPrevious = () => {
        ref.current?.setPage(currentPage - 1);
    };

    return (
        <PagerView
            ref={ref}
            initialPage={0}
            onPageSelected={(e) => setCurrentPage(e.nativeEvent.position)}
            style={pagerStyle}
        >
            {questions.map((question, index) => (
                <DynamicScreen
                    key={index}
                    index={index}
                    onNext={onNext}
                    onPrevious={onPrevious}
                    question={question}
                    questions={questions}
                />
            ))}
        </PagerView>
    );
}
