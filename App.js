import React from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import SemiAct1App from "./SemiAct1App"; // ✅ only one correct import
import CommentSection from "./CommentSection"; // ✅ import your comment section

export default function App() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <SemiAct1App />           {/* ✅ correct self-closing tag */}
        <CommentSection />
      </ScrollView>
    </KeyboardAvoidingView>
  );
             }
