# Lightning In A Bot CLI
A tool for developing nodes on the Lightning In A Bot platform

## Installing
```
$ sudo npm install liab -g
```
## Requirements
- Node v >= 4

## Documentation

There are 3 commands: create, init, and upload.

### Create

### Init

Running the init command creates the necessary resources on the server. When the command is run successfully from within a local node directory, it will return a node Id from the server and add it to the .env file. This Id is required in order to upload code updates.

### Upload

