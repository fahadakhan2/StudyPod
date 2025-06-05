import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from "expo-router";
import axios from 'axios';

interface Interest {
  id: string;
  name: string;
  category: string;
}

const INTEREST_CATEGORIES = {
  "Academic": [
    "Mathematics",
    "Science",
    "History",
    "Literature",
    "Languages",
    "Philosophy",
  ],
  "Technology": [
    "Programming",
    "Web Development",
    "Mobile Development",
    "Data Science",
    "Artificial Intelligence",
    "Cybersecurity",
  ],
  "Creative": [
    "Art",
    "Music",
    "Design",
    "Photography",
    "Writing",
    "Film",
  ],
  "Professional": [
    "Business",
    "Marketing",
    "Finance",
    "Psychology",
    "Leadership",
    "Entrepreneurship",
  ],
  "Health & Wellness": [
    "Fitness",
    "Nutrition",
    "Mental Health",
    "Yoga",
    "Meditation",
    "Sports",
  ],
};

const MINIMUM_INTERESTS = 3;

const Info = () => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [interests, setInterests] = useState<Interest[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchInterests();
  }, []);

  const fetchInterests = async () => {
    try {
      const response = await axios.get('/api/interests');
      setInterests(response.data);
    } catch (error) {
      console.error('Error fetching interests:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleInterest = (interestId: string) => {
    setSelectedInterests(prev =>
      prev.includes(interestId)
        ? prev.filter(id => id !== interestId)
        : [...prev, interestId]
    );
  };

  const handleSubmit = async () => {
    if (selectedInterests.length < MINIMUM_INTERESTS) return;
    
    setIsSubmitting(true);
    try {
      await axios.post('/api/interests', { interests: selectedInterests });
      router.push("/discovery");
    } catch (error) {
      console.error('Error saving interests:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getProgressPercentage = () => {
    return Math.min((selectedInterests.length / MINIMUM_INTERESTS) * 100, 100);
  };

  if (isLoading) {
    return (
      <View style={[styles.container, styles.centered]}>
        <ActivityIndicator size="large" color="#5865F2" />
      </View>
    );
  }

  // Group interests by category
  const interestsByCategory = interests.reduce((acc, interest) => {
    if (!acc[interest.category]) {
      acc[interest.category] = [];
    }
    acc[interest.category].push(interest);
    return acc;
  }, {} as Record<string, Interest[]>);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View 
              style={[
                styles.progressFill, 
                { width: `${getProgressPercentage()}%` }
              ]} 
            />
          </View>
          <Text style={styles.progressText}>
            {selectedInterests.length}/{MINIMUM_INTERESTS} interests selected
          </Text>
        </View>

        <Text style={styles.title}>Welcome to StudyPod!</Text>
        <Text style={styles.subtitle}>
          Select at least {MINIMUM_INTERESTS} interests to help us personalize your learning experience
        </Text>
        
        {Object.entries(interestsByCategory).map(([category, categoryInterests]) => (
          <View key={category} style={styles.categoryContainer}>
            <Text style={styles.categoryTitle}>
              <MaterialIcons name="category" size={20} color="#5865F2" /> {category}
            </Text>
            <View style={styles.interestsContainer}>
              {categoryInterests.map((interest) => (
                <TouchableOpacity
                  key={interest.id}
                  style={[
                    styles.interestButton,
                    selectedInterests.includes(interest.id) && styles.selectedInterest,
                  ]}
                  onPress={() => toggleInterest(interest.id)}
                >
                  <Text
                    style={[
                      styles.interestText,
                      selectedInterests.includes(interest.id) && styles.selectedInterestText,
                    ]}
                  >
                    {interest.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}

        <TouchableOpacity
          style={[
            styles.submitButton,
            (selectedInterests.length < MINIMUM_INTERESTS || isSubmitting) && styles.disabledButton,
          ]}
          onPress={handleSubmit}
          disabled={selectedInterests.length < MINIMUM_INTERESTS || isSubmitting}
        >
          {isSubmitting ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.submitButtonText}>
              Continue to Your Feed
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Info;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23272A',
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: 20,
    paddingTop: 40,
  },
  progressContainer: {
    marginBottom: 30,
  },
  progressBar: {
    height: 6,
    backgroundColor: '#2C2F33',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#5865F2',
    borderRadius: 3,
  },
  progressText: {
    marginTop: 8,
    fontSize: 14,
    color: '#B9BBBE',
    textAlign: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#B9BBBE',
    marginBottom: 30,
    textAlign: 'center',
    lineHeight: 22,
  },
  categoryContainer: {
    marginBottom: 24,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  interestsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  interestButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#2C2F33',
    borderWidth: 1,
    borderColor: '#40444B',
    marginBottom: 10,
  },
  selectedInterest: {
    backgroundColor: '#5865F2',
    borderColor: '#5865F2',
  },
  interestText: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  selectedInterestText: {
    color: '#FFFFFF',
  },
  submitButton: {
    backgroundColor: '#5865F2',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  disabledButton: {
    backgroundColor: '#40444B',
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});