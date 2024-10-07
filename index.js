function checkVowels() {
      let str = document.getElementById("q1").value;   
const noVowels = str.replace(/[aeiou]/gi, '');
let p1 = document.getElementById("p1");
p1.innerHTML = noVowels[0].toUpperCase()+noVowels.slice(1,noVowels.length);
}

