export const capitalizedFirstLetter = (text) => {
    return text.charAt(0).toLocaleUpperCase().concat(text.slice(1).toLocaleLowerCase())
}
