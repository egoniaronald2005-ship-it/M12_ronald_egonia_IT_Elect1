import React from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import ChatBoxApp from "./ChatBoxApp"; // ✅ Correct import
import CommentSection from "./CommentSection"; // ✅ Import comment section

export default function App() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <ChatBoxApp />           {/* ✅ Use ChatBoxApp here */}
        <CommentSection />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
