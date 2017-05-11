module aif {
  'use strict';

  export class ${NAME} {
  
    public static ${DS}inject = ["${DS}scope", "viewService"];

    constructor(private ${DS}scope:ng.IScope, public vs:ViewService) {
      this.init();
    }

    private init():void{
    
    }
  
  
  }
  
}

