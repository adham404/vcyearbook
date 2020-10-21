<template>
    <div class="Container">
        <div class="Header">
            <img src="@/assets/logo.png" alt="">
            <div class="Text">
                <h1>Victoria College</h1>
                <h1 id="Class19">Class 19</h1>
            </div>
            
        </div>
        <h3>
            Distinguished we are, prosperous we shall be.
        </h3>
        <div class="Images">
            <div class="Big" v-for="(Graduate,x) in GraduateData" v-bind:key="x">
                <div class="Small">
                    <img :src="Graduate.PicsUrl" alt="" >
                    <h2 class="StudentName">{{Graduate.UserData.Name}}</h2>
                    <p>Mahmoud is a good student who smoked weed a lot but did ok in
                         school he is now an engineer and will keep smoking weed and that is the
                          problem he will doom us all.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AWS from 'aws-sdk'
import firebase from 'firebase'
export default {
data:function()
{
  return{
    GraduateData:[],
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
<style scoped>
p{
    margin: 5px;
    text-align: center;
    font-family: 'Perpetua';
}
.Big{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 350px;
    background-color: black;
    margin-bottom: 20px;
    border-radius: 8px;
}
.Small{
    align-self: center;
    display: flex;
    flex-direction: column;
    width: 94%;
    height: 94%;
    margin: 3%;
    background-color: #BD981B;
    border-radius: 8px;
}
.Small img{
    height: 150px;
    width: 150px;
    border-radius: 200px;
    align-self: center;
    margin-top: 10px;
}
.StudentName{
    color: white;
    font-family: 'Perpetua', serif;
    font-weight: normal;
    align-self: center;
    margin-bottom: 5px;
}
.Images{
    width: 76%;
    margin-left: 12%;
}
.Container{
    display: flex;
    flex-direction: column;
}
h3{
    align-self: center;
    font-family: 'Perpetua';
    font-weight: normal;
    color: #B49221;
}
h1{
    margin: 5px;
    font-size: 2.5rem;
    font-family: 'Perpetua';
    font-weight: normal;
    color: #B49221;
}
.Header{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: rgb(0,0,0, 1);
}
.Header img{
    height: 100px;
    width: 100px;
}
.Text{
    display: flex;
    flex-direction: column;
}
#Class19{
    align-self: flex-end;
}

</style>