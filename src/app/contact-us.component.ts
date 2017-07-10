import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ControlValueAccessor } from '@angular/forms';

function validateImportance(i: FormControl) {
    return i.value % 2 !== 0 ? null : {
        validateImportance: {
            valid: false
        }
    }
}

@Component({
  selector: 'contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./app.component.css']
})

export class ContactUsComponent implements OnInit{
  title = 'Contact Us';
  form: FormGroup;
  importance = 0;

  constructor() {}
  ngOnInit() {
      this.form = new FormGroup({
          name: new FormControl('', [Validators.required]),
          message: new FormControl({value: '', disabled: name !== ''}, [Validators.required]),
          importance: new FormControl(0, validateImportance)
      })
  }

  increment() {
    this.importance = this.importance + 1;
    this.form.patchValue({ importance: this.importance });
  }

  decrement() {
    this.importance = this.importance - 1;
    this.form.patchValue({ importance: this.importance });
  }

  onSubmit() {
    alert('Thanks for submitting your message!');
  }
}
