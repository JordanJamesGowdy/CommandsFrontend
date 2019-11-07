import { Component, OnInit } from '@angular/core';
import { NgcommandDetailService } from '../shared/ngcommand-detail.service';
import { NgcommandDetail } from '../shared/ngcommand-detail';

@Component({
  selector: 'app-npmcommandlist',
  templateUrl: './npmcommandlist.component.html',
  styleUrls: ['./npmcommandlist.component.scss']
})
export class NpmcommandlistComponent implements OnInit {

  list: NgcommandDetail[];
  constructor(private service : NgcommandDetailService) { }

  ngOnInit() {
    this.service.getNgList().subscribe(
      res => {this.list = res }
    ); 
  }

  

}
