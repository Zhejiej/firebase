/**
 * @TODO get a reference to the Firebase Database object
 */

const database = firebase.database().ref();
/**
 * @TODO get const references to the following elements:
 *      - div with id #all-messages
 *      - input with id #username
 *      - input with id #message
 *      - button with id #send-btn and the updateDB
 *        function as an onclick event handler
 */

const all_message = document.getElementById("all-messages");
const user_input = document.getElementById("username");
const message_input = document.getElementById("message");
const send_btn = document.getElementById("send-btn");


/**
 * @TODO create a function called updateDB which takes
 * one parameter, the event, that:
 *      - gets the values of the input elements and stores
 *        the data in a temporary object with the keys USERNAME
 *        and MESSAGE
 *      - console.logs the object above
 *      - writes this object to the database
 *      - resets the value of #message input element
 */

send_btn.onclick = updateDB;

function updateDB(){
const username = user_input.value;
const message = message_input.value;

message_input.value = "";
user_input.value = "";
console.log(username + " : " + message)

const value = {
    NAME: username,
    MESSAGE: message
}
database.push(value);
}

/**
 * @TODO add the addMessageToBoard function as an event
 * handler for the "child_added" event on the database
 * object
 */

database.on('child_added', addMessageToBoard)
/**
 * @TODO create a function called addMessageToBoard that
 * takes one parameter rowData which:
 *      - console.logs the data within rowData
 *      - creates a new HTML element for a single message
 *        containing the appropriate data
 *      - appends this HTML to the div with id
 *        #all-messages (we should have a reference already!)
 * 
 */

function  addMessageToBoard(rowData){
    console.log(rowData.val());
    const data= rowData.val();
    const name_value = data.NAME;
    const message_value = data.MESSAGE;

    const div_element = document.createElement("div");
    const name_paragraph = document.createElement("p");
    const message_paragraph = document.createElement("p");

    div_element.className = "single-message";
    name_paragraph.className = "single-message-username";

    name_paragraph.innerHTML = name_value;
    message_paragraph.innerHTML = message_value;

    div_element.appendChild(name_paragraph);
    div_element.appendChild(message_paragraph);

    all_message.appendChild(div_element);
}
/** 
 * @TODO create a function called makeSingleMessageHTML which takes
 * two parameters, usernameTxt and messageTxt, that:
 *      - creates a parent div with the class .single-message
 * 
 *      - creates a p tag with the class .single-message-username
 *      - update the innerHTML of this p to be the username 
 *        provided in the parameter object
 *      - appends this p tag to the parent div
 * 
 *      - creates a p tag
 *      - updates the innerHTML of this p to be the message
 *        text provided in the parameter object
 *      - appends this p tag to the parent div
 * 
 *      - returns the parent div
 */

/**
 * @BONUS add an onkeyup event handler to the form HTML
 * element so the user can also submit the form with the
 * Enter key
 * 
 * @BONUS use an arrow function
 */