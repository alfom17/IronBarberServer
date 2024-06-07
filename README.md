# Project Name

## [See the App!](https://ironbarber.netlify.app)

![App Logo](your-image-logo-path-or-name)

## Description

**NOTE -** Describe your project in one/two lines.

#### [Client Repo here](https://github.com/alfom17/IronBarber)

#### [Server Repo here](https://github.com/alfom17/IronBarberServer)

## Backlog Functionalities

**NOTE -**
A reactive calendar and a better CSS

## Technologies used

**NOTE -**
Backend: javascript, node, express, MongoDB, mongoose, JWT auth.

# Server Structure

## Models

User model

```javascript 

{
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: [true, 'Password is required.']
    },
    username:{
      type:String,
      required: [true, 'Username is required.']
    },
    role:{
      type: String,
      enum: ["user", "admin"],
      default: "user"
    },
    img:{
      type: String,
      
    }
  }
```

Date model

```javascript
{
    dayAvailable: {
    type: Number,
  },
  hourAvailable: {
    type: Number,
  },
  status:{
    type: String,
    enum: ["pendiente", "aceptado", "denegado"],
    default: "pendiente"
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  serviceId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Service"
  }
}
```

Service model

```javascript
 {
   type:{
    type: String,
    
  } ,
  servicedUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }
 }
```

## API Endpoints (backend routes)

| HTTP Method | URL                | Request Body            | Success status | Error Status | Description                                    |
| ----------- | ------------------ | ----------------------- | -------------- | ------------ | ---------------------------------------------- |
| POST        | `/auth/signup`     | {name, email, password} | 201            | 400          | Registers the user in the Database             |
| POST        | `/auth/login`      | {username, password}    | 200            | 400          | Validates credentials, creates and sends Token |
| GET         | `/auth/verify`     |                         | 200            | 401          | Verifies the user Token                        |
| GET         | `/date`            |                         | 200            | 400          | Show dates in the DB                           |
| POST        | `/date`            |                         | 201            | 400          | Creates a new Date Document                    |
| GET         | `/date/:id`        |                         | 200            | 400, 401     | Get a date through id                          |
| PATCH       | `/date/:id`        |                         | 200            | 400, 401     | Edits date document                            |
| DELETE      | `/date/:id`        |                         | 200            | 401          | Deletes date document                          |
| GET         | `/by-user/:id`     |                         | 200            | 401          | Sends user profile details                     |
| PATCH       | `/:id/:status`     |                         | 200            | 400, 401     | Edits the user profile                         |
| GET         | `/user`            |                         | 200            | 401          | Gets User                                      |
| POST        | `/service`         |                         | 200            | 401          | Creates a new Service                          |
| GET         | `/service`         |                         | 200            | 401          | Gets Service                                   |
| GET         | `/service/:id`     |                         | 200            | 401          | Gets Service by Id                             |
| PUT         | `/service/:id`     |                         | 200            | 401          | Edits Service by Id                            |
| DELETE      | `/service/:id`     |                         | 200            | 401          | Gets Service                                   |


## Links

### Collaborators

[Alfonso](https://github.com/alfom17)


### Project

[Repository Link Client](https://github.com/alfom17/IronBarber)

[Repository Link Server](https://github.com/alfom17/IronBarberServer)

[Deploy Link](https://ironbarber.netlify.app)


### Slides

[Slides Link](www.your-slides-url-here.com)
