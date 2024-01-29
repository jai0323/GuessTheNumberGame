import { StatusBar } from 'expo-status-bar';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber,setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(false);
  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
  };
  
  function gameOverHandler(){
    setGameIsOver(true)
  }
  

  let screen =<StartGameScreen onPickNumber={pickedNumberHandler}/>;

  if(userNumber){
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>;
  }
  if(gameIsOver){
    screen = <GameOverScreen/>
  }
  
  return (
      <LinearGradient style={styles.container} colors={["#4e0329","#ddb52f"]}>
      <ImageBackground source={require('./assets/images/background.jpg')} resizeMode='cover' style={styles.container}
      imageStyle={{opacity:0.25}}
      >
      <SafeAreaView style={styles.container}>
      {screen}
      </SafeAreaView>
      </ImageBackground>
      </LinearGradient>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
