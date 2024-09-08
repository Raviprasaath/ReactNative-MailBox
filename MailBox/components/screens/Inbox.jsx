import { useState } from "react";
import { FlatList, Text } from "react-native";
import { Avatar, Box, ListItem } from "@react-native-material/core";

const Inbox = () => {
    const [mails, setMails] = useState([
        { id: "1", subject: "Meeting Schedule", content: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. " },
        { id: "2", subject: "Client Call", content: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop" },
        { id: "3", subject: "Internal Team Meetup", content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old." },
        { id: "4", subject: "Grooming Call", content: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur" },
    ])
    return (
        <Box>
            <FlatList
                data={mails}
                key={(item) => item.id}
                renderItem={({ item, index }) =>
                    <ListItem
                        leadingMode="avatar"
                        leading={
                            <Avatar image={{ uri: `https://mui.com/static/images/avatar/${index + 1}.jpg` }} />
                        }
                        title={item.subject}
                        secondaryText={item.content}
                    />
                }
            />
        </Box>
    )
}

export default Inbox;