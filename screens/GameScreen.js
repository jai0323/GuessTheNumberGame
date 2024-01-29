import { Alert, StyleSheet, Text, View } from "react-native";
import Title from "../components/game/ui/Title";
import Colors from "../constants/Colors";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NUmberContainer";
import PrimaryButton from "../components/game/ui/PrimaryButton";

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

    useEffect(()=>{
        console.log(userNumber)
        if(currentGuess === userNumber){
            onGameOver();
        }
        
    },[currentGuess,userNumber,onGameOver]);

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
            <View>
                <Text>Higher or Lower?</Text>
                <View>
                    <PrimaryButton clicked={nextGuessNumber.bind(this,'lower')}>-</PrimaryButton>
                    <PrimaryButton clicked={nextGuessNumber.bind(this, 'greater')}>+</PrimaryButton>
                </View>
            </View>
            <View>
              
            </View>
        </View>

    );
}

export default GameScreen

const styles = StyleSheet.create({
    screen:{
        flex:1,
        marginTop:20,
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
    }
});