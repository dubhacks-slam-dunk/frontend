import { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: req.body.userInput || 'Tell me a joke about friends.' }],
      model: 'gpt-3.5-turbo',
      temperature: 0.9,
    });

    res.status(200).json(chatCompletion.choices[0].message?.content);
  } catch (error) {
    res.status(500).json({ error: 'OpenAI API request failed' });
  }
}
