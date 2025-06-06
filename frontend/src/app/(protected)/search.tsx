import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import PodcastPlayer from '../../components/PodcastPlayer'

const Search: React.FC = () => {
  const [prompt, setPrompt] = useState('')
  const [pressed, setPressed] = useState(false)
  const [generatedContent, setGeneratedContent] = useState<string | null>(null)
  const [url, setUrl] = useState<string | null>(null)
  const [title, setTitle] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      return
    }

    setLoading(true)
    try {
      const response = await fetch(
        'http://localhost:8080/generate-podcast',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt }),
        }
      )
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()

      // The route returns { title, content, keywords, summary, id, audioUrl, s3Key }
      setGeneratedContent(data.content)
      setTitle(data.title)
      setUrl(data.audioUrl) // audioUrl points to S3 or wherever you stored it
      setPressed(true)
    } catch (error) {
      console.error('Error generating content:', error)
      setGeneratedContent('Failed to generate content. Please try again.')
      setPressed(true)
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
                {generatedContent && (
                  <Text style={styles.resultText}>{generatedContent}</Text>
                )}
                {url && title && (
                  <PodcastPlayer audioUrl={url} title={title} />
                )}
                <TouchableOpacity 
                  style={[styles.button, { marginTop: 20 }]} 
                  onPress={() => {
                    // Reset everything so the user can start again
                    setPressed(false)
                    setPrompt('')
                    setGeneratedContent(null)
                    setUrl(null)
                    setTitle(null)
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
    marginBottom: 16,
  },
})

export default Search
