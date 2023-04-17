document.body.onclick = function(event){
    var id = event.target.id;
    var claname=document.getElementById(id).className;
    var popout_container = document.createElement("div")
    popout_container.classList.add("centered-popout")
    var popout_btncontainer = document.createElement("div")

    var message = document.createTextNode("By clicking OK, you confirm that you are going to purchase " + id);
    var okButton = document.createElement("button");
    okButton.textContent = "OK";
    var cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
    popout_btncontainer.appendChild(okButton)
    popout_btncontainer.appendChild(cancelButton)

    popout_container.appendChild(message);
    popout_container.appendChild(popout_btncontainer);
    document.body.appendChild(popout_container);

      // 设置点击OK按钮时的处理函数
      okButton.onclick = function() {
          document.body.removeChild(popout_container);
          var transaction_over = document.createElement("div")
          transaction_over.classList.add("centered-popout")
          var suc = document.createTextNode("Transaction is successful.");
          var knownButton = document.createElement("button");
          knownButton.textContent = "Thank you!";
          transaction_over.appendChild(suc);
          transaction_over.appendChild(knownButton);
          document.body.appendChild(transaction_over);
          knownButton.onclick = function(){
              document.body.removeChild(transaction_over);
          }
          // confirm("Transaction is successful!")
      };

      // 设置点击Cancel按钮时的处理函数
      cancelButton.onclick = function() {
        document.body.removeChild(popout_container);
      };
}