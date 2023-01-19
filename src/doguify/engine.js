export const doguinhofy = (phrase) => {
    return phrase
      .split(' ')
      .map((word) => {
        const wordLetters = word.split('')
        return wordLetters
          .map((letter, index) => {
            const charCode = letter.charCodeAt(0);
            const binary = charCode
              .toString(2)
              .padStart(8, 0)
 
            const auaus = binary
              .replace(/0/g, 'au, ')
              .replace(/1/g, 'au au, ')
              .replace(/, $/, '')
 
            return auaus
          })
          .join('rrrrrr')
      })
      .join('~')
  }
 
  export const desdoguinhofy = (latido) => {
    return latido
      .split('~')
      .map((word) => {
        return word
            .split('rrrrrr')
         .map((letter) => {
            const binary = letter
              .replace(/au au(, )*/g, '1')
              .replace(/au(, )*/g, '0')
 
            return String.fromCharCode(parseInt(binary, 2))
          })
          .join('')
      })
      .join(' ')
  }
  