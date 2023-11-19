import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

const LoadingOverlay = ({ visible }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(visible);
  }, [visible]);

  return (
    <Spinner
      visible={isVisible}
      textContent={'Carregando...'}
      textStyle={styles.text}
      overlayColor={'rgba(0, 0, 0, 0.7)'}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#FFF',
  },
});

export default LoadingOverlay;
