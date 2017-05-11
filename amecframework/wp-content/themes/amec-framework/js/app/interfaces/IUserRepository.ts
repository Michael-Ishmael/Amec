/// <reference path="../_all.ts" />

module aif {

  export interface IUserRepository {

    get (): ng.IPromise<AifUser>;
    logout (): ng.IPromise<boolean>;
    login ( userName:string,  password:string): ng.IPromise<LoginResult>;
    registerNewUser ( user:AppUser ): ng.IPromise<LoginResult>;

  }

}