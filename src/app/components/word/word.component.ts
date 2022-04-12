import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Word } from 'src/app/common/interfaces/words';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss']
})
export class WordComponent implements OnInit {
  @Input() words!: Array<Word>;

  constructor() { }

  ngOnInit(): void {
  }
 
 

}
