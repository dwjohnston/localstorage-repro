
import { Component2 } from "./Component2";
import { render, screen } from '@testing-library/react';
import React from "react";
describe(Component2, () => {
    it("displays the initial value", () => {
        render(<Component2/>)

        expect(screen.getByText("hello world!")).toBeInTheDocument()
    })
})