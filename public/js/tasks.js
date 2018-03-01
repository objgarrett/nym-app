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
              }
            })
          console.log(response.authResponse.userID)
        } else {
          // The person is not logged into facebook
          console.log("this should redirect");
          $.ajax({
            type: "GET",
            url: '/newlogin'
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

$(() =>{
    console.log("shit happens yo");
})