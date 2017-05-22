<div id="aif-app" ng-app="aif" data-framework="typescript">
    <div  class="container-fluid" ng-cloak ng-controller="appCtrl as ac">
        <div class="loader" ng-if="ac.vs.displayLoading">

        </div>
        <div class="message" ng-if="ac.displayLoginReminder">
            <h1 style="color: white">You should log in!</h1>
        </div>
        <div class="control-row ng-cloak row" ng-if="ac.vs.displayControls">
            <div  class="low-pad-cell"  ng-class="{'col-md-4': ac.vs.displayGrid && !ac.isLoggedIn(), 'col-md-3' : ac.isLoggedIn() && ac.vs.displayGrid, 'col-md-1' : ac.vs.displaySummary}">
                <div id="login-button" class="aif-button background-dark_blue bottom-dark-border-dark_blue"
                     ng-click="ac.showLogin()"  ng-if="!ac.isLoggedIn() && ac.initialised">
                    Login
                </div>
                <div id="register-button" class="aif-button background-dark_blue bottom-dark-border-dark_blue"
                     ng-click="ac.showRegister()"  ng-if="!ac.isLoggedIn() && ac.initialised && ac.vs.displayGrid">
                    Register
                </div>
                <div ng-if="ac.isLoggedIn() && ac.initialised" >
                    <h4 ng-click="ac.viewAccount()" class="welcome text-elip">
                        <a class="account-button"></a><span ng-if="ac.vs.displayGrid">Welcome {{ ac.currentUser.firstName }}</span> </h4>
                </div>
            </div>
            <div class="low-pad-cell text-center" ng-class="{'col-md-6': (ac.vs.displayGrid && ac.isLoggedIn()) || ac.vs.displaySummary, 'col-md-5' : ac.vs.displayGrid && !ac.isLoggedIn()}">
                <div class="framework-name" ng-if="ac.currentFramework" ng-click="ac.viewAccount()">
                    <h4 title="{{ ac.currentFramework.name }}" class="text-elip"> {{ ac.currentFramework.name }}</h4>
                </div>
            </div>
            <div class="col-md-3 low-pad-cell text-right" ng-if="ac.vs.displayGrid">

                <div class="d-inline-block">
                    <div ng-click="ac.saveProgress()" ng-if="ac.initialised" ng-cloak
                         class="aif-button background-bright_green bottom-dark-border-bright_green save-button">
                        Save Progress
                    </div>
                    <div ng-click="ac.submitFramework()"
                         class="aif-button background-bright_green bottom-dark-border-bright_green">Submit
                    </div>
                </div>

            </div>
            <div class="col-md-5 low-pad-cell text-right" ng-if="ac.vs.displaySummary" >
                <div ng-click="ac.saveProgress()" ng-if="ac.initialised" ng-cloak
                     class="aif-button background-bright_green bottom-dark-border-bright_green save-button">
                    Save Progress
                </div>
                <div ng-click="ac.vs.showGrid()"
                     class="aif-button background-yellow bottom-dark-border-yellow">Edit
                </div>
                <div ng-click="ac.downloadAifPdf()"
                     class="aif-button background-red bottom-dark-border-red">Download Pdf
                </div>
            </div>
        </div>

        <div class="base-framework" ng-cloak ng-controller="frameworkCtrl as ctrl" ng-if="ac.vs.displayGrid">
            <div class="row ng-scope">
                <div class="low-pad-cell col-md-4">
                    <div class="aif-tile background-red" 
                         ng-click="ctrl.handleStepClick(1)">
                        <div class="bg-cloak" ng-if="ctrl.vs.fadeBg"
                             ng-click="ctrl.clearEditMode()"></div>
                        <h2 >{{ ctrl.getStepTitle(1, "Objectives") }}</h2>
                        <div class="anchor-bottom bottom-dark-border-red">
                            <div class="start-message background-dark-red">
                                {{  ctrl.getStepTitle(-1, "START HERE") }}
                            </div>
                            <div class="circle-border background-dark-red">
                                1
                            </div>
                        </div>
                    </div>
                </div>
                <div class="low-pad-cell col-md-4">
                    <div class="aif-tile background-yellow" 
                         ng-click="ctrl.handleStepClick(2)">
                        <div class="bg-cloak" ng-if="ctrl.vs.fadeBg"
                             ng-click="ctrl.clearEditMode()"></div>
                        <h2 >{{ ctrl.getStepTitle(2, "Inputs") }}</h2>
                        <div class="anchor-bottom bottom-dark-border-yellow">
                            <div class="circle-border background-dark-yellow">
                                2
                            </div>
                        </div>
                    </div>
                </div>
                <div class="low-pad-cell col-md-4">
                    <div class="aif-tile background-green" 
                         ng-click="ctrl.handleStepClick(3)">
                        <div class="bg-cloak" ng-if="ctrl.vs.fadeBg"
                             ng-click="ctrl.clearEditMode()"></div>
                        <h2 >{{ ctrl.getStepTitle(3, "Activities") }}</h2>
                        <div class="anchor-bottom bottom-dark-border-green">
                            <div class="circle-border background-dark-green">
                                3
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row ng-scope">
                <div class="low-pad-cell col-md-4">
                    <div class="aif-tile background-light_blue" 
                         ng-click="ctrl.handleStepClick(4)">
                        <div class="bg-cloak" ng-if="ctrl.vs.fadeBg"
                             ng-click="ctrl.clearEditMode()"></div>
                        <h2 >{{ ctrl.getStepTitle(4, "Outputs") }}</h2>
                        <div class="anchor-bottom bottom-dark-border-light_blue">
                            <div class="circle-border background-dark-light_blue">
                                4
                            </div>
                        </div>
                    </div>
                </div>
                <div class="low-pad-cell col-md-4">
                    <div class="aif-tile background-dark_blue" 
                         ng-click="ctrl.handleStepClick(5)">
                        <div class="bg-cloak" ng-if="ctrl.vs.fadeBg"
                             ng-click="ctrl.clearEditMode()"></div>
                        <h2 >{{ ctrl.getStepTitle(5, "Out-takes") }}</h2>
                        <div class="anchor-bottom bottom-dark-border-dark_blue">
                            <div class="circle-border background-dark-dark_blue">
                                5
                            </div>
                        </div>
                    </div>
                </div>
                <div class="low-pad-cell col-md-4">
                    <div class="aif-tile background-dark_blue" 
                         ng-click="ctrl.handleStepClick(6)">
                        <div class="bg-cloak" ng-if="ctrl.vs.fadeBg"
                             ng-click="ctrl.clearEditMode()"></div>
                        <h2 >{{ ctrl.getStepTitle(6, "Outcomes") }}</h2>
                        <div class="anchor-bottom bottom-dark-border-dark_blue">
                            <div class="circle-border background-dark-dark_blue">
                                6
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row ng-scope">
                <div class="low-pad-cell col-md-8">
                    <div class="aif-tile background-purple" 
                         ng-click="ctrl.handleStepClick(7)">
                        <div class="bg-cloak" ng-if="ctrl.vs.fadeBg"
                             ng-click="ctrl.clearEditMode()"></div>
                        <h2 >{{ ctrl.getStepTitle(7, "Impact") }}</h2>
                        <div class="anchor-bottom bottom-dark-border-purple">
                            <div class="circle-border background-dark-purple">
                                7
                            </div>
                        </div>
                    </div>
                </div>
                <div class="low-pad-cell col-md-4">
                    <div class="aif-tile background-black" 
                         ng-click="ac.submitFramework()">
                        <div class="bg-cloak" ng-if="ctrl.vs.fadeBg"
                             ng-click="ctrl.clearEditMode()"></div>
                        <p class="submit-text ng-scope">
                            {{ ctrl.getStepTitle(-3, "Click on submit button to view your content in the Integrated Evaluation Framework by AMEC.") }}
                        </p>
                        <div
                             class="anchor-bottom background-bright_green bottom-dark-border-bright_green ng-scope">
                            <span class="button-label" data-bind="text: title">{{ ctrl.getStepTitle(-2, "SUBMIT") }}</span>
                        </div>
                    </div>
                </div>
            </div>


            <aif-user-screens ng-if="ctrl.vs.showingUserScreens()"></aif-user-screens>

            <aif-input-grid ng-if="ctrl.vs.displayEdit" step="ctrl.editStep"></aif-input-grid>




        </div>

        <aif-framework-summary ng-cloak ng-if="ac.vs.displaySummary">

        </aif-framework-summary>

    </div>
</div>