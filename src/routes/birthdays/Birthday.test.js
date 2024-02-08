import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';

import Birthday from './Birthday.svelte';

describe('Birthday', () => {
	const defaultData = {
		name: "Zeus",
		dob: "1905-07-30"
	};

	it('has the name of a person', () => {
		render(Birthday, { ...defaultData, name: 'Hercules' });
		expect(screen.queryByText('Hercules')).toBeVisible();
	});

	it('has the name of an another person', () => {
		render(Birthday, { ...defaultData, name: 'Athena' });
		expect(screen.queryByText('Athena')).toBeVisible();
	});

	it("has the date of birth", () => {
		render(Birthday, { ...defaultData, dob: '1994-03-15'});
		expect(screen.queryByText('1994-03-15')).toBeVisible();
	})

	it("has the date of birth of another person", () => {
		render(Birthday, { ...defaultData, dob: '2001-08-27'});
		expect(screen.queryByText('2001-08-27')).toBeVisible();
	})
});


