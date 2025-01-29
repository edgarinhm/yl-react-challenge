## React (React & CSS Proficiency)

### **Background**

We’re building a dynamic, responsive, and highly interactive web application. As a senior frontend developer, you’ll need to handle complex UI/UX scenarios, work with reusable components, ensure performance optimizations, and implement maintainable and scalable CSS for both small and large projects.

### Prompt Overview

You are tasked with building a small, interactive UI component using **React** and **CSS** that simulates a **Task List**. The component should allow users to add tasks, toggle their completion status, and delete tasks. The tasks should be styled responsively and with modern CSS techniques.

### Requirements

1. **Task List Component:**
    - Create a component that renders a list of tasks.
    - Each task should have the following:
        - A checkbox to mark it as complete or incomplete.
        - A label displaying the task's name.
        - A delete button to remove the task.
    - Tasks should be stored in the component’s state and be initially loaded from a static array of objects (task name, completion status).
2. **State Management:**
    - **Implement the necessary state management for tasks (use `useState` or `useReducer` if necessary).**
    - Each task should toggle between completed and uncompleted when the checkbox is clicked.
    - Implement a method to remove a task from the list when the delete button is clicked.
3. **Styling:**
    - **Implement responsive design using CSS Flexbox or CSS Grid to make sure the task list is fully responsive.**
    - Each task should visually change when marked as complete (e.g., a line-through on the task name or a different background color).
    - Provide different states for tasks (normal, completed, hover, etc.) using CSS. Feel free to use **CSS Modules**, **Styled Components**, or **SASS** based on your preference or experience.
    - Ensure the design is clean and simple but takes into account usability, accessibility, and responsiveness across various screen sizes.
4. **Accessibility:**
    - Ensure that the task list is fully accessible, with appropriate `aria-*` attributes for elements like checkboxes and buttons.
    - Make sure that the task list is navigable using the keyboard (e.g., tabbing between elements, interacting with the checkbox using the keyboard).

### Advanced/Bonus Features (Optional but Encouraged for Senior Level)

1. **Performance Optimizations:**
    - Optimize the rendering of the task list (e.g., only re-render tasks that have changed).
    - **Prevent unnecessary renders using `React.memo`, `useMemo`, or other React optimizations.**
    - Use the **React Developer Tools** to identify and address performance bottlenecks.
2. **Complex State Management (Optional for Senior Level):**
    - I**mplement a more complex state management solution using useReducer if the logic becomes too complicated (e.g., toggling multiple states, managing undo/redo).**
3. **Persistent State (Optional for Senior Level):**
    - Persist the task list to **localStorage** or another form of persistent storage so that tasks are saved when the user refreshes the page.
4. **Custom CSS Animations (Optional):**
    - Use **CSS animations** or **transitions** to add smooth visual effects when tasks are added, removed, or completed.

### Example User Stories

- **As a user, I want to add new tasks** to the list so I can keep track of things I need to do.
- **As a user, I want to mark tasks as complete** to keep track of what I've already done.
- **As a user, I want to remove tasks** when I no longer need them.
- **As a user, I want the task list to be responsive**, so it looks good on both desktop and mobile devices.