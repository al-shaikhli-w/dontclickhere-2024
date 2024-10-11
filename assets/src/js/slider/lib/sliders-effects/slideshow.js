import gsap from 'gsap';

const NEXT = 1;
const PREV = -1;


export class Slideshow1 {
	DOM = {
		el: null,            // Main slideshow container
		slides: null,        // Individual slides
		slidesInner: null,   // Inner content of slides (usually images)
		deco: null,			 // Empty deco element between the slides
	};
	current = 0;
	slidesTotal = 0;
	isAnimating = false;
	constructor(DOM_el) {
		this.DOM.el = DOM_el;
		this.DOM.slides = [...this.DOM.el.querySelectorAll('.slide')];
		this.DOM.slidesInner = this.DOM.slides.map(item => item.querySelector('.slide__img'));
		this.DOM.slides[this.current].classList.add('slide--current');

		this.slidesTotal = this.DOM.slides.length;

		// Deco element
		this.DOM.deco = this.DOM.el.querySelectorAll('.deco');
	}

	/**
	 * Navigate to the next slide.
	 * @returns {void}
	 */
	next() {
		this.navigate(NEXT);
	}

	/**
	 * Navigate to the previous slide.
	 * @returns {void}
	 */
	prev() {
		this.navigate(PREV);
	}

	/**
	 * Navigate through slides.
	 * @param {number} direction - The direction to navigate. 1 for next and -1 for previous.
	 * @returns {boolean} - Return false if the animation is currently running.
	 */
	navigate(direction) {
		// Check if animation is already running
		if (this.isAnimating) return false;
		this.isAnimating = true;

		// Update the current slide index based on direction
		const previous = this.current;
		this.current = direction === 1 ?
			this.current < this.slidesTotal - 1 ? ++this.current : 0 :
			this.current > 0 ? --this.current : this.slidesTotal - 1

		// Get the current and upcoming slides and their inner elements
		const currentSlide = this.DOM.slides[previous];
		const currentInner = this.DOM.slidesInner[previous];
		const upcomingSlide = this.DOM.slides[this.current];
		const upcomingInner = this.DOM.slidesInner[this.current];

		// Animation sequence using GSAP
		this.tl = gsap
			.timeline({
				defaults: {
					duration: 1.2,
				},
				onStart: () => {
					// Add class to the upcoming slide to mark it as current
					this.DOM.slides[this.current].classList.add('slide--current');
				},
				onComplete: () => {
					// Remove class from the previous slide to unmark it as current
					this.DOM.slides[previous].classList.remove('slide--current');
					// Reset animation flag
					this.isAnimating = false;
				}
			})
			// Defining animation steps
			.addLabel('start', 0)
			.to(currentSlide, {
				duration: 0.4,
				ease: 'power2.in',
				xPercent: -direction * 100
			}, 'start')
			.to(currentInner, {
				duration: 0.4,
				ease: 'power2.in',
				xPercent: direction * 75,
				rotation: -direction * 6
			}, 'start')
			.fromTo(this.DOM.deco, {
				xPercent: direction * 100,
				autoAlpha: 1
			}, {
				duration: 0.4,
				ease: 'power2.in',
				xPercent: 0,
			}, 'start');
		[...this.DOM.deco].forEach((_, pos, arr) => {
			this.tl.to(arr[arr.length - 1 - pos], {
				ease: 'power4',
				xPercent: -direction * 100,
			}, `start+=${(pos + 1) * 0.2}`)
		});
		this.tl
			.addLabel('middle', '<')
			.fromTo(upcomingSlide, {
				autoAlpha: 1,
				xPercent: direction * 100
			}, {
				ease: 'power4',
				xPercent: 0
			}, 'middle')
			.fromTo(upcomingInner, {
				xPercent: -direction * 75,
				rotation: direction * 6
			}, {
				ease: 'power4',
				xPercent: 0,
				rotation: 0
			}, 'middle');
	}

}

export class Slideshow2 {
	DOM = {
		el: null,            // Main slideshow container
		slides: null,        // Individual slides
		slidesInner: null    // Inner content of slides (usually images)
	};
	/**
	 * Index of the current slide being displayed.
	 * @type {number}
	 */
	current = 0;
	/**
	 * Total number of slides.
	 * @type {number}
	 */
	slidesTotal = 0;

	/**  
	 * Flag to indicate if an animation is running.
	 * @type {boolean}
	 */
	isAnimating = false;

	/**
	 * Slideshow constructor.
	 * Initializes the slideshow and sets up the DOM elements.
	 * @param {HTMLElement} DOM_el - The main element holding all the slides.
	 */
	constructor(DOM_el) {
		// Initialize DOM elements
		this.DOM.el = DOM_el;
		this.DOM.slides = [...this.DOM.el.querySelectorAll('.slide')];
		this.DOM.slidesInner = this.DOM.slides.map(item => item.querySelector('.slide__img'));

		// Set initial slide as current
		this.DOM.slides[this.current].classList.add('slide--current');

		// Count total slides
		this.slidesTotal = this.DOM.slides.length;
	}

	/**
	 * Navigate to the next slide.
	 * @returns {void}
	 */
	next() {
		this.navigate(NEXT);
	}

	/**
	 * Navigate to the previous slide.
	 * @returns {void}
	 */
	prev() {
		this.navigate(PREV);
	}

	/**
	 * Navigate through slides.
	 * @param {number} direction - The direction to navigate. 1 for next and -1 for previous.
	 * @returns {boolean} - Return false if the animation is currently running.
	 */
	navigate(direction) {
		// Check if animation is already running
		if (this.isAnimating) return false;
		this.isAnimating = true;

		// Update the current slide index based on direction
		const previous = this.current;
		this.current = direction === 1 ?
			this.current < this.slidesTotal - 1 ? ++this.current : 0 :
			this.current > 0 ? --this.current : this.slidesTotal - 1

		// Get the current and upcoming slides and their inner elements
		const currentSlide = this.DOM.slides[previous];
		const currentInner = this.DOM.slidesInner[previous];
		const upcomingSlide = this.DOM.slides[this.current];
		const upcomingInner = this.DOM.slidesInner[this.current];

		// Animation sequence using GSAP
		gsap
			.timeline({
				defaults: {
					duration: 1.5,
					ease: 'power4.inOut'
				},
				onStart: () => {
					// Add class to the upcoming slide to mark it as current
					this.DOM.slides[this.current].classList.add('slide--current');
				},
				onComplete: () => {
					// Remove class from the previous slide to unmark it as current
					this.DOM.slides[previous].classList.remove('slide--current');
					// Reset animation flag
					this.isAnimating = false;
				}
			})
			// Defining animation steps
			.addLabel('start', 0)
			.to(currentSlide, {
				yPercent: -direction * 100
			}, 'start')
			.to(currentInner, {
				yPercent: direction * 30,
			}, 'start')
			.fromTo(upcomingSlide, {
				yPercent: direction * 100
			}, {
				yPercent: 0
			}, 'start')
			.fromTo(upcomingInner, {
				yPercent: -direction * 30
				//yPercent: 0
			}, {
				yPercent: 0
			}, 'start');
	}

}
export class Slideshow3 {

	/**
	 * Holds references to relevant DOM elements.
	 * @type {Object}
	 */
	DOM = {
		el: null,            // Main slideshow container
		slides: null,        // Individual slides
		slidesInner: null    // Inner content of slides (usually images)
	};
	/**
	 * Index of the current slide being displayed.
	 * @type {number}
	 */
	current = 0;
	/**
	 * Total number of slides.
	 * @type {number}
	 */
	slidesTotal = 0;

	/**  
	 * Flag to indicate if an animation is running.
	 * @type {boolean}
	 */
	isAnimating = false;

	/**
	 * Slideshow constructor.
	 * Initializes the slideshow and sets up the DOM elements.
	 * @param {HTMLElement} DOM_el - The main element holding all the slides.
	 */
	constructor(DOM_el) {
		// Initialize DOM elements
		this.DOM.el = DOM_el;
		this.DOM.slides = [...this.DOM.el.querySelectorAll('.slide')];
		this.DOM.slidesInner = this.DOM.slides.map(item => item.querySelector('.slide__img'));

		// Set initial slide as current
		this.DOM.slides[this.current].classList.add('slide--current');

		// Count total slides
		this.slidesTotal = this.DOM.slides.length;
	}

	/**
	 * Navigate to the next slide.
	 * @returns {void}
	 */
	next() {
		this.navigate(NEXT);
	}

	/**
	 * Navigate to the previous slide.
	 * @returns {void}
	 */
	prev() {
		this.navigate(PREV);
	}

	/**
	 * Navigate through slides.
	 * @param {number} direction - The direction to navigate. 1 for next and -1 for previous.
	 * @returns {boolean} - Return false if the animation is currently running.
	 */
	navigate(direction) {
		// Check if animation is already running
		if (this.isAnimating) return false;
		this.isAnimating = true;

		// Update the current slide index based on direction
		const previous = this.current;
		this.current = direction === 1 ?
			this.current < this.slidesTotal - 1 ? ++this.current : 0 :
			this.current > 0 ? --this.current : this.slidesTotal - 1

		// Get the current and upcoming slides and their inner elements
		const currentSlide = this.DOM.slides[previous];
		const currentInner = this.DOM.slidesInner[previous];
		const upcomingSlide = this.DOM.slides[this.current];
		const upcomingInner = this.DOM.slidesInner[this.current];

		// Animation sequence using GSAP
		gsap
			.timeline({
				defaults: {
					duration: 1.1,
					ease: 'power2.inOut'
				},
				onStart: () => {
					// Add class to the upcoming slide to mark it as current
					this.DOM.slides[this.current].classList.add('slide--current');
				},
				onComplete: () => {
					// Remove class from the previous slide to unmark it as current
					this.DOM.slides[previous].classList.remove('slide--current');
					// Reset animation flag
					this.isAnimating = false;
				}
			})
			// Defining animation steps
			.addLabel('start', 0)
			.to(currentSlide, {
				scale: 0.6,
				yPercent: -direction * 90,
				rotation: direction * 20,
				autoAlpha: 0
			}, 'start')
			.fromTo(upcomingSlide, {
				scale: 0.8,
				yPercent: direction * 100,
				rotation: 0,
				autoAlpha: 1
			}, {
				scale: 1,
				yPercent: 0
			}, 'start+=0.1')
			.fromTo(upcomingInner, {
				scale: 1.1
			}, {
				scale: 1
			}, 'start+=0.1')
	}

}
export class Slideshow4 {

	/**
	 * Holds references to relevant DOM elements.
	 * @type {Object}
	 */
	DOM = {
		el: null,            // Main slideshow container
		slides: null,        // Individual slides
		slidesInner: null    // Inner content of slides (usually images)
	};
	/**
	 * Index of the current slide being displayed.
	 * @type {number}
	 */
	current = 0;
	/**
	 * Total number of slides.
	 * @type {number}
	 */
	slidesTotal = 0;

	/**  
	 * Flag to indicate if an animation is running.
	 * @type {boolean}
	 */
	isAnimating = false;

	/**
	 * Slideshow constructor.
	 * Initializes the slideshow and sets up the DOM elements.
	 * @param {HTMLElement} DOM_el - The main element holding all the slides.
	 */
	constructor(DOM_el) {
		// Initialize DOM elements
		this.DOM.el = DOM_el;
		this.DOM.slides = [...this.DOM.el.querySelectorAll('.slide')];
		this.DOM.slidesInner = this.DOM.slides.map(item => item.querySelector('.slide__img'));

		// Set initial slide as current
		this.DOM.slides[this.current].classList.add('slide--current');

		// Count total slides
		this.slidesTotal = this.DOM.slides.length;
	}

	/**
	 * Navigate to the next slide.
	 * @returns {void}
	 */
	next() {
		this.navigate(NEXT);
	}

	/**
	 * Navigate to the previous slide.
	 * @returns {void}
	 */
	prev() {
		this.navigate(PREV);
	}

	/**
	 * Navigate through slides.
	 * @param {number} direction - The direction to navigate. 1 for next and -1 for previous.
	 * @returns {boolean} - Return false if the animation is currently running.
	 */
	navigate(direction) {
		// Check if animation is already running
		if (this.isAnimating) return false;
		this.isAnimating = true;

		// Update the current slide index based on direction
		const previous = this.current;
		this.current = direction === 1 ?
			this.current < this.slidesTotal - 1 ? ++this.current : 0 :
			this.current > 0 ? --this.current : this.slidesTotal - 1

		// Get the current and upcoming slides and their inner elements
		const currentSlide = this.DOM.slides[previous];
		const currentInner = this.DOM.slidesInner[previous];
		const upcomingSlide = this.DOM.slides[this.current];
		const upcomingInner = this.DOM.slidesInner[this.current];

		// Animation sequence using GSAP
		gsap
			.timeline({
				defaults: {
					duration: 1.2,
					ease: 'expo'
				},
				onStart: () => {
					// Add class to the upcoming slide to mark it as current
					this.DOM.slides[this.current].classList.add('slide--current');
					gsap.set(upcomingSlide, { zIndex: 99 });
				},
				onComplete: () => {
					// Remove class from the previous slide to unmark it as current
					this.DOM.slides[previous].classList.remove('slide--current');
					gsap.set(upcomingSlide, { zIndex: 1 })
					// Reset animation flag
					this.isAnimating = false;
				}
			})
			// Defining animation steps
			.addLabel('start', 0)
			.to(currentSlide, {
				ease: 'power2',
				autoAlpha: 0
			}, 'start')
			.fromTo(upcomingSlide, {
				autoAlpha: 1,
				scale: 0,
				yPercent: direction * 100,
			}, {
				scale: 1,
				yPercent: 0
			}, 'start')
			.fromTo(upcomingInner, {
				scale: 2,
				filter: 'brightness(600%)'
			}, {
				scale: 1,
				filter: 'brightness(100%)'
			}, 'start')
	}

}

export class Slideshow5 {

	/**
	 * Holds references to relevant DOM elements.
	 * @type {Object}
	 */
	DOM = {
		el: null,            // Main slideshow container
		slides: null,        // Individual slides
		slidesInner: null    // Inner content of slides (usually images)
	};
	/**
	 * Index of the current slide being displayed.
	 * @type {number}
	 */
	current = 0;
	/**
	 * Total number of slides.
	 * @type {number}
	 */
	slidesTotal = 0;

	/**  
	 * Flag to indicate if an animation is running.
	 * @type {boolean}
	 */
	isAnimating = false;

	/**
	 * Slideshow constructor.
	 * Initializes the slideshow and sets up the DOM elements.
	 * @param {HTMLElement} DOM_el - The main element holding all the slides.
	 */
	constructor(DOM_el) {
		// Initialize DOM elements
		this.DOM.el = DOM_el;
		this.DOM.slides = [...this.DOM.el.querySelectorAll('.slide')];
		this.DOM.slidesInner = this.DOM.slides.map(item => item.querySelector('.slide__img'));

		// Set initial slide as current
		this.DOM.slides[this.current].classList.add('slide--current');

		// Count total slides
		this.slidesTotal = this.DOM.slides.length;
	}

	/**
	 * Navigate to the next slide.
	 * @returns {void}
	 */
	next() {
		this.navigate(NEXT);
		
	}

	/**
	 * Navigate to the previous slide.
	 * @returns {void}
	 */
	prev() {
		this.navigate(PREV);
	}

	/**
	 * Navigate through slides.
	 * @param {number} direction - The direction to navigate. 1 for next and -1 for previous.
	 * @returns {boolean} - Return false if the animation is currently running.
	 */
	navigate(direction) {
		// Check if animation is already running
		if (this.isAnimating) return false;
		this.isAnimating = true;

		// Update the current slide index based on direction
		const previous = this.current;
		this.current = direction === 1 ?
			this.current < this.slidesTotal - 1 ? ++this.current : 0 :
			this.current > 0 ? --this.current : this.slidesTotal - 1

		// Get the current and upcoming slides and their inner elements
		const currentSlide = this.DOM.slides[previous];
		const currentInner = this.DOM.slidesInner[previous];
		const upcomingSlide = this.DOM.slides[this.current];
		const upcomingInner = this.DOM.slidesInner[this.current];

		// Animation sequence using GSAP
		gsap
			.timeline({
				onStart: () => {
					// Add class to the upcoming slide to mark it as current
					this.DOM.slides[this.current].classList.add('slide--current');
					gsap.set(upcomingSlide, { zIndex: 99 });
				},
				onComplete: () => {
					// Remove class from the previous slide to unmark it as current
					this.DOM.slides[previous].classList.remove('slide--current');
					gsap.set(upcomingSlide, { zIndex: 1 })
					// Reset animation flag
					this.isAnimating = false;
				}
			})
			// Defining animation steps
			.addLabel('start', 0)
			.fromTo(upcomingSlide, {
				autoAlpha: 1,
				scale: 0.1,
				xPercent: direction * 100
			}, {
				duration: 0.7,
				ease: 'expo',
				scale: 0.4,
				xPercent: 0
			}, 'start')
			.fromTo(upcomingInner, {
				filter: 'contrast(100%) saturate(100%)',
				transformOrigin: '100% 50%',
				scaleX: 4
			}, {
				duration: 0.7,
				ease: 'expo',
				scaleX: 1
			}, 'start')
			.fromTo(currentInner, {
				filter: 'contrast(100%) saturate(100%)'
			}, {
				duration: 0.7,
				ease: 'expo',
				filter: 'contrast(120%) saturate(140%)'
			}, 'start')

			.addLabel('middle', 'start+=0.6')
			.to(upcomingSlide, {
				duration: 1,
				ease: 'power4.inOut',
				scale: 1
			}, 'middle')
			.to(currentSlide, {
				duration: 1,
				ease: 'power4.inOut',
				scale: 0.98,
				autoAlpha: 0
			}, 'middle')
	}

}
export class Slideshow6 {

	/**
	 * Holds references to relevant DOM elements.
	 * @type {Object}
	 */
	DOM = {
		el: null,            // Main slideshow container
		slides: null,        // Individual slides
		slidesInner: null,   // Inner content of slides (usually images)

		deco: null,			 // Empty deco element between the slides
	};
	/**
	 * Index of the current slide being displayed.
	 * @type {number}
	 */
	current = 0;
	/**
	 * Total number of slides.
	 * @type {number}
	 */
	slidesTotal = 0;

	/**  
	 * Flag to indicate if an animation is running.
	 * @type {boolean}
	 */
	isAnimating = false;

	/**
	 * Slideshow constructor.
	 * Initializes the slideshow and sets up the DOM elements.
	 * @param {HTMLElement} DOM_el - The main element holding all the slides.
	 */
	constructor(DOM_el) {
		// Initialize DOM elements
		this.DOM.el = DOM_el;
		this.DOM.slides = [...this.DOM.el.querySelectorAll('.slide')];
		this.DOM.slidesInner = this.DOM.slides.map(item => item.querySelector('.slide__img'));

		// Set initial slide as current
		this.DOM.slides[this.current].classList.add('slide--current');

		// Count total slides
		this.slidesTotal = this.DOM.slides.length;

		// Deco element
		this.DOM.deco = this.DOM.el.querySelectorAll('.deco');
	}

	/**
	 * Navigate to the next slide.
	 * @returns {void}
	 */
	next() {
		this.navigate(NEXT);
	}

	/**
	 * Navigate to the previous slide.
	 * @returns {void}
	 */
	prev() {
		this.navigate(PREV);
	}

	/**
	 * Navigate through slides.
	 * @param {number} direction - The direction to navigate. 1 for next and -1 for previous.
	 * @returns {boolean} - Return false if the animation is currently running.
	 */
	navigate(direction) {
		// Check if animation is already running
		if (this.isAnimating) return false;
		this.isAnimating = true;

		// Update the current slide index based on direction
		const previous = this.current;
		this.current = direction === 1 ?
			this.current < this.slidesTotal - 1 ? ++this.current : 0 :
			this.current > 0 ? --this.current : this.slidesTotal - 1

		// Get the current and upcoming slides and their inner elements
		const currentSlide = this.DOM.slides[previous];
		const currentInner = this.DOM.slidesInner[previous];
		const upcomingSlide = this.DOM.slides[this.current];
		const upcomingInner = this.DOM.slidesInner[this.current];

		// Animation sequence using GSAP
		this.tl = gsap
			.timeline({
				defaults: {
					duration: 1.2,
				},
				onStart: () => {
					// Add class to the upcoming slide to mark it as current
					this.DOM.slides[this.current].classList.add('slide--current');
				},
				onComplete: () => {
					// Remove class from the previous slide to unmark it as current
					this.DOM.slides[previous].classList.remove('slide--current');
					// Reset animation flag
					this.isAnimating = false;
				}
			})
			// Defining animation steps
			.addLabel('start', 0)
			.to(currentSlide, {
				duration: 0.4,
				ease: 'power2.in',
				xPercent: -direction * 100
			}, 'start')
			.to(currentInner, {
				duration: 0.4,
				ease: 'power2.in',
				xPercent: direction * 75,
				rotation: -direction * 6
			}, 'start')
			.fromTo(this.DOM.deco, {
				xPercent: direction * 100,
				autoAlpha: 1
			}, {
				duration: 0.4,
				ease: 'power2.in',
				xPercent: 0,
			}, 'start');
		[...this.DOM.deco].forEach((_, pos, arr) => {
			this.tl.to(arr[arr.length - 1 - pos], {
				ease: 'power4',
				xPercent: -direction * 100,
			}, `start+=${(pos + 1) * 0.2}`)
		});
		this.tl
			.addLabel('middle', '<')
			.fromTo(upcomingSlide, {
				autoAlpha: 1,
				xPercent: direction * 100
			}, {
				ease: 'power4',
				xPercent: 0
			}, 'middle')
			.fromTo(upcomingInner, {
				xPercent: -direction * 75,
				rotation: direction * 6
			}, {
				ease: 'power4',
				xPercent: 0,
				rotation: 0
			}, 'middle');
	}

}


export class Slideshow7 {

	/**
	 * Holds references to relevant DOM elements.
	 * @type {Object}
	 */
	DOM = {
		el: null,            // Main slideshow container
		slides: null,        // Individual slides
		slidesInner: null    // Inner content of slides (usually images)
	};
	/**
	 * Index of the current slide being displayed.
	 * @type {number}
	 */
	current = 0;
	/**
	 * Total number of slides.
	 * @type {number}
	 */
	slidesTotal = 0;

	/**  
	 * Flag to indicate if an animation is running.
	 * @type {boolean}
	 */
	isAnimating = false;

	/**
	 * Slideshow constructor.
	 * Initializes the slideshow and sets up the DOM elements.
	 * @param {HTMLElement} DOM_el - The main element holding all the slides.
	 */
	constructor(DOM_el) {
		// Initialize DOM elements
		this.DOM.el = DOM_el;
		this.DOM.slides = [...this.DOM.el.querySelectorAll('.slide')];
		this.DOM.slidesInner = this.DOM.slides.map(item => item.querySelector('.slide__img'));

		gsap.set(this.DOM.el, { perspective: 1000 });

		// Set initial slide as current
		this.DOM.slides[this.current].classList.add('slide--current');

		// Count total slides
		this.slidesTotal = this.DOM.slides.length;
	}

	/**
	 * Navigate to the next slide.
	 * @returns {void}
	 */
	next() {
		this.navigate(NEXT);
	}

	/**
	 * Navigate to the previous slide.
	 * @returns {void}
	 */
	prev() {
		this.navigate(PREV);
	}

	/**
	 * Navigate through slides.
	 * @param {number} direction - The direction to navigate. 1 for next and -1 for previous.
	 * @returns {boolean} - Return false if the animation is currently running.
	 */
	navigate(direction) {
		// Check if animation is already running
		if (this.isAnimating) return false;
		this.isAnimating = true;

		// Update the current slide index based on direction
		const previous = this.current;
		this.current = direction === 1 ?
			this.current < this.slidesTotal - 1 ? ++this.current : 0 :
			this.current > 0 ? --this.current : this.slidesTotal - 1

		// Get the current and upcoming slides and their inner elements
		const currentSlide = this.DOM.slides[previous];
		const currentInner = this.DOM.slidesInner[previous];
		const upcomingSlide = this.DOM.slides[this.current];
		const upcomingInner = this.DOM.slidesInner[this.current];

		// Animation sequence using GSAP
		gsap
			.timeline({
				defaults: {
					duration: 1.2,
					ease: 'power3.inOut',
				},
				onStart: () => {
					// Add class to the upcoming slide to mark it as current
					this.DOM.slides[this.current].classList.add('slide--current');
					gsap.set(upcomingSlide, { zIndex: 99 });
				},
				onComplete: () => {
					// Remove class from the previous slide to unmark it as current
					this.DOM.slides[previous].classList.remove('slide--current');
					gsap.set(upcomingSlide, { zIndex: 1 })
					// Reset animation flag
					this.isAnimating = false;
				}
			})
			// Defining animation steps
			.addLabel('start', 0)
			.to(currentSlide, {
				yPercent: -direction * 100,
			}, 'start')
			.fromTo(upcomingSlide, {
				yPercent: 0,
				autoAlpha: 0,
				rotationX: 140,
				scale: 0.1,
				z: -1000
			}, {
				autoAlpha: 1,
				rotationX: 0,
				z: 0,
				scale: 1,
			}, 'start+=0.1')
			.fromTo(upcomingInner, {
				scale: 1.8
			}, {
				scale: 1,
			}, 'start+=0.17')

	}

}

export class Slideshow8 {

	/**
	 * Holds references to relevant DOM elements.
	 * @type {Object}
	 */
	DOM = {
		el: null,            // Main slideshow container
		slides: null,        // Individual slides
		slidesInner: null    // Inner content of slides (usually images)
	};
	/**
	 * Index of the current slide being displayed.
	 * @type {number}
	 */
	current = 0;
	/**
	 * Total number of slides.
	 * @type {number}
	 */
	slidesTotal = 0;

	/**  
	 * Flag to indicate if an animation is running.
	 * @type {boolean}
	 */
	isAnimating = false;

	/**
	 * Slideshow constructor.
	 * Initializes the slideshow and sets up the DOM elements.
	 * @param {HTMLElement} DOM_el - The main element holding all the slides.
	 */
	constructor(DOM_el) {
		// Initialize DOM elements
		this.DOM.el = DOM_el;
		this.DOM.slides = [...this.DOM.el.querySelectorAll('.slide')];
		this.DOM.slidesInner = this.DOM.slides.map(item => item.querySelector('.slide__img'));

		// Set initial slide as current
		this.DOM.slides[this.current].classList.add('slide--current');

		// Count total slides
		this.slidesTotal = this.DOM.slides.length;
	}

	/**
	 * Navigate to the next slide.
	 * @returns {void}
	 */
	next() {
		this.navigate(NEXT);
	}

	/**
	 * Navigate to the previous slide.
	 * @returns {void}
	 */
	prev() {
		this.navigate(PREV);
	}

	/**
	 * Navigate through slides.
	 * @param {number} direction - The direction to navigate. 1 for next and -1 for previous.
	 * @returns {boolean} - Return false if the animation is currently running.
	 */
	navigate(direction) {
		// Check if animation is already running
		if (this.isAnimating) return false;
		this.isAnimating = true;

		// Update the current slide index based on direction
		const previous = this.current;
		this.current = direction === 1 ?
			this.current < this.slidesTotal - 1 ? ++this.current : 0 :
			this.current > 0 ? --this.current : this.slidesTotal - 1

		// Get the current and upcoming slides and their inner elements
		const currentSlide = this.DOM.slides[previous];
		const currentInner = this.DOM.slidesInner[previous];
		const upcomingSlide = this.DOM.slides[this.current];
		const upcomingInner = this.DOM.slidesInner[this.current];

		// Animation sequence using GSAP
		gsap
			.timeline({
				defaults: {
					duration: 1.2,
					ease: 'power4.inOut',
				},
				onStart: () => {
					// Add class to the upcoming slide to mark it as current
					this.DOM.slides[this.current].classList.add('slide--current');
				},
				onComplete: () => {
					// Remove class from the previous slide to unmark it as current
					this.DOM.slides[previous].classList.remove('slide--current');
					// Reset animation flag
					this.isAnimating = false;
				}
			})
			// Defining animation steps
			.addLabel('start', 0)
			.to(currentSlide, {
				startAt: { transformOrigin: direction === NEXT ? '0% 50%' : '100% 50%' },
				scaleX: 0,
				autoAlpha: 0
			}, 'start')
			.fromTo(upcomingSlide, {
				transformOrigin: direction === NEXT ? '100% 50%' : '0% 50%',
				autoAlpha: 0,
				scaleX: 0
			}, {
				autoAlpha: 1,
				scaleX: 1,
			}, 'start')

	}

}
export class Slideshow9 {

	/**
	 * Holds references to relevant DOM elements.
	 * @type {Object}
	 */
	DOM = {
		el: null,            // Main slideshow container
		slides: null,        // Individual slides
		slidesInner: null,   // Inner content of slides (usually images)

		deco: null,			 // Empty deco element between the slides
	};
	/**
	 * Index of the current slide being displayed.
	 * @type {number}
	 */
	current = 0;
	/**
	 * Total number of slides.
	 * @type {number}
	 */
	slidesTotal = 0;

	/**  
	 * Flag to indicate if an animation is running.
	 * @type {boolean}
	 */
	isAnimating = false;

	/**
	 * Slideshow constructor.
	 * Initializes the slideshow and sets up the DOM elements.
	 * @param {HTMLElement} DOM_el - The main element holding all the slides.
	 */
	constructor(DOM_el) {
		// Initialize DOM elements
		this.DOM.el = DOM_el;
		this.DOM.slides = [...this.DOM.el.querySelectorAll('.slide')];
		this.DOM.slidesInner = this.DOM.slides.map(item => item.querySelector('.slide__img'));

		// Set initial slide as current
		this.DOM.slides[this.current].classList.add('slide--current');

		// Count total slides
		this.slidesTotal = this.DOM.slides.length;

		// Deco element
		this.DOM.deco = this.DOM.el.querySelectorAll('.deco');
	}

	/**
	 * Navigate to the next slide.
	 * @returns {void}
	 */
	next() {
		this.navigate(NEXT);
	}

	/**
	 * Navigate to the previous slide.
	 * @returns {void}
	 */
	prev() {
		this.navigate(PREV);
	}

	/**
	 * Navigate through slides.
	 * @param {number} direction - The direction to navigate. 1 for next and -1 for previous.
	 * @returns {boolean} - Return false if the animation is currently running.
	 */
	navigate(direction) {
		// Check if animation is already running
		if (this.isAnimating) return false;
		this.isAnimating = true;

		// Update the current slide index based on direction
		const previous = this.current;
		this.current = direction === 1 ?
			this.current < this.slidesTotal - 1 ? ++this.current : 0 :
			this.current > 0 ? --this.current : this.slidesTotal - 1

		// Get the current and upcoming slides and their inner elements
		const currentSlide = this.DOM.slides[previous];
		const currentInner = this.DOM.slidesInner[previous];
		const upcomingSlide = this.DOM.slides[this.current];
		const upcomingInner = this.DOM.slidesInner[this.current];

		// Animation sequence using GSAP
		gsap
			.timeline({
				defaults: {
					duration: 0.8,
					ease: 'power3.inOut'
				},
				onComplete: () => {
					// Reset animation flag
					this.isAnimating = false;
				}
			})
			// Defining animation steps
			.addLabel('start', 0)

			.fromTo(this.DOM.deco, {
				yPercent: pos => pos ? -100 : 100,
				autoAlpha: 1
			}, {
				yPercent: pos => pos ? -50 : 50
			}, 'start')
			.to(currentSlide, {
				scale: 1.1,
				rotation: direction * 2
			}, 'start')

			.addLabel('middle', '>')
			.add(() => {
				// Remove class from the previous slide to unmark it as current
				this.DOM.slides[previous].classList.remove('slide--current');
				// Add class to the upcoming slide to mark it as current
				this.DOM.slides[this.current].classList.add('slide--current');
			}, 'middle')
			.to(this.DOM.deco, {
				duration: 1.1,
				ease: 'expo',
				yPercent: pos => pos ? -100 : 100
			}, 'middle')

			.fromTo(upcomingSlide, {
				scale: 1.1,
				rotation: direction * 2
			}, {
				duration: 1.1,
				ease: 'expo',
				scale: 1,
				rotation: 0
			}, 'middle');

	}

}
export class Slideshow10 {

	/**
	 * Holds references to relevant DOM elements.
	 * @type {Object}
	 */
	DOM = {
		el: null,            // Main slideshow container
		slides: null,        // Individual slides
		slidesInner: null,   // Inner content of slides (usually images)

		deco: null,			 // Empty deco element between the slides
	};
	/**
	 * Index of the current slide being displayed.
	 * @type {number}
	 */
	current = 0;
	/**
	 * Total number of slides.
	 * @type {number}
	 */
	slidesTotal = 0;

	/**  
	 * Flag to indicate if an animation is running.
	 * @type {boolean}
	 */
	isAnimating = false;

	/**
	 * Slideshow constructor.
	 * Initializes the slideshow and sets up the DOM elements.
	 * @param {HTMLElement} DOM_el - The main element holding all the slides.
	 */
	constructor(DOM_el) {
		// Initialize DOM elements
		this.DOM.el = DOM_el;
		this.DOM.slides = [...this.DOM.el.querySelectorAll('.slide')];
		this.DOM.slidesInner = this.DOM.slides.map(item => item.querySelector('.slide__img'));

		// Set initial slide as current
		this.DOM.slides[this.current].classList.add('slide--current');

		// Count total slides
		this.slidesTotal = this.DOM.slides.length;

		// Deco elements
		this.DOM.deco = this.DOM.el.querySelectorAll('.deco');
	}

	/**
	 * Navigate to the next slide.
	 * @returns {void}
	 */
	next() {
		this.navigate(NEXT);
	}

	/**
	 * Navigate to the previous slide.
	 * @returns {void}
	 */
	prev() {
		this.navigate(PREV);
	}

	/**
	 * Navigate through slides.
	 * @param {number} direction - The direction to navigate. 1 for next and -1 for previous.
	 * @returns {boolean} - Return false if the animation is currently running.
	 */
	navigate(direction) {
		// Check if animation is already running
		if (this.isAnimating) return false;
		this.isAnimating = true;

		// Update the current slide index based on direction
		const previous = this.current;
		this.current = direction === 1 ?
			this.current < this.slidesTotal - 1 ? ++this.current : 0 :
			this.current > 0 ? --this.current : this.slidesTotal - 1

		// Get the current and upcoming slides and their inner elements
		const currentSlide = this.DOM.slides[previous];
		const currentInner = this.DOM.slidesInner[previous];
		const upcomingSlide = this.DOM.slides[this.current];
		const upcomingInner = this.DOM.slidesInner[this.current];

		// Animation sequence using GSAP
		this.tl = gsap
			.timeline({
				defaults: {
					duration: 0.8,
					ease: 'power4.inOut'
				},
				onComplete: () => {
					// Reset animation flag
					this.isAnimating = false;
				}
			})
			// Defining animation steps
			.addLabel('start', 0);

		[...this.DOM.deco].forEach((_, pos, arr) => {
			const deco = arr[arr.length - 1 - pos];
			this.tl.fromTo(deco, {
				xPercent: _ => pos % 2 === 1 ? -100 : 100,
				autoAlpha: 1
			}, {
				xPercent: _ => pos % 2 === 1 ? -50 : 50,
				onComplete: () => {
					if (pos === arr.length - 1) {
						// Remove class from the previous slide to unmark it as current
						this.DOM.slides[previous].classList.remove('slide--current');
						// Add class to the upcoming slide to mark it as current
						this.DOM.slides[this.current].classList.add('slide--current');
					}
				}
			}, `start+=${Math.floor((arr.length - 1 - pos) / 2) * 0.14}`);
			if (!pos) {
				this.tl.addLabel('middle', '>');
			}
		});

		this.tl
			.to(currentSlide, {
				ease: 'power4.in',
				scale: 0.1,
				onComplete: () => gsap.set(currentSlide, { scale: 1 })
			}, 'start');

		[...this.DOM.deco].forEach((_, pos, arr) => {
			const deco = arr[arr.length - 1 - pos];

			this.tl.to(deco, {
				xPercent: _ => pos % 2 === 1 ? -100 : 100,
			}, `middle+=${Math.floor((pos) / 2) * 0.12}`)
		});

		this.tl
			.fromTo(upcomingSlide, {
				scale: 0.6
			}, {
				duration: 1.1,
				ease: 'expo',
				scale: 1
			}, '>-0.8');

	}

}