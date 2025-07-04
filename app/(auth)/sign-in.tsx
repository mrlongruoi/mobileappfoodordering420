import { router } from "expo-router";
import { Button, Text, View } from "react-native";

const SignIn = () => {
  return (
    <View>
      <Text>Đăng nhập</Text>
      <Button title="Đăng ký" onPress={() => router.push("/sign-up")} />
    </View>
  );
};

export default SignIn;
