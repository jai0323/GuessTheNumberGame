import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/game/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/Colors";

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
    <View style={styles.inputContainer}>
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
    </View>
 );
}

export default StartGameScreen;

const styles=StyleSheet.create({
    inputContainer:{
       padding:16,
       marginTop:100,
       marginHorizontal:24,
       borderRadius:8,
       justifyContent:"center",
       alignItems:"center",
       backgroundColor: Colors.primary700,
       elevation:4,
       shadowColor:"black",
       shadowOffset:{width:0,height:2},
       shadowRadius:6,
       shadowOpacity:0.25
    
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
    }
});