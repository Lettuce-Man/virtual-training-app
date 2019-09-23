import { Component, OnInit, Input,ViewChild, TemplateRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'class-summary-component',
  templateUrl: 'class-summary-component.html',
})
/*
* ClassSummaryComponent - common component that displays the class image with summary data over it.
Input: classModel - a session model located in the ../../../models/session
This can be configurated to show a back button, show intensity level, and has a simple and detail view.
*/
export class ClassSummaryComponent implements OnInit {
  //input from parent
  @Input() private classModel: any;
  //Whether to include the back button or not, for detail view only otherwise ignored
  @Input() public showBackButton: boolean;
  //Whether to show the dumbbells level images or not, should only show on class discover page
  @Input() public showLevel: boolean;
  //view driven by display states
  @Input() private view:'simple | detail';

  public currentTemplate:any;
  @ViewChild('classSimpleTemplate') templateClassSimple: TemplateRef<any>;
  @ViewChild('classDetailsTemplate') templateClassDetails: TemplateRef<any>;

  //this is the model the html view for this class will use, decoupled and adapted for what is needed.
  public viewClassModel:{
    image:string,
    title:string,
    trainerName:string,
    startTime:string,
    endTime:string,
    day:string,
    startDate:string,
    endDate:string,
    price:string,
    level:any,
    levelImages:string[]//max of 3 images
  };

  constructor(public navCtrl: NavController,public navParams: NavParams) {
  }

  ngOnInit() {
    //The @input model is only populated after this hook ngOnInit
    //map the input from parent into the model used for this component
    this.viewClassModel = {
      image:this.classModel.image,
      title:this.classModel.title,
      trainerName:this.classModel.trainer.name,
      startTime:this.classModel.start_time,
      endTime:this.classModel.end_time,
      day:this.classModel.day,
      startDate:this.classModel.start_date,
      endDate:this.classModel.end_date,
      price:this.classModel.price,
      level:this.classModel.level,
      levelImages:[]
    }
    //max of 3 intensity levels.
    //This is not great and should be centralized eventuallly.
    for (let i = 1; i <= 3; i++) {
      if (i <= this.viewClassModel.level) {
        this.viewClassModel.levelImages.push("../../assets/imgs/dumbbell_white_full.png");
      }
      else {
        this.viewClassModel.levelImages.push("../../assets/imgs/dumbbell_white_border.png");
      }
    }
    this.setTemplate(this.view);
  }

  /*
  getTemplate - used by the html to display the proper template
  */
  getTemplate() {
    //make sure we have a default template which  is loading in this case.
    this.currentTemplate = this.currentTemplate ? this.currentTemplate : this.templateClassSimple;
    return this.currentTemplate;
  }
  setTemplate(mode){

    switch(mode) {
      case 'simple':
        this.currentTemplate = this.templateClassSimple;
        break;
      case 'detail':
        this.currentTemplate = this.templateClassDetails;
        break;
    }
  }

  /*
  onGoBack - no matter how we got here go back
  */
  onGoBack() {
    this.navCtrl.pop();
  }


}
