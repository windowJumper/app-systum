
import { router } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";

export default function HomeScreen() {
  const handleCreateAccount = () => {
    console.log("Create Account button clicked");
    router.push("/register");
  };

  const handleLogin = () => {
    console.log("Login button clicked");
    router.push("/login");
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        {/* Logo */}
        <View style={styles.logo}>
          <Text style={styles.logoText}>S</Text>
        </View>

        {/* App Name */}
        <Text style={styles.title}>SkillMatch</Text>

        {/* Main Heading */}
        <Text style={styles.heading}>
          Find the right skills.{"\n"}Build your future.
        </Text>

        {/* Description */}
        <Text style={styles.description}>
          Connect talented people with the right opportunities
          through skill-based job matching.
        </Text>

        {/* Features */}
        <View style={styles.features}>
          <View style={styles.featureRow}>
            <View style={styles.checkCircle}>
              <Text style={styles.checkText}>✓</Text>
            </View>

            <Text style={styles.featureText}>
              Discover relevant jobs
            </Text>
          </View>

          <View style={styles.featureRow}>
            <View style={styles.checkCircle}>
              <Text style={styles.checkText}>✓</Text>
            </View>

            <Text style={styles.featureText}>
              Showcase your skills
            </Text>
          </View>

          <View style={styles.featureRow}>
            <View style={styles.checkCircle}>
              <Text style={styles.checkText}>✓</Text>
            </View>

            <Text style={styles.featureText}>
              Connect with recruiters
            </Text>
          </View>
        </View>

        {/* Create Account Button */}
        <Pressable
          style={({ pressed }) => [
            styles.primaryButton,
            pressed && styles.pressedButton,
          ]}
          onPress={handleCreateAccount}
        >
          <Text style={styles.primaryButtonText}>
            Create Account
          </Text>
        </Pressable>

        {/* Login Button */}
        <Pressable
          style={({ pressed }) => [
            styles.secondaryButton,
            pressed && styles.pressedButton,
          ]}
          onPress={handleLogin}
        >
          <Text style={styles.secondaryButtonText}>
            Login
          </Text>
        </Pressable>

        {/* Footer */}
        <Text style={styles.footer}>
          Your skills. Your opportunities.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F8FAFC",
    paddingHorizontal: 24,
    paddingVertical: 50,
    minHeight: "100%",
  },

  logo: {
    width: 82,
    height: 82,
    borderRadius: 41,
    backgroundColor: "#2563EB",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    shadowColor: "#2563EB",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },

  logoText: {
    color: "#FFFFFF",
    fontSize: 46,
    fontWeight: "bold",
  },

  title: {
    color: "#2563EB",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 30,
  },

  heading: {
    color: "#0F172A",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 38,
    marginBottom: 18,
  },

  description: {
    color: "#64748B",
    fontSize: 15,
    textAlign: "center",
    lineHeight: 24,
    maxWidth: 400,
    marginBottom: 28,
  },

  features: {
    alignSelf: "center",
    width: "100%",
    maxWidth: 350,
    marginBottom: 34,
  },

  featureRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },

  checkCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#DBEAFE",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  checkText: {
    color: "#2563EB",
    fontSize: 15,
    fontWeight: "bold",
  },

  featureText: {
    color: "#1E293B",
    fontSize: 15,
  },

  primaryButton: {
    width: "100%",
    maxWidth: 380,
    backgroundColor: "#2563EB",
    paddingVertical: 17,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
    shadowColor: "#2563EB",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },

  secondaryButton: {
    width: "100%",
    maxWidth: 380,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#2563EB",
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  secondaryButtonText: {
    color: "#2563EB",
    fontSize: 16,
    fontWeight: "bold",
  },

  pressedButton: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },

  footer: {
    color: "#94A3B8",
    fontSize: 12,
    marginTop: 30,
  },
});