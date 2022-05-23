import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Task = (props) => {

    return (
        <View style={styles.item}>

            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>

            <View style={styles.circular}></View>

        </View>
    )
}

const styles = StyleSheet.create({

    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        borderColor: '#CC00FF',
        borderWidth: 1,
    },

    square: {
        width: 24,
        height: 24,
        backgroundColor: '#CC00FF',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },

    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },

    itemText: {
        maxWidth: '80%',
    },

    circular: {
        width: 12,
        height: 12,
        borderColor: '#CC00FF',
        borderWidth: 2,
        borderRadius: 5,
    }

});

export default Task;