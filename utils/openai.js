import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "your api key",
  dangerouslyAllowBrowser: true,
});

export default openai;
