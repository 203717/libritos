import { BookModel } from "./bookModelDB";
import { Book } from "../domain/bookModel";
import { BookRepository } from "../domain/bookRepository";
import { Response } from "express";

export class BookRepositoryImp implements BookRepository{
    async save(book: Book): Promise<void> {
        const sequelizeBook = {
            title: book.title,
            author: book.author,
            price: book.price,
        };
        await BookModel.create(sequelizeBook);
    }

    async findAll(): Promise<Book[]> {
        const books = await BookModel.findAll();
        return books.map(book => new Book(book.title, book.author, book.price));
    }

    async findById(id: number): Promise<Book | null> {
        const book = await BookModel.findByPk(id);
        if (book) {
            return new Book(book.title, book.author, book.price);
        }
        return null;
    }
}

