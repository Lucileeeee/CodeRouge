const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OpenAiKey,
});

async function testChat(prompt) {
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });

  return completion.choices[0].message.content;
}

module.exports = testChat;

/* import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OpenAiKey,
});

const completion = openai.chat.completions.create({
  model: "gpt-4o-mini",
  store: true,
  messages: [{ role: "user", content: "write a haiku about ai" }],
});

completion.then((result) => console.log(result.choices[0].message));
 */
