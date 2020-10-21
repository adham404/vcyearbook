<template>
    <div class="Container">
        <div class="Left">
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
            <div class="Word">
                <div class="Sheet Shadow">
                </div>
            </div>
        </div>
        <div class="Images">
                <div v-for="(Graduate,x) in GraduateData" v-bind:key="x">
                    <div class="Big" >
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
.Left{
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding-left: 20px;
}
.Sheet{
    background-color: white;
    border-radius: 10px;
    width: 500px;
    height: 500px;
}
p{
    margin: 5px;
    text-align: center;
    font-family: 'Perpetua';
    font-size: 0.9rem;
}
.Big{
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 250px;
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
    height: 120px;
    width: 120px;
    border-radius: 200px;
    align-self: center;
    margin-top: 10px;
}
.StudentName{
    color: white;
    font-family: 'Perpetua', serif;
    font-weight: normal;
    align-self: center;
    margin-bottom: 0px;
    margin-top: 5px;
    font-size: 1.3rem;
}
.Images{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 1000px;
    height: 700px;
    margin-left: 1%;
    /* background-color: green; */
    overflow-y: scroll;
    margin-top: 20px;
}
.Container{
    display: flex;
    flex-direction: row;
}
h3{
    align-self: center;
    font-family: 'Perpetua';
    font-weight: normal;
    color: #B49221;
    font-size: 1.5rem;
}
.Header h1{
    margin: 5px;
    font-size: 3rem;
    font-family: 'Perpetua';
    font-weight: normal;
    color: #B49221;
}
.Header{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 20px;
}
.Header img{
    height: 130px;
    width: 130px;
}
.Text{
    display: flex;
    flex-direction: column;
}
#Class19{
    align-self: flex-end;
}
.Shadow{
		-webkit-box-shadow: 0px 0px 21px -10px rgb(180,146,33,1);
		-moz-box-shadow: 0px 0px 21px -10px rgb(180,146,33,1);
		box-shadow: 0px 0px 21px -10px rgb(180,146,33,1);
}
</style>