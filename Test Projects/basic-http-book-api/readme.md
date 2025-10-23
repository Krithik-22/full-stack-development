# Book Explorer API
A mini Node.js API using the native HTTP module to serve and filter book data.

### Concepts Practiced
- Creating and managing HTTP servers
- Setting headers and status codes
- Handling path and query parameters
- Returning JSON data and filtered results

### Endpoints
| Method | Endpoint | Description |
|---------|-----------|-------------|
| GET | /api/books | Get all books |
| GET | /api/books/:id | Get details by book ID |
| GET | /api/books?genre=Fiction | Filter by genre |
| GET | /api/books?author=James Clear | Filter by author |
| GET | /api/books?rating_gt=4.5 | Filter by rating above 4.5 |

### Run
```bash
node server.js
