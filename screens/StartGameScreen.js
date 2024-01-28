import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen(){
 return(
    <View style={styles.inputContainer}>
        <TextInput style={styles.numberinput} maxLength={2} keyboardType="number-pad" autoCapitalize="none" autoCorrect={false}/>
        <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
                <PrimaryButton>Reset</PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
                <PrimaryButton>Confirm</PrimaryButton>
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
       backgroundColor:"#3b021f",
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
        borderBottomColor:'#ddb52f',
        borderBottomWidth:2,
        color:'#ddb52f',
        marginVertical:8,
        fontWeight:'bold',
        width:50,
        textAlign:'center',
    }
});