import { router } from "expo-router";
import { Button, Text, View } from "react-native";

const SignUp = () => {
  return (
    <View>
      <Text>Đăng ký</Text>
      <Button title="Đăng nhập" onPress={() => router.push("/sign-in")} />
    </View>
  );
};

export default SignUp;
