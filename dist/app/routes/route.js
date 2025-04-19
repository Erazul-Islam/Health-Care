"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = require("../modules/user/user.routes");
const book_routes_1 = require("../modules/book/book.routes");
const member_route_1 = require("../modules/member/member.route");
const borrow_route_1 = require("../modules/borrow/borrow.route");
const router = express_1.default.Router();
const allRoutes = [
    {
        path: '/user',
        routes: user_routes_1.userRoutes
    },
    {
        path: '/books',
        routes: book_routes_1.bookRouter
    },
    {
        path: '/members',
        routes: member_route_1.memberRouter
    },
    {
        path: '/borrow',
        routes: borrow_route_1.borrowRouter
    }
];
allRoutes.forEach((route) => router.use(route.path, route.routes));
exports.default = router;
