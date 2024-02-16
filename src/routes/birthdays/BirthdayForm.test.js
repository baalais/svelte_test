import { describe, it, expect} from 'vitest';
import {render, screen} from "@testing-library/svelte";
import BirthdayForm from "./BirthdayForm.svelte";

describe ("BirthdayForm", () => {
    it("has a form element", () => {
        render(BirthdayForm);
        expect(screen.queryByRole('form')).toBeVisible();
    });
    it("has a method post", () => {
        render(BirthdayForm);
        expect(screen
            .queryByRole("form")
            .getAttribute("method"))
        .toBe('post');
    });
    it("has a submit button", () => {
        render(BirthdayForm);
        expect(screen.queryByRole("button")).toBeVisible();
    });
    it("has a input Name", () => {
        render(BirthdayForm);
        expect(screen.queryByLabelText("Name", {
            selector: 'input[type=text]'
        })
        ).toBeVisible();
    });
    it("has a input dob", () => {
        render(BirthdayForm);
        expect(screen.queryByLabelText("dob", {
            selector: 'input[type=date]'
        })
        ).toBeVisible();
    });
});