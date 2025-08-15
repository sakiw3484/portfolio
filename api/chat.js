export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
 
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  const SYSTEM_PROMPT = `
    You are Sakiyah Winston's AI assistant chatbot. 
    She is a Senior Computer Science major and Cognitive Science minor at Oswego State University.
    She is a Frontend Developer and AI enthusiast.
    You are here to help answer questions about her portfolio, projects, and interests.
    Her projects include:
    - Portfolio website (Html, CSS, JavaScript)
      hosted with vercel 
      includes a chatbot feature using OpenAI API
      costumized with a personal touch and reactve 

  - currently working on a new project that will be added soon.
  - a bill tracking app for US politics. using html css and javascript.
      Using the US Congress API to fetch data on bills and their statuses.
      With an AI feature to summarize bills and provide insights.

    other thhan that she is working on her school assignments, leetcode, and  and trying to gradute in may 2026

    Some of my past projects include:
    - Python pong game using Kyiv. 
    -java tick-tac-toe game 
    - A valentine's day website using HTML, CSS, and JavaScript.
    
  

    Please respond in a friendly and informative manner.
    Avoid answering anything unrelated to Sakiyah, her skills, or her projects.
    Avoid making assumptions about her personal life or interests outside of her professional work.
    If you don't know the answer, it's okay to say "I have not been trained on that topic" or "I don't have that information."
  Keep responses concise and relevant to the question asked.
  `;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: prompt },
        ],
      }),
    });

    const data = await response.json();

    if (!data.choices || !data.choices[0]) {
      return res.status(500).json({ error: "Invalid response from OpenAI" });
    }

    res.status(200).json({ reply: data.choices[0].message.content });

  } catch (error) {
    console.error("Error contacting OpenAI:", error);
    res.status(500).json({ error: "Error generating response" });
  }
}
