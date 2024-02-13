import { describe, it, expect } from "vitest";
import { load } from "./+page.server.js";

describe("/birthdays load function", () => {
    	let listOfBirthdays = [
		{ name: 'Hercules', dob: '1994-03-15' },
		{ name: 'Athena', dob: '2001-08-27' }
	];
    it("returns list of birthdays", async () => {
        const result = await load();
        expect(result.birthdays).toEqual(listOfBirthdays);
    });
});