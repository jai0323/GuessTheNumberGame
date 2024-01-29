import { StatusBar } from 'expo-status-bar';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import {useFonts} from 'expo-font';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [userNumber,setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds,setGuessRound] = useState(0)
  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });

  if(!fontsLoaded){
    return <AppLoading/>;
  }
  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };
  
  function gameOverHandler(){
    setGameIsOver(true)
  }
  
  function startNewGameHandler(){
    setUserNumber(null);
    setGuessRound(0);
  }

  let screen =<StartGameScreen onPickNumber={pickedNumberHandler}/>;

  if(userNumber){
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>;
  }
  if(gameIsOver && userNumber){
    screen = <GameOverScreen userNumber={userNumber} roundNumber={guessRounds} onStartNewGame={startNewGameHandler}/>
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
