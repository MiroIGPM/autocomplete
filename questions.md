1. What is the difference between Component and PureComponent? Give an example where it might break my app.

The main difference between these two is the way the handle is updated and re renders, the component re renders whenever it is told to update, while the pure component uses automatically shouldComponentUpdate to do a comparison of props and state to see if the new props and state are the same as the old ones.
Pure components can break an app when we use, for example, nested objects as props or state, as it will only do a shallow check of the two.
For example, when we use children prop.

2. Context + ShouldComponentUpdate might be dangerous. Why is that?

Because of the way the react updates the dom. When we use these two in combination, the way that context passes data, can have some unpredicted behaviour on the ShouldComponentUpdate as it can get it to not trigger and the re-render would not happen when we want it to (because in this case we don't have to pass props explicitly down the tree). So for this to work, we would need to check it manually, which can be hard to maintain.

3. Describe 3 ways to pass information from a component to its PARENT.

-We can use a callback function created in the parent component that is passed as a prop to a child, and then the child component calls the callback and passes the needed data to the parent.
-We can use some way of state management system (redux, context) that allows us to share the data across subscribed components.
-We can use a custom hook where the state would be used by a parent and a setter function would be passed to the child

4. Give 2 ways to prevent components from re-rendering.

We can use a composition pattern where we render the components as children while their references is stored outside of the parent component.
And we can use react memoization to see if there is a real need for re-rendering.

5. What is a fragment and why do we need it? Give an example where it might break my app.

Fragment is a grouping node that actually does not appear in our dom, so it does not have any effect on layout.
When we use them when rendering list items if the key prop are not properly applied,  as react needs to keep an eye on keys in dynamic lists.

6. Give 3 examples of the HOC pattern.

A higher-order component is a component that takes another component and helps us reuse component logic.

There is, for example, a styling component that takes a component, applies the styles that are saved in the HOC and after the styles have been applied, it returns the passed component.
Logging higher-order component that we can use to print out information about the wrapped component.
HOC used for data fetching.

Another pattern that is used by the HOC is the Composing pattern, where we combine multiple higher-order components so we could get a reusable logic from smaller HOCs.

7. What's the difference in handling exceptions in promises, callbacks and async...await?

Promises have a built in error handling with the catch() method, while in callback the handling must be done by hand by passing the error as an argument and then checking it to see if the error happened and async await is quite similar to promises as it also has a built in error handling using cath method.

8. How many arguments does setState take and why is it async.

setState can take two arguments, it can take the value that is supposed to update the state, and it can also accept a callback function.

setState is async because it is better for performance because it minimises the number of re-renders when updating the state and it avoids unexpected behaviours and side effects that could be caused by the immediate state update.

9. List the steps needed to migrate a Class to Function Component.

-Change the definition from a Class to functional component
-Use the useState hook to handle the state that was being used in the class component
-Switch lifecycle methods to useEffect hooks
-remove the render method and swich it to just use the return 

10. List a few ways styles can be used with components.

A couple of ways that we can use styles with the components are: 
-we can use them as inline styles, where we pass the style object to the element
-we can have an external css file that is connected with the components so we style them using classNames and the css rules are taken from the css file
-we can use Styled components
-we can use CSS modules which are good for keeping class names uniqe

11. How to render an HTML string coming from the server.
First we would need to validate and sanitise the string and the use the dangerouslySetInnerHTML for actually rendering the HTML string.