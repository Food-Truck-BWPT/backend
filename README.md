# Food Truck BWPT Backend

## Routes

| Method | Endpoint           | Description                                                                                                                                                                                           |
| ------ | ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET    | /api/users         | Responds with an array of users                                                                                                                                                                       |
| GET    | /api/users/:id\*   | **\***                                                                                                                                                                                                |
| PUT    | /api/users/:id\*   | **\***                                                                                                                                                                                                |
| DELETE | /api/users/:id\*   | **\***                                                                                                                                                                                                |
| GET    | /api/trucks        | Will return an array of all trucks                                                                                                                                                                    |
| POST   | /api/trucks        | **Requires authentication.** A successful request will return a message that the truck has been created. The only required field is `name`.                                                           |
| PUT    | /api/trucks/:id\*  | **Requires authentication.** Pass the `id` of the trucks as a parameter and pass an object with the updated `key: value` pairs                                                                        |
| DELETE | /api/trucks/:id\*  | **Requires authentication.** Will delete a truck based on the id pased                                                                                                                                |
| POST   | /api/auth/register | Creates a `user` using the information sent inside the `body` of the request. **Hashes the password before saving the user to the database**                                                          |
| GET    | /api/auth/login    | If the user is logged in, respond with an array of all the users contained in the database. If the user is not logged in respond with the correct status code and the message: 'You shall not pass!'. |

_The routes that are protected can be further restricted to certain users by checking for the `isVendor` property on the user object before executing your api request_

_NOTE: Authenticated routes will be left open until development is finalized_

## Data Structure

### '/api/users'

    [{
        "id": 1,
        "username": "testDiner01",
        "email": "testDiner01@test.com",
        "password": "$2a$12$/w3mfO47K2B8MU/vIBYA/.FXoD86aBHVYM/rC30O05aaFLlQhldnO",
        "isVendor": false
    },
    {
        "id": 2,
        "username": "testDiner02",
        "email": "testDiner02@test.com",
        "password": "$2a$12$riIqiKRPV0vNRPeipu/8YOci1roKsIe8rctuIXhfawdftOf53jzGy",
        "isVendor": true
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
        "message": "success"
    }
