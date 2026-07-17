import { StyleSheet, View, Text, Image} from "react-native"

export default function Index(){
    return(
        <View style ={styles.container}>
            <Image source={require("@/assets/logoGlobalSpeaker.png")} 
            style ={styles.ilustration}/>
            
            
        </View>
       
    

    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: "#6E00D6",
        flex: 1,
        padding: 40,
        alignItems: "center",
        
    },

    

    ilustration :{
        width: "100%",
        height: 240,
        resizeMode:"contain",
        marginTop : 70


    }
})