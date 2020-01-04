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

var start = Date.now();coctailSort(Array(90000).fill(8));
 var end = Date.now() - start; console.log(end)
 //end = 4
*/


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

/*
 Гномья сортировка
 Сложность O(n^2)
*/

const gnomeSort = (arr = []) => {
   for(let i = 1, length = arr.length; i < length; ++i) {
      
      for(let j = i; j > 0; --j) {
         if (arr[j] < arr[j - 1]) {
            [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];           
         } else {
            break;
         }
      }
      
   }
   
   return arr;
}

const gnomeSort = (arr = []) => {
   let 
      i = 1,
      length = arr.length;
   
   while(i < length) {
      if (i > 0 && arr[i - 1] > arr[i]) {
         [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
         --i;
      } else {
         ++i;
      }
   }
   
   return arr;
}


/*
 Сортировка выбором.
 Сложность O(n^2)
 Является неусточивой.
 Отличие устойчивых сортировок от неустойчивых в том, 
 что если сравниваются не просто значения,
 а объекты по какому-то из свойств,
 то устойчивая сортировка оставит объекты с одинаковым ключом в том же порядке, 
 в котором они были, а неустойчивая перемешает.
*/

var selectionSort = (arr = []) => {
   for(let i = 0, length = arr.length; i < length; ++i) {
      let smallest = i;
      
      for(let j = i; j < length; ++j) {
         if(arr[smallest] > arr[j]) {
            smallest = j;
         }
      }
      
      if (smallest !==i) {
         [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
      }
   }
   
   return arr;
}

/*
var start = Date.now(); selectionSort(Array(90000).fill(8));
 var end = Date.now() - start;
 //end = 84223
 
 На компе цикл в 10^6 итераций работает за 10мс
*/

/*
 Сортировка расческой.
 Является неустойчивой.
 Оптимизация пузырькойвой сортировки - также сравниваются элементы, но не всегда соседние,
 а эл-ты на большем расстоянии.
 Число, на которое должен раз за разом уменьшаться разрыв,
 было названо фактором уменьшения и выведено авторами сортировки из формулы:
 ( 1 / ( 1-e^(-φ) ) = 1.247330950103979
*/

const combSort = (arr = []) => {
    const l = arr.length;
    const factor = 1.247;
    let gapFactor = l / factor;
    
    while (gapFactor > 1) {
        const gap = Math.round(gapFactor);
        
        for (let i = 0, j = gap; j < l; i++, j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
        
        gapFactor = gapFactor / factor;
    }
    return arr;
};




/*
 Быстрая сортировка
 Сложность 
    O( n^2 ) в худшем случае. Высота стека = n и на каждом уровне работа с n элементами
    O( n *log(n) ) в среднем случае. Высота стека = log(n)
 Важен выбор опорного элемента - подойдёт любой, кроме первого
*/

/*
 Выбор опорного индекса от 1 до length - 2: не первый и не последний (если длина >= 3)
*/
const calculatePivotIndex = (length) => {
   let a = 1, b = length - 2;
   
   return Math.round( a - 0.5 + Math.random() * (b - a + 1) );   
}

/*
 Проверка для length = 4, что опорные индексы выбираются с одинаковой вероятностью
let results = {
   1: 0,
   2: 0
}

for(let i = 0; i < 100000; ++i) {
   let pivot = calculatePivotIndex(4);
   
   results[pivot] = results[pivot] + 1 || 1;
}
*/

const quickSort = (arr = []) => {
   let l = arr.length;
   
   if (l < 2) {
      return arr;
   }
   
   let pivotIndex = calculatePivotIndex(l), pivot = arr[pivotIndex], less = [], greater = [];
   
   for(let i = 0; i < l; ++i) {
      if (i === pivotIndex) {
         continue;
      }
      
      let value = arr[i];
      
      if (value < pivot) { 
         less.push(value);
      } else {
         greater.push(value);
      }
   }
   
   return [...quickSort(less), pivot, ...quickSort(greater)];
}



/*
 Сравнение сортировки выбором и быстрой
*/
д
let start = Date.now();

quickSort([]) 


Топ:

Расческой:
 84 ms, faster than 97.75%
 40.6 MB, less than 100.00% 
 
быстрая: (должна лидировать, нужно улучшить)
  116 ms, faster than 66.89%
  56.7 MB, less than 14.29% 

быстрая переделанная(см. ниже):
 88 ms, faster than 95.90%
 40.6 MB, less than 100.00% 
 
выбором:
   1364 ms, faster than 17.38%
   
гномья:
 1-й вар-т - 3000 ms, faster than 11.81%
 2-й вар-т - 3908 ms, faster than 7.22%
 
вставками:
 1-й вар-т - 3636 ms, faster than 11.03% 
 2-й вар-т - 636 ms, faster than 24.12%
перемешиванием
   4880 ms, faster than 6.44%
пузырьком: 
   1-й вар-т - faster than 5.07%, 6560 ms
   2-й вар-т faster than 5.07%, 6244 ms
   
Вывод: все же сорт. расческой хороша, там и рекурсии нет, и на 4 ms у меня рез-ты получились быстрее
   
/*
 Лучшее решение на leetcode. Но мое отстает не много
*/


var sortArray = function(nums) {
    // return bubbleSort(nums)
    // return heapSort(nums)
    quickSort(nums, 0, nums.length-1)
    return nums
};

function quickSort(nums, l, h){
    if(l>=h){
        return 
    }
    
    let i=l
    let j=h
    const pivot=nums[(i+j)>>1]
    
    while(i<j){
        while(nums[i]<pivot){
            i++
        }
        while(nums[j]>pivot){
            j--
        }
        if(i<j){
            [nums[i],nums[j]]=[nums[j],nums[i]]
            i++
            j--
        }else if(i==j){
            i++
        }
    }
    
    quickSort(nums,l, j)
    quickSort(nums, i, h)
}

const quickSort = (arr = [], left, right) => {
   if (left >= right) {
      return arr;
   }
      
   let pivot = (left + right) >> 1, greaterNumberCount = 0;
  
   for (let i = left; i <= right; ++i) {
      if (arr[i] >= arr[pivot]) {
         ++greaterNumberCount;
      } else {
         
         if (pivot === i) {
            pivot = i - greaterNumberCount;
         } else if ( pivot === (i - greaterNumberCount) ) {
            pivot = i;
         }
         
         [arr[i], arr[i - greaterNumberCount]] = [arr[i - greaterNumberCount], arr[i]];
      }
   }
   
   let newPivotIndex = right - greaterNumberCount + 1;
   
   [arr[pivot], arr[newPivotIndex]] = [arr[newPivotIndex], arr[pivot]];
   
   pivot = newPivotIndex;
   
   quickSort(arr, left, pivot - 1);
   quickSort(arr, pivot + 1, right);
   
   return arr;
}


function heapSort(nums){
    const len=nums.length
    
    for(let i=(len>>1)-1; i>=0; i--){
        heapify(i, len)
    }
    
    for(let i=0;i<len;i++){
        [nums[0], nums[len-1-i]]=[nums[len-1-i],nums[0]]
        heapify(0, len-i-1)
    }
    
    return nums;
    
    function heapify(i, limit){
        const l=i*2+1
        const r=i*2+2
        let max=i
        
        if(l<limit && nums[l]>nums[max]){
            max=l
        }
        
        if(r<limit && nums[r]>nums[max]){
            max=r
        }
        
        if(max!=i){
            [nums[i], nums[max]]=[nums[max], nums[i]]
            heapify(max, limit)
        }
    }
}