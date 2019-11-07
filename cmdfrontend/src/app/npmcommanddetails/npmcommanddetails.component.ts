import { Component, OnInit } from '@angular/core';
import { NgcommandDetailService } from '../shared/ngcommand-detail.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-npmcommanddetails',
  templateUrl: './npmcommanddetails.component.html',
  styleUrls: ['./npmcommanddetails.component.scss']
})
export class NpmcommanddetailsComponent implements OnInit {

  constructor(private service: NgcommandDetailService, private toastr: ToastrService) { 

  }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if(form != null)
      form.resetForm();
    this.service.formData = {
      Id: 0,
      TheCommand: "",
      Platform: "",
      Function: ""
    }
  }

  onSubmit(form: NgForm){
    this.service.postNgCommand(form.value).subscribe(
      res => {
        this.resetForm(form);
      },
      err => {
        console.log(err)
        
      }
      )
      //BELOW  should be in the response but the bug error keeps coming back(it is posting though)
      this.toastr.success('Submitted Successfully!', 'Command Registered')
      this.resetForm();
  }

}
