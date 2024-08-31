import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export function BackgroundCircle () {
  return (
    <View style={styles.container}>
      <View style={styles.circle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  circle: {
    width: width * 1.5, // Circle diameter as 1.5 times the screen width
    height: width * 1.5, // Same as width to make it a circle
    borderRadius: (width * 1.5) / 2, // Half of width for a perfect circle
    backgroundColor: "#fc9300", // Customize the background color
    position: "absolute",
    bottom: -height * 0.3, // Slightly off the screen to make it appear large
  },
});

export default BackgroundCircle;