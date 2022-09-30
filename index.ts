import express from 'express';
import configure from './routers';

const { sequelize } = require('./sequelize/models')
const app = express();
const port = process.env.PORT || 3000;

configure(app);

const connectDb = async () => {
    console.log('Проверка запуска БД...');

    try {
        await sequelize.authenticate();
        console.log('БД успешно подключена')
    } catch(e) {
        console.log('Ошибка подключения БД!', e);
        process.exit(1);
    }
};

(async () => {
    await connectDb();
    
    console.log(`Начало запуска сервера на порту ${port}...`);

    app.listen(port, () => {
        console.log(`Сервер запущен на порту ${port}`);
    });
})();