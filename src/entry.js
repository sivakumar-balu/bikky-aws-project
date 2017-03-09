var AmazonCognitoIdentity = require('amazon-cognito-identity-js');
//var CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;

var poolData = {
        UserPoolId : 'us-west-2_XuuReuA5v', // Your user pool id here
        ClientId : '5b9vq3rfp1v8mktbfhmintlfjb' // Your client id here
    };
    var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

    var attributeList = [];

    var dataEmail = {
        Name : 'email',
        Value : 'sivakumarbalu@icloud.com'
    };
    var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);

    // var dataPhoneNumber = {
    //     Name : 'phone_number',
    //     Value : '+15555555555'
    // };
    // var attributePhoneNumber = new AmazonCognitoIdentity.CognitoUserAttribute(dataPhoneNumber);

    attributeList.push(attributeEmail);
    attributeList.push(attributePhoneNumber);

    userPool.signUp('tstuser1', 'tstuser1', attributeList, null, function(err, result){
        if (err) {
            console.log(err);
            return;
        }
        cognitoUser = result.user;
        console.log('user name is ' + cognitoUser.getUsername());
    });
