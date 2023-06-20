### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  
  ```React router allows us to build a single page web application with naviation without refreshing the page.  ```

- What is a single page application?
  
  ```It's a web application or website that interacts with the web browser by dynamically rewriting the current web page with new data from the web server, instead of the default method of the browser loading entire new pages.```

- What are some differences between client side and server side routing?
  
  ```Routing on the client side involved the UI and it doesn't need to keep making requests to the server in order for application to rerender while routing on server side usually invloves the resources that drive the UI or driven by UI```

- What are two ways of handling redirects with React Router? When would you use each?
  
  ```Using History API and <Redirect />component ```

  ```When there's no matching route and we want to redirect back to home```

- What are two different ways to handle page-not-found user experiences using React Router? 
``` using <switch /> component from react router and inside there, we declare a final <Route />at the botton of the route and using <Link to />```

- How do you grab URL parameters from within a component using React Router?

  ```useing useParams hook or useSearchParams```
- What is context in React? When would you use it?

  ```Context in react is an universal data across your application and the data accessible across all comonent saying like if you want to pass the function on parents component to grandchild, you dont have to pass it through child ```

- Describe some differences between class-based components and function
  components in React.
  ```A function component is a function that return JSX. A classs component is a javascript class that extends React.component which has a render method and the JSX to render will be returned inside the render method. ```

- What are some of the problems that hooks were designed to solve?
  
  ```wrapper hell, huge components, and confusing classes```
  