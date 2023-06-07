import { useState } from "react";
import { TextInput, View,StyleSheet, Button, Alert,useWindowDimensions} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";

function StartGameScreen({onPickNumber}){
    
    const[enteredNumber,setEnteredNumber]=useState('');
    function textInputHandler(enteredText){
        setEnteredNumber(enteredText);
    }
    function resetInputHnadler(){
        setEnteredNumber('');
    }
    function confirmInputHandler(){
        const chosenNumber=parseInt(enteredNumber);
        if(isNaN(chosenNumber)||chosenNumber<=0||chosenNumber>99){
            Alert.alert('Invalid Number','enter valid Number between 1 to 99',[{text:"OKAY",style:'default',onPress:resetInputHnadler}]);
            return;
        }
        onPickNumber(chosenNumber);
    }
    //this is an hook to make responsive 
    const {width,height}=useWindowDimensions();
    const deviceHeigth=height<380?20:60;
    const deviceWidth=width<400?150:400;
    return (
        <View style={{justifyContent:'center',alignItems:'center'}}>
            <View style={{paddingTop:deviceHeigth,width:deviceWidth}}>
                 <Title>Guess Game</Title>
            </View>
        <View style={[styles.inputContainer,{marginTop:deviceHeigth}]}>
            <TextInput
             style={styles.numberInput} 
             maxLength={2} 
            keyboardType='number-pad'
             value={enteredNumber}
             onChangeText={textInputHandler}
             />
            <View style={styles.primaryButtonContainer}>
           <View style={styles.everyButtonContainer}> 
            <PrimaryButton onpress={resetInputHnadler}>Reset</PrimaryButton> 
           </View>
            <View style={styles.everyButtonContainer}>
            <PrimaryButton onpress={confirmInputHandler}>Confirm</PrimaryButton>
            </View>
            </View>
      </View>
      </View>
    );
}
export default StartGameScreen ;
const styles=StyleSheet.create({
    inputContainer:{
        alignItems:'center',
       // marginTop:100,
        marginHorizontal:24,
        padding:16,
        backgroundColor:'#27063c',
        borderRadius:8,
        elevation:16, //this is properite to make shadow in android but not make shadow in ios
        //the 4 nest props is to make shadow in ios  
        shadowColor:'black',
        shadowOffset:{width:0,height:16},
        shadowRadius:6,
        shadowOpacity:0.25
    },
    numberInput:{
        height:50,
        width:50,
        textAlign:"center",
        fontSize:32,
        borderLeftWidth:0,
        borderRightWidth:0,
        borderTopWidth:0, 
        borderBottomColor:'#ddb52f',
        borderWidth:2,
        color:'#ddb52f',
        marginVertical:16,
        fontWeight:'bold'
    },
    primaryButtonContainer:{
        flexDirection:'row',
    },
    everyButtonContainer:{
        flex:1
    }
})