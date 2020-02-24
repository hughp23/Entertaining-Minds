import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "./config.js";
const storageRef = firebase.storage().ref();

const getHeadshot = async (imgName) => 
  storageRef
    .child(`Talent-Headshots/${imgName}`)
    .getDownloadURL()
    .then(url => {
      return url;
    });

export { getHeadshot };
