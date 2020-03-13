import { Component, OnInit } from '@angular/core'; 
import { DataService} from "../data.service" 

import { Angular2CsvModule } from 'angular2-csv';

@Component({
  selector: 'app-unregistered-business',
  templateUrl: './unregistered-business.component.html',
  styleUrls: ['./unregistered-business.component.css']
})
export class UnregisteredBusinessComponent implements OnInit {
  registeredBusiness = [] ;
  unregisterdBusiness = [] ;

  options = {
    title: 'Registered Business',
    fieldSeparator: ',',
     quoteStrings: '"',
     decimalseparator: '.',
     showLabels: true,
     showTitle: true,
     useBom: true,
     headers: ['Business Name', 'Business Owner', 'Contact' , ]
   
  }
  constructor( public data :DataService) {

      this.data.getBusiness().then((res:any)=>{
        console.log(res)

        for (let index = 0; index <res .length; index++) {
          if(res[index].registered == "Yes"){
            let obj = {
              business:res[index].business ,
              name:res[index].name ,
              contact:res[index].contact ,
             


            }
            this.registeredBusiness.push(obj) ;
            console.log(this.registeredBusiness)

          } else {
            this.unregisterdBusiness.push(res)
          }
          
        }
      })
   }

  ngOnInit(): void {
  }

}
