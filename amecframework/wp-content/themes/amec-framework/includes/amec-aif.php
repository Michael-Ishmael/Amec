<div id="aif-app" ng-app="aif" data-framework="typescript">
    <div  class="container-fluid" ng-cloak ng-controller="appCtrl as ac">
        <div   class="control-row row">
            <div  class="col-md-6 low-pad-cell"  ng-if="ac.vs.displayGrid">
                <div class="aif-button background-dark_blue bottom-dark-border-dark_blue"
                     ng-click="ac.showLogin()"  ng-if="!ac.isLoggedIn() && ac.initialised">
                    Login
                </div>
                <div class="aif-button background-dark_blue bottom-dark-border-dark_blue"
                     ng-click="ac.showRegister()"  ng-if="!ac.isLoggedIn() && ac.initialised">
                    Register
                </div>
                <div ng-if="ac.isLoggedIn() && ac.initialised" >
                    <h4 ng-click="ac.viewAccount()">
                        <a class="account-button"></a> Welcome {{ ac.currentUser.firstName }}</h4>
                </div>
            </div>
            <div class="col-md-6 low-pad-cell text-right" ng-if="ac.vs.displayGrid">
                <span class="framework-name" ng-if="ac.currentFramework" ng-click="ac.viewAccount()">
                    <h4> {{ ac.currentFramework.name }}</h4>
                </span>
                <div ng-click="ac.saveProgress()" ng-if="ac.initialised" ng-cloak
                     class="aif-button background-bright_green bottom-dark-border-bright_green">
                    Save Progress
                </div>
                <div ng-click="ac.submitFramework()"
                     class="aif-button background-bright_green bottom-dark-border-bright_green">Submit
                </div>
            </div>
            <div class="col-md-12 low-pad-cell text-right" ng-if="ac.vs.displaySummary" >
                <div ng-click="ac.vs.showGrid()"
                     class="aif-button background-bright_green bottom-dark-border-bright_green">Edit
                </div>
                <div ng-click="ac.downloadAifPdf()"
                     class="aif-button background-red bottom-dark-border-red">Download Pdf
                </div>
            </div>
        </div>

        <div class="base-framework" ng-controller="frameworkCtrl as ctrl" ng-if="ac.vs.displayGrid">
            <div class="row ng-scope">
                <div class="low-pad-cell ng-scope col-md-4">
                    <div class="aif-tile background-red" 
                         ng-click="ctrl.handleStepClick(1)">
                        <div class="bg-cloak" ng-if="ctrl.vs.fadeBg"
                             ng-click="ctrl.clearEditMode()"></div>
                        <h2 class="ng-binding ng-scope">Objectives</h2>
                        <div class="anchor-bottom ng-scope bottom-dark-border-red">
                            <div class="start-message ng-scope background-dark-red">
                                Start Here
                            </div>
                            <div class="circle-border ng-binding background-dark-red">
                                1
                            </div>
                        </div>
                    </div>
                </div>
                <div class="low-pad-cell ng-scope col-md-4">
                    <div class="aif-tile background-yellow" 
                         ng-click="ctrl.handleStepClick(2)">
                        <div class="bg-cloak" ng-if="ctrl.vs.fadeBg"
                             ng-click="ctrl.clearEditMode()"></div>
                        <h2 class="ng-binding ng-scope">Inputs</h2>
                        <div class="anchor-bottom ng-scope bottom-dark-border-yellow">
                            <div class="circle-border ng-binding background-dark-yellow">
                                2
                            </div>
                        </div>
                    </div>
                </div>
                <div class="low-pad-cell ng-scope col-md-4">
                    <div class="aif-tile background-green" 
                         ng-click="ctrl.handleStepClick(3)">
                        <div class="bg-cloak" ng-if="ctrl.vs.fadeBg"
                             ng-click="ctrl.clearEditMode()"></div>
                        <h2 class="ng-binding ng-scope">Activities</h2>
                        <div class="anchor-bottom ng-scope bottom-dark-border-green">
                            <div class="circle-border ng-binding background-dark-green">
                                3
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row ng-scope">
                <div class="low-pad-cell ng-scope col-md-4">
                    <div class="aif-tile background-light_blue" 
                         ng-click="ctrl.handleStepClick(4)">
                        <div class="bg-cloak" ng-if="ctrl.vs.fadeBg"
                             ng-click="ctrl.clearEditMode()"></div>
                        <h2 class="ng-binding ng-scope">Outputs</h2>
                        <div class="anchor-bottom ng-scope bottom-dark-border-light_blue">
                            <div class="circle-border ng-binding background-dark-light_blue">
                                4
                            </div>
                        </div>
                    </div>
                </div>
                <div class="low-pad-cell ng-scope col-md-4">
                    <div class="aif-tile background-dark_blue" 
                         ng-click="ctrl.handleStepClick(5)">
                        <div class="bg-cloak" ng-if="ctrl.vs.fadeBg"
                             ng-click="ctrl.clearEditMode()"></div>
                        <h2 class="ng-binding ng-scope">Out-takes</h2>
                        <div class="anchor-bottom ng-scope bottom-dark-border-dark_blue">
                            <div class="circle-border ng-binding background-dark-dark_blue">
                                5
                            </div>
                        </div>
                    </div>
                </div>
                <div class="low-pad-cell ng-scope col-md-4">
                    <div class="aif-tile background-dark_blue" 
                         ng-click="ctrl.handleStepClick(6)">
                        <div class="bg-cloak" ng-if="ctrl.vs.fadeBg"
                             ng-click="ctrl.clearEditMode()"></div>
                        <h2 class="ng-binding ng-scope">Outcomes</h2>
                        <div class="anchor-bottom ng-scope bottom-dark-border-dark_blue">
                            <div class="circle-border ng-binding background-dark-dark_blue">
                                6
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row ng-scope">
                <div class="low-pad-cell ng-scope col-md-8">
                    <div class="aif-tile background-purple" 
                         ng-click="ctrl.handleStepClick(7)">
                        <div class="bg-cloak" ng-if="ctrl.vs.fadeBg"
                             ng-click="ctrl.clearEditMode()"></div>
                        <h2 class="ng-binding ng-scope">Impact</h2>
                        <div class="anchor-bottom ng-scope bottom-dark-border-purple">
                            <div class="circle-border ng-binding background-dark-purple">
                                7
                            </div>
                        </div>
                    </div>
                </div>
                <div class="low-pad-cell ng-scope col-md-4">
                    <div class="aif-tile background-black" 
                         ng-click="ac.submitFramework()">
                        <div class="bg-cloak" ng-if="ctrl.vs.fadeBg"
                             ng-click="ctrl.clearEditMode()"></div>
                        <p class="submit-text ng-scope">
                            Click on submit button to view your content in the Integrated Evaluation Framework by AMEC.
                        </p>
                        <div
                             class="anchor-bottom background-bright_green bottom-dark-border-bright_green ng-scope">
                            <span class="button-label" data-bind="text: title">SUBMIT</span>
                        </div>
                    </div>
                </div>
            </div>


            <aif-user-screens ng-if="ctrl.vs.showingUserScreens()"></aif-user-screens>

            <aif-input-grid ng-if="ctrl.vs.displayEdit" step="ctrl.editStep"></aif-input-grid>




        </div>

        <aif-framework-summary ng-if="ac.vs.displaySummary">

        </aif-framework-summary>

    </div>
</div>