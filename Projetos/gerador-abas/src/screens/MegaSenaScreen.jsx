import { useState } from "react";
import { View, Text, FlatList } from "react-native";
import { Button, Card } from "react-native-paper";

const MegaSenaScreen = () => {
    
    const [numeros, setNumeros] = useState([]);

    const geraNumeros = () => {
        const numerosSorteados = [];

        while (numerosSorteados.length < 6) {
            const numeroAleatorio = Math.floor(Math.random() * 60) + 1;
            if (!numerosSorteados.includes(numeroAleatorio)) {
                numerosSorteados.push(numeroAleatorio);
            }
        }

        setNumeros([...numeros, numerosSorteados]);
        console.log(numeros);   
    }

    return (
        <>
       <Card>
         <Card.Content>
           <Button
             mode="contained"
             onPress={geraNumeros}
           >
             Gerar Números
           </Button>
         </Card.Content>
       </Card>
       <Card>
         <Card.Content>
           <Text>Números Sorteados:</Text>
           <FlatList
             data={numeros}
             renderItem={({ item }) => (
               <Text>{item.join(", ")}</Text>
             )}
           />
         </Card.Content>
       </Card>
        </>
    );
};

export default MegaSenaScreen;
