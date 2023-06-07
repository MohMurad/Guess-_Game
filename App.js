

import { useState } from 'react';
import { StyleSheet,View,ImageBackground, SafeAreaView } from 'react-native';
import GameScreen from './Screens/GameScreen';
import StartGameScreen from './Screens/StartGameScreen';
import GameOverScreen from './Screens/GameOverScreen'
import{useFonts} from 'expo-font'
import {StatusBar}from 'expo-status-bar';
import{NavigationContainer}from'@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer'
import Test from './Screens/Test';
import Test2 from './Screens/Test2';


const Drawer=createDrawerNavigator();

export default function App() {

useFonts({
    'Sofia-sans-italic':require('./assets/fonts/SofiaSansExtraCondensed-Italic-VariableFont_wght.ttf'),
    'Sofia-sans':require('./assets/fonts/SofiaSansExtraCondensed-VariableFont_wght.ttf'),
  });


 const [userNumber,setUserNumber]=useState();
 const [gameIsOver,setGameIsOver]=useState(true);
 const [roundedNumber,setRoundedNumber]=useState(0);
 let screen= <StartGameScreen onPickNumber={pickedNumberHandler}/>;

 function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
    setGameIsOver(false);
 }
 
function gameOverHandler(numberOfRounds){
  setGameIsOver(true);
  setRoundedNumber(numberOfRounds);
}
function reStartGame(){
  setUserNumber(null);
  setRoundedNumber(0);
}

 if(userNumber){
  screen=<GameScreen userNumber={userNumber} gameOverHandler={gameOverHandler}/>;
 }

 if(gameIsOver&&userNumber){
    screen=<GameOverScreen useNumber={userNumber} reStartGame={reStartGame} roundedNumber={roundedNumber}/>
 }


  return (
    <>
    {/* <NavigationContainer>
      <Drawer.Navigator>
          <Drawer.Screen name='Test' component={Test}/>
          <Drawer.Screen name='Test2' component={Test2}/>
      </Drawer.Navigator>
    </NavigationContainer> */}
    <StatusBar style='auto' animated={true} backgroundColor="#61dafb"/>
    <View  style={styles.rootContainer}> 
       <ImageBackground source={require('./assets/images/backgroundimage.jpg')} style={styles.rootContainer} resizeMode='cover' imageStyle={styles.styleImage}>
        <SafeAreaView style={styles.rootContainer}>
          {screen}
          </SafeAreaView>
       </ImageBackground>
 
  </View>
  </>
  );
  
}

const styles = StyleSheet.create({
  rootContainer:{
    flex:1
  },
  styleImage:{
    opacity:0.8
  }
});
