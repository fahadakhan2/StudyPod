import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PodcastPlayer from '../../components/PodcastPlayer';
import VoiceSelector from '../../components/VoiceSelector';
import { AuthContext } from '@/src/utils/authContext';
import { Redirect } from 'expo-router';
  
const Index: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [selectedVoice, setSelectedVoice] = useState<string>(
    's3://voice-cloning-zero-shot/d9ff78ba-d016-47f6-b0ef-dd630f59414e/female-cs/manifest.json'
  );
  const [pressed, setPressed] = useState(false);
  const [summary, setSummary] = useState<string | null>(null);
  const [url, setUrl] = useState<string | null>(null);
  const [title, setTitle] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFreshSuccess, setShowFreshSuccess] = useState(false);

  const [isCached, setIsCached] = useState(false);
  const [isGeneratingFresh, setIsGeneratingFresh] = useState(false);

  const { firebaseId } = useContext(AuthContext);

  if (!firebaseId) {
    return <Redirect href="/(auth)/Home" />;
  }

  const handleGenerate = async (forceNew: boolean = false) => {
    if (!prompt.trim()) return;
    
    if (forceNew) {
      setIsGeneratingFresh(true);
    } else {
      setLoading(true);
    }

    try {
      if (!forceNew) {
        const query = new URLSearchParams({ prompt, firebaseId }).toString();
        const getRes = await fetch(
          `https://studypod-nvau.onrender.com/mongo/audio-file-by-keywords?${query}`
        );
        if (getRes.ok) {
          const cached = await getRes.json();
          if (cached.firebaseId !== firebaseId) {
            setTitle(cached.title);
            setUrl(cached.audioUrl);
            setSummary(cached.summary);
            setPressed(true);
            setShowSuccess(true);
            setIsCached(true);
            setLoading(false);
            setTimeout(() => setShowSuccess(false), 5000);
            return;
          }
        }
      }

      // fallback or forced: generate new
      const response = await fetch(
        'https://studypod-nvau.onrender.com/generate-podcast',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            prompt, 
            firebaseId,
            voice: selectedVoice 
          }),
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      
      // Update podcast content
      setTitle(data.title);
      setUrl(data.audioUrl);
      setSummary(data.summary);
      
      if (!forceNew) {
        setPressed(true);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        setShowFreshSuccess(true);
        setTimeout(() => setShowFreshSuccess(false), 5000);
      }
    } catch (error) {
      console.error('Error generating content:', error);
      setSummary('Failed to generate summary. Please try again.');
      if (!forceNew) {
        setPressed(true);
      }
    } finally {
      if (forceNew) {
        setTimeout(() => {
          setIsGeneratingFresh(false);
        }, 500);
      } else {
        setLoading(false);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        {showSuccess && (
          <View style={styles.successContainer}>
            <Text style={styles.successText}>Podcast saved to your playlist!</Text>
          </View>
        )}
        {showFreshSuccess && (
          <View style={styles.successContainer}>
            <Text style={styles.successText}>New version of podcast generated!</Text>
          </View>
        )}
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          keyboardShouldPersistTaps="handled"
        >
          {pressed && (
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => {
                setPressed(false);
                setPrompt('');
                setSummary(null);
                setUrl(null);
                setTitle(null);
                setIsCached(false);
              }}
            >
              <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
              <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>
          )}

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
              <VoiceSelector
                onVoiceSelect={setSelectedVoice}
                selectedVoice={selectedVoice}
              />
              <TouchableOpacity 
                style={[styles.button, loading && styles.buttonDisabled]} 
                onPress={() => handleGenerate(false)}
                disabled={loading}
              >
                {loading ? (
                  <View style={styles.loadingContainer}>
                    <ActivityIndicator size="small" color="#FFFFFF" />
                    <Text style={[styles.buttonText, styles.loadingText]}>
                      Generating Podcast...
                    </Text>
                  </View>
                ) : (
                  <Text style={styles.buttonText}>Create a Podcast</Text>
                )}
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.resultContainer}>
              {loading ? (
                <ActivityIndicator size="large" color="#5865F2" />
              ) : (
                <>
                  {summary && (
                    <Text style={styles.resultText}>{summary}</Text>
                  )}
                  {url && title && (
                    <PodcastPlayer s3Url={url} isExpanded={true} />
                  )}
                  
                  {isCached && (
                    <View style={styles.freshGenerationContainer}>
                      <Text style={styles.freshGenerationTitle}>
                        Want a Different Podcast?
                      </Text>
                      <Text style={styles.freshGenerationDescription}>
                        Generate a fresh podcast with new content. This may take a few minutes as we create unique content just for you.
                      </Text>
                      <TouchableOpacity
                        style={[
                          styles.button, 
                          isGeneratingFresh && styles.buttonDisabled
                        ]}
                        onPress={() => handleGenerate(true)}
                        disabled={isGeneratingFresh}
                      >
                        {isGeneratingFresh ? (
                          <View style={styles.loadingContainer}>
                            <ActivityIndicator size="small" color="#FFFFFF" />
                            <Text style={[styles.buttonText, styles.loadingText]}>
                              Generating Podcast...
                            </Text>
                          </View>
                        ) : (
                          <Text style={styles.buttonText}>
                            Regenerate
                          </Text>
                        )}
                      </TouchableOpacity>
                    </View>
                  )}
                </>
              )}
            </View>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23272A',
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
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
  buttonDisabled: {
    backgroundColor: '#4E5D94',
    opacity: 0.8,
  },
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  loadingText: {
    marginLeft: 8,
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
  successContainer: {
    position: 'absolute',
    top: 10,
    left: 20,
    right: 20,
    backgroundColor: '#43B581',
    padding: 16,
    borderRadius: 8,
    zIndex: 1000,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  successText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 0,
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    zIndex: 10,
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginLeft: 4,
  },
  freshGenerationContainer: {
    marginTop: 24,
    padding: 16,
    backgroundColor: '#36393F',
    borderRadius: 8,
  },
  freshGenerationTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    textAlign: 'center',
  },
  freshGenerationDescription: {
    color: '#B9BBBE',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 16,
    textAlign: 'center',
  },
});

export default Index;
