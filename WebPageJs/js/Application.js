/// <reference path="../_all.ts" />
var aif;
(function (aif) {
    (function (InputStyle) {
        InputStyle[InputStyle["TextArea"] = 1] = "TextArea";
        InputStyle[InputStyle["NumberedInputs"] = 2] = "NumberedInputs";
        InputStyle[InputStyle["LinkedInputs"] = 3] = "LinkedInputs";
        InputStyle[InputStyle["BlankInputs"] = 4] = "BlankInputs";
    })(aif.InputStyle || (aif.InputStyle = {}));
    var InputStyle = aif.InputStyle;
    var WorkflowInputItem = (function () {
        function WorkflowInputItem(heading, subHeading, leadText, remainText, inputStyle, inputSize) {
            this.heading = heading;
            this.subHeading = subHeading;
            this.leadText = leadText;
            this.remainText = remainText;
            this.inputStyle = inputStyle;
            this.inputSize = inputSize;
        }
        WorkflowInputItem.fromData = function (data) {
            return new WorkflowInputItem(data.heading, data.subHeading, data.leadText, data.remainText, data.inputStyle, data.inputSize);
        };
        return WorkflowInputItem;
    }());
    aif.WorkflowInputItem = WorkflowInputItem;
    var WorkflowInput = (function () {
        function WorkflowInput(stepIndex, row, colSpan) {
            this.stepIndex = stepIndex;
            this.row = row;
            this.colSpan = colSpan;
        }
        return WorkflowInput;
    }());
    aif.WorkflowInput = WorkflowInput;
    var WorkflowInputCell = (function () {
        function WorkflowInputCell(row, colSpan) {
            this.row = row;
            this.colSpan = colSpan;
            this.cellType = aif.WorkflowCellType.Input;
            this.visible = false;
        }
        WorkflowInputCell.prototype.showInfo = function (item) {
            if (!this.infoCell)
                return;
            this.infoCell.leadText = item.leadText;
            this.infoCell.remainText = item.remainText;
        };
        return WorkflowInputCell;
    }());
    aif.WorkflowInputCell = WorkflowInputCell;
    var WorkflowInfoCell = (function () {
        function WorkflowInfoCell(row, colSpan) {
            this.row = row;
            this.colSpan = colSpan;
            this.cellType = aif.WorkflowCellType.Info;
            this.visible = false;
        }
        return WorkflowInfoCell;
    }());
    aif.WorkflowInfoCell = WorkflowInfoCell;
    var WorkflowEmptyCell = (function () {
        function WorkflowEmptyCell(row, colSpan) {
            this.row = row;
            this.colSpan = colSpan;
            this.cellType = aif.WorkflowCellType.Empty;
        }
        return WorkflowEmptyCell;
    }());
    aif.WorkflowEmptyCell = WorkflowEmptyCell;
})(aif || (aif = {}));
/// <reference path="../_all.ts" />
var aif;
(function (aif) {
    'use strict';
    (function (WorkflowCellType) {
        WorkflowCellType[WorkflowCellType["Step"] = 0] = "Step";
        WorkflowCellType[WorkflowCellType["Input"] = 1] = "Input";
        WorkflowCellType[WorkflowCellType["Info"] = 2] = "Info";
        WorkflowCellType[WorkflowCellType["Empty"] = 3] = "Empty";
    })(aif.WorkflowCellType || (aif.WorkflowCellType = {}));
    var WorkflowCellType = aif.WorkflowCellType;
    var WorkflowStep = (function () {
        function WorkflowStep(title, index, row, colSpan, color, isSubmit) {
            this.title = title;
            this.index = index;
            this.row = row;
            this.colSpan = colSpan;
            this.color = color;
            this.isSubmit = isSubmit;
            this.inputRow = null;
            this.cellType = WorkflowCellType.Step;
        }
        WorkflowStep.prototype.loadInput = function (input) {
            if (this.inputRow) {
                for (var _i = 0, _a = this.inputRow; _i < _a.length; _i++) {
                    var cell = _a[_i];
                    if (cell.cellType === WorkflowCellType.Input) {
                        var inputCell = cell;
                        inputCell.items = input.items;
                    }
                }
            }
        };
        WorkflowStep.fromData = function (data) {
            var step = new WorkflowStep(data.title, data.index, data.row, data.colSpan, data.color, data.isSubmit === true);
            if (data.inputRow) {
                step.inputRow = [];
                var infoCell_1;
                var inputCell_1;
                data.inputRow.forEach(function (c) {
                    switch (c.cellType) {
                        case WorkflowCellType.Empty:
                            step.inputRow.push(new aif.WorkflowEmptyCell(c.row, c.colSpan));
                            break;
                        case WorkflowCellType.Info:
                            infoCell_1 = new aif.WorkflowInfoCell(c.row, c.colSpan);
                            step.inputRow.push(infoCell_1);
                            break;
                        case WorkflowCellType.Input:
                            inputCell_1 = new aif.WorkflowInputCell(c.row, c.colSpan);
                            step.inputRow.push(inputCell_1);
                            break;
                    }
                });
                if (infoCell_1 && inputCell_1)
                    inputCell_1.infoCell = infoCell_1;
            }
            return step;
        };
        return WorkflowStep;
    }());
    aif.WorkflowStep = WorkflowStep;
})(aif || (aif = {}));
/// <reference path="../_all.ts" />
var aif;
(function (aif) {
    'use strict';
    var WorkflowRow = (function () {
        function WorkflowRow(cells) {
            this.cells = cells;
        }
        return WorkflowRow;
    }());
    aif.WorkflowRow = WorkflowRow;
})(aif || (aif = {}));
/// <reference path="../_all.ts" />
/*

  New User

    Login -> don't have an account? -> register
    Register -> create subscriber + meta, return user object
        username
        password
        First Name
        Last Name
        Job Title
        Company
        Language

        -> User logged in
        -> No frameworks -> create new framework


  Existing User

     Register -> already registered -> forgot password?
     Forgot details
     Successful Login

        -> User logged in

        Has saved frameworks?

          Yes
          -> List existing
          -> or create new

          No
          -> No frameworks -> create new framework


    Create new framework

      Name
      Description


    Save frame work

        User logged in?
          No -> You need to log in to save.  User login below or register as a new amec user

          Yes ->

          Framework loaded?

            Yes?

            Save as xxxx dropdown or create new


            No ?

              Has other frameworks?

                No?

                Create new (limit)

                Yes?

                Create new or save over existing








* */
var aif;
(function (aif) {
    'use strict';
    var AifApp = (function () {
        function AifApp() {
            this.maxFrameworks = 3;
            this.user = null;
        }
        AifApp.prototype.loggedIn = function () {
            return this.user !== null;
        };
        return AifApp;
    }());
    aif.AifApp = AifApp;
    var AifFramework = (function () {
        function AifFramework(id, name, description) {
            this.id = id;
            this.name = name;
            this.description = description;
        }
        return AifFramework;
    }());
    aif.AifFramework = AifFramework;
    var AppUser = (function () {
        function AppUser(email, firstName, lastName, organisation, jobTitle, language) {
            this.email = email;
            this.firstName = firstName;
            this.lastName = lastName;
            this.organisation = organisation;
            this.jobTitle = jobTitle;
            this.language = language;
            this.password = null;
            this.passwordConfirmation = null;
        }
        return AppUser;
    }());
    aif.AppUser = AppUser;
    var AifUser = (function () {
        function AifUser(email, firstName, lastName, organisation, jobTitle, language) {
            this.email = email;
            this.firstName = firstName;
            this.lastName = lastName;
            this.organisation = organisation;
            this.jobTitle = jobTitle;
            this.language = language;
            this.frameworks = [];
        }
        AifUser.prototype.hasExistingFrameworks = function () {
            return this.frameworks != null && this.frameworks.length > 0;
        };
        AifUser.prototype.hasFrameworks = function () {
            return this.firstName.length > 0;
        };
        AifUser.prototype.asAppUser = function () {
            return new AppUser(this.email, this.firstName, this.lastName, this.organisation, this.jobTitle, this.language);
        };
        AifUser.createFromData = function (data) {
            return new AifUser(data.email, data.firstName, data.lastName, data.organisation, data.jobTitle, data.language);
        };
        return AifUser;
    }());
    aif.AifUser = AifUser;
    var LoginResult = (function () {
        function LoginResult(success, user, message) {
            this.success = success;
            this.user = user;
            this.message = message;
        }
        return LoginResult;
    }());
    aif.LoginResult = LoginResult;
})(aif || (aif = {}));
/// <reference path="../_all.ts" />
/// <reference path="../_all.ts" />
/// <reference path="../_all.ts" />
/// <reference path="../_all.ts" />
var aif;
(function (aif) {
    'use strict';
    var UserRepository = (function () {
        function UserRepository($timeout) {
            this.$timeout = $timeout;
            this.startLoggedIn = false;
        }
        UserRepository.prototype.get = function () {
            var self = this;
            return this.$timeout(function () {
                if (self.startLoggedIn) {
                    return aif.AifUser.createFromData(users[0]);
                }
                else {
                    return null;
                }
            }, 200);
        };
        UserRepository.prototype.logout = function () {
            return this.$timeout(function () {
                return true;
            });
        };
        UserRepository.prototype.login = function (email, password) {
            return this.$timeout(function () {
                var matches = users.filter(function (u) { return u.email == email; });
                if (matches.length) {
                    var user = aif.AifUser.createFromData(matches[0]);
                    if (user.email === "mail@michaelishmael.com") {
                        user.frameworks = userFrameworks;
                    }
                    return new aif.LoginResult(true, user, null);
                }
                else {
                    return new aif.LoginResult(false, null, "Login failed");
                }
            }, 200);
        };
        //wp_lostpassword_url()
        UserRepository.$inject = ["$timeout"];
        return UserRepository;
    }());
    aif.UserRepository = UserRepository;
    var users = [
        {
            email: "michaelishmael1976@gmail.com",
            firstName: "Michael",
            lastName: "Ishmael",
            organisation: "Michael Ishmael Ltd",
            jobTitle: "Director",
            language: "en"
        },
        {
            email: "mail@michaelishmael.com",
            firstName: "Michael",
            lastName: "Ishmael",
            organisation: "66 Bytes",
            jobTitle: "Director",
            language: "en"
        }
    ];
    var userFrameworks = [
        {
            id: 1,
            name: "Coca-cola summer campaign",
            description: "New music promotion"
        },
        {
            id: 2,
            name: "Sprite summer campaign",
            description: "New basketball promotion"
        }
    ];
})(aif || (aif = {}));
/// <reference path="../_all.ts" />
var aif;
(function (aif) {
    'use strict';
    var FrameworkRepository = (function () {
        function FrameworkRepository() {
        }
        FrameworkRepository.prototype.get = function () {
            var steps = this.getRawStepArray().map(function (s) { return aif.WorkflowStep.fromData(s); });
            var inputs = this.getRawInputArray();
            inputs.forEach(function (i) {
                steps.filter(function (s) { return s.index === i.stepIndex; }).forEach(function (s) { return s.loadInput(i); });
            });
            return steps;
        };
        FrameworkRepository.prototype.getRawStepArray = function () {
            var steps = [
                {
                    title: 'Objectives',
                    index: 1,
                    row: 1,
                    colSpan: 1,
                    color: "red",
                    cellType: aif.WorkflowCellType.Step,
                    inputRow: [
                        {
                            cellType: aif.WorkflowCellType.Input,
                            row: 1,
                            colSpan: 1
                        },
                        {
                            cellType: aif.WorkflowCellType.Info,
                            row: 1,
                            colSpan: 1
                        }
                    ]
                },
                {
                    title: 'Inputs',
                    index: 2,
                    row: 1,
                    colSpan: 1,
                    color: "yellow",
                    cellType: aif.WorkflowCellType.Step,
                    inputRow: [
                        {
                            cellType: aif.WorkflowCellType.Empty,
                            row: 1,
                            colSpan: 1
                        },
                        {
                            cellType: aif.WorkflowCellType.Input,
                            row: 1,
                            colSpan: 1
                        },
                        {
                            cellType: aif.WorkflowCellType.Info,
                            row: 1,
                            colSpan: 1
                        },
                    ]
                },
                {
                    title: 'Activity',
                    index: 3,
                    row: 1,
                    colSpan: 1,
                    color: "green",
                    cellType: aif.WorkflowCellType.Step,
                    inputRow: [
                        {
                            cellType: aif.WorkflowCellType.Info,
                            row: 1,
                            colSpan: 1
                        },
                        {
                            cellType: aif.WorkflowCellType.Input,
                            row: 1,
                            colSpan: 2
                        }
                    ]
                },
                {
                    title: 'Outputs',
                    index: 4,
                    row: 2,
                    colSpan: 1,
                    color: "light_blue",
                    cellType: aif.WorkflowCellType.Step,
                    inputRow: [
                        {
                            cellType: aif.WorkflowCellType.Input,
                            row: 2,
                            colSpan: 2
                        },
                        {
                            cellType: aif.WorkflowCellType.Info,
                            row: 2,
                            colSpan: 1
                        }
                    ]
                },
                {
                    title: 'Out-takes',
                    index: 5,
                    row: 2,
                    colSpan: 1,
                    color: "dark_blue",
                    cellType: aif.WorkflowCellType.Step,
                    inputRow: [
                        {
                            cellType: aif.WorkflowCellType.Empty,
                            row: 2,
                            colSpan: 1
                        },
                        {
                            cellType: aif.WorkflowCellType.Input,
                            row: 2,
                            colSpan: 1
                        },
                        {
                            cellType: aif.WorkflowCellType.Info,
                            row: 2,
                            colSpan: 1
                        }
                    ]
                },
                {
                    title: 'Outcomes',
                    index: 6,
                    row: 2,
                    colSpan: 1,
                    color: "dark_blue",
                    cellType: aif.WorkflowCellType.Step,
                    inputRow: [
                        {
                            cellType: aif.WorkflowCellType.Empty,
                            row: 2,
                            colSpan: 1
                        },
                        {
                            cellType: aif.WorkflowCellType.Info,
                            row: 2,
                            colSpan: 1
                        },
                        {
                            cellType: aif.WorkflowCellType.Input,
                            row: 2,
                            colSpan: 1
                        },
                    ]
                },
                {
                    title: 'Impact',
                    index: 7,
                    row: 3,
                    colSpan: 2,
                    color: "purple",
                    cellType: aif.WorkflowCellType.Step,
                    inputRow: [
                        {
                            cellType: aif.WorkflowCellType.Input,
                            row: 2,
                            colSpan: 2
                        },
                    ]
                },
                {
                    title: 'SUBMIT',
                    index: 8,
                    row: 3,
                    colSpan: 1,
                    color: "black",
                    isSubmit: true,
                    cellType: aif.WorkflowCellType.Step
                }
            ];
            return steps;
        };
        FrameworkRepository.prototype.getRawInputArray = function () {
            return [
                {
                    stepIndex: 1,
                    items: [
                        {
                            heading: "Organizational Objectives",
                            subHeading: "What are the broad objectives or your organisation?",
                            leadText: "Organizational Objectives",
                            remainText: "are usually published in the organization’s business plan or strategy. They are often long-term and require more than communication. Identify which organizational objectives your communication program can support.",
                            inputStyle: aif.InputStyle.TextArea,
                            inputSize: 500
                        },
                        {
                            heading: "Communications Objectives",
                            subHeading: "What are your communication objectives for this program?",
                            leadText: "Communications Objectives",
                            remainText: "are the specific objectives that your communication program, campaign, or project is designed to achieve. Your communication objectives must support one or more organizational objectives; identify which one\'s.</p><p>​Make sure your communications are SMART – Specific, Measurable, Achievable, Relevant and Time bound. Clearly define them and set targets for what you are looking to achieve",
                            inputStyle: aif.InputStyle.TextArea,
                            inputSize: 500
                        }
                    ]
                },
                {
                    stepIndex: 2,
                    items: [
                        {
                            heading: "Target Audience",
                            subHeading: "Define your key target audiences",
                            leadText: "Target Audience",
                            remainText: "define clearly with which audiences you are looking to communicate. Be as specific as possible. The more refined your audience definition, the more focussed your targeting can be. Think demographics, socio-economic data and media consumption habits.",
                            inputStyle: aif.InputStyle.NumberedInputs,
                            inputSize: 5
                        },
                        {
                            heading: "Strategy and other inputs",
                            subHeading: "Highlight your strategic plan and other 'inputs'",
                            leadText: "Strategy and other inputs",
                            remainText: "define the plan to reach your key target audiences and crucially achieve the SMART communications objectives and pre-defined targets that you have set. What are the key highlights from your plan? ​",
                            inputStyle: aif.InputStyle.NumberedInputs,
                            inputSize: 5
                        }
                    ]
                }
            ];
        };
        return FrameworkRepository;
    }());
    aif.FrameworkRepository = FrameworkRepository;
})(aif || (aif = {}));
/// <reference path="../_all.ts" />
var aif;
(function (aif) {
    'use strict';
    var AifService = (function () {
        function AifService($timeout, userRepository) {
            this.$timeout = $timeout;
            this.userRepository = userRepository;
        }
        AifService.prototype.getApp = function () {
            var self = this;
            if (self.app == null) {
                return self.buildApp().then(function (a) { return self.app = a; });
            }
            return this.$timeout(function () {
                return self.app;
            });
        };
        AifService.prototype.login = function (username, password) {
            var self = this;
            return this.userRepository.login(username, password).then(function (r) {
                self.user = r.user;
                self.app.user = r.user;
                return r;
            });
        };
        AifService.prototype.logout = function () {
            var _this = this;
            return this.userRepository.logout().then(function (b) {
                return _this.app.user = null;
            });
        };
        AifService.prototype.buildApp = function () {
            var _this = this;
            return this.userRepository.get().then(function (u) {
                _this.user = u;
                _this.app = new aif.AifApp();
                _this.app.user = u;
                return _this.app;
            });
        };
        AifService.$inject = ["$timeout", "userRepository"];
        return AifService;
    }());
    aif.AifService = AifService;
})(aif || (aif = {}));
/// <///<reference path=".../_all.ts" />
var aif;
(function (aif) {
    'use strict';
    var PasswordMatchDir = (function () {
        function PasswordMatchDir() {
            this.restrict = 'A';
            this.require = 'ngModel';
            this.link = function (scope, element, attrs, ctrl) {
                var firstPassword = '#' + attrs['pwCheck'];
                element.add(firstPassword).on('keyup', function () {
                    scope.$apply(function () {
                        var v = element.val() === $(firstPassword).val();
                        ctrl.$setValidity('pwmatch', v);
                    });
                });
            };
        }
        PasswordMatchDir.factory = function () {
            var directive = function () { return new PasswordMatchDir(); };
            //directive.$inject = ['$location', 'toaster'];
            return directive;
        };
        return PasswordMatchDir;
    }());
    aif.PasswordMatchDir = PasswordMatchDir;
})(aif || (aif = {}));
/// <///<reference path=".../_all.ts" />
var aif;
(function (aif) {
    'use strict';
    var FrameworkCtrl = (function () {
        function FrameworkCtrl($window, frameworkRepository) {
            this.$window = $window;
            this.frameworkRepository = frameworkRepository;
            this.editMode = false;
            this.editStep = null;
            this.infoCell = null;
            this.steps = frameworkRepository.get();
            this.rows = aif.FrameworkCtrl.setRowsFromSteps(this.steps);
        }
        FrameworkCtrl.prototype.getColorClass = function (prefix, step) {
            return prefix + "-" + step.color + " ";
        };
        FrameworkCtrl.prototype.handleStepClick = function (step) {
            if (!step.isSubmit) {
                this.switchToEditMode(step);
            }
            //submit
            return;
        };
        FrameworkCtrl.prototype.switchToEditMode = function (step) {
            this.editMode = true;
            step.showInput = true;
            this.editStep = step;
        };
        FrameworkCtrl.prototype.isInSameStep = function (scp, arg2) {
            console.log(arg2);
            return false;
        };
        FrameworkCtrl.prototype.clearEditMode = function () {
            this.editMode = false;
            this.editStep.showInput = false;
            this.editStep.inputRow.forEach(function (c) {
                if (c.cellType === aif.WorkflowCellType.Info) {
                    var i = c;
                    i.visible = false;
                }
            });
            this.editStep = null;
        };
        FrameworkCtrl.prototype.isInfo = function (cell) {
            if (cell.cellType == aif.WorkflowCellType.Info)
                return true;
            return false;
        };
        FrameworkCtrl.prototype.isEmpty = function (cell) {
            if (cell.cellType == aif.WorkflowCellType.Empty)
                return true;
            return false;
        };
        FrameworkCtrl.prototype.isInput = function (cell) {
            if (cell.cellType == aif.WorkflowCellType.Input)
                return true;
            return false;
        };
        FrameworkCtrl.prototype.showInfoCell = function (inputItem, infoCell) {
            //e.stopPropagation();
            if (inputItem && infoCell) {
                infoCell.leadText = inputItem.leadText;
                infoCell.remainText = inputItem.remainText;
                infoCell.visible = true;
            }
        };
        FrameworkCtrl.prototype.hideInfoCell = function () {
            if (this.infoCell) {
                this.infoCell.visible = false;
                this.infoCell = null;
            }
        };
        FrameworkCtrl.setRowsFromSteps = function (steps) {
            var rowObj = steps.reduce(function (grps, s) {
                (grps[s["row"]] = grps[s["row"]] || []).push(s);
                return grps;
            }, {});
            var rowCount = Math.max.apply(Math, steps.map(function (s) { return s.row; }));
            var rows = [];
            for (var i = 0; i < rowCount; i++) {
                var rowArray = rowObj[i + 1];
                var row = new aif.WorkflowRow(rowArray);
                rows.push(row);
            }
            return rows;
        };
        FrameworkCtrl.$inject = ["$window",
            "frameworkRepository"
        ];
        return FrameworkCtrl;
    }());
    aif.FrameworkCtrl = FrameworkCtrl;
})(aif || (aif = {}));
/// <///<reference path=".../_all.ts" />
var aif;
(function (aif) {
    'use strict';
    var AccountCtrl = (function () {
        function AccountCtrl($window, $sce, aifService) {
            this.$window = $window;
            this.$sce = $sce;
            this.aifService = aifService;
            this.loginFailure = false;
            this.message = null;
            this.displayLogic = null;
            this.userModel = null;
            this.initialised = false;
            this.currentFramework = null;
            this.savedFrameworkModel = null;
            this.init();
        }
        AccountCtrl.prototype.init = function () {
            var _this = this;
            var self = this;
            this.aifService.getApp().then(function (a) {
                self.app = a;
                if (a && a.user) {
                    _this.userModel = a.user.asAppUser();
                }
                else {
                    _this.userModel = new aif.AppUser(null, null, null, null, null, null);
                }
                _this.initialised = true;
            });
            this.displayLogic = new LoginDisplayLogic(this.$sce);
        };
        AccountCtrl.prototype.isLoggedIn = function () {
            return !!(this.app && this.app.user);
        };
        AccountCtrl.prototype.showLogin = function () {
            this.displayLogic.showLogin();
        };
        AccountCtrl.prototype.showForgottenDetails = function () {
            this.displayLogic.showForgottenDetails();
        };
        AccountCtrl.prototype.hideLoginBox = function () {
            this.displayLogic.hideLoginDisplay();
        };
        AccountCtrl.prototype.showRegister = function () {
            this.displayLogic.showRegister();
        };
        AccountCtrl.prototype.saveProgress = function () {
            this.displayLogic.attemptSave(this.isLoggedIn());
        };
        AccountCtrl.prototype.login = function (form) {
            if (form) {
                if (!form.$valid)
                    return;
                form.$setPristine();
                form.$setUntouched();
            }
            else {
                return;
            }
            var self = this;
            this.aifService.login(this.userModel.email, this.userModel.password).then(function (r) {
                if (!r.success) {
                    self.loginFailure = true;
                    self.message = r.message;
                }
                else {
                    self.userModel = r.user.asAppUser();
                    self.savedFrameworkModel = new SavedFrameworkModel();
                    self.displayLogic.showSelectFramework(self.app.user.hasExistingFrameworks());
                }
            }).catch(function (r) {
                self.loginFailure = true;
                self.message = r.message;
            });
        };
        AccountCtrl.prototype.registerNewUser = function (form) {
            if (!form.$valid)
                return;
            this.hideLoginBox();
        };
        AccountCtrl.prototype.loadOrCreateFramework = function (form) {
            var _this = this;
            if (!form.$valid)
                return;
            if (this.savedFrameworkModel.existingFrameworkId > -1) {
                var matches = this.app.user.frameworks.filter(function (f) { return f.id == _this.savedFrameworkModel.existingFrameworkId; });
                if (matches.length)
                    this.currentFramework = matches[0];
            }
            else if (this.savedFrameworkModel.newFrameworkName !== null) {
                if (this.app.user.frameworks === null)
                    this.app.user.frameworks = [];
                var newId = this.app.user.frameworks.length + 1;
                var newFramework = new aif.AifFramework(newId, this.savedFrameworkModel.newFrameworkName, this.savedFrameworkModel.newFrameworkDescription);
                this.app.user.frameworks.push(newFramework);
                this.currentFramework = newFramework;
            }
            this.hideLoginBox();
        };
        AccountCtrl.prototype.logout = function () {
            var self = this;
            this.displayLogic.hideLoginDisplay();
            this.aifService.logout().then(function (b) {
                if (b) {
                    //this.$window.location.href = "";
                    window.location.href = window.location.href;
                }
            });
        };
        AccountCtrl.$inject = ["$window", "$sce", "aifService"];
        return AccountCtrl;
    }());
    aif.AccountCtrl = AccountCtrl;
    var SavedFrameworkModel = (function () {
        function SavedFrameworkModel() {
            this.existingFrameworkId = -1;
            this.createNew = false;
            this.newFrameworkName = null;
            this.newFrameworkDescription = null;
        }
        return SavedFrameworkModel;
    }());
    aif.SavedFrameworkModel = SavedFrameworkModel;
    var LoginDisplayLogic = (function () {
        function LoginDisplayLogic($sce) {
            this.$sce = $sce;
            this.MESSAGES = {
                DEFAULT_LOGIN_Q: "New here?",
                DEFAULT_LOGIN_A: "Create an account",
                SAVE_ATTEMPT_LOGIN_Q: "You need to be logged in to save progress.<br>Log in below or",
                SAVE_ATTEMPT_LOGIN_A: "click here to create an account",
                OR_CREATE_NEW_FRAMEWORK: "...or create a new framework",
                JUST_CREATE_NEW_FRAMEWORK: "Use the fields below create a new framework"
            };
            this.fadeBg = false;
            this.displayLogin = false;
            this.loginGrayed = false;
            this.displaySelectFramework = false;
            this.hasExistingFrameworks = false;
            this.displayFtnDetails = false;
            this.displayRegister = false;
            this.displaySave = false;
            this.loginMessageQ = this.MESSAGES.DEFAULT_LOGIN_Q;
            this.loginMessageA = this.MESSAGES.DEFAULT_LOGIN_A;
            this.createMessage = this.MESSAGES.JUST_CREATE_NEW_FRAMEWORK;
            this.reset();
        }
        LoginDisplayLogic.prototype.showLogin = function () {
            this.reset();
            this.fadeBg = true;
            this.displayLogin = true;
        };
        LoginDisplayLogic.prototype.showSelectFramework = function (hasExisting) {
            this.reset();
            this.fadeBg = true;
            this.displayLogin = true;
            this.loginGrayed = true;
            this.displaySelectFramework = true;
            this.hasExistingFrameworks = hasExisting;
            if (hasExisting)
                this.createMessage = this.MESSAGES.OR_CREATE_NEW_FRAMEWORK;
        };
        LoginDisplayLogic.prototype.showForgottenDetails = function () {
            this.reset();
            this.fadeBg = true;
            this.displayFtnDetails = true;
        };
        LoginDisplayLogic.prototype.hideLoginDisplay = function () {
            this.reset();
        };
        LoginDisplayLogic.prototype.showRegister = function () {
            this.reset();
            this.fadeBg = true;
            this.displayRegister = true;
        };
        LoginDisplayLogic.prototype.attemptSave = function (loggedIn) {
            this.reset();
            this.fadeBg = true;
            if (!loggedIn) {
                this.loginMessageQ = this.$sce.trustAsHtml(this.MESSAGES.SAVE_ATTEMPT_LOGIN_Q);
                this.loginMessageA = this.MESSAGES.SAVE_ATTEMPT_LOGIN_A;
                this.displayLogin = true;
                return;
            }
            this.displaySave = true;
        };
        LoginDisplayLogic.prototype.reset = function () {
            this.fadeBg = false;
            this.displayLogin = false;
            this.loginGrayed = false;
            this.displaySelectFramework = false;
            this.hasExistingFrameworks = false;
            this.displayFtnDetails = false;
            this.displayRegister = false;
            this.displaySave = false;
            this.loginMessageQ = this.$sce.trustAsHtml(this.MESSAGES.DEFAULT_LOGIN_Q);
            this.loginMessageA = this.$sce.trustAsHtml(this.MESSAGES.DEFAULT_LOGIN_A);
            this.createMessage = this.$sce.trustAsHtml(this.MESSAGES.JUST_CREATE_NEW_FRAMEWORK);
        };
        return LoginDisplayLogic;
    }());
    aif.LoginDisplayLogic = LoginDisplayLogic;
})(aif || (aif = {}));
/// <reference path='_all.ts' />
/**
 * The main Aif app module.
 *
 * @type {angular.Module}
 */
var aif;
(function (aif_1) {
    'use strict';
    var aif = angular.module('aif', ['tw.directives.clickOutside'])
        .service('userRepository', aif_1.UserRepository)
        .service('frameworkRepository', aif_1.FrameworkRepository)
        .service('aifService', aif_1.AifService)
        .directive('passwordMatchDir', aif_1.PasswordMatchDir.factory())
        .controller('accountCtrl', aif_1.AccountCtrl)
        .controller('frameworkCtrl', aif_1.FrameworkCtrl);
})(aif || (aif = {}));
/// <reference path='libs/jquery/jquery.d.ts' />
/// <reference path='libs/angular/angular.d.ts' />
/// <reference path='models/WorkflowInput.ts' />
/// <reference path='models/WorkflowStep.ts' />
/// <reference path='models/WorkflowRow.ts' />
/// <reference path='models/AifUser.ts' />
/// <reference path='interfaces/IUserRepository.ts' />
/// <reference path='interfaces/IFrameworkRepository.ts' />
/// <reference path='interfaces/IAifService.ts' />
/// <reference path="services/UserRepository.ts" />
/// <reference path="services/FrameworkRepository.ts" />
/// <reference path="services/AifService.ts" />
/// <reference path="directives/PasswordMatchDir.ts" />
/// <reference path="controllers/FrameworkCtrl.ts" />
/// <reference path="controllers/AccountCtrl.ts" />
/// <reference path='Application.ts' /> 
//# sourceMappingURL=Application.js.map