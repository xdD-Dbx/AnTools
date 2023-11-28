import { deleteSync } from 'del';

export const reset = (callback) => {
    deleteSync(app.path.clean);
    callback(); // Вызов колбэка для сигнализации о завершении задачи
}
