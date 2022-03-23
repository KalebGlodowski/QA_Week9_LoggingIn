

let list=[];
let counter = 0;

const pages = [
    {
        page:"Home",
        navigate: homePage
    },
    {
        page:"About",
        navigate: about
    },
    {
        page:"View",
        navigate: view
    }
]


function navButton(pg, pr, nv) {    //navButton is taking in 2 arguments
    let button = document.createElement("button");
    button.innerHTML=pg;
    button.addEventListener("click", function(){
        document.body.querySelector(".wrapper").innerHTML="";
        nv();
    })
    pr.appendChild(button);
}

function navigation(){
    let nav = document.createElement("nav");
    let wrapper=document.createElement("div");
    wrapper.classList.add("wrapper");
    nav.style.height="80px";
    nav.style.backgroundColor="blue";
    for (obj of pages) {                            //for every item within the array
        navButton(obj.page, nav, obj.navigate);
    }
    document.body.appendChild(nav);
    document.body.appendChild(wrapper);
}

function homePage(){
    let home = document.createElement("h1");
    home.innerHTML="Home Page";
    document.body.querySelector(".wrapper").appendChild(home); //when calling classes, must lead with a .name
}

function about(){
    let about = document.createElement("div");
    let aboutHead = document.createElement("h1");
    let aboutBody = document.createElement("h3");
    aboutHead.innerHTML="About Page";
    aboutBody.innerHTML="Kaleb Glodowski"
    about.appendChild(aboutHead);
    about.appendChild(aboutBody);
    document.body.querySelector(".wrapper").appendChild(about);
}

function view(){
    let view = document.createElement("div");
    let viewHead = document.createElement("h1");
    let viewNoteEle = document.createElement("input");
    let viewImportanceEle = document.createElement("input");
    let viewMessage = document.createElement("h3");
    let viewButton = document.createElement("button");
    view.appendChild(viewHead);
    view.appendChild(viewNoteEle);
    view.appendChild(viewImportanceEle);
    view.appendChild(viewMessage);
    view.appendChild(viewButton);
    viewNoteEle.placeholder="Note...";
    viewImportanceEle.placeholder="Importance...";
    viewHead.innerHTML="View Page";
    viewButton.innerHTML="Save Note."

    viewButton.addEventListener("click",function() {

        let stringNote = viewNoteEle.toString();
        let stringLength = stringNote.length;

        viewMessage.innerHTML = ""

        console.log("Note length:"+stringLength);
        console.log("Importance value:"+viewImportanceEle.value);


        if (stringLength.length < 2) {
            viewMessage.innerHTML = "The Note length is too short."
        }
        else {
            if (isNaN(viewImportanceEle.value)) {
                viewMessage.innerHTML = "The Importance must be a number value."
            }
            // else if (stringImportance.length < 1) {
            //
            //     viewMessage.innerHTML = "Please enter an Importance numerical value."
            // }
            else {
                viewMessage.innerHTML = "Note has been saved successfully.";

                list.push(viewNoteEle.value+viewImportanceEle.value);
                renderList();

            }
        }
    })
    document.body.appendChild(view);
}

//user
let inputEle = document.createElement("input");
inputEle.placeholder="Name...";

//password
let inputElePass = document.createElement("input");
inputElePass.placeholder="Password...";
inputElePass.setAttribute("type","password"); //doesn't allow people to see password or copy password

//message element
let messageEle = document.createElement("h3");

//button element
let button = document.createElement("button");
button.innerHTML="Login";

//checks for correct values
button.addEventListener("click",function(){
    if(inputEle.value==="coolStudent123"&&inputElePass.value==="pass"){

        messageEle.innerHTML="Logged in successfully.";

        inputEle.style.display='none';
        button.style.display='none';
        inputElePass.style.display='none';

        setTimeout(function(){
            messageEle.style.display='none';
            navigation();
            homePage();
        }, 2000);
    }
    else {
        if (inputEle.value!=="coolStudent123") {
            messageEle.innerHTML="Incorrect username.";
        }
        else {
            messageEle.innerHTML="Incorrect password.";
        }
    }

})

//list element
let listEle = document.createElement("div");

//render list
function renderList(){

    listEle.innerHTML="";

    for(let i=0; i<list.length;i++){
        let ele = document.createElement("div");
        ele.innerHTML=list[i];
        listEle.appendChild(ele);
    }
}

document.body.appendChild(inputEle);
document.body.appendChild(inputElePass);
document.body.appendChild(messageEle);
document.body.appendChild(button);
document.body.appendChild(listEle);
