1. What problem does the context API help solve?

The context API helps manage complex state that is shared across components in
the component tree. It prevents the need for "prop drilling" where, to get some
high level state deep into the component tree, you have to keep passing it down
through each component level as a prop. 

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions describe the available state transitions you can apply to your store.
They consiste of a type and a payload. They they is the transition and the
payload is the data needed to make that transition. A reducer is the system
that transitions the store from one state to the next based on the action. The
store is the actual application state tree that is being managed by redux. The
store is known as a 'single source of truth' because there is only one of them
(paired with one reducer). This is contrasted with flux which supports many
stores.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is used across the whole application (or whole parts of it).
Component state is localized to a component and to the child components that it
is passed to via props. Component state is good for state that doesn't travel
very far and doesn't need to travel "across" the component tree. Application
state is good for state that travels deep into the component tree or across
many different parts of it.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux thunk is redux middleware that allows asychronous actions in Redux.
Normal redux only supports synchronous actions. If you need to perform complex
logic or time-consuming api requests, you need to be able to do asynchronously
to prevent your application from hanging. Redux-thunk changes our
action-creators by having them return a function rather than simply performing
the logic immediately.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I like the context API because it seems to be a bit simpler than Redux and is
produced by the actual React people. That said, I haven't built an application
complex enough to have a real opinion on the matter. I'm happy to use whatever
an existing project uses.
