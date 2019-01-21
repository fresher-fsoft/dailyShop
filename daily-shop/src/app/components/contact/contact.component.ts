import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    message: ['', Validators.required]
  })

  constructor(private formBuilder: FormBuilder, private firebaseDb: AngularFireDatabase) { }

  ngOnInit() {
  }

  onSubmit(value: any){
    this.firebaseDb.list('contacts').push(value)
  }

}
