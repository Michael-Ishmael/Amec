/// <reference path="../_all.ts" />

module aif {
  'use strict';

  export class AifService implements IAifService {

    private user:AifUser

    constructor(private userRepository: IUserRepository){

    }


    buildApp(): AifApp {
      throw new Error('Method not implemented.');
    }


  }

}
