import * as fs from "fs";

export async function GET(request: Request) {
  let data = await fs.promises.readFile(`todos/todos.json`, "utf-8");
  return new Response(data);
}