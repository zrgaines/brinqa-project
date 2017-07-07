import { Component } from '@angular/core';

@Component({
  selector: 'contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./app.component.css']
})

export class ContactUsComponent {
  title = 'Contact Us';
  form = {
      name: '',
      message: '',
      count: 0,
      error: true
  }
  increase() {
      this.form.count++;
      this.validate();
  }
  decrease() {
      this.form.count--;
      this.validate();
  }
  validate() {
      if (this.form.count % 2 != 0 && this.form.name) {
          this.form.error = false;
      } else { this.form.error = true; }
  }
  send() {
      alert('Message sent, thanks!');
  }
}
