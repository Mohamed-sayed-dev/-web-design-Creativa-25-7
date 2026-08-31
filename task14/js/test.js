let userlist =[
    {
        name : "ahmed",
        id : 5,
        balance : 1000,

    },
    {
        name : "ahmed",
        id : 6,
        balance : 2000,

    },
    {
        name : "ahmed",
        id : 7,
        balance : 3000,

    },
    {
        name : "ahmed",
        id : 8,
        balance : 4000,

    },
    {
        name : "ahmed",
        id : 9,
        balance : 5000,

    }
];
function adduser(){
let name = prompt("enter your name");
let id = prompt ("enter your id ");
let balance = prompt("enter your balance");

userlist .push({
    name:name,
    id:id,
    balance:balance,
});
}
adduser();
console.table(userlist)

function edituser(){
    let name = prompt("enter your name");
    let user = userlist.find(user => user.name === name);
    if (user){
        let newName = prompt("enter new name");
        let newId = prompt("enter new id");
        let newbalance =prompt("enter a new balance");
        
        user.name = newName;
        user.id = newId;
        console.log("user updated");
        
    }
    else {
        console.log("user not found")
    }
}
edituser();