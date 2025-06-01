/**
 * Arrow function and "this" scope
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
 */

// Global variable (bad practice, for demo only)
window.score = 100;

// Object with method
const game = {
  name: "Adventure Quest",
  score: 50,

  updateScore: function (newScore) {
    console.log("Original score:", this.score);
    this.score = newScore;
    console.log("Updated score:", this.score);

    // Problem: this will point to global window
    function regularNested() {
      console.log("Inside regular function:", this.score);
    }

    // Solution: arrow keeps the correct 'this'
    const arrowNested = () => {
      console.log("Inside arrow function:", this.score);
    };

    regularNested();  // Outputs 100 (from window)
    arrowNested();    // Outputs updated score (from game object)
  },
};

game.updateScore(75);
