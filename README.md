# booklibrary


Method | Url | Discription | 
---- | --------------- | ------------
GET | localhost:8000/api/ | Get all books
POST | localhost:8000/api/book | Add new book, request body should be like {"title":"harry potter","author":"author name","summery":"book summery"}
GET | localhost:8000/api/book?id={id} | Get one book, Replace "id" with book id to get a specific book
PATCH | localhost:8000/api/book | Update book, request body should have _id of book to find book for updation along with updated keys i.e. {"_id":"1252784fjv584h2","title":"harry potter","author":"new author name","summery":"new book summery"}
DELETE | localhost:8000/api/book?id={id} | Delete book, Replace "id" with book id to delete a specific book



Setup Project on local:  
  step 1: Download zip from github repo.  
  step 2: Extract zip in folder.      
    step 3: Node.js should be installed on local machine.    
      step 4: (!important) add new .env file in project and add two variables in .env file PORT=8000 and URI=yourDatabaseUri (It would be easier if i share my uri but this is not good practice).     
         step 5: (!important) your mongodb database should have books collection.    
            step 6: run npm install in project folder in terminal to install all dependencies listed in package.json.     
               step 7: give command node index.js in terminal and your server will start.    
                   step 8: test all endpoints listed in above table in postman
