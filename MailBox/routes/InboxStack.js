import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Inbox from "../components/screens/Inbox";
import Detail from "../components/screens/Detail";

const Stack = createNativeStackNavigator();

export const InboxStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="inboxScreen" component={Inbox} />
            <Stack.Screen name="detailScreen" component={Detail} />
        </Stack.Navigator>
    );
};
