import { Stack } from "expo-router";

export default function ScreensLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }} initialRouteName="login">
      <Stack.Screen
        name="login"
        options={{
          title: "Login",
        }}
      />
    </Stack>
  );
}
