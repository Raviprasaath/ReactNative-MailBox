import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { InboxStack } from '../routes/InboxStack';

export default HomePage = () => {
    return (
        <>
            <StatusBar style='auto' />
            <NavigationContainer independent={true}>
                <InboxStack />
            </NavigationContainer>
        </>
    )
}