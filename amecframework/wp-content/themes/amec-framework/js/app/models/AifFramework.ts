

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

  export enum SummaryStyle {
    Entry = 0,
    WholeStep = 1
  }


  export interface IAifFrameworkEntry {
    heading:string;
    summaryStyle:SummaryStyle,
    html():string
  }

  export class AifFrameworkStep implements IAifFrameworkEntry {

    inputStyle: InputStyle;
    summaryStyle:SummaryStyle;
    entries: Array<IAifFrameworkEntry> = [];

    constructor(public heading:string){
      this.summaryStyle = SummaryStyle.WholeStep;
    }

    html(): string {
      let ht:string = "";
      if(this.entries) this.entries.forEach(e => {
        let eht = e.html();
        if(eht){
          if(ht.length) ht += "<br>";
          ht += eht.trim();
        }
      } );
      return ht.trim();
    }


  }



  export class AifFreeTextFrameworkEntry implements  IAifFrameworkEntry{

    public summaryStyle:SummaryStyle;
    public text:string;

    constructor(public heading:string){
      this.summaryStyle = SummaryStyle.Entry;
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

