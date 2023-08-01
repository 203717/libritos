import { AddBookUseCase } from "../application/addBookUseCase";
import { GetBooksUseCase } from "../application/getBooksUseCase";
import { GetBookByIdUseCase } from "../application/getByIdUseCase";
import { BookRepositoryImp } from "./bookRepositoryImp";

const bookRepository = new BookRepositoryImp();
const addBookUseCase = new AddBookUseCase(bookRepository);
const getBooksUseCase = new GetBooksUseCase(bookRepository);
const getBookByIdUseCase = new GetBookByIdUseCase(bookRepository);