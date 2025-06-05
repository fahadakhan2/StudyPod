import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, Alert, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import {createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Ionicons } from '@expo/vector-icons';
import {auth} from '@/firebaseConfig';
import { AuthContext } from '@/src/utils/authContext';
import { useContext } from 'react';

export default function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();
    const authContext = useContext(AuthContext);

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password: string) => {
        // Check if password meets minimum length requirement
        const isLengthValid = password.length >= 8;
        
        // Check if password contains at least one uppercase letter
        const hasUpperCase = /[A-Z]/.test(password);
        
        // Check if password contains at least one lowercase letter
        const hasLowerCase = /[a-z]/.test(password);
        
        // Check if password contains at least one number
        const hasNumber = /[0-9]/.test(password);
        
        // Check if password contains at least one special character
        const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
        
        // Return true only if all criteria are met
        return isLengthValid && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
    };

    const handleSignUp = async () => {
        setErrorMessage(''); // Clear any previous errors
        
        // Form validation
        if (!name || !email || !password || !confirmPassword) {
            setErrorMessage('Please fill in all fields');
            return;
        }

        if (!validateEmail(email)) {
            setErrorMessage('Please enter a valid email address');
            return;
        }

        if (!validatePassword(password)) {
            setErrorMessage('Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match');
            return;
        }

        setLoading(true);
        
        try {
            // Create user with email and password
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            
            // Update profile with display name
            await updateProfile(user, {
                displayName: name
            });
            
            console.log("User registered:", user.email);
            
            // Navigate to the main app or onboarding
            authContext.logIn(); // Update auth context state
            // TODO: Navigate to info page to get user interests. 
            router.replace('/info');
        } catch (error: any) {
            const errorCode = error.code;
            const errorMessage = error.message;
            
            let message = 'Failed to create account. Please try again.';
            if (errorCode === 'auth/email-already-in-use') {
                message = 'This email is already registered. Please use another email or log in.';
            } else if (errorCode === 'auth/weak-password') {
                message = 'Password is too weak. Please choose a stronger password.';
            } else if (errorCode === 'auth/invalid-email') {
                message = 'Please enter a valid email address';
            }
            
            setErrorMessage(message);
            console.error(errorCode, errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="#333" />
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Create Account</Text>
                <Text style={styles.subtitle}>Sign up to get started</Text>

                {errorMessage ? (
                    <View style={styles.errorContainer}>
                        <Ionicons name="alert-circle" size={20} color="#FF3B30" />
                        <Text style={styles.errorText}>{errorMessage}</Text>
                    </View>
                ) : null}

                <View style={styles.form}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Full Name</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your full name"
                            value={name}
                            onChangeText={setName}
                            autoCapitalize="words"
                            placeholderTextColor={'#666'}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your email"
                            value={email}
                            onChangeText={setEmail}
                            autoCapitalize="none"
                            keyboardType="email-address"
                            placeholderTextColor={'#666'}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Password</Text>
                        <View style={styles.passwordContainer}>
                            <TextInput
                                style={styles.passwordInput}
                                placeholder="Create a password"
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry={!showPassword}
                                placeholderTextColor={'#666'}
                            />
                            <TouchableOpacity 
                                onPress={() => setShowPassword(!showPassword)}
                                style={styles.eyeIcon}
                            >
                                <Ionicons 
                                    name={showPassword ? "eye-off" : "eye"} 
                                    size={24} 
                                    color="#666" 
                                />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.passwordHint}>
                            Password must be at least 6 characters
                        </Text>
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Confirm Password</Text>
                        <View style={styles.passwordContainer}>
                            <TextInput
                                style={styles.passwordInput}
                                placeholder="Confirm your password"
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                                secureTextEntry={!showConfirmPassword}
                                placeholderTextColor={'#666'}
                            />
                            <TouchableOpacity 
                                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                                style={styles.eyeIcon} >
                                <Ionicons 
                                    name={showConfirmPassword ? "eye-off" : "eye"} 
                                    size={24} 
                                    color="#666" 
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <TouchableOpacity 
                        style={styles.button} 
                        onPress={handleSignUp}
                        disabled={loading}
                    >
                        {loading ? (
                            <ActivityIndicator color="#FFFFFF" />
                        ) : (
                            <Text style={styles.buttonText}>Sign Up</Text>
                        )}
                    </TouchableOpacity>
                </View>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>Already have an account? </Text>
                    <TouchableOpacity onPress={() => router.push('/LogIn')}>
                        <Text style={styles.loginText}>Log In</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.termsText}>
                    By signing up, you agree to our{' '}
                    <Text style={styles.linkText} onPress={() => router.push('/')}>
                        Terms of Service
                    </Text>{' '}
                    and{' '}
                    <Text style={styles.linkText} onPress={() => router.push('/')}>
                        Privacy Policy
                    </Text>
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#23272A', // Not Quite Black
    },
    header: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    backButton: {
        padding: 8,
    },
    content: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 8,
        marginTop: 20,
    },
    subtitle: {
        fontSize: 16,
        color: '#B9BBBE',
        marginBottom: 30,
    },
    form: {
        marginBottom: 20,
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        color: '#FFFFFF',
        marginBottom: 8,
        fontWeight: '500',
    },
    input: {
        backgroundColor: '#2C2F33', // Dark Not Black
        borderRadius: 8,
        padding: 16,
        fontSize: 16,
        color: '#FFFFFF',
    },
    passwordContainer: {
        flexDirection: 'row',
        backgroundColor: '#2C2F33', // Dark Not Black
        borderRadius: 8,
        alignItems: 'center',
    },
    passwordInput: {
        flex: 1,
        padding: 16,
        fontSize: 16,
        color: '#FFFFFF',
    },
    eyeIcon: {
        padding: 10,
    },
    passwordHint: {
        fontSize: 12,
        color: '#B9BBBE',
        marginTop: 6,
    },
    button: {
        backgroundColor: '#5865F2', // Blurple
        borderRadius: 8,
        paddingVertical: 16,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20,
    },
    footerText: {
        color: '#B9BBBE',
        fontSize: 14,
    },
    loginText: {
        color: '#5865F2', // Blurple
        fontWeight: '600',
        fontSize: 14,
    },
    termsText: {
        textAlign: 'center',
        fontSize: 12,
        color: '#B9BBBE',
        marginBottom: 30,
        paddingHorizontal: 20,
    },
    linkText: {
        color: '#5865F2', // Blurple
        fontWeight: '500',
    },
    errorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ED4245', // Discord Red
        padding: 12,
        borderRadius: 8,
        marginBottom: 20,
        opacity: 0.9,
    },
    errorText: {
        color: '#FFFFFF',
        marginLeft: 8,
        flex: 1,
        fontSize: 14,
    },
});