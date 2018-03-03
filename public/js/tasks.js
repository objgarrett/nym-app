var facebook;
var num = 0;
var userArray = [];
var houseGlobal;
    // This is called with the results from from FB.getLoginStatus().
    //Facebook login validation. If valid, continues storing the facebook id as global var facebook
    //if invalid, reroute to login somehow. God help us. 
    function statusChangeCallback(response) {
        if (response.status === 'connected') {
          // Logged into your app and Facebook.
          facebook = response.authResponse.userID;
          //checks if the person with the id number is in our db. if they aren't, they get redirected back to the create user page.
          $.ajax({
            type: "GET",
            url: 'api/userlogin/' + response.authResponse.userID,
            }).done(data => {
              if (data === "create-user") {
                window.location.replace(`/${data}`)
              } else {
                documentShower();
              }
            })
        } else {
          // The person is not logged into facebook
          $.ajax({
            type: "GET",
            url: '/newlogin'
            }).done(data => {
              window.location.replace(`/login`);
            })
            return
        }
    }
    function checkLoginState() {
        FB.getLoginStatus(function(response) {
          statusChangeCallback(response);
        });
    }
    window.fbAsyncInit = function() {
        FB.init({
          appId      : '432818630486037',
          cookie     : true,  
          xfbml      : true,  
          version    : 'v2.8'
        });
        FB.getLoginStatus(function(response) {
          statusChangeCallback(response);
        });
    };
      // Load the SDK asynchronously
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    function testAPI() {
        FB.api('/me', function(response) {
        });
    }
var house;
var users = [];
var mainFxn = () =>{
    $("#add-task-form").hide();
    $.ajax({
      type: "GET",
      url: "/api/relationtable"
    }).done(relation => {
      for (var i = 0; i < relation.length; i++) {
        if (relation[i].facebook_id == facebook) {
          house = relation[i].house_name.toLowerCase();
          houseGlobal = house;
        }
      }
      for (var i = 0; i < relation.length; i++) {
        if (relation[i].house_name === house) {
          users.push(relation[i].facebook_id)
        }
      }
      $.ajax({
        type: "GET",
        url: "/api/users/" + house
      }).done(apiUsers => {
        $.ajax({
          type: "GET",
          url: "/api/house/" + house + "/tasks"
        }).done(apiTasks => {
          for (var j = 0; j < apiTasks.length; j++){
            adder();
            if (parseInt(apiTasks[j].userid) === parseInt(facebook)) {
              var person;
              var date = moment.unix(apiTasks[j].dueby).format("MM/DD/YYYY");
              var word = "";
              if (apiTasks[j].complete == 1) {
                word = "COMPLETE";
              }
              var taskNum = apiTasks[j].taskid
              for (var i = 0; i< apiUsers.length; i++) {
                if (apiTasks[j].userid === apiUsers[i].facebook_id) {
                  person = apiUsers[i].firstname + " " + apiUsers[i].lastname;
                }
              }
              var divToAdd = $(`<div class="div-to-append user-task"><div class="row"><div class="col-sm" id="tasks" ><div><img src="css/images/checked-white.png" alt="update button" class="check-button" name="${num}" onclick="checkTask(${taskNum})"></div>${apiTasks[j].text} ${word}</div><img src="css/images/garbage-2-white.png" alt="delete button" class="delete-button" onclick="deleteTask(${taskNum})"><img src="css/images/menu-white.png" class="more-button" onclick="showDiv(${num})"></i></div></div><div class="row"><div class="col-sm" id="taskcontainer${num}" status="hidden"><p id="assigned-to">Assigned to: ${person}</p><p id="due-by">Due On: ${date}</p></div></div></div>`)
              $("#task-append").append(divToAdd);
              divHider(num);
            } 
          }
          for (var j = 0; j < apiTasks.length; j++){
            adder();
            if (parseInt(apiTasks[j].userid) !== parseInt(facebook)) {
              var person
              var date = moment.unix(apiTasks[j].dueby).format("MM/DD/YYYY");
              var word = "";
              if (apiTasks[j].complete == 1) {
                word = "COMPLETE";
              }
              var taskNum = apiTasks[j].taskid
              for (var i = 0; i< apiUsers.length; i++) {
                if (apiTasks[j].userid === apiUsers[i].facebook_id) {
                  person = apiUsers[i].firstname + " " + apiUsers[i].lastname;
                }
              }
              var divToAdd = $(`<div class="div-to-append user-task"><div class="row"><div class="col-sm" id="tasks"><img src="css/images/checked-white.png" alt="update button" class="check-button" onclick="checkTask(${taskNum})")>${apiTasks[j].text} ${word}</div><img src="css/images/garbage-2-white.png" alt="delete button" class="delete-button" onclick="deleteTask(${taskNum})"><img src="css/images/menu-white.png"  class="more-button" onclick="showDiv(${num})"></i></div></div><div class="row"><div class="col-sm" id="taskcontainer${num}" status="hidden"><p id="assigned-to">Assigned to: ${person}</p><p id="due-by">Due On: ${date}</p></div></div></div>`)
              $("#task-append").append(divToAdd);
              divHider(num);
            } 
          }
          $("#check-button").on("click", () => {
            // divToAdd;
          })
          
        })
        var userSelectAdd = "";
        var number = "1"
        for (var q = 0; q < apiUsers.length; q++) {
          userSelectAdd += `<option id="${apiUsers[q].facebook_id}">${number}. ${apiUsers[q].firstname} ${apiUsers[q].lastname}</option>`;
          userArray.push(apiUsers[q].facebook_id);
          number++;
        }
        // var divToAppend = `<div class="row"><div class="col-sm"><button id="add-chore" onclick="showAddTask()">+ Add Chore</button></div></div>`;
        // var formToAppend = `<form class="create-form" id="appended-form" status="hidden"><div class="form-group"><label for="add-task">Task Name</label><input type="text" id="add-task" name="add-task" placeholder="Chore Name goes Here"></div><div class="form-group" id="add-task-form"><label for="add-assign">Roomate to Assign</label><select class="form-control" id="add-assign" value="Assign" placeholder="Assign User">${userSelectAdd}</select><div class="form-group" id="add-task-form"><label for="add-dueby">Due Date</label><input type="date" id="add-dueby" name="add-dueby" placeholder="2018-03-05">`;
        // var buttonToAppend = `<button type="button" id="createButton" onclick="addChore()">Submit</button>`
        var divToAppend = `<div class="row"><div class="col-sm"><button id="add-chore" onclick="showAddTask()">+ Add Chore</button></div></div>`;
<<<<<<< HEAD
        var formToAppend = `<form class="create-form" id="appended-form" status="hidden"><div class="form-group"><label for="add-task">Task Name</label><input type="text" id="add-task" name="add-task" placeholder="Chore Name goes Here"></div><div class="form-group"><label for="add-assign">Roomate to Assign</label><select class="form-control" id="add-assign" value="Assign">${userSelectAdd}</select><div class="form-group"><label for="add-dueby">Due Date</label><input type="date" id="add-dueby" name="add-dueby" placeholder="2018-03-05">`;
=======
        var formToAppend = `<form class="create-form" id="appended-form" status="hidden"><div class="form-group"><label for="add-task">Task Name</label><input type="text" id="add-task" name="add-task" placeholder="Chore Name goes Here"></div><div class="form-group" id="add-task-form"><label for="add-assign"></label><select class="form-control" id="add-assign" value="Assign" placeholder="Assign User">${userSelectAdd}</select><div class="form-group" id="add-task-form"><label for="add-dueby">Due Date</label><input type="date" id="add-dueby" name="add-dueby" placeholder="2018-03-05">`;
>>>>>>> b4cbb63e0abd03959e832d456d1af036a4745d08
        var buttonToAppend = `<button type="button" id="createButton" onclick="addChore()">Submit</button>`
        

        divToAppend = divToAppend + formToAppend + buttonToAppend;
        $("#append-add").append(divToAppend);
        hideForm();
      })
    })
}

var documentHider = () => {
  $("#document").hide();
}
documentHider();
var documentShower = () => {
  $("#document").show();
  mainFxn();
}
var showAddTask = () => {
  var status = $("#appended-form").attr("status");
  if (status === "hidden") {
    $("#appended-form").show();
    $("#appended-form").attr("status", "shown");
  } else {
    $("#appended-form").hide();
    $("#appended-form").attr("status", "hidden");
  }
}

var adder = () => {
  num ++;
}

var showDiv = number => {
  var status = $("#taskcontainer" + number).attr("status");
  if (status === "hidden") {
    $("#taskcontainer" + number).show();
    $("#taskcontainer" + number).attr("status", "shown");
  } else {
    $("#taskcontainer" + number).hide();
    $("#taskcontainer" + number).attr("status", "hidden");
  }
}

var divHider = number => {
  $("#taskcontainer" + number).hide();
}

var checkTask = (something) => {
  $.ajax({
    type:"PUT",
    url: "api/tasks/" + something + "/complete"
  }).done(data => {
    window.location.reload();
  })
}

var deleteTask = (something) => {
  $.ajax({
    type: "DELETE",
    url: "/api/tasks/" + something + "/delete"
  }).done(data => {
    window.location.reload();
  })
}

var hideForm = () => {
  $("#appended-form").hide();
}

var addChore = () => {
  text = $("#add-task").val();
  userName = $("#add-assign").val();
  dueby = $("#add-dueby").val();
  var date = moment(dueby).unix();
  var user = userName.substr(0,userName.indexOf('.'));
  index = user - 1;
  var object = {
    text,
    facebook_id: userArray[index],
    dueby,
    houseGlobal
  }

  $.ajax({
    type: "POST",
    url: "/api/tasks/add",
    data: object
  }).done(data => {
    window.location.reload();
  })

  userArray.length = 0;
}
