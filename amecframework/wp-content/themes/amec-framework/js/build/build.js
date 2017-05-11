var aif;
(function (aif) {
    'use strict';
    var AifStepInputStyle;
    (function (AifStepInputStyle) {
        AifStepInputStyle[AifStepInputStyle["FreeText"] = 1] = "FreeText";
        AifStepInputStyle[AifStepInputStyle["NumberedValues"] = 2] = "NumberedValues";
        AifStepInputStyle[AifStepInputStyle["KeyedValues"] = 3] = "KeyedValues";
    })(AifStepInputStyle = aif.AifStepInputStyle || (aif.AifStepInputStyle = {}));
    var AifStepSummaryStyle;
    (function (AifStepSummaryStyle) {
        AifStepSummaryStyle[AifStepSummaryStyle["Entry"] = 0] = "Entry";
        AifStepSummaryStyle[AifStepSummaryStyle["WholeStep"] = 1] = "WholeStep";
    })(AifStepSummaryStyle = aif.AifStepSummaryStyle || (aif.AifStepSummaryStyle = {}));
    var AifInputCellType;
    (function (AifInputCellType) {
        AifInputCellType[AifInputCellType["Input"] = 1] = "Input";
        AifInputCellType[AifInputCellType["Info"] = 2] = "Info";
        AifInputCellType[AifInputCellType["Empty"] = 3] = "Empty";
    })(AifInputCellType = aif.AifInputCellType || (aif.AifInputCellType = {}));
    var AifData = (function () {
        function AifData() {
        }
        return AifData;
    }());
    AifData.baseCopy = {
        "S1_L": {
            description: "Step Label 1",
            en: "Objectives",
            translation: null
        },
        "S1_I1_H": {
            description: "Step 1 Input 1 Heading",
            en: "Organisational Objectives",
            translation: null
        },
        "S1_I1_SH": {
            description: "Step 1 Input 1 Sub-heading",
            en: "What are the overall objectives or your organisation?",
            translation: null
        },
        "S1_I1_I": {
            description: "Step 1 Input 1 Info",
            en: "<span class=\"lead-in\" >Organizational Objectives</span> are usually published in the organization’s business plan or strategy. They are often long-term and require more than communication. Identify which organizational objectives your communication program can support.",
            translation: null
        },
        "S1_I2_H": {
            description: "Step 1 Input 2 Heading",
            en: "Communication Objectives",
            translation: null
        },
        "S1_I2_SH": {
            description: "Step 1 Input 2 Sub-heading",
            en: "What are your communication objectives for this program?",
            translation: null
        },
        "S1_I2_I": {
            description: "Step 1 Input 2 Info",
            en: "<span class=\"lead-in\" >Communications Objectives</span> are the specific, measureable, achievable, relevant, time-bound (SMART) objectives that your communication program, campaign, or project is designed to achieve. Your SMART communication objectives must support one or more organizational objectives; identify which one's.",
            translation: null
        }
    };
    AifData.stepStructure = [
        {
            stepIndex: 1,
            stepHeadingKey: "S1_L",
            inputStyle: AifStepInputStyle.FreeText,
            summaryStyle: AifStepSummaryStyle.Entry,
            baseColor: "red",
            row: 1,
            colSpan: 2,
            cellOrder: [AifInputCellType.Input, AifInputCellType.Info],
            inputs: [
                {
                    headingKey: "S1_I1_H",
                    subHeadingKey: "S1_I1_SH",
                    infoKey: "S1_I1_I",
                    textLimit: 500,
                    valuesKey: "S1_I1_V"
                },
                {
                    headingKey: "S1_I2_H",
                    subHeadingKey: "S1_I2_SH",
                    infoKey: "S1_I2_I",
                    textLimit: 500,
                    valuesKey: "S1_I2_V"
                }
            ]
        }
    ];
    aif.AifData = AifData;
})(aif || (aif = {}));
/// <reference path="../_all.ts" />
var aif;
(function (aif) {
    var InputStyle;
    (function (InputStyle) {
        InputStyle[InputStyle["TextArea"] = 1] = "TextArea";
        InputStyle[InputStyle["NumberedInputs"] = 2] = "NumberedInputs";
        InputStyle[InputStyle["LinkedInputs"] = 3] = "LinkedInputs";
        InputStyle[InputStyle["BlankInputs"] = 4] = "BlankInputs";
    })(InputStyle = aif.InputStyle || (aif.InputStyle = {}));
    var WorkflowInputItem = (function () {
        function WorkflowInputItem(heading, subHeading, leadText, remainText, inputStyle, inputSize) {
            this.heading = heading;
            this.subHeading = subHeading;
            this.leadText = leadText;
            this.remainText = remainText;
            this.inputStyle = inputStyle;
            this.inputSize = inputSize;
            this.frameworkEntry = null;
            this.createFrameworkEntry();
        }
        WorkflowInputItem.prototype.createFrameworkEntry = function () {
            switch (this.inputStyle) {
                case InputStyle.TextArea:
                default:
                    this.frameworkEntry = new AifFreeTextFrameworkEntry(this.heading);
            }
        };
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
    var WorkflowCellType;
    (function (WorkflowCellType) {
        WorkflowCellType[WorkflowCellType["Step"] = 0] = "Step";
        WorkflowCellType[WorkflowCellType["Input"] = 1] = "Input";
        WorkflowCellType[WorkflowCellType["Info"] = 2] = "Info";
        WorkflowCellType[WorkflowCellType["Empty"] = 3] = "Empty";
    })(WorkflowCellType = aif.WorkflowCellType || (aif.WorkflowCellType = {}));
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
            this.inputEntries = [];
        }
        WorkflowStep.prototype.loadInput = function (input) {
            if (this.inputRow) {
                for (var _i = 0, _a = this.inputRow; _i < _a.length; _i++) {
                    var cell = _a[_i];
                    if (cell.cellType === WorkflowCellType.Input) {
                        var inputCell = cell;
                        inputCell.items = input.items.map(function (i) {
                            return aif.WorkflowInputItem.fromData(i);
                        });
                        this.inputEntries = inputCell.items;
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
    var AppUser = (function () {
        function AppUser(email, firstName, lastName, organisation, jobTitle, language, contactNumber) {
            this.email = email;
            this.firstName = firstName;
            this.lastName = lastName;
            this.organisation = organisation;
            this.jobTitle = jobTitle;
            this.language = language;
            this.contactNumber = contactNumber;
            this.password = null;
            this.passwordConfirmation = null;
        }
        return AppUser;
    }());
    aif.AppUser = AppUser;
    var AifUser = (function () {
        function AifUser(email, firstName, lastName, organisation, jobTitle, language, contactNumber) {
            this.email = email;
            this.firstName = firstName;
            this.lastName = lastName;
            this.organisation = organisation;
            this.jobTitle = jobTitle;
            this.language = language;
            this.contactNumber = contactNumber;
            this.frameworks = [];
            this.currentFramework = null;
        }
        AifUser.prototype.hasExistingFrameworks = function () {
            return this.frameworks != null && this.frameworks.length > 0;
        };
        AifUser.prototype.setExistingFramework = function (id) {
            var matches = this.frameworks.filter(function (f) { return f.id === id; });
            if (matches.length) {
                this.currentFramework = matches[0];
            }
            else {
                this.currentFramework = null;
            }
        };
        AifUser.prototype.addNewFramework = function (newFramework) {
            this.frameworks.push(newFramework);
            this.currentFramework = newFramework;
        };
        AifUser.prototype.hasFrameworks = function () {
            return this.firstName.length > 0;
        };
        AifUser.prototype.asAppUser = function () {
            return new AppUser(this.email, this.firstName, this.lastName, this.organisation, this.jobTitle, this.language, this.contactNumber);
        };
        AifUser.createFromData = function (data) {
            return new AifUser(data.email, data.firstName, data.lastName, data.organisation, data.jobTitle, data.language, data.contactNumber);
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
var aif;
(function (aif) {
    'use strict';
    var AifFramework = (function () {
        function AifFramework(id, name, description) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.selected = false;
            this.flaggedDelete = false;
            this.current = false;
            this.editView = null;
            this.summaryView = null;
        }
        return AifFramework;
    }());
    aif.AifFramework = AifFramework;
    var AifFrameworkEditView = (function () {
        function AifFrameworkEditView() {
            this.steps = [];
        }
        return AifFrameworkEditView;
    }());
    aif.AifFrameworkEditView = AifFrameworkEditView;
    var AifUserFramework = (function () {
        function AifUserFramework(frameworkId, userData) {
            this.frameworkId = frameworkId;
            this.userData = userData;
            this.inputs = {};
        }
        AifUserFramework.prototype.addInputOrEmpty = function (key, inputStyle) {
            if (inputStyle == aif.AifStepInputStyle.KeyedValues) {
                if (this.userData.inputs.hasOwnProperty(key)) {
                    this.inputs[key] = this.userData.inputs[key].map(function (v) {
                        return new AifKeyPairInputValue(v.key, v.value);
                    });
                }
                else {
                    this.inputs[key] = [];
                }
            }
            else {
                if (this.userData.inputs.hasOwnProperty(key)) {
                    this.inputs[key] = this.userData.inputs[key].map(function (v) {
                        return new AifStringInputValue(v);
                    });
                }
                else {
                    this.inputs[key] = [];
                }
            }
        };
        return AifUserFramework;
    }());
    aif.AifUserFramework = AifUserFramework;
    var AifSummary = (function () {
        function AifSummary() {
            this.rows = [];
        }
        return AifSummary;
    }());
    aif.AifSummary = AifSummary;
    var AifSummaryRow = (function () {
        function AifSummaryRow() {
            this.sections = [];
            this.maxRowHeight = -1;
        }
        return AifSummaryRow;
    }());
    aif.AifSummaryRow = AifSummaryRow;
    var AifSummarySection = (function () {
        function AifSummarySection(heading) {
            this.heading = heading;
            this.groups = [];
            this.width = 1;
        }
        return AifSummarySection;
    }());
    aif.AifSummarySection = AifSummarySection;
    var AifSummaryGroup = (function () {
        function AifSummaryGroup(heading, color) {
            this.heading = heading;
            this.color = color;
            this.steps = [];
        }
        return AifSummaryGroup;
    }());
    aif.AifSummaryGroup = AifSummaryGroup;
    var AifFrameworkStep = (function () {
        function AifFrameworkStep(stepIndex, heading) {
            this.stepIndex = stepIndex;
            this.heading = heading;
            this.inputs = [];
            this.summaryHeading = heading;
        }
        AifFrameworkStep.prototype.html = function () {
            var ht = "";
            if (this.inputs)
                this.inputs.forEach(function (e) {
                    var eht = e.html();
                    if (eht) {
                        if (ht.length)
                            ht += "<br>";
                        ht += eht.trim();
                    }
                });
            return ht.trim();
        };
        return AifFrameworkStep;
    }());
    aif.AifFrameworkStep = AifFrameworkStep;
    var AifStepInput = (function () {
        function AifStepInput() {
            this.heading = null;
            this.subHeading = null;
            this.info = null;
            this.textLimit = 500;
        }
        AifStepInput.prototype.html = function () {
            var ht = "";
            if (this.values)
                this.values.forEach(function (v) {
                    var eht = v.asHtml();
                    if (eht) {
                        if (ht.length)
                            ht += "<br>";
                        ht += eht.trim();
                    }
                });
            return ht.trim();
        };
        return AifStepInput;
    }());
    aif.AifStepInput = AifStepInput;
    var AifStringInputValue = (function () {
        function AifStringInputValue(text) {
            this.text = text;
        }
        AifStringInputValue.prototype.asHtml = function () {
            return this.text;
        };
        AifStringInputValue.prototype.asJson = function () {
            return JSON.stringify(this.text);
        };
        return AifStringInputValue;
    }());
    aif.AifStringInputValue = AifStringInputValue;
    var AifKeyPairInputValue = (function () {
        function AifKeyPairInputValue(key, text) {
            this.key = key;
            this.text = text;
        }
        AifKeyPairInputValue.prototype.asHtml = function () {
            return "<span class=\"key\">" + this.key + "</span><span class=\"value\">" + this.key + "</span>";
        };
        AifKeyPairInputValue.prototype.asJson = function () {
            return JSON.stringify({
                key: this.key,
                text: this.text
            });
        };
        return AifKeyPairInputValue;
    }());
    aif.AifKeyPairInputValue = AifKeyPairInputValue;
    var SaveFrameworkResult = (function () {
        function SaveFrameworkResult(success, frameWork, message) {
            this.success = success;
            this.frameWork = frameWork;
            this.message = message;
        }
        return SaveFrameworkResult;
    }());
    aif.SaveFrameworkResult = SaveFrameworkResult;
})(aif || (aif = {}));
/// <reference path="../_all.ts" />
/// <reference path="../_all.ts" />
/// <reference path="../_all.ts" />
var aif;
(function (aif) {
    'use strict';
    var AccountDisplayRoute;
    (function (AccountDisplayRoute) {
        AccountDisplayRoute[AccountDisplayRoute["FromLogin"] = 0] = "FromLogin";
        AccountDisplayRoute[AccountDisplayRoute["FromSave"] = 1] = "FromSave";
        AccountDisplayRoute[AccountDisplayRoute["FromViewAccount"] = 2] = "FromViewAccount";
    })(AccountDisplayRoute = aif.AccountDisplayRoute || (aif.AccountDisplayRoute = {}));
    var ViewService = (function () {
        function ViewService($sce) {
            this.$sce = $sce;
            this.fadeBg = false;
            this.displayEdit = false;
            this.displayLogin = false;
            this.displayAccount = false;
            this.displayCreate = false;
            this.displaySaveAs = false;
            this.accountDisplayRoute = AccountDisplayRoute.FromViewAccount;
            this.displayFtnDetails = false;
            this.displayGrid = true;
            this.displaySummary = false;
            this.displaySelectFramework = false;
            this.hasExistingFrameworks = false;
            this.displayRegister = false;
            this.displaySave = false;
            this.reset();
        }
        ViewService.prototype.showSummary = function () {
            this.reset();
            this.displaySummary = true;
            this.displayGrid = false;
        };
        ViewService.prototype.showGrid = function () {
            this.reset();
            this.displaySummary = false;
            this.displayGrid = true;
        };
        ViewService.prototype.showLogin = function (fromSave) {
            if (fromSave === void 0) { fromSave = false; }
            this.reset();
            this.fadeBg = true;
            if (fromSave)
                this.accountDisplayRoute = AccountDisplayRoute.FromSave;
            this.displayLogin = true;
        };
        ViewService.prototype.showAccount = function (route) {
            this.reset();
            this.fadeBg = true;
            this.displayAccount = true;
            this.accountDisplayRoute = route;
        };
        ViewService.prototype.showCreateFramework = function (route, hasExisting) {
            this.reset();
            this.fadeBg = true;
            this.displayCreate = true;
            this.accountDisplayRoute = route;
            this.hasExistingFrameworks = hasExisting;
        };
        ViewService.prototype.showForgottenDetails = function () {
            this.reset();
            this.fadeBg = true;
            this.displayFtnDetails = true;
        };
        ViewService.prototype.resetView = function () {
            this.reset();
        };
        ViewService.prototype.showRegister = function () {
            this.reset();
            this.fadeBg = true;
            this.displayRegister = true;
        };
        ViewService.prototype.attemptSave = function (loggedIn, hasExisting) {
            if (hasExisting === void 0) { hasExisting = false; }
            this.reset();
            this.fadeBg = true;
            this.accountDisplayRoute = AccountDisplayRoute.FromSave;
            if (!loggedIn) {
                this.displayLogin = true;
                return;
            }
            else {
                if (hasExisting) {
                    this.displaySaveAs = true;
                }
                else {
                    this.displayCreate = true;
                }
            }
        };
        ViewService.prototype.showEdit = function () {
            this.reset();
            this.displayEdit = true;
            this.fadeBg = true;
        };
        ViewService.prototype.showCreate = function (hasExisting) {
            if (hasExisting === void 0) { hasExisting = false; }
            this.reset();
            this.fadeBg = true;
            this.displayCreate = true;
        };
        ViewService.prototype.reset = function () {
            this.fadeBg = false;
            this.displayEdit = false;
            this.displayLogin = false;
            this.displayAccount = false;
            this.accountDisplayRoute = AccountDisplayRoute.FromViewAccount;
            this.displayCreate = false;
            this.displaySaveAs = false;
            this.displaySelectFramework = false;
            this.hasExistingFrameworks = false;
            this.displayFtnDetails = false;
            this.displayRegister = false;
            this.displaySave = false;
        };
        return ViewService;
    }());
    ViewService.$inject = ["$sce"];
    aif.ViewService = ViewService;
})(aif || (aif = {}));
/// <reference path="../_all.ts" />
var aif;
(function (aif) {
    'use strict';
    var UserRepository = (function () {
        function UserRepository($timeout, $rootScope, $cookies, $http) {
            this.$timeout = $timeout;
            this.$rootScope = $rootScope;
            this.$cookies = $cookies;
            this.$http = $http;
            //For debug
            this.startLoggedIn = false;
        }
        UserRepository.prototype.get = function () {
            var _this = this;
            var regUrl = ajax_auth_object.ajaxurl;
            var restUrl = ajax_auth_object.resturl + "aif/v1/userframeworks";
            var data = {
                action: 'ajaxloggedin',
                security: ajax_auth_object.logged_in_nonce
            };
            var user = null;
            return this.$http.post(regUrl, data).then(function (response) {
                if (response.data && response.data.loggedIn) {
                    var d = response.data;
                    user = new aif.AifUser(d.email, d.displayName, null, null, null, null, null);
                    user.id = d.userId;
                    var loggedC = _this.$cookies.get("justloggedin");
                    if (loggedC && loggedC.toString().toLowerCase() === "true") {
                        user.justLoggedIn = true;
                        _this.$cookies.remove("justloggedin");
                    }
                    _this.currentUser = user;
                    return _this.$http.get(restUrl);
                }
                return null;
            }, function (e) {
                return null;
            }).then(function (response) {
                user.frameworks = response.data.map(function (f) { return new aif.AifFramework(f.id, f.title, f.excerpt); });
                return user;
            });
            // return this.$timeout(() => {
            //   let cUser = this.$cookies.getObject("aifUser");
            //   if (cUser && cUser.email) {
            //     let matches = users.filter(u => u.email == cUser.email);
            //     if (matches.length) {
            //       let user = AifUser.createFromData(matches[0]);
            //       if (user.email === "mail@michaelishmael.com") {
            //         user.frameworks = userFrameworks;
            //         if(cUser.currentFrameworkId){
            //           user.setExistingFramework(cUser.currentFrameworkId);
            //         }
            //
            //       }
            //       this.currentUser = user;
            //       return user;
            //
            //   }
            //   else {
            //     return null;
            //   }
            // }
            // }
            // , 200);
        };
        UserRepository.prototype.save = function () {
            var _this = this;
            return this.$timeout(function () {
                if (!_this.currentUser) {
                    return new aif.SaveFrameworkResult(false, null, "User not logged in");
                }
                if (!_this.currentUser.currentFramework) {
                    //Save here
                }
                return new aif.SaveFrameworkResult(true, _this.currentUser.currentFramework, null);
            }, 200);
        };
        UserRepository.prototype.registerNewUser = function (user) {
            var _this = this;
            var regUrl = ajax_auth_object.ajaxurl;
            var regUser = {
                action: 'ajaxregister',
                username: user.email,
                password: user.password,
                email: user.email,
                firstName: user.firstName,
                security: ajax_auth_object.register_nonce,
                lastName: user.lastName,
                organisation: user.organisation,
                jobTitle: user.jobTitle,
                contactNumber: user.contactNumber,
                locale: user.language
            };
            return this.$http.post(regUrl, regUser).then(function (r) {
                if (r.data && r.data.loggedIn) {
                    var newUser = new aif.AifUser(user.email, user.firstName, user.lastName, user.organisation, user.jobTitle, user.language, user.contactNumber);
                    newUser.id = r.data.userId;
                    _this.currentUser = newUser;
                    _this.$cookies.put("justloggedin", "true");
                    _this.$rootScope.$broadcast("user:loggedIn", newUser);
                    return new aif.LoginResult(true, newUser, null);
                }
                return new aif.LoginResult(false, null, "Registration error");
            }, function (e) {
                return new aif.LoginResult(false, null, e.statusText);
            });
            /*      return this.$timeout(() => {
            
                    let newUser = new AifUser(
                      user.email,
                      user.firstName,
                      user.lastName,
                      user.organisation,
                      user.jobTitle,
                      user.language,
                      user.contactNumber
                    );
            
                    this.currentUser = newUser;
                    this.$rootScope.$broadcast("user:loggedIn", newUser);
                    this.storeUser();
                    return new LoginResult(true, newUser, null);
            
                  });*/
        };
        UserRepository.prototype.logout = function () {
            var _this = this;
            var regUrl = ajax_auth_object.ajaxurl;
            var regUser = {
                action: 'ajaxlogout',
                security: ajax_auth_object.logout_nonce
            };
            return this.$http.post(regUrl, regUser).then(function (response) {
                _this.currentUser = null;
                _this.$rootScope.$broadcast("user:loggedOut");
                return !(response.data && !response.data.loggedOut);
            }, function (e) {
                return false;
            });
        };
        UserRepository.prototype.sendPasswordLink = function (email) {
            return this.$timeout(function () {
                //TODO: password link
                return true;
            });
        };
        UserRepository.prototype.login = function (email, password) {
            var _this = this;
            var regUrl = ajax_auth_object.ajaxurl;
            var regUser = {
                action: 'ajaxlogin',
                username: email,
                password: password,
                security: ajax_auth_object.login_nonce
            };
            return this.$http.post(regUrl, regUser).then(function (r) {
                if (r.data && r.data.loggedIn) {
                    var newUser = new aif.AifUser(email, r.data.displayName, null, null, null, null, null);
                    _this.currentUser = newUser;
                    ajax_auth_object.logout_nonce = r.data.logOutNonce;
                    _this.$cookies.put("justloggedin", "true");
                    _this.$rootScope.$broadcast("user:loggedIn", newUser);
                    return new aif.LoginResult(true, newUser, null);
                }
                return new aif.LoginResult(false, null, r.data.message);
            }, function (e) {
                return new aif.LoginResult(false, null, e.statusText);
            });
            /*      return this.$timeout(() => {
                    let matches = users.filter(u => u.email == email);
                    if (matches.length) {
                      let user = AifUser.createFromData(matches[0]);
                      if (user.email === "mail@michaelishmael.com") {
                        user.frameworks = userFrameworks;
                      }
                      this.currentUser = user;
                      this.$rootScope.$broadcast("user:loggedIn", user);
                      this.storeUser();
                      return new LoginResult(true, user, null);
                    } else {
                      return new LoginResult(false, null, "Login failed")
                    }
            
                  }, 200);*/
        };
        UserRepository.prototype.storeUser = function () {
            var userObj = {
                email: this.currentUser.email,
                currentFrameworkId: null
            };
            if (this.currentUser.currentFramework)
                userObj.currentFrameworkId = this.currentUser.currentFramework.id;
            this.$cookies.putObject("aifUser", userObj);
        };
        UserRepository.prototype.createNewFramework = function (name, description) {
            var _this = this;
            var hasUser = !!this.currentUser;
            var regUrl = ajax_auth_object.resturl + 'wp/v2/aifworkflows-api/';
            var data = {
                title: name,
                content: description,
                author: this.currentUser.id,
                excerpt: description,
                type: "aif_workflow",
                status: "publish"
            };
            return this.$http.post(regUrl, JSON.stringify(data)).then(function (response) {
                var postId = response.data.id;
                var framework = new aif.AifFramework(postId, name, description);
                _this.currentUser.frameworks.push(framework);
                return new aif.SaveFrameworkResult(true, framework, null);
            }, function (e) {
                return new aif.SaveFrameworkResult(false, null, e.statusText);
            });
            /*
                  return this.$timeout(() => {
                    if (!hasUser) return new SaveFrameworkResult(false, null, "User not logged in");
            
                    let newId = this.currentUser.frameworks == null ? 1 : this.currentUser.frameworks.length + 1;
                    let framework = new AifFramework(newId, name, description);
                    this.currentUser.frameworks.forEach(f => f.current = false);
                    framework.current = true;
                    this.currentUser.addNewFramework(framework);
                    this.storeUser();
                    this.$rootScope.$broadcast("framework:frameworkUpdated", framework);
                    return new SaveFrameworkResult(true, framework, "Framework created")
            
                  }, 200);*/
        };
        UserRepository.prototype.setExistingFramework = function (id) {
            var _this = this;
            var hasUser = !!this.currentUser;
            return this.$timeout(function () {
                if (!hasUser)
                    return new aif.SaveFrameworkResult(false, null, "User not logged in");
                if (_this.currentUser.frameworks == null)
                    return new aif.SaveFrameworkResult(false, null, "User has no frameworks");
                var matches = _this.currentUser.frameworks.filter(function (f) { return f.id === id; });
                if (matches.length) {
                    var framework = matches[0];
                    _this.currentUser.frameworks.forEach(function (f) { return f.current = false; });
                    framework.current = true;
                    //TODO: Save framework here
                    _this.currentUser.currentFramework = framework;
                    _this.$rootScope.$broadcast("framework:frameworkUpdated", framework);
                    _this.storeUser();
                    return new aif.SaveFrameworkResult(true, framework, "Framework selected");
                }
                else {
                    _this.currentUser.currentFramework = null;
                    _this.$rootScope.$broadcast("framework:frameworkUpdated", null);
                    return new aif.SaveFrameworkResult(false, null, "No matching frameworks found");
                }
            }, 200);
        };
        UserRepository.prototype.deleteFramework = function (id) {
            var _this = this;
            var hasUser = !!this.currentUser;
            return this.$timeout(function () {
                if (!hasUser)
                    return false;
                if (_this.currentUser.frameworks == null)
                    return false;
                var foundIndex = -1;
                var foundFramework = null;
                _this.currentUser.frameworks.forEach(function (f, i) {
                    if (f.id == id) {
                        foundIndex = i;
                        foundFramework = f;
                    }
                });
                if (foundIndex > -1) {
                    if (_this.currentUser.currentFramework == foundFramework) {
                        _this.currentUser.currentFramework = null;
                        _this.$rootScope.$broadcast("framework:frameworkUpdated", null);
                    }
                    _this.currentUser.frameworks.splice(foundIndex, 1);
                }
            }, 200);
        };
        return UserRepository;
    }());
    //wp_lostpassword_url()
    UserRepository.$inject = ["$timeout", "$rootScope", '$cookies', '$http'];
    aif.UserRepository = UserRepository;
    var users = [
        {
            email: "michaelishmael1976@gmail.com",
            firstName: "Michael",
            lastName: "Ishmael",
            organisation: "Michael Ishmael Ltd",
            jobTitle: "Director",
            language: "en",
            contactNumber: "07866 627 323"
        },
        {
            email: "mail@michaelishmael.com",
            firstName: "Michael",
            lastName: "Ishmael",
            organisation: "66 Bytes",
            jobTitle: "Director",
            language: "en",
            contactNumber: "07866 627 323"
        }
    ];
    var userFrameworks = [
        {
            id: 1,
            name: "Coca-cola spring campaign",
            description: "New music promotion",
            selected: false,
            flaggedDelete: false,
            current: false
        },
        {
            id: 2,
            name: "Sprite summer campaign",
            description: "New basketball promotion",
            selected: false,
            flaggedDelete: false,
            current: false
        },
        // {
        //   id: 3,
        //   name: "Fanta summer campaign",
        //   description: "Renewed comedy promotion",
        //   selected: false,
        //   flaggedDelete: false,
        //   current: false
        // },
        {
            id: 4,
            name: "Diet Coke summer campaign",
            description: "Continued lifestyle promotion",
            selected: false,
            flaggedDelete: false,
            current: false
        },
        {
            id: 5,
            name: "Coke Zero winter",
            description: "Xtreme sports tie-ins",
            selected: false,
            flaggedDelete: false,
            current: false
        }
    ];
})(aif || (aif = {}));
/// <reference path="../_all.ts" />
var aif;
(function (aif) {
    'use strict';
    var FrameworkRepository = (function () {
        function FrameworkRepository($timeout, $rootScope, $cookies, userRepository) {
            this.$timeout = $timeout;
            this.$rootScope = $rootScope;
            this.$cookies = $cookies;
            this.userRepository = userRepository;
            this.editView = null;
            this.frameworkSummary = null;
            this.currentUserFramework = null;
        }
        FrameworkRepository.prototype.getEditView = function (frameworkId) {
            var _this = this;
            var currentFramework;
            if (this.editView && this.currentUserFramework.frameworkId == frameworkId)
                return this.editView;
            if (this.userRepository.currentUser
                && this.userRepository.currentUser.currentFramework) {
                if (this.userRepository.currentUser.currentFramework.editView)
                    return this.userRepository.currentUser.currentFramework.editView;
                currentFramework = this.userRepository.currentUser.currentFramework;
            }
            var structureSteps = aif.AifData.stepStructure;
            var copy = aif.AifData.baseCopy;
            var userData = this.getMockUserFramework();
            this.currentUserFramework = new aif.AifUserFramework(frameworkId, userData);
            var steps = structureSteps.map(function (s) {
                var heading = _this.resolveTranslation(copy[s.stepHeadingKey]);
                var step = new aif.AifFrameworkStep(s.stepIndex, heading);
                step.baseColor = s.baseColor;
                step.row = s.row;
                step.colSpan = s.colSpan;
                step.cellOrder = s.cellOrder;
                step.inputStyle = s.inputStyle;
                step.summaryStyle = s.summaryStyle;
                step.inputs = s.inputs.map(function (i) {
                    var input = new aif.AifStepInput();
                    input.textLimit = i.textLimit;
                    input.heading = _this.resolveTranslation(copy[i.headingKey]);
                    input.subHeading = _this.resolveTranslation(copy[i.subHeadingKey]);
                    input.info = _this.resolveTranslation(copy[i.infoKey]);
                    _this.currentUserFramework.addInputOrEmpty(i.valuesKey, s.inputStyle);
                    input.values = _this.currentUserFramework.inputs[i.valuesKey];
                    return input;
                });
                return step;
            });
            this.editView = new aif.AifFrameworkEditView();
            this.editView.steps = steps;
            if (currentFramework)
                currentFramework.editView = this.editView;
            return this.editView;
        };
        FrameworkRepository.prototype.resolveTranslation = function (copyItem) {
            if (!copyItem)
                return null;
            if (copyItem.translation)
                return copyItem.translation;
            return copyItem.en;
        };
        FrameworkRepository.prototype.getMockUserFramework = function () {
            return {
                inputs: {
                    "S1_I1_V": ["This is my ​Organizational Objectives text"],
                    "S1_I2_V": ["This is my Communications Objectives text"],
                }
            };
        };
        FrameworkRepository.prototype.getSummary = function () {
            var _this = this;
            return this.$timeout(function () {
                if (_this.editView == null)
                    return null;
                var steps = _this.editView.steps;
                var summary = new aif.AifSummary();
                var data = _this.getRawSummaryArray();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var dataRow = data_1[_i];
                    var summaryRow = new aif.AifSummaryRow();
                    for (var _a = 0, _b = dataRow.sections; _a < _b.length; _a++) {
                        var dataSection = _b[_a];
                        var summarySection = new aif.AifSummarySection(dataSection.heading);
                        summarySection.width = dataSection.width;
                        for (var _c = 0, _d = dataSection.groups; _c < _d.length; _c++) {
                            var dataGroup = _d[_c];
                            var summaryGroup = new aif.AifSummaryGroup(dataGroup.heading, dataGroup.color);
                            for (var _e = 0, _f = dataGroup.entries; _e < _f.length; _e++) {
                                var dataEntry = _f[_e];
                                var entry = findEntry(dataEntry.stepId, dataEntry.stepEntryIndex, dataEntry.headingOverride);
                                if (entry)
                                    summaryGroup.steps.push(entry);
                            }
                            summarySection.groups.push(summaryGroup);
                        }
                        summaryRow.sections.push(summarySection);
                    }
                    summary.rows.push(summaryRow);
                }
                _this.frameworkSummary = summary;
                return summary;
                function findEntry(stepIndex, entryIndex, headingOverride) {
                    var matches = steps.filter(function (s) { return s.stepIndex == stepIndex; });
                    if (matches.length) {
                        var step = matches[0];
                        if (entryIndex && step.inputs.length >= entryIndex) {
                            var iEntry = step.inputs[entryIndex - 1];
                            if (headingOverride)
                                iEntry.summaryHeading = headingOverride;
                            return iEntry;
                        }
                        if (headingOverride)
                            step.summaryHeading = headingOverride;
                        return step;
                    }
                    return null;
                }
            }, 1);
        };
        FrameworkRepository.prototype.getRawSummaryArray = function () {
            return [
                {
                    sections: [
                        {
                            heading: "Preparation",
                            groups: [
                                {
                                    heading: "Align Objectives",
                                    color: "red",
                                    entries: [
                                        {
                                            entryType: "stepItem",
                                            stepId: 1,
                                            stepEntryIndex: 1
                                        },
                                        {
                                            entryType: "stepItem",
                                            stepId: 1,
                                            stepEntryIndex: 2
                                        }
                                    ]
                                },
                                {
                                    heading: "Plan & Set Targets",
                                    color: "yellow",
                                    entries: [
                                        {
                                            entryType: "stepItem",
                                            stepId: 2,
                                            stepEntryIndex: 1
                                        },
                                        {
                                            entryType: "stepItem",
                                            stepId: 2,
                                            stepEntryIndex: 2,
                                            headingOverride: "Strategy"
                                        }
                                    ]
                                }
                            ],
                            width: 1
                        }
                    ],
                    maxRowHeight: 176
                },
                {
                    sections: [
                        {
                            heading: "Implementation",
                            groups: [
                                {
                                    heading: "Implement",
                                    color: "green",
                                    entries: [
                                        {
                                            entryType: "step",
                                            stepId: 3,
                                        }
                                    ]
                                }
                            ],
                            width: .25
                        },
                        {
                            heading: "Measurement & Insights",
                            groups: [
                                {
                                    heading: "Measure Activity",
                                    color: "light_blue",
                                    entries: [
                                        {
                                            entryType: "step",
                                            stepId: 4,
                                        }
                                    ]
                                },
                                {
                                    heading: "Organisational & Stakeholder Effects",
                                    color: "dark_blue",
                                    entries: [
                                        {
                                            entryType: "step",
                                            stepId: 5,
                                        },
                                        {
                                            entryType: "step",
                                            stepId: 6,
                                        }
                                    ]
                                },
                                {
                                    heading: "Organisation & Stakeholder Effects",
                                    color: "purple",
                                    entries: [
                                        {
                                            entryType: "step",
                                            stepId: 7,
                                        }
                                    ]
                                },
                            ],
                            width: .75
                        }
                    ],
                    maxRowHeight: 300
                }
            ];
        };
        return FrameworkRepository;
    }());
    FrameworkRepository.$inject = ["$timeout", "$rootScope", '$cookies', 'userRepository'];
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
        return AifService;
    }());
    AifService.$inject = ["$timeout", "userRepository"];
    aif.AifService = AifService;
})(aif || (aif = {}));
var aif;
(function (aif) {
    'use strict';
    var TEMPLATE_PATH = aif_constants.templateDir;
    var AifLoginScreen = (function () {
        function AifLoginScreen() {
            this.templateUrl = TEMPLATE_PATH + '/js/app/views/login.html';
            this.restrict = 'E';
            this.controllerAs = 'lc';
            this.bindToContoller = true;
        }
        AifLoginScreen.prototype.link = function (scope, element, attributes, ctrl) {
        };
        AifLoginScreen.factory = function () {
            var directive = function () { return new AifLoginScreen(); };
            //directive.$inject = ['$location'];
            return directive;
        };
        return AifLoginScreen;
    }());
    AifLoginScreen.$inject = [''];
    aif.AifLoginScreen = AifLoginScreen;
    var AifUserScreens = (function () {
        function AifUserScreens() {
            this.templateUrl = TEMPLATE_PATH + '/js/app/views/userScreens.html';
            //template: string = "<h1>User Screens</h1>";
            this.restrict = 'E';
            this.controller = aif.UserScreensCtrl;
            this.controllerAs = 'us';
            this.bindToController = true;
            this.replace = true;
        }
        //replace=true;
        AifUserScreens.prototype.link = function (scope, element, attributes) {
            console.log('here');
        };
        AifUserScreens.factory = function () {
            var directive = function () { return new AifUserScreens(); };
            //directive.$inject = ['$location'];
            return directive;
        };
        return AifUserScreens;
    }());
    AifUserScreens.$inject = [''];
    aif.AifUserScreens = AifUserScreens;
    var AifAccountScreen = (function () {
        function AifAccountScreen() {
            this.templateUrl = TEMPLATE_PATH + '/js/app/views/account.html';
            this.restrict = 'E';
            this.controllerAs = 'av';
            this.bindToContoller = true;
        }
        AifAccountScreen.prototype.link = function (scope, element, attributes, ctrl) {
        };
        AifAccountScreen.factory = function () {
            var directive = function () { return new AifAccountScreen(); };
            //directive.$inject = ['$location'];
            return directive;
        };
        return AifAccountScreen;
    }());
    AifAccountScreen.$inject = [''];
    aif.AifAccountScreen = AifAccountScreen;
    var AifCreateFwScreen = (function () {
        function AifCreateFwScreen() {
            this.templateUrl = TEMPLATE_PATH + '/js/app/views/create.html';
            this.restrict = 'E';
            this.controllerAs = 'cf';
            this.bindToContoller = true;
        }
        AifCreateFwScreen.prototype.link = function (scope, element, attributes, ctrl) {
        };
        AifCreateFwScreen.factory = function () {
            var directive = function () { return new AifCreateFwScreen(); };
            //directive.$inject = ['$location'];
            return directive;
        };
        return AifCreateFwScreen;
    }());
    AifCreateFwScreen.$inject = [''];
    aif.AifCreateFwScreen = AifCreateFwScreen;
    var AifSaveAsScreen = (function () {
        function AifSaveAsScreen() {
            this.templateUrl = TEMPLATE_PATH + '/js/app/views/saveAs.html';
            this.restrict = 'E';
            this.controllerAs = 'cf';
            this.bindToContoller = true;
        }
        AifSaveAsScreen.prototype.link = function (scope, element, attributes, ctrl) {
        };
        AifSaveAsScreen.factory = function () {
            var directive = function () { return new AifSaveAsScreen(); };
            //directive.$inject = ['$location'];
            return directive;
        };
        return AifSaveAsScreen;
    }());
    AifSaveAsScreen.$inject = [''];
    aif.AifSaveAsScreen = AifSaveAsScreen;
    var AifRegisterScreen = (function () {
        function AifRegisterScreen() {
            this.templateUrl = TEMPLATE_PATH + '/js/app/views/register.html';
            this.restrict = 'E';
            this.controllerAs = 'rc';
            this.bindToContoller = true;
        }
        AifRegisterScreen.prototype.link = function (scope, element, attributes, ctrl) {
        };
        AifRegisterScreen.factory = function () {
            var directive = function () { return new AifRegisterScreen(); };
            //directive.$inject = ['$location'];
            return directive;
        };
        return AifRegisterScreen;
    }());
    AifRegisterScreen.$inject = [''];
    aif.AifRegisterScreen = AifRegisterScreen;
    var AifResetPassword = (function () {
        function AifResetPassword() {
            this.templateUrl = TEMPLATE_PATH + '/js/app/views/resetPassword.html';
            this.restrict = 'E';
            this.controllerAs = 'rc';
            this.bindToContoller = true;
        }
        AifResetPassword.prototype.link = function (scope, element, attributes, ctrl) {
        };
        AifResetPassword.factory = function () {
            var directive = function () { return new AifResetPassword(); };
            //directive.$inject = ['$location'];
            return directive;
        };
        return AifResetPassword;
    }());
    AifResetPassword.$inject = [''];
    aif.AifResetPassword = AifResetPassword;
    var AifFrameworkSummary = (function () {
        function AifFrameworkSummary() {
            this.templateUrl = TEMPLATE_PATH + '/js/app/views/frameworkSummary.html';
            this.restrict = 'E';
        }
        AifFrameworkSummary.factory = function () {
            var directive = function () { return new AifFrameworkSummary(); };
            //directive.$inject = ['$location'];
            return directive;
        };
        return AifFrameworkSummary;
    }());
    AifFrameworkSummary.$inject = [''];
    aif.AifFrameworkSummary = AifFrameworkSummary;
    var AifControlRow = (function () {
        function AifControlRow() {
            this.templateUrl = TEMPLATE_PATH + '/js/app/views/controlRow.html';
            this.restrict = 'E';
        }
        AifControlRow.factory = function () {
            var directive = function () { return new AifControlRow(); };
            //directive.$inject = ['$location'];
            return directive;
        };
        return AifControlRow;
    }());
    AifControlRow.$inject = [''];
    aif.AifControlRow = AifControlRow;
    var AifListInputTile = (function () {
        function AifListInputTile() {
            this.templateUrl = TEMPLATE_PATH + '/js/app/views/listInputTile.html';
            this.restrict = 'E';
            this.scope = {
                cell: '=',
                step: '='
            };
            this.controller = aif.ListInputTileCtrl;
            this.controllerAs = 'li';
        }
        //replace=true;
        AifListInputTile.prototype.link = function (scope, element, attributes) {
        };
        AifListInputTile.factory = function () {
            var directive = function () { return new AifListInputTile(); };
            //directive.$inject = ['$location'];
            return directive;
        };
        return AifListInputTile;
    }());
    AifListInputTile.$inject = [''];
    aif.AifListInputTile = AifListInputTile;
})(aif || (aif = {}));
var aif;
(function (aif) {
    'use strict';
    var FrameworkCtrl = (function () {
        function FrameworkCtrl($window, frameworkRepository, vs) {
            this.$window = $window;
            this.frameworkRepository = frameworkRepository;
            this.vs = vs;
            this.editMode = false;
            this.editStep = null;
            this.infoCell = null;
            this.init();
        }
        FrameworkCtrl.prototype.init = function () {
            this.editView = this.frameworkRepository.getEditView(-1);
        };
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
            this.vs.showEdit();
            this.editMode = true;
            step.showInput = true;
            this.editStep = step;
        };
        FrameworkCtrl.prototype.isInSameStep = function (scp, arg2) {
            console.log(arg2);
            return false;
        };
        FrameworkCtrl.prototype.clearEditMode = function () {
            this.vs.resetView();
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
            if (cell.cellType == aif.WorkflowCellType.Input) {
                var inputCell = cell;
                if (inputCell.items[0].inputStyle !== aif.InputStyle.NumberedInputs)
                    return true;
            }
            return false;
        };
        FrameworkCtrl.prototype.isListInput = function (cell) {
            if (cell.cellType == aif.WorkflowCellType.Input) {
                var inputCell = cell;
                if (inputCell.items[0].inputStyle === aif.InputStyle.NumberedInputs)
                    return true;
            }
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
        return FrameworkCtrl;
    }());
    FrameworkCtrl.$inject = ["$window",
        "frameworkRepository",
        "viewService"
    ];
    aif.FrameworkCtrl = FrameworkCtrl;
})(aif || (aif = {}));
var aif;
(function (aif) {
    'use strict';
    var RegisterCtrl = (function () {
        function RegisterCtrl(vs, userRepository) {
            this.vs = vs;
            this.userRepository = userRepository;
            this.loginFailure = false;
            this.loginMessage = null;
            this.showNeedMessage = false;
            this.userModel = null;
            this.init();
        }
        RegisterCtrl.prototype.init = function () {
            //this.userModel = new AppUser(null, null, null, null, null, null, null);
            this.userModel = new aif.AppUser("guyincognito@hamptons.com", "Guy", "Incognito", "Hamptons", "Boss", "en", "07931");
            this.userModel.password = "Crumpet1";
            this.userModel.passwordConfirmation = "Crumpet1";
        };
        RegisterCtrl.prototype.registerNewUser = function (form) {
            var _this = this;
            if (!form.$valid)
                return;
            this.userRepository.registerNewUser(this.userModel).then(function (r) {
                if (r.success) {
                    _this.vs.resetView();
                }
                else {
                    //TODO: display error
                }
            });
        };
        return RegisterCtrl;
    }());
    RegisterCtrl.$inject = ["viewService", "userRepository"];
    aif.RegisterCtrl = RegisterCtrl;
})(aif || (aif = {}));
var aif;
(function (aif) {
    'use strict';
    var ResetPasswordCtrl = (function () {
        function ResetPasswordCtrl(vs, userRepository) {
            this.vs = vs;
            this.userRepository = userRepository;
            this.init();
        }
        ResetPasswordCtrl.prototype.init = function () {
        };
        ResetPasswordCtrl.prototype.resend = function () {
            this.linkSent = false;
        };
        ResetPasswordCtrl.prototype.sendReset = function (form) {
            var _this = this;
            if (!form.$valid)
                return;
            this.userRepository.sendPasswordLink(this.email).then(function (s) {
                if (s) {
                    _this.linkSent = true;
                }
            });
        };
        return ResetPasswordCtrl;
    }());
    ResetPasswordCtrl.$inject = ["viewService", "userRepository"];
    aif.ResetPasswordCtrl = ResetPasswordCtrl;
})(aif || (aif = {}));
var aif;
(function (aif) {
    'use strict';
    var ListInputTileCtrl = (function () {
        function ListInputTileCtrl($scope, vs) {
            this.$scope = $scope;
            this.vs = vs;
            this.message = "List testy";
            this.init();
        }
        ListInputTileCtrl.prototype.init = function () {
            this.cell = this.$scope.cell;
            this.step = this.$scope.step;
        };
        ListInputTileCtrl.prototype.close = function () {
            this.vs.resetView();
        };
        ListInputTileCtrl.prototype.getColorClass = function (prefix, step) {
            return prefix + "-" + step.color + " ";
        };
        return ListInputTileCtrl;
    }());
    ListInputTileCtrl.$inject = ["$scope", "viewService"];
    aif.ListInputTileCtrl = ListInputTileCtrl;
})(aif || (aif = {}));
var aif;
(function (aif) {
    'use strict';
    var CreateFrameworkCtrl = (function () {
        function CreateFrameworkCtrl($scope, userRepository, vs) {
            this.$scope = $scope;
            this.userRepository = userRepository;
            this.vs = vs;
            this.title = "New Measurement Framework";
            this.user = null;
            this.existingFrameworkId = null;
            this.newFrameworkName = null;
            this.newFrameworkDescription = null;
            this.createMessage = " ";
            this.cancelButtonText = "Cancel";
            this.saveUnsuccessful = false;
            this.saveFailMessage = null;
            this.init();
        }
        CreateFrameworkCtrl.prototype.init = function () {
            if (!this.userRepository.currentUser) {
                this.vs.showLogin();
                return;
            }
            if (this.vs.accountDisplayRoute == aif.AccountDisplayRoute.FromSave) {
                this.createMessage = "Create a new framework to save your progress.";
            }
            if (this.vs.accountDisplayRoute == aif.AccountDisplayRoute.FromLogin) {
                this.title = "Create your first framework";
                this.createMessage = "Create a new framework to store your progress.";
                this.cancelButtonText = "Skip for now";
            }
            this.user = this.userRepository.currentUser;
        };
        CreateFrameworkCtrl.prototype.createNewFramework = function (form) {
            var _this = this;
            if (!form.$valid)
                return;
            if (this.user) {
                this.userRepository.createNewFramework(this.newFrameworkName, this.newFrameworkDescription)
                    .then(function (r) {
                    if (r.success) {
                        _this.vs.resetView();
                    }
                    else {
                        _this.saveUnsuccessful = true;
                        _this.saveFailMessage = r.message;
                    }
                });
            }
        };
        return CreateFrameworkCtrl;
    }());
    CreateFrameworkCtrl.$inject = ["$scope", "userRepository", "viewService"];
    aif.CreateFrameworkCtrl = CreateFrameworkCtrl;
})(aif || (aif = {}));
var aif;
(function (aif) {
    'use strict';
    var FrameworkSummaryCtrl = (function () {
        function FrameworkSummaryCtrl($window, frameworkRepository, vs) {
            this.$window = $window;
            this.frameworkRepository = frameworkRepository;
            this.vs = vs;
            this.editMode = false;
            this.editStep = null;
            this.infoCell = null;
            this.summary = null;
            this.sectionOne = null;
            this.sectionTwo = null;
            this.sectionThree = null;
            this.message = "Hoi hoi";
            this.init();
        }
        FrameworkSummaryCtrl.prototype.init = function () {
            var _this = this;
            this.steps = this.frameworkRepository.get();
            this.rows = this.setRowsFromSteps(this.steps);
            this.frameworkRepository.getSummary().then(function (r) {
                _this.summary = r;
                _this.sectionOne = _this.summary.rows[0].sections[0];
                _this.sectionTwo = _this.summary.rows[1].sections[0];
                _this.sectionThree = _this.summary.rows[1].sections[1];
            });
        };
        FrameworkSummaryCtrl.prototype.getColorClass = function (prefix, color) {
            if (color === "red" && prefix.indexOf("light") > -1) {
                return prefix + "pale_grey";
            }
            return prefix + color;
        };
        FrameworkSummaryCtrl.prototype.getWidthClass = function (group, inside) {
            if (group.steps.length == 2) {
                return "col-md-6";
            }
            if (inside)
                return "col-md-12";
            return "col-md-3";
        };
        FrameworkSummaryCtrl.prototype.setRowsFromSteps = function (steps) {
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
        return FrameworkSummaryCtrl;
    }());
    FrameworkSummaryCtrl.$inject = ["$window",
        "frameworkRepository",
        "viewService"
    ];
    aif.FrameworkSummaryCtrl = FrameworkSummaryCtrl;
})(aif || (aif = {}));
var aif;
(function (aif) {
    'use strict';
    var SaveAsCtrl = (function () {
        function SaveAsCtrl($scope, userRepository, vs) {
            this.$scope = $scope;
            this.userRepository = userRepository;
            this.vs = vs;
            this.title = "Your account";
            this.user = null;
            this.currentFramework = null;
            this.altMessage = "S";
            this.exInc = 0;
            this.saveUnsuccessful = false;
            this.saveFailMessage = null;
            this.colors = ["red", "yellow", "green", "light_blue", "dark_blue", "purple"];
            this.init();
        }
        SaveAsCtrl.prototype.getColorClass = function (prefix, index) {
            if (index === void 0) { index = 0; }
            if (index > this.colors.length - 1)
                index = index % this.colors.length;
            return prefix + "-" + this.colors[index] + " ";
        };
        SaveAsCtrl.prototype.init = function () {
            if (!this.userRepository.currentUser) {
                this.vs.showLogin(true);
                return;
            }
            this.user = this.userRepository.currentUser;
            if (this.user.currentFramework) {
                this.currentFramework = this.user.currentFramework;
                this.toggleSelectFramework(this.currentFramework);
                this.altMessage = "Alternatively, s";
                this.exInc = 1;
            }
            this.setTitle(this.vs.accountDisplayRoute);
        };
        SaveAsCtrl.prototype.setTitle = function (displayRoute) {
            this.title = "Save framework";
            if (this.currentFramework) {
            }
            else {
            }
        };
        SaveAsCtrl.prototype.saveAsSelectedFramework = function () {
            var _this = this;
            if (this.user && this.frameworkIsSelected()) {
                var selected = this.user.frameworks.filter(function (f) { return f.selected; })[0];
                this.userRepository.setExistingFramework(selected.id).then(function (s) {
                    if (s) {
                        _this.vs.resetView();
                    }
                });
            }
        };
        SaveAsCtrl.prototype.toggleSelectFramework = function (framework) {
            if (framework.selected) {
                framework.selected = false;
            }
            else {
                this.user.frameworks.forEach(function (f) { return f.selected = false; });
                framework.selected = true;
            }
        };
        SaveAsCtrl.prototype.frameworkIsSelected = function () {
            return this.user.frameworks.some(function (f) { return f.selected; });
        };
        return SaveAsCtrl;
    }());
    SaveAsCtrl.$inject = ["$scope", "userRepository", "viewService"];
    aif.SaveAsCtrl = SaveAsCtrl;
})(aif || (aif = {}));
var getEntireDom;
var downloadPDF;
var aif;
(function (aif) {
    'use strict';
    var AppCtrl = (function () {
        function AppCtrl($scope, $window, $sce, userRepository, vs) {
            this.$scope = $scope;
            this.$window = $window;
            this.$sce = $sce;
            this.userRepository = userRepository;
            this.vs = vs;
            this.loginFailure = false;
            this.message = null;
            this.initialised = false;
            this.savedFrameworkModel = null;
            this.currentFramework = null;
            this.currentUser = null;
            this.init();
        }
        AppCtrl.prototype.init = function () {
            var _this = this;
            this.$scope.$on("user:loggedIn", function (event, data) { _this.userLoggedChanged(data); });
            this.$scope.$on("user:loggedOut", function (event) { _this.userLoggedChanged(null); });
            this.$scope.$on("framework:frameworkUpdated", function (event, data) { _this.setCurrentFramework(data); });
            var self = this;
            this.userRepository.get().then(function (user) {
                if (user) {
                    _this.currentUser = user;
                    if (user.justLoggedIn) {
                        _this.initialised = true;
                        if (user.hasExistingFrameworks())
                            _this.vs.showAccount(aif.AccountDisplayRoute.FromLogin);
                        else {
                            _this.vs.showCreateFramework(aif.AccountDisplayRoute.FromLogin, false);
                        }
                    }
                    if (user.currentFramework)
                        _this.currentFramework = user.currentFramework;
                }
                _this.initialised = true;
            });
        };
        AppCtrl.prototype.userLoggedChanged = function (user) {
            if (user) {
                this.currentUser = user;
                if (this.currentUser.currentFramework) {
                    this.setCurrentFramework(this.currentUser.currentFramework);
                }
            }
            else {
                this.currentUser = null;
                this.currentFramework = null;
            }
        };
        AppCtrl.prototype.setCurrentFramework = function (framework) {
            this.currentFramework = framework;
        };
        AppCtrl.prototype.isLoggedIn = function () {
            return !!this.currentUser;
        };
        AppCtrl.prototype.submitFramework = function () {
            //TODO: saving etc
            this.vs.showSummary();
        };
        AppCtrl.prototype.showLogin = function () {
            this.vs.showLogin();
        };
        AppCtrl.prototype.showForgottenDetails = function () {
            this.vs.showForgottenDetails();
        };
        AppCtrl.prototype.hideLoginBox = function () {
            this.vs.resetView();
        };
        AppCtrl.prototype.showRegister = function () {
            this.vs.showRegister();
        };
        AppCtrl.prototype.viewAccount = function () {
            this.vs.showAccount(aif.AccountDisplayRoute.FromViewAccount);
        };
        AppCtrl.prototype.saveProgress = function () {
            var loggedIn = this.isLoggedIn();
            var hasExisting = loggedIn ? this.currentUser.hasExistingFrameworks() : false;
            this.vs.attemptSave(loggedIn, hasExisting);
        };
        AppCtrl.prototype.downloadAifPdf = function () {
            if (getEntireDom && downloadPDF) {
                var opts = {
                    document_type: 'pdf',
                    document_content: getEntireDom(),
                    name: 'Framework',
                    javascript: false,
                    test: false
                };
                downloadPDF(opts, 'UmPbAOzv3fSfgTsHLZV');
            }
        };
        AppCtrl.prototype.registerNewUser = function (form) {
            if (!form.$valid)
                return;
            this.hideLoginBox();
        };
        AppCtrl.prototype.loadOrCreateFramework = function (form) {
            if (!form.$valid)
                return;
            if (this.savedFrameworkModel.existingFrameworkId > -1) {
                var self_1 = this;
                var matches = this.app.user.frameworks.filter(function (f) { return f.id === self_1.savedFrameworkModel.existingFrameworkId; });
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
        return AppCtrl;
    }());
    AppCtrl.$inject = ["$scope", "$window", "$sce", "userRepository", "viewService"];
    aif.AppCtrl = AppCtrl;
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
var aif;
(function (aif) {
    'use strict';
    var AccountViewCtrl = (function () {
        function AccountViewCtrl($scope, userRepository, vs) {
            this.$scope = $scope;
            this.userRepository = userRepository;
            this.vs = vs;
            this.title = "Your account";
            this.user = null;
            this.createMessage = "Use the fields below create a new framework.";
            this.colors = ["red", "yellow", "green", "light_blue", "dark_blue", "purple"];
            this.init();
        }
        AccountViewCtrl.prototype.getColorClass = function (prefix, index) {
            if (index === void 0) { index = 0; }
            if (index > this.colors.length - 1)
                index = index % this.colors.length;
            return prefix + "-" + this.colors[index] + " ";
        };
        AccountViewCtrl.prototype.init = function () {
            if (!this.userRepository.currentUser) {
                this.vs.showLogin();
                return;
            }
            this.user = this.userRepository.currentUser;
            if (this.user.hasExistingFrameworks()) {
                this.createMessage = "...or create a new framework.";
            }
            this.setTitle(this.vs.accountDisplayRoute);
        };
        AccountViewCtrl.prototype.logout = function () {
            this.closeView();
            this.userRepository.logout().then(function (b) {
                if (b) {
                    //this.$window.location.href = "";
                    window.location.href = window.location.href;
                }
            });
        };
        AccountViewCtrl.prototype.setTitle = function (displayRoute) {
            switch (displayRoute) {
                case aif.AccountDisplayRoute.FromLogin:
                    this.title = "Log in successful!";
                    break;
                case aif.AccountDisplayRoute.FromSave:
                    this.title = "Save framework";
                    break;
                case aif.AccountDisplayRoute.FromViewAccount:
                default:
                    // do nothing
                    break;
            }
        };
        AccountViewCtrl.prototype.closeView = function () {
            this.user.frameworks.forEach(function (f) { return f.selected = false; });
            this.user.frameworks.forEach(function (f) { return f.flaggedDelete = false; });
            this.vs.resetView();
        };
        AccountViewCtrl.prototype.loadSelectedFramework = function () {
            var _this = this;
            if (this.user && this.frameworkIsSelected()) {
                var selected = this.user.frameworks.filter(function (f) { return f.selected; })[0];
                this.userRepository.setExistingFramework(selected.id).then(function (r) {
                    if (r.success) {
                        _this.closeView();
                    }
                    else {
                    }
                });
            }
        };
        AccountViewCtrl.prototype.showCreateFramework = function () {
            this.vs.showCreate(this.user.hasExistingFrameworks());
        };
        AccountViewCtrl.prototype.frameworkIsSelected = function () {
            return this.user.frameworks.some(function (f) { return f.selected; });
        };
        AccountViewCtrl.prototype.deleteFramework = function ($event, framework) {
            this.userRepository.deleteFramework(framework.id).then(function (s) {
                if (!s) {
                    framework.flaggedDelete = false;
                    //TODO: message failure
                }
            });
            $event.preventDefault();
        };
        AccountViewCtrl.prototype.toggleSelectFramework = function (framework) {
            if (framework.selected) {
                framework.selected = false;
            }
            else {
                this.user.frameworks.forEach(function (f) { return f.selected = false; });
                framework.selected = true;
            }
        };
        AccountViewCtrl.prototype.toggleFlagDeleteFramework = function ($event, framework) {
            framework.flaggedDelete = !framework.flaggedDelete;
        };
        return AccountViewCtrl;
    }());
    AccountViewCtrl.$inject = ["$scope", "userRepository", "viewService"];
    aif.AccountViewCtrl = AccountViewCtrl;
})(aif || (aif = {}));
var aif;
(function (aif) {
    'use strict';
    var LoginCtrl = (function () {
        function LoginCtrl(vs, userRepository) {
            this.vs = vs;
            this.userRepository = userRepository;
            this.loginFailure = false;
            this.loginMessage = null;
            this.showNeedMessage = false;
            this.init();
        }
        LoginCtrl.prototype.init = function () {
            if (this.vs.accountDisplayRoute == aif.AccountDisplayRoute.FromSave) {
                this.showNeedMessage = true;
            }
        };
        LoginCtrl.prototype.login = function (form) {
            var _this = this;
            if (form) {
                if (!form.$valid)
                    return;
                form.$setPristine();
                form.$setUntouched();
            }
            else {
                return;
            }
            this.userRepository.login(this.email, this.password).then(function (r) {
                if (!r.success) {
                    _this.loginFailure = true;
                    _this.loginMessage = r.message;
                }
                else {
                    window.location.href = window.location.href; //' + "?loggedin=true" ;
                    // if(r.user.hasExistingFrameworks())
                    //   this.vs.showAccount(AccountDisplayRoute.FromLogin);
                    // else {
                    //   this.vs.showCreateFramework(AccountDisplayRoute.FromLogin, false);
                    // }
                }
            }).catch(function (r) {
                _this.loginFailure = true;
                _this.loginMessage = r.message;
            });
        };
        LoginCtrl.prototype.showForgottenDetails = function () {
            this.vs.showForgottenDetails();
        };
        return LoginCtrl;
    }());
    LoginCtrl.$inject = ["viewService", "userRepository"];
    aif.LoginCtrl = LoginCtrl;
})(aif || (aif = {}));
var aif;
(function (aif) {
    'use strict';
    var UserScreensCtrl = (function () {
        function UserScreensCtrl($scope, vs, userRepository) {
            this.$scope = $scope;
            this.vs = vs;
            this.userRepository = userRepository;
            this.init();
        }
        UserScreensCtrl.prototype.init = function () {
            console.log("dfe");
        };
        return UserScreensCtrl;
    }());
    UserScreensCtrl.$inject = ["$scope", "viewService", "userRepository"];
    aif.UserScreensCtrl = UserScreensCtrl;
})(aif || (aif = {}));
var aif;
(function (aif) {
    'use strict';
    var AifHttpInterceptor = (function () {
        function AifHttpInterceptor() {
        }
        //public static $inject = ["$injector"];
        AifHttpInterceptor.prototype.request = function (config) {
            if (config.url.indexOf('admin-ajax') > -1) {
                config.headers = { 'Content-Type': 'application/x-www-form-urlencoded' },
                    config.transformRequest = function (obj) {
                        var str = [];
                        for (var p in obj)
                            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                        return str.join("&");
                    };
            }
            else {
                if (config.url.indexOf('wp-json') > -1) {
                    config.headers = { 'Content-Type': 'application/json',
                        'X-WP-Nonce': ajax_auth_object.rest_nonce };
                }
            }
            return config;
        };
        AifHttpInterceptor.factory = function () {
            return function () { return new AifHttpInterceptor(); };
        };
        return AifHttpInterceptor;
    }());
    aif.AifHttpInterceptor = AifHttpInterceptor;
})(aif || (aif = {}));
/// <reference path='../libs/jquery/jquery.d.ts' />
/// <reference path='../libs/angular/angular.d.ts' />
/// <reference path='../libs/angular/angular-cookies.d.ts' />
/// <reference path='models/AifData.ts' />
/// <reference path='models/WorkflowInput.ts' />
/// <reference path='models/WorkflowStep.ts' />
/// <reference path='models/WorkflowRow.ts' />
/// <reference path='models/AifUser.ts' />
/// <reference path='models/AifFramework.ts' />
/// <reference path='interfaces/IUserRepository.ts' />
/// <reference path='interfaces/IFrameworkRepository.ts' />
/// <reference path='interfaces/IAifService.ts' />
/// <reference path="services/ViewService.ts" />
/// <reference path="services/UserRepository.ts" />
/// <reference path="services/FrameworkRepository.ts" />
/// <reference path="services/AifService.ts" />
/// <reference path="directives/AccountDirectives.ts" />
/// <reference path="controllers/FrameworkCtrl.ts" />
/// <reference path="controllers/RegisterCtrl.ts" />
/// <reference path="controllers/ResetPasswordCtrl.ts" />
/// <reference path="controllers/InputTileCtrl.ts" />
/// <reference path="controllers/CreateFrameworkCtrl.ts" />
/// <reference path="controllers/FrameworkSummaryCtrl.ts" />
/// <reference path="controllers/SaveAsCtrl.ts" />
/// <reference path="controllers/AppCtrl.ts" />
/// <reference path="controllers/AccountViewCtrl.ts" />
/// <reference path="controllers/LoginCtrl.ts" />
/// <reference path="controllers/UserScreensCtrl.ts" />
/// <reference path="services/AifHttpInterceptor.ts" /> 
/// <reference path="_all.ts" />
/**
 * The main Aif app module.
 *
 * @type {angular.Module}
 */
var aif;
(function (aif_1) {
    'use strict';
    var aif = angular.module('aif', ['ngCookies'])
        .service('userRepository', aif_1.UserRepository)
        .service('frameworkRepository', aif_1.FrameworkRepository)
        .service('aifService', aif_1.AifService)
        .service('viewService', aif_1.ViewService)
        .controller('appCtrl', aif_1.AppCtrl)
        .controller('accountViewCtrl', aif_1.AccountViewCtrl)
        .controller('frameworkCtrl', aif_1.FrameworkCtrl)
        .controller('createFrameworkCtrl', aif_1.CreateFrameworkCtrl)
        .controller('loginCtrl', aif_1.LoginCtrl)
        .controller('saveAsCtrl', aif_1.SaveAsCtrl)
        .controller('registerCtrl', aif_1.RegisterCtrl)
        .controller('resetPasswordCtrl', aif_1.ResetPasswordCtrl)
        .controller('frameworkSummaryCtrl', aif_1.FrameworkSummaryCtrl)
        .controller('frameworkSummaryCtrl', aif_1.UserScreensCtrl)
        .controller('listInputTileCtrl', aif_1.ListInputTileCtrl)
        .directive('aifLoginScreen', aif_1.AifLoginScreen.factory())
        .directive('aifAccountScreen', aif_1.AifAccountScreen.factory())
        .directive('aifCreateFwScreen', aif_1.AifCreateFwScreen.factory())
        .directive('aifSaveAsScreen', aif_1.AifSaveAsScreen.factory())
        .directive('aifRegisterScreen', aif_1.AifRegisterScreen.factory())
        .directive('aifResetPassword', aif_1.AifResetPassword.factory())
        .directive('aifFrameworkSummary', aif_1.AifFrameworkSummary.factory())
        .directive('aifListInputTile', aif_1.AifListInputTile.factory())
        .directive('aifUserScreens', aif_1.AifUserScreens.factory())
        .config(['$httpProvider', function (_$httpProvider) {
            _$httpProvider.interceptors.push(aif_1.AifHttpInterceptor.factory());
        }]);
    //.directive('todoBlur', todoBlur)
    //.directive('todoFocus', todoFocus)
    //.directive('todoEscape', todoEscape)
})(aif || (aif = {}));
/// <reference path="../_all.ts" />
var aif;
(function (aif) {
    'use strict';
    var AccountService = (function () {
        function AccountService() {
        }
        return AccountService;
    }());
    aif.AccountService = AccountService;
})(aif || (aif = {}));
//# sourceMappingURL=build.js.map