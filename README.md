# Airport Challenge in Javascript

This is a javascript version of the [Ruby challenge](https://github.com/samover/airport_challenge) set by [Makers Academy](www.makersacademy.com). 

This project follows the main principles of extreme programming taught at Makers Academy:

* Listening to the client ([User stories](#user-stories))
* Pair programming
* Test Driven Development: with a focus on unit tests, given that this app has only the business logic
* Simplicity of design: the design emerges from the testing
  * DRY
  * OOP
  * SRP

Files in project
----------------
```sh
├── README.md
├── SpecRunner.html
├── spec
│   ├── airportSpec.js
│   ├── featureSpec.js
│   ├── planeSpec.js
│   └── weatherSpec.js
└── src
    ├── airport.js
    ├── plane.js
    └── weather.js
```

User Stories
------------

We have a request from a client to write the software to control the flow of planes at an airport. The planes can land and take off provided that the weather is sunny. Occasionally it may be stormy, in which case no planes can land or take off.  Here are the user stories that we worked out in collaboration with the client:

```
As an air traffic controller
So planes can land safely at my airport
I would like to instruct a plane to land

As an air traffic controller
So planes can take off safely from my airport
I would like to instruct a plane to take off

As an air traffic controller
So that I can avoid collisions
I want to prevent airplanes landing when my airport if full

As an air traffic controller
So that I can avoid accidents
I want to prevent airplanes landing or taking off when the weather is stormy

As an air traffic controller
So that I can ensure safe take off procedures
I want planes only to take off from the airport they are at

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

As an air traffic controller
So the system is consistent and correctly reports plane status and location
I want to ensure a flying plane cannot take off and cannot be in an airport

As an air traffic controller
So the system is consistent and correctly reports plane status and location
I want to ensure a plane that is not flying cannot land and must be in an airport

As an air traffic controller
So the system is consistent and correctly reports plane status and location
I want to ensure a plane that has taken off from an airport is no longer in that airport
```
