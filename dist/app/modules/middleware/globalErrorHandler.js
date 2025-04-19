"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../../../generated/prisma");
const gloablErrorhandler = (err, req, res, next) => {
    let success = false;
    let message = err.message || "Something went wrong";
    let error = err;
    if (err instanceof prisma_1.Prisma.PrismaClientValidationError) {
        message = 'Validation Error';
        error = err.message;
    }
    else if (err instanceof prisma_1.Prisma.PrismaClientKnownRequestError) {
        if (err.code === 'P2002') {
            message = "Duplicate Key error";
            error = err.meta;
        }
    }
    res.status(404).json({
        success,
        message,
        error
    });
};
exports.default = gloablErrorhandler;
