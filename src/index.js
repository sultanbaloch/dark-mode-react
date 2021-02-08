import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function FacebookMedia(profile) {

  profile = {
   date: new Date().toLocaleTimeString(),
   userName: "Sultan",
   profilePic: "https://www.w3schools.com/howto/img_avatar.png",
   title: "Myanmar’s army arrest Aung San Suu Kyi after staging coup",
   imageUrl: "https://www.thenews.com.pk/assets/uploads/updates/2021-02-01/783355_3546484_Myanmar-2_updates.jpg",
   body: "The intervention followed weeks of rising tensions between the military, which ruled the country for nearly five decades, and the civilian government over elections in November last year that Suu Kyi’s National League for Democracy (NLD) party won easily."
 }

 return <div>

   <div className="mediacard">
     <div className="userData" >
       <div className="userImage">
         <img className="userprofile" src={profile.profilePic}></img>
       </div>
       <div className="NameDate">
         <span className="userName">{profile.userName}</span><br />
         <span className="date">{profile.date}</span>
       </div>
     </div>
     <h3>{profile.title}</h3>
     <p>{profile.body}</p>
     <p><img className="image" src={profile.imageUrl}></img></p>
   </div>

 </div>

}

function IslitDark() {

  const [islit, setlit] = useState(true)
  var themeColor = islit ? "lit": "dark"
  function changeTheme() {
    setlit(prev=>{
      return!prev 
    })
  }

  return (
    <div className={`room ${themeColor}`}>
      <h1> this is {themeColor} </h1>
      <button onClick={changeTheme}> changeTheme Color</button>
      <FacebookMedia />
      <FacebookMedia />
      <FacebookMedia />
    </div>
  )
}




ReactDOM.render(<IslitDark />, document.getElementById('root'))
