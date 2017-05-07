
/// <///<reference path=".../_all.ts" />

module aif {
  'use strict';

  export class PasswordMatchDir implements ng.IDirective {
    restrict = 'A';
    require = 'ngModel';

    constructor( ) {
    }

    link = (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, ctrl: any) => {
      let firstPassword = '#' + attrs['pwCheck'];
      element.add(firstPassword).on('keyup', function () {
        scope.$apply(function () {
          let v = element.val() === $(firstPassword).val();
          ctrl.$setValidity('pwmatch', v);
        });
      });

    };

    static factory(): ng.IDirectiveFactory {
      const directive = () => new PasswordMatchDir();
      //directive.$inject = ['$location', 'toaster'];
      return directive;
    }

  }

}



