import { Alert, FlatList, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import Title from "../components/game/ui/Title";
import Colors from "../constants/Colors";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NUmberContainer";
import PrimaryButton from "../components/game/ui/PrimaryButton";
import Card from "../components/game/ui/Card";
import { Ionicons } from '@expo/vector-icons';
import GuessLogItem from "../components/game/GuessLogItem";
function generateRandomNumber(min, max, exclude){
    const rndNum = Math.floor(Math.random()*(max - min)) + min;

    if(rndNum === parseInt(exclude)){
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
    const [guessRounds,setGuessRound] = useState([initialGuess]);
    const { width, height } = useWindowDimensions();
    useEffect(()=>{
        console.log(typeof(userNumber),typeof(currentGuess))
        if(currentGuess == userNumber){
            console.log(userNumber)
            onGameOver(guessRounds.length);
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
        setGuessRound(prevGuessNumber => [newLowerNum,...prevGuessNumber])
    }

    const randomLength = guessRounds.length;

    let content = (<>
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
    </>)

     if(width > 500){
        console.log(width)
        content = (
            <>
            <View style={styles.buttonContainerLand}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton clicked={nextGuessNumber.bind(this,'lower')}><Ionicons name="remove" size={24} color="white" /></PrimaryButton>
                    </View>

                <NumberContainer>{currentGuess}</NumberContainer>

                    <View style={styles.buttonContainer}>
                    <PrimaryButton clicked={nextGuessNumber.bind(this, 'greater')}><Ionicons name="add" size={24} color="white" /></PrimaryButton>
                    </View>
            </View>
            </>
        )
     }
    return(
        <View style={styles.screen}>
           <Title>Oppoent's Guess</Title>
           {content}
            <View style={styles.list}>
                <FlatList data={guessRounds}
                 renderItem={(itemData)=> <GuessLogItem roundNumber={randomLength - itemData.index} guess={itemData.item}></GuessLogItem>}
                 keyExtractor={(item)=>item}
                />
              {/* {guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)} */}
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
        alignItems:'center'
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
    list:{
        flex:1,
        padding:16,
        marginBottom:0
    },
    buttonContainerLand:{
        flexDirection:"row",
        alignItems:'center'
    }
});