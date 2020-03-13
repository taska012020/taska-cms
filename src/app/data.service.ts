import { Injectable } from '@angular/core';
declare var firebase;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  attedanceList = [];
  businessList = [] ;

  getList() {
    return new Promise((res, rej) => {
      var userId =firebase.auth().currentUser.uid ;
      firebase.database().ref("DailyUsers/"+userId).on('value', (data: any) => {
        var List = data.val();
        console.log(data.val());
        var keys: any = Object.keys(List);
        for (var i = 0; i < keys.length; i++) {
          var k = keys[i];
          let obj = {
            id: k,
            name: List[k].Name,
            surname: List[k].Surname,
            contactno: List[k].Contact_Number,
            address: List[k].Address,
            disability: List[k].Disability,
            gender: List[k].Gender,
            race: List[k].Race,
            service: List[k].Service,
            date:List[k].date
          }
          this.attedanceList.push(obj)
          console.log(this.attedanceList)
        }
        res(this.attedanceList);

      })

    })
  }

  getGenderGraph(){
    return new Promise((res, rej) => {
      var userId =firebase.auth().currentUser.uid ;
      firebase.database().ref("DailyUsers/"+userId).on('value', (data: any) => {
        var List = data.val();
        console.log(data.val());
        var keys: any = Object.keys(List);
        for (var i = 0; i < keys.length; i++) {
          var k = keys[i];
          let obj = {
            id: k,
            name: List[k].Name,
            surname: List[k].Surname,
            contactno: List[k].Contact_Number,
            address: List[k].Address,
            disability: List[k].Disability,
            gender: List[k].Gender,
            race: List[k].Race,
            service: List[k].Service,
          }
          this.attedanceList.push(obj)
        }
        res(this.attedanceList);

      })

    })
  }


  getBusiness(){

    return new Promise((res, rej) => {
      var userId =firebase.auth().currentUser.uid ;
      console.log(userId)
      firebase.database().ref("Business survey/"+userId).on('value', (data: any) => {
        var List = data.val();
        console.log(data.val());
        var keys: any = Object.keys(List);
        for (var i = 0; i < keys.length; i++) {
          var k = keys[i];
          let obj = {
            id: k,
            registered: List[k].Are_you_registered,
            name:List[k].owner_name ,
            contact:List[k].contact ,
            business:List[k].Business_Name
           
        }
      this.businessList.push(obj)
        }
        res(this.businessList);

      })

    })
  }


}
