import { Alert, StyleSheet, Text, View } from "react-native";
import Title from "../components/game/ui/Title";
import Colors from "../constants/Colors";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NUmberContainer";
import PrimaryButton from "../components/game/ui/PrimaryButton";
import Card from "../components/game/ui/Card";
import { Ionicons } from '@expo/vector-icons';
function generateRandomNumber(min, max, exclude){
    const rndNum = Math.floor(Math.random()*(max - min)) + min;

    if(rndNum === exclude){
        return generateRandomNumber(min, max, exclude);
    }
    else{
        return rndNum;
    }
}
let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber, onGameOver}){

    const initialGuess = generateRandomNumber(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds,setGuessRound] = useState([]);

    useEffect(()=>{
        console.log(typeof(userNumber),typeof(currentGuess))
        if(currentGuess == userNumber){
            console.log(userNumber)
            onGameOver();
        }  
    },[currentGuess,userNumber,onGameOver]);

    useEffect(() =>{
        minBoundary = 1;
        maxBoundary = 100;
    },[])

    function nextGuessNumber(direction){ //direction => 'lower/higher
        if( direction === 'lower' && currentGuess < userNumber || direction === 'greater' && currentGuess > userNumber){
            Alert.alert("Don't Lie!", 'You know that this is wrong...', [{text:'Sorry', style:'cancel'}])
            return;
        }
        if(direction === 'lower'){
            maxBoundary = currentGuess;
           }
        else{
            minBoundary = currentGuess + 1;
        }
        const newLowerNum = generateRandomNumber(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newLowerNum);
    }

    return(
        <View style={styles.screen}>
           <Title>Oppoent's Guess</Title>
           <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <Text style={styles.instText}>Higher or Lower?</Text>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton clicked={nextGuessNumber.bind(this,'lower')}><Ionicons name="remove" size={24} color="white" /></PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                    <PrimaryButton clicked={nextGuessNumber.bind(this, 'greater')}><Ionicons name="add" size={24} color="white" /></PrimaryButton>
                    </View>
                </View>
            </Card>
            <View>
              
            </View>
        </View>

    );
}

export default GameScreen

const styles = StyleSheet.create({
    screen:{
        flex:1,
        marginTop:25,
        padding:12,
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        color: Colors.primary600,
        textAlign:"center",
        borderWidth:2,
        borderColor: Colors.primary600,
        padding:12
    },
    instText:{
        color: Colors.accent500,
        fontSize:24,
        marginBottom:12,
        fontFamily:'open-sans'
    },
    buttonsContainer:{
        flexDirection:'row'
    },
    buttonContainer:{
        flex:1
    },
});