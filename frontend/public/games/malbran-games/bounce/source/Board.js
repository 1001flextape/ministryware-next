export default class Board {

  /**
   * Bounce Board constructor
   * @param {Function} callback
   */
  constructor(callback) {
    /** @type {HTMLElement} */
    this.element = document.querySelector(".board");
    this.width = this.element.offsetWidth;
    this.height = this.element.offsetHeight;
    this.bounds = this.element.getBoundingClientRect();
    this.border = 1;

    // Add click event for desktop
    this.element.addEventListener("click", () => callback());

    // Bind touchmove handler to the class context
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  /**
   * Add the event listeners for both mouse and touch events
   * @param {Function} callback
   * @returns {Void}
   */
  start(callback) {
    this.func = callback;

    // Add mouse movement for desktop
    this.element.addEventListener("mousemove", this.handleMouseMove);

    // Add touch events for mobile
    this.element.addEventListener("touchstart", this.handleTouchMove);
    this.element.addEventListener("touchmove", this.handleTouchMove);
    this.element.addEventListener("touchend", this.handleTouchEnd);
  }

  /**
   * Remove the event listeners
   * @returns {Void}
   */
  end() {
    this.element.removeEventListener("mousemove", this.handleMouseMove);

    // Remove touch events for mobile
    this.element.removeEventListener("touchstart", this.handleTouchMove);
    this.element.removeEventListener("touchmove", this.handleTouchMove);
    this.element.removeEventListener("touchend", this.handleTouchEnd);
  }

  /**
   * Handle mouse move event (desktop)
   * @param {MouseEvent} e
   */
  handleMouseMove(e) {
    this.func(e);
  }

  /**
   * Handle touch move event (mobile)
   * @param {TouchEvent} e
   */
  handleTouchMove(e) {
    if (e.touches && e.touches.length === 1) {
      // Get the first touch point
      const touch = e.touches[0];

      // Create a synthetic mouse-like event
      const fakeMouseEvent = {
        clientX: touch.clientX,
        clientY: touch.clientY
      };

      // Call the same function that handles mouse movement
      this.func(fakeMouseEvent);
    }
    e.preventDefault(); // Prevent scrolling while playing the game
  }

  /**
   * Handle touch end event (mobile)
   */
  handleTouchEnd() {
    // You can handle any end of touch event if needed
    // For example, stopping the paddle movement
  }

  /**
   * Returns the left position of the board
   * @returns {Number}
   */
  get left() {
    return this.bounds.left;
  }
}
