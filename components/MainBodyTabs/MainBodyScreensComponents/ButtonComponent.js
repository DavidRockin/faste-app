import React from 'react';
import { Button } from 'react-native-paper';

const ButtonComponent = () => (
  <Button contentStyle={{height: 50}} style={{marginTop: 30}} icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
    Submit
  </Button>
);

export default ButtonComponent;