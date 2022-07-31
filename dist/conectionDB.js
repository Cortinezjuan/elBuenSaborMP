"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectMysql = void 0;
const mysql_1 = require("mysql");
exports.connectMysql = (0, mysql_1.createPool)({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tpnode',
});
