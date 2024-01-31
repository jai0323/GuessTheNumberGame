import { Platform, StyleSheet, Text } from "react-native";
import Colors  from "../../../constants/Colors";

function Title({children}){
    return(
        <Text style={styles.title}>{children}</Text>
    )
} 
export default Title;

const styles = StyleSheet.create({
    title:{
        fontSize:24,
        fontFamily:'open-sans-bold',
        color: "white",
        textAlign:"center",
        borderWidth:Platform.OS === "android" ? 2 : 0,
        borderColor: Platform.select({ios: 'white', android: 'white'}),
        padding:12,
        maxWidth:'80%',
        width:300
    }
})