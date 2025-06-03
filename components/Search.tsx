import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const Search = (props) => {
  const [search, setSearch] = useState("");
  console.log("props", props);
  

  console.log("");
  
  console.log("search", search);
  return (
    <View style={styles.searchaicn}>
      <Ionicons name="search-circle-outline" size={50} color={"black"} />
      <TextInput
        style={styles.search}
        placeholder="search..."
        onChangeText={(value) => {
          if (value === "e1") {
            console.log("");
          }
        }}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  search: {
    width: 300,
  },
  searchaicn: {
    flexDirection: "row",
    borderWidth: 1,
    alignItems: "center",
    width: 300,
    margin: "auto",
    borderRadius: 10,
    fontSize: 10,
  },
});
