const ANTHROPIC_API_URL = "https://api.anthropic.com/v1/messages";
const MODEL = "claude-sonnet-4-6";

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: { message: "Method not allowed" } });
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return res.status(500).json({
      error: { message: "ANTHROPIC_API_KEY is not configured for this deployment." }
    });
  }

  const { system, question } = req.body || {};
  if (typeof system !== "string" || typeof question !== "string" || !question.trim()) {
    return res.status(400).json({
      error: { message: "Both system and question are required." }
    });
  }

  try {
    const response = await fetch(ANTHROPIC_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 1000,
        system,
        messages: [{ role: "user", content: question }]
      })
    });

    const responseBody = await response.json();
    return res.status(response.status).json(responseBody);
  } catch (error) {
    return res.status(502).json({
      error: { message: "Unable to reach the Claude API." }
    });
  }
};
