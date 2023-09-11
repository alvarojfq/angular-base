import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character,.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.components.html'
})

export class MainPageComponent {

  constructor(private dbzService: DbzService) { }

  get Characters(): Character[] {

    return [...this.dbzService.Character];

  }

  ondeleteCharacter(id : string): void {
    this.dbzService.ondeleteChracterById( id )
  }

  onNewCharacter(Character: Character):void{
    this.dbzService.AddCharacter(Character);
  }
}

