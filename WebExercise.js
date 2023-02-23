// What is HTTP?
// Hypertext Transfer Protocol. Used to load webpages using hypertextlinks.It is an application layer protocol desgined to transfer information between networked devices.

// What is URL? 
//Uniform Resource Locator. It is an address of a given unique resource on the web. Resources can be an HTML page, CSS doc, images.

// What is DNS? 
// Domain name system. DNS translate domain names into IP(Internet Protocol) addresses so browsers can load internet resources. Each devicer connected to the internet has a unique IP address. Other machines use IP address to find the device. 

// What is a query string? 
// Part of URL. Assigns values to specified parameters. Ex. may be part of HTML doc. 

// What are two HTTP verbs and how are they different? 
// POST - Most often used to create new resources. 
// GET - Used to retrieve a representation of a resource. GET returns in XML or JSON along with an HTTP response code.(no error)

// What is an HTTP request? 
// made by a client, to a named host, which is located on a server. The goal is to obtain access to a resource on the server. 

// What is an HTTP response? 
// Made by a server to a client. The response provides the client with the resource requested or inform the client that the action has been carried out(or an error occurred)

// What is an HTTP header? Give a couple examples of request and response headers you have seen.
// Field of an HTTP request or response that passes additional context and metadata about the request or response. Accept header indicates allowed/preferred formats. Last-modified header is an example of a response header. 


// What are the processes that happen when you type "http://somesite.com/some/page/html" into a browser? 
// HTTP is the protocol for the browser to use. "somesite.com" is the domain. This is the address and points to a specific server's IP address. "/some/page.html" is the path on the server to the requested resource. ".html" indicates a static file on the server with HTML content. 
// Enter URL, press enter, browser looks up IP address for domain, browser initiates TCP connection with server, browser sends HTTp request to server, server process request and sends back response, then browser renders the content. 