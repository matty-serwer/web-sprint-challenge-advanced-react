import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);
  const header = screen.getByText(/Checkout Form/i);
  expect(header).toBeVisible();
});

test("form shows success message on submit with form details", () => {
  render(<CheckoutForm />);

  const firstNameInput = screen.getByLabelText(/first name/i);
  const lastNameInput = screen.getByLabelText(/last name/i);
  const addressInput = screen.getByLabelText(/address/i);
  const cityInput = screen.getByLabelText(/city/i);
  const stateInput = screen.getByLabelText(/state/i);
  const zipInput = screen.getByLabelText(/zip/i);
  const checkoutButton = screen.getByRole("button");

  fireEvent.change(firstNameInput, {
    target: { name: "firstName", value: "Jean-Baptiste" },
  });
  fireEvent.change(lastNameInput, {
    target: { name: "lastName", value: "Emmanuel Zorg" },
  });
  fireEvent.change(addressInput, {
    target: { name: "address", value: "1 Zorg Square" },
  });
  fireEvent.change(cityInput, {
    target: { name: "city", value: "New York" },
  });
  fireEvent.change(stateInput, {
    target: { name: "state", value: "NY" },
  });
  fireEvent.change(zipInput, {
    target: { name: "zip", value: "12345" },
  });

  fireEvent.click(checkoutButton);

  const successMessage = screen.getByText(/woo-hoo/i);
  expect(successMessage).toBeVisible();
});
