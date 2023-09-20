import { Injectable } from '@angular/core';

import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzServices {
  constructor() { }

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 300
  },{
    id: uuid(),
    name: 'Kakaroto ',
    power: 10.000
  },{
    id: uuid(),
    name: 'Vegeto',
    power: 9999999
  }];

  addCharacter( character: Character):void{

    const newCharacter : Character = { id : uuid(), ...character};

    this.characters.push(newCharacter);

  }


/*   this.characters.splice(index,1);
  onDeleteCharacter(index: number)*/

  onDeleteCharacterById(id: string){
    this.characters = this.characters.filter(character => character.id != id);


  }

}
