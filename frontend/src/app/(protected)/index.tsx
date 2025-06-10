import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import PodcastPlayer from '../../components/PodcastPlayer'

const Home = () => {
  const [prompt, setPrompt] = useState('')
  const [pressed, setPressed] = useState(false)
  const [generatedContent, setGeneratedContent] = useState<string | null>(null)
  const [url, setUrl] = useState<string | null>(null)
  const [title, setTitle] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleGenerate = async () => {
    setLoading(true)
    try {
       const response = await fetch(
      'http://localhost:8080/generate-podcast',   // 👈 replace with your dev-machine IP
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      },
    );
      console.log('Response status:', response.status)
      if (!response.ok) {
        const errorText = await response.text()
        console.error('Error response:', errorText)
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`)
      }
      const data = await response.json()
      console.log('Response data:', data)
      setGeneratedContent(data.content)
      setPressed(true)
      setUrl(data.audioUrl)
      setTitle(data.title)
      console.log('State after update:', {
        content: data.content,
        url: data.audioUrl,
        title: data.title
      })
    } catch (error) {
      console.error('Error generating content:', error)
      setGeneratedContent('Failed to generate content. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>StudyPod</Text>
        <Text style={styles.subtitle}>Generate podcasts on any topic</Text>
        
        {!pressed ? (
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter a topic or prompt..."
              placeholderTextColor="#72767D"
              value={prompt}
              onChangeText={setPrompt}
              multiline
            />
            <TouchableOpacity 
              style={styles.button} 
              onPress={handleGenerate}
            >
              <Text style={styles.buttonText}>Generate Podcast</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.resultContainer}>
            {loading ? (
              <ActivityIndicator size="large" color="#5865F2" />
            ) : (
              <>
                <Text style={styles.resultText}>{generatedContent}</Text>
                {url && title && (
                  <PodcastPlayer s3Url={url} />
                )}
                <TouchableOpacity 
                  style={[styles.button, { marginTop: 20 }]} 
                  onPress={() => {
                    setPressed(false);
                    setPrompt('');
                    setGeneratedContent(null);
                    setUrl(null);
                    setTitle(null);
                  }}
                >
                  <Text style={styles.buttonText}>Start a New Podcast</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23272A',
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#B9BBBE',
    marginBottom: 32,
  },
  inputContainer: {
    width: '100%',
    maxWidth: 500,
  },
  input: {
    backgroundColor: '#2C2F33', 
    borderRadius: 8,
    padding: 16,
    color: '#FFFFFF',
    fontSize: 16,
    minHeight: 100,
    textAlignVertical: 'top',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#5865F2', 
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  resultContainer: {
    width: '100%',
    maxWidth: 500,
    padding: 20,
    backgroundColor: '#2C2F33',
    borderRadius: 8,
  },
  resultText: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 24,
  },
})

export default Home