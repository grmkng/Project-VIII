export function isPromoCodeValid(code) {
    console.log(code)
    code.trim()
    if (code.trim().length < 5)
        return false
    else if (code.trim().length > 10)
        return false
    else
        return true
}