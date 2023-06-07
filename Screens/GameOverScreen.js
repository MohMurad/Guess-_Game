import { Image, View,StyleSheet,Text, Dimensions,ScrollView,useWindowDimensions} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";

function GameOverScrren({useNumber,roundedNumber,reStartGame}){
    const {width,height}=  useWindowDimensions();
    let imageSize=300;
    const containerPading=width<500?70:50;
    if(width<300){
        imageSize=150;
    }
    if(height<400){
        imageSize=80;
    }
    const imageStyle={
        width:imageSize,
        height:imageSize,
        borderRadius:imageSize/2,
    };
    return(
        <ScrollView style={[styles.container,{paddingTop:containerPading}]}>
       <View style={styles.screenContainer}>
       <Title> Game Over</Title>
      <View style={[styles.imageContainer,imageStyle]}>
      <Image style={[styles.image]} source={require('../assets/images/succ.jpg')}/>
      </View>
      <View>
        <Text style={styles.summryText}>Your Phone needs <Text style={styles.innerText}>{roundedNumber}</Text> to guess the number <Text style={styles.innerText}>{useNumber}</Text> </Text>
      </View>
      <PrimaryButton onpress={reStartGame}>Start New Game</PrimaryButton>
       </View>
       </ScrollView>
    );
}   
export default GameOverScrren;
// const deviceWidth=Dimensions.get("window").width;
const styles=StyleSheet.create({
   container:{
   // paddingTop:70,
    flex:1
   },
    screenContainer:{
      padding:20,
      flex:1,justifyContent:'center',alignItems:"center"
    },
    imageContainer:{
        // width:deviceWidth<380 ?120:300,
        // height:deviceWidth<380 ?120:300,
        // borderRadius:deviceWidth<380 ?75:150,
        borderWidth:3,
        borderColor:'white',
        overflow:'hidden',
       marginTop:20,
       marginBottom:20
       // marginLeft:100
    },
    image:{
        width:'100%',
        height:'100%'
    },summryText:{
        // fontFamily:"Sofia-sans-italic",
        color:'yellow',
        fontSize:24,
    },
    innerText:{
     //   fontSize:24,
       // fontFamily:'Sofia-sans-italic',
        color:'red'
    }
})