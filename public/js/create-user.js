console.log("test js ran");
var facebook;
    // This is called with the results from from FB.getLoginStatus().
    //Facebook login validation. If valid, continues storing the facebook id as global var facebook
    //if invalid, reroute to login somehow. God help us
    function statusChangeCallback(response) {
        console.log('statusChangeCallback');
        // console.log(response);
        // The response object is returned with a status field that lets the
        // app know the current login status of the person.
        // Full docs on the response object can be found in the documentation
        // for FB.getLoginStatus().
        if (response.status === 'connected') {
          // Logged into your app and Facebook.
          console.log("Logged in by the powers vested in me by the state of virginia i do hereby pronounce you a beagle")
          facebook = response.authResponse.userID;
          console.log(response.authResponse.userID)
        //   testAPI();
        } else {
            //person is not connected via facebook...redirect to login
            console.log("should go back to login");
            $.ajax({
              type: "GET",
              url: 'api/userlogin/' + response.authResponse.userID,
              }).done(data => {
                console.log(data)
                window.location.replace(`/${data}`)
              })
        }
    }
      // This function is called when someone finishes with the Login
      // Button.  See the onlogin handler attached to it in the sample
      // code below.
    function checkLoginState() {
        FB.getLoginStatus(function(response) {
          statusChangeCallback(response);
        });
    }
    window.fbAsyncInit = function() {
        FB.init({
          appId      : '432818630486037',
          cookie     : true,  // enable cookies to allow the server to access 
                              // the session
          xfbml      : true,  // parse social plugins on this page
          version    : 'v2.8' // use graph api version 2.8
        });
        // Now that we've initialized the JavaScript SDK, we call 
        // FB.getLoginStatus().  This function gets the state of the
        // person visiting this page and can return one of three states to
        // the callback you provide.  They can be:
        //
        // 1. Logged into your app ('connected')
        // 2. Logged into Facebook, but not your app ('not_authorized')
        // 3. Not logged into Facebook and can't tell if they are logged into
        //    your app or not.
        //
        // These three cases are handled in the callback function.
    
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
      // Here we run a very simple test of the Graph API after login is
      // successful.  See statusChangeCallback() for when this call is made.
    function testAPI() {
        console.log('Welcome!  Fetching your information.... ');
        FB.api('/me', function(response) {
          console.log('Successful login for: ' + response.name);
        });
    }

$(() =>{
    $("#createButton").on('click', () =>{
        console.log("onclick event happened");
        var firstName = $("#first-name").val();
        var lastName = $("#last-name").val();
        var email = $("#email").val();
        var birthdate = $("#birthdate").val();
        var phone = $("#phone").val();
        var city = $("#city").val();
        var state = $("#state").val()
        var zip = $("#zipcode").val();
        var facebookId = facebook;
        var created_at = moment.utc().valueOf();
        var newHouse = $("#new-house").val();
        var newHousePassword = $("#new-house-pass").val();
        var existingHouse = $("#house").val();
        var existingHousePassword = $("#house-pass").val();




        var allHouses = []

        $.ajax({
            type: "GET",
            url: '/api/allhouses'
        }).done(function(data) {
            allHouses = data.houses;
            console.log(allHouses);
            clearProblems();
            var good = validation(firstName, lastName, email, birthdate, phone, city, state, zip, newHouse, newHousePassword, existingHouse, existingHousePassword, allHouses);
            console.log(good);
            if (!good) {
                return;
            }
            if (existingHouse) {
                var newUser = {
                    firstName,
                    lastName,
                    email,
                    birthdate,
                    phone,
                    city,
                    state,
                    zip,
                    facebook_id: facebookId,
                    created_at,
                    house_name: existingHouse,
                    password: existingHousePassword,
                    houseType: "existing" 
                }
            } else {
                var newUser = {
                    firstName,
                    lastName,
                    email,
                    birthdate,
                    phone,
                    city,
                    state,
                    zip,
                    facebook_id: facebookId,
                    created_at,
                    house_name: newHouse,
                    password: newHousePassword,
                    houseType: "new" 
                }
            }
            console.log(newUser)
            $.ajax({
                type: "POST",
                url: 'api/newuser/' + facebookId,
                data: newUser
            }).done(data => {
                window.location.replace("/tasks");
            })
        })     
    })
})

var clearProblems = () => {
    $("#firstname-problem").text("");
    $("#lastname-problem").text("");
    $("#email-problem").text("");
    $("#birthdate-problem").text("");
    $("#phone-problem").text("");
    $("#city-problem").text("");
    $("#state-problem").text("");
    $("#zip-problem").text("");
    $("#double-house-problem").text("");
    $("#new-house-problem").text("");
    $("#house-problem").text("");
}

var validation = (firstName, lastName, email, birthdate, phone, city, state, zip, newHouse, newHousePassword, existingHouse, existingHousePassword, allHouses) => {
    console.log("validation ran");
    //if any of these fields is incorrect, good gets changed to false and fails to send the json and redirect. $("#xxxx-problem") is each fields empty div for putting error in
    var good = true;
    var doubleFault = false;
    if (!firstName){
        $("#firstname-problem").text("Please Enter a Name");
        good = false;
    }
    if (!lastName){
        $("#lastname-problem").text("Please Enter a Name");
        good = false;
    }
    if (!email){
        $("#email-problem").text("Please Enter an Email Address");
        good = false;
    }
    if (!birthdate){
        $("#birthdate-problem").text("Please Enter your DOB");
        good = false;
    }
    if (!phone){
        $("#phone-problem").text("Please Enter a Phone Number");
        good = false;
    } else if (phone.length !== 10) {
        $("#phone-problem").text("Please Enter a Valid Phone Number (10 digits, no punctuation)");
    }
    if (!city){
        $("#city-problem").text("City is Required");
        good = false;
    }
    //this shouldn't be possible...but who knows.....
    if (!state){
        $("#state-problem").text("State is Required");
        good = false;
    }
    if (!zip){
        $("#zip-problem").text("Zip is Required");
        good = false;
    } else if (zip.length !== 5) {
        $("#zip-problem").text("Enter a Valid Zipcode (5 digits)");
        good = false;
    }
    var exists = false;
    //checks if house exists in db
    for (var i = 0; i < allHouses.length; i++){
        if (allHouses[i].house_name.toLowerCase() === existingHouse.toLowerCase() || allHouses[i].house_name.toLowerCase() === newHouse.toLowerCase()){
            exists = true;
        }
    }
    //checks if user has information in both new house and existing house fields
    //double fault is sent to top of houses pane and doesn't put anything in the lower panes
    if (existingHouse && newHouse) {
        $("#double-house-problem").text("Either Select or Create. Why would you even want to do both?");
        good = false;
        doubleFault = true;
    //checks if user put no information in either house fields
    } else if (!existingHouse && !newHouse) {
        $("#double-house-problem").text("Choose one please. They're here for a reason");
        good = false;
        doubleFault = true;
    }
    //confirms password
    if (newHousePassword !== $("#new-house-pass-confirm").val() && doubleFault === false && !existingHouse) {
        $("#new-house-problem").text("Make sure passwords match");
        good = false;
    } else if (!newHousePassword && doubleFault === false && !existingHouse){
        $("#new-house-problem").text("Please enter a password");
        good = false;
    }
    //if house name already exists when trying to create a new house, trigger fault
    if (exists && doubleFault === false && !existingHouse) {
        $("#new-house-problem").text("This house name already exists. Please choose a new one");
        good = false;
    }
    //if house doesn't exist, trigger fault
    if (!exists && doubleFault === false && !newHouse) {
        $("#house-problem").text("This house doesn't exist");
        good = false;
    }
    //if house exists but password doesn't match, throw fault
    if (exists){
        for (var i = 0; i < allHouses.length; i++) {
            if (allHouses[i].house_name.toLowerCase() === existingHouse.toLowerCase()){
                if (allHouses[i].password !== existingHousePassword){
                    console.log(allHouses[i].house_name + " ? " + existingHouse)
                    good = false;
                    $("#house-problem").text("the password deosn't match")
                }
            }
        }
    }
    console.log(good);
    return good;
}