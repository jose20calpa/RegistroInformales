import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from 'src/app/models/question';
import { WizardComponent } from 'angular-archwizard';
import { Municipality } from 'src/app/models/Municipality';
import { Department } from 'src/app/models/Department';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  @Input()
  questions: Question[];

  @Input()
  idFinalSection: number;

  @Input()
  municipalities: Municipality[] = [];

  @Input()
  departments: Department[] = [];

  @Output()
  saveEventEmitter: EventEmitter<Object> = new EventEmitter();

  selectedIdDepartment: string;


  constructor(private wizard: WizardComponent) { }

  ngOnInit() {

  }

  submit(form) {
    if (form.valid) {
      if (this.idFinalSection - 1 == this.wizard.currentStepIndex) {
        this.saveEventEmitter.emit();
      } else {
        this.wizard.disableNavigationBar = false;
        this.wizard.goToStep(this.wizard.currentStepIndex + 1);
      }
    }
  }

  onChangeText(idQuestion: number, idOption: number, isChecked: boolean) {
    if(this.questions.filter(question => question.id == idQuestion)[0].answer == null){
      this.questions.filter(question => question.id == idQuestion)[0].answer = "";
    }else if (isChecked && this.questions.filter(question => question.id == idQuestion)[0].answer != null &&
      this.questions.filter(question => question.id == idQuestion)[0].answer != '') {
      this.questions.filter(question => question.id == idQuestion)[0].answer += ",";
    }
    if (isChecked) {
      this.questions.filter(question => question.id == idQuestion)[0].answer += idOption.toString();

    } else {
      this.questions.filter(question => question.id == idQuestion)[0].answer = this.questions.filter(question => question.id == idQuestion)[0].answer.replace("," + idOption.toString(), '')
      this.questions.filter(question => question.id == idQuestion)[0].answer = this.questions.filter(question => question.id == idQuestion)[0].answer.replace(idOption.toString(), '')
    }
  }

  filterMunicipalities() {
    return (this.municipalities) ? this.municipalities.filter(municipality => municipality.id_Department == this.selectedIdDepartment) : this.municipalities;
  }

  isAtleastOneItemSelected(required: boolean, answer: any, submitted: boolean) {
    if (required && answer == null || (answer != null && answer.length < 1)) {
      return false;
    } else {
      return true;
    }
  }


}
