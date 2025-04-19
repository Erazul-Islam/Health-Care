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
exports.memberController = void 0;
const member_service_1 = require("./member.service");
const createMemberController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const result = yield member_service_1.memberService.createMember(data);
        res.status(201).json({
            success: true,
            status: 201,
            message: " Member created successfully",
            data: result
        });
    }
    catch (err) {
        console.log(err);
    }
});
const getAllMembers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield member_service_1.memberService.getAllMembers();
        res.status(201).json({
            success: true,
            status: 201,
            message: " Member retrived successfully",
            data: result
        });
    }
    catch (err) {
        console.log(err);
    }
});
const getSingleMember = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield member_service_1.memberService.getSingleMember(id);
        res.status(201).json({
            success: true,
            status: 201,
            message: " Member retrived successfully",
            data: result
        });
    }
    catch (err) {
        console.log(err);
    }
});
const updatedMember = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const data = req.body;
        const result = yield member_service_1.memberService.getUpdatedMember(id, data);
        res.status(201).json({
            success: true,
            status: 201,
            message: " Member  updated  successfully",
            data: result
        });
    }
    catch (err) {
        console.log(err);
    }
});
const deleteMember = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        yield member_service_1.memberService.deleteMember(id);
        res.status(201).json({
            success: true,
            status: 201,
            message: " Member deleted successfully",
        });
    }
    catch (err) {
        console.log(err);
    }
});
exports.memberController = {
    createMemberController,
    getAllMembers,
    getSingleMember,
    updatedMember,
    deleteMember
};
