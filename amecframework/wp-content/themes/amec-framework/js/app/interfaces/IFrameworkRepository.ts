/// <reference path="../_all.ts" />

module aif {

  export interface IFrameworkRepository {

    getEditView (): AifFrameworkEditView;
    onFrameworkLoaded():void;

  }

}