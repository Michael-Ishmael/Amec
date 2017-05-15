

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
    public isDraft:boolean = false;

    constructor(public frameworkId:number, private userData:IAifUserFramework){

    }

    public hasValues():boolean{
      if(this.inputs){

        for (let prop in this.inputs) {
          if(this.inputs.hasOwnProperty(prop)){

            let values = this.inputs[prop].some(v => v.hasValue());
            if(values) return true;
          }
        }

      }
      return false;
    }

    public addInputOrEmpty(key:string, inputStyle:AifStepInputStyle, valueCount:number){

      let inputs:Array<IAifStepInputValue> = [];

      if(inputStyle == AifStepInputStyle.KeyedValues){

        if(this.userData.inputs.hasOwnProperty(key)){
          inputs = this.userData.inputs[key].map(v => {
            return new AifKeyPairInputValue(v.key, v.text);
          })
        }

        for (let i = inputs.length; i < valueCount; i++) {
          inputs.push(new AifKeyPairInputValue(null, null))
        }

      } else {
        if(this.userData.inputs.hasOwnProperty(key)){
          inputs = this.userData.inputs[key].map(v => {
            return new AifStringInputValue(v, inputStyle == AifStepInputStyle.NumberedValues);
          })
        }

        for (let i = inputs.length; i < valueCount; i++) {
          inputs.push(new AifStringInputValue(null, inputStyle == AifStepInputStyle.NumberedValues))
        }
      }

      this.inputs[key] = inputs;

    }


    public asJsonObj():any {

      let jInputs = {};

      for (let prop in this.inputs) {
        if(this.inputs.hasOwnProperty(prop)){

          jInputs[prop] = this.inputs[prop].filter(v => v.hasValue()).map(v => v.asJsonObj())

        }
      }

      return { inputs: jInputs }

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

    constructor(public title:string){

    }

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

    inputStyle: AifStepInputStyle;

    subHeading:string = null;
    info:string = null;
    textLimit:number = 500;
    valueCount:number = 1;
    values: Array<IAifStepInputValue> ;
    summaryHeading: string;

    constructor(public heading:string){
      this.summaryHeading = this.heading
    }

    isKeyedPair():boolean{
      return this.inputStyle == AifStepInputStyle.KeyedValues;
    }

    public html():string {
      let ht:string = "";
      if(this.values) this.values.forEach((v, i) => {
        if(v.hasValue()){
          let eht = v.asHtml(i + 1);
          if(eht){
            //if(ht.length) ht += "<br>";
            ht += eht.trim();
          }
        }
      } );
      return ht.trim();
    }

  }

  export interface IAifStepInputValue {
    text: string;

    isFreeText():boolean;
    isNumberedText():boolean;
    isKeyedPair():boolean;

    hasValue():boolean;
    asHtml(index?:number):string;
    asJsonObj():any;

  }

  export class AifStringInputValue implements IAifStepInputValue{

    constructor(public text: string, private numbered:boolean){

    }

    isFreeText():boolean{
      return !this.numbered;
    }

    isNumberedText():boolean{
      return this.numbered;
    }

    isKeyedPair():boolean{
      return false;
    }

    hasValue(){
      return !!this.text;
    }

    asHtml(index:number = -1):string {
      if(this.numbered && index > -1 ){
        return "<div class=\"key\">" + index + "</div><div class=\"value\">" + this.text + "</div>"
      } else {
        return "<p class='free-text'>" + this.text + "</p>"
      }

    }

    asJsonObj():any {
      return this.text;
    }

  }

  export class AifKeyPairInputValue implements  IAifStepInputValue{

    constructor(public key: string,
                public text: string){

    }

    isFreeText():boolean{
      return false;
    }

    isNumberedText():boolean{
      return false;
    }

    isKeyedPair():boolean{
      return true;
    }

    hasValue():boolean{
      return (!!this.text && !!this.key);
    }

    asHtml():string {
      return "<div class=\"key\">" + this.key + "</div><div class=\"value\">" + this.text + "</div>"
    }

    asJsonObj():any {
      return {
        key: this.key,
        text: this.text
      };
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

