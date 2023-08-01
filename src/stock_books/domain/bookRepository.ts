import { Book } from "./bookModel";

export interface BookRepository {
    findAll(): Promise<Book[]>;
    save(book: Book): Promise<void>;
    findById(id: number): Promise<Book | null>;
}