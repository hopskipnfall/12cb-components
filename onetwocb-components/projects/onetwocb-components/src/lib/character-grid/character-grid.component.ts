import { Component, Input, OnInit } from '@angular/core';

export interface CharacterGridCell {
  id: string;
  imageUrl: string;
  state: 'default' | 'selected' | 'disabled';
  clickable: boolean;
  stocks?: {
    imageUrl: string;
    count: number;
  };
}

@Component({
  selector: 'onetwocb-character-grid',
  templateUrl: './character-grid.component.html',
  styleUrls: ['./character-grid.component.css'],
})
export class CharacterGridComponent implements OnInit {
  @Input() characterGridData: CharacterGridCell[];
  @Input() columns: number;

  ngOnInit(): void {}
}
