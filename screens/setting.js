import React from 'react';
import { Text, View, Button } from 'react-native';

const Settings = () => {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Settings</Text>

      <Button title="Change font size" onPress={() => {}} />
      <Button title="Change theme" onPress={() => {}} />
      <Button title="Clear app data" onPress={() => {}} />
    </View>
  );
};

export default Settings;