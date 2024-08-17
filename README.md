# Node.js API Project

This project is a Node.js API application that blocks access from browsers. Requests coming from browsers are blocked by checking specific `User-Agent` headers, and a 403 Forbidden error is returned to the user. Non-browser clients (e.g., `curl`, Postman) can access the API without issues.

## Getting Started

### Prerequisites

You need the following software installed on your machine to run this project:

- Node.js (>= 12.x)
- npm or yarn

### Installation

After cloning the repository, install the dependencies using the following commands:

```bash
git clone REPO_URL
cd FOLDER_NAME
npm install
node index.js
```

### Testing

To test the API go to ```http://localhost:3000/ANY_ENDPOINT``` on your browser. You must get this message: "You can NOT access this API from a browser." To test from cURL; run:
```bash
curl http://localhost:3000/api/data
```
You'll get this response: ```Permission Accepted from curl/YOUR_CURL_VERSION```
