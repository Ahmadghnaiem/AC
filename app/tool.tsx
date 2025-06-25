// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   ScrollView,
//   TouchableOpacity,
//   Pressable,
//   FlatList,
// } from "react-native";
// import React, { useState } from "react";
// import { compaines, data } from "../assets/res/data";
// import "../assets/images/tadiran.png";
// import Search from "@/components/Search";
// import Error from "@/components/Error";
// // import { *asHaptics } from 'expo-haptics';

// const Tool = () => {
//   const [search, setSearch] = useState("");
//   const [selectedAC, setSelectedAC] = useState(null);

//   const handleSelectedItem = (item) => {
//     setSelectedAC(item);
//   };
//   console.log("selected item", selectedAC);

//   const renderCompanies = ({ item }) => {
//     // return compaines.map((comp) => {
//     //   return (
//     //     <View style={styles.logo} >
//     //       <Image source={comp.logo} />
//     //     </View>
//     //   );
//     // });
//     return (
//       <TouchableOpacity onPress={() => handleSelectedItem(item)}>
//         <Image source={item.logo} style={styles.logo} />
//       </TouchableOpacity>
//     );
//   };

//   const renderData = () => {
//     return compaines.map((item) => {
//       console.log(item);

//       return (
//         <View style={styles.itemContainer}>
//           <Text style={styles.brand}>{item.brand}</Text>
//           <Image style={styles.Tadiran} source={item.image} />
//         </View>
//       );
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <Search
//         OnSearchTextChange={(txt) => {
//           setSearch(txt);
//         }}
//         selectedAC={selectedAC}
//       />
//       <Error />
//       {/* <View style={styles.itemsContainrer}>{renderCompanies()}</View> */}
// {/*
//       <FlatList
//         data={compaines}
//         renderItem={renderCompanies}
//         numColumns={2}
//         style={{ margin: "auto" }}
//       /> */}
//     </View>
//   );
// };

// export default Tool;

// const styles = StyleSheet.create({
//   itemContainer: {
//     // flex: 1,
//     borderWidth: 1,
//     padding: 5,
//     borderRadius: 15,
//     marginBottom: 25,
//   },
//   Tadiran: {
//     width: 150,
//     height: 150,
//     objectFit: "contain",
//     marginLeft: 10,
//   },
//   brand: {
//     marginLeft: 20,
//   },
//   container: {
//     flex: 1,
//     padding: 15,
//     backgroundColor: "white",
//   },
//   logo: {
//     height: 100,
//     resizeMode: "contain",
//     shadowColor: "#000",
//     elevation: 10,
//     shadowOffset: { width: 5, height: 5 },
//     shadowOpacity: 0.3,
//     shadowRadius: 10,
//     backgroundColor: "white",
//     marginTop: 10,
//     width: 180,
//   },
//   itemsContainrer: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "space-evenly",
//     width: "90%",
//     // borderWidth:1 ,
//     alignSelf: "center",
//     marginTop: 20,
//   },
// });

import {
  ScrollViewBase,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { Search } from "@/components/Search";
import { ScrollView } from "react-native";
import ErrorItem from "@/components/ErrorItem";
import { data, tstdata } from "@/assets/res/data";

const tool = () => {
  const [SearchText, SetSeaechText] = useState("");

  const filterData = () => {
    const filteredData = data.filter((item) => {
      return item.errorCode
        .toLocaleLowerCase()
        .includes(SearchText.toLocaleLowerCase());
    });

    return filteredData;
  };

  const rendererCards = () => {
    const items = filterData();
    const errorItem = items.map((item) => {
      return (
        <ErrorItem
          brand={item.brand}
          tech={item.tech}
          errorCode={item.errorCode}
          errorMessage={item.errorMessage}
          errorDescription={item.errorDescription}
        />
      );
    });
    return errorItem;
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.Search}
        placeholder="Error code"
        value={SearchText}
        onChangeText={(val) => SetSeaechText(val)}
      />

      <ScrollView>{rendererCards()}</ScrollView>

      {/* <View style={styles.techContainer}>
        <Text style={styles.tech}>Tech</Text>
        <Picker style={styles.pickerContainer}>
          <Picker.Item label="ON/OFF" />
          <Picker.Item label="INVERTER" />
          <Picker.Item label="MULTI" />
          <Picker.Item label="VRF" />
        </Picker>

        <TextInput
          style={[styles.Search, styles.searchModel]}
          placeholder="Provide your A.C Model"
        />

        <TextInput
          style={[styles.Search, styles.searchModel]}
          placeholder="Provide your A.C errorCode"
        />
        <TouchableOpacity style={styles.SolutionError}>
          <Text>Give Me Solution</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default tool;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2e9e7",
    padding: 15,
  },
  Search: {
    borderWidth: 1,
    backgroundColor: "#ffffff",
    borderRadius: 50,
    padding: 15,
    height: 50,
  },
  techContainer: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 15,
  },
  tech: {
    fontSize: 20,
    marginBottom: 10,
  },
  pickerContainer: {
    backgroundColor: "#ededed",
    padding: 5,
  },
  searchModel: {
    marginTop: 50,
  },
  // SolutionError: {},
});
