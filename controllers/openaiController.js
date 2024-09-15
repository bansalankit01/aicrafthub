const dotenv = require("dotenv");
dotenv.config();

const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("AIzaSyDqqFI_9HjZE1i3pdD_T-35AoiN3GH4gPI");

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

console.log("Controller file run");

// summary
exports.summaryController = async (req, res) => {
  try {
    const { text } = req.body;
    const response = await model.generateContent({
      contents: [
        { role: "user", parts: [{ text: `Summarize this: ${text}` }] },
      ],
      generationConfig: { maxOutputTokens: 500, temperature: 0.5 },
    });
    // const data = response.candidates[0].text;
    const data = response.response.candidates[0].content.parts[0].text;
    // console.log(data);
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    return res.status(404).json({ message: err.message });
  }
};

// paragraph
exports.paragraphController = async (req, res) => {
  try {
    const { text } = req.body;
    const response = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [{ text: `Write a detailed paragraph about: ${text}` }],
        },
      ],
      generationConfig: { maxOutputTokens: 500, temperature: 0.5 },
    });
    const data = response.response.candidates[0].content.parts[0].text;
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    return res.status(404).json({ message: err.message });
  }
};

// chatbot
exports.chatbotController = async (req, res) => {
  try {
    const { text } = req.body;
    const response = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `Answer question similar to how chatGpt answers.
                Me: 'What is your name?'
                Luna: 'I am Luna'
                Me: ${text}`,
            },
          ],
        },
      ],
      generationConfig: { maxOutputTokens: 300, temperature: 0.7 },
    });
    const data = response.response.candidates[0].content.parts[0].text;
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    return res.status(404).json({ message: err.message });
  }
};

// js converter
exports.jsconverterController = async (req, res) => {
  try {
    const { text } = req.body;
    const response = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `Convert the following instructions into JavaScript code: ${text}`,
            },
          ],
        },
      ],
      generationConfig: { maxOutputTokens: 400, temperature: 0.25 },
    });
    const data = response.response.candidates[0].content.parts[0].text;
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    return res.status(404).json({ message: err.message });
  }
};

// // scifi image
// exports.scifiImageController = async (req, res) => {
//   try {
//     const { text } = req.body;
//     const response = await model.generateContent({
//       contents: [
//         {
//           role: "user",
//           parts: [{ text: `Generate a sci-fi image of: ${text}` }],
//         },
//       ],
//       generationConfig: { maxOutputTokens: 300, temperature: 0.7 },
//     });
//     const data = response.candidates[0].text;
//     return res.status(200).json(data);
//   } catch (err) {
//     console.error(err);
//     return res.status(404).json({ message: err.message });
//   }
// };
