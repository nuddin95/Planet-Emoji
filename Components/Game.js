import React, { Component } from 'react'; 
import { StyleSheet, Text, View } from 'react-native'; 
import { StackNavigator } from 'react-navigation';
import { emojis } from '../utils/emojis'; //new import statement up top.

export default class Game extends Component { 
    constructor(props){ 
        super(props);
        this.state = {
            emojis: [],
            randomQuestion: 0, 
            score: 0
        }
        this.restartGame = this.restartGame.bind(this); 
        this.pickRandomQuestion = this.pickRandomQuestion.bind(this);
    }

    //restartGame method
    restartGame(){
        let randomQuestion = this.pickRandomQuestion(emojiArr);
        let emojisArr = emojis.slice();
        this.setState({
            emojis: emojisArr.concat,
            randomQuestion, 
            score: 0
        })
    }

    pickRandomQuestion(arr){
        return Math.floor(Math.random() * arr.length);
    }
    
    //componentDidMount lifecycle hook
    componentDidMount(){
        this.restartGame();
    }

    render(){
        return (
            <View>
                SCORE: {` ${this.state.score}`} 
            </View>
        ) 
    } 
} 
const styles = StyleSheet.create(
    { container: { 
        flex: 1, 
        alignItems: 'center', 
        backgroundColor: '#AAA', 
        justifyContent: 'center' 
        } 
    });