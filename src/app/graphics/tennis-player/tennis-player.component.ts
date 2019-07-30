import { Component, OnInit } from '@angular/core';
import { Tennisplayer } from 'src/app/Model/tennisplayer';

@Component({
  selector: 'app-tennis-player',
  templateUrl: './tennis-player.component.html',
  styleUrls: ['./tennis-player.component.css']
})
export class TennisPlayerComponent implements OnInit {

  
  player: Tennisplayer = {
    id: 1,
    name: 'sampras',
    firstName: 'pete',
    birthDate:'1980/04/04'
  }
  
  constructor() { }

  ngOnInit() {
  }
  public getBirthDate(){
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(this.player.birthDate).toLocaleDateString(navigator.language, options);
    }
}
