import React from "react";
import Message from "./Message";

const messageData = {
    avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
    name: "Артём",
    message: "npm start  нажимал?",
    time: "22:00",
};

function HW1() {
    return (
        <div>
            <hr/>
            <div>homeworks 1</div>
            { }
            {/*should work (должно работать)   */}

            <Message  name={messageData.name} avatar={messageData.avatar}
                      message={messageData.message} time={messageData.time} />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    );
}

export default HW1;
