/// <reference path="../_all.ts" />

module aif {

  export interface IAifService
  {

      getApp(): ng.IPromise<AifApp>;
      login(userName: string, password: string): ng.IPromise<LoginResult>;
      logout():ng.IPromise<boolean>;

  }

}