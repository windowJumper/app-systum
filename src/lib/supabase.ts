
import "react-native-url-polyfill/auto";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";
import {
  createClient,
  type SupportedStorage,
} from "@supabase/supabase-js";

// Read environment variables
const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabasePublishableKey =
  process.env.EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

// Check environment variables
if (!supabaseUrl || !supabasePublishableKey) {
  throw new Error(
    "Supabase environment variables are missing. Check your .env file."
  );
}

/**
 * Safe storage for web.
 *
 * During Expo Router server rendering, window and localStorage
 * might not be available. Therefore, we check for their existence.
 */
const webStorage: SupportedStorage = {
  getItem: async (key: string): Promise<string | null> => {
    if (typeof window === "undefined") {
      return null;
    }

    return window.localStorage.getItem(key);
  },

  setItem: async (key: string, value: string): Promise<void> => {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem(key, value);
  },

  removeItem: async (key: string): Promise<void> => {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.removeItem(key);
  },
};

/**
 * Select the correct storage system.
 *
 * Native: AsyncStorage
 * Web: localStorage with server-side safety checks
 */
const storage: SupportedStorage =
  Platform.OS === "web" ? webStorage : AsyncStorage;

/**
 * Supabase client
 */
export const supabase = createClient(
  supabaseUrl,
  supabasePublishableKey,
  {
    auth: {
      storage,

      // Keep users logged in between app launches
      persistSession: true,

      // Automatically refresh expired sessions
      autoRefreshToken: true,

      // Do not detect OAuth sessions from the URL
      detectSessionInUrl: false,
    },
  }
);