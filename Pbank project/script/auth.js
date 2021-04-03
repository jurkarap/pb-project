
        // FirebaseUI config.
        var uiConfig = {
            signInSuccessUrl: 'http://app.maveric.tech/',
            signInOptions: [
              // Leave the lines as is for the providers you want to offer your users.
              firebase.auth.GoogleAuthProvider.PROVIDER_ID,
              firebase.auth.EmailAuthProvider.PROVIDER_ID
            ],
            // tosUrl and privacyPolicyUrl accept either url string or a callback
            // function.
            // Terms of service url/callback.
            tosUrl: 'http://app.maveric.tech/privacyPolicy',
            // Privacy policy url/callback.
            privacyPolicyUrl: function() {
              window.location.assign('http://app.maveric.tech/privacyPolicy');
            }
          };
    
          // Initialize the FirebaseUI Widget using Firebase.
          var ui = new firebaseui.auth.AuthUI(firebase.auth());
          // The start method will wait until the DOM is loaded.
          ui.start('#firebaseui-auth-container', uiConfig);



          function initApp() {
            firebase.auth().onAuthStateChanged(function(user) {
              if (user) {
                // User is signed in.
                let displayName = user.displayName;
                let email = user.email;
                let emailVerified = user.emailVerified;
                let photoURL = user.photoURL;
                let uid = user.uid;
                let phoneNumber = user.phoneNumber;
                let providerData = user.providerData;
                user.getIdToken().then(function(accessToken) {
                  document.querySelector('.sign-in-status').innerHTML = 'Signed in';
                  document.querySelector('.sign-in').innerHTML = 'Sign out';
                  document.querySelector('.navbar-dropdown-name').innerHTML = `${displayName}`;
                  document.querySelector('.navbar-dropdown-mail').innerHTML = `${email}`;
                });
              } else {
                // User is signed out.
                document.querySelector('.sign-in-status').innerHTML = 'Signed out';
                document.querySelector('.sign-in').innerHTML = 'Sign in';
              }
            }, function(error) {
              console.log(error);
            });
          };
    
          window.addEventListener('load', initApp);