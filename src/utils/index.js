export const arrayToString = (arr) => {
    if (arr.length === 1) {
        return arr[0]
    } else {
        return arr.join(', ')
    }
} 