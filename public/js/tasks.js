var facebook;

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

var mainFxn = () =>{
    console.log("shit happens yo");
    $.ajax({
      type: "GET",
      url: "/api/relationtable"
    }).done(relation => {
      console.log(relation);
      var house;
      for (var i = 0; i < relation.length; i++) {
        if (relation[i].facebook_id == facebook) {
          house = relation[i].house_name.toLowerCase();;
        }
      }
      console.log("house: " + house);
      var users = [];
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
            if (parseInt(apiTasks[j].userid) === parseInt(facebook)) {
              var person
              var date = moment.unix(apiTasks[j].dueby).format("MM/DD/YYYY");

              for (var i = 0; i< apiUsers.length; i++) {
                if (apiTasks[j].userid === apiUsers[i].facebook_id) {
                  person = apiUsers[i].firstname + " " + apiUsers[i].lastname;
                }
              }
              var divToAdd = $(`<div class="div-to-append user-task" facebook="${facebook}"><div class="row"><div class="col-sm" id="taskcontainer"><img src="css/images/checked-white.png" alt="check button" id="check-button"><div id="tasks">${apiTasks[j].text}</div><img src="css/images/edit-white.png" alt="update button" id="update-button"><img src="css/images/garbage-2-white.png" alt="delete button" id="delete-button"><i class="far fa-caret-square-down" id="more-button"></i></div></div><div class="row"><div class="col-sm"><p id="task-edit">Update Chore:</p><input type="text" id="task-edit"><p id="assigned-to">Assigned to: ${person}</p><input type="text" id="assigned-to"><p id="due-by">Due On: ${date}</p><input type="date" id="due-by"></div></div></div>`)
              $("#task-append").append(divToAdd);
            } 
          }
          for (var j = 0; j < apiTasks.length; j++){
            if (parseInt(apiTasks[j].userid) !== parseInt(facebook)) {
              var person
              var date = moment.unix(apiTasks[j].dueby).format("MM/DD/YYYY");
              for (var i = 0; i< apiUsers.length; i++) {
                if (apiTasks[j].userid === apiUsers[i].facebook_id) {
                  person = apiUsers[i].firstname + " " + apiUsers[i].lastname;
                }
              }
              var divToAdd = $(`<div class="div-to-append user-task"><div class="row"><div class="col-sm" id="taskcontainer"><img src="css/images/checked-white.png" alt="update button" id="check-button"><div id="tasks">${apiTasks[j].text}</div><img src="css/images/edit-white.png" alt="update button" id="update-button"><img src="css/images/garbage-2-white.png" alt="delete button" id="delete-button"><i class="far fa-caret-square-down" id="more-button"></i></div></div><div class="row"><div class="col-sm"><p id="task-edit">Update Chore:</p><input type="text" id="task-edit"><p id="assigned-to">Assigned to: ${person}</p><input type="text" id="assigned-to"><p id="due-by">Due On: ${date}</p><input type="date" id="due-by"></div></div></div>`)
              $("#task-append").append(divToAdd);
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
  console.log($("this"));
})

// var divToAdd = $(<div class="div-to-append user-task"><div class="row"><div class="col-sm" id="taskcontainer"><div id="tasks"><i class="fas fa-check"></i>${apiTasks[i].text}</div><img src="css/images/edit-white.png" alt="update button" id="update-button"><img src="css/images/garbage-2-white.png" alt="delete button" id="delete-button"><i class="far fa-caret-square-down" id="more-button"></i></div></div><div class="row"><div class="col-sm"><p id="task-edit">Update Chore:</p><input type="text" id="task-edit"><p id="assigned-to">Assigned to: ${person}</p><input type="text" id="assigned-to"><p id="due-by">Due On: ${date}</p><input type="date" id="due-by"></div></div></div>)



var documentHider = () => {
  $("#document").hide();
}
documentHider();
var documentShower = () => {
  $("#document").show();
  mainFxn();
}