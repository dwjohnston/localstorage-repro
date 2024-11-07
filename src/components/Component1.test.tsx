
import { Component1 } from "./Component1";
import { render, screen } from '@testing-library/react';
import React from "react";
describe(Component1, () => {
    it("displays the initial value", () => {
        render(<Component1/>)

        expect(screen.getByText("hello world!")).toBeInTheDocument()
    })
})