"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
class BookController {
    constructor(addBookUseCase, getBooksUseCase, getBookByIdUseCase) {
        this.addBookUseCase = addBookUseCase;
        this.getBooksUseCase = getBooksUseCase;
        this.getBookByIdUseCase = getBookByIdUseCase;
    }
    addBook(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const book = request.body;
            yield this.addBookUseCase.execute(book);
            response.status(201).send();
        });
    }
    getBooks(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const books = yield this.getBooksUseCase.execute();
            response.status(200).json(books);
        });
    }
    getBookById(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = Number(request.params.id);
            const book = yield this.getBookByIdUseCase.execute(id);
            if (book) {
                response.status(200).json(book);
            }
            else {
                response.status(404).json({ message: 'Book not found' });
            }
        });
    }
}
exports.BookController = BookController;
