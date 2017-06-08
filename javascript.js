// Create a tree function that should build a pine tree out of a
// character in the Chrome dev tools console.
//  A key that specifies the height of the pine tree.
// The value for the height of the tree should be from user input in 
// a <input type="text"> field in the DOM.
// A key that specifies which character to use to build the pine tree.
// The character to use should be from user input in a
// <input type="text"> field in the DOM.
const buttonStart = document.getElementById("startButton");
let treeArray = [];
let treeBuild = tree.character;

function treeObject(){
	let tree = Object.create(null); 
	tree.character = document.getElementById("Char").value;
	tree.height = document.getElementById("heightChar").value;
	
	// console.log("Did this work, function", tree);
	return tree;
};

function treeSpaces(height){
	for(let i = height; i > 0; i--){
		treeArray.push(" ");

		// console.log("treeSpaces", treeArray);
		}
};

function buildTree(){
	for (let i =  height; i > 0; i--){
				console.log(treeArray.join("")); //make array string
				treeArray.push(`${treeBuild}${treeBuild}`);
				treeArray.shift();

		}
		//	console.log("buildTree", treeArray);
};

buttonStart.addEventListener("click", function(){
		treeArray.push(character);

		treeSpaces(tree.height);
		buildTree();
	
		}
);
	

		
		
		
				
				
				


//html text field that only accepts on character
//Object passed into function 
//Enter key event listener
// single responsiblity

// let character = document.getElementById("numChar").value;
// let height = document.getElementById("heightChar").value;

	// need breaks and a way to center characters in console.
	// sampleArray.push(`character`);
// sampleArray.unshift();

//Thoughts
//**********************
// need to get height character to take element from type character
 // and create breaks or other inbetween each set of branches
 // need another function? put in buttonSubmit? Probably do a modulos
 // takes a remainder like the alphastacker and inserts breaks into the
 // Dom inbetween. Or the join function somehow. I don't think an array
 // is ideal for using join. I don't know if it works on objects.
 // loop through heightChar.length of height with progressively larger
// break points. Might work with a for loop inside a for loop.
 // Making j counter dependant on i will maybe work if i is ticking down
 // from tree.heightChar.length
 // 6/ 8/ 17
//Seems like I can make this much easier going off what we learned yesterday
// a good night's sleep helps. A do while loop allows me to put one 
//character in to start and then I concat it with character again while
// printing to console.
// or maybe a for loop is fine. It seems do while isn't workable without 
//shenanigans. After talking with Joe I now have clarity what to do, Yay!
// it's not reading the button somehow. Fixed button. I think running a loop
// based on height to dynamicly assign a value to spaces would help.
// or I could replace spaces via index with a replace method. Or maybe
// use an array to replace it's own spaces with the character. Array worked!
// 6 / 9/ 17

//Previous code ideas
//**********************
// buttonSubmit.addEventListener("click", function(){
// let treeArray = [character, height];
// 	let character = document.getElementById("typeChar").value;
// 	let height = document.getElementById("heightChar").value;
// 	let treeArray = [character, height];
// 	return treeArray; //Has to be array or object
// });
	// const buttonSubmit = document.getElementById("submitChar");
	// console.log(`${character}`);