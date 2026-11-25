/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  Button,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import React from 'react';
import { ChatClient, ChatOptions } from 'react-native-chat-sdk';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const initChatSDK = React.useCallback(async () => {
    try {
      console.log('Initializing Chat SDK...');
      const options = ChatOptions.withAppKey({
        appKey: 'easemob-demo#zuoyu',
        debugModel: true,
      });
      await ChatClient.getInstance().init(options);
    } catch (error) {
      console.error('Failed to initialize Chat SDK:', error);
    }
  }, []);

  const login = async (username: string, password: string) => {
    try {
      await ChatClient.getInstance().loginWithToken(username, password);
    } catch (error) {
      console.error('Failed to login to Chat SDK:', error);
    }
  };

  const logout = async () => {
    try {
      await ChatClient.getInstance().logout();
    } catch (error) {
      console.error('Failed to logout from Chat SDK:', error);
    }
  };

  React.useEffect(() => {
    console.log('App mounted, initializing Chat SDK...');
    initChatSDK();
  }, [initChatSDK]);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.container}>
        <Text>Chat SDK Demo</Text>
        <Button title="Login" onPress={() => login('zuoyu01', 'YWMtRSAABuh3EfGq_Jlk19Lh_GOE8DausEZYrzT2OfjZvQvIrwqQeQgR8YhsH1Mz3zKMAwMAAAGiEIRXnzeeSAAMXsJc2ogXcCNqjLXQ4Blq8wAaDkK6ieBfm0ozeoc4Qg')} />
        <Button title="Logout" onPress={logout} />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 100,
    flex: 1,
  },
});

export default App;
