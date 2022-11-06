import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Chessb(){
    return (
        <View style={styles.container}>
            <View sstyle={styles.wripper}>
                <View style={styles.smallbo}></View>
                <View style={styles.smallbw}></View>
                <View style={styles.smallbo}></View>
                <View style={styles.smallbw}></View>
                <View style={styles.smallbo}></View>
                <View style={styles.smallbw}></View>
                <View style={styles.smallbo}></View>
                <View style={styles.smallbw}></View>
            </View>
            <View sstyle={styles.wripper}>
                <View style={styles.smallbw}></View>
                <View style={styles.smallbo}></View>
                <View style={styles.smallbw}></View>
                <View style={styles.smallbo}></View>
                <View style={styles.smallbw}></View>
                <View style={styles.smallbo}></View>
                <View style={styles.smallbw}></View>
                <View style={styles.smallbo}></View>
            </View>
            <View sstyle={styles.wripper}>
                <View style={styles.smallbo}></View>
                <View style={styles.smallbw}></View>
                <View style={styles.smallbo}></View>
                <View style={styles.smallbw}></View>
                <View style={styles.smallbo}></View>
                <View style={styles.smallbw}></View>
                <View style={styles.smallbo}></View>
                <View style={styles.smallbw}></View>
            </View>
            <View sstyle={styles.wripper}>
                <View style={styles.smallbw}></View>
                <View style={styles.smallbo}></View>
                <View style={styles.smallbw}></View>
                <View style={styles.smallbo}></View>
                <View style={styles.smallbw}></View>
                <View style={styles.smallbo}></View>
                <View style={styles.smallbw}></View>
                <View style={styles.smallbo}></View>
            </View>
            <View sstyle={styles.wripper}>
                <View style={styles.smallbo}></View>
                <View style={styles.smallbw}></View>
                <View style={styles.smallbo}></View>
                <View style={styles.smallbw}></View>
                <View style={styles.smallbo}></View>
                <View style={styles.smallbw}></View>
                <View style={styles.smallbo}></View>
                <View style={styles.smallbw}></View>
            </View>
            <View sstyle={styles.wripper}>
                <View style={styles.smallbw}></View>
                <View style={styles.smallbo}></View>
                <View style={styles.smallbw}></View>
                <View style={styles.smallbo}></View>
                <View style={styles.smallbw}></View>
                <View style={styles.smallbo}></View>
                <View style={styles.smallbw}></View>
                <View style={styles.smallbo}></View>
            </View>
            <View sstyle={styles.wripper}>
                <View style={styles.smallbo}></View>
                <View style={styles.smallbw}></View>
                <View style={styles.smallbo}></View>
                <View style={styles.smallbw}></View>
                <View style={styles.smallbo}></View>
                <View style={styles.smallbw}></View>
                <View style={styles.smallbo}></View>
                <View style={styles.smallbw}></View>
            </View>
            <View sstyle={styles.wripper}>
                <View style={styles.smallbw}></View>
                <View style={styles.smallbo}></View>
                <View style={styles.smallbw}></View>
                <View style={styles.smallbo}></View>
                <View style={styles.smallbw}></View>
                <View style={styles.smallbo}></View>
                <View style={styles.smallbw}></View>
                <View style={styles.smallbo}></View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row', 
        justifyContent: 'center',
        marginTop:100,
        alignContent: 'content',
        alignItems:'center'
    },
    wripper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent:"center",
        alignItems:"center",
        height: 15,
        weight: 43,
        borderWidth: 1,
        borderSolor: 'rgb(42,54,20)'
    },
    smallbw: {
        borderWidth: 1, backgroundColor: "rgb(133,94,66)", borderColor: "black", width: 40, height: 40
    },
    smallbo: {
        borderWidth: 1, backgroundColor: "rgb(218,184,136)", borderColor: "black", width: 40, height: 40
    }
})