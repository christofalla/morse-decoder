const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let array = [];

    for (let i = 0; i < expr.length; i = i + 10) {
      let number = expr.substring(i, i + 10);
      if (number.includes('*')) {
        array.push(' ');
        continue;
      }
      
      number = number.replace(/00/g, '');
      number = number.replace(/10/g, '.');
      number = number.replace(/11/g, '-');
    
      array.push(MORSE_TABLE[number]);
  
    }
    return array.join('');
}

module.exports = {
    decode
}