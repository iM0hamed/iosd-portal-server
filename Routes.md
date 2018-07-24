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
    - GET /blog/posts/
    - GET /blog/post/:guid
    - POST /blog/refresh (admin)

- Library
    - GET /library/books/ 
    - GET /library/book/:id

    - POST /library/book/new (admin)
    - POST /library/book/:id (admin) (here used for editing attributes)
    
    - DELETE /library/book/:id (admin)
    
- AdminEventsSummary
    - GET /events/
    - GET /events/recent/  (5 upcoming 5)
    
    - POST /events/new/ (admin)
    - POST /events/:id  (admin)
    
    - DELETE /events/:id (admin)

- Mentors
    - GET /mentors/all
    - GET /mentor/:id

    - POST /mentor/new (admin)
    - POST /mentor/:id (admin)

    - DELETE /mentor/:id (admin)

- Projects
    - GET /projects/all
    - GET /project/:id

    - POST /project/new (admin)
    - POST /project/:id (admin)

    - DELETE /project/:id (admin)

-Profile
    - GET /profile/:id
    - POST /profile/update
    
- AdminCoursesSummary and Videos
    - GET /courses
    - GET /course/:id/
    - POST /course/:id/  (Will not change videos...) (admin)
    - POST /courses/new/ (Will Initialize Videos to Empty Array) (admin)
    
    - POST /courses/:id/videos/  (Will Update Videos Upon Some Validation) (admin)
    
    - GET /progress/course/:id (Send Progress of Current User and CourseID)
    - POST /progress/course/:id/video/:vid/ (Mark the vid video as watched)
    
    - GET /instructors/:id
    - POST /instructors/:id (admin)
    - POST /instructors/new (admin)
    