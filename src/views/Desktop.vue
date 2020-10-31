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
                    Spirit Never Dies
            </h3>
            <div class="Word">
                
                <div class="Sheet Shadow">
                Loyalty is valuable because it allows us to take the risk of predicting the actions and behavior of people we trust. 3. One may not always correctly decide who to be loyal to, and some people may even disappoint us or deceive us when we are loyal to them.

Loyalty (definition essay) Some people say that a loyal person is worth trusting. ... Loyalty is a characteristic of being devoted to a person, place or a thing which requires patience and faith on what you believe.        
                </div>
            </div>
        </div>
        <div class="Images">
                <div v-for="(Graduate,x) in GraduateData"  v-bind:key="x">
                    <div class="Big" >
                        <div class="Small">
                            <img :src="Graduate.PicUrl" alt="" >
                            <h4 class="StudentName">{{Graduate.Name}}</h4>
                            <h5 class="StudentName">{{Graduate.College}}</h5>
                            <p>
                            </p>
                        </div>
                    </div>
                </div>
                
            
        </div>
        <!-- <button @click="UploadData">Upload Data to Firestore bitch!</button> -->
    </div>
</template>

<script>
// import AWS from 'aws-sdk'
// import firebase from 'firebase'
export default {
data:function()
{
  return{
    GraduateData:[],
      PicsUrl:[],
      UserData:[],
      UserName:['AbdelhadyAhmed.jpg','AbdelrahmanEhab.jpg','AbdelrahmanElsaaty.jpg','AbdelrahmanKamel.jpg'],
      GraduateDataToUpload:
[
{
TimeStamp: "2020/10/23 1:21:48 AM GMT+2",
Email: "abdelhadyahmed3231@gmail.com",
Name: "Abdelhady ahmed abdelhady",
Uni: "Aast faculty of engineering",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "",
Email: "",
Name: "Abdelrahman Elsaaty",
Uni: "Faculty Of Medicine",
Gender: "male",
Ipledge: "yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "inc",
In: "1"
},
{
TimeStamp: "2020/10/22 10:58:47 PM GMT+2",
Email: "abdelrahmangaballah27@gmail.com",
Name: "Abdelrahman Gaballa",
Uni: "Eelu",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/22 11:07:33 PM GMT+2",
Email: "bodeykamel@gmail.com",
Name: "Abdelrahman kamel sobhy",
Uni: "Faculty of law Alexandria university",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "",
Email: "",
Name: "Abdelrahman Mahmoud Abdelrahman",
Uni: "Faculty of law",
Gender: "Male",
Ipledge: "",
Dafe3: "T",
field8: "",
NForm: "N",
Incomplete: "",
In: "1"
},
{
TimeStamp: "",
Email: "abdelrahmanyaser173@yahoo.com",
Name: "Abdelrahman Yasser Nada",
Uni: "",
Gender: "",
Ipledge: "",
Dafe3: "T",
field8: "",
NForm: "N",
Incomplete: "inc",
In: "1"
},
{
TimeStamp: "2020/10/22 10:23:34 PM GMT+2",
Email: "abdelrhman.ahmed54@gmail.com",
Name: "Abdelrhman Ahmed Hussien Mohamed Ali",
Uni: "Faculty Of Science Alexandria University",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/22 11:06:22 PM GMT+2",
Email: "abdohibo1234@gmail.com",
Name: "abdelrhman ehab elsayed",
Uni: "faculty of commerce",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/23 2:22:20 PM GMT+2",
Email: "boodyzaher20@gmail.com",
Name: "Abdelrhman Taha Abbas Zaher",
Uni: "Facutly of Law",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/22 11:12:08 PM GMT+2",
Email: "bodoximoz@gmail.com",
Name: "Abduallah Mahmoud ElSonbaty",
Uni: "Faculty of engineering",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/22 10:33:35 PM GMT+2",
Email: "Abdallahmostafaf@gmail.com",
Name: "Abdullah ashraf mostafa",
Uni: "Faculty of Engineering",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "",
Email: "adamessam2000@gmail.com",
Name: "Adam Essam Mohamed",
Uni: "Faculty of Engineering",
Gender: "",
Ipledge: "",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "",
Email: "",
Name: "Adham Ahmed Hefnawy",
Uni: "Faculty of Medicine",
Gender: "",
Ipledge: "",
Dafe3: "T",
field8: "",
NForm: "N",
Incomplete: "",
In: "1"
},
{
TimeStamp: "",
Email: "",
Name: "Adham Mohsen",
Uni: "Faculty of Engineering",
Gender: "",
Ipledge: "",
Dafe3: "",
field8: "",
NForm: "N",
Incomplete: "",
In: "1"
},
{
TimeStamp: "",
Email: "",
Name: "Adham Mostafa",
Uni: "",
Gender: "",
Ipledge: "",
Dafe3: "",
field8: "",
NForm: "N",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/22 10:54:12 PM GMT+2",
Email: "adham.said612@gmail.com",
Name: "Adham Saeid Hossny",
Uni: "Faculty of commerce",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "inc",
In: "1"
},
{
TimeStamp: "2020/10/23 1:41:23 AM GMT+2",
Email: "ahmedzayan2191@gmail.com",
Name: "Ahmed abdelrazek ahmed",
Uni: "Pharos university",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "inc",
In: "1"
},
{
TimeStamp: "2020/10/23 2:58:01 PM GMT+2",
Email: "ahmedtawfiiiq24@gmail.com",
Name: "Ahmed alaa eldin tawfik",
Uni: "Faculty of engineering Alexandria university",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/22 11:33:11 PM GMT+2",
Email: "ahmedsheshtawy36@gmail.com",
Name: "Ahmed amr sheshtawy",
Uni: "Faculty of dentistry pua",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/23 12:13:09 AM GMT+2",
Email: "ahmed.ayman811@gmail.com",
Name: "Ahmed Ayman Moftah",
Uni: "Faculty of medicine , Alexandria University",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/22 10:45:55 PM GMT+2",
Email: "ahmedhossamelamrawi@gmail.com",
Name: "Ahmed Hossam Abdelrazek",
Uni: "Faculty of Science, SIM Dep.",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "",
Email: "ahmedhussamalnamer86@gmail.com",
Name: "Ahmed Hossam Eldin Mamdouh",
Uni: "",
Gender: "Male",
Ipledge: "",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "inc",
In: "1"
},
{
TimeStamp: "2020/10/23 12:58:15 AM GMT+2",
Email: "agn941110145@gmail.com",
Name: "Ahmed ibrahim mohamed ali",
Uni: "Faculty of tourism and hotels",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/23 12:20:15 PM GMT+2",
Email: "ahmed.200179.ak7@gmail.com",
Name: "Ahmed khaled ismail",
Uni: "Faculty of commerce",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "inc",
In: "1"
},
{
TimeStamp: "2020/10/22 10:20:21 PM GMT+2",
Email: "amasry615@gmail.com",
Name: "Ahmed mohamed elmasry",
Uni: "Faculty of engineering",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "inc",
In: "1"
},
{
TimeStamp: "2020/10/22 10:36:09 PM GMT+2",
Email: "ahmednabegh123@gmail.com",
Name: "Ahmed nabegh",
Uni: "Computer science",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/22 10:18:10 PM GMT+2",
Email: "ahmednagy189@gmail.com",
Name: "Ahmed nagy aly",
Uni: "Faculty of commerce",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/23 5:06:51 AM GMT+2",
Email: "ahmedtarek_t@yahoo.com",
Name: "ahmed tarek makhlouf",
Uni: "faculty of law (English)",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "",
Email: "ali_makarana1@gamil.com",
Name: "ali ahmed sadeldin",
Uni: "Faculty Of Agricultural Engineering",
Gender: "male",
Ipledge: "Tes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "",
Email: "",
Name: "Aly Mohamed",
Uni: "Aast Academy",
Gender: "",
Ipledge: "",
Dafe3: "T",
field8: "",
NForm: "N",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/23 2:16:33 AM GMT+2",
Email: "amgedelmasry76@gmail.com",
Name: "Amged Elmasry",
Uni: "faculty of engineering",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "inc",
In: "1"
},
{
TimeStamp: "",
Email: "",
Name: "Amr Mohamed Abdelkawy",
Uni: "Faculty of Arts",
Gender: "",
Ipledge: "",
Dafe3: "T",
field8: "",
NForm: "N",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/22 10:15:26 PM GMT+2",
Email: "amryasser52001@gmail.com",
Name: "Amr Yasser Imam",
Uni: "Faculty of Engineering, Alex",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/22 10:16:58 PM GMT+2",
Email: "andrew.ayman2554@gmail.com",
Name: "Andrew Ayman Roshdy aziz",
Uni: "Faculty of Commerce English department",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/22 10:55:30 PM GMT+2",
Email: "andrewehab53@gmail.com",
Name: "Andrew ehab",
Uni: "Alexandria faculty of medicine",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "inc",
In: "1"
},
{
TimeStamp: "2020/10/22 11:03:17 PM GMT+2",
Email: "anglo.ehab7@gmail.com",
Name: "Anglo ehab Sabry Nabih",
Uni: "Faculty of Science",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "inc",
In: "1"
},
{
TimeStamp: "2020/10/23 2:00:38 PM GMT+2",
Email: "antonyamgad24@gmail.com",
Name: "Antony Amgad Millad Fahim",
Uni: "Dentistry - Arab Academy for science, technology and maritime transport",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "inc",
In: "1"
},
{
TimeStamp: "2020/10/23 3:46:36 AM GMT+2",
Email: "basel.radwan21@gmail.com",
Name: "Basel sameh radwan",
Uni: "Commerce , English section",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "",
Email: "",
Name: "Fady onsimos fawzy",
Uni: "Faculty of Dentistry",
Gender: "",
Ipledge: "",
Dafe3: "T",
field8: "",
NForm: "N",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/23 4:56:45 AM GMT+2",
Email: "ferrofouad@gmail.com",
Name: "Fares fouad Mohammed",
Uni: "Faculty of commerce",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/23 4:09:50 AM GMT+2",
Email: "fareshamouda81@gmail.com",
Name: "Fares hamouda aly",
Uni: "Economics and political sc alexandria un",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "inc",
In: "1"
},
{
TimeStamp: "",
Email: "",
Name: "Fares Muhamed Abdelaziz",
Uni: "",
Gender: "Male",
Ipledge: "",
Dafe3: "",
field8: "",
NForm: "N",
Incomplete: "inc",
In: "1"
},
{
TimeStamp: "2020/10/23 12:33:35 AM GMT+2",
Email: "galalyasser74@gmail.com",
Name: "Galal Yasser Hassan",
Uni: "Faculty of physical education",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/22 10:43:02 PM GMT+2",
Email: "georgekamil91@gmail.com",
Name: "George kamil lotfy gaballah",
Uni: "Faculty of Political sc",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/22 10:50:42 PM GMT+2",
Email: "H.A.ATYA@student.aast.edu",
Name: "Habiba Ayman Hamad",
Uni: "AAST",
Gender: "Female",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "",
Email: "",
Name: "Hazem Fathi Mohamed",
Uni: "AAST Engineering",
Gender: "",
Ipledge: "",
Dafe3: "T",
field8: "",
NForm: "N",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/23 2:23:35 AM GMT+2",
Email: "hazem.m.abdulla@gmail.com",
Name: "Hazem mohamed abdallah",
Uni: "Faculty of engineering Alexandria university",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/22 10:45:10 PM GMT+2",
Email: "hishamsaad0@gmail.com",
Name: "Hisham Saad",
Uni: "Faculty of Engineering",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/22 10:53:44 PM GMT+2",
Email: "hossamashraf710@gmail.com",
Name: "Hossam Ashraf Ahmed Mohamed Shaybon",
Uni: "Faculty Of Engineering, Alexandria University",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/22 10:56:32 PM GMT+2",
Email: "hussam29hassan@gmail.com",
Name: "hussam hassan",
Uni: "faculty of engineering",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "inc",
In: "1"
},
{
TimeStamp: "2020/10/22 10:15:21 PM GMT+2",
Email: "islam27md123@gmail.com",
Name: "Islam ahmed",
Uni: "Faculty of law",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "inc",
In: "1"
},
{
TimeStamp: "",
Email: "jassermohamed20@gmail.com",
Name: "Jasser Mohamed Kassem",
Uni: "Faculty of Commerce English section",
Gender: "Male",
Ipledge: "",
Dafe3: "T",
field8: "",
NForm: "N",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/22 10:14:43 PM GMT+2",
Email: "johneassignments@gmail.com",
Name: "John Emad Kamal Aziz",
Uni: "Faculty of Engineering",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/22 10:22:43 PM GMT+2",
Email: "karimwarda2272000@gmail.com",
Name: "Karim yasser warda",
Uni: "Faculty of fine arts architecture departement alexandria university",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/22 11:30:58 PM GMT+2",
Email: "ksabry34@gmail.com",
Name: "Khaled Mohamed Sabry",
Uni: "Faculty of science-IMAC Department",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "",
Email: "",
Name: "Khaled Saeed",
Uni: "",
Gender: "Male",
Ipledge: "",
Dafe3: "T",
field8: "",
NForm: "N",
Incomplete: "inc",
In: "1"
},
{
TimeStamp: "2020/10/22 11:12:39 PM GMT+2",
Email: "kirolosatef59@gmail.com",
Name: "Kirolos Atef william",
Uni: "Faculty of commerce english section",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/23 12:02:06 AM GMT+2",
Email: "mahermimo18@yahoo.com",
Name: "Maher Tarek shaban",
Uni: "Faculty of law english department",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/23 11:40:32 AM GMT+2",
Email: "mahmoudahnedhassanin22@gmail.com",
Name: "Mahmoud Ahmed Hasanain",
Uni: "Medecine Alex univeristy",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "inc",
In: "1"
},
{
TimeStamp: "2020/10/22 11:32:26 PM GMT+2",
Email: "mahmoudalshemy.3@gmail.com",
Name: "Mahmoud ElSheemy",
Uni: "Faculty of Engineering Alexandria University",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "inc",
In: "1"
},
{
TimeStamp: "",
Email: "mahmoudhemdan87@yahoo.com",
Name: "Mahmoud Hemdan",
Uni: "",
Gender: "",
Ipledge: "",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "inc",
In: "1"
},
{
TimeStamp: "2020/10/23 10:22:15 AM GMT+2",
Email: "mahmoudsolyman82@gmail.com",
Name: "Mahmoud Solyman Mohamed Ibrahim",
Uni: "Faculty of Engineering Alex University",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/22 10:41:11 PM GMT+2",
Email: "malak.raaof664@gmail.com",
Name: "Malak Raaof Rizkallh Saad Rizkallh",
Uni: "AASTMT Engineering & Technology",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/23 10:05:38 AM GMT+2",
Email: "mariham.wael@gmail.com",
Name: "Marihan Wael Mohamed",
Uni: "College of pharmacy at Arab Academy for Science, Technology and Maritime",
Gender: "Female",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/22 11:30:35 PM GMT+2",
Email: "Mana99elsharkawy@gmail.com",
Name: "Marwan amr elsharkawy",
Uni: "Faculty of science",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/22 11:54:56 PM GMT+2",
Email: "assaadnemrassaad@gmail.com",
Name: "Marwan Asaad Darwish",
Uni: "Egoth",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/23 12:07:25 PM GMT+2",
Email: "mazenwalid6666@gmail.com",
Name: "Mazen Walid Mahmoud ahmed",
Uni: "Faulty of engineering Alexandria university",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/23 12:15:37 AM GMT+2",
Email: "mennaabouzaid710@gmail.com",
Name: "Menna ahmed abouzaid",
Uni: "IMAC (Faculty of science)",
Gender: "Female",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/22 10:20:54 PM GMT+2",
Email: "merihanibrahim88@gmail.com",
Name: "Merihan ibrahim mohamed",
Uni: "College of language and communication AAST",
Gender: "Female",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/22 11:02:05 PM GMT+2",
Email: "Merisslam123@gmail.com",
Name: "Merna Islam",
Uni: "AAST",
Gender: "Female",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/23 12:07:02 AM GMT+2",
Email: "moatasem.sherif1@gmail.com",
Name: "Moatasem Sherif Osman",
Uni: "Alexandria University faculty of literature",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "inc",
In: "1"
},
{
TimeStamp: "2020/10/22 10:18:48 PM GMT+2",
Email: "moayadeldin@gmail.com",
Name: "Moayadeldin Tamer Taymour",
Uni: "Egypt-Japan University of Science and Technology",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "inc",
In: "1"
},
{
TimeStamp: "",
Email: "mohabalaa74@gmail.com",
Name: "Mohab alaa mohamed",
Uni: "Faculty of Commerce English section",
Gender: "Male",
Ipledge: "",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/23 12:58:31 AM GMT+2",
Email: "mohamedmego570@gmail.com",
Name: "Mohamed abdel megid ahmed",
Uni: "Faculty of Computers and Information Technology-EELU",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/23 2:27:18 AM GMT+2",
Email: "mohamed12farouk@gmail.com",
Name: "Mohamed Ahmed Farouk",
Uni: "",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "inc",
In: "1"
},
{
TimeStamp: "2020/10/23 2:19:53 AM GMT+2",
Email: "mohamed21102000@gmail.com",
Name: "Mohamed Ahmed Osama Hegazy",
Uni: "Faculty of engineering Alexandria University",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "inc",
In: "1"
},
{
TimeStamp: "",
Email: "mohamed.akram.petro@gmail.com",
Name: "Mohamed Akram Abd-Elfatah Mohamed",
Uni: "",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "inc",
In: "1"
},
{
TimeStamp: "2020/10/23 12:39:05 AM GMT+2",
Email: "mohameda.hanfi@gmail.com",
Name: "Mohamed alaa hanafi",
Uni: "Faculty of fine arts architecture department",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "inc",
In: "1"
},
{
TimeStamp: "",
Email: "Abogaball22@gmail.com",
Name: "Mohamed amr abdelaal Elbehairy",
Uni: "Faculty of Commerce English section",
Gender: "Male",
Ipledge: "",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/22 10:19:38 PM GMT+2",
Email: "mohamedmero2001@gmail.com",
Name: "Mohamed Amr Aly",
Uni: "Faculty of engineering",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "inc",
In: "1"
},
{
TimeStamp: "2020/10/23 12:29:00 AM GMT+2",
Email: "moshaalan16@gmail.com",
Name: "Mohamed ayman shaalan",
Uni: "Faculty of commerce English section",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "",
Email: "",
Name: "Mohamed Fakhry Elsayed",
Uni: "Faculty of pharmacy",
Gender: "",
Ipledge: "",
Dafe3: "T",
field8: "",
NForm: "N",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/22 10:16:04 PM GMT+2",
Email: "mohamedhedar176@gmail.com",
Name: "mohamed hedar",
Uni: "faculty of commerce - English section",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "",
Email: "mohamedhussamalnamer123@gmail.com",
Name: "Mohamed Hossam Eldin Mamdouh",
Uni: "",
Gender: "Male",
Ipledge: "",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "inc",
In: "1"
},
{
TimeStamp: "2020/10/23 11:23:35 AM GMT+2",
Email: "mohamedmidi201049@gmail.com",
Name: "Mohamed Ibrahim Mohamed Abdelaziz",
Uni: "Faculty of engineering",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/23 5:14:38 PM GMT+2",
Email: "medo.ihab19@gmail.com",
Name: "Mohamed Ihab Hassan",
Uni: "International Business and Humanities at Egypt Japan University of Science and Technology",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "",
Email: "mohamedeltalawy2000@gmail.com",
Name: "mohamed magdy talawy",
Uni: "",
Gender: "",
Ipledge: "",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "",
Email: "mohamedngla@gmail.com",
Name: "Mohamed morad ngla",
Uni: "Faculty of physical Education and sports",
Gender: "Male",
Ipledge: "",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/22 10:26:38 PM GMT+2",
Email: "mmtaman20@gmail.com",
Name: "Mohamed Mostafa Taman",
Uni: "Faculty of Engineering at Alexandria University",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "inc",
In: "1"
},
{
TimeStamp: "2020/10/23 10:03:39 AM GMT+2",
Email: "mohamedmoustafa0109@gmail.com",
Name: "Mohamed Moustafa Badran",
Uni: "Faculty of Engineering at Alexandria University",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/22 11:57:33 PM GMT+2",
Email: "mohamednaderr01@gmail.com",
Name: "Mohamed Nader",
Uni: "Faculty of commerce english department",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "inc",
In: "1"
},
{
TimeStamp: "",
Email: "mohamedrragab@hotmail.com",
Name: "Mohamed Ragab",
Uni: "Faculty of Commerce, English Department",
Gender: "Male",
Ipledge: "",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/22 10:16:26 PM GMT+2",
Email: "mohamedreda7900@gmail.com",
Name: "Mohamed Reda El-Sayed",
Uni: "Faculty of Engineering - Alexandria University",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/22 10:15:39 PM GMT+2",
Email: "m7mdsa3d01@gmail.com",
Name: "Mohamed Saad Abou Galala",
Uni: "Faculty of Arts",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "",
Email: "",
Name: "Mohamed Sherif foad",
Uni: "EELU BA",
Gender: "",
Ipledge: "",
Dafe3: "T",
field8: "",
NForm: "N",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/23 2:57:40 PM GMT+2",
Email: "Mohamedshreef632@gmail.com",
Name: "Mohamed shrief elsaid",
Uni: "Faculty of law",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "",
Email: "",
Name: "Mohamed Tamer",
Uni: "police academy",
Gender: "",
Ipledge: "",
Dafe3: "T",
field8: "",
NForm: "N",
Incomplete: "",
In: "1"
},
{
TimeStamp: "",
Email: "mt9342401@gmail.com",
Name: "Mohamed tharwat khamis",
Uni: "",
Gender: "",
Ipledge: "",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "inc",
In: "1"
},
{
TimeStamp: "2020/10/22 11:07:40 PM GMT+2",
Email: "mohamedwaled83@gmail.com",
Name: "Mohamed waled sohel",
Uni: "Faculty of science-SIM",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/23 1:51:52 AM GMT+2",
Email: "mohanad1967@yahoo.com",
Name: "Mohanad abdalla",
Uni: "Faculty of computer and data sciences",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "inc",
In: "1"
},
{
TimeStamp: "",
Email: "",
Name: "Mohmaed Elsayed Mohamed Farid",
Uni: "",
Gender: "",
Ipledge: "",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/23 1:55:30 PM GMT+2",
Email: "hamojokerfc@gmail.com",
Name: "Mohmed Ahmed Fouad Ibrahim",
Uni: "Faculty of education",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "inc",
In: "1"
},
{
TimeStamp: "",
Email: "moamenromaih101@gmail.com",
Name: "Mo'men Elsayed Mahmoud Elsayed Romaih",
Uni: "faculty of computer sc",
Gender: "",
Ipledge: "",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/22 10:48:42 PM GMT+2",
Email: "monahassan495@gmail.com",
Name: "Mona hassan Mohamed",
Uni: "Faculty of pharmacy, Alexandria university",
Gender: "Female",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "inc",
In: "1"
},
{
TimeStamp: "2020/10/22 10:45:53 PM GMT+2",
Email: "monicaamourad@gmail.com",
Name: "Monica Mourad Ghaly",
Uni: "Faculty of fine arts decor department",
Gender: "Female",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/22 10:26:40 PM GMT+2",
Email: "mostafameawed@gmail.com",
Name: "Mostafa Ahmed Meawed",
Uni: "Aast",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "",
Email: "mostafaelaini444@gmail.com",
Name: "Mostafa Gaber",
Uni: "",
Gender: "",
Ipledge: "",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "inc",
In: "1"
},
{
TimeStamp: "2020/10/22 11:32:14 PM GMT+2",
Email: "mostafawalid120@gmail.com",
Name: "Mostafa walid mostafa younis",
Uni: "Eelu",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "",
Email: "mohamedhesham91131@yahoo.com",
Name: "Muhammed Hesham Hemaya",
Uni: "Faculty Of Commerce",
Gender: "",
Ipledge: "",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "inc",
In: "1"
},
{
TimeStamp: "2020/10/22 10:29:40 PM GMT+2",
Email: "nadafaham8@gmail.com",
Name: "Nada Walid Abd El Ghany",
Uni: "AAST Dentistry",
Gender: "Female",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/23 3:27:00 AM GMT+2",
Email: "nadineessam386@gmail.com",
Name: "Nadine Essam Ahmed",
Uni: "Business administration",
Gender: "Female",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "",
Email: "",
Name: "Nour Saleh",
Uni: "Faculty Of Commerce - English section",
Gender: "",
Ipledge: "",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/23 12:08:26 AM GMT+2",
Email: "omarahmed9501@gmail.com",
Name: "Omar Ahmed Ramadan",
Uni: "Faculty of Literature",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/22 11:06:39 PM GMT+2",
Email: "oalaa1905@gmail.com",
Name: "Omar alaa azab",
Uni: "Faculty of commerce English section",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "inc",
In: "1"
},
{
TimeStamp: "2020/10/23 1:55:38 AM GMT+2",
Email: "omar2001.mrkosha@gmail.com",
Name: "Omar Alaa Ezzat",
Uni: "Dentistry AAST",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "",
Email: "",
Name: "Omar Ehab",
Uni: "",
Gender: "Male",
Ipledge: "",
Dafe3: "",
field8: "",
NForm: "N",
Incomplete: "",
In: "1"
},
{
TimeStamp: "",
Email: "gamers19x@gmail.com",
Name: "omar hassan mohamed saber abd el azeem el hapepe",
Uni: "Faculty Of Engineering",
Gender: "",
Ipledge: "",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/23 11:36:17 AM GMT+2",
Email: "omarelsabaawy77@gmail.com",
Name: "Omar mohamed elsabaawy",
Uni: "Computing and data science",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/22 10:15:30 PM GMT+2",
Email: "omarm2659@gmail.com",
Name: "Omar Mohamed Mearag Ibrahim",
Uni: "Alexandria university faculty of engineering",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/23 4:29:44 PM GMT+2",
Email: "osamy700@gmail.com",
Name: "Omar samy elsayed",
Uni: "Faculty of engineering alexandria",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/22 10:25:31 PM GMT+2",
Email: "omniaelsawy79@yahoo.com",
Name: "Omnia Ahmed Elsawy",
Uni: "AASTMT faculty of Dentistry",
Gender: "Female",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/22 10:58:30 PM GMT+2",
Email: "ragaiawad@gmail.com",
Name: "Ragai Ahmed AbdelFattah Awad",
Uni: "Alexandria University, Faculty of Engineering",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/23 12:42:31 AM GMT+2",
Email: "Rudinaehab@gmail.com",
Name: "Rudina Ehab Abdallah",
Uni: "Filiere des Langues Appliquees",
Gender: "Female",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/22 10:21:52 PM GMT+2",
Email: "elsaheregypt2002@yahoo.com",
Name: "Saher tarek anwar zayed",
Uni: "Faculty of Engineering",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/22 10:50:43 PM GMT+2",
Email: "salmadarwish71@gmail.com",
Name: "Salma Mahmoud Darwish",
Uni: "Faculty of Dentistry, Alexandria University",
Gender: "Female",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/22 10:23:18 PM GMT+2",
Email: "samarbadawy4@gmail.com",
Name: "Samar Mohamed Badawy Elsadek",
Uni: "Faculty of Engineering",
Gender: "Female",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/23 1:57:17 AM GMT+2",
Email: "samyhany226@gmail.com",
Name: "Samy hany Elesawy",
Uni: "Sadat academy for management siences",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/22 11:32:53 PM GMT+2",
Email: "samy.shaawat@gmail.com",
Name: "Samy moustafa samy",
Uni: "Ejust",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "",
Email: "sarahAssaad9999@gmail.com",
Name: "Sarah Assad Ahmed",
Uni: "Faculty Of Dentistry AAST",
Gender: "Female",
Ipledge: "",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/23 1:53:34 AM GMT+2",
Email: "shehabh224@gmail.com",
Name: "Shehab hassan ahmed",
Uni: "Faculty of commerce english section",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/23 12:06:12 AM GMT+2",
Email: "Sherifmohamedsf@gmail.com",
Name: "Sherif Mohamed elsayed",
Uni: "Medicine",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/23 12:01:52 AM GMT+2",
Email: "sohailasalama889@gmail.com",
Name: "Sohaila mohamed salama",
Uni: "Faculty of engineering Alexandria university",
Gender: "Female",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "inc",
In: "1"
},
{
TimeStamp: "2020/10/22 10:19:20 PM GMT+2",
Email: "tarek.20005056@gmail.com",
Name: "Tarek Gamal Ahmed Bekhit",
Uni: "Pharmacy",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "",
Email: "verenasafwat40@gmail.com",
Name: "Verena Safwat",
Uni: "Business Academy",
Gender: "Female",
Ipledge: "",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/23 9:06:46 AM GMT+2",
Email: "waelwafik9@gmail.com",
Name: "Wafik Wael",
Uni: "Faculty of Engineering, Alexandria University",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/22 11:06:13 PM GMT+2",
Email: "waleed108.wk@gmail.com",
Name: "walid khaled safwat",
Uni: "faculty of commerce english section",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/22 10:45:15 PM GMT+2",
Email: "yahia.saeeg12@gmail.com",
Name: "Yahia saeed Mohamed",
Uni: "Faculty of dentistry",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "inc",
In: "1"
},
{
TimeStamp: "2020/10/23 1:48:52 AM GMT+2",
Email: "yassermagdy2001@gmail.com",
Name: "Yasser magdy abdelaziz",
Uni: "AAST",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/23 1:45:16 PM GMT+2",
Email: "yehiasalem7@gmail.com",
Name: "Yehia ahmed farouk ahmed salem",
Uni: "College of international transportation and logistics",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "",
Email: "yehia.osama1911@gmail.com",
Name: "Yehia Osama AbuElezz",
Uni: "",
Gender: "",
Ipledge: "",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/22 10:15:00 PM GMT+2",
Email: "yousef.shhawy@gmail.com",
Name: "Yousef Mahmoud Elshahawy",
Uni: "Faculty of Medicine",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/23 7:12:05 AM GMT+2",
Email: "youssef_joe26@yahoo.com",
Name: "Youssef Abd El Hady",
Uni: "Faculty of Sports education",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "inc",
In: "1"
},
{
TimeStamp: "",
Email: "",
Name: "Youssef Ahmed",
Uni: "",
Gender: "Male",
Ipledge: "",
Dafe3: "T",
field8: "",
NForm: "N",
Incomplete: "inc",
In: "1"
},
{
TimeStamp: "",
Email: "",
Name: "Youssef Ahmed Ibrahim",
Uni: "Eng. Astrkhan Russia",
Gender: "Male",
Ipledge: "",
Dafe3: "T",
field8: "",
NForm: "N",
Incomplete: "inc",
In: "1"
},
{
TimeStamp: "2020/10/23 2:16:00 AM GMT+2",
Email: "yamr17996@gmail.com",
Name: "Youssef Amr Roshdy",
Uni: "Arab Academy",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/23 12:11:31 AM GMT+2",
Email: "youssefihab2001@gmail.com",
Name: "Youssef Ihab AbdelRaouf",
Uni: "Faculty Of Commerce - English session",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/23 1:49:16 AM GMT+2",
Email: "youssef.dawoud@hotmail.com",
Name: "Youssef Mohamed Dawoud",
Uni: "Faculty of Engineering",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "inc",
In: "1"
},
{
TimeStamp: "2020/10/23 12:20:58 AM GMT+2",
Email: "youssefnedal1@gmail.com",
Name: "Youssef nedal Elsayed",
Uni: "Faculty of sports education",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "",
Email: "youss2fsal27@gmail.com",
Name: "Youssef saleh",
Uni: "",
Gender: "",
Ipledge: "",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/22 11:00:41 PM GMT+2",
Email: "zeyad.ben.atteya@gmail.com",
Name: "Zeyad Ahmed Atteya",
Uni: "Faculty of managment and financial science",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "",
Email: "",
Name: "Zeyad Hesham",
Uni: "",
Gender: "",
Ipledge: "",
Dafe3: "T",
field8: "",
NForm: "N",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/23 4:31:17 AM GMT+2",
Email: "Zeyadkkd@gmail.com",
Name: "Zeyad Mahmoud Basyony El-akkad",
Uni: "Faculty of commerce",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "",
Email: "ziadmedhat61@gmail.com",
Name: "Zeyad Medhat",
Uni: "",
Gender: "Male",
Ipledge: "",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "inc",
In: "1"
},
{
TimeStamp: "2020/10/23 2:09:14 PM GMT+2",
Email: "zeyad.zakaria01@gmail.com",
Name: "Zeyad Zakaria Mohamed Zakaria",
Uni: "Faculty of engineering",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "",
Email: "ziademadelhalwany@gmail.com",
Name: "Ziad Emad Elhalwany",
Uni: "",
Gender: "Male",
Ipledge: "",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "2020/10/22 11:03:12 PM GMT+2",
Email: "ziad.saidmohamed@gmail.com",
Name: "Ziad said mohamed",
Uni: "Faculty of commerce - English section",
Gender: "Male",
Ipledge: "Yes",
Dafe3: "T",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
},
{
TimeStamp: "",
Email: "",
Name: "Ahmed ElBakri",
Uni: "AAST",
Gender: "",
Ipledge: "",
Dafe3: "",
field8: "",
NForm: "",
Incomplete: "",
In: "1"
}
]    
}

},
methods:{
  BackBlazeDataRetrive()
  {
      var DownloadUrl = "https://f000.backblazeb2.com";
      var BucketName = "DataPersonal";
      for (let Graduate = 0; Graduate < this.GraduateDataToUpload.length ; Graduate++) {
          var FileName = this.GraduateDataToUpload[Graduate].Name;
          FileName = FileName + '.jpg'
          var Url = DownloadUrl + "/file/" + BucketName + "/" + FileName;
          var RealName = this.GraduateDataToUpload[Graduate].Name.toUpperCase()
          var GraduateObject = {
              Name: RealName,
              PicUrl: Url,
              College: this.GraduateDataToUpload[Graduate].Uni
          }
          this.GraduateData.push(GraduateObject);
      }

  }
},
async mounted()
{
  this.BackBlazeDataRetrive();
//   AWS.config.region = 'us-east-2'; // Region
//   AWS.config.credentials = new AWS.CognitoIdentityCredentials({
//     IdentityPoolId: 'us-east-2:11543c6e-d9de-4ba6-bfef-d2169b092165',
//   });
//   AWS.config.apiVersions = {
//     cognitoidentity: '2014-06-30',
//   // other service API versions
// };
// var params = {
//   AllowUnauthenticatedIdentities: true, /* required */
//   IdentityPoolName: 'YearBook', /* required */
//   AllowClassicFlow: true,
//   CognitoIdentityProviders: [
//     {
//       ClientId: '2na2smyma7moudyanasyahooo',
//       ProviderName: 'cognito-idp.us-east-2.amazonaws.com/us-east-2_ana2smyma7moudyanas',
//       ServerSideTokenCheck: true || false
//     },
//     /* more items */
//   ],
//   DeveloperProviderName: 'YearBook19Access',
//   IdentityPoolTags: {
//     '<TagKeysType>': 'STRING_VALUE',
//     /* '<TagKeysType>': ... */
//   },
//   OpenIdConnectProviderARNs: [
//     'STRING_VALUE',
//     /* more items */
//   ],
//   SamlProviderARNs: [
//     'STRING_VALUE',
//     /* more items */
//   ],
//   SupportedLoginProviders: {
//     '<IdentityProviderName>': 'STRING_VALUE',
//     /* '<IdentityProviderName>': ... */
//   }
// };
// var cognitoidentity = new AWS.CognitoIdentity();
// cognitoidentity.createIdentityPool(params ,function (err, data) {
//   if (err) console.log(err, err.stack); // an error occurred
//   else     console.log(data);           // successful response
// });

//   var albumBucketName = "victoriacollegeclass19gradphotoyearbook";
//   var s3 = await new AWS.S3({
//     apiVersion: '2014-06-30',
//   params: {Bucket: albumBucketName}
//   });
//   var albumName = "Grads";
//   var albumPhotosKey = encodeURIComponent(albumName) + '/';
//   console.log(s3);
//   let self = this;
//   await s3.listObjects({Prefix: albumPhotosKey}, async function(err,data){
//     if(err)
//     {
//       alert('There was an error viewing your album: ' + err.message);
//     }
//     var href = this.request.httpRequest.endpoint.href;
//     var bucketUrl = href + albumBucketName + '/';
//      await data.Contents.map(function(photo){
//        var photoKey = photo.Key;
//       var photoUrl = bucketUrl + encodeURIComponent(photoKey);
//       self.PicsUrl.push(photoUrl)
//       console.log(self.PicsUrl);
//       // this.PicsUrl.push(photoUrl);
//       // console.log(photoKey);
//     })
//             var db = firebase.firestore();
//             var dbRef = db.collection("Graduates").get();
//             await dbRef.then((query) => {
//             query.forEach((doc) => {
//               var Userdata = doc.data();
//               self.UserData.push(Userdata);
//           })
//         })
//         for (let i = 0; i < self.UserData.length; i++) {
//           console.log("The 5ara is: "+self.PicsUrl[i]);
//             var DataDummy = {
//               PicsUrl: self.PicsUrl[i+1],
//               UserData: self.UserData[i]      
//               }
//               self.GraduateData.push(DataDummy);
//             }
//   })
//   console.log("2abl el firebase el sowar 2heeh: "+self.PicsUrl);
//   // console.log(self.UserData);
//   console.log("This Data is: "+ this.GraduateData);
}
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto&family=Source+Sans+Pro&display=swap');
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
    height: 450px;
    color: black;
    font-family: 'Source Sans Pro', serif;
    font-weight: bold;
    font-size: 1rem;
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
    height: 280px;
    background-color: black;
    margin-bottom: 0px;
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
    height: 170px;
    width: 150px;
    border-radius: 10px;
    align-self: center;
    margin-top: 10px;
    object-fit: contain;
    object-position: center;
    /* background-color: red; */
}
.StudentName{   
    color: black;
    font-family: 'Source Sans Pro', serif;
    font-weight: bold;
    align-self: center;
    margin-bottom: 0px;
    margin-top: 5px;
    font-size: 1rem;
}
.Images{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 1000px;
    height: 640px;
    margin-left: 1%;
    /* background-color: green; */
    overflow-y: scroll;
    margin-top: 20px;
}
.Container{
    display: flex;
    flex-direction: row;
    overflow-y: hidden;
}
h3{
    align-self: center;
    font-family: 'Perpetua';
    font-weight: normal;
    /* color: #B49221; */
    color: black;
    font-size: 1.8rem;
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
h2{
  font-family: 'Roboto';
}
</style>