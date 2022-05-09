let value = '@a12345B';

function emptyString(value){
  if (value === ""){
    console.log("Строка не должна быть пустой");
  }
}
emptyString(value);
function minSymbol(value){
  if (value.length != 0 && value.length < 5){
    console.log("Строка должна содержать min 5 символов");
  }
}
minSymbol(value);
function maxSymbol(value){
  if (value.length > 64){
    console.log("Строка должна содержать max 64 символа");
  }
}
maxSymbol(value);
function containsLetter(value){
  if (! /[a-z]/.test(value)){
    console.log("Строка должна содержать хотя бы одну букву");
  }
}
containsLetter(value);
function containsUppercase(value){
  if (! /[A-Z]/.test(value)){
    console.log("Строка должна содержать хотя бы одну букву в верхнем регистре");
  }
}
containsUppercase(value);
function containsNumber(value){
  if (! /[0-9]/.test(value)){
    console.log("Строка должна содержать хотя бы одну цифру");
  }
}
containsNumber(value);
function containsСharacter(value){
  if (! /[@]/.test(value)){
    console.log("Строка должна содержать @");
  }
}
containsСharacter(value);
