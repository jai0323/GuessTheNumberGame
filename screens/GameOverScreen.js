import { getExpoGoProjectConfig } from "expo";
import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/game/ui/Title";
import Colors from "../constants/Colors";
import PrimaryButton from "../components/game/ui/PrimaryButton";

function GameOverScreen({roundNumber, userNumber, onStartNewGame}){
    return <View style={styles.container}>
        <Title>
            GAME OVER!
        </Title>
        <View style={styles.imagecontainer}>
            <Image style={styles.image}  source={require('../assets/images/mission.png')}/>
        </View>
        <Text style={styles.summaryText}>Your phone  needed <Text style={styles.highlight}>{roundNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>.</Text>
        <PrimaryButton clicked={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
}

export default GameOverScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:50,
        alignItems:'center',
        justifyContent:'center'
    },
 imagecontainer:{
    width:300,
    height:300,  
    overflow:'hidden',
    padding:30
   
 },
 summaryText:{
    fontFamily:'open-sans',
    fontSize:24,
    color: Colors.primary500,
    textAlign:'center',
    marginBottom:40
 },
 highlight:{
    fontFamily:'open-sans-bold',
    color: Colors.primary500,

 }
})