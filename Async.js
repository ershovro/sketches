define('EDO3/Utils/Async', [
   'Core/Deferred',
   'i18n!EDO3/Utils/Async'
], function (
   Deferred
) {
   'use strict';
   
   var _$constants = {
      /**
       * 9th prime number
       * 27 - 7 + 3
       * 4! - 1
       */
      ASYNC_TIMEOUT: 23
   };
   /**
    * Выполнить функцию асинхронно, примерно в следующий тик EventLoop'a
    * @param {Function} func Функция, которую нужно выполнить асинхронно
    */
   function executeAsync(func) {
      if (requestAnimationFrame) {
         requestAnimationFrame(func);
      } else {
         setTimeout(func, _$constants.ASYNC_TIMEOUT);
      }
   }
   /**
    * Запускает функцию в свободное от тяжелых вычислений время
    * @param {Function} func Функция, которую нужно выполнить
    * @param {Number} timeout Функция, которую нужно выполнить
    */
   function executeSometime(func, timeout) {
      if (window && window.requestIdleCallback) {
         window.requestIdleCallback(func, {
            timeout: timeout || 10000
         });
      } else {
         executeAsync(func);
      }
   }
   /**
     * Оборачивает переданный аргумент в отресолвленный Deferred
     * Если аргумент и так Deferred, то возвращает его
     * @param {*} smth Аргумент для оборачивания
     * @return {Core/Deferred}
     */
   function deferredify(smth) {
      if (smth instanceof Deferred) {
         return smth;
      }
      return new Deferred().callback(smth);
   }
   /**
    * В зависимости от условия или вызывает переданную функцию или
    * возвращает отресолвенный Deferred. Передаваемая функция обязана
    * возвращать Deferred
    * @param {Boolean} condition Условие, при истинности которого вызывать функцию
    * @param {Function} func Функция, вызываемая в случае, если condition === true
    * @param {*} defResult Дефолтное значение, которое будет передано в callback, если условие не выпонено
    * @return {Core/Deferred}
    */
   function conditional(condition, func, defResult) {
      if (condition) {
         return func();
      } else {
         return deferredify(defResult);
      }
   }
   /**
    * Запускает deferred, который успешно разрешится
    * через заданный промежуток времени
    * @param {Number} timeout Время в ms
    * @return {Core/Deferred}
    */
   function wait(timeout) {
      var def = new Deferred();
      setTimeout(def.callback.bind(def), timeout);
      return def;
   }
   /**
    * Реализует композицию асинхронных функций.
    * Возвращает функцию, которая принимает аргумент для вызова
    * последней переданной в аргументы функции, далее,
    * начиная с конца, последовательно выполняются все
    * переданные функции, аргументом в каждую
    * последующуюю передается результат вычисления предыдущей
    * @return {Function}
    * <pre>
    *   function timer(duration) {
    *      var def = new Deferred();
    *      setTimeout(def.callback.bind(def, duration * 2), duration)
    *      return def;
    *   }
    *   AsyncUtils.compose (
    *      timer, // 1600 -> 3200 => result
    *      timer, // 800 -> 1600
    *      timer, // 400 -> 800
    *      timer, // 200 -> 400
    *      timer, // 100 -> 200
    *      timer // 50 -> 100
    *   )(50).addCallback(function(res) {
    *      // => res === 3200
    *   });
    * </pre>
    */
   function compose(/* Funcs, that returns deferreds */) {
      var funcs = new Array(arguments.length),
         i;
      for (i = 0; i < funcs.length; i++) {
         funcs[i] = arguments[i];
      }
      return function(arg) {
         var current = funcs.length - 1;
         return (function execStep(data) {
            if (~current) {
               return funcs[current--](data).addCallback(execStep.bind(null));
            } else {
               return data;
            }
         }(arg));
      };
   }

   return {
      executeAsync: executeAsync,
      executeSometime: executeSometime,
      deferredify: deferredify,
      conditional: conditional,
      wait: wait,
      compose: compose
   };
});