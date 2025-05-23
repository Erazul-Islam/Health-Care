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
exports.bookServices = void 0;
const prisma_1 = require("../../shared/prisma");
const addNewBookService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.book.create({
        data: payload
    });
    return result;
});
const getAllBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.book.findMany();
    return result;
});
const getSingleBooks = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.book.findUnique({
        where: {
            bookId: id
        }
    });
    return result;
});
const getUpdatedBook = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const desiredBook = yield prisma_1.prisma.book.findUnique({
        where: {
            bookId: id
        }
    });
    if (!desiredBook) {
        throw new Error("Book id does not found");
    }
    const updatedBook = yield prisma_1.prisma.book.update({
        where: {
            bookId: id,
        },
        data: payload
    });
    return updatedBook;
});
const deleteBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = prisma_1.prisma.book.delete({
        where: {
            bookId: id
        }
    });
    return result;
});
exports.bookServices = {
    addNewBookService,
    getAllBooks,
    getSingleBooks,
    getUpdatedBook,
    deleteBook
};
