const userName = prompt('Введите свое имя:')
if (!userName || !isNaN(userName)) {
    alert('Нет такого имени')
    console.log('Нет такого имени')
} else {
    console.log(userName)


    const userAgeInput = prompt('Введите свой возраст:')
    const userAge = +userAgeInput
    if (!userAgeInput || isNaN(userAge)) {
        alert('Возраст должен быть числом');
        console.log('Введено нечисловое значение возраста');
    } else if (userAge < 18) {
        alert('Доступ отклонен')
        console.log(`Доступ отклонен, вы еще молоды! Ваш возраст: ${userAge}`)
    } else if (userAge > 125) {
        alert('Вы еще живи! Круто!')
        console.log(`Вы еще живи! Круто! Ваш возраст: ${userAge}`)
    } else {
        confirm(`Вас зовут: ${userName}, Ваш возраст: ${userAge}`)
        alert(`Добро пожаловать ${userName}!`)
        console.log(`Добро пожаловать ${userName}!`)
    }
}