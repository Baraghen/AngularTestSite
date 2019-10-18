import { Component, OnInit, ViewChild } from '@angular/core';
import { Labels } from '../../assets/class/labels'
import { tableInput } from '../../assets/class/tableInput';
import { DataService } from '../data.service';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'table-form',
  templateUrl: './table-form.component.html',
  styleUrls: ['./table-form.component.scss']
})
export class TableFormComponent implements OnInit {

  tableForm;
  submittedTableInput;
  d: Date = new Date();
  dateOptions = { weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }

  newTableInput: tableInput = {person: null, goals: null, labels: null, engagement: null, lastSeen: this.d.toLocaleString('en-se', this.dateOptions)};

  labels: Labels[] = [
    {value: 'New Label', viewValue: 'New Label'},
    {value: 'Old Label', viewValue: 'Old Label'},
    {value: 'Test Label', viewValue: 'Test Label'},
    {value: 'New Customer', viewValue: 'New Customer'}
  ]

  get personControl() {
    return this.tableForm.get('personControl');
  }

  get goalsControl() {
    return this.tableForm.get('goalsControl');
  }

  get labelsControl() {
    return this.tableForm.get('labelsControl');
  }


  getErrorMessagePerson() {
    return this.tableForm.get('personControl').hasError('required') ? 'You must enter a person' :
        '';
  }

  getErrorMessageGoals() {
    return this.tableForm.get('goalsControl').hasError('required') ? 'You must enter a goal' :
        '';
  }

  getErrorMessageLabels() {
    return this.tableForm.get('labelsControl').hasError('required') ? 'You must choose a label' :
        '';
  }


  onSubmit() {
    this._data.setTable(this.tableForm.value).subscribe(
      data => { 
        this.submittedTableInput = data;
      },
      error => { console.log(error);
      },
      () => {
        console.log('hello');
      }
      
    );
  }


  constructor(private _data: DataService, private fb: FormBuilder) { }

  ngOnInit() {

    this.tableForm = this.fb.group({
      personControl: [this.newTableInput.person, Validators.required],
      goalsControl: [this.newTableInput.goals, Validators.required],
      labelsControl: [this.newTableInput.labels, Validators.required],
      engagementControl: [this.newTableInput.engagement, Validators.required],
      lastSeenControl: [this.newTableInput.lastSeen]
    });
    
  }

}
