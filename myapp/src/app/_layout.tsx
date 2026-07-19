import { useEffect } from 'react';
import { Slot, SplashScreen } from 'expo-router';
import { 
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold, 
  Poppins_700Bold ,

} from '@expo-google-fonts/poppins';

// faz a tela de abertura ficar ativada até as fontes serem carregadas.

SplashScreen.preventAutoHideAsync();



export default function RootLayout() {

  // Carrega as fontes na memória do celular

  const [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });


  // Esconde a tela de Splash assim que as fontes estiverem prontas
  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);


  // Se  a fonte ainda não carregou, segura o app na tela de Splash
  if (!fontsLoaded && !fontError) {
    return null;
  }

  // O Slot renderiza a tela atual 
  return <Slot />;
}