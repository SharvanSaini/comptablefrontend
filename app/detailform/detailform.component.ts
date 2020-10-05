import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RecordService } from '../record.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detailform',
  templateUrl: './detailform.component.html',
  styleUrls: ['./detailform.component.css']
})
export class DetailformComponent implements OnInit {

  recordForm: FormGroup;
  errorMessage: String;
  
  constructor(private fb:FormBuilder,private recordservice:RecordService,private router:Router) { }

  ngOnInit(){
    this.recordForm=this.fb.group(
      {
        "attend": [null,Validators.required],
        "meetingnumber": [null,Validators.required],
        "subject": [null,Validators.required],
        "slot": [null,Validators.required],
        "workdetails": [null,Validators.required],
        "extradetails": [null,Validators.required]
       
      }
    );
  }

  onSubmit(data){

    this.recordservice.recordForm(this.recordForm.value).subscribe(response=>{});
  }


}
