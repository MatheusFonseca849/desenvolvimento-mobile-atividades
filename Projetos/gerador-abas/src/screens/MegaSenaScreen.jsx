import { useState } from "react";
import { View, Text, FlatList } from "react-native";
import { Button, Card } from "react-native-paper";

const MegaSenaScreen = () => {
    
    const [numeros, setNumeros] = useState([]);

    const geraNumeros = () => {
        const numerosSorteados = new Set();

        while (numerosSorteados.size < 6) {
            const numeroAleatorio = Math.floor(Math.random() * 60) + 1;
            numerosSorteados.add(numeroAleatorio);
        }

        setNumeros([...numeros, numerosSorteados]);
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
               <Text>{Array.from(item).join(", ")}</Text>
             )}
           />
         </Card.Content>
       </Card>
        </>
    );
};

export default MegaSenaScreen;
