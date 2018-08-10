class Robot {
	//your solution here
	constructor(){
		this.coordinates = [0, 0]
		this.bearing = "north"
	}

	setCoordinates(coord1, coord2){
		this.coordinates = [...Array.prototype.slice.call(arguments)]
	}

	setBearing(bearing){
		const bearings = ["north", "south", "east", "west"]
		if (bearings.includes(bearing)){
			this.bearing = bearing
		} else {
			throw new Error("Invalid Robot Bearing")
		}
	}

	place(obj){
		this.setBearing(obj.direction)
		this.setCoordinates(obj.x, obj.y)
	}

	turnRight(){
		const newDirs = {north: "east", east: "south", south: "west", west: "north"}
		this.setBearing(newDirs[this.bearing])

	}

	turnLeft(){
		const newDirs = {north: "west", west: "south", south: "east", east: "north"}
		this.setBearing(newDirs[this.bearing])
	}

	advance(){
		switch (this.bearing){
			case "north": 
				this.coordinates[1] += 1
				break;
			case "south":
				this.coordinates[1] -= 1
				break;
			case "east":
				this.coordinates[0] += 1
				break;
			case "west":
				this.coordinates[0] -= 1
				break;
		}
	}

	translateInstructions(instructions){
		const translation = {
			L: this.turnLeft.bind(this),
			R: this.turnRight.bind(this),
			A: this.advance.bind(this)
		}
		// debugger;

		for (var i = 0; i < instructions.length; i++){
			translation[instructions[i]]()
		}

	}


	// their solution: 
	 //  translateInstructions(instructions) {
  //   instructions.split("").forEach(instruction => {
  //     switch (instruction) {
  //       case "L":
  //         this.turnLeft();
  //         break;
  //       case "R":
  //         this.turnRight();
  //         break;
  //       case "A":
  //         this.advance();
  //         break;
  //       default:
  //         break;
  //     }
  //   });
  // }
}
