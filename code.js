function Send() {
    var para = document.createElement("P");
    para.appendChild(document.getElementById("input").innerHTML);
    document.getElementById("chat-log").appendChild(para);
  }