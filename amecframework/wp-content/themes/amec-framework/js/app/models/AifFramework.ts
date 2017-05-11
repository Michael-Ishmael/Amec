

module aif {
  'use strict';

  export interface IAifFramework {
    id:number;
    name:string;
    description:string;
  }

  export class AifFramework {

    public selected:boolean = false;
    public flaggedDelete:boolean = false;
    public current:boolean = false;
    public editView:AifFrameworkEditView = null;
    public summaryView:AifSummary = null;

    constructor(
      public id:number,
      public name:string,
      public description:string
    ){

    }



  }

  export class AifFrameworkEditView {

    public steps:Array<AifFrameworkStep> = [];


  }

  export class AifUserFramework   {

    public inputs: {[id: string]: Array<IAifStepInputValue> } = {};


    constructor(public frameworkId:number, private userData:IAifUserFramework){

    }


    public addInputOrEmpty(key:string, inputStyle:AifStepInputStyle){

      if(inputStyle == AifStepInputStyle.KeyedValues){

        if(this.userData.hasOwnProperty(key)){
          this.inputs[key] = this.userData[key].map(v => {
            return new AifKeyPairInputValue(v.key, v.value);
          })
        } else {
          this.inputs[key] = [];
        }
      } else {
        if(this.userData.hasOwnProperty(key)){
          this.inputs[key] = this.userData[key].map(v => {
            return new AifStringInputValue(v);
          })
        } else {
          this.inputs[key] = [];
        }
      }

    }



  }

  export interface IAifSummaryRowData {

    sections: [
        {
          heading: string,
          groups: [
              {
                heading:string,
                color: string,
                entries:[
                    {
                      entryType:string,
                      stepId:number,
                      stepEntryIndex?:number,
                      headingOverride?:string
                    }
                    ]
              }
              ],
          width: number
        }
        ],
    maxRowHeight: number;
  }


  export class AifSummary {
    public rows:Array<AifSummaryRow> = [];
  }

  export class AifSummaryRow {

    public sections:Array<AifSummarySection> = [];
    public maxRowHeight:number = -1;

  }

  export class AifSummarySection {

    public groups:Array<AifSummaryGroup> = [];
    public width:number = 1;

    constructor(public heading:string){

    }
  }

  export class AifSummaryGroup {

    public steps:Array<IAifFrameworkEntry> = [];

    constructor(public heading:string,
                public color: string
      ){

    }
  }




  export interface IAifFrameworkEntry {
    summaryHeading: string;
    //summaryStyle:AifStepSummaryStyle,
    html():string;
  }

  export class AifFrameworkStep implements IAifFrameworkEntry {

    inputStyle: AifStepInputStyle;
    summaryStyle:AifStepSummaryStyle;
    baseColor: string;
    row: number;
    colSpan: number;
    cellOrder: Array<AifInputCellType>;
    inputs: Array<AifStepInput> = [];
    summaryHeading: string;

    constructor(public stepIndex: number, public heading:string){
      this.summaryHeading = heading;
    }

    html(): string {
      let ht:string = "";
      if(this.inputs) this.inputs.forEach(e => {
        let eht = e.html();
        if(eht){
          if(ht.length) ht += "<br>";
          ht += eht.trim();
        }
      } );
      return ht.trim();
    }


  }

  export class AifStepInput implements IAifFrameworkEntry {

    heading:string = null;
    subHeading:string = null;
    info:string = null;
    textLimit:number = 500;
    values:Array<IAifStepInputValue>;
    summaryHeading: string;

    constructor(){

    }

    public html():string {
      let ht:string = "";
      if(this.values) this.values.forEach(v => {
        let eht = v.asHtml();
        if(eht){
          if(ht.length) ht += "<br>";
          ht += eht.trim();
        }
      } );
      return ht.trim();
    }

  }

  export interface IAifStepInputValue {
    text: string;
    asHtml():string;
    asJson():string;
  }

  export class AifStringInputValue implements IAifStepInputValue{

    constructor(public text: string){

    }

    asHtml():string {
      return this.text;
    }

    asJson():string {
      return JSON.stringify(this.text);
    }

  }

  export class AifKeyPairInputValue implements  IAifStepInputValue{

    constructor(public key: string,
                public text: string){

    }


    asHtml():string {
      return "<span class=\"key\">" + this.key + "</span><span class=\"value\">" + this.key + "</span>"
    }

    asJson():string {
      return JSON.stringify({
        key: this.key,
        text: this.text
      })
    }
  }

  export class SaveFrameworkResult {

    constructor(
      public success:boolean,
      public frameWork:IAifFramework,
      public message:string
    ){

    }

  }

}

