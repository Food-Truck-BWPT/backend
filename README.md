# Food Truck BWPT Backend

#### ROOT DATABASE URL = https://food-truckr-app.herokuapp.com

## Routes

| Method | Endpoint           | Description                                                                                                                                                                                                 |
| ------ | ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET    | /api/users         | Responds with an array of users                                                                                                                                                                             |
| GET    | /api/users/:id\*   | **\***                                                                                                                                                                                                      |
| PUT    | /api/users/:id\*   | **\***                                                                                                                                                                                                      |
| DELETE | /api/users/:id\*   | **\***                                                                                                                                                                                                      |
| GET    | /api/trucks        | Will return an array of all trucks                                                                                                                                                                          |
| POST   | /api/trucks        | **Requires authentication.** A successful request will return a message that the truck has been created. The only required field is `name`.                                                                 |
| PUT    | /api/trucks/:id\*  | **Requires authentication.**                                                                                                                                                                                |
| DELETE | /api/trucks/:id\*  | **Requires authentication.**                                                                                                                                                                                |
| POST   | /api/auth/register | Creates a `user` using the information sent inside the `body` of the request. **Hashes the password before saving the user to the database** Returns a `message` and the `username` of the registered user. |
| POST   | /api/auth/login    | Successful login returns the values of the `username, userId, message, isVendor` for the user that was logged in                                                                                            |

_The routes that are protected can be further restricted to certain users by checking for the `isVendor` property on the user object before executing your api request_

_NOTE: Authenticated routes will be left open until development is finalized_

## Data Structure

### '/api/users'

    [{
        "id": 1,
        "username": "testDiner01",
        "email": "testDiner01@test.com",
        "password": "$2a$12$/w3mfO47K2B8MU/vIBYA/.FXoD86aBHVYM/rC30O05aaFLlQhldnO",
        "isVendor": BOOLEAN
    }]

### '/api/trucks'

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

## API Auth Responses

### '/api/auth/register'

    {
        "message": "success",
        "username": REGISTERED_USERNAME
    }

### '/api/auth/login'

    {
        "username": LOGGED_IN_USERNAME,
        "userId": LOGGED_IN_USERID,
        "isVendor": BOOLEAN,
        "message": "success"
    }
