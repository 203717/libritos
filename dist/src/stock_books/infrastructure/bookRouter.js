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
exports.bookRouter = void 0;
const express_1 = require("express");
const addBookUseCase_1 = require("../application/addBookUseCase");
const getByIdUseCase_1 = require("../application/getByIdUseCase");
const bookRepositoryImp_1 = require("./bookRepositoryImp");
const bookModel_1 = require("../domain/bookModel");
exports.bookRouter = (0, express_1.Router)();
const bookRepository = new bookRepositoryImp_1.BookRepositoryImp();
const addBookUseCase = new addBookUseCase_1.AddBookUseCase(bookRepository);
const getBookByIdUseCase = new getByIdUseCase_1.GetBookByIdUseCase(bookRepository);
exports.bookRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, author, price } = req.body;
    try {
        const book = new bookModel_1.Book(title, author, price);
        yield addBookUseCase.execute(book);
        res.status(201).json({ message: 'Book added successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error });
    }
}));
exports.bookRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield bookRepository.findAll();
        res.status(200).json(books);
    }
    catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error });
    }
}));
exports.bookRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    try {
        const book = yield getBookByIdUseCase.execute(id);
        if (book) {
            res.status(200).json(book);
        }
        else {
            res.status(404).json({ message: 'Book not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error });
    }
}));
