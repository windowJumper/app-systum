
import { router } from "expo-router";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Logo */}
        <View style={styles.logoCircle}>
          <Text style={styles.logoText}>S</Text>
        </View>

        {/* Brand Name */}
        <Text style={styles.brandName}>SkillMatch</Text>

        {/* Heading */}
        <Text style={styles.heading}>
          Find the right skills.
          {"\n"}
          Build your future.
        </Text>

        {/* Description */}
        <Text style={styles.description}>
          Connect talented people with the right opportunities
          through skill-based job matching.
        </Text>

        {/* Features */}
        <View style={styles.features}>
          <View style={styles.featureItem}>
            <Text style={styles.featureIcon}>✓</Text>
            <Text style={styles.featureText}>
              Discover relevant jobs
            </Text>
          </View>

          <View style={styles.featureItem}>
            <Text style={styles.featureIcon}>✓</Text>
            <Text style={styles.featureText}>
              Showcase your skills
            </Text>
          </View>

          <View style={styles.featureItem}>
            <Text style={styles.featureIcon}>✓</Text>
            <Text style={styles.featureText}>
              Connect with recruiters
            </Text>
          </View>
        </View>

        {/* Buttons */}
        <View style={styles.buttons}>
          <Pressable
            style={({ pressed }) => [
              styles.primaryButton,
              pressed && styles.buttonPressed,
            ]}
            onPress={() => router.push("/(auth)/register")}
          >
            <Text style={styles.primaryButtonText}>
              Create Account
            </Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              styles.secondaryButton,
              pressed && styles.buttonPressed,
            ]}
            onPress={() => router.push("/(auth)/login")}
          >
            <Text style={styles.secondaryButtonText}>
              Login
            </Text>
          </Pressable>
        </View>

        {/* Footer */}
        <Text style={styles.footer}>
          Your skills. Your opportunities.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 28,
  },

  logoCircle: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: "#2563EB",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    shadowColor: "#2563EB",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 8,
  },

  logoText: {
    color: "#FFFFFF",
    fontSize: 52,
    fontWeight: "800",
  },

  brandName: {
    color: "#1D4ED8",
    fontSize: 30,
    fontWeight: "800",
    marginBottom: 28,
  },

  heading: {
    color: "#0F172A",
    fontSize: 32,
    fontWeight: "800",
    lineHeight: 40,
    textAlign: "center",
    marginBottom: 18,
  },

  description: {
    color: "#64748B",
    fontSize: 16,
    lineHeight: 25,
    textAlign: "center",
    maxWidth: 380,
    marginBottom: 28,
  },

  features: {
    width: "100%",
    maxWidth: 380,
    marginBottom: 34,
  },

  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },

  featureIcon: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: "#DBEAFE",
    color: "#2563EB",
    fontSize: 16,
    fontWeight: "800",
    textAlign: "center",
    lineHeight: 26,
    marginRight: 12,
  },

  featureText: {
    color: "#334155",
    fontSize: 15,
    fontWeight: "500",
  },

  buttons: {
    width: "100%",
    maxWidth: 380,
    gap: 12,
  },

  primaryButton: {
    backgroundColor: "#2563EB",
    borderRadius: 14,
    paddingVertical: 17,
    alignItems: "center",
    shadowColor: "#2563EB",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },

  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },

  secondaryButton: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1.5,
    borderColor: "#2563EB",
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: "center",
  },

  secondaryButtonText: {
    color: "#2563EB",
    fontSize: 16,
    fontWeight: "700",
  },

  buttonPressed: {
    opacity: 0.7,
  },

  footer: {
    color: "#94A3B8",
    fontSize: 12,
    marginTop: 28,
  },
});