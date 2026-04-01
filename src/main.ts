import { generateResponse } from "./services/aiService";

async function run() {
  const response = await generateResponse("Create a workout plan");
  console.log(response);
}

run();
