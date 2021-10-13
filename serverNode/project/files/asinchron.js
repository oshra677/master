// במקום לעשות הרבה קריאות של זן וקאץ אחד בתוך השני
//  אפשר לעשות פרומיס ציינינג כמו בדוגמא הנ"ל:
function asyncTask() {
    return functionA()
        .then((valueA) => functionB(valueA))
        .then((valueB) => functionC(valueB))
        .then((valueC) => functionD(valueC))
        .catch((err) => logger.error(err))
}

//אותו דבר כמו בסעיף הקודם רק כתוב בצורה של אסינק אוויט

async function asincTask() {
    try {
        const valueA = await functionA()
        const valueB = await functionB(valueA)
        const valueC = await functionC(valueB)
        return await functionD(valueC)
    } catch (err) {
        logger.error(err)
    }
}

//מערך של פרומיסים- שימוש בפרומיס אלל
//רסולב מחזיר פשוט את התוצאה לא שימושי בצורה הזאת -שזה לא בפונקציה
//רסולב הולך לזן וריג'קט הולך לקאץ' ולכן בשימוש בפרומיס אלל אם אחד מזיר ריגקט אז התוצאה הסופית היא ארור-טעות כי הכל הולך לקאץ
const promies = [
    Promise.resolve("result a"),
    Promise.resolve("result b"),
    Promise.resolve("result c"),
];
Promise.all(promies)
.then((arr)=>console.log(arr))
.catch((err)=>console.log(arr))
//answer: [ 'result a', 'result b', 'result c' ]

const promies = [
    Promise.resolve("result a"),
    Promise.resolve("result b"),
    Promise.resolve(),
];
Promise.all(promies)
.then((arr)=>console.log(arr))
.catch((err)=>console.log(arr))
//answer: [ 'result a', 'result b', undefined ]

const promies = [
    Promise.resolve("result a"),
    Promise.resolve("result b"),
    Promise.reject('ERROR'),
];
Promise.all(promies)
.then((arr)=>console.log(arr))
.catch((err)=>console.log(arr))
//answer: ERROR