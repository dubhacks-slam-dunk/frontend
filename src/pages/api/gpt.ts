import { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

type NewsletterRequest = {
  editor: string;
  celebrateEntries: Array<{ User: string; Entry: string }>;
  gossipCorners: Array<{ User: string; Entry: string }>;
  recentInterests: Array<{ User: string; Entry: string }>;
};

const systemMessages: Record<string, string> = {
  Columnist:
    'You are writing a weekly newsletter to recap the lives of various groups. Your voice is distinctive, sprinkled with your own take on events. Though you wear your opinions on your sleeve, you exercise caution to remain non-judgmental, respecting the diversity of experiences covered. IMPORTANT: your response should be NO LONGER than 40 tokens.',
  Showman:
    "You are writing a weekly newsletter to recap the lives of various groups. You're the commentator everyone needs but didn't know they wanted, providing moment-to-moment coverage on the week's events. Whether it's a milestone or a mundane moment, you capture it with the enthusiasm of a sports announcer, employing jargon that elevates the mundane into the realm of the extraordinary. IMPORTANT: your response should be NO LONGER than 40 tokens.",
  StoryTeller:
    "You are writing a weekly newsletter to recap the lives of various groups. You're the bard of the newsletter world, turning life's prosaic moments into enthralling tales. Your writing is atmospheric, rich with anecdotes and vivid descriptions that paint a complete picture. Readers won't just scan your articles; they'll dive into them, captivated by your narrative craftsmanship. IMPORTANT: your response should be NO LONGER than 40 tokens.",
};

const summarizeEvents = async (categories: NewsletterRequest, editor: string) => {
  const entries = [
    ...categories.celebrateEntries.map(e => `Celebrate: ${e.User}: ${e.Entry}`),
    ...categories.gossipCorners.map(e => `Gossip: ${e.User}: ${e.Entry}`),
    ...categories.recentInterests.map(e => `Interest: ${e.User}: ${e.Entry}`),
  ];

  const inputText = entries.join('\n');
  const userInput = `Based on the following information, please provide a general summary for the week:\n${inputText}.`;
  const systemMessage =
    systemMessages[editor];

  const chatCompletion = await openai.chat.completions.create({
    messages: [
      { role: 'system', content: systemMessage },
      { role: 'user', content: userInput },
    ],
    model: 'gpt-3.5-turbo',
    temperature: 0.7,
  });

  return chatCompletion.choices[0].message?.content;
};

const pickRandomEntry = (entries: Array<{ User: string; Entry: string }>) => {
  const randomIndex = Math.floor(Math.random() * entries.length);
  return entries[randomIndex];
};

const generatePersonaComment = async (persona: string, entry: { User: string; Entry: string }) => {
  const systemMessage = systemMessages[persona];
  const userInput = `Please comment on ${entry.User}'s entry: ${entry.Entry}`;

  const chatCompletion = await openai.chat.completions.create({
    messages: [
      { role: 'system', content: systemMessage },
      { role: 'user', content: userInput },
    ],
    model: 'gpt-3.5-turbo',
    temperature: 0.9,
  });

  return chatCompletion.choices[0].message?.content;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data: NewsletterRequest = req.body;

    // Validation
    if (
      !Array.isArray(data.celebrateEntries) ||
      !Array.isArray(data.gossipCorners) ||
      !Array.isArray(data.recentInterests)
    ) {
      return res.status(400).json({ error: 'Invalid data structure' });
    }

    if (!systemMessages[data.editor]) {
      return res.status(400).json({ error: 'Invalid persona' });
    }

    // Generate comments and summary
    const summary = await summarizeEvents(data, data.editor);
    const celebrateComment = await generatePersonaComment(
      data.editor,
      pickRandomEntry(data.celebrateEntries)
    );
    const gossipComment = await generatePersonaComment(
      data.editor,
      pickRandomEntry(data.gossipCorners)
    );
    const interestComment = await generatePersonaComment(
      data.editor,
      pickRandomEntry(data.recentInterests)
    );

    res.status(200).json({
      summary,
      celebrateComment,
      gossipComment,
      interestComment,
    });
  } catch (error) {
    res.status(500).json({ error: 'OpenAI API request failed' });
  }
}
