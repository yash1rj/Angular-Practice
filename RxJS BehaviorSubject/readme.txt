Unrelated Components: Sharing Data with a Service

When passing data between components that lack a direct connection, such as siblings, grandchildren, etc, 
we should you a shared service. 
When we have data that should aways been in sync, I find the RxJS BehaviorSubject very useful in this situation.

We can also use a regular RxJS Subject for sharing data via the service, but here’s why I prefer a BehaviorSubject.

1.It will always return the current value on subscription - there is no need to call onnext
2.It has a getValue() function to extract the last value as raw data.
3.It ensures that the component always receives the most recent data.

In the service, we create a private BehaviorSubject that will hold the current value of the message. 
We define a currentMessage variable handle this data stream as an observable that will be used by the components. 
Lastly, we create function that calls next on the BehaviorSubject to change its value.

The parent, child, and sibling components all receive the same treatment. 
We inject the DataService in the constructor, then subscribe to the currentMessage observable 
and set its value equal to the message variable.

Now if we create a function in any one of these components that changes the value of the message. 
when this function is executed the new data it’s automatically broadcast to all other components.
