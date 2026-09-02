// DOM ==> document object model

// let h1_Elements = document.getElementsByTagName("h1") // HTMLCollection - special object

// h1_Elements.testProperty = "test"

// console.log(h1_Elements)

// let classElements = document.getElementsByClassName('text-danger')

// console.log(classElements)
// console.log(classElements[1])
// classElements[1].innerText = "Web design Creativa 25/7"

// console.log(classElements[1].innerText)


// // classElements.forEach((item)=>{
// //     console.log(item)
// // })

// for(let i = 0 ; i < classElements.length ; i++){
//     // classElements[i].innerText = "bla bla bla"
//     classElements[i].innerHTML = "<mark>Lorem ipsum dolor sit amet.</mark>"
// }

// let h2Element = document.getElementById('h2_ID') // object

// console.log(h2Element)
// h2Element.style.color = "blue"
// h2Element.style.backgroundColor = "#eee"
// h2Element.style.border = "3px solid"
// h2Element.style.padding = "3%"


// let span = document.querySelector('.custom-card .text-success span')
// console.log(span)

// let card = document.querySelector('.custom-card') // object
// console.log(card)

// let spanElements = document.querySelectorAll('.custom-card .text-success span') // NodeList 

// console.log(spanElements)


// spanElements.forEach((item)=>{
//     item.innerText = "Web Design JS"
// })

// // let div = document.getElementById('custom-div')
// let div = document.querySelector('#custom-div')

// div.classList.add('alert' , 'alert-primary')
// div.classList.remove('border-danger')
// div.classList.toggle('mt-3')

let users = [];

let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {

  e.preventDefault();

  let username = document.getElementById("username");
  let email = document.getElementById("email");

  addUser(username.value,  email.value);

  username.value = "";
  email.value = "";

});






let inputName = document.querySelector('#userName')
let inputEmail = document.querySelector('#userEmail')
let loginForm2 = document.getElementById('loginForm2')
let divsContainer = document.querySelector('.divsContainer')

let usersArray = []
loginForm2.addEventListener('submit' , (e)=>{
    e.preventDefault()
    let userObj = {
        name: inputName.value,
        email: inputEmail.value
    }
    usersArray.push(userObj)
    console.log(usersArray)
    let newDiv = document.createElement("div")
    let h4Name = document.createElement('h4')
    let h4Email = document.createElement('h4')
    h4Name.innerText = "Name : " + inputName.value
    h4Email.innerText = "Email : " + inputEmail.value
    newDiv.appendChild(h4Name)
    newDiv.appendChild(h4Email)
    newDiv.classList.add('alert' , 'alert-primary')
    divsContainer.appendChild(newDiv)
    inputName.value = ""
    inputEmail.value = ""
})