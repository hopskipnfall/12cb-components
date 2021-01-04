import { NgModule } from '@angular/core';
import { OnetwocbComponentsComponent } from './onetwocb-components.component';
import { CharacterGridComponent } from './character-grid/character-grid.component';



@NgModule({
  declarations: [OnetwocbComponentsComponent, CharacterGridComponent],
  imports: [
  ],
  exports: [OnetwocbComponentsComponent]
})
export class OnetwocbComponentsModule { }
