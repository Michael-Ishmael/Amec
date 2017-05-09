/// <///<reference path=".../_all.ts" />

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

  export interface IAifSummaryRowData {

    sections: [
        {
          heading: string,
          groups: [
              {
                heading:string,
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
                public headingColor: string,
                public bodyColor: string
      ){

    }
  }

  export class AifFrameworkStep implements IAifFrameworkEntry {

    inputStyle: InputStyle;
    entries: Array<IAifFrameworkEntry> = [];

    constructor(public heading:string){
      this.inputStyle = InputStyle.WholeStep;
    }

    html(): string {
      throw new Error('Method not implemented.');
    }


  }


  export interface IAifFrameworkEntry {
    heading:string;
    inputStyle:InputStyle,
    html():string
  }

  export class AifFreeTextFrameworkEntry implements  IAifFrameworkEntry{

    public inputStyle:InputStyle;
    public text:string;

    constructor(public heading:string){
      this.inputStyle = InputStyle.TextArea;
    }

    public html():string {
      return this.text;
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

