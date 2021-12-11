var url = `wss://anonym.ink:8000/homework/chatroom?username=`;
var ws = null;
//加入聊天室
function joinRoom() {
    if (ws) {
        alert("你已经在聊天室，不能再加入");
        return;
    }
    var username = document.getElementById("user").value;
    ws = new WebSocket(url + username);
    //建立连接
    ws.onopen = function() {
        console.log(`${username}已经连接`)
    };
    //发消息触

    ws.onmessage = function(ev) {

        // let dat = ev.data;
        // let reg1 = /["data":]["\w"]*/;
        // let mess = dat.replace(reg1, "$1")
        // let reg2 = /["username":]["\w"]*/
        // let reg3 = /["type":]["\w"]*/;
        talking(ev.data);

    };


    //关闭
    ws.onclose = function() {
        console.log(`${username}已经退出`);
    };
}

//退出聊天室
function exitRoom(ev) {
    ws.close();
}

function sendMsg() {
    if (!ws) {
        alert("你已掉线，请重新加入");
        return;
    }
    //消息发送
    ws.send(document.getElementById("sendMsg").value);
    // document.getElementById("sendMsg").value = "";


}



function talking(content) {
    document.getElementById("content").append(content + "\r\n");
}