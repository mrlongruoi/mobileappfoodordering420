import { Slot } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

/**
 * Provides a layout wrapper for authentication-related screens, displaying a header and rendering nested routes within a safe area.
 *
 * Renders a static "Auth Layout" header and includes a `Slot` component to display child routes.
 */
export default function _layout() {
  return (
    <SafeAreaView>
      <Text>Auth Layout</Text>
      <Slot />
    </SafeAreaView>
  );
}
