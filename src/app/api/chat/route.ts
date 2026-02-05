import { type Message } from "ai";

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const { messages }: { messages: Message[] } = await req.json();
    const apiKey = process.env.OPENROUTER_API_KEY;
    const model = process.env.OPENROUTER_MODEL || "openrouter/auto";
    if (!apiKey) {
      throw new Error("OpenRouter API Key is not configured.");
    }

    const openRouterBody = JSON.stringify({
      model,
      messages,
      stream: true
    });

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: openRouterBody,
    });

    if (!response.ok) {
      const errorBody = await response.text();
      return new Response(errorBody, {
        status: response.status,
        headers: {
          "Content-Type": response.headers.get("content-type") || "text/plain; charset=utf-8",
        },
      });
    }

    if (!response.body) {
      throw new Error("The response from OpenRouter is empty.");
    }

    return new Response(response.body, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
      },
    });
  } catch (error) {
    console.error("[API Chat Route Error]", error);
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(
      JSON.stringify({ error: "Internal Server Error", detail: errorMessage }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
