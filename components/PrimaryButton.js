import { View ,Text, Pressable, StyleSheet} from "react-native";

function PrimaryButton({children}) {

    function pressHandler(){
        console.log('hii')
    };

    return(
        <View style={styles.buttonOutercontainer}>
            <Pressable style={({pressed})=>pressed? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer} onPress={pressHandler} android_ripple={{color:'#fffff'}}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
            </View>
    );
}
export default PrimaryButton;

const styles=StyleSheet.create({
    buttonInnerContainer:{
        backgroundColor:'#72063c',
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