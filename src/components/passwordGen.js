function generatedPassword(length) {
  for (let i = 0; i < length; i++) {
    let randomNumber = crypto.getRandomValues(new Uint32Array(1))[0];
    return randomNumber;
  }
}
export default generatedPassword