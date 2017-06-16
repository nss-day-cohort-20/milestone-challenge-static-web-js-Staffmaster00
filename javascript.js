const typeOfChar = document.getElementById("Char");
const heightOfChar = document.getElementById("heightChar")
const buttonStart = document.getElementById("startButton");
let treeArray = [];
function treeObject() {
    let tree = Object.create(null);
    tree.character = document.getElementById("Char").value;
    tree.height = document.getElementById("heightChar").value;
    return tree;
};
function treeSpaces(height, character) {

    for (let i = height; i > 0; i--) {
        treeArray.unshift(" ");
    }
};
function buildTree(treeObj) {
    for (let i = treeObj.height; i > 0; i--) {
        console.log(treeArray.join(""));
        treeArray.push(`${treeObj.character}${treeObj.character}`);
        treeArray.shift();
    }
};
function buttonListen() {
    clearTree();
    let treeObj = treeObject();
    treeSpaces(treeObj.height, treeObj.character);
    buildTree(treeObj);
};
function clearTree() {
    treeArray = [];
};
typeOfChar.addEventListener("keypress", function(event) {
    let key1 = event.which;
    if (key1 == 13) {
        buttonListen();
    }
});
heightOfChar.addEventListener("keypress", function(event) {
    let key2 = event.which;
    if (key2 == 13) {
        buttonListen();
    }
});
buttonStart.addEventListener("click", buttonListen);










