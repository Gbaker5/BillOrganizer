const item = document.querySelectorAll('.billCheck') //declares a variable for all the selected spans
const itemCompleted = document.querySelectorAll('.billCheck.completed') //declares a variable for all selected completed spans

Array.from(item).forEach((element)=>{ 
    element.addEventListener('click', markComplete) //adds an event listener to each mark complete button
})

Array.from(itemCompleted).forEach((element)=>{
    element.addEventListener('click', markUnComplete) //adds an event listener to each unmark complete button
})


async function markComplete(){
    console.log("markComplete")
    const itemText = this.parentNode.childNodes[1].innerText //declares a variable that holds 
    try{
        const response = await fetch('markComplete', { //create async function to mark an item comlpleted
            method: 'put', //update method which coincides with server side
            headers: {'Content-Type': 'application/json'}, //formats data to allow us to use json
            body: JSON.stringify({ //turns json response into string 
                'itemFromJS': itemText //(itemjs will now equal itemtext) grabbing the text and sending to backend to update
            })
          })
        const data = await response.json()
        console.log(data)  //console logs the json response
        location.reload() //refreshes page

    }catch(err){
        console.log(err) //catch any error
    }
}

async function markUnComplete(){
    const itemText = this.parentNode.childNodes[1].innerText //declares a variable that holds the location where info/data will be placed client-side
    try{
        const response = await fetch('markUnComplete', { //create async function to mark an item completed
            method: 'put', //update method which coincides with server side
            headers: {'Content-Type': 'application/json'}, //formats data to allow us to use json
            body: JSON.stringify({ //turns json response into string 
                'itemFromJS': itemText //(itemjs will now equal itemtext) grabbing the text and sending to backend to update
            })
          })
        const data = await response.json() //store json data in data variable 
        console.log(data) //console log json data
        location.reload() //refresh page

    }catch(err){
        console.log(err) //catch any errors
    }
}