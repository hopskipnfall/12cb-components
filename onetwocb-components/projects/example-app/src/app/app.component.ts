import { Component } from '@angular/core';
import { CharacterGridCell } from 'projects/onetwocb-components/src/public-api';

function makeCharCell(name: string): CharacterGridCell {
  return {
    id: name,
    imageUrl: `assets/jouske/${name}.svg`,
    state: 'default',
    clickable: true,
  };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'example-app';

  characterGridData: CharacterGridCell[] = [
    makeCharCell('captain_falcon'),
    makeCharCell('donkey_kong'),
    makeCharCell('fox'),
    makeCharCell('jigglypuff'),
    makeCharCell('kirby'),
    makeCharCell('link'),
    makeCharCell('luigi'),
    makeCharCell('mario'),
    makeCharCell('ness'),
    makeCharCell('pikachu'),
    makeCharCell('samus'),
    makeCharCell('yoshi'),
  ];
}
