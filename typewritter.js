const sentence = "hello there from lighthouse labs";
for (const char in sentence) {
  setTimeout(() => process.stdout.write(sentence[char]),char*50);
}
setTimeout(() => process.stdout.write("\n"),sentence.length*50);
