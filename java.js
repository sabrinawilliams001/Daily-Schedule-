
let events = document.querySelectorAll("textarea");
let forms = document.querySelectorAll("form");

let storage =JSON.parse(localStorage.getItem("timeblocks"));
const createData=(arr)=>{
    arr.forEach (a=>{
    let t=document.querySelector("#"+ a.id)
    t.value=a.eventText
    })
}
let today=new Date()
document.querySelector("#currentDay").innerHTML=today
$("#currentDay").html(moment().format('dddd'));
if(storage === null) storage = localStorage.setItem("timeblocks", JSON.stringify([]));

    else createData(storage)
    
events.forEach(ev=>{
ev.addEventListener("click", e=>{
    e.target.removeAttribute("disabled");
})
})

forms.forEach(fm=>{


fm.addEventListener("submit", e=>{
e.preventDefault();
const inputs = e.target.querySelectorAll(".input")
const [time, eventText] = inputs;
const obj = {
    id: eventText.getAttribute("id"),
    time: time.value,
    eventText: eventText.value
}
    saveData(obj)
})
})

const saveData =(o) => {
    storage.push(o);
    localStorage.setItem("timeblocks", JSON.stringify(storage));

}

