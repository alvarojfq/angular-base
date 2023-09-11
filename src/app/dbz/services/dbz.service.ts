import { Injectable } from '@angular/core';
import {v4 as uuid} from 'uuid';
import { Character } from '../interfaces/character,.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public Character: Character[] = [{
    id: uuid(),
    name: 'krilin',
    power: 1000
  }, {
    id: uuid(),
    name: 'goku',
    power: 15000
  }, {
    id: uuid(),
    name: 'Vegeta',
    power: 15000
  }
  ];

  AddCharacter(character: Character): void{

    const newChracter: Character = {id: uuid(), ...character}


    this.Character.push(newChracter);

  }

 // onDeleteCharacter(index: number){
   // this.Character.splice(index,1);
  //};

  ondeleteChracterById(id:string){
    this.Character = this.Character.filter(Character => Character.id !== id)
  }


}
