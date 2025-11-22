// src/styles/global.ts
import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // placeholder
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 88,
    height: 88,
    marginBottom: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#0B1220',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#1B2545',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: '#1B2545',
  },
  step: {
    fontSize: 15,
    color: '#1B2545',
    marginBottom: 12,
  },
  footer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#8891A6',
    fontSize: 13,
  },
  button: {
    backgroundColor: '#F4F6F9',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginBottom: 14,
    alignItems: 'center',
  },
  buttonText: {
    color: '#1B2545',
    fontSize: 16,
    fontWeight: '600',
  },
  primaryButton: {
    backgroundColor: '#2E7DFA',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 12,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: '60%',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default globalStyles;