/*Дан массив [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]

Найти сумму и количество положительных элементов. + 

Найти минимальный элемент массива и его порядковый номер. + 

Найти максимальный элемент массива и его порядковый номер. + 

Определить количество отрицательных элементов. + 

Найти количество нечетных положительных элементов. + 

Найти количество четных положительных элементов. + 

Найти сумму четных положительных элементов. + 

Найти сумму нечетных положительных элементов. + 

Найти произведение положительных элементов. + 

Найти наибольший среди элементов массива, остальные обнулить. + */

let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let sum = 0, mult = 1;
let countPositiveElement = 0, countNegativeElement = 0;
let num_min, num_max;
let countPositiveOdd = 0, countPositiveEven = 0;
let sumPositiveOdd = 0, sumPositiveEven = 0;
let min = arr[0];
let max = min ;


for (let i = 0; i < arr.length; i++) {
    if(arr[i]>0){
        sum += arr[i];
        mult *= arr[i];
        countPositiveElement++;
    }
    if(arr[i]< min){
        min = arr[i];
        num_min = i;
    }
    if(arr[i]> max){
        max = arr[i];
        num_max = i;
    }
    if(arr[i] < 0){
        countNegativeElement++;
    }
    if(arr[i]> 0 && arr[i]%2 !== 0){
        countPositiveOdd++;
        sumPositiveOdd += arr[i];
    }
    if(arr[i]> 0 && arr[i]%2 === 0){
        countPositiveEven++;
        sumPositiveEven += arr[i];
    }
  }

  for(let j = 0; j < arr.length; j++){
    if(arr[j] !== max){
        arr[j] =0;
    }
  }


  document.write("Сума = " + sum + " Кількість додатніх елементів = " + countPositiveElement);
  document.write("<br>"+ "Мінімальний елемент: "+ min + " порядковий номер: " + num_min);
  document.write("<br>"+ "Максимальний елемент: "+ max + " порядковий номер: " + num_max);
  document.write("<br>"+ "Кількість від'ємних елементів = "+ countNegativeElement);
  document.write("<br>"+ "Кількість додатніх не парних елементів = "+ countPositiveOdd);
  document.write("<br>"+ "Кількість додатніх парних елементів = "+ countPositiveEven);
  document.write("<br>"+ "Сума додатніх не парних елементів = "+ sumPositiveOdd);
  document.write("<br>"+ "Сума додатніх парних елементів = "+ sumPositiveEven);
  document.write("<br>"+ "Множення додатніх елементів = "+ mult);
  document.write("<br>"+ arr);
  

