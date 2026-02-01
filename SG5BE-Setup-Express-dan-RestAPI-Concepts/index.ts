import express, { Request, Response, Application } from 'express';
import * as swaggerUI from 'swagger-ui-express';
import YAML from 'yamljs';

const app: Application = express();
const PORT: number = 3000;

app.use(express.json());
interface Book {
    id: number;
    title: string;
    author: string;
}

let books: Book[] = [];

//load swagger
const swaggerDocument = YAML.load('./swagger.yaml');
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

// routes
app.get('/books', (req: Request, res: Response) => {
    res.status(200).json(books);
});

app.post('/books', (req: Request, res: Response) => {
    const { title, author } = req.body;

    if (!title || !author) {
        return res.status(400).json({ message: "Data tidak lengkap" });
    }

    const newBook: Book = {
        id: Date.now(),
        title,
        author
    };

    books.push(newBook);
    res.status(201).json(newBook);
});

app.put('/books/:id', (req: Request, res: Response) => {
    const id: number = parseInt(String(req.params.id));
    const index = books.findIndex(b => b.id === id);

    if (index !== -1) {
        books[index] = { ...books[index], ...req.body, id };
        res.status(200).json(books[index]);
    } else {
        res.status(404).json({ message: "Buku tidak ditemukan" });
    }
});

app.delete('/books/:id', (req: Request, res: Response) => {
    const id: number = parseInt(String(req.params.id));
    const initialLength = books.length;
    books = books.filter(b => b.id !== id);

    if (books.length < initialLength) {
        res.status(200).json({ message: "Buku berhasil dihapus" });
    } else {
        res.status(404).json({ message: "Buku tidak ditemukan" });
    }
});

app.get('/', (req: Request, res: Response) => {
    res.send('<h1> Server API ready</h1>');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Swagger: http://localhost:${PORT}/api-docs`);
});