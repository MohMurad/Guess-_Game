import { View,Text,Pressable,StyleSheet} from "react-native";

function PrimaryButton ({children,onpress}){
return <>
    <View style={styles.buttonOuterContainer} >
    <Pressable 
    style={styles.buttonInnerContainer}
     android_ripple={{color:'#27033c'}}
     onPress={onpress}
     >
     <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
    </View>
     </>
}
export default PrimaryButton;
const styles=StyleSheet.create({
    buttonOuterContainer:{
        borderRadius:28,
        overflow:'hidden',
        margin:4,
    },
    buttonInnerContainer:{
        backgroundColor:'#27067c',
        paddingHorizontal:16,
        paddingVertical:8,
        elevation:2

    },
    buttonText:{
        color:'white',
        textAlign:'center'
    }
})