import { View, StyleSheet, DimensionValue } from "react-native";

type LineProps = {
  color?: string;          // variavel que muda a cor da linha
  thickness?: number;      // variavel para determinar  a grossura da linha
  verticalMargin?: number; // determina  o espaço invisível em volta da linha
  width?: DimensionValue;  //determina o comprimento que a linha vai oculpar na tela (número ou %)
};

export default function Line({
  color = "#8B76A5",       // Não escolheu cor? A cor padrão fica  como : #8B76A5
  thickness = 1,           // Não escolheu grossura? a grossura padrão fica como 1px.
  verticalMargin = 15,     // Não escolheu o espaço de margin em volta da linha? o espaço padrão fica como 15px.
  width = "100%",          // Não escolheu o comprimento da linha?  o comprimento padrão  fica  como 100% da tela.
}: LineProps) {            // <-- Garante que a função siga as regras determinadas em LineProps.
  
  
  return (
    <View
      style={[
        styles.line, // 1° parte: Pega a estrutura  e os parametros da função 
        {
          // 2ª parte: Injeta as cores e tamanhos que decidimos / default ou personalizado
          backgroundColor: color,          
          height: thickness,               
          marginVertical: verticalMargin,  
          width: width,                    
        },
      ]}
    /> 
  );
}


const styles = StyleSheet.create({
  line: {
    // Exemplo futuro: borderRadius: 5 (faria todas as linhas do app ficarem redondinhas)
    // regras fixas.
  },
});