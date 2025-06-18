import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestRequestGet } from './test-request-get/test-request-get';



@NgModule({
  declarations: [
    TestRequestGet
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TestRequestGet
  ]
})
export class TestRequestModule { }
