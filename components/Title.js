import { Text,StyleSheet,Dimensions, View} from "react-native";
function Title({children}){
return (
    <View style={styles.container}>
    <Text style={styles.title}>{children}</Text>
    </View>
);
}
export default Title;

const titleDim=Dimensions.get("window").width;
const styles=StyleSheet.create({
    container:{
        width:titleDim>350?150:200,
    },
    title:{
        fontFamily:'Sofia-sans-italic',
        fontSize:24,
        fontWeight:'bold',
        textAlign:'center',
        borderWidth:2,
        borderColor:'yellow',
        padding:6,
        color:'#ddb52f'
    
    }
})