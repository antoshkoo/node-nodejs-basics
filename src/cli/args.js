import process from "process";

const parseArgs = () => {
  const args = process.argv.slice(2);
  const result = [];
  args.forEach((arg, index) => {
    if (arg.startsWith("--")) {
      result.push(`${arg} is ${args[index + 1]}`);
    }
  });
  console.log(result.join(", "));
};

parseArgs();
