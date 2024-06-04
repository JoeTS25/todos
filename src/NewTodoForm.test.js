import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";

it("renders without crashing", function() {
    render(<NewTodoForm />);
});

it("matches snapshot", function() {
    const { asFragment } = render(<NewTodoForm />);
    expect(asFragment()).toMatchSnapshot();
});

it("creates on form submit", function() {
    const createMock = jest.fn();
    const { getbyText } = render(<NewTodoForm createTodo={createMock} />) 
    const createBtn = getbyText("Add ToDo");
    fireEvent.click(createBtn);
    expect(createMock).toHaveBeenCalled();
});