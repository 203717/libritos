import { Router, Request, Response } from 'express';
import { AddBookUseCase } from '../application/addBookUseCase';
import { GetBookByIdUseCase } from '../application/getByIdUseCase';
import { BookRepositoryImp } from './bookRepositoryImp';
import { Book } from '../domain/bookModel';

export const bookRouter = Router();

const bookRepository = new BookRepositoryImp();
const addBookUseCase = new AddBookUseCase(bookRepository);
const getBookByIdUseCase = new GetBookByIdUseCase(bookRepository);

bookRouter.post('/', async (req: Request, res: Response) => {
    const { title, author, price } = req.body;
    try {
        const book = new Book(title, author, price);
        await addBookUseCase.execute(book);
        res.status(201).json({ message: 'Book added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error });
    }
});

bookRouter.get('/', async (req: Request, res: Response) => {
    try {
        const books = await bookRepository.findAll();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error });
    }
});

bookRouter.get('/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    try {
        const book = await getBookByIdUseCase.execute(id);
        if (book) {
            res.status(200).json(book);
        } else {
            res.status(404).json({ message: 'Book not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error });
    }
});
