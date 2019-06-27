import { Component } from '@angular/core';
import { BusinessService } from '../app/business.service';
import Countie from './Countie';
import Town from './Town';
import Communitie from './Communitie';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TownsList';
  // counties: Countie[] ;
  counties: Countie[] ;
  towns:  Town[] ;
  townswithid :Town[] ;
  communities:Communitie[] ;
  communitieswithid :Communitie[] ;
  term : string ;
  selectedRow : Number;
  selectcounties : string

  constructor(private businessservice: BusinessService) {
   }
  ngOnInit() {
    this.readcounties();
    this.readtowns();
    this.readcommunities();
  }
  // Type of entity (counties, towns or communities).
  // Allowed values: 1, 2, 3

  readcounties() {
    this.businessservice.getData("1").subscribe(res => {
      this.counties = res["counties"];
      console.log(res);
    });
  }
  readtowns() {
    this.businessservice.getData("2").subscribe(res => {
      this.towns = res["towns"];
      this.townswithid = res["towns"];
          console.log(res);
    });
  }
   readcommunities() {
    this.businessservice.getData("3").subscribe(res => {
      this.communities = res["communities"];
      this.communitieswithid = res["communities"];
      console.log(res);
    });
  }

  setClickedRow(index) {
    this.selectcounties = index.name ;
    this.selectedRow = index.ID;
     this.towns = [];
    for (var i = 0; i < this.townswithid.length; i++) {
      if (this.townswithid[i].countyID === this.selectedRow) {
        this.towns.push(this.townswithid[i]);
      }
    }
    this.communities = [];
    for (var i = 0; i < this.communitieswithid.length; i++) {
      if (this.communitieswithid[i].countyID === this.selectedRow) {
          this.communities.push(this.communitieswithid[i]);
      }
    }
  }
}
