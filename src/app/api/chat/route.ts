import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // The system prompt to instruct the AI about its role
    const systemPrompt = {
      role: "system",
      content: "You are a customer support agent for 'Elegant Dress', a luxury bespoke tailoring brand. Your job is to tell users about us and what we do. Elegant Dress offers bespoke suits and dresses designed for the modern professional. Our tailoring is inspired by nature and delivered to their door. Be polite, concise, and helpful. Guide users to our bespoke measurement order form if they want to order."
    };

    const payload = {
      model: "google/gemma-4-31b-it",
      messages: [systemPrompt, ...messages],
      max_tokens: 1024,
      temperature: 0.7,
      top_p: 0.95,
      stream: false,
    };

    const response = await fetch("https://integrate.api.nvidia.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.NVIDIA_API_KEY || "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"}`,
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("NVIDIA API Error:", response.status, errorText);
      return NextResponse.json({ error: "Failed to communicate with AI API" }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);

  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
