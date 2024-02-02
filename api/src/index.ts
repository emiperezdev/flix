import app from "./start/app";

console.log("Hello World");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`>>> Listening on port ${PORT}...`));
