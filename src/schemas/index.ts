import fs from "fs";

const path = __dirname;
const files = fs.readdirSync(path);

let schemas = files
  .filter(f => f != "index.ts")
  .map(f => fs.readFileSync(`${path}/${f}`).toString("utf8"));

export default schemas;
