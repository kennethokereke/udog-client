import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Events } from 'ionic-angular';

import * as firebase from 'firebase'

/*
  Generated class for the FireProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FireProvider {

	public user : Observable<any>

  constructor(public http: Http, public events: Events) {
    console.log('Hello FireProvider Provider');
  }

  async request(data, walker_id, uid) {

  	let requestKey = firebase.database().ref().push().key

  	const request = {}
    request['/requests/' + '101010' + '/' + requestKey ] = data
    request['/walk-requests/' + uid + '/' + requestKey] = data

    return firebase.database().ref().update(request)
    
  }

  async createUser(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((val) => {
        return val
      })
      .catch((err) => {
        console.log(err)
      })
  }

  async signIn(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((val) => {
        console.log(val)

      })
      .catch((err) => {
        console.log(err)
      })
  }

  async requestToWalker(_id, client_id, walker_id, petsData) {
    localStorage.setItem('setRequestID',JSON.stringify(_id));
    firebase.database().ref('/requestToWalker')
    .child(client_id).child(walker_id).push({
        _id: _id,
        client_id : client_id,
        walker_id : walker_id,
        pets : petsData,
        msgText : 'Your dog walk request was received.',
        msgTitle : 'Congratulations!',
        status : 'pending'
    }).then(res => {
      this.requestNotification(client_id,walker_id);
      //this.events.publish('displayNotification',client_id,walker_id);
    });
  }

  async requestNotification(client_id, walker_id) {
    let ref = firebase.database().ref('/requestToWalker').child(client_id).child(walker_id);
    ref.on('value',(snep) => {
      console.log('requestNotification',snep.val());
      let allData = snep.val();
      let metchReq:any;
      for(let tmpkey in allData){
        //console.log('tmpkey',tmpkey);
        if(allData[tmpkey]._id == JSON.parse(localStorage.getItem('setRequestID'))){
          metchReq = allData[tmpkey];
        }
      }
      console.log('metchReq',metchReq);
      //console.log('walkerID',metchReq.walker_id);

      let firestore = firebase.firestore();

      firestore.collection('walkers').where('walker_id', '==', `${metchReq.walker_id}`).get()
      .then((snapshot) => {
          snapshot.forEach((doc) => {
            this.events.publish('requestToWalker',doc.data(),metchReq);
          });
      }).catch((err) => console.log(err));
    });
  }

  getWalkerPosition(walker_id){

    return new Promise((resolve) => {

      let ref = firebase.database().ref('/walkerCurrentPosition').child(walker_id);

      ref.once('value',(snep) => {
          //console.log('getWalkerPosition',snep.val());
          resolve(snep.val());
      });

    });
  }

  getAllWalkersPosition(){
    return new Promise((resolve) => {

      let ref = firebase.database().ref('/walkerCurrentPosition');

      ref.once('value',(snep) => {
          //console.log('getWalkerPosition',snep.val());
          resolve(snep.val());
      });

    });
  }

}
