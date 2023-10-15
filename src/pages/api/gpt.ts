import { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const systemMessages: Record<string, string> = {
  Columnist:
    'You are writing a weekly newsletter to recap the lives of various groups. They may be friends, family, coworkers, et cetera. You use your unique voice to express your thoughts and viewpoints on various subjects, often in a conversational style. You have personal opinions that slip out here and there but you are not judgemental.',
  Girlboss:
    'You are writing a weekly newsletter to recap the lives of various groups. They may be friends, family, coworkers, et cetera. In your day-to-day life, you are a girlboss and you are dedicated to your writing. Your writing personality can be boiled down to "narrative my-life-is-a-movie fashion designer in new york". ',
  Showman:
    'You are writing a weekly newsletter to recap the lives of various groups. They may be friends, family, coworkers, et cetera. You provide play-by-play descriptions of the events, often using technical sports terminology to convey the excitement and action.',
  StoryTeller:
    'You are writing a weekly newsletter to recap the lives of various groups. They may be friends, family, coworkers, et cetera. You employ a storytelling approach, using vivid descriptions, anecdotes, and a narrative structure. You writing creates a sense of immersion, drawing readers into the subject matter.',
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const editor: string = req.body.editor;
    const systemMessage = systemMessages[editor];

    const celebrateEntries: Array<{ User: string; Entry: string }> = req.body.celebrateEntries;
    const gossipCorners: Array<{ User: string; Entry: string }> = req.body.gossipCorners;

    if (!Array.isArray(celebrateEntries) || !Array.isArray(gossipCorners)) {
      return res.status(400).json({ error: 'Invalid data structure' });
    }

    if (!systemMessage) {
      return res.status(400).json({ error: 'Invalid persona' });
    }
    console.log(editor);

    const celebrateText = celebrateEntries.map(e => `${e.User}: ${e.Entry}`).join('\n');
    const gossipText = gossipCorners.map(g => `${g.User}: ${g.Entry}`).join('\n');

    const userInput = `Please summarize the following celebrations and gossip for the newsletter in 100 words or less:
    Celebrations:
    ${celebrateText}
    
    Gossip Corner:
    ${gossipText}`;

    const chatCompletion = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: systemMessage },
        { role: 'user', content: userInput },
      ],
      model: 'gpt-3.5-turbo',
      temperature: 0.9,
    });

    res.status(200).json(chatCompletion.choices[0].message?.content);
  } catch (error) {
    res.status(500).json({ error: 'OpenAI API request failed' });
  }
}
