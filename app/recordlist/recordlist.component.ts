
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DetailformComponent } from '../detailform/detailform.component';
import { RecordService } from '../record.service';
@Component({
  selector: 'app-recordlist',
  templateUrl: './recordlist.component.html',
  styleUrls: ['./recordlist.component.css']
})
export class RecordlistComponent implements OnInit {

  searchstring: any;
  p:number=1;
  recordList: any=[];
  constructor(private service:RecordService,public dialog: MatDialog,private route:Router) { }

  ngOnInit() {
    this.findAllRecords();
  }
  findAllRecords(){
    this.service.findAllRecords().subscribe(data=>{
      this.recordList=data;
    });
  }



  openDialog(): void {
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="60%"
    this.dialog.open(DetailformComponent,dialogConfig);    
  }

  deleteRecord(id){
    console.log(id);
    this.service.deleteRecord(id).subscribe();
  }

  }

