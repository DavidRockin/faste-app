import React from 'react';
import { Button } from 'react-native-paper';

const ButtonComponent = () => (
  <Button contentStyle={{height: 50}} style={{textAlign: "center", marginTop: 30, marginBottom: 30, borderRadius: 30, width:100}} mode="contained" onPress={() => console.log('Pressed')}>
    Submit
  </Button>
);

export default ButtonComponent;