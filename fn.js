
class MyFunctor {
   constructor(value) {
      this.value = value;
   }
   
   map(fn) {
      return new MyFunctor( fn(this.value) );
   }

}


class Monad {
   constructor(value) {
      this.value = value;
   }
   
   static of(value) {
      return new Monad(value);
   }
   
   map(fn) {
      return Monad.of( fn(this.value) ); 
   }
   
   join() {
      return this.value;
   }
   
   chain(fn) {
      return this.map(fn).join();
   }
   
   ap() {
      
   }
}

function Maybe(value) {
   return value == null ? nothing : Maybe.Just(value);
}

function Just(value) {
   this.value = value;
}

Object.setPrototypeOf( Just.prototype, Maybe.prototype )

Just.prototype.IsNothing = false;
Just.prototype.IsJust = true;
Just.prototype.map = function(fn) {
   return this.of( fn(this.value) );
}
Just.prototype.getOrElse = function() {
   return this.value;
}

function Nothing() {

}

Object.setPrototypeOf( Nothing.prototype, Maybe.prototype )

Nothing.prototype.IsNothing = true;
Nothing.prototype.IsJust = false;
Nothing.prototype.map = function() {
      return this;
}
Nothing.prototype.getOrElse = function(a) {
   return a;
}

Maybe.Just = function(value) {
   return new Just(value);
}

Maybe.Nothing = function() {
   return nothing;
}

Maybe.of = function(value) {
   return new Maybe(value);
}

Maybe.prototype.of = Maybe.of;

const nothing = new Nothing();

