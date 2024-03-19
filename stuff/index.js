// javascript
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
const appSettings = {
    databaseURL: "https://realtime-database-dcc02-default-rtdb.firebaseio.com/"
}
const app = initializeApp(appSettings)
const database = getDatabase(app)
console.log(app)
const moviesInDB = ref(database, "grocerys")
const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const shoppingListEL = document.getElementById("shopping-list")
addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    push(moviesInDB, inputValue)
    clearInputFieldEL()
})
function clearInputFieldEL() {
    inputFieldEl.value = "" 
}
onValue(moviesInDB, function(snapshot) {
    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())
        clearShoppingListEL()  
        for(let i = 0; i < itemsArray.length; i ++) {
            let currentItem = itemsArray[i]
            let currentItemID = currentItem[0]
            let currentItemValue = currentItem[1]
            appendItemToShoppingListEL(currentItem)
        }
    } else {
        shoppingListEL.innerHTML = ""
    }
})
function appendItemToShoppingListEL(item) {
    /*shoppingListEL.innerHTML += `<li>${itemValue}</li>`*/
    let itemID = item[0]
    let itemValue = item[1]
    let newEl = document.createElement("li")
    newEl.textContent = itemValue
    shoppingListEL.append(newEl)
    newEl.addEventListener("click", function() {
        let exactLocationOfItemInDB = ref(database, `grocerys/${itemID}`)
        remove(exactLocationOfItemInDB)
    })
}
function clearShoppingListEL() {
    shoppingListEL.innerHTML = ""  
}
/*https://playground-f0404-default-rtdb.firebaseio.com/*/
/*https://realtime-database-dcc02-default-rtdb.firebaseio.com/*/
