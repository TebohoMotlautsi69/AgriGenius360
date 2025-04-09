import { Stack } from 'expo-router';


export default () => {
 
  return (
      <Stack screenOptions={{ headerShown: false }} >
        <Stack.Screen name="index" />
        <Stack.Screen name="otpverify" />
        <Stack.Screen name="signup" />
      </Stack>
     );
}
