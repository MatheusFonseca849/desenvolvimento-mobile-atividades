import { View, Text, Image } from "react-native";
import { Button, Card } from "react-native-paper";
import animais from "../data/bichoDatabase";
import { useState } from "react";

const JogoDoBichoScreen = () => {

    const [animalGerado, setAnimalGerado] = useState({})

    const geraAnimal = () => {
        const animalAleatorio = animais[Math.floor(Math.random() * animais.length)];
        setAnimalGerado(animalAleatorio);
    }

    return (
        <View>
            <Text>Jogo do Bicho</Text>
            <Button
                mode="contained"
                onPress={geraAnimal}
            >
                Gerar Animal
            </Button>
            <Card>
                <Card.Content>
                    <Text>Animal Gerado:</Text>
                    <Text>{animalGerado.nome}</Text>
                    <Image source={{ uri: animalGerado.imagem }} style={{ width: 100, height: 100 }} />
                </Card.Content>
            </Card>
        </View>
    );
};

export default JogoDoBichoScreen;
