import { useState ,useEffect} from "react";
import { Text, View,StyleSheet, Alert,FlatList,useWindowDimensions } from "react-native";
import Title from "../components/Title";
import NumberContainer from "../components/NumberContainer"
import PrimaryButton from "../components/PrimaryButton";
import {Ionicons} from '@expo/vector-icons';
import GuessListItems from "../components/GuessListItems";

function generateRandam(min,max,exclude){
    const rndNum=Math.floor(Math.random()*(max-min)+min);
    if(rndNum===exclude){
        return generateRandam(min,max,exclude);
    }
    else{
        return rndNum;
    }
}
let minBoundary=1;
let maxBoundary=100;

function GameScreen({userNumber,gameOverHandler}){
    
    const initalNumber=generateRandam(1,100,userNumber);
    const[currentGuess,setCurrentGuess]=useState(initalNumber);
    const[geussRoundedNumber,setGessRoundedNumber]=useState([initalNumber]);

useEffect(()=>{
    if(currentGuess===userNumber){
        gameOverHandler(geussRoundedNumber.length);
    }

},[currentGuess,userNumber,gameOverHandler])


useEffect(()=>{
    minBoundary=1,
    maxBoundary=100
},[])

const{width,height}= useWindowDimensions();

let content=(
    <>
            <Title> Opponent`s Guess</Title>
               <NumberContainer> {currentGuess}</NumberContainer>
                <View>
                    <Text style={{fontWeight:'bold',fontSize:15,color:'white'}}>Higher or lower?</Text>
                  <View>
                  <PrimaryButton onpress={() => nextGuessHandler('lower')}><Ionicons name="md-remove"/></PrimaryButton>
                   <PrimaryButton onpress={() => nextGuessHandler('higer')}><Ionicons name="md-add" size={12}/></PrimaryButton>
                  </View>
                </View>
    </>
);


if(width>500){
    content=(
        <>
         <Title> Opponent`s Guess</Title>
         <PrimaryButton onpress={() => nextGuessHandler('lower')}><Ionicons name="md-remove"/></PrimaryButton>
        <View style={{justifyContent:'center',alignItems:'center'}}>
             <NumberContainer> {currentGuess}</NumberContainer>
        </View>
         <PrimaryButton onpress={() => nextGuessHandler('higer')}><Ionicons name="md-add" size={12}/></PrimaryButton>

        </>
    );
}


    function nextGuessHandler(direction){
        //this if to catch if user is lie or not 
        if((direction==='lower'&&currentGuess<userNumber)||(direction==='higer'&&currentGuess>userNumber)){
            Alert.alert('Cheating Message','Don`t be lie!!!',[{text:"Sorry",style:'default'}]);
           console.log("lieing......");
            return;
        }
        if(direction==='lower'){
            maxBoundary=currentGuess;  
        }
        else{
            minBoundary=currentGuess+1;
        }
        console.log(minBoundary,maxBoundary);
        const newRandamNumber= generateRandam(minBoundary,maxBoundary,currentGuess);
        setCurrentGuess(newRandamNumber);
        setGessRoundedNumber(prvGuessRounds=>[...prvGuessRounds,newRandamNumber,]);
    }
    return(
            <View style={styles.continer}>
           
              <View style={styles.listContainer} >
                    {content}
                {/* {geussRoundedNumber.map(gussRound=>
                <GuessListItems 
                    roundNumber={gussRound}/>)} */}
                <FlatList 
                //horizontal
                data={geussRoundedNumber}
                 renderItem={(listData)=>
                 <GuessListItems 
                    roundNumber={listData.index}
                     guess={listData.item}/>
                    } 
                 keyExtractor={(item)=>item} />
              </View>
            </View> 
    );
}
export default GameScreen;
const styles=StyleSheet.create({
    continer:{
        padding:70,
        justifyContent:'center',
        alignItems:'center'
        
    },
    listContainer:{
        //flex:1,
        height:500,
        padding:16,
     
    }
  
});