/* generated by Svelte vX.Y.Z */
import {
	SvelteComponent,
	append,
	detach,
	element,
	init,
	insert,
	listen,
	noop,
	safe_not_equal,
	set_data,
	space,
	text
} from "svelte/internal";

function create_fragment(ctx) {
	let input;
	let t0;
	let h1;
	let t1;
	let t2;
	let dispose;

	return {
		c() {
			input = element("input");
			t0 = space();
			h1 = element("h1");
			t1 = text(/*name*/ ctx[0]);
			t2 = text("!");
			input.value = /*name*/ ctx[0];
		},
		m(target, anchor, remount) {
			insert(target, input, anchor);
			insert(target, t0, anchor);
			insert(target, h1, anchor);
			append(h1, t1);
			append(h1, t2);
			if (remount) dispose();
			dispose = listen(input, "input", /*onInput*/ ctx[1]);
		},
		p(ctx, [dirty]) {
			if (dirty & /*name*/ 1 && input.value !== /*name*/ ctx[0]) {
				input.value = /*name*/ ctx[0];
			}

			if (dirty & /*name*/ 1) set_data(t1, /*name*/ ctx[0]);
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(input);
			if (detaching) detach(t0);
			if (detaching) detach(h1);
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let name = "change me";

	function onInput(event) {
		$$invalidate(0, name = event.target.value);
	}

	return [name, onInput];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default Component;