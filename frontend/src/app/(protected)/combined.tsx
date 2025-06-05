import React, { useState } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import SearchBar from '../../components/SearchBar';

const List: React.FC = () => {
  const [generatedContent, setGeneratedContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (prompt: string) => {
    setLoading(true);
    try {
      // First, generate the content from your podcast-audio endpoint
      const response = await fetch(
        `http://localhost:8080/podcast-audio/generate?prompt=${encodeURIComponent(
          prompt
        )}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const textResult = data.test;
      setGeneratedContent(textResult);

      // Now immediately call the TTS endpoint with the generated text.
      // We don't need to await or handle the response here.
      fetch('http://localhost:8080/tts-server', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: textResult }),
      }).catch((err) => {
        console.error('Error calling TTS API:', err);
      });
    } catch (error) {
      console.error('Error generating content:', error);
      setGeneratedContent('Failed to generate content. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>List Generator</Text>
      <SearchBar onGenerate={handleGenerate} />

      <View style={styles.content}>
        {loading && <ActivityIndicator size="large" />}
        {!loading && generatedContent && (
          <ScrollView>
            <Text style={styles.heading}>Generated Content:</Text>
            <Text style={styles.text}>{generatedContent}</Text>
          </ScrollView>
        )}
        {!loading && !generatedContent && (
          <Text style={styles.placeholder}>Enter a prompt to generate content.</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  content: {
    flex: 1,
    marginTop: 12,
  },
  heading: {
    fontSize: 20,
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
  },
  placeholder: {
    fontSize: 16,
    color: '#666',
  },
});
