export const doguify = (string) => {
  return string
    .split(' ').map((word) => {
      const letters = word.split('')
      return letters.map((letter, _index) => {
        const charCode = letter.charCodeAt(0);
        const binary = charCode.toString(2).padStart(8, 0)

        const auaus = binary
          .replace(/0/g, 'au, ')
          .replace(/1/g, 'au au, ')
          .replace(/, $/, '')

        return auaus
      })
        .join('rrrrrr')
    })
    .join('ão! ')
}

export const desdoguify = (latido) => {
  return latido
    .split('ão! ')
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
