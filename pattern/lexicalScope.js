/* #region  lexical scoping javascript */
let a = 1;

function x() {
  console.log(a);
}

function y() {
  let a = 2;
  x();
}

y();
/* #endregion */

/* #region  this treatments like dynamic */
(function () {
  this.b = 1;

  function X() {
    console.log(this.b);
  }

  function Y() {
    this.b = 2;
    X();
  }

  Y();
})();

/* #endregion */
