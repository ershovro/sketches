/*
 Сортировка пузырьком
 Сложность - O(n^2)
 Сравниваются соседние элементы, на каждой проходке максимальный перегоняется в конец
 Максимум N - 1 проходок
*/

// 1-й вариант
const bubbleSort = (arr = []) => {
   let
      left = 0, 
      rigth = arr.length - 1;
      
   /*
      Была идея менять левую границу на firstSwap, но это неправильно, т.к. левее получится отсортированный участок массива, 
      но правее могут быть элементы меньше 
   */
   
   while(left < rigth) {
      let wasSwap = false;
      
      for(let i = left; i < rigth; ++i) {        
         
         if ( arr[i] > arr[i + 1] ) {
            [ arr[i], arr[i + 1] ] = [ arr[i + 1], arr[i] ];
            wasSwap = true;                       
         }
      }
      
      --rigth;
      
      if (!wasSwap) {
         break;
      }
   }
   
   return arr;
}
  
//2-й вариант  
const bubbleSort = (arr = []) => {  
   for(let end = arr.length - 1; end > 0; --end) {
      let wasSwap = false;//Оптимизация для случая уже отсортированного массива
      
      for(let j = 0; j < end; ++j) {
         if ( arr[j] > arr[j + 1] ) {
            [ arr[j], arr[j + 1] ] = [ arr[j + 1], arr[j] ];
            wasSwap = true;
         }
      
      }
      
      if (!wasSwap) {
         break;
      }
   }
   
   return arr;
}


/*
 Шейкерная сортировка.
 Сложность - O(n^2)
 По сути всего лишь оптимизированный алгоритм пузырьковой сортировки
 Количество проходок то же, что в пузырьковой, но за счет движения границ получается оптимизация
*/

const coctailSort = (arr = []) => {
   let 
      left = 0,
      rigth = arr.length - 1;
   
   while(left < rigth) {
      let firstSwap, lastSwap, wasSwap;
      
      for(let i = left; i < rigth; ++i) {
      
         if ( arr[i] > arr[i + 1] ) {
            [ arr[i], arr[i + 1] ] = [ arr[i + 1], arr[i] ];
            wasSwap = true;
            lastSwap = i;
         }
         
      }
      
      rigth = lastSwap;
      
      for(let i = rigth; i > left; --i) {
       
         if ( arr[i] < arr[i - 1] ) {
            [ arr[i], arr[i - 1] ] = [ arr[i - 1], arr[i] ];
            wasSwap = true;
            firstSwap = i;
         }
         
      }
      
      left = firstSwap;
      
      if (!wasSwap) {
         break;
      }
   }
   
   return arr;
}


/*
 Сортировка вставками
 Минимальные элементы перегоняются в начало
 Сложность - O(n^2) для худшего случая, для лучшего - O(n)
*/

//в стиле сортировки пузырьком
const insertionSort = (arr = []) => {
   for(let i = 1, length = arr.length; i < length; ++i) {
      
      for(let j = i; j > 0; --j) {
         if ( arr[j] < arr[j - 1] ) {
            [ arr[j], arr[j - 1] ] = [ arr[j - 1], arr[j] ];
         }
      }
      
   }
   
   return arr;
}

const insertionSort = (arr = []) => {
   for(let i = 1, length = arr.length; i < length; ++i) {
      let current = arr[i];
      let j = i;
      
      while( j > 0 && current < arr[j - 1] ) {
         arr[j] = arr[j - 1];
         --j;
      }
      
      arr[j] = current;
   }
   
   return arr;
}