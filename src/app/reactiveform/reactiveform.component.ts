import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validator, Validators} from '@angular/forms';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  reactiveform:FormGroup;
  constructor(private formbuilder:FormBuilder) {
    /*  this.reactiveform=formbuilder.group({
       email: new FormControl(),
       password: new FormControl(),
       message: new FormControl(),
       agree: new FormControl(),
       radiob: new FormControl()

      });*/
      this.reactiveform=formbuilder.group({
        email:["",
        [Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),
        Validators.email]

      ],
        password:["",Validators.required],
        message:["",Validators.required],
        agree:["",Validators.requiredTrue],
        radiob:["",Validators.required]

   });
  }
  
  ngOnInit(): void {

     /* this.reactiveform.setValue({//in setvalue need to set in fields value otherwise it will give error
        email:"ajit@gmail.com",//to solve above problem use patchvalue to set value in form
        password:"ajit",
        message:"hello world",
        radiob:true,
        agree:true


      });*/

         //track form fields value 
          //  this.reactiveform.get("email").valueChanges.subscribe(data=>{
           //   console.log(data);
           // });

              //track form value
            // this.reactiveform.valueChanges.subscribe(data=>{
            //   console.log(data);
            // });


            //tracing value for validation in reactive from 
               this.reactiveform.get("email").statusChanges.subscribe(data=>{
                 console.log(data);
               });

               //tracking entire from  validation
               this.reactiveform.statusChanges.subscribe(data=>{
                 console.log(data);
               }); 
     //set value in reactive form
      this.reactiveform.patchValue({
        email:"ajit@gmail.com",
        password:"ajit",
        message:"hello world",
        
      });

  }
  //get from value in reactive 
  getreactiveform(){
    console.log(this.reactiveform);
    console.log(this.reactiveform.value);
    console.log(this.reactiveform.value.email);
  }

  
}
