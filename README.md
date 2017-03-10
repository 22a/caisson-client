# Caisson Client

A simple node client that posts things to the caisson endpoint. Because postman doesn't allow newlines in form data

## Setup
* clone the thing
* `yarn install`

## Usage

Edit the post contents in index.js
```bash
nvim index.js
```

Send the request: (put the ec2 instance that caisson's running on in an env var)
```bash
CAISSON_EC2_IP="X.X.X.X" node index.js
```
