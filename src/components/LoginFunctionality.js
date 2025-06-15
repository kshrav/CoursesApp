// Simple login validation logic for demonstration
export function handleLogin(email, password) {
  // Example hard-coded credentials
  const validEmail = "user@example.com";
  const validPassword = "password123";

  if (email === validEmail && password === validPassword) {
    return { success: true, message: "Login successful!" };
  } else {
    return { success: false, message: "Invalid email or password." };
  }
}