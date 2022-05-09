
//4***:Преобразовать задание 3* таким образом, чтобы возраст вводится 
//используя функцию prompt в привязанной верстке

let age_1 = prompt('Введите возраст 1', ' ');
let age_2 = prompt('Введите возраст 2', ' ');
let age_3 = prompt('Введите возраст 3', ' ');
    if (typeof Number(age_1) == 'number' && typeof Number(age_2) == 'number' && typeof Number(age_3) == 'number'){
      if (age_1 < age_2){
        alert("You don’t have access cause your age is " + age_1 + " It’s less then");
      }
      else if (age_1 >= age_2 && age_1 < age_3){
        alert("Welcome!");
      }
      else if (age_1 > age_3) {
        alert("Keep calm and look Culture channel");
      } 
      else {
      alert("Technical work");
      } 
    }
     else {
      alert("Error data type");
    }