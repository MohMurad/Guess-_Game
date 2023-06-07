import { View,Text,StyleSheet} from "react-native";

function GuessListItems({roundNumber,guess}){
    return(
        <View style={styles.listItems}>
            <Text>#{roundNumber}</Text>
            <Text>Opponent`s guess {guess}</Text>
        </View>
    );
}

export default GuessListItems;

const styles=StyleSheet.create({
    listItems:{
        borderColor:'yellow',
        borderWidth:1,
        borderRadius:40,
        padding:12,
        marginVertical:8,
        backgroundColor:'#DECC17',
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        elevation:4,
    }
})