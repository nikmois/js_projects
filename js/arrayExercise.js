
// Место для второй задачи
function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    // Пишем решение вот тут
    data[2]  = 20;
    
    // Не трогаем
    console.log(data);
    return data;
    
}


secondTask();