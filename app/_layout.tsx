import { Stack } from "expo-router";
import { Button } from "react-native";

const RootLayout = () => {
    return (
    <Stack
    screenOptions={{
        headerStyle: {
          backgroundColor: '#ff0000',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        
        <Stack.Screen 
        name="(tabs)"
        options={{
            headerShown: false,
            headerRight: () => <Button title="Profile" />,
        }}
        />
    </Stack>
    )
}

export default RootLayout;