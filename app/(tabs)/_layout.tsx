import { Redirect, Slot } from "expo-router";

/**
 * Enforces authentication for all nested routes by redirecting unauthenticated users to the sign-in page.
 *
 * If the user is not authenticated, redirects to `/sign-in`. Otherwise, renders the nested route content.
 */
export default function _layout() {
  const isAuthenticated = false;

  if (!isAuthenticated) return <Redirect href="/sign-in" />;

  return <Slot />;
}
