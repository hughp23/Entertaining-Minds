import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "./config.js";
const storageRef = firebase.storage().ref();
const db = firebase.firestore();

const getHeadshot = async (imgName) => {
  let url = ""
  await storageRef
    .child(`Talent-Headshots/${imgName}`)
    .getDownloadURL()
    .then(_url => {
      url = _url;
    });

    return url;
  }

const updateImgURL = async (doc, imgURL) => {
  console.log('in update')
  await db
    .collection("ourTalent")
    .doc(doc)
    .update({
      imgURL: imgURL,
      dateUpdated: new Date()
    });
}

let promises = [];
let talent = [];
const getOurTalent = async () => {
    await db
      .collection("ourTalent")
      .get()
      .then(snapshot => {
      if (snapshot.empty) {
        return [];
      }
      const data = snapshot.docs.map(doc => {
        return doc.data();
      })
      talent.concat(data);
      return data;
      })
      .then(talent => {
        for (let i = 0; i < talent.length; i++) {
          if (talent[i].imgURL === "") {
            promises.push(getHeadshot(talent[i].imgID));
          }
        }
        return talent;
      })
      .then(newTalent => {
        if(promises.length !== 0) {
        Promise.all(promises).then(imgURLs => {
          for (let i = 0; i < newTalent.length; i++) {
          newTalent[i].imgURL = imgURLs[i];
          updateImgURL(newTalent[i].htmlID, imgURLs[i])
          }
          return newTalent;
      })
    }
    else {
      console.log(newTalent, 'talent before')
      talent = newTalent;
    }
    })
        .catch(err => {
          return err;
        })

    return talent;
}


export { getHeadshot, getOurTalent };
