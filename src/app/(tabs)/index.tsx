
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { router } from "expo-router";
import { supabase } from "../../lib/supabase";

type Profile = {
  id: string;
  full_name: string;
  email: string | null;
  role: "candidate" | "recruiter";
  bio: string | null;
};

export default function DashboardScreen() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProfile();
  }, []);

  async function loadProfile() {
    try {
      setLoading(true);

      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError) {
        throw userError;
      }

      if (!user) {
        router.replace("/(auth)/login");
        return;
      }

      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (error) {
        throw error;
      }

      setProfile(data);
    } catch (error: any) {
      console.error("Profile loading error:", error.message);

      Alert.alert(
        "Error",
        "Unable to load your profile. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  async function handleLogout() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      Alert.alert("Logout Error", error.message);
      return;
    }

    router.replace("/(auth)/login");
  }

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#2563EB" />
        <Text style={styles.loadingText}>Loading your dashboard...</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.header}>
        <View>
          <Text style={styles.smallText}>Welcome back 👋</Text>

          <Text style={styles.userName}>
            {profile?.full_name || "User"}
          </Text>
        </View>

        <Pressable style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </Pressable>
      </View>

      <View style={styles.welcomeCard}>
        <Text style={styles.welcomeTitle}>
          Find opportunities that match your skills.
        </Text>

        <Text style={styles.welcomeDescription}>
          Complete your profile and discover jobs that are suitable
          for your experience.
        </Text>

        <Pressable
          style={styles.primaryButton}
          onPress={() => router.push("/(tabs)/profile")}
        >
          <Text style={styles.primaryButtonText}>
            Complete Your Profile
          </Text>
        </Pressable>
      </View>

      <Text style={styles.sectionTitle}>Your Overview</Text>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>0</Text>
          <Text style={styles.statLabel}>Applications</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statNumber}>0</Text>
          <Text style={styles.statLabel}>Job Matches</Text>
        </View>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>0%</Text>
          <Text style={styles.statLabel}>Profile Completion</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statNumber}>0</Text>
          <Text style={styles.statLabel}>Saved Jobs</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Quick Actions</Text>

      <Pressable
        style={styles.actionCard}
        onPress={() => router.push("/(tabs)/jobs")}
      >
        <Text style={styles.actionTitle}>🔎 Explore Jobs</Text>
        <Text style={styles.actionDescription}>
          Search for jobs based on your skills.
        </Text>
      </Pressable>

      <Pressable
        style={styles.actionCard}
        onPress={() => router.push("/(tabs)/matches")}
      >
        <Text style={styles.actionTitle}>✨ View Matches</Text>
        <Text style={styles.actionDescription}>
          See jobs that match your profile.
        </Text>
      </Pressable>

      <Pressable
        style={styles.actionCard}
        onPress={() => router.push("/(tabs)/profile")}
      >
        <Text style={styles.actionTitle}>👤 Update Profile</Text>
        <Text style={styles.actionDescription}>
          Add your skills, bio, and professional information.
        </Text>
      </Pressable>

      <View style={styles.accountCard}>
        <Text style={styles.accountTitle}>Account Information</Text>

        <Text style={styles.accountText}>
          Name: {profile?.full_name || "Not available"}
        </Text>

        <Text style={styles.accountText}>
          Email: {profile?.email || "Not available"}
        </Text>

        <Text style={styles.accountText}>
          Role: {profile?.role || "Not available"}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  contentContainer: {
    padding: 20,
    paddingBottom: 40,
  },

  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8FAFC",
  },

  loadingText: {
    marginTop: 12,
    color: "#64748B",
    fontSize: 14,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },

  smallText: {
    color: "#64748B",
    fontSize: 14,
    marginBottom: 5,
  },

  userName: {
    color: "#0F172A",
    fontSize: 25,
    fontWeight: "800",
  },

  logoutButton: {
    borderWidth: 1,
    borderColor: "#DC2626",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },

  logoutText: {
    color: "#DC2626",
    fontSize: 12,
    fontWeight: "700",
  },

  welcomeCard: {
    backgroundColor: "#2563EB",
    borderRadius: 20,
    padding: 22,
    marginBottom: 28,
  },

  welcomeTitle: {
    color: "#FFFFFF",
    fontSize: 23,
    fontWeight: "800",
    lineHeight: 31,
    marginBottom: 12,
  },

  welcomeDescription: {
    color: "#DBEAFE",
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 20,
  },

  primaryButton: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingVertical: 13,
    alignItems: "center",
  },

  primaryButtonText: {
    color: "#2563EB",
    fontSize: 14,
    fontWeight: "800",
  },

  sectionTitle: {
    color: "#0F172A",
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 14,
  },

  statsContainer: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 12,
  },

  statCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 18,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  statNumber: {
    color: "#2563EB",
    fontSize: 25,
    fontWeight: "800",
    marginBottom: 5,
  },

  statLabel: {
    color: "#64748B",
    fontSize: 12,
  },

  actionCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 18,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  actionTitle: {
    color: "#0F172A",
    fontSize: 16,
    fontWeight: "800",
    marginBottom: 6,
  },

  actionDescription: {
    color: "#64748B",
    fontSize: 13,
    lineHeight: 19,
  },

  accountCard: {
    backgroundColor: "#EFF6FF",
    borderRadius: 14,
    padding: 18,
    marginTop: 12,
  },

  accountTitle: {
    color: "#1E40AF",
    fontSize: 16,
    fontWeight: "800",
    marginBottom: 12,
  },

  accountText: {
    color: "#1E3A8A",
    fontSize: 13,
    marginBottom: 7,
  },
});