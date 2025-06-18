import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NotificationStructure } from './model/noti';

@Component({
  selector: 'app-nav-bar',
  standalone: false,
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss'
})
export class NavBar {
  accountName:string = 'NNNNNNNNNNNNNNNNNNN';
  hover:number = 0;

  activeDropdownId: string | null = null;

  Allnoti:NotificationStructure[] = [
    {gameName:'The Last of Us', gameId:1, gamePrice:200},
    {gameName:'Dota2', gameId:2, gamePrice:300},
    {gameName:'CS:GO 2', gameId:3, gamePrice:400},
  ];

  @ViewChild('otherDropdown1') otherDropdown1!:ElementRef;
  @ViewChild('otherDropdown2') otherDropdown2!:ElementRef;

  toggleDropdown(id:string, event: MouseEvent){
    event?.stopPropagation();
    if(this.activeDropdownId === id){
      this.activeDropdownId = null;
    }else{
      this.activeDropdownId = id;
    }
  }

  @HostListener('document:click', ['$event'])
  handleClickoutside(event: MouseEvent){
    const clickedInside1 = this.otherDropdown1?.nativeElement.contains(event.target);
    const clickedInside2 = this.otherDropdown2?.nativeElement.contains(event.target);

    if(!clickedInside1 || !clickedInside2){
      this.activeDropdownId = null;
    }
  }
}
