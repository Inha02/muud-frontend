const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}
const validatePswd = (pswd) => {
    return pswd.length >= 8 && pswd.length <= 15;
}

export {
    validateEmail,
    validatePswd
}
