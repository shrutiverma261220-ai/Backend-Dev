const fs = require("fs");
const readline = require("readline");
const fileStream = fs.createReadStream("app.log");
const rl = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity,
});
let totalLogs = 0;
let errorCount = 0;
let infoCount = 0;
let warnCount = 0;
rl.on("line", (line) => {
  totalLogs++;

  if (line.includes("ERROR")) {
    errorCount++;
  } else if (line.includes("INFO")) {
    infoCount++;
  } else if (line.includes("WARN")) {
    warnCount++;
  }
});
rl.on("close", () => {
  console.log("Log Summary Report");
  console.log("--------------------");
  console.log("Total Logs:", totalLogs);
  console.log("INFO Logs:", infoCount);
  console.log("WARN Logs:", warnCount);
  console.log("ERROR Logs:", errorCount);
});