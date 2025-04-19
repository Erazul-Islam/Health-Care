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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminService = void 0;
const prisma_1 = require("../../../generated/prisma");
const admin_constant_1 = require("./admin.constant");
const prisma = new prisma_1.PrismaClient();
const getAdmin = (params, options) => __awaiter(void 0, void 0, void 0, function* () {
    const { limit, page } = options;
    const { searchTerm } = params, filterData = __rest(params, ["searchTerm"]);
    const addConditions = [];
    if (params.searchTerm) {
        addConditions.push({
            OR: admin_constant_1.adminSearchableField.map(field => ({
                [field]: {
                    contains: params.searchTerm,
                    mode: "insensitive"
                }
            }))
        });
    }
    if (Object.keys.length > 0) {
        addConditions.push({
            AND: Object.keys(filterData).map(key => ({
                [key]: {
                    equals: filterData[key]
                }
            }))
        });
    }
    const whereCondtions = { AND: addConditions };
    const result = prisma.admin.findMany({
        where: whereCondtions,
        skip: Number(page - 1) * limit,
        take: Number(limit),
        orderBy: {
            createdAt: 'asc'
        }
    });
    return result;
});
exports.adminService = {
    getAdmin
};
