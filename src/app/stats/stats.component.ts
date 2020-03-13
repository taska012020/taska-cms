import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { DataService} from "../data.service"

declare var firebase;

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  chart = []; // This will hold our chart info
  @ViewChild('lineChart', { static: true }) private chartRef;
  canvas: any;
  ctx: any;
  
  unemploymentcanvas: any;
  unemploymentctx: any;

  gendercanvas:any  ;
  genderctx :any ;



  temparry = [];
  CountYes = 0;
  CountNo = 0;

  attedanceList = [];
  testArray = [] ;
  businessList = [] ;
  countRegisterd= 0 ;
  countUnRegisted = 0 ;

  // variable count 
  countCopy = 0;
  countPrint = 0;
  countEmail = 0;
  countLaminating = 0;
  countInternetAccess = 0 ;
  countScanning  = 0 ;
  countMale = 0 ;
  countFemale = 0 ;
  countOther = 0


  constructor( public data: DataService) {
    
    


}


  ngAfterViewInit() {
  
    this.chartJsForComputerLetiracy();
      this.businessChart() ;
     this.genderPieChart() ;

  }

  ngOnInit() {


  }



  chartJsForComputerLetiracy() {
    this.data.getList().then((res:any)=>{
      //console.log(res)
      this.attedanceList =res;
      console.log(this.attedanceList) ;
      for (let index = 0; index < this.attedanceList.length; index++) {
            if(this.attedanceList[index].service == "Emailing"){
              this.countEmail = this.countEmail + 1 ;
            } else if (this.attedanceList[index].service == "Copy"){
              this.countCopy =this.countCopy + 1 ;
            } else if (this.attedanceList[index].service == "Printing"){
              this.countPrint =this.countPrint + 1 ;
            }else if (this.attedanceList[index].service == "Laminating"){
              this.countLaminating = this.countLaminating + 1
            }else if (this.attedanceList[index].service == "Scanning"){
              this.countScanning = this.countScanning + 1 ;
            }
        
      }

   

     this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    let chart = new Chart(this.ctx, {
      type: 'bar',
      data: {
        labels: ["Copy", "Printing", "Email", "Laminating" , "Scanning", "Internet Access"
     ],
        datasets: [
          {
            data: [this.countCopy/2 , this.countPrint/2 , this.countEmail/2 , this.countLaminating/2 , this.countScanning/2 ,this.countInternetAccess/2],

            backgroundColor: [
              "#d63447" ,
              "#f57b51" ,
              "#413c69",
              "#f688bb",
              "#5b8c5a" ,
              "#feb72b"

            ],
            fill: true
          },

        ]
      },

    });
    })
   
    
  
  }


  businessChart() {

    this.data.getBusiness().then((res:any)=>{
     
      this.businessList =res ;

      for (let index = 0; index < this.businessList.length; index++) {
       if(this.businessList[index].registered == "Yes"){
         this.countRegisterd =this.countRegisterd + 1 ;

       }else {
        this.countUnRegisted =this.countUnRegisted + 1
       }
        
      }

      this.unemploymentcanvas = document.getElementById('unemploymentChart');
      this.unemploymentctx = this.unemploymentcanvas.getContext('2d');
      let chart = new Chart(this.unemploymentctx, {
        type: 'pie',
        data: {
          labels: ["Registered", "Unregistered",],
          datasets: [
            {
              data: [this.countRegisterd,this.countUnRegisted],
  
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
              ],
              fill: true
            },
  
          ]
        },
  
      });
      
    })
   
  }

  genderPieChart(){
    this.data.getList().then((res:any)=>{
      
      this.testArray =res;
      
      for (let index = 0; index < this.testArray.length; index++) {
          console.log(this.attedanceList[index].gender.toLowerCase()) ;
            if(this.testArray[index].gender.toLowerCase() == "male"){
              this.countMale = this.countMale + 1 ;
            } else if (this.testArray[index].gender.toLowerCase() == "female"){
              console.log("female 111")
              this.countFemale =this.countFemale + 1 ;
            } 
        
      }

   
      console.log(this.countFemale)
     this.gendercanvas = document.getElementById('genderChart');
      this.genderctx = this.gendercanvas.getContext('2d');
      let chart = new Chart(this.genderctx, {
      type: 'pie',
      data: {
        labels: ["Female", "Male", "Other"
     ],
        datasets: [
          {
            data: [this.countFemale/2 , this.countMale/2 , this.countOther/   2],

            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.8)",
              "rgba(54, 162, 235, 0.2)",
              

            ],
            fill: true
          },

        ]
      },

    });
    })
  }

}