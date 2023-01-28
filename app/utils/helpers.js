export const formatDate = date => {
    const transDate = new Date(date)

    const options = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }
    return transDate.toLocaleDateString('es-ES', options)
}


export const formatNumbers = numbers => {
    const transNumber = new Intl.NumberFormat('es-VE').format(numbers)

    return transNumber
}


export const formatCoins = precio => {
    const transCoin= precio.toLocaleString("es", {
        style:"currency",
        currency:"EUR"
    });

    return transCoin
}