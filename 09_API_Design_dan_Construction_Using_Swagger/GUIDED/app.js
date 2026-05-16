import express from 'express';

const app = express();

const PORT = 8000;
const HOSTNAME = 'localhost';

app.use(express.json());

app.listen(8000, "localhost", () => console.log(`Server berjalan di http://${HOSTNAME}:${PORT}`));