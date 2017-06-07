module aif {
    'use strict';

    export enum AifStepInputStyle {
        FreeText = 1,
        NumberedValues = 2,
        KeyedValues = 3
    }

    export enum AifStepSummaryStyle {
        Entry = 0,
        WholeStep = 1
    }

    export enum AifInputCellType {
        Input = 1,
        Info = 2,
        Empty = 3
    }

    export interface IAifStepInputItem {
        inputStyle: AifStepInputStyle,
        headingKey: string,
        subHeadingKey: string,
        infoKey: string,
        textLimit: number,
        valuesKey: string,
        valueCount: number
    }

    export interface IAifStepData {
        stepIndex: number,
        stepHeadingKey: string,
        summaryStyle:AifStepSummaryStyle,
        baseColor: string,
        row: number,
        colSpan: number,
        cellOrder: Array<AifInputCellType>,
        inputs: Array<IAifStepInputItem>
    }

    export interface IAifCopyItem {
        description: string,
        en: string,
        translation: string
    }

    export interface IAifUserFramework {

        inputs: {[id: string]: Array<any> } ;


    }


    export class AifData {

        
        public static baseCopy: { [id: string]: IAifCopyItem } = {
            "ST" : {
                description: "Start here text",
                en: "Start Here",
                translation: null
            },
            "SB" : {
                description: "Submit text",
                en: "Submit",
                translation: null
            },
            "SB_D" : {
                description: "Submit description",
                en: "Click on submit button to view your content in the Integrated Evaluation Framework by AMEC.",
                translation: null
            },
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
            },
            "S2_L": {
                description: "Step Label 1",
                en: "Inputs",
                translation: null
            },
            "S2_I1_H": {
                description: "Step 2 Input 1 Heading",
                en: "Target Audience",
                translation: null
            },
            "S2_I1_SH": {
                description: "Step 2 Input 1 Sub heading",
                en: "Define your key target audiences<br><br>",
                translation: null
            },
            "S2_I1_I": {
                description: "Step 2 Input 1 Info",
                en: "<span class=\"lead-in\" >Target Audience</span> define clearly with which audiences you are looking to communicate. Be as specific as possible. The more refined your audience definition, the more focussed your targeting can be. Think demographics, socio-economic data and media consumption habits.",
                translation: null
            },
            "S2_I2_H": {
                description: "Step 2 Input 1 Sub heading",
                en: "Strategic Inputs",
                translation: null
            },
            "S2_I2_SH": {
                description: "Step 2 Input 2 Sub heading",
                en: "List key inputs necessary to inform and prepare your communication.",
                translation: null
            },
            "S2_I2_I": {
                description: "Step 2 Input 2 Info",
                en: "<span class=\"lead-in\" >Inputs</span> include both information and materials that you need to design and prepare your communication.  Inputs can include: <ul><li><span class=\"bold\">Existing research</span> data that is relevant</li><li><span class=\"bold\">Background and context</span> information</li><li><span class=\"bold\">Budget</span> – set a budget and identify the most cost-effective approaches (e.g., through Cost Effectiveness Analysis)</li><li><span class=\"bold\">Resources</span> – what skills do you need? Are there potential partners?</li></ul>",
                translation: null
            }   ,
            "S3_L": {
                description: "Step 3 Label",
                en: "Activities",
                translation: null
            },
            "S3_I1_SH": {
                description: "Step 2 Input 1 Sub heading",
                en: "List all the key activities that you will undertake or have undertaken",
                translation: null
            },
            "S3_I1_I": {
                description: "Step 2 Input 1 Info",
                en: "<span class=\"lead-in\" >Activities</span> include: <ul><li><span class=\"bold\">Formative research to be undertaken</span> (e.g., surveys, focus groups, pre-testing)</li><li><span class=\"bold\">Planning</span> (including SWOT analysis, PEST or PESTLE, etc.)</li><li><span class=\"bold\">Design</span> of materials</li><li><span class=\"bold\">Writing and production </span> of communication materials, events, etc.</li></ul>",
                translation: null
            },
            "S4_L": {
                description: "Step 4 Label",
                en: "Outputs",
                translation: null
            },
            "S4_I1_SH": {
                description: "Step 2 Input 1 Sub heading",
                en: "List the content, materials, and activities that you distributed and to which your target audiences were exposed",
                translation: null
            },
            "S4_I1_I": {
                description: "Step 2 Input 1 Info",
                en: "<span class=\"lead-in\" >Outputs</span> include: <ul><li><span class=\"bold\">Advertising</span> data that is relevant</li><li><span class=\"bold\">Publicity</span> information</li><li><span class=\"bold\">Web sites, blogs, partnerships or supplements </span> (owned media)</li><li><span class=\"bold\">Social media</span> – what skills do you need? Are there potential partners?</li><li><span class=\"bold\">Events</span> held – e.g., how many attended?</li><li><span class=\"bold\">Sponsorships</span> launched – e.g., what audience reach?</li><li><span class=\"bold\">Direct mail, e-mail, or e-marketing</span>, etc. – e.g., what audience reach?</li></ul>",
                translation: null
            },
            "S5_L": {
                description: "Step 4 Label",
                en: "Out-takes",
                translation: null
            },
            "S5_I1_SH": {
                description: "Step 2 Input 1 Sub heading",
                en: "List here what your target audiences took out of your communication and how they reacted to it",
                translation: null
            },
            "S5_I1_I": {
                description: "Step 2 Input 1 Info",
                en: "<span class=\"lead-in\" >Out-takes</span> are your target audiences’ initial responses and reactions to your communication. These may be interim steps towards your objectives, not necessarily achievement of your objectives. Out-takes may include evidence of: <ul><li><span class=\"bold\">Audience attention</span> – e.g., unique visitors, views, clickthroughs</li><li><span class=\"bold\">Awareness</span> – e.g., recall</li><li><span class=\"bold\">Understanding</span> – e.g., comments, post-campaign survey data</li><li><span class=\"bold\">Interest and liking</span> – e.g., likes, follows, shares, retweets, pins, etc.</li><li><span class=\"bold\">Engagement</span> – e.g., return visits, subscribing, positive comments</li><li><span class=\"bold\">Consideration</span> – e.g., comments, subscribing, registering, etc.</li></ul>",
                translation: null
            },
            "S6_L": {
                description: "Step 4 Label",
                en: "Outcomes",
                translation: null
            },
            "S6_I1_SH": {
                description: "Step 2 Input 1 Sub heading",
                en: "​List here evidence of the effects of your communication on your target audience",
                translation: null
            },
            "S6_I1_I": {
                description: "Step 2 Input 1 Info",
                en: "<span class=\"lead-in\" >Outcomes</span> are the effects that your communication had on your target audiences that align to your objectives. Examples of outcomes of communication can include: <ul><li><span class=\"bold\">Learning/knowledge</span> – e.g., through survey or interview data, quizzes, tests</li><li><span class=\"bold\">Trust</span> – e.g., increased trust ratings in surveys</li><li><span class=\"bold\">Preference</span> – e.g., stated preference in surveys, social media comments</li><li><span class=\"bold\">Intention</span> – e.g., through inquiries, registrations, trialling, survey data</li><li><span class=\"bold\">Attitude change</span> – e.g., through survey or interview data</li><li><span class=\"bold\">Complying behaviour</span> - e.g., sales, donations, driving safely; voting, etc</li><li><span class=\"bold\">Advocacy</span> – e.g., endorsements in online comments</li></ul>",
                translation: null
            },
            "S7_L": {
                description: "Step 4 Label",
                en: "Organizational Impact",
                translation: null
            },
            "S7_I1_SH": {
                description: "Step 2 Input 1 Sub heading",
                en: "​How has the organisation been impacted during the campaign?",
                translation: null
            },
            "S7_I1_I": {
                description: "Step 2 Input 1 Info",
                en: "<span class=\"lead-in\" >Impact</span> is the ultimate  flow-on results related to your objectives which your communication achieved or contributed to. Impact can include: <ul><li><span class=\"bold\">Reputation</span> improvement (recognised as an intangible asset)</li><li><span class=\"bold\">Relationships</span> established or improved (also recognised as an intangible asset by the International Integrated Reporting Council)</li><li><span class=\"bold\">Reaching targets</span> – e.g., sales revenue, fundraising or membership targets, health campaign targets such as smoking reduction, etc.</li><li><span class=\"bold\">Increased staff loyalty and retention</span> - i.e., reduced staff turnover and recruitment costs</li><li><span class=\"bold\">Organizational change</span> – e.g., insights to inform future strategy, realignment of policies to stakeholders</li><li><span class=\"bold\">Social change</span> – e.g., improved health and well-being, increased access to information, etc.</li></ul>",
                translation: null
            },
            "USR_RR": {
                description: "Register Reminder",
                en: "<p>New functionality has been added to the AMEC Integrated Evaluation Framework to improve the user experience. </p><p>Now you can save the progress of your work and can save and edit up to 10 different frameworks per user account.</p><p> To do so you must register, create an account and log in. While it is not compulsory to do so, this important new functionality is only available once logged into your account. Please either sign in or register if it’s your first time here to begin.Don’t worry, use of the framework remains completely free!</p>",
                translation: null
            },
            "USR_RR_D" : {
                description: "Register Reminder - don't show again",
                en: "Don't show again",
                translation: null
            },
            "BTN_LGN" : {
                description: "Login Button",
                en: "Login",
                translation: null
            },
            "BTN_RGR" : {
                description: "Register Button",
                en: "Register",
                translation: null
            },
            "BTN_SVE" : {
                description: "Save Button",
                en: "Save Progress",
                translation: null
            },
            "BTN_EDT" : {
                description: "Edit Button",
                en: "Edit",
                translation: null
            },
            "BTN_DLD" : {
                description: "Download PDF Button",
                en: "Download PDF",
                translation: null
            },
            "BTN_SMT" : {
                description: "Submit Button",
                en: "Submit",
                translation: null
            },
            "BTN_WLM" : {
                description: "Welcome Text",
                en: "Welcome ",
                translation: null
            },
            "LGN_TTL" : {
                description: "Login Screen Title",
                en: "Login",
                translation: null
            },
            "LGN_NAT" : {
                description: "Login Screen no account text",
                en: "New here?",
                translation: null
            },
            "LGN_NAL" : {
                description: "Login Screen no account link",
                en: "Create an account",
                translation: null
            },
            "LGN_EML" : {
                description: "Login Screen Email Label",
                en: "Email",
                translation: null
            },
            "LGN_PWD" : {
                description: "Login Screen Password Label",
                en: "Password",
                translation: null
            },
            "LGN_BTN" : {
                description: "Login Screen Login Button",
                en: "Login",
                translation: null
            },
            "LGN_LPD" : {
                description: "Login Screen Lost Password Text",
                en: "Lost password?",
                translation: null
            },
            "LGN_FSM" : {
                description: "Login Screen attempted save message",
                en: "You need to be logged in to save progress.",
                translation: null
            },
            "LGN_FSI" : {
                description: "Login Screen attempted save instruction",
                en: "Log in below or ",
                translation: null
            },
            "LGN_FSL" : {
                description: "Login Screen attempted save register link",
                en: "click here to create an account",
                translation: null
            },
            "LGN_EMR" : {
                description: "Login Screen validation email missing",
                en: "Tell us your email",
                translation: null
            },
            "LGN_EMV" : {
                description: "Login Screen validation email invalid.",
                en: "This is not a valid email address.",
                translation: null
            },
            "LGN_PWM" : {
                description: "Login Screen validation password missing",
                en: "Tell us your password",
                translation: null
            },
            "LGN_SCS" : {
                description: "Login Screen log in successful message",
                en: "Login successful, loading...",
                translation: null
            },
            "LGN_FL" : {
                description: "Login Screen log in fail message",
                en: "Error contacting server",
                translation: null
            },
            "RG_TTL" : { description: "Register Screen - Title", en: "Register", translation: null},
            "RG_AAM" : { description: "Register Screen - Already have an account message", en: "Already have an account?", translation: null},
            "RG_AAL" : { description: "Register Screen - Already have an account link", en: "Login here", translation: null},
            "RG_FN" : { description: "Register Screen - First Name", en: "First Nam0", translation: null},
            "RG_FNV" : { description: "Register Screen - First Name validation - missing", en: "You must supply a first name.", translation: null},
            "RG_LN" : { description: "Register Screen - Last Name", en: "Last Name", translation: null},
            "RG_LNV" : { description: "Register Screen - Last Name validation - missing", en: "You must supply a last name", translation: null},
            "RG_ON" : { description: "Register Screen - Organisation", en: "Organisation", translation: null},
            "RG_ONV" : { description: "Register Screen - Organisation validation - missing", en: "You must tell us your company or organisation name.", translation: null},
            "RG_JT" : { description: "Register Screen - Job Title", en: "Job Title", translation: null},
            "RG_JTV" : { description: "Register Screen - Job Title validation - missing", en: "You must provide a job title.", translation: null},
            "RG_CN" : { description: "Register Screen - Contact Number", en: "Contact Number", translation: null},
            "RG_CNV" : { description: "Register Screen - Contact Number validation - missing", en: "You must provide a contact number.", translation: null},
            "RG_CY" : { description: "Register Screen - Country", en: "Country", translation: null},
            "RG_CYV" : { description: "Register Screen - Country validation - missing", en: "You must select a country", translation: null},
            "RG_EML" : { description: "Register Screen - Email", en: "Email", translation: null},
            "RG_EML_PH" : { description: "Register Screen - Email Placeholder", en: "A Work Email Address", translation: null},
            "RG_EML_VM" : { description: "Register Screen - Email validation - missing", en: "You must supply an email address", translation: null},
            "RG_EML_VW" : { description: "Register Screen - Email validation - must be work", en: "You must use a work address", translation: null},
            "RG_EML_VI" : { description: "Register Screen - Email validation - invalid email", en: "This is not a valid email address", translation: null},
            "RG_PWD" : { description: "Register Screen - Password", en: "Password", translation: null},
            "RG_PWD_VM" : { description: "Register Screen - Password validation - missing", en: "You must supply a password", translation: null},
            "RG_PWD_VL" : { description: "Register Screen - Password validation - length", en: "Your password should be at least eight characters long.", translation: null},
            "RG_CPW" : { description: "Register Screen - Password Confirmation", en: "Confirm Password", translation: null},
            "RG_CPW_VM" : { description: "Register Screen - Password Confirmation validation - don't match", en: "The passwords don't match", translation: null},

            "AC_TTL" : { description: "Account Screen - Title", en: "Your Account", translation: null},
            "AC_ATL_L" : { description: "Account Screen - Alt title / Login successful", en: "Log in successful", translation: null},
            "AC_ATL_S" : { description: "Account Screen - Alt title / Save framework", en: "Save framework", translation: null},
            "AC_LOB" : { description: "Account Screen - Logout button label", en: "logout", translation: null},
            "AC_SEF" : { description: "Account Screen - Select existing framework message", en: "Select an existing framework to load or", translation: null},
            "AC_CNF" : { description: "Account Screen - Create new framework link", en: "create a new one", translation: null},
            "AC_LDT" : { description: "Account Screen - Load text", en: "Load", translation: null},
            "AC_LDG" : { description: "Account Screen - Loading text", en: "Loading...", translation: null},
            "AC_RFW" : { description: "Account Screen - Rename button hover caption", en: "Rename Framework", translation: null},
            "AC_DFW" : { description: "Account Screen - Delete button hover caption", en: "Delete Framework", translation: null},
            "AC_CDT" : { description: "Account Screen - Confirm delete text", en: "Are you sure you want to delete ", translation: null},
            "AC_YES" : { description: "Account Screen - Yes", en: "Yes", translation: null},
            "AC_NO" : { description: "Account Screen - No", en: "No", translation: null},
            "AC_FTU" : { description: "Account Screen - First time user text", en: "<p>This screen can be used to view and load measurement frameworks you have saved under you login.</p><p>You haven't saved any frameworks yet.  Click create below to set up a new framework for your campaign.</p><p>Alternatively close this screen and start working with the tool.  You can come back at any time to save your progress.</p>", translation: null},
            "AC_FTC" : { description: "Account Screen - Create button label", en: "Create", translation: null},

            "NF_TTL" : { description: "New Framework Screen - Title", en: "New Measurement Framework", translation: null},
            "NF_ATL_E" : { description: "New Framework Screen - Alt title / arrived from edit button", en: "Edit ", translation: null},
            "NF_ATL_S" : { description: "New Framework Screen - Alt title / arrived from detected unsaved work", en: "Save your work", translation: null},
            "NF_ATL_L" : { description: "New Framework Screen - Alt title / arrived from first login", en: "Create your first framework", translation: null},
            "NF_CTM" : { description: "New Framework Screen - Create message", en: "Create a new framework to save your progress.", translation: null},
            "NF_FWN" : { description: "New Framework Screen - Framework name label", en: "Framework name", translation: null},
            "NF_FWN_VM" : { description: "New Framework Screen - Framework name validation - missing", en: "You must provide a name for your framework.", translation: null},
            "NF_FWD" : { description: "New Framework Screen - Framework description label", en: "Description", translation: null},
            "NF_FWD_PH" : { description: "New Framework Screen - Framework description placeholder", en: "Optionally add any notes here", translation: null},
            "NF_CTB" : { description: "New Framework Screen - Create button label", en: "Create", translation: null},
            "NF_SVB" : { description: "New Framework Screen - Save button label", en: "Save", translation: null},
            "NF_CLB" : { description: "New Framework Screen - Cancel link text", en: "Cancel", translation: null},
            "NF_ACL" : { description: "New Framework Screen - Alt cancel link / from first login", en: "Skip for now", translation: null},
            "NF_OSV" : { description: "New Framework Screen - Or save over message", en: "Or save over ", translation: null},
            "NF_OSL" : { description: "New Framework Screen - Save over link", en: "an existing framework", translation: null},

            "SA_TTL" : { description: "Save As Screen - Title", en: "Save framework", translation: null},
            "SA_SPM" : { description: "Save As Screen - Save progress to message", en: "Save your progress to:", translation: null},
            "SA_SOM" : { description: "Save As Screen - Save over message (when has existing)", en: "Alternatively, save as an existing framework or", translation: null},
            "SA_CNM" : { description: "Save As Screen - Create new link (when has existing)", en: "create a new one", translation: null},
            "SA_OR" : { description: "Save As Screen - Or", en: "or", translation: null},
            "SA_CNN" : { description: "Save As Screen - Create new link when no existing frameworks", en: "create a new framework", translation: null},
            "SA_ASM" : { description: "Save As Screen - Are you sure you want to save over message", en: "Are you sure you want to save over ", translation: null},
            "SA_YES" : { description: "Save As Screen - Yes", en: "Yes", translation: null},
            "SA_NO" : { description: "Save As Screen - No", en: "No", translation: null},

            "FP_TTL" : { description: "Forgot Password Screen - Title", en: "Reset Password", translation: null},
            "FP_BKL" : { description: "Forgot Password Screen - Back to login link", en: "Go back", translation: null},
            "FP_EML" : { description: "Forgot Password Screen - Email address label", en: "Email address", translation: null},
            "FP_EML_VM" : { description: "Forgot Password Screen - Email validation - missing", en: "Tell us your email.", translation: null},
            "FP_EMP_VI" : { description: "Forgot Password Screen - Email validation - invalid", en: "This is not a valid email.", translation: null},
            "FP_RSB" : { description: "Forgot Password Screen - Send reset button label", en: "Send reset link", translation: null},
            "FP_EMT" : { description: "Forgot Password Screen - We've emailed you link text", en: "<p>We have emailed you a link to reset your password.</p><p>You should receive it in the next few minutes.</p>", translation: null},
            "FP_NRT" : { description: "Forgot Password Screen - Haven't received it text", en: "Haven't received it? ", translation: null},
            "FP_RST" : { description: "Forgot Password Screen - Resend link text", en: "Click here to resend", translation: null},
            "FP_CLS" : { description: "Forgot Password Screen - Close button text", en: "Close", translation: null},

            "RP_TTL" : { description: "Reset Password Screen - Title", en: "Reset Password", translation: null},
            "RP_NPM" : { description: "Reset Password Screen - Enter a new password message", en: "Enter a new password for the login ", translation: null},
            "RP_PWD" : { description: "Reset Password Screen - Password label", en: "Password", translation: null},
            "RP_PWD_VM" : { description: "Reset Password Screen - Password validation - missing", en: "You must supply a password.", translation: null},
            "RP_PWD_VL" : { description: "Reset Password Screen - Password validation - length", en: "Your password should be at least eight characters long.", translation: null},
            "RP_CPW" : { description: "Reset Password Screen - Confirm label", en: "Confirm Password", translation: null},
            "RP_CPW_VM" : { description: "Reset Password Screen - Confirm validation - not matching", en: "The passwords don't match.", translation: null},
            "RP_RFM" : { description: "Reset Password Screen - Reset failed message", en: "There has been a problem resetting your password. Either this link has expired or your email address is not valid.<br>", translation: null},
            "RP_RFL" : { description: "Reset Password Screen - Reset failed try again link", en: "Click here to try again", translation: null},
            "RP_CPB" : { description: "Reset Password Screen - Change password button text", en: "Change Password", translation: null},
            "RP_RSM" : { description: "Reset Password Screen - Password reset successful message", en: "Your password has been reset.  Logging in...", translation: null},
        };

        public static stepStructure: Array<IAifStepData> = [
            {
                stepIndex: 1,
                stepHeadingKey: "S1_L",
                summaryStyle: AifStepSummaryStyle.Entry,
                baseColor: "red",
                row: 1,
                colSpan: 1,
                cellOrder: [AifInputCellType.Input, AifInputCellType.Info, AifInputCellType.Empty],
                inputs: [
                    {
                        inputStyle: AifStepInputStyle.FreeText,
                        headingKey: "S1_I1_H",
                        subHeadingKey: "S1_I1_SH",
                        infoKey: "S1_I1_I",
                        textLimit: 500,
                        valueCount: 1,
                        valuesKey: "S1_I1_V"
                    },
                    {
                        inputStyle: AifStepInputStyle.FreeText,
                        headingKey: "S1_I2_H",
                        subHeadingKey: "S1_I2_SH",
                        infoKey: "S1_I2_I",
                        textLimit: 500,
                        valueCount: 1,
                        valuesKey: "S1_I2_V"
                    }
                ]
            },
            {
                stepIndex: 2,
                stepHeadingKey: "S2_L",
                summaryStyle: AifStepSummaryStyle.Entry,
                baseColor: "yellow",
                row: 1,
                colSpan: 2,
                cellOrder: [AifInputCellType.Info, AifInputCellType.Input],
                inputs: [
                    {
                        inputStyle: AifStepInputStyle.NumberedValues,
                        headingKey: "S2_I1_H",
                        subHeadingKey: "S2_I1_SH",
                        infoKey: "S2_I1_I",
                        textLimit: 200,
                        valueCount: 5,
                        valuesKey: "S2_I1_V"
                    },
                    {
                        inputStyle: AifStepInputStyle.FreeText,
                        headingKey: "S2_I2_H",
                        subHeadingKey: "S2_I2_SH",
                        infoKey: "S2_I2_I",
                        textLimit: 1000,
                        valueCount: 1,
                        valuesKey: "S2_I2_V"
                    }
                ]
            },
            {
                stepIndex: 3,
                stepHeadingKey: "S3_L",
                summaryStyle: AifStepSummaryStyle.WholeStep,
                baseColor: "green",
                row: 1,
                colSpan: 2,
                cellOrder: [AifInputCellType.Info, AifInputCellType.Input],
                inputs: [
                    {
                        inputStyle: AifStepInputStyle.KeyedValues,
                        headingKey: "S3_I1_H",
                        subHeadingKey: "S3_I1_SH",
                        infoKey: "S3_I1_I",
                        textLimit: 200,
                        valueCount: 16,
                        valuesKey: "S3_I1_V"
                    }
                ]
            },
            {
                stepIndex: 4,
                stepHeadingKey: "S4_L",
                summaryStyle: AifStepSummaryStyle.WholeStep,
                baseColor: "light_blue",
                row: 2,
                colSpan: 2,
                cellOrder: [AifInputCellType.Input, AifInputCellType.Info],
                inputs: [
                    {
                        inputStyle: AifStepInputStyle.KeyedValues,
                        headingKey: "S4_I1_H",
                        subHeadingKey: "S4_I1_SH",
                        infoKey: "S4_I1_I",
                        textLimit: 200,
                        valueCount: 16,
                        valuesKey: "S4_I1_V"
                    }
                ]
            },
            {
                stepIndex: 5,
                stepHeadingKey: "S5_L",
                summaryStyle: AifStepSummaryStyle.WholeStep,
                baseColor: "dark_blue",
                row: 2,
                colSpan: 1,
                cellOrder: [AifInputCellType.Empty, AifInputCellType.Input, AifInputCellType.Info],
                inputs: [
                    {
                        inputStyle: AifStepInputStyle.NumberedValues,
                        headingKey: "S5_I1_H",
                        subHeadingKey: "S5_I1_SH",
                        infoKey: "S5_I1_I",
                        textLimit: 200,
                        valueCount: 10,
                        valuesKey: "S5_I1_V"
                    }
                ]
            },
            {
                stepIndex: 6,
                stepHeadingKey: "S6_L",
                summaryStyle: AifStepSummaryStyle.WholeStep,
                baseColor: "dark_blue",
                row: 2,
                colSpan: 1,
                cellOrder: [AifInputCellType.Empty, AifInputCellType.Info, AifInputCellType.Input],
                inputs: [
                    {
                        inputStyle: AifStepInputStyle.NumberedValues,
                        headingKey: "S6_I1_H",
                        subHeadingKey: "S6_I1_SH",
                        infoKey: "S6_I1_I",
                        textLimit: 200,
                        valueCount: 10,
                        valuesKey: "S6_I1_V"
                    }
                ]
            },
            {
                stepIndex: 7,
                stepHeadingKey: "S7_L",
                summaryStyle: AifStepSummaryStyle.WholeStep,
                baseColor: "purple",
                row: 3,
                colSpan: 2,
                cellOrder: [AifInputCellType.Input, AifInputCellType.Info],
                inputs: [
                    {
                        inputStyle: AifStepInputStyle.NumberedValues,
                        headingKey: "S7_I1_H",
                        subHeadingKey: "S7_I1_SH",
                        infoKey: "S7_I1_I",
                        textLimit: 200,
                        valueCount: 10,
                        valuesKey: "S7_I1_V"
                    }
                ]
            }

        ]


    }

}