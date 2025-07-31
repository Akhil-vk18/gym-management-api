accessing all details of gym members : https://gym-management-api-gkpw.onrender.com/api 
json output be  like  : 
[
    {
        "_id": "67dcf542702d93a4c137deaf",
        "name": "Alice Smith",
        "email": "alice@example.com",
        "phone": "1112223333",
        "membershipType": "Premium",
        "joinedDate": "2025-03-21T05:12:34.668Z",
        "__v": 0
    }
]

accesing a single member by id : https://gym-management-api-gkpw.onrender.com/api?id=id of person be searched
 eg : https://gym-management-api-gkpw.onrender.com/api?id=67dcf542702d93a4c137deaf
 output be like : 
 [
    {
        "_id": "67dcf542702d93a4c137deaf",
        "name": "Alice Smith",
        "email": "alice@example.com",
        "phone": "1112223333",
        "membershipType": "Premium",
        "joinedDate": "2025-03-21T05:12:34.668Z",
        "__v": 0
    }
]

