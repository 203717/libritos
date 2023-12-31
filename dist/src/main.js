"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookRouter_1 = require("./stock_books/infrastructure/bookRouter");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/books", bookRouter_1.bookRouter);
app.listen(3000, () => {
    console.log(`[Application] Server online in port 3000`);
});
