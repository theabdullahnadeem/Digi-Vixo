import { NextResponse } from 'next/server';

const OPENROUTER_API_KEY = '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';

export async function POST(req: Request) {
  try {
    const { messages, systemPrompt } = await req.json();

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://digivixo.site',
        'X-Title': 'Digivixo AI Assistant'
      },
      body: JSON.stringify({
        model: 'openai/gpt-3.5-turbo',
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages
        ],
        temperature: 0.7,
        max_tokens: 400
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: data.error?.message || 'API Error' }, { status: response.status });
    }

    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
