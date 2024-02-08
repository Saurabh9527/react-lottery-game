
# React Lottery Game

Welcome to the React Lottery Game! This simple web application allows users to play a lottery game by generating random tickets and checking if they win.

## Features

- Generate random lottery tickets.
- Check if a ticket is a winning ticket.
- Simple and clean user interface.

## React Concepts Implemented

### State Management

This project extensively uses React's state management to maintain the application's dynamic behavior. The state is employed to track and update the lottery tickets, winning conditions, and user interactions.

### Component Hierarchy

A proper component hierarchy has been established to ensure maintainability and scalability. Components are organized in a structured hierarchy, promoting reusability and a clean codebase. The key components include:

- **App:** The main component that serves as the entry point and orchestrates the overall structure of the application.

- **Lottery:** Represents the lottery game and encapsulates the logic for ticket generation, winning conditions, and user interactions.

- **Ticket:** Displays the lottery ticket, utilizing the `TicketNum` component for individual numbers.

- **TicketNum:** Represents an individual number on the lottery ticket.

- **Button:** A reusable component for buttons, specifically used for buying new tickets in the `Lottery` component.

### React Hooks

The project makes use of React Hooks, such as `useState`, to manage and update the state within functional components.
