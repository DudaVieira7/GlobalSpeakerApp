import { StyleSheet,View, Image, } from "react-native";

type AuthLayoutProps = {
    children : React.ReactNode;         //esse tipo children vai referênciar os arquivos filhos ex; campos email, senha.
};                                      //ReactNode é tipo qualquer coisa que o React consegue renderizar na tela.

export default function AuthLayout({children}: AuthLayoutProps){
    return(
        <View style ={styles.mainContainer}>
            <View style ={ styles.topContainer}>
                <Image source={require("@/assets/logoGlobalSpeaker.png")} style ={styles.ilustration}>
                </Image>
            </View>

            <View style={ styles.content}>
                {children}   
            </View>

        </View>
    );
}

        

//=========================== layout base da pagina de login e cadastrar ===========================================




const styles = StyleSheet.create({



    mainContainer :{        // container principal
        flex: 1,
        alignItems: "center",
        backgroundColor: "#6E00D6",
        justifyContent: "space-between",
        
    },


    ilustration :{
        width: "100%",              // imagem da logo
        height: 200,
        resizeMode:"contain",
        
        


    },


    topContainer :{
       width: "100%",
       flex: 0.35,
       justifyContent: "center",        
     
       
        

    },

    content :{
        backgroundColor: "#F2F1F1",
        width: "100%",
        flex: 0.65,
        borderTopRightRadius : 38,
        borderTopLeftRadius: 38,
        alignItems: "center",
        padding: 30,


    },

});