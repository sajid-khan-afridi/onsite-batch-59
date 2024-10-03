### API (Application Programming Interface)

An API (Application Programming Interface) serves as a bridge, allowing two or more computers, applications, or programs to communicate with each other. It facilitates data exchange between different systems, such as a database and a user interface, using standard formats like JSON (JavaScript Object Notation).

### Key Features:

- **Data Exchange Format**: JSON is widely used to send and receive data in APIs, and it's supported by all major programming languages.
- **API Communication**: The communication between applications through APIs happens via predefined routes or endpoints.

### API Methods:

- **GET**: Used to **read** data from the server.
- **POST**: Used to **create** new data on the server.
- **PATCH**: Used to **update** existing data on the server.
- **DELETE**: Used to **delete** data from the server.

### API Structure:

- **Base URL**: The main URL for the API.
- **Endpoint or Route**: Specific paths or routes for accessing different functionalities. Example: `/status` route for checking API status.

### Example:

- Facebook's API uses authentication to allow users to interact with the platform through different routes.

### Tools:

- **Postman**: A popular tool for testing APIs. It helps developers visualize API requests and responses, making the development and debugging process easier.

### API response

An API response typically includes various elements such as status codes, headers, and a body containing the actual data. Here are some common API response components with brief explanations:

1. **Status Codes**:

   - **200 OK**: The request was successful, and the server returned the requested data.
   - **201 Created**: The request was successful, and a new resource was created.
   - **400 Bad Request**: The server cannot process the request due to a client error (e.g., invalid input).
   - **401 Unauthorized**: Authentication is required or failed.
   - **403 Forbidden**: The client doesn't have permission to access the requested resource.
   - **404 Not Found**: The requested resource doesn't exist.
   - **500 Internal Server Error**: Something went wrong on the server side.

2. **Headers**: Provide metadata about the response (e.g., content type, authorization).

   - **Content-Type**: Specifies the format of the response (e.g., `application/json`).
   - **Authorization**: Sometimes included to verify the user's identity.

3. **Response Body**: The actual data returned by the API, often in JSON format.

   ```json
   {
     "id": 123,
     "name": "Sample Product",
     "price": 29.99,
     "available": true
   }
   ```

   - This body contains the main information that the API sends back.

4. **Error Messages**: When the request fails, the response may include a descriptive error message.
   ```json
   {
     "error": "Invalid input",
     "details": "Email is required"
   }
   ```

### ** How API is called in Nextjs**

#### **1. POST Request**

- **Purpose**: This request is used to create a new resource on the server (e.g., creating a new booking).
- **Code**:

```javascript
fetch("url", {
  method: "POST", // HTTP method to create a resource
  headers: {
    "Content-Type": "application/json", // Defines the format of the request body
    authorization: "Bearer " + token, // Secure access token for authorization
  },
  body: JSON.stringify({
    bookId: 1, // ID of the book being booked
    customerName: "Ali", // Name of the customer making the booking
  }),
});
```

#### **2. PATCH Request**

- **Purpose**: This request partially updates an existing resource (e.g., updating customer information).
- **Code**:

```javascript
fetch("url", {
  method: "PATCH", // HTTP method to update part of a resource
  headers: {
    "Content-Type": "application/json", // Format of the request body
    authorization: "Bearer " + token, // Secure access token for authorization
  },
  body: JSON.stringify({
    customerName: "KASHIF", // Updated name of the customer
  }),
});
```

#### **3. DELETE Request**

- **Purpose**: This request deletes an existing resource on the server (e.g., removing a booking).
- **Code**:

```javascript
fetch("url", {
  method: "DELETE", // HTTP method to remove a resource
  headers: {
    "Content-Type": "application/json", // Format expected for the request
    authorization: "Bearer " + token, // Secure access token for authorization
  },
});
```

### **Key Notes**:

- **Headers**: These specify the request format and include an authorization token for secure communication.
- **Body**: This contains the data to be sent with the POST and PATCH requests. It’s formatted as a JSON string using `JSON.stringify()`.
- **Authorization**: The `Bearer` token ensures that only authorized users can access or modify the resource.
