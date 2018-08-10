function Robot() {
	//your solution here
	this.coordinates = [0, 0]
	this.bearing = "north"

}

Robot.prototype.setCoordinates = function(coord1, coord2){
	this.coordinates = [...Array.prototype.slice.call(arguments)]
}

Robot.prototype.setBearing = function(bearing){
	const bearings = ["north", "south", "east", "west"]
	if (bearings.includes(bearing)){
		this.bearing = bearing
	} else {
		throw new Error("Invalid Robot Bearing")
	}
}
 Robot.prototype.place = function(obj){
	this.setBearing(obj.direction)
	this.setCoordinates(obj.x, obj.y)
}
 Robot.prototype.turnRight = function(){
	const newDirs = {north: "east", east: "south", south: "west", west: "north"}
	this.setBearing(newDirs[this.bearing])

}

 Robot.prototype.turnLeft = function(){
		const newDirs = {north: "west", west: "south", south: "east", east: "north"}
		console.log("WHAT IS THIS!?!?!?!?", this)
		this.setBearing(newDirs[this.bearing])
	}

 Robot.prototype.advance = function(){
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

 Robot.prototype.translateInstructions = (instructions) =>{
		const translation = {
			L: this.turnLeft,
			A: this.advance,
			R: this.turnRight
		}

		for (var i = 0; i < instructions.length; i++){
			debugger;
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

