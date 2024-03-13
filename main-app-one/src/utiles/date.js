// Функція для того щоб зберігати дату в об'єкті як звичайний рядок
// Функція яка буде ось це форматування в тому вигляді яке потрібне мені робити

export const formatDate = (date) => {
    // Отримання року, місяця та дня, і все це склеїться в потрібному форматі(рядку)
    const year = date.getFullYear();
    const month = date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
    // Return string
    return `${year}.${month}.${day}`
}