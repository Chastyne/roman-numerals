function romanConverter() {
    const romanNumerals = [
      ["M", 1000],
      ["CM", 900],
      ["D", 500],
      ["CD", 400],
      ["C", 100],
      ["XC", 90],
      ["L", 50],
      ["XL", 40],
      ["X", 10],
      ["IX", 9],
      ["V", 5],
      ["IV", 4],
      ["I", 1]
    ];
  
    const convert = num => {
      const inner = (num, idx) => {
        if (num === 0) {
          return "";
        }
        const [symbol, value] = romanNumerals[idx];
        if (num >= value) {
          return symbol + inner(num - value, idx);
        } else {
          return inner(num, idx + 1);
        }
      };
      return inner(num, 0);
    };
  
    return convert;
  }
  
  const converter = romanConverter();
  
  function convertNumber() {
    const numberInput = document.getElementById('numberInput').value;
    const resultDiv = document.getElementById('result');
    if (numberInput && numberInput > 0 && numberInput <= 3999) {
      const romanNumeral = converter(numberInput);
      resultDiv.innerText = `Roman Numeral: ${romanNumeral}`;
    } else {
      resultDiv.innerText = 'Please enter a number between 1 and 3999';
    }
  }();
  
