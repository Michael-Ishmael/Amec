/// <reference path="../_all.ts" />
var aif;
(function (aif) {
    (function (InputStyle) {
        InputStyle[InputStyle["TextArea"] = 1] = "TextArea";
        InputStyle[InputStyle["NumberedInputs"] = 2] = "NumberedInputs";
        InputStyle[InputStyle["LinkedInputs"] = 3] = "LinkedInputs";
        InputStyle[InputStyle["BlankInputs"] = 4] = "BlankInputs";
        InputStyle[InputStyle["WholeStep"] = 5] = "WholeStep";
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
/// <///<reference path=".../_all.ts" />
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
        }
        return AifFramework;
    }());
    aif.AifFramework = AifFramework;
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
        function AifSummaryGroup(heading, headingColor, bodyColor) {
            this.heading = heading;
            this.headingColor = headingColor;
            this.bodyColor = bodyColor;
            this.steps = [];
        }
        return AifSummaryGroup;
    }());
    aif.AifSummaryGroup = AifSummaryGroup;
    var AifFrameworkStep = (function () {
        function AifFrameworkStep(heading) {
            this.heading = heading;
            this.entries = [];
            this.inputStyle = aif.InputStyle.WholeStep;
        }
        AifFrameworkStep.prototype.html = function () {
            throw new Error('Method not implemented.');
        };
        return AifFrameworkStep;
    }());
    aif.AifFrameworkStep = AifFrameworkStep;
    var AifFreeTextFrameworkEntry = (function () {
        function AifFreeTextFrameworkEntry(heading) {
            this.heading = heading;
            this.inputStyle = aif.InputStyle.TextArea;
        }
        AifFreeTextFrameworkEntry.prototype.html = function () {
            return this.text;
        };
        return AifFreeTextFrameworkEntry;
    }());
    aif.AifFreeTextFrameworkEntry = AifFreeTextFrameworkEntry;
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
/// <///<reference path=".../_all.ts" />
var aif;
(function (aif) {
    'use strict';
    (function (AccountDisplayRoute) {
        AccountDisplayRoute[AccountDisplayRoute["FromLogin"] = 0] = "FromLogin";
        AccountDisplayRoute[AccountDisplayRoute["FromSave"] = 1] = "FromSave";
        AccountDisplayRoute[AccountDisplayRoute["FromViewAccount"] = 2] = "FromViewAccount";
    })(aif.AccountDisplayRoute || (aif.AccountDisplayRoute = {}));
    var AccountDisplayRoute = aif.AccountDisplayRoute;
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
            this.displayGrid = false;
            this.displaySummary = true;
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
        ViewService.$inject = ["$sce"];
        return ViewService;
    }());
    aif.ViewService = ViewService;
})(aif || (aif = {}));
/// <reference path="../_all.ts" />
var aif;
(function (aif) {
    'use strict';
    var UserRepository = (function () {
        function UserRepository($timeout, $rootScope, $cookies) {
            this.$timeout = $timeout;
            this.$rootScope = $rootScope;
            this.$cookies = $cookies;
            //For debug
            this.startLoggedIn = false;
        }
        UserRepository.prototype.get = function () {
            var _this = this;
            return this.$timeout(function () {
                var cUser = _this.$cookies.getObject("aifUser");
                if (cUser && cUser.email) {
                    var matches = users.filter(function (u) { return u.email == cUser.email; });
                    if (matches.length) {
                        var user = aif.AifUser.createFromData(matches[0]);
                        if (user.email === "mail@michaelishmael.com") {
                            user.frameworks = userFrameworks;
                            if (cUser.currentFrameworkId) {
                                user.setExistingFramework(cUser.currentFrameworkId);
                            }
                        }
                        _this.currentUser = user;
                        return user;
                    }
                    else {
                        return null;
                    }
                }
            }, 200);
        };
        UserRepository.prototype.save = function () {
            var _this = this;
            return this.$timeout(function () {
                if (!_this.currentUser) {
                    return new aif.SaveFrameworkResult(false, null, "User not logged in");
                }
                if (!_this.currentUser.currentFramework) {
                }
                return new aif.SaveFrameworkResult(true, _this.currentUser.currentFramework, null);
            }, 200);
        };
        UserRepository.prototype.registerNewUser = function (user) {
            var _this = this;
            return this.$timeout(function () {
                var newUser = new aif.AifUser(user.email, user.firstName, user.lastName, user.organisation, user.jobTitle, user.language, user.contactNumber);
                _this.currentUser = newUser;
                _this.$rootScope.$broadcast("user:loggedIn", newUser);
                _this.storeUser();
                return new aif.LoginResult(true, newUser, null);
            });
        };
        UserRepository.prototype.logout = function () {
            var _this = this;
            return this.$timeout(function () {
                _this.currentUser = null;
                _this.$cookies.remove("aifUser");
                _this.$rootScope.$broadcast("user:loggedOut");
                return true;
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
            return this.$timeout(function () {
                var matches = users.filter(function (u) { return u.email == email; });
                if (matches.length) {
                    var user = aif.AifUser.createFromData(matches[0]);
                    if (user.email === "mail@michaelishmael.com") {
                        user.frameworks = userFrameworks;
                    }
                    _this.currentUser = user;
                    _this.$rootScope.$broadcast("user:loggedIn", user);
                    _this.storeUser();
                    return new aif.LoginResult(true, user, null);
                }
                else {
                    return new aif.LoginResult(false, null, "Login failed");
                }
            }, 200);
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
            return this.$timeout(function () {
                if (!hasUser)
                    return new aif.SaveFrameworkResult(false, null, "User not logged in");
                var newId = _this.currentUser.frameworks == null ? 1 : _this.currentUser.frameworks.length + 1;
                var framework = new aif.AifFramework(newId, name, description);
                _this.currentUser.frameworks.forEach(function (f) { return f.current = false; });
                framework.current = true;
                _this.currentUser.addNewFramework(framework);
                _this.storeUser();
                _this.$rootScope.$broadcast("framework:frameworkUpdated", framework);
                return new aif.SaveFrameworkResult(true, framework, "Framework created");
            }, 200);
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
        //wp_lostpassword_url()
        UserRepository.$inject = ["$timeout", "$rootScope", '$cookies'];
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
        function FrameworkRepository($timeout, $rootScope, $cookies) {
            this.$timeout = $timeout;
            this.$rootScope = $rootScope;
            this.$cookies = $cookies;
        }
        FrameworkRepository.prototype.get = function () {
            var steps = this.getRawStepArray().map(function (s) { return aif.WorkflowStep.fromData(s); });
            var inputs = this.getRawInputArray();
            inputs.forEach(function (i) {
                steps.filter(function (s) { return s.index === i.stepIndex; }).forEach(function (s) { return s.loadInput(i); });
            });
            return steps;
        };
        FrameworkRepository.prototype.getSummary = function () {
            var _this = this;
            return this.$timeout(function () {
                if (_this.frameworkSummary != null)
                    return _this.frameworkSummary;
                var steps = _this.get();
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
                            var summaryGroup = new aif.AifSummaryGroup(dataGroup.heading, null, null);
                            for (var _e = 0, _f = dataGroup.entries; _e < _f.length; _e++) {
                                var dataEntry = _f[_e];
                                var step = findEntry(dataEntry.stepId);
                                if (step) {
                                    var heading = dataEntry.headingOverride ? dataEntry.headingOverride : step.title;
                                    var summaryEntry = new aif.AifFrameworkStep(heading);
                                    summaryGroup.steps.push(summaryEntry);
                                }
                            }
                            summarySection.groups.push(summaryGroup);
                        }
                        summaryRow.sections.push(summarySection);
                    }
                    summary.rows.push(summaryRow);
                }
                _this.frameworkSummary = summary;
                return summary;
                function findEntry(stepIndex, entryIndex) {
                    var matches = steps.filter(function (s) { return s.index == stepIndex; });
                    if (matches.length) {
                        var step = matches[0];
                        return step;
                    }
                    return null;
                }
            }, 200);
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
        FrameworkRepository.prototype.getRawSummaryArray = function () {
            return [
                {
                    sections: [
                        {
                            heading: "Preparation",
                            groups: [
                                {
                                    heading: "Align Objectives",
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
                                    entries: [
                                        {
                                            entryType: "step",
                                            stepId: 3
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
                                    entries: [
                                        {
                                            entryType: "step",
                                            stepId: 4
                                        }
                                    ]
                                },
                                {
                                    heading: "Audience Response & Effects",
                                    entries: [
                                        {
                                            entryType: "step",
                                            stepId: 5
                                        },
                                        {
                                            entryType: "step",
                                            stepId: 6
                                        }
                                    ]
                                },
                                {
                                    heading: "Organisation & Stakeholder Effects",
                                    entries: [
                                        {
                                            entryType: "step",
                                            stepId: 7
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
        FrameworkRepository.$inject = ["$timeout", "$rootScope", '$cookies'];
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
    var AifLoginScreen = (function () {
        function AifLoginScreen() {
            this.templateUrl = 'js/views/login.html';
            this.restrict = 'E';
            this.contollerAs = 'lc';
            this.bindToContoller = true;
        }
        AifLoginScreen.prototype.link = function (scope, element, attributes, ctrl) {
        };
        AifLoginScreen.factory = function () {
            var directive = function () { return new AifLoginScreen(); };
            //directive.$inject = ['$location', 'toaster'];
            return directive;
        };
        AifLoginScreen.$inject = [''];
        return AifLoginScreen;
    }());
    aif.AifLoginScreen = AifLoginScreen;
    var AifAccountScreen = (function () {
        function AifAccountScreen() {
            this.templateUrl = 'js/views/account.html';
            this.restrict = 'E';
            this.contollerAs = 'av';
            this.bindToContoller = true;
        }
        AifAccountScreen.prototype.link = function (scope, element, attributes, ctrl) {
        };
        AifAccountScreen.factory = function () {
            var directive = function () { return new AifAccountScreen(); };
            //directive.$inject = ['$location', 'toaster'];
            return directive;
        };
        AifAccountScreen.$inject = [''];
        return AifAccountScreen;
    }());
    aif.AifAccountScreen = AifAccountScreen;
    var AifCreateFwScreen = (function () {
        function AifCreateFwScreen() {
            this.templateUrl = 'js/views/create.html';
            this.restrict = 'E';
            this.contollerAs = 'cf';
            this.bindToContoller = true;
        }
        AifCreateFwScreen.prototype.link = function (scope, element, attributes, ctrl) {
        };
        AifCreateFwScreen.factory = function () {
            var directive = function () { return new AifCreateFwScreen(); };
            //directive.$inject = ['$location', 'toaster'];
            return directive;
        };
        AifCreateFwScreen.$inject = [''];
        return AifCreateFwScreen;
    }());
    aif.AifCreateFwScreen = AifCreateFwScreen;
    var AifSaveAsScreen = (function () {
        function AifSaveAsScreen() {
            this.templateUrl = 'js/views/saveAs.html';
            this.restrict = 'E';
            this.contollerAs = 'cf';
            this.bindToContoller = true;
        }
        AifSaveAsScreen.prototype.link = function (scope, element, attributes, ctrl) {
        };
        AifSaveAsScreen.factory = function () {
            var directive = function () { return new AifSaveAsScreen(); };
            //directive.$inject = ['$location', 'toaster'];
            return directive;
        };
        AifSaveAsScreen.$inject = [''];
        return AifSaveAsScreen;
    }());
    aif.AifSaveAsScreen = AifSaveAsScreen;
    var AifRegisterScreen = (function () {
        function AifRegisterScreen() {
            this.templateUrl = 'js/views/register.html';
            this.restrict = 'E';
            this.contollerAs = 'rc';
            this.bindToContoller = true;
        }
        AifRegisterScreen.prototype.link = function (scope, element, attributes, ctrl) {
        };
        AifRegisterScreen.factory = function () {
            var directive = function () { return new AifRegisterScreen(); };
            //directive.$inject = ['$location', 'toaster'];
            return directive;
        };
        AifRegisterScreen.$inject = [''];
        return AifRegisterScreen;
    }());
    aif.AifRegisterScreen = AifRegisterScreen;
    var AifResetPassword = (function () {
        function AifResetPassword() {
            this.templateUrl = 'js/views/resetPassword.html';
            this.restrict = 'E';
            this.contollerAs = 'rc';
            this.bindToContoller = true;
        }
        AifResetPassword.prototype.link = function (scope, element, attributes, ctrl) {
        };
        AifResetPassword.factory = function () {
            var directive = function () { return new AifResetPassword(); };
            //directive.$inject = ['$location', 'toaster'];
            return directive;
        };
        AifResetPassword.$inject = [''];
        return AifResetPassword;
    }());
    aif.AifResetPassword = AifResetPassword;
    var AifFrameworkSummary = (function () {
        function AifFrameworkSummary() {
            this.templateUrl = 'js/views/frameworkSummary.html';
            this.restrict = 'E';
        }
        AifFrameworkSummary.factory = function () {
            var directive = function () { return new AifFrameworkSummary(); };
            //directive.$inject = ['$location', 'toaster'];
            return directive;
        };
        AifFrameworkSummary.$inject = [''];
        return AifFrameworkSummary;
    }());
    aif.AifFrameworkSummary = AifFrameworkSummary;
})(aif || (aif = {}));
/// <///<reference path=".../_all.ts" />
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
            "frameworkRepository",
            "viewService"
        ];
        return FrameworkCtrl;
    }());
    aif.FrameworkCtrl = FrameworkCtrl;
})(aif || (aif = {}));
/// <///<reference path=".../_all.ts" />
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
            this.userModel = new aif.AppUser(null, null, null, null, null, null, null);
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
                }
            });
        };
        RegisterCtrl.$inject = ["viewService", "userRepository"];
        return RegisterCtrl;
    }());
    aif.RegisterCtrl = RegisterCtrl;
})(aif || (aif = {}));
/// <///<reference path=".../_all.ts" />
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
        ResetPasswordCtrl.$inject = ["viewService", "userRepository"];
        return ResetPasswordCtrl;
    }());
    aif.ResetPasswordCtrl = ResetPasswordCtrl;
})(aif || (aif = {}));
/// <///<reference path=".../_all.ts" />
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
        CreateFrameworkCtrl.$inject = ["$scope", "userRepository", "viewService"];
        return CreateFrameworkCtrl;
    }());
    aif.CreateFrameworkCtrl = CreateFrameworkCtrl;
})(aif || (aif = {}));
/// <///<reference path=".../_all.ts" />
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
        FrameworkSummaryCtrl.prototype.getColClassForSection = function (section) {
            var suffix = (12 * section.width - 1).toString();
            return "col-md-" + suffix;
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
        FrameworkSummaryCtrl.$inject = ["$window",
            "frameworkRepository",
            "viewService"
        ];
        return FrameworkSummaryCtrl;
    }());
    aif.FrameworkSummaryCtrl = FrameworkSummaryCtrl;
})(aif || (aif = {}));
/// <///<reference path=".../_all.ts" />
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
        SaveAsCtrl.$inject = ["$scope", "userRepository", "viewService"];
        return SaveAsCtrl;
    }());
    aif.SaveAsCtrl = SaveAsCtrl;
})(aif || (aif = {}));
/// <///<reference path=".../_all.ts" />
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
        AppCtrl.$inject = ["$scope", "$window", "$sce", "userRepository", "viewService"];
        return AppCtrl;
    }());
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
/// <///<reference path=".../_all.ts" />
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
        AccountViewCtrl.$inject = ["$scope", "userRepository", "viewService"];
        return AccountViewCtrl;
    }());
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
                    if (r.user.hasExistingFrameworks())
                        _this.vs.showAccount(aif.AccountDisplayRoute.FromLogin);
                    else {
                        _this.vs.showCreateFramework(aif.AccountDisplayRoute.FromLogin, false);
                    }
                }
            }).catch(function (r) {
                _this.loginFailure = true;
                _this.loginMessage = r.message;
            });
        };
        LoginCtrl.prototype.showForgottenDetails = function () {
            this.vs.showForgottenDetails();
        };
        LoginCtrl.$inject = ["viewService", "userRepository"];
        return LoginCtrl;
    }());
    aif.LoginCtrl = LoginCtrl;
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
    var aif = angular.module('aif', ['ngCookies', 'tw.directives.clickOutside'])
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
        .directive('aifLoginScreen', aif_1.AifLoginScreen.factory())
        .directive('aifAccountScreen', aif_1.AifAccountScreen.factory())
        .directive('aifCreateFwScreen', aif_1.AifCreateFwScreen.factory())
        .directive('aifSaveAsScreen', aif_1.AifSaveAsScreen.factory())
        .directive('aifRegisterScreen', aif_1.AifRegisterScreen.factory())
        .directive('aifResetPassword', aif_1.AifResetPassword.factory())
        .directive('aifFrameworkSummary', aif_1.AifFrameworkSummary.factory());
})(aif || (aif = {}));
/// <reference path='libs/jquery/jquery.d.ts' />
/// <reference path='libs/angular/angular.d.ts' />
/// <reference path='libs/angular/angular-cookies.d.ts' />
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
/// <reference path="controllers/CreateFrameworkCtrl.ts" />
/// <reference path="controllers/FrameworkSummaryCtrl.ts" />
/// <reference path="controllers/SaveAsCtrl.ts" />
/// <reference path="controllers/AppCtrl.ts" />
/// <reference path="controllers/AccountViewCtrl.ts" />
/// <reference path="controllers/LoginCtrl.ts" />
/// <reference path='Application.ts' /> 
//# sourceMappingURL=Application.js.map