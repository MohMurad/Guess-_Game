import { Text,View,StyleSheet,Dimensions} from "react-native";
function NumberContainer({children}){
    return(
        <View style={styles.container}>
            <Text style={styles.textStyle}>{children}</Text>
        </View>
    );
}
export default NumberContainer;
const deviceWidth=Dimensions.get("window").width;
const styles=StyleSheet.create({
    container:{
        width:deviceWidth/3,
        borderWidth:4,
        borderColor:'yellow',
        padding:deviceWidth/50,
        borderRadius:8,
        margin:deviceWidth/25,
        alignItems:"center",
        justifyContent:'center'
    },
    textStyle:{
        color:"white",
        fontSize:25,
        fontWeight:'bold'
    }
});