import { AuthContext } from "../../utils/authContext";
import { Redirect, Tabs } from 'expo-router';
import { useContext } from "react";

export default function TabsLayout () {

  const authState = useContext(AuthContext);
  if (!authState.isReady) {
    return null;
  }

  if (!authState.isLoggedIn) {
    return <Redirect href="/(auth)/Home" />;
  }
  return (
      <Tabs>
        <Tabs.Screen name="home" options={{headerShown: false}}/>
        <Tabs.Screen name="search" options={{headerShown: false}}/>
        <Tabs.Screen name="combined" options={{headerShown: false}}/>
        <Tabs.Screen name="frontend_audio" options={{headerShown: false}}/>
        <Tabs.Screen name="localtts" options={{headerShown: false}}/>
        <Tabs.Screen name="settings" options={{headerShown: false}}/>
        <Tabs.Screen name="index" options={{headerShown: false}}/>
    </Tabs>
  );
}