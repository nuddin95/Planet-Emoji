import React, { Component } from 'react'; 
import { StyleSheet, Text, View } from 'react-native'; 
import { StackNavigator } from 'react-navigation';

export default class Game extends Component { 
    constructor(props){ 
        super(props);

    }   
    render(){
        return (
            <Text>This is my Game Component!</Text>
        ) 
    } 
} 
        

const styles = StyleSheet.create({ 
    container: { 
        flex: 1, 
        alignItems: 'center', 
        backgroundColor: '#AAA', 
        justifyContent: 'center' 
    } 
}); 
