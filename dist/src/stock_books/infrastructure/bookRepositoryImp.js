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
exports.BookRepositoryImp = void 0;
const bookModelDB_1 = require("./bookModelDB");
const bookModel_1 = require("../domain/bookModel");
class BookRepositoryImp {
    save(book) {
        return __awaiter(this, void 0, void 0, function* () {
            const sequelizeBook = {
                title: book.title,
                author: book.author,
                price: book.price,
            };
            yield bookModelDB_1.BookModel.create(sequelizeBook);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const books = yield bookModelDB_1.BookModel.findAll();
            return books.map(book => new bookModel_1.Book(book.title, book.author, book.price));
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const book = yield bookModelDB_1.BookModel.findByPk(id);
            if (book) {
                return new bookModel_1.Book(book.title, book.author, book.price);
            }
            return null;
        });
    }
}
exports.BookRepositoryImp = BookRepositoryImp;
