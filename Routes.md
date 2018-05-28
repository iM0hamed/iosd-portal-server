# Propose API Routes

Prefix - /api/v1/

( open , admin )
 if open , accessible by anyone
 if admin , accessible by admin only
 else , accessible by authenticated user

- Auth
    - POST /auth/login (open)
    - POST /auth/signup (admin)

- Blog 
    - GET /blog//posts/
    - GET /blog/post/:guid
    - GET /blog/refresh (admin)

- Library
    - GET /library/books/ 
    - GET /library/book/:id

    - POST /library/book/new (admin)
    - POST /library/book/:id (admin) (here used for editing attributes)
    
    - DELETE /library/book/:id (admin)
    
- Events
    - GET /events/
    - GET /events/recent/  (5 upcoming 5)
    
    - POST /events/new/ (admin)
    - POST /events/:id  (admin)
    
    - DELETE /events/:id (admin)

    
- Courses and Videos ( To be Decided Yet)