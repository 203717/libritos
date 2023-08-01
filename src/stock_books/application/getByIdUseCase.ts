import { Book } from "../domain/bookModel";
import { BookRepository } from "../domain/bookRepository";

export class GetBookByIdUseCase {
    constructor(private readonly bookRepository: BookRepository) {}

    async execute(id: number): Promise<Book | null> {
        return await this.bookRepository.findById(id);
    }
}
