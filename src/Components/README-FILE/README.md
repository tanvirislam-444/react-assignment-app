# Project-Name: 🚀 Dev Stack

A modern and responsive developer technology stack builder where you can explore different technologies and create your ideal development stack.


## 📖 About The Project

Dev Stack is a React web application designed for help developers explore different technologies such as frontend, backend, databases, and development tools.

Users can browse technologies and add technologies personal stack section or remove individual technologies also clear the entire stack.

The project focuses on practicing React, TypeScript, state management, reusable components, responsive design, and modern UI development.

---

## 🛠️ Technologies Used

- ⚛️ React
- 🔷 TypeScript
- 🎨 Tailwind CSS
- ⚡ Vite
- 🔔 React Toastify
- 📦 JSON
- 🧩 React Hooks
- 💻 JavaScript / ES6

---

## ✨ Features

### 1. 🔎 Explore Technologies

Users can browse different development technologies with information such as:

- Technology name
- Category
- Difficulty level
- Rating
- Description
- Technology badge

### 2. 🧱 Build Your Development Stack

Users can add technologies to their personal stack by clicking the **Add to Stack** button.

The selected technologies are displayed in the **Your Stack** section.

Users can also:

- Remove individual technologies
- Remove all technologies
- See the total number of selected technologies

### 3. 📱 Responsive Design

The website is designed to work across different screen sizes.

- 📱 Mobile
- 📲 Tablet
- 💻 Desktop

The technology cards and selected stack section automatically adjust their layout based on screen size.

---

# ⚛️ React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript.

React uses jsx for Development easier and more readable

Example:

```tsx
const App = () => {
  return <h1>Hello React</h1>;
};
## 2. What is the difference between props and state?

Props are use for pass data from parent component to child component 
and State is use for store and manage data that can change inside a 
component

## 3. What does the useState hook do, and where did you use it in this project?

useState is used to creat and manage state in a function component. i used useState
in Technologies.tsx and TechnologyCard section in my project

## 4. What does the useEffect hook do, and why did you need it to load the JSON data?

The useEffect hook is used to perform side effects in a React component. it need to load the JSON data when the component was rendered.

## 5. Why does every item in a .map() list need a unique key prop?

React needs a unique key to identify each item in a list.
It helps React understand which item was added, removed, or changed.

6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.
I used it in the Selected Stack section:
{selectedStack.length === 0 ? (
  <div>
    <p>Your Stack is empty</p>
  </div>
) : (
  selectedStack.map((technology) => (
    // technology card
  ))
)}

So:

If the stack is empty → Your Stack is empty
If technologies exist → selected technologies are displayed

##7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using props.
For example, the parent passes selectedStack to SelectedStack:

<SelectedStack
  selectedStack={selectedStack}
  setselectedStack={setselectedStack}
/>

The child can send data back or update the parent's state by receiving a function through props.

For example:

setselectedStack(restTechnology);

Here, the parent owns the state, but the child receives the setter function and can use it to update the parent's state.
