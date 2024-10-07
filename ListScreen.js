import React from "react"
import {Text, StyleSheet, View, FlatList} from "react-native";


const students = [
    {name: 'Arion', surname: 'Morina', age: '21'},
    {name: 'Olta', surname: 'Kadrolli', age: '18'},
    {name: 'Jola', surname: 'Shala', age: '18'}
]

const ListScreen = () => {
     return <Text style={styles.textStyle}>List of student</Text>

};

const styles = StyleSheet.create({});

export default ListScreen;