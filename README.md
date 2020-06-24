# Food Truck BWPT Backend

#### ROOT DATABASE URL = https://food-truckr-app.herokuapp.com

## <- AUTH ->

| Method | Endpoint           | Description                                                                                                                                                               |
| ------ | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST   | /api/auth/register | Creates a `user` using the information sent inside the `body` of the request. **Hashes the password before saving the user to the database** Returns the registered user. |
| POST   | /api/auth/login    | Pass in one object containing a `username` and `password`. Successful login returns `userId, username, isVendor, token`                                                   |

### DATA STRUCTURE

### '/api/auth/register'

    {
        "username": USERNAME,
        "email": EMAIL,
        "password": PASSWORD,
        "isVendor": BOOLEAN,
    }

### '/api/auth/login'

    {
        "username": USERNAME,
        "password": PASSWORD
    }

#### A SUCCESSFUL LOGIN SHOULD RETURN THIS JSON OBJECT

    {
        "userId": USERID,
        "username": USERNAME,
        "isVendor": BOOLEAN,
        "token": TOKEN

        * the token should be set in the headers of each request using an object. ex: { authorization: token } *
    }

## <- USERS ->

| Method | Endpoint           | Description                                                                                                                                                    |
| ------ | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET    | /api/users         | Returns an array of users                                                                                                                                      |
| GET    | /api/users/:id     | Pass in the `id` of a user. If found, the api will respond with a user object. Otherwise you'll get an error message which you can use to display.             |
| PUT    | /api/users/:id     | **Requires authentication.** Pass in the `id` of a user to the request url. Send an object - in the `req.body` - with the desired changes to that user object. |
| DELETE | /api/users/:id\*\* | **Requires authentication.** Pass in the `id` of the user to the request url. The response object will contain a json with a message object                    |

#### DATA STRUCTURE

    [{
        "id": 1,
        "username": "testDiner01",
        "email": "testDiner01@test.com",
        "password": "$2a$12$/w3mfO47K2B8MU/vIBYA/.FXoD86aBHVYM/rC30O05aaFLlQhldnO",
        "isVendor": BOOLEAN
    }]

## <- TRUCKS ->

| Method | Endpoint            | Description                                                                                                                                                      |
| ------ | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET    | /api/trucks         | Returns an array of all trucks                                                                                                                                   |  |
| POST   | /api/trucks         | **Requires authentication.** A successful request will return a message that the truck has been created. The only required field is `name`.                      |
| GET    | /api/trucks/:id     | Pass in the `id` of a truck. If found, the api will respond with a truck object. Otherwise you'll get an error message which you can use to display.             |
| PUT    | /api/trucks/:id     | **Requires authentication.** Pass in the `id` of a truck to the request url. Send an object - in the `req.body` - with the desired changes to that truck object. |
| DELETE | /api/trucks/:id\*\* | **Requires authentication.** Pass in the `id` of the truck to the request url. The response object will contain a json with a message object                     |

#### DATA STRUCTURE

    [{
        "id": 1,
        "name": "Mack's BBQ Truck",
        "imageOfTruck": "image url/route",
        "cuisineType": "Barbeque",
        "customerRatings": "1234",
        "customerRatingAvg": null,
        "address": "123 Main. Street San Francisco, CA 94901",
        "lat": "0",
        "long": "1",
        "departureTime": "4:30 PM",
        "nex_address": "456 Last Street San Francisco, CA 94901",
        "next_lat": "2",
        "next_long": "3",
        "next_arrivalTime": "11:00 AM",
        "next_departureTime": "6:00 PM"
    }]
