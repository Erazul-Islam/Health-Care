"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRouter = void 0;
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("./book.controller");
const router = express_1.default.Router();
router.post('/', book_controller_1.bookController.createBookController);
router.get('/', book_controller_1.bookController.getAllBooks);
router.get('/:id', book_controller_1.bookController.getSingleBook);
router.put('/:id', book_controller_1.bookController.getUpdatedBook);
router.delete('/:id', book_controller_1.bookController.deleteBook);
exports.bookRouter = router;
