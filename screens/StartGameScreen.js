import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import PrimaryButton from "../components/game/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/Colors";
import Title from "../components/game/ui/Title";
import Card from "../components/game/ui/Card";

function StartGameScreen({onPickNumber}){

    const [enteredNumber,setEnteredNumber]=useState('');

    function numberInputHandler(enteredText){
        setEnteredNumber(enteredText);
    };

    function resetInput(){
        setEnteredNumber('');
    };

    function confirmInputHandler(){
        const chosenNumber = parseInt(enteredNumber);

        if(isNaN(enteredNumber) || enteredNumber<=0 || enteredNumber>99){
            Alert.alert('Invalid number!','Value has to be a number between 1 and 99',[{text:'Okay', style:'destructive',onPress:resetInput}])
            return;
        }

        else{
            onPickNumber(enteredNumber);
        }
    };

 return(
    <View style={styles.root}> 
        <Title>Guess My Number</Title>
        <Card style={styles.inputContainer}>
            <Text style={styles.instText}>Enter a Number</Text>
            <TextInput style={styles.numberinput} maxLength={2} keyboardType="number-pad" autoCapitalize="none" autoCorrect={false}
            onChangeText={numberInputHandler}
            value={enteredNumber}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton clicked={resetInput}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton clicked={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </Card>
    </View>
 );
}

export default StartGameScreen;

const styles=StyleSheet.create({
    root:{
        marginTop:100,
        flex:1,
        alignItems:'center'
    },
    buttonsContainer:{
        flexDirection:'row'
    },
    buttonContainer:{
        flex:1
    },
    numberinput:{
        height:50,
        fontSize:32,
        borderBottomColor: Colors.primary600,
        borderBottomWidth:2,
        color: Colors.primary600,
        marginVertical:8,
        fontWeight:'bold',
        width:50,
        textAlign:'center',
    },
    instText:{
        color: Colors.accent500,
        fontSize:24,
        fontFamily:'open-sans'
    }
});