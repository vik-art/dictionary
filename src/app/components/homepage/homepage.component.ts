import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Word } from 'src/app/common/interfaces/words';
import { AlertService } from 'src/app/services/alert.service';
import { DictionaryService } from 'src/app/services/dictionary.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  form!: FormGroup;
  unSubscriber = new Subscription();
  showResults: boolean = false;
  words!: Array<Word>;

  constructor(
    private formBuilder: FormBuilder,
    private dictionaryService: DictionaryService,
    private alert: AlertService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
   this.form = this.formBuilder.group({
     query: ["", [Validators.required]]
   })
   this.unSubscriber.add(this.form.valueChanges.subscribe(() => {}))
  }

  submit() {
   this.unSubscriber.add(
     this.dictionaryService.getValue(this.form.value.query).subscribe((res) => {
      if(res) {
        this.form.reset();
        this.alert.success("There are some results on your search query 😉")
        this.showResults = true;
        this.words =  res.map((el: Word) => {
         return {
            word: el.word,
            meanings: el.meanings,
            phonetic: el.phonetic,
            phonetics: el.phonetics,
          }
        })
      }
      }
      
    ))
    this.form.reset();
  }
}
