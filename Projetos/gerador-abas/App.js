import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import TabRoutes from './src/navigation/TabRoutes.jsx';

export default function App() {
  return (
    
      <PaperProvider>
        <NavigationContainer>
          <TabRoutes />
        </NavigationContainer>
      </PaperProvider>
    
  );
}
