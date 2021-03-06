define(function(require, exports, module) {
	"use strict";

	// Load Modules
	// EventEmitter ?!

	// API
	function ToggleButton(elem, on, off) {
		this.state = false;
		this.elem = elem;
		var onCallback = typeof on === 'function' ? on : function () {};
		var offCallback = typeof on === 'function' ? off : function () {};
		this.on = function () {
			this.state = true;
			this.elem.setAttribute('data-active', '');
			onCallback();
		};
		this.off = function () {
			this.state = false;
			this.elem.removeAttribute('data-active');
			offCallback();
		};
		elem.addEventListener('click', this.toggle.bind(this));
	}

	ToggleButton.prototype.toggle = function toggle(state) {
		if (typeof state === 'boolean') {
			state ? this.on() : this.off();
			return;
		}
		this.state ? this.off() : this.on();
	};

	// Public API
	return ToggleButton;

});
