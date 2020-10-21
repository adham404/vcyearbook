<template>
  <div>
      Year Book 2019
  </div>
  <div v-for="(Graduate,x) in GraduateData" v-bind:key="x" class="GraduateGrid">
    <img style="width:300px; height:400px;" :src="Graduate.PicsUrl" alt="">
    <div>{{Graduate.UserData.Name}}</div>      
  </div>
</template>

<script>
import AWS from 'aws-sdk'
import firebase from 'firebase'
export default {
data:function()
{
  return{
    GraduateData:
      [
        {
          PicsUrl:"",
          UserData:{}
        }
      ],
      PicsUrl:[],
      UserData:[]
    }
},
async mounted()
{
  AWS.config.region = 'us-east-2'; // Region
  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-2:11543c6e-d9de-4ba6-bfef-d2169b092165',
  });
  AWS.config.apiVersions = {
    cognitoidentity: '2014-06-30',
  // other service API versions
};
var params = {
  AllowUnauthenticatedIdentities: true, /* required */
  IdentityPoolName: 'YearBook', /* required */
  AllowClassicFlow: true,
  CognitoIdentityProviders: [
    {
      ClientId: '2na2smyma7moudyanasyahooo',
      ProviderName: 'cognito-idp.us-east-2.amazonaws.com/us-east-2_ana2smyma7moudyanas',
      ServerSideTokenCheck: true || false
    },
    /* more items */
  ],
  DeveloperProviderName: 'YearBook19Access',
  IdentityPoolTags: {
    '<TagKeysType>': 'STRING_VALUE',
    /* '<TagKeysType>': ... */
  },
  OpenIdConnectProviderARNs: [
    'STRING_VALUE',
    /* more items */
  ],
  SamlProviderARNs: [
    'STRING_VALUE',
    /* more items */
  ],
  SupportedLoginProviders: {
    '<IdentityProviderName>': 'STRING_VALUE',
    /* '<IdentityProviderName>': ... */
  }
};
var cognitoidentity = new AWS.CognitoIdentity();
cognitoidentity.createIdentityPool(params ,function (err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});

  var albumBucketName = "victoriacollegeclass19gradphotoyearbook";
  var s3 = await new AWS.S3({
    apiVersion: '2014-06-30',
  params: {Bucket: albumBucketName}
  });
  var albumName = "Grads";
  var albumPhotosKey = encodeURIComponent(albumName) + '/';
  console.log(s3);
  let self = this;
  await s3.listObjects({Prefix: albumPhotosKey}, async function(err,data){
    if(err)
    {
      alert('There was an error viewing your album: ' + err.message);
    }
    var href = this.request.httpRequest.endpoint.href;
    var bucketUrl = href + albumBucketName + '/';
     await data.Contents.map(function(photo){
       var photoKey = photo.Key;
      var photoUrl = bucketUrl + encodeURIComponent(photoKey);
      self.PicsUrl.push(photoUrl)
      console.log(self.PicsUrl);
      // this.PicsUrl.push(photoUrl);
      // console.log(photoKey);
    })
            var db = firebase.firestore();
            var dbRef = db.collection("Graduates").get();
            await dbRef.then((query) => {
            query.forEach((doc) => {
              var Userdata = doc.data();
              self.UserData.push(Userdata);
          })
        })
        for (let i = 0; i < self.UserData.length; i++) {
          console.log("The 5ara is: "+self.PicsUrl[i]);
            var DataDummy = {
              PicsUrl: self.PicsUrl[i+1],
              UserData: self.UserData[i]      
              }
              self.GraduateData.push(DataDummy);
            }
  })
  console.log("2abl el firebase el sowar 2heeh: "+self.PicsUrl);
  // console.log(self.UserData);
  console.log("This Data is: "+ this.GraduateData);
}
}
</script>

<style>

</style>