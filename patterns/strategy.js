var QuickSortStrategy = /** @class */ (function () {
    function QuickSortStrategy() {
    }
    QuickSortStrategy.prototype.sort = function (arr) {
        return this.quickSort(arr, 0, arr.length - 1);
    };
    QuickSortStrategy.prototype.quickSort = function (arr, left, right) {
        var _a;
        if (left >= right) {
            return arr;
        }
        var i = left, j = right;
        var pivot = arr[(i + j) >> 1];
        while (i < j) {
            while (arr[i] < pivot) {
                i++;
            }
            while (arr[j] > pivot) {
                j--;
            }
            if (i < j) {
                _a = [arr[j], arr[i]], arr[i] = _a[0], arr[j] = _a[1];
                i++;
                j--;
            }
            else if (i === j) {
                i++;
            }
        }
        this.quickSort(arr, left, j);
        this.quickSort(arr, i, right);
        return arr;
    };
    return QuickSortStrategy;
}());
var BubbleSortStrategy = /** @class */ (function () {
    function BubbleSortStrategy() {
    }
    BubbleSortStrategy.prototype.sort = function (arr) {
        var _a;
        for (var i = arr.length - 1; i > 0; --i) {
            var wasSwap = false;
            for (var j = 0; j < i; j++) {
                if (arr[j] > arr[j + 1]) {
                    _a = [arr[j + 1], arr[j]], arr[j] = _a[0], arr[j + 1] = _a[1];
                    wasSwap = true;
                }
            }
            if (!wasSwap) {
                break;
            }
        }
        return arr;
    };
    return BubbleSortStrategy;
}());
var Store = /** @class */ (function () {
    function Store(data, strategy) {
        this.data = data;
        this.strategy = strategy;
    }
    Store.prototype.sort = function () {
        return this.strategy.sort(this.data.slice());
    };
    Store.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    return Store;
}());
var store = new Store([9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -8796, 100], new BubbleSortStrategy());
//
console.log(store.sort());
store.setStrategy(new QuickSortStrategy());
console.log(store.sort());
