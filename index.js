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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routers_1 = __importDefault(require("./routers"));
const { sequelize } = require('./sequelize/models');
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
(0, routers_1.default)(app);
const connectDb = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Проверка запуска БД...');
    try {
        yield sequelize.authenticate();
        console.log('БД успешно подключена');
    }
    catch (e) {
        console.log('Ошибка подключения БД!', e);
        process.exit(1);
    }
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield connectDb();
    console.log(`Начало запуска сервера на порту ${port}...`);
    app.listen(port, () => {
        console.log(`Сервер запущен на порту ${port}`);
    });
}))();
