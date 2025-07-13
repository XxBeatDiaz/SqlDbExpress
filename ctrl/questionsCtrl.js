import { question1, question2, question3 } from "../DB/questionsDal.js";

export async function getQuestion1(req, res) {
  try {
    const data = await question1();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching data.' });
  }
}

export async function getQuestion2(req, res) {
  try {
    const data = await question2();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching data.' });
  }
}

export async function getQuestion3(req, res) {
  try {
    const data = await question3();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching data.' });
  }
}