interface SortStrategy {
   sort(arr: number[]): number[];
}

class QuickSortStrategy implements SortStrategy {
   public sort(arr: number[]): number[] {
      return this.quickSort(arr, 0, arr.length - 1);
   }

   protected quickSort(arr: number[], left: number, right: number): number[] {
      if (left >= right) {
         return arr;
      }

      let i = left, j = right;
      let pivot = arr[ (i + j) >> 1 ];

      while(i < j) {

         while(arr[i] < pivot) {
            i++;
         }

         while(arr[j] > pivot) {
            j--;
         }

         if (i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j--;
         } else if (i === j) {
            i++;
         }
      }

      this.quickSort(arr, left, j);
      this.quickSort(arr, i, right);

      return arr;
   }
}

class BubbleSortStrategy implements SortStrategy {
   public sort(arr: number[]): number[] {
      for(let i = arr.length - 1; i > 0; --i) {
         let wasSwap = false;

         for(let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
               [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
               wasSwap = true;
            }
         }

         if (!wasSwap) {
            break;
         }
      }

      return arr;
   }
}

class Store {

   protected data: number[];
   protected strategy: SortStrategy;

   constructor(data: number[], strategy: SortStrategy) {
      this.data = data;
      this.strategy = strategy;
   }

   public sort(): number[] {
      return this.strategy.sort(this.data.slice());
   }

   public setStrategy(strategy: SortStrategy): void {
      this.strategy = strategy;
   }
}

const store = new Store([9,8,7,6,5,4,3,2,1, 0, -8796, 100], new BubbleSortStrategy());
//
console.log(  store.sort() );

store.setStrategy(new QuickSortStrategy());

console.log(  store.sort() );
