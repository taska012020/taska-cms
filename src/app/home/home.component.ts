import { Component, OnInit } from '@angular/core';

import { Angular2CsvModule } from 'angular2-csv';

declare var firebase ;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  attedanceList = [] ;

  options = {
    title: 'Attendance List',
    fieldSeparator: ',',
     quoteStrings: '"',
     decimalseparator: '.',
     showLabels: true,
     showTitle: true,
     useBom: true,
     headers: ['Name', 'Surname', 'Id' , "Contact number" , "Address" , "Disability" , "Gender" , "Race" , "Service" , "Date"]
   
  }

  constructor() { 
    var userId =firebase.auth().currentUser.uid ;
    firebase.database().ref("DailyUsers/"+userId).on('value', (data: any) => {
      var List = data.val();
        console.log(data.val());
        var keys: any = Object.keys(List);
        for(var i = 0; i < keys.length; i++){
          var k = keys[i];
          let obj ={
             
              name: List[k].Name,
              surname: List[k].Surname,
              id: k,
              contactno: List[k].Contact_Number,
              address: List[k].Address,
              disability: List[k].Disability,
              gender: List[k].Gender,
              race: List[k].Race,
              service: List[k].Service,
              date:List[k].date
          }
          this.attedanceList.push(obj) ;
          console.log(this.attedanceList)
        }
       
      })
  }

  ngOnInit(): void {
  }

}
