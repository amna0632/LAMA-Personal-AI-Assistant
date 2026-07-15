import { useState } from "react";
import axios from "axios";
import useVoice from "../../hooks/useVoice";

import {
  Wrapper,
  Input,
  ButtonGroup,
  VoiceButton,
  SendButton,
  ResponseBox,
} from "./CommandBarStyles";

const CommandBar = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const executeCommand = async (command) => {
    if (!command.trim()) return;

    setMessage(command);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/ai/chat",
        {
          message: command,
        }
      );

      setResponse(
        res.data.reply ||
          res.data.response ||
          res.data.message ||
          "Command Executed Successfully"
      );
    } catch (err) {
      console.log(err);

      setResponse("Backend Error");
    }
  };

  const { listening, startListening } = useVoice({
    onResult: (text) => {
      executeCommand(text);
    },
  });

  return (
    <Wrapper>
      <Input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Say or Type a Command..."
      />

      <ButtonGroup>
        <VoiceButton onClick={startListening}>
          {listening ? "🎙" : "🎤"}
        </VoiceButton>

        <SendButton onClick={() => executeCommand(message)}>
          Execute
        </SendButton>
      </ButtonGroup>

      <ResponseBox>{response}</ResponseBox>
    </Wrapper>
  );
};

export default CommandBar;