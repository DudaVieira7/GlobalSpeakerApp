
import AuthLayout from "@/components/authLayout";
import { StyleSheet, View, Text, TextInput } from "react-native";
import {Slot, SplashScreen} from "expo-router";
 
export default function Index(){
    return(
       
        <AuthLayout>

            <View>
                <Text style={styles.titulo}>Login</Text>
            </View>

        </AuthLayout>
    

    )
}

const styles = StyleSheet.create({
    titulo: {
        color: "#7568A9",
        fontFamily: "Poppins_600SemiBold",
        fontSize: 16,
        margin: 10

    }

    

})
