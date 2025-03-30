import { handlers } from "@/app/utils/auth"; // Referring to the auth.ts we just created
export const { GET, POST } = handlers;
// This will handle the GET and POST requests for authentication
// The GET request is for the authentication callback URL, and the POST request is for signing in
