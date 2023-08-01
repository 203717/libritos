import { AddBookUseCase } from "../application/addBookUseCase";
import { GetBooksUseCase } from "../application/getBooksUseCase";
import { GetBookByIdUseCase } from "../application/getByIdUseCase";
import { Request, Response } from "express";

export class BookController {
    constructor(
        private readonly addBookUseCase: AddBookUseCase ,
        private readonly getBooksUseCase: GetBooksUseCase,
        private readonly getBookByIdUseCase: GetBookByIdUseCase,
    ) {}

    async addBook(request: Request, response: Response) {
        const book = request.body;
        await this.addBookUseCase.execute(book);
        response.status(201).send();
    }

    async getBooks(request: Request, response: Response) {
        const books = await this.getBooksUseCase.execute();
        response.status(200).json(books);
    }

    async getBookById(request: Request, response: Response) {
        const id = Number(request.params.id);
        const book = await this.getBookByIdUseCase.execute(id);
        if (book) {
            response.status(200).json(book);
        } else {
            response.status(404).json({message: 'Book not found'});
        }
    } 
}