import { View ,Text, Pressable, StyleSheet} from "react-native";
import Colors  from "../../../constants/Colors";

function PrimaryButton({children, clicked}) {


    return(
        <View style={styles.buttonOutercontainer}>
            <Pressable style={({pressed})=>pressed? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer} onPress={clicked} android_ripple={{color:'#fffff'}}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
            </View>
    );
}
export default PrimaryButton;

const styles=StyleSheet.create({
    buttonInnerContainer:{
        backgroundColor: Colors.primary500,
        paddingHorizontal:16,
        paddingVertical:8,
        elevation:2,
    },
    buttonOutercontainer:{
        borderRadius:28,
        margin:4,
        overflow:"hidden",
    },
    buttonText:{
        color:'white',
        textAlign:'center'

    },
    pressed:{
        opacity:0.75
    }
});