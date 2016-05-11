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

Runnin the upload command creates the necessary resources locally that are the send to the server. You may use this command is used to update nodes as well. Make sure there is a valid node ID in the config.json file along with valid inputs for updatable keys (code will be updated so long as changes are saved). An example config.json:

	{
  		"id": "56ac2407dbc0091100e9a524",
 		 "expressions": ["An expression", "another expression"],
 		 "description": "This is a description",
 		 "keys": [{"name":"entity_name"},{"name":"another_entitiy_name"}]
	}

##### Warning: DO NOT change ID during upload. It will fail to correctly update your ndoe.


