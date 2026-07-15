// ==============================
// SPEAK FUNCTION
// ==============================

export const speak = (
  text,
  { setState, speakingRef } = {}
) => {

  window.speechSynthesis.cancel();

  const utter = new SpeechSynthesisUtterance(text);

  utter.lang = "en-US";

  utter.rate = 1;

  utter.pitch = 1;

  utter.volume = 1;

  if (speakingRef)
    speakingRef.current = true;

  utter.onstart = () => {

    if (setState)
      setState("Speaking");

  };

  utter.onend = () => {

    if (speakingRef)
      speakingRef.current = false;

    if (setState)
      setState("Idle");

  };

  window.speechSynthesis.speak(utter);

};

// ==============================
// STOP SPEAKING
// ==============================

export const stopSpeaking = () => {

  window.speechSynthesis.cancel();

};

// ==============================
// START LISTENING
// ==============================

export const createRecognition = () => {

  const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

  if (!SpeechRecognition)
    return null;

  const recognition =
    new SpeechRecognition();

  recognition.lang = "en-US";

  recognition.continuous = false;

  recognition.interimResults = false;

  recognition.maxAlternatives = 1;

  return recognition;

};