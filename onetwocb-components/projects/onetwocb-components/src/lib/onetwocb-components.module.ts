import { NgModule } from '@angular/core';
import { CharacterGridComponent } from './character-grid/character-grid.component';
import { OnetwocbComponentsComponent } from './onetwocb-components.component';

@NgModule({
  declarations: [OnetwocbComponentsComponent, CharacterGridComponent],
  imports: [],
  exports: [OnetwocbComponentsComponent],
})
export class OnetwocbComponentsModule {}
