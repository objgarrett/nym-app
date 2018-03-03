var facebook;
var num = 0;
    // This is called with the results from from FB.getLoginStatus().
    //Facebook login validation. If valid, continues storing the facebook id as global var facebook
    //if invalid, reroute to login somehow. God help us. 
    function statusChangeCallback(response) {
        console.log('statusChangeCallback');
        if (response.status === 'connected') {
          // Logged into your app and Facebook.
          console.log("Logged in by the powers vested in me by the state of virginia i do hereby pronounce you a beagle")
          facebook = response.authResponse.userID;
          //checks if the person with the id number is in our db. if they aren't, they get redirected back to the create user page.
          $.ajax({
            type: "GET",
            url: 'api/userlogin/' + response.authResponse.userID,
            }).done(data => {
              console.log(data)
              if (data === "create-user") {
                window.location.replace(`/${data}`)
              } else {
                documentShower();
              }
            })
          console.log(response.authResponse.userID)
        } else {
          // The person is not logged into facebook
          console.log("this should redirect");
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
        console.log('Welcome!  Fetching your information.... ');
        FB.api('/me', function(response) {
          console.log('Successful login for: ' + response.name);
        });
    }
var house;
var users = [];
var mainFxn = () =>{
    $("#add-task-form").hide();
    console.log("shit happens yo");
    $.ajax({
      type: "GET",
      url: "/api/relationtable"
    }).done(relation => {
      console.log(relation);
      for (var i = 0; i < relation.length; i++) {
        if (relation[i].facebook_id == facebook) {
          house = relation[i].house_name.toLowerCase();;
        }
      }
      console.log("house: " + house);
      for (var i = 0; i < relation.length; i++) {
        if (relation[i].house_name === house) {
          users.push(relation[i].facebook_id)
        }
      }
      console.log("users: " + users);
      $.ajax({
        type: "GET",
        url: "/api/users/" + house
      }).done(apiUsers => {
        console.log(apiUsers);
        $.ajax({
          type: "GET",
          url: "/api/house/" + house + "/tasks"
        }).done(apiTasks => {
          console.log(apiTasks);
          for (var j = 0; j < apiTasks.length; j++){
            adder();
            if (parseInt(apiTasks[j].userid) === parseInt(facebook)) {
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
              var divToAdd = $(`<div class="div-to-append user-task" facebook="${facebook}><div class="row"><div class="col-sm" ><div><img src="css/images/checked-white.png" alt="update button" class="check-button" name="${num}" onclick="checkTask(${taskNum})"></div><div id="tasks">${apiTasks[j].text} ${word}</div><img src="css/images/garbage-2-white.png" alt="delete button" class="delete-button" onclick="deleteTask(${taskNum})"><i class="far fa-caret-square-down" class="more-button" onclick="showDiv(${num})"></i></div></div><div class="row"><div class="col-sm" id="taskcontainer${num}"><p id="task-edit">Update Chore:</p><input type="text" id="task-edit"><p id="assigned-to">Assigned to: ${person}</p><input type="text" id="assigned-to"><p id="due-by">Due On: ${date}</p><input type="date" id="due-by"></div></div></div>`)
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
              var divToAdd = $(`<div class="div-to-append user-task"><div class="row"><div class="col-sm"><div id="tasks" id="num"><img src="css/images/checked-white.png" alt="update button" class="check-button" onclick="checkTask(${taskNum})")>${apiTasks[j].text} ${word}</div><img src="css/images/garbage-2-white.png" alt="delete button" class="delete-button" onclick="deleteTask(${taskNum})"><i class="far fa-caret-square-down" class="more-button" onclick="showDiv(${num})"></i></div></div><div class="row"><div class="col-sm" id="taskcontainer${num}"><p id="task-edit">Update Chore:</p><input type="text" id="task-edit"><p id="assigned-to">Assigned to: ${person}</p><input type="text" id="assigned-to"><p id="due-by">Due On: ${date}</p><input type="date" id="due-by"></div></div></div>`)
              $("#task-append").append(divToAdd);
              divHider(num);
            } 
          }
          $("#check-button").on("click", () => {
            console.log("on click happened");
            // divToAdd;
          })
          
        })
      })
    })
}



$(".task-append").on("click", "img#check-button", () => {
  console.log($("img#check-button"));

})

var documentHider = () => {
  $("#document").hide();
}
documentHider();
var documentShower = () => {
  $("#document").show();
  mainFxn();
}
var showAddTask = () => {
  $("#add-task-form").show();
}

var adder = () => {
  num ++;
  console.log(num);
}

var showDiv = number => {
  console.log("show div ran : " + number);
  $("#taskcontainer" + number).show();
}

var divHider = number => {
  $("#taskcontainer" + number).hide();
}

var checkTask = (something) => {
  console.log(something);
  $.ajax({
    type:"PUT",
    url: "api/tasks/" + something + "/complete"
  }).done(data => {
    window.location.reload();
  })
}

var deleteTask = (something) => {
  console.log(something);
  $.ajax({
    type: "DELETE",
    url: "/api/tasks/" + something + "/delete"
  }).done(data => {
    console.log(data);
    window.location.reload();
  })
}

// $(() => {
//   $("#createbutton").on("click", () => {
//     text = $("add-task");
//     user
//   })
// })