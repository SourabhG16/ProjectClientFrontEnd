import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute} from "@angular/router";
import { RouteService } from '../route.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  private obj:any;
  src:any;
  dest:any;
  constructor(private Router:Router,private route:ActivatedRoute,private RouteService:RouteService)
  {
    
  }
  pay() {
    console.log("from pay"+this.obj.data[2]);
    this.RouteService.Transaction(this.obj.data).subscribe(res=>{});
    this.Router.navigateByUrl('');
  }
  ngOnInit()
  {
    this.RouteService.currentJson.subscribe(obj=> this.obj=obj);
    this.src=this.obj.data[0].AreaName;
    this.dest=this.obj.data[1].AreaName;  
    console.log("from oninit"+this.obj.data[2]);
  }
}
