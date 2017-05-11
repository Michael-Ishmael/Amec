module aif {
    'use strict';

    export enum AifStepInputStyle {
        FreeText = 1
    }

    export enum AifInputCellType {
        Input = 1,
        Info = 2,
        Empty = 3
    }

    export interface IAifStepInputItem {
        headingKey: string,
        subHeadingKey: string,
        infoKey: string,
        textLimit: number,
        values: Array<string>
    }

    export interface IAifStepData {
        stepIndex: number,
        labelKey: string,
        inputStyle: AifStepInputStyle,
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
            }

        };

        public static stepData: Array<IAifStepData> = [
            {
                stepIndex: 1,
                labelKey: "S1_L",
                inputStyle: AifStepInputStyle.FreeText,
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
                        values: []
                    },
                    {
                        headingKey: "S1_I2_H",
                        subHeadingKey: "S1_I2_SH",
                        infoKey: "S1_I2_I",
                        textLimit: 500,
                        values: []
                    }
                ]

            }
        ]


    }

}