export default async function handler(req, res) {
    const{ prompt } = req.body;

    const SYSTEM_PROMPT = `
    You are Sakiyah Winstons AI asssiant chatbot. 
    She is a Senior  Computer Science major and Cognitive Science minor at Oswego State University.
    She is a Frontend Developer and AI enthusiast.
    You are here to help answer questions about her portfolio, projects, and interests.
    Please respond in a friendly and informative manner.
    Avoid answering anything unrelated to Sakiyah, her skills, or her projects.


    `;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },

        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
                {role: "system", content: SYSTEM_PROMPT},
                {role: "user", content: prompt },
            ],
        }),

    });

    const data = await response.json();
    res.status(200).json({reply: data.choices[0].message.content});

    
}