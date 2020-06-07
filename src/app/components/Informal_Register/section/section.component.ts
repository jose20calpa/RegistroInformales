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
  guardarEventEmitter: EventEmitter<Object> = new EventEmitter();

  selectedIdDepartment: string;
  

  constructor(private wizard: WizardComponent) { }

  ngOnInit() {
    console.log("minicipios: " );
    console.log(this.municipalities );
    console.log("departamentos: ");
    console.log(this.departments );
  }


  submit(form) {
    console.log("trying go to step 3")
    console.log("current step: " + this.wizard.currentStep)
    console.log("current step index: " + this.wizard.currentStepIndex)
    console.log(this.questions);
    if (form.valid) {
      if (this.idFinalSection - 1 == this.wizard.currentStepIndex) {
        console.log("Final step")
        this.guardarEventEmitter.emit();
      } else {
        this.wizard.disableNavigationBar = false;
        this.wizard.goToStep(this.wizard.currentStepIndex + 1);
      }
    } else {
      console.log("No es valido!")
    }
  }

  filterMunicipalities() {
    return (this.municipalities) ? this.municipalities.filter(municipality => municipality.id_Department == this.selectedIdDepartment) : this.municipalities;
  }


}
