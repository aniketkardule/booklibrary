# booklibrary


Method | Url | Discription | 
---- | --------------- | ------------
Get | localhost:8000/api/ | Get all books
Post | localhost:8000/api/book | Add new book, request body should be like {"title":"harry potter","author":"author name","summery":"book summery"}
Get | localhost:8000/api/book?id={id} | Get one book, Replace "id" with book id to get a specific book
Patch | localhost:8000/api/book | update book, request body should have _id of book to find book for updation i.e. {"_id":"1252784fjv584h2","title":"harry potter","author":"author name","summery":"book summery"}
