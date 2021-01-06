import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

export type CellState = 'selectable' | 'selected' | 'active' | 'disabled';

export interface CharacterGridCell {
  id: string;
  imageUrl: string;
  state: CellState;
  clickable: boolean;
  stocks?: {
    imageUrl: string;
    count: number;
  };
  selectedBgColorOverride?: string;
}

export interface CharacterGridStyle {
  selectableBgColor: string;
  selectedBgColor: string;
  disabledBgColor: string;
}

@Component({
  selector: 'onetwocb-character-grid',
  templateUrl: './character-grid.component.html',
  styleUrls: ['./character-grid.component.css'],
})
export class CharacterGridComponent implements AfterViewInit {
  /**
   * Emits the ID of the tile that was clicked.
   *
   * Note this is not triggered for "disabled" tiles.
   */
  @Output() tileClicked: EventEmitter<string> = new EventEmitter();

  @Input() characterGridData: CharacterGridCell[];
  @Input() columns: number;
  @Input() style: CharacterGridStyle;

  // @ViewChild('container')
  // container: ElementRef;

  ngAfterViewInit(): void {
    //   console.log('height', (<HTMLElement>this.container.nativeElement).getBoundingClientRect());
    //   console.log('w', this.container.nativeElement.offsetWidth);
    //   const ratio = this.container.nativeElement.offsetWidth/this.container.nativeElement.offsetHeight;
    //   const options = [1/12, 2/6, 3/4, 4/3, 6/2, 12/1];
    //   const closest = options.reduce(function(prev, curr) {
    //     return (Math.abs(curr - ratio) < Math.abs(prev - ratio) ? curr : prev);
    //   });
    //   console.log(closest);
    //   if (closest === 1/12) {
    //     this.columns = 1;
    //   } else if (closest === 2/6) {
    //     this.columns = 2;
    //   } else if (closest === 3/4) {
    //     this.columns = 3;
    //   } else if (closest === 4/3) {
    //     this.columns = 4;
    //   } else if (closest === 6/2) {
    //     this.columns = 6;
    //   } else if (closest === 12/1) {
    //     this.columns = 12;
    //   }
    //   this.cellWidth = ratio * this.columns;
    //   console.log('celly', this.cellWidth)
  }

  getBgColor(cell: CharacterGridCell): string {
    if (cell.state === 'selectable') {
      return this.style.selectableBgColor;
    }
    if (cell.state === 'selected') {
      return cell.selectedBgColorOverride ?? this.style.selectedBgColor;
    }
    if (cell.state === 'disabled') {
      return this.style.disabledBgColor;
    }
    return '';
  }

  onClick(cell: CharacterGridCell): void {
    if (cell.clickable) {
      this.tileClicked.emit(cell.id);
    }
  }
}
