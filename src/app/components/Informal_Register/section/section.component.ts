import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'src/app/models/question';
import { WizardComponent } from 'angular-archwizard';

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

  constructor(private wizard: WizardComponent) { }

  ngOnInit() {

    console.log("final section: " + this.idFinalSection);
    console.log(this.questions);
  }


  submit(form) {
    console.log("trying go to step 3")
    console.log("current step: " + this.wizard.currentStep)
    console.log("current step index: " + this.wizard.currentStepIndex)
    console.log(this.questions);
    if (form.valid) {
      if (this.idFinalSection-1 == this.wizard.currentStepIndex) {
        console.log("Final step")
      } else {
        this.wizard.disableNavigationBar = false;
        this.wizard.goToStep(this.wizard.currentStepIndex + 1);
      }
    }else{
      console.log("No es valido!")
    }
   

  }


}
