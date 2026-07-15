import { useEffect, useRef, useState } from "react";

import {
  Container,
  OrbWrapper,
  OuterRing,
  MiddleRing,
  InnerRing,
  Core,
  Glow,
  Title,
  Subtitle,
  Status,
  ConversationBox,
  UserMessage,
  AIMessage,
} from "./CenterOrbStyles";

const AI_API = "http://localhost:5000/api/ai/chat";
const TASK_API = "http://localhost:5000/api/task";
import { commandRouter } from "./commandRouter";

function CenterOrb() {
  const recognitionRef = useRef(null);
  const speakingRef = useRef(false);

  const [state, setState] = useState("Idle");
  const [userMessage, setUserMessage] = useState("");
  const [reply, setReply] = useState("");

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setState("Listening");
    };

//    recognition.onresult = async (event) => {

//   const text = event.results[0][0].transcript;

//   setUserMessage(text);

//   const result = await commandRouter(text);

//   setReply(result.reply);

//   speak(result.reply);

//   refreshDashboard();

// };


recognition.onresult = async (event) => {
  const text = event.results[0][0].transcript;

  console.log("Voice :", text);

  setUserMessage(text);

  try {
    const result = await commandRouter(text);

    console.log("Router Result :", result);

    setReply(result.reply);

    speak(result.reply);

    refreshDashboard();
  } catch (err) {
    console.log("Router Error :", err);
  }
};

    recognition.onerror = () => {
      setState("Idle");
    };

    recognition.onend = () => {
      if (!speakingRef.current) {
        setState("Idle");
      }
    };

    recognitionRef.current = recognition;

    setTimeout(() => {
      speak(
        "Hello Amna Khan. I am LAMA, your personal AI assistant. How can I help you today?"
      );
    }, 1000);
  }, []);

  //-------------------------------------

  const speak = (text) => {
    window.speechSynthesis.cancel();

    const utter = new SpeechSynthesisUtterance(text);

    utter.lang = "en-US";
    utter.rate = 1;
    utter.pitch = 1;

    speakingRef.current = true;

    utter.onstart = () => {
      setState("Speaking");
    };

    utter.onend = () => {
      speakingRef.current = false;
      setState("Idle");
    };

    window.speechSynthesis.speak(utter);
  };

  //-------------------------------------

  const sendToAI = async (message) => {
    setState("Processing");

    try {
      const response = await fetch(AI_API, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          message,
        }),
      });

      const data = await response.json();

      let aiReply =
        data.reply ||
        data.message ||
        "Command Executed.";

      if (typeof aiReply === "object") {
        aiReply = JSON.stringify(aiReply);
      }

      setReply(aiReply);

      speak(aiReply);
    } catch (err) {
      console.log(err);

      setReply("Backend Connection Failed");

      speak("Backend Connection Failed");
    }
  };

  //-------------------------------------

  const startListening = () => {
    if (state === "Listening") return;

    recognitionRef.current.start();
  };

  //-------------------------------------

   const refreshDashboard = () => {
  window.dispatchEvent(new Event("refresh-dashboard"));
};







  return (
    <Container>
      <OrbWrapper onClick={startListening}>
        <Glow state={state} />

        <OuterRing state={state} />

        <MiddleRing state={state} />

        <InnerRing state={state} />

        <Core state={state}>
          <Title>LAMA</Title>

          <Subtitle>Personal AI Assistant</Subtitle>
        </Core>
      </OrbWrapper>

      <Status>{state}</Status>

      <ConversationBox>
        {userMessage && (
          <UserMessage>
            <b>You :</b> {userMessage}
          </UserMessage>
        )}

        {reply && (
          <AIMessage>
            <b>LAMA :</b> {reply}
          </AIMessage>
        )}
      </ConversationBox>
    </Container>
  );
}

export default CenterOrb;