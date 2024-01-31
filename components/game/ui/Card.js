import { Dimensions, StyleSheet, View } from "react-native";
import Colors from "../../../constants/Colors";

function Card({children}){
    return(
        <View style={styles.inputContainer}>
            {children}
        </View>
    )
}
export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    inputContainer:{
        padding:16,
        marginTop:deviceWidth < 360 ? 18 : 36,
        marginHorizontal:24,
        borderRadius:8,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: Colors.primary700,
        elevation:4,
        shadowColor:"black",
        shadowOffset:{width:0,height:2},
        shadowRadius:6,
        shadowOpacity:0.25
     
     },
})