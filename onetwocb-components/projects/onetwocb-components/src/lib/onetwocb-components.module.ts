import { NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserModule } from '@angular/platform-browser';
import { CharacterGridComponent } from './character-grid/character-grid.component';

@NgModule({
  declarations: [CharacterGridComponent],
  imports: [BrowserModule, MatGridListModule, MatRippleModule],
  exports: [CharacterGridComponent],
})
export class OnetwocbComponentsModule {}
