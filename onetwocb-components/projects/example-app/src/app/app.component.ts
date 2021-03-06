import { Component } from '@angular/core';
import {
  CellState,
  CharacterGridCell,
  CharacterGridStyle,
} from 'projects/onetwocb-components/src/public-api';

let i = 0;
const props: CellState[] = ['selectable', 'selected', 'disabled', 'active'];

function makeCharCell(name: string): CharacterGridCell {
  return {
    id: name,
    imageUrl: `assets/jouske/${name}.svg`,
    state: props[i++ % 4],
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

  characterGridStyle: CharacterGridStyle = {
    selectableBgColor: '#616060',
    selectedBgColor: '#c1c1c1',
    disabledBgColor: '',
  };

  tileClicked(id: string) {
    alert(`You clicked ${id}!`);
  }
}
