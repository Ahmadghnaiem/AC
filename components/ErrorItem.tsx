import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ErrorItem = () => {
  return (
    <View style={styles.error}>
      <Text style={styles.errorcode}>Error</Text>
    </View>
  );
};

export default ErrorItem;

const styles = StyleSheet.create({
  errorcode: {
    color: "black",
  },
  error: {
    borderWidth: 1,
  },
});
