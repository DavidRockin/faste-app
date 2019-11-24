import React from 'react';
import { Button } from 'react-native-paper';

const ButtonComponent = ({ clickCallback }) => (
  <Button contentStyle={{height: 50}} style={{textAlign: "center", marginTop: 30, marginBottom: 30, borderRadius: 30}} mode="contained" onPress={clickCallback}>
    Create Product Listing
  </Button>
);

export default ButtonComponent;