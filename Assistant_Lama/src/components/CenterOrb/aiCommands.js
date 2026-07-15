const AI_API = "http://localhost:5000/api/ai/chat";

export async function sendToAI(message) {

  const res = await fetch(AI_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message,
    }),
  });

  const data = await res.json();

  let reply =
    data.reply ||
    data.message ||
    "Command Executed.";

  if (typeof reply === "object") {
    reply = JSON.stringify(reply);
  }

  return {
    handled: false,
    reply,
  };
}