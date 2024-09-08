import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import Inbox from '../components/screens/Inbox';

export default HomePage = () => {
    return (
        <SafeAreaView>
            <StatusBar style='auto' />
            <Inbox />
        </SafeAreaView>
    )
}