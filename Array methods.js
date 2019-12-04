/*
 * Копировать массив n раз
 * @param (number) n
 */
Array.prototype.copy = function(n = 0) {
   let
      l = this.length,
      copyL = l * n,
      copy = Array(copyL);
   
   for(let i = 0; i < copyL; ++i) {
      copy[i] = this[ i - l * Math.floor( i / l ) ];
   }
   
   return copy;
}

/*
 Вариант 2. Дико проигрывает первому по времени по памяти
*/
Array.prototype.copy = function(n = 0) {
   let copy = [...this];
   
   for(let i = 1; i < n; ++i) {
      copy = copy.concat(this);
   }
   
   return copy;
}

/*
 Для n = 996100
 1 - 37ms
 2 - завис, так и не отработал. pause before potential out-of-memory crash: copy.length = 1167020 - Опаньки!
*/