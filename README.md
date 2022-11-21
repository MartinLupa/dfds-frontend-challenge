# DFDS Frontend Challenge

For thi code challenge, you will be building a "Voyage progress" React component, which simply put shows roughly how far the ferry is along it´s path. Here is an example of how the component should look:

![alt component overview](/src//assets//component_screenshot.PNG "DFDS Frontend Challenge voyage progress component overview")

## Description

The challenge should be completed using React, Typescript and styled in emotion.sh.  
The position of the "pin" along the voyage axis should be based on the difference between the departure time, current time and arrival time, for example, if the ferry departs at 8:00 and arrives at 13:00, and it is 10:00 right now, the pin should be placed 40%.  
The pin should appear at the port of loading if it is not departure time yet, or at the port of discharge, if it is already past arrival time. Dots should only appear in dark blue, if the pin has moved past the center of that dot in the axis to the right.

---

## Scripts

To instal dependencies:
`npm install`

To kickstart the local project:
`npm start`

---

## Features

- Typescript
- Styles with Emotion.sh styled componen.ts.
- State managemenet using Redux Toolkit.
- A styling theme was created at root level. It allows for centralized styling updates.
- Mobile first.

---

## Usage example

Local time: 16:00

- Input port of loading and port of discharge.
- Input 16:01 as departure time and 16:02 as arrival time.

The pointer should start moving when the clock hits 16:01 and should arrive at the port of discharge at 16:02. All dots should become active at the moment the pointer passes above them, making a change in their color.

The arrival time allows for +1 day difference. Example: if the departure time is 23:00 and arrival time is set as 05:00, the app will calculate a 6 hours journey.

---

## Where to get help and report bugs and issues

[Issues](https://github.com/MartinLupa/dfds-frontend-challenge/issues)

## Who maintains and contributes to this app

[Martin Lupa](https://github.com/MartinLupa/)
