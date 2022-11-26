client -> http protocol -> API -> node.js program -> mongodb (DBMS)
client <- http protocol <- API <- node.js program <- mongodb (DBMS)

- http is a stateless protocol

- authorziation & authentication
-- facebook.com/login (public)
-- login -> token: -> store in browser cookies / local storage
-- facebook.com/profile (protected), the token is sent along

- status codes
-- success: 200, 201, 202
-- failure by the user: 400, 404, 403
-- failure by server: 500 internal server error, 502 bad gateway

REST api
HTTP Verbs/method:
    GET: get data from the server
    POST: create data in the server
    PUT/PATCH: update data in the server
    DELETE: delete record/s in the server

route: GET/POST/PUT/DELETE
C -> takes request and calls relevant services
M -> deals with database