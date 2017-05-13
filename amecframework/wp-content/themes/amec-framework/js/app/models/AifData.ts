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
                en: "Define your key target audiences",
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
                en: "<span class=\"lead-in\" >Out-takes</span> are your ...",
                translation: null
            },
            "S6_L": {
                description: "Step 4 Label",
                en: "Out-takes",
                translation: null
            },
            "S6_I1_SH": {
                description: "Step 2 Input 1 Sub heading",
                en: "​List here evidence of the effects of your communication on your target audience",
                translation: null
            },
            "S6_I1_I": {
                description: "Step 2 Input 1 Info",
                en: "<span class=\"lead-in\" >Outcomes</span> are the effects ...",
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
                en: "<span class=\"lead-in\" >Impact</span> is the ultimate ...",
                translation: null
            }

        };

        public static stepStructure: Array<IAifStepData> = [
            {
                stepIndex: 1,
                stepHeadingKey: "S1_L",
                summaryStyle: AifStepSummaryStyle.Entry,
                baseColor: "red",
                row: 1,
                colSpan: 1,
                cellOrder: [AifInputCellType.Input, AifInputCellType.Info],
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
                        valueCount: 10,
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