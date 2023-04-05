import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'mf-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string, user: User }
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [this.data.user.name, Validators.required],
      lastname: [this.data.user.lastname, Validators.required],
      email: [this.data.user.email, [Validators.required, Validators.email]],
      phone: [this.data.user.phone, [Validators.required, Validators.pattern(/^\d{10}$/)]],
      calification: [this.data.user.calification, [Validators.required, Validators.maxLength(10)]],
    });
  }

  save(): void {
    const user: User = {
      id: this.data.user.id,
      name: this.form.get('name').value,
      lastname: this.form.get('lastname').value,
      email: this.form.get('email').value,
      phone: this.form.get('phone').value,
      calification: this.form.get('calification').value,
      state: ""
    };
    this.dialogRef.close(user);
  }
  cancel(): void {
    this.dialogRef.close();
  }
}

