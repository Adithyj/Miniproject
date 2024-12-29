// src/components/VoiceAssistant.js
import React, { useEffect } from 'react';

const VoiceAssistant = ({ onCommand }) => {
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.error("SpeechRecognition API not supported in this browser.");
      return; // Exit if the API is not supported
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const command = event.results[0][0].transcript;
      onCommand(command);
    };

    recognition.start();

    return () => {
      recognition.stop();
    };
  }, [onCommand]);

  return null; // This component does not render anything
};

export default VoiceAssistant;