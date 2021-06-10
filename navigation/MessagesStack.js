import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ChatsList from '../screens/Messages/ChatsList';
import Conversation from '../screens/Messages/Conversation';
import StackHeader from '../components/Headers/StackHeader';

const MessagesStack = createStackNavigator();

export default ({ navigation }) => {
  return (
    <MessagesStack.Navigator>
      <MessagesStack.Screen
        name="ChatsList"
        component={ChatsList}
        options={{
          header: () => (
            <StackHeader text="Your chats" navigation={navigation} />
          ),
        }}
      />
      <MessagesStack.Screen
        name="Conversation"
        component={Conversation}
        options={{
          headerShown: false,
        }}
      />
    </MessagesStack.Navigator>
  );
};
