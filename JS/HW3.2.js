//Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. 
//И если он не Number - кидалась ошибка

function checkAge (age_1, age_2, age_3) {
  if (typeof age_1 == 'number' && typeof age_2 == 'number' && typeof age_3 == 'number'){
    if (age_1 < age_2){
      console.log("You don’t have access cause your age is " + age_1 + " It’s less then");
    }
    else if (age_1 >= age_2 && age_1 < age_3){
      console.log("Welcome!");
    }
    else if (age_1 > age_3) {
      console.log("Keep calm and look Culture channel");
    } 
    else {
      console.log("Technical work")
    } 
  }
  else {
    console.log("Error data type");
  }
}
checkAge (17, 18, 61);