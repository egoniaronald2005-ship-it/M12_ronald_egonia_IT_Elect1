import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";

// 🖼️ Import your local photo
const ronald = require('./assets/ronald.jpg');

export default function App() {
  const [messages, setMessages] = useState([
    { id: "1", text: "Hello! RONALD 👋", sender: "other" },
    { id: "2", text: "Heyyy wanna chat!!! 😄", sender: "me" },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;

    const newMessage = {
      id: Date.now().toString(),
      text: input,
      sender: "me",
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    // Auto reply after 1.5 seconds
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          text: "Sure! How are you today? 😊",
          sender: "other",
        },
      ]);
    }, 1500);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageRow,
              item.sender === "me"
                ? styles.myMessageRow
                : styles.otherMessageRow,
            ]}
          >
            {/* 👤 Avatar on the LEFT for other sender */}
            {item.sender === "other" && (
              <Image
                source={{
                  uri: "ronald.jpg",
                }}
                style={styles.avatar}
              />
            )}

            {/* 💬 Message Bubble */}
            <View
              style={[
                styles.messageContainer,
                item.sender === "me" ? styles.myMessage : styles.otherMessage,
              ]}
            >
              <Text style={styles.messageText}>{item.text}</Text>
            </View>

            {/* 🧑‍💼 Your profile (right side) */}
            {item.sender === "me" && (
              <Image source={ronald} style={styles.avatar} />
            )}
          </View>
        )}
      />

      {/* ✏️ Input area */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Type a message..."
          placeholderTextColor="#888"
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendText}>Send</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// 💅 Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    padding: 10,
  },
  messageRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginVertical: 5,
  },
  otherMessageRow: {
    justifyContent: "flex-start",
  },
  myMessageRow: {
    justifyContent: "flex-end",
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  messageContainer: {
    padding: 10,
    borderRadius: 10,
    maxWidth: "70%",
  },
  myMessage: {
    backgroundColor: "#DCF8C6",
    borderTopRightRadius: 0,
  },
  otherMessage: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 0,
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  input: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: "#007AFF",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  sendText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
