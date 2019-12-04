/* 
 * Получить век по номеру года
 * @param {number} year
 * @return {number} age
 */

const getAge = (year = 0) => Math.ceil( year / 100 )
   
/*
 * Функция, реализующая бесконечное суммирование
 */

function add(a) {
   let res = a;
   
   function summ(b) {
      res += b;
      
      return summ;
   }
   
   summ.toString = () => res; 
   
   return summ;
}


/*
 * Given an array of strings, group anagrams together
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs = []) => {
   let hash;
   
   hash = strs.reduce( (hash, str) => {
      let sorted = [...str].sort().join('');
      
      if ( Array.isArray( hash[sorted] ) ) {
         hash[sorted].push(str);
      } else {
          hash[sorted] = [str];
      }
      
      return hash;
   }, {} );
   
   return Object.values(hash);
}


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
    if (s.length !== t.length) {
        return false
    }
    
   const toSortedArray = str =>  [...str].sort()

   const isEqualArray = (arr1, arr2) => {
      for(let i = 0, l = arr1.length; i < l; ++i) {
         if (arr1[i] !== arr2[i]) {
               return false;
         }
      }
      
      return true;
   }
   
   return isEqualArray(
      toSortedArray(s),
      toSortedArray(t)
   );
}

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
   const toSortedArray = str =>  [...str].sort();
   
   const isEqualArray = (arr1, arr2) => {
      for(let i = 0, l = arr1.length; i < l; ++i) {
         if (arr1[i] !== arr2[i]) {
               return false;
         }
      }
      
      return true;
   };
   
   p = toSortedArray(p);
   
   let
      pL = p.length,
      sL = s.length,
      i = 0,
      res = [];
   
   while( i + pL <= sL ) {
      let t = toSortedArray( s.slice(i, i + pL) );
      
      if ( isEqualArray(t, p) ) {
         res.push(i);
      }
      
      ++i;
   }
   
   return res;
   
};

/**
 * Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), 
 * find all unique combinations in candidates where the candidate numbers sums to target.
 * The same repeated number may be chosen from candidates unlimited number of times.
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    
};





const expandPlaceholders = (str = '', data = {}) => {
   
}

/**
 * Получить значение из объекта по строке-пути
 * @param {object} obj
 * @param {string} path путь в формате 'field1.field2.filed3'
 * @return {*}
*/
var get = (obj = {}, path = '') => {
   let fileds = path.split('.'), value = obj;
   
   for(let f of fileds) {
      if ( value instanceof Object && value[f] ) {
         value = value[f];
      } else {
         break;
      }
   }
   
   return value;
}

/**
 * Подсчитать количество символа в строке
 * @param {string} str
 * @param {string} char
 * @return {number}
*/
const strCount = (str, char) => {
   let count = 0;
   
   for (let s of str) {
      if (s === char) {
         ++count;
      }
   }
   
   return count;
   
}


var countPrimes = (n) => {
   const isPrime = (num) => {
      if (num > 1) {
         for(let i = 2; i < num; ++i) {
            if (num % i === 0) {
               return false
            }
         }
      }
     
      return true;
      
   };
   
   let count = 0;
   
   for(let i = 2; i < n; ++i) {
      if ( isPrime(i) ) {
         ++count;
      }
   }
   
   return count;
}



/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s = []) {
    let
      middle = Math.floor(s.length / 2),    
      last = s.length - 1;
      
    for(let i = 0; i < middle; ++i) {
       [s[i], s[last - i]] = [s[last - i], s[i]];
    }
    
    return s;
};
