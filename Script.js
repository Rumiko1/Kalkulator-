function calculateHypotenuse() {
  var a = parseFloat(document.getElementById("sideA").value);
  var b = parseFloat(document.getElementById("sideB").value);

  var hypotenuse = Math.sqrt(a**2 + b**2);

  document.getElementById("result").innerHTML = "Panjang sisi miring (hipotenusa): " + hypotenuse{