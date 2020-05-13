
var find2Max = (arr = []) => {
   let max = [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY];

   for (let num of arr) {
      if (num === max[0] || num === max[1]) {
         continue;
      } else if (num > max[0]) {
         max = [ num, max[0] ];
      } else if ( num > max[1] ) {
         max[1] = num;
      }
   }
   
   return max;
}




const findNMax = (arr = [], n = 1) => {
   let highs = Array(n).fill(Number.NEGATIVE_INFINITY);
   
   arr.forEach( temp => {
   
      for (let i = 0; i < n; ++i) {
         if ( temp > highs[i] ) {
            [temp, highs[i]] = [highs[i], temp];
         } else if (temp === highs[i]) {
            break;
         }
      }
   
   
   
   });

   return highs;
}



var isPalindrome = (str = '') => {
   str = str.replace(/ /g, '').toLowerCase();

   for (let i = 0, middle = Math.floor(str.length / 2), end = str.length - 1; i < middle; ++i) {
      if (str[i] !== str[end - i]) {
         return false;
      }
   }
   
   return true;
}



var carry = function(fn) {
   
   return function carried(...carriedArgs) {
      if (carriedArgs.length >= fn.length) {
         return fn.apply(this, carriedArgs);
      } else {
      
         return function(...args) {
            return carried.apply(this, [...carriedArgs, ...args])
         }
      }
      
   
   }


}



/*
 * Пока что лучший вариант разности массивов
 * Сложность O(n)
 * Доп память O(n) за счет исзменения arr1 нап месте 
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]}  
 */
const diff = (arr1 = [], arr2 = []) => {
   const hashmap = {}, length = arr1.length;
   let i, numberIntersectionCount = 0;
   
   for (let value of arr2) {
      hashmap[value] = value;
   }
     
   for (i = 0; i < length; ++i) {
       if (arr1[i] in hashmap) {
         ++numberIntersectionCount;
       } else {
         [arr1[i], arr1[i - numberIntersectionCount]] = [arr1[i - numberIntersectionCount], arr1[i]];
       }
   }
   
   arr1.length = length - numberIntersectionCount;
   
   return arr1;
}
