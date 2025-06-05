import { useState, useEffect } from "react";
import { Text, View, ActivityIndicator } from "react-native";

export const GeminiGenerate = ({ prompt }: { prompt: string }) => {
    const [generatedContent, setGeneratedContent] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        const fetchContent = async () => {
            setLoading(true);
            try {
                const response = await fetch(
                    `http://localhost:8080/tts-gemini/generate?prompt=${encodeURIComponent(
                        prompt
                    )}`
                );
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setGeneratedContent(data.test);
            } catch (error) {
                console.error('Error generating content:', error);
                setGeneratedContent('Failed to generate content. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        fetchContent();
    }, [prompt]);

    if (loading) {
        return (
            <View style={{ padding: 20 }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <View style={{ padding: 20 }}>
            <Text>{generatedContent || 'No content generated yet'}</Text>
        </View>
    );
};