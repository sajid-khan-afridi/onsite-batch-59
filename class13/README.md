# React Hooks

React hooks let you use state and other React features in functional components without needing class components. They simplify state management, side effects, and other functionalities.

---

1. **Purpose**: React hooks allow functional components to manage state and side effects, which was previously only possible in class components.
2. **Types of Hooks**:

   - **`useState`**: Manages state within a functional component.
   - **`useEffect`**: Handles side effects like data fetching or subscriptions.
   - **`useContext`**: Shares values between components without passing props manually.

3. **Advantages**:
   - Simplifies component logic.
   - Removes the need for class components.
   - Encourages code reuse through custom hooks.
   - Makes code more readable and maintainable.

## Variables vs. `useState` Hook:

1. **Variables:**

   - When you use a regular variable to store data in a functional component, React does **not** automatically track changes to that variable.
   - React only re-renders a component when **state** or **props** change. If you update a regular variable, React will not re-render the component to reflect those changes in the UI.
   - Example:
     ```jsx
     function handleIncrement() {
       count = count + 1;
       console.log(count);
     }
     ```
   - In this case, even if the `count` variable is updated, React won’t re-render the component to reflect this change in the UI.

2. **useState Hook:**
   - The `useState` hook allows you to store state in a functional component, and when the state is updated using its setter function, React will **automatically re-render** the component to display the updated value.
   - Example:
     ```jsx
     const [count, setCount] = useState(0);
     const increment = () => {
       setCount(count + 1); // this will update the state and trigger a re-render
     };
     ```
   - Here, calling `setCount` updates the `count` value **and** causes the component to re-render, ensuring the UI is in sync with the updated state.

### Why Use `useState`?

- **Reactivity**: The `useState` hook ensures that changes to the state cause a component to re-render, keeping the UI in sync with the current state.
- **Persistence**: State values persist between renders, while regular variables get reset on every render.
- **Component Lifecycle**: React’s rendering lifecycle is designed to work with state and props. `useState` integrates smoothly into that lifecycle, allowing React to manage efficient updates and reactivity.

In short, `useState` ensures that when data changes, React knows to re-render the component, which is not possible with regular variables.