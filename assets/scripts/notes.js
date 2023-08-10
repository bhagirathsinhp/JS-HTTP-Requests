// Working with HTTP Requests...



// 1. What & Why?

// This module is about Network requests. 
// Why does it matter?

// We have our script logic and a rendered HTML code.
// We might have a form where the user can enter some data and an ul where we output the list of posts which the user created.
// We might be powering this with the help of JS.

// SIDE NOTE - we could build such a page without any client side JS code, we could dynamically generate this HTML code including the list of posts which might be created dynamically totally on the server with a language like PHP.
// With it we might get data from the database server and then we render different HTML content based on the page the user is visiting.

// But instead of it we should utilize browser side JS for a better UE.
// So here we could have JS code which is attached to the web page basically.
// We might gather user input and validate it to show any error message if anything happens and we might be managing clicks on posts in that lists of posts to start a deleting process for eg, anything like that.

// Beside this basic management on the screen, we might wanna do more on the CLIENT SIDE.
// We wanna send the submitted form to the server - which we let browser send to the server where we have additional code to handle it.

// With JS we can prevent the default - so that the form isn't automatically send to a server.
// Instead we can step in with JS and then also to store it on the server from inside of JS.
// Meaning - to send HTTP request to some backend or to some server without reloading the page which would happen if we let browser do it's default.

// We can do the same for fetching post where we fetch posts without reloading the entire page because if we only fetched the updated posts we don't need to re-render the page.
// Therefore we might wanna interact to our backend server(API) which we need to have in any case from inside JS instead of letting browser doing it's default behavior.

// Our backend would be an API - APPLICATION PROGRAMMING INTERFACE.
// MEANING - it's a web server which exposes a different so-called Endpoints, different URLs to which we can send requests.
// Based on which URL we send requests to - different things happen on the server.
// And there are engineers working on the server side logic that decide which Endpoints exists - so which HTTP requests are supported, which URLs are offered.

// If the page or the browser interacts with the server directly - it would always have to send brand new HTML page, which means reloading and re-rendering of the page, not good UE..

// Instead what we wanna do is to reach out to the different endpoints where we for eg: might support on the server side - a post request to the serverdomain.com/posts and a get request to the same domain where we might support certain pieces of data that can be attached to the incoming post request.
// Therefore this server needs specific requests targeting specific endpoints.
// That's we can do with the help of JS with some BTS communication.
// We will send request with JS that are correctly configured and hold all the data the server wants to these individual endpoints.

// LOOK INTO MDN FOR HTTP.
// MDN - HTTP REQUEST METHODS.
// MDN - HTTP MESSAGES.
// MDN - HTTP RESPONSE STATUS CODES.
// MDN - HTTP HEADERS.


------------------------------------------------------------------------------------------------------------


// 2. More Background about HTTP...

// How does this work?
// We have our script or client side & server or the backend.

// We can name our client side as frontend - detached from backend.
// Server side could run on a totally different domain, a totally different server than our frontend.
// For eg: the HTML page with JS would be on a domain - mypage.com & the server domain would be mybackend.com.

// These 2 communicate.
// The job on client side is to get user input, validate it and then send it off to the server side.
// The job of server side is to store and retrieve data on the database and the database would run on yet another server.

// We shouldn't directly connect our client side JS directly to a Database for security reasons.
// If we do, it would expose our database credentials in the client side code.
// Instead we talk to a web server and that server might talk to a database server.

// Communication between client side and server happens with HTTP Request/Response..
// These responses and requests have to be configured and set up in a certain way, following a certain structure.

// When sending a request to a server - it needs to know the address, the URL.
// URL - made up of domain name + path(the particular path of the page) - mypage.com/paths.
// In addition, each HTTP request has a HTTP method assigned to it..

// Couple of available HTTP method = get, post, patch,put, delete..
// These methods describe what we wanna do.
// Though it's totally up to the server to decide for which method URL combination the server wants to do what.
// With the method we don't tell server what to do.
// The server just exposes different endpoints & for eg might support a post request to /posts whereas it might not support a patch request to /posts.
// But it's up to the people writing server side code which HTTP method URL combinations are supported.

// We go with the logical combination.
// Get requests typically are there to get data.
// Post are there to create data on the server - which might be stored in the database..
// Patch & Put are there to update data.
// Patch in the sense of updating data, Put in the sense of overriding it.
// Delete is there to delete the data.

// That's what we commonly use, but then again - the server side decides which HTTP method URL combinations are supported.
// Therefore on client side we could send request on these combinations supported.
// If the combination isn't supported, we get an HTTP error as a Response.

// Other parts of HTTP request are - HTTP Headers.
// They're extra metadata which can be attached to HTTP requests.

// Some request also hold a BODY - HTTP Body.
// For eg: Post request holds body or extra data which is attached to the request.
// If we wanna get a lists of posts - there's no extra data to attach
// If we wanna add/create a post - we wanna attach the data that is required for post creation like the title and the content to the request we are sending.

// The data can be sent into different formats - server tells us which formats it expects or supports.
// Common format is JSON data.
// We also have FormData.

// It's upto server to decide which data format is supported for which HTTP method URL combination..


-------------------------------------------------------------------------------------------------------


// 3. Getting Started with HTTP...

// The web-app is for getting and posting to the server.
// But we don't have any server.
// We can create our own server with JS and Node.js..

// NODE.JS is the JS runtime which helps us execute JS outside of the browser.

// For now, we use a dummy API - a dummy web service we can talk to.
// https://jsonplaceholder.typicode.com/
// It's a page where we can send different request to - a dummy API.
// Any data we send to it isn't permanently stored - the API fakes it.

// On the page we see Routes(endpoints) with various HTTP methods and URL Combinations.
// We will use these in the module.
// The combos shows us which kinda requests the fake API accepts.
// If we send a request to a URL or path not listed there, we would get an error.

// Let's see how we use it.
// We will work with /posts endpoint.
// We click on that - we see the JSON data.
// Now when we clicked on it the browser sends a get request - if we enter a URL, it sends a get request.

// We wanna fetch data inside of JS...


-----------------------------------------------------------------------------------------------------


// 4. Sending a GET Request...

// How can we send a HTTP request?
// It all starts with creating new XML HTTP Request object.
// It's called XML cause it was used to fetch XML data but now it's JSON data but the name stayed.
// We have alternatives to it which we will learn later.

const xhr = new XMLHttpRequest();
// This is build into browser - all browser supports this.
// To send a request, we need to configure a request.
// We will use our object.
// We call open() method to it.
xhr.open();
// It won't open a network - it's just a step to configure a request.

// Open() takes 2 args.
// 1st = the HTTP request.
// We use "GET" as a string.
// 2nd = it's the URL which we wanna send request.
// We get the URL from the JSONplaceholder which we open on routes - get.

xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

// We configured the request.
// In order to send it...

xhr.send();
// This will send the request.
// In the network tab of dev tools we will see the requests that were sent.
// We see the posts request - and we click on that to see the data that was retured by the request.

// We click on the header - we see the configuration of the request.
// We see GET to the URL.
// We see the headers attached to the response - attched by the server when it sends back a response...
// We also have request headers which were attached to our request.
// The browser attached some default headers.

// So we got back some data.
// We need to use that data and for that we have to understand the data format.


-------------------------------------------------------------------------------------------------------


// 5. JSON Data & Parsing Data...

// Format of the data is extremely important.
// We exchange dat between client side & server side in a certain format.
// There are no restriction - we can send plain text, HTML markup, XML markup, csv file etc..
// Or we use this data format called JSON...

// JSON is what we see when we click on Response of GET in network tab.
// We will see raw response.

// JSON - JS OBJECT NOTATION...

// JSON is derived from JS data types, from arrays and objects in JS to be precise.
// In JSON we can only store data, we can't have methods in there - can send functions to a server.

// Our Property Name must be wrapped in {} with "" (no single quotes).
// As values we can use - numbers, strings, booleans, arrays, other objects, null.
// We can also have nested objects and nested arrays.

// Now we need to parse the data from the response and output it to the page in a later point of time.
// How do we get to the Response.

// We have to wait for the LOAD Event - which is fired automatically once the data is loaded.
// So once the request is completed.
// We do so by setting EL.

// xhr doesn't always support EL.
// A better way is to listen to it is to assign a event handler function.

// We use alternative to EL - onload.
// We attach a function(any kind) that handles the response.
// We set this function here before the send().
// We use the xhr.response.
xhr.onload = function () {
  console.log(xhr.response);
}
// We get the JSON data in console.
// So if we stored this data - we would not be able to push a new element there.

// In order to use it we have to convert JSON to JS types.
// We use JSON construction function, class which is built-in JS.

xhr.onload = function () {
  const listOfPosts = JSON.parse(xhr.response); 
}

// JSON has couple of static helper methods - PARSE & STRINGIFY.
// Stringify helps us convert JS code or objects & arrays to JSON data.
// Parse helps us convert JSON data to JS...
// Here we parse and if we console.log we will have JS data we could work with..

// Now we can use alternative to parse JSON with xhr extra configuration..
xhr.responseType = 'json' // We type this exactly like...

// Then if we store the xhr.response in a const, we'll automatically get the JS parsed data BTS..
xhr.onload = function () {
  const listOfPosts = xhr.response; 
}

// How can we output in the index.HTML file.
// There in we got a ul with class posts.
// Then we have a template with li which we use for outputting it.

const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');

// Now we wanna add listOfPosts to ul by turning them into listElements..
// We wanna loop through all.
// But can we loop through listOfPosts?
// As it is inside the function.

// The response happens Asynchronously and JS will not block code execution - it will continue even though the response might not be there yet..

// Therefore we will use our looping logic inside of the function...

xhr.onload = function () {
  // const listOfPosts = JSON.parse(xhr.response);
  const listOfPosts = xhr.response;
  // console.log(listOfPosts);
  for(const post of listOfPosts){}
};

// The goal is to replicate the template for every post and add it to the listElement.
// We use importNode() where we import the postTemplate.content, and pass true to make a deep clone..

xhr.onload = function () {
  // const listOfPosts = JSON.parse(xhr.response);
  const listOfPosts = xhr.response;
  // console.log(listOfPosts);
  for(const post of listOfPosts){
    const postEl = document.importNode(postTemplate.content, true);
  }
};

// Now for postEl we select the H2 tag and set the text content = post. 
// We set the post to = post.title.toUpperCase() as every post has a title.
// Also every post has a body.
// Then we append our postEl to listElement.

xhr.onload = function () {
  // const listOfPosts = JSON.parse(xhr.response);
  const listOfPosts = xhr.response;
  // console.log(listOfPosts);
  for(const post of listOfPosts){
    const postEl = document.importNode(postTemplate.content, true);
    postEl.querySelector('h2').textContent = post.title.toUpperCase();
    postEl.querySelector('p').textContent = post.body
    listElement.append(postEl)
  }
};

// This works....


-----------------------------------------------------------------------------------------------------


// 6. Promisifying Http Requests (with XMLHttpRequest).... 

// It's nice to get data but also we wanna send data.
// We have form inside the page which when we click reloads the page cause the browser submit it and send it to the server the HTML page is hosted on...

// We wanna send a request to this JSONPlaceHolder page.
// This page also allows us to create a resource by sending a post request.

// We can tweak and improve the code with OOP code but here we just wanna configure it to be usable.

// For that we wrap the entire get request logic in a function.
// We pass the method and url args...
// Then we cut the logic and paste it in this function...
function sendHttpRequest (method, url){
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

  xhr.responseType = "json";

  xhr.onload = function () {
    // const listOfPosts = JSON.parse(xhr.response);
    const listOfPosts = xhr.response;
    // console.log(listOfPosts);
    for (const post of listOfPosts) {
      const postEl = document.importNode(postTemplate.content, true);
      postEl.querySelector("h2").textContent = post.title.toUpperCase();
      postEl.querySelector("p").textContent = post.body;
      listElement.append(postEl);
    }
  };

  xhr.send();
}

// Now we replace the get method with the method parameter.
// We replace the URL into the url parameter.
// ResponseType will always be "json" here.

// In onload - we also don't wanna have the hardcoded logic.
// Instead we will promisify it.
// We will move all this logic into the promise constructor function.
// And in onload, we'll call resolve(xhr.response).\
// In the end we'll return the promise.

function sendHttpRequest (method, url){
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.responseType = "json";

    xhr.onload = function () {
      resolve(xhr.response)
      // const listOfPosts = JSON.parse(xhr.response);
      const listOfPosts = xhr.response;
      // console.log(listOfPosts);
      for (const post of listOfPosts) {
        const postEl = document.importNode(postTemplate.content, true);
        postEl.querySelector("h2").textContent = post.title.toUpperCase();
        postEl.querySelector("p").textContent = post.body;
        listElement.append(postEl);
      }
    };
    xhr.send();
  } )

  return promise;
}

// So now this function is reusable.
// We can call sendHttpRequest.
// We will also remove the harcoded for loop code from the function in a bit.

// Then we create a new function in which we call the sendhttprequest and pass in the get and the url related to it...

function fetchPosts(){
  sendHttpRequest('GET', "https://jsonplaceholder.typicode.com/posts")
}

// We use then to the sendhttprequest and cut the hardcode for loop code and paste it in it.
// We can also use asyn await. 
// We will see both the examples...

// THEN()
function fetchPosts(){
  sendHttpRequest('GET', "https://jsonplaceholder.typicode.com/posts").then(responseData => {
    const listOfPosts = responseData;
      // console.log(listOfPosts);
      for (const post of listOfPosts) {
        const postEl = document.importNode(postTemplate.content, true);
        postEl.querySelector("h2").textContent = post.title.toUpperCase();
        postEl.querySelector("p").textContent = post.body;
        listElement.append(postEl);
      }
  })
}
fetchPosts()
// This works..

// ASYNC AWAIT...
async function fetchPosts(){
  const responseData = await sendHttpRequest('GET', "https://jsonplaceholder.typicode.com/posts")
    const listOfPosts = responseData;
    // console.log(listOfPosts);
    for (const post of listOfPosts) {
      const postEl = document.importNode(postTemplate.content, true);
      postEl.querySelector("h2").textContent = post.title.toUpperCase();
      postEl.querySelector("p").textContent = post.body;
      listElement.append(postEl);
    }
}
fetchPosts();
// This works too..


-----------------------------------------------------------------------------------------------------


// 7. Sending Data with a POST Request...

// We make sure to send the POST request..
// This is a request that adds data on the server..

// We create a new async function.
// We pass the title and content args.
// We will create a new random userid for every userId the API data needs...
// Then create a post object with title, body and a userId - as we have this in the API data.
// Makes sure to write the object property as the API accepts it.

async function createPost(title, content){
  const userId = Math.random();
  const post = {
    title: title,
    body: content,
    userId: userId
  }
}

// How do we now send this..
// We will re-use the function.
// The URL will be same.
// The method will now be the POST - and it don't need the method to be uppercase but it's the CONVENTION to write it that way.

async function createPost(title, content){
  const userId = Math.random();
  const post = {
    title: title,
    body: content,
    userId: userId
  }

  sendHttpRequest('POST', "https://jsonplaceholder.typicode.com/posts")
}

// Now we need to enhance this method.
// As in get request we just need to get the data but here we'll need to append extra data to the request.
// So we need to add data which we need to create on the server.

// To do that we need to tweak our sendHttp function.
// We will expect a data arg.
// So we can append this to the outgoing request.
// To append data to the outgoing request - we go to the xhr.send() and pass that there.
// The data needs to be JSON data.
function sendHttpRequest(method, url, data){
  xhr.send(JSON.stringify(data))
}

// Then we want our sendhttp request to have the data inside the createPost function as that post is the object data we wanna append to the request...
async function createPost(title, content){
  const userId = Math.random();
  const post = {
    title: title,
    body: content,
    userId: userId
  }

  sendHttpRequest('POST', "https://jsonplaceholder.typicode.com/posts", post)
}

// With that we can call createPost..
createPost('DUMMY', 'A dummy Post!')

// We check the network tab and see the extra request.
// The 201 request will be there.
// In there if we see the request tab - we see our data..

// This is how we send a request with JSON data to an API...
// Let's tweak our project where the user entered data is what we send and we also send it when we click add or we fetch when we click fetch...


--------------------------------------------------------------------------------------------------------


// 8. Triggering Requests via the UI...

// Let's link our requests to our UI.
// For that we need access to form and the fetchpost button - we look into HTML.

const form = document.querySelector('#new-post form');
const fetchButton = document.querySelector('#available-posts button');

// To fetch posts = we use EL and pass the function.
fetchButton.addEventListener('click', fetchPosts);

// For form, we add EL to submit event.
// We get the event object where we prevent default so the browser doesn't submit the form.
// We could validate the user input here but we don't focus on that.

form.addEventListener('submit', event => {
  event.preventDefault();
})

// We could fetch inputs, checking the value the user entered and then maybe presenting the error, instead we would get the input from the field with the title and from the field with ID.

// So to get the access with enteredTitle and enteredContent - with event current target and get the title id, content id with query with the value.
// We will call createPost and pass in the consts.
form.addEventListener('submit', event => {
  event.preventDefault();
  const enteredTitle = event.currentTarget.querySelector('#title').value;
  const enteredContent = event.currentTarget.querySelector('#content').value; 

  createPost(enteredTitle, enteredContent)
;})


// So with this we click fetch post to get all the posts.
// And to add a new post we type in the data - and we click add to see inside the network tab of console and see the request is sent and contains data which we entered.

/* 
The "Fetch" Button Always Appends

Just a quick note to avoid confusion: In the demo app, the "Fetch" button always appends data without clearing existing data first. That means that pressing the button multiple times will add more and more items.

You can of course adjust the code to clear the content first.
*/


-----------------------------------------------------------------------------------------------------


// 9. Sending a DELETE Request..

// It depends on API which kind of request we can send.
// Here in JSON api which supports delete request.
// It includes a different URL.
// We have a delete button on each posts.
// We make sure the ID in every response is mapped to it's element so we can find which element we clicked the delete button to send the right delete request.

// Here we wanna add the ID property.
// We get all the list items and set the post.id
async function fetchPosts() {
  const responseData = await sendHttpRequest(
    "GET",
    "https://jsonplaceholder.typicode.com/posts"
  );
  const listOfPosts = responseData;
  // console.log(listOfPosts);
  for (const post of listOfPosts) {
    const postEl = document.importNode(postTemplate.content, true);
    postEl.querySelector("h2").textContent = post.title.toUpperCase();
    postEl.querySelector("p").textContent = post.body;
    postEl.querySelector('li').id = post.id;
    listElement.append(postEl);
  }
}

// So when we click fetch post button on the page we go to inspector in dev we see each elements has their ID as attributes added.
// We use them to make delete button work.
// We should add listener to delete.
// We will use event delegation so we don't have to add delete to each EL and we could only use 1 listener on the list and find out which button on which li was clicked.

// We need access to the overall list here.
postList = document.querySelector('ul');
// On it we call EL and accept the event object.

// Now we don't want anything to be deleted just because a click happened anywhere on the list.
// Instead we now need to find out the item which was clicked and if the button was clicked there - and not just anything else on the item.

// To check that we reach out to the target and get the tag name which is BUTTON all uppercase then we know we clicked on a button...
postList.addEventListener('click', event => {
  if(event.target.tagName === 'BUTTON'){
    console.log('clicked on button!')
  }
})
// So when we click on Delete button only the console shows the message.

// Now we need to find out which list item the button belongs.
// We create a const by using event target closest to get the closest item - li and on it we have the id..
// It would give the id of the post on which we clicked the delete button.
// 
postList.addEventListener('click', event => {
  if(event.target.tagName === 'BUTTON'){
    const postId = event.target.closest('li').id;
    console.log(postId);
  }
})

// So now we can work on the actual delete request.
// We sendhttprequest and add delete as a method and on URL we use `` as we inject something in it.
// We add the post id cause that's what the API wants.
// It wants the ID of the post which should be request to fake delete and it should be attached to the request url.
postList.addEventListener('click', event => {
  if(event.target.tagName === 'BUTTON'){
    const postId = event.target.closest('li').id;
    sendHttpRequest('DELETE', `https://jsonplaceholder.typicode.com/posts/${postId}`)
  }
})

// Now a delete request is send.
// We can delete the element from the UI but it's not related to the HTTP methods so we don't do that here.


-----------------------------------------------------------------------------------------------------


// 10. Handling Errors...

// Thus far everything works - but we may have HTTP request which may fail.
// They may fail for many reasons - internet connection is bad, server is down, sending invalid data and many more ways.
// To be informed about a failing request we gotta add another listener to our XMLHttpRequest Object.
// The ONERROR Handler.
// This will trigger whenever we have error sending HTTP request..

// We see what we have here.
// The status gives us the status code back.
xhr.onerror = function(){
  console.log(xhr.responst)
  console.log(xhr.status)
}

// Now to simulate an error.
// We can go to our get request and send it to invalid URL - maybe we get the posts in the end to just pos..
// We can see in the console there's a 404.

// But we don't see the error handler kick in.
// It's cause it doesn't kick in for HTTPRequests that are technically successful where we just have serverside error - where we just get back a non-200 status code.

// This error handler will kick in if we have a network error - request failed to be sent or timeout etc..
// If request leave the page and get response from server(even error) then we don't make it to ONERROR but to ONLOAD cause technically we have a correct request & response.

// We will use a IF check for the onload where we will check the status codes which are >= 200 and < 300 which indicates a success case.
// In this case we wanna resolve the promise.
// On else we reject it with new error object where we pass in a message.
xhr.onload = function () {
  if(xhr.status >= 200 && xhr.status < 300) {
    resolve(xhr.response);
  } else{
    reject(new Error('Something Went Wrong!'))
  }
};

// And in the onerror - we use reject which states failed to send request.
// This will happen if we technically fail to send a request..
xhr.onerror = function () {
  reject(new Error('Failed to Send Request..'))
};

// So now if we make the URL with pos, we see proper error handling.

// And we will use proper TRY CATCH on the function to not carry on and pass in the error message on catch(errror) by moving the entire function into try.
// So we get proper message instead of broken script.


----------------------------------------------------------------------------------------------------------


// 11. Using the fetch() API...

// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest

// ALTERNATIVE TO XMLHTTPREQUEST - FETCH() API.
// We comment our entire HTTP logic in the promise.

// It all works around one key function - fetch().
// This is build into JS just like - fetch().
// It's available function in modern JS.

// How do we use fetch();
// In it's simplest form fetch() takes a URL parameter - it should be a string.
// Then it will send a GET request if we pass a URL to fetch().
// Fetch() by default is promise based.
// It's the first native Promise API we see in this course.
// We don't have to promisify it - it uses promise on it's own.
// We can remove our promise wrapper.
// We can just return the result of fetch().

function sendHttpRequest(method, url, data) {
  // const promise = new Promise((resolve, reject) => {
  //   const xhr = new XMLHttpRequest();

  //   xhr.open(method, url);
  //   xhr.responseType = "json";

  //   xhr.onload = function () {
  //     if (xhr.status >= 200 && xhr.status < 300) {
  //       resolve(xhr.response);
  //     } else {
  //       reject(new Error("Something Went Wrong!"));
  //     }
  //   };

  //   xhr.onerror = function () {
  //     reject(new Error("Failed to Send Request.."));
  //   };

  //   xhr.send(JSON.stringify(data));
  // });

  return fetch(url);
}

// We have the url in the fetch().
// We see how it works before we fine tune it for different kind of requests.
// We use it for fetchPosts().
// We have the url in it.
// So let's see - we get error as alert.
// Now we comment the try catch method and let the main code be as it is...
// We see an error that listOfPosts isn't a iterable.

async function fetchPosts() {
  // try {
    const responseData = await sendHttpRequest(
      "GET",
      "https://jsonplaceholder.typicode.com/pos"
    );
    const listOfPosts = responseData;
    // console.log(listOfPosts);
    for (const post of listOfPosts) {
      const postEl = document.importNode(postTemplate.content, true);
      postEl.querySelector("h2").textContent = post.title.toUpperCase();
      postEl.querySelector("p").textContent = post.body;
      postEl.querySelector("li").id = post.id;
      listElement.append(postEl);
    }
  // } catch (error) {
  //   alert(error.message);
  // }
}

// Somehow we don't get response data when we called sendHttpRequest.
// Now with fetch() - we see in the network tab the posts were fetched.
// So what's the problem then?

// Unlike XML request - fetch doesn't give us parsed response.
// It gives us a streamed response - the object response doesn't hold the body in a way that would be ready to be used..

// Instead what we gotta do is in fetch() - we use then() and get our response object and have access to response.json() method.
// There we return the result of this cause it actually yields a new promise.
return fetch(url).then(response => {
  return response.json()
})

// Now JSON when we call it on the response object which the fetch API gives - we parse the body of the response and transform it from JSON to JS objects and arrays.
// It doesn't parse that - but also turns the streamed response body into a snapshot.

// WE NEED TO CALL RESPONSE.JSON TO CONVERT UNPARSED RESPONSE BODY INTO A SNAPSHOT PARSED BODY.

// Beside response.json() we have response.text() to return Plain Text.
// Response.blob() - if we want access to file we would be downloading.

// With that we get our post - now we make sure we create a new post.


--------------------------------------------------------------------------------------------------


// 12. POSTing Data with the fetch() API...

// To create a new post we need to make sure the createPost function works.
// For that we use HTTP method in fetch() and also the data/body should be appended to the outgoing request.
// We send get request when we only send a url in fetch().

// We can configure the request but we can't pass the method as arg..
// We pass a second parameter to fetch() - which should be an object where we can configure the request.
// There we have lot of keys we can set...
// There's Method key which we would use - it's set default to GET so we don't need to set GET method to fetch().

// We have to name other methods here.
// We set the key to value parameter of sendHttpRequest - method in here.
// We also have body - which we have to set in JSON data - on our parameter of sendHttpRequest.
// For this API in general we can send different kinds of data - binary, JSON, form, etc...


fetch(url, {
  method: method,
  body: JSON.stringify(data)
})

// We check if delete works and it works..

// Let's look into adding HEADERS to Http requests - for both fetch() and XMLHttpRequest.


-------------------------------------------------------------------------------------------------------


// 13. Adding Request Headers..

// Headers can be important.
// For some APIs we need to describe which type of data we are sending.
// Some APIs might need extra authentication data.

// Headers are basically metadata we can attach to outgoing request.
// Server sets headers to response.
// There are default headers on request the browser sends.

// We add headers to the outgoing requests.
// We do that in the fetch() object by adding headers key.
// Headers key takes a JS object where every header we wanna add key-value pair...
// It can take more than one key-value pair...
// There are some regularly types of headers that are to be added but we can add any arbitrary ones we come up with..
// A header makes only sense to be added if server expects it and does something with it...

fetch(url, {
  method: method,
  body: JSON.stringify(data),
  headers: {
    'Content-Type': 'application/json'
  }
}).then((response) => {
  return response.json();
});

// 'Content-Type' - it's more commonly used, though we have no use of it here but understanding purpose..
// It has to be in '' cause of -.
// 'application/json' - the value.
// This says to the server - the request we send has JSON data.
// Current JSONplaceholder API always expects JSON data so no use here - but other APIs might care..

// So now in network - get - we can see the content-type if we fetch our posts.

// On XMLHttpRequest..
// There we have xhr.setRequestHeader() method.
// The 1st arg in it is the header name - content-type.
// The 2nd arg in it is the header value - application/json..
xhr.setRequestHeader('Content-Type', 'application/json')
// We can add multiple headers by calling this method multiple times..
// IMP - once a header is added with this method, we can't delete it.


-----------------------------------------------------------------------------------------------------------


// 14. fetch() & Error Handling...

// As fetch() apis works with promises by default, it looks better than xml..

// A bigger annoyance is when we look at error handling.
// We break the GET URL like we did before and click fetch posts we get the error.
// As the API works with promise we could TRY CATCH block.
// Or if we didn't use async await we could use catch method in our promise.

// Now the problem here just as it is with XMLrequest - That a request is technically succeeded, so where we don't have a technical issue - 400 or 500 error status code sent back by the server - won't trigger a traditional error.

// So if we create a catch block on the return fetch inside sendhttprequest. We don't get anything on it.
// Let's see...

return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response.json();
  }). catch(error => {
    console.log(error);
    throw new Error('Something Went Wrong!')
  })

// We don't see any error logging - the error is coming from another line..
// We don't make it into catch block.
// The reason is the same as with XMLHttpRequest - only technical issues like network connectivity issues would lead us to go into that catch block...

// Instead we're in the then() block...
// We can check the response.status just as XMLrequest and find out if we have an error here.
// So we can use it like this...

// We return the response.json only when the if check is true..
// In the else case - we throw a new error which says there's server side problems...
.then(response => {
  if (response.status >= 200 && response.status < 300){
    return response.json();
  } else {
    throw new Error ('Something went Wrong! - Server Side...')
  }
})

// If we reload - Now we get the correct output.
// Still we have a problem. 
// What if we wanna look at the body of our response?
// Often for server side errors - the server might attach extra info to the response body...
// Even in the case of errors - we get back valid response with a response body and we might wanna parse that response body to get the data the server might have added.

// In XMLHttpRequest, this would've been easy.
// In the else case on onload - if we got an error - we could still access - xhr.response;

// The fetch API - the body is streamed.
// We don't have direct access to the body.
// We have to call response.json() in the error case as well.
// And response.json() yields a promise - so the result is NOT available in the next line...

// So we use the then() on response.json().
// This isn't a good idea to chain promise inside of a promise but such is the way.
// We get the errData from it and also return the main error string within it...
// But just this will only return the errData and not the listOfPost error - something went wrong server side error.
// Cause now we have it inside of a chained promise instead of where it was needed - on the outside block.
// So for that we just return the response.json() - and doing that we connect it to the outer chain...

return response.json().then(errData => {
  console.log(errData);
  throw new Error("Something went Wrong! - Server Side...");
})

// With this we get the proper error propagation.
// And we have the error data.
// This isn't the most beautiful error handling code but we gotta work with.

// This is how we use the fetch API and implement proper error handling with access to the response body.

// And in fetchpost we TRY CATCH...
// This shows the message alert.


-------------------------------------------------------------------------------------------------------


// 15. XMLHttpRequest vs fetch()...

// fech() is generally easy to use but isn't supported on older browsers...
// It uses promises out of the box.
// Minus is the error handling can be clunky - not a beautiful approach.

// It isn't good in XMLHttpRequest too but we might hide in some custom function - it might be easy to understand..

// Another alternative to this is to use THIRD-PARTY LIBRARY...
// It might wrap one of both and give back a nicer API to work with...


-----------------------------------------------------------------------------------------------------------


// 16. Working with FormData....

// We can send different data - which depends on the server of what data it would accept.
// Here our jsonplaceholder api only accept json data.
// But we might be working with other servers which accepts other data. 

// We can send files, binary data and add the body - add a pointer at a file which a user picked.
// Or we could use another form of data - FORM DATA...

// Let's go to create post - and there we created our post object - added the url - we basically convert the data to json and add it to the request...

// Now we can also formData - this API doesn't support it but other might, we gotta learn it...

// For that, in the create post - we can create form data by creating a new const.

const fd = new FormData();
// This is there in JS.
// FormData builds a new object to which we can add key-value pairs..
// But internally when it's sent, it would be send in a different way than JSON data.
// It has a different format.

// To form data we append the data.
fd.append('title', title);
// This is how we add key-value pair to form data.
// For body & userId this is the same..
fd.append('body', content);
fd.append('userId', userId);

// We prepared such a form data object.
// We add the data to the request.
sendHttpRequest("POST", "https://jsonplaceholder.typicode.com/posts", fd);

// Inside the sendHTTPRequest we change a request a bit.
// So in fetch() we comment the header cause we don't wanna let the server know we sending the JSON data.
// In the body - we just write data rather than stringifying it...
return fetch(url, {
    method: method,
    body: data,
    // headers: {
    //   "Content-Type": "application/json",
    // },
})

// For formData - the fetch() will automatically see it's form data and send the right headers...
// So with this we type in the data in the page and we can see we sent a form data.
// We can see the content-type header is set automatically.

// Advantage of form data is we can send any files in it with very proper text and convenience.
// For eg: fd.append('somefile', the file pointer, 'file-name-text');
// We can easily send a mixture of text, content text, key-value pairs and files to the server.

// The other advantage is = IMP = we can automatically parse a FORM in here.
// Let's say we don't manually add title & body, but instead we wanna utilize the form fields which we have in HTML.
// We wanna replicate the default behavior the browser would have if we wouldn't call prevent default upon a submission...

// When we call that, we make sure the browser doens't collect the FormData and send it to the server.
// But we manually wanna collect it just as the browser would.
// For that we just have to pass a pointer to FormData constructor.

const fd = new FormData(form);
// Mind you = FORM is just the form element we selected on top - const form = document.querySelector("#new-post form");
// JS will try automatically collect the data from the form...

// For it to succeed we need to make sure that our INPUTS should have a NAME attribute = title for the title div in form and body for content div in the form..
// We would change this in HTML form.
// NAME ATTRIBUTE IS IMPORTANT - otherwise FormData wouldn't be able to identify these inputs and get the data out of there and store it in it...
// We can still append extra data which might not be included in the form - like our userId.

// With this we give it a try...  
// This works.

// If we have a URL HTTP method combination which does support FormData - we can use this approach.


------------------------------------------------------------------------------------------------------------

/* 

How the Web Works: https://academind.com/tutorials/how-the-web-works

More on XMLHttpRequest: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest

More on fetch(): https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

Uploading Files: https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications

*/
