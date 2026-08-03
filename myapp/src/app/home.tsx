
import { StyleSheet, View, Text, } from "react-native";

export default function home(){
    return(
      
            <Text style = {styles.text}>Hello word</Text>
        
    )
}

const styles = StyleSheet.create({
    
    text :{
        textAlign: "center",
        justifyContent: "center",
       
    },
})