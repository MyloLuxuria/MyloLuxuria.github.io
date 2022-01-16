function Send() {
    var para = document.createElement("P");
    para.appendChild(document.getElementById("input").value + "<br>");
    document.getElementById("chat-log").appendChild(para);
  }