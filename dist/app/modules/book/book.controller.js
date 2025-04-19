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
exports.bookController = void 0;
const book_service_1 = require("./book.service");
const createBookController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const result = yield book_service_1.bookServices.addNewBookService(data);
        res.status(201).json({
            success: true,
            status: 201,
            message: "Book is created successfully",
            data: result
        });
    }
    catch (err) {
        console.log(err);
    }
});
const getAllBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield book_service_1.bookServices.getAllBooks();
        res.status(201).json({
            success: true,
            status: 201,
            message: "Books retrived successfully",
            data: result
        });
    }
    catch (err) {
        console.log(err);
    }
});
const getSingleBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield book_service_1.bookServices.getSingleBooks(id);
        res.status(201).json({
            success: true,
            status: 201,
            message: "Book retrived successfully",
            data: result
        });
    }
    catch (err) {
        console.log(err);
    }
});
const getUpdatedBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield book_service_1.bookServices.getUpdatedBook(id, req.body);
        res.status(201).json({
            success: true,
            status: 201,
            message: "Book updated successfully",
            data: result
        });
    }
    catch (err) {
        console.log(err);
    }
});
const deleteBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        yield book_service_1.bookServices.deleteBook(id);
        res.status(201).json({
            success: true,
            status: 201,
            message: "Book Deleted successfully",
        });
    }
    catch (err) {
        console.log(err);
    }
});
exports.bookController = {
    createBookController,
    getAllBooks,
    getSingleBook,
    getUpdatedBook,
    deleteBook
};
