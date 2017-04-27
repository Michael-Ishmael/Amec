/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'lato, sans-serif': '<script src=\"http://use.edgefonts.net/lato:n9,i4,n1,i7,i9,n7,i1,i3,n4,n3:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-1.7.1.min.js",
            js+"generate-pdf.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'tile-submit',
                            symbolName: 'tile-submit',
                            display: 'block',
                            type: 'rect',
                            rect: ['825px', '532px', '350px', '200px', 'auto', 'auto'],
                            cursor: 'pointer',
                            userClass: "submit"
                        },
                        {
                            id: 'tile-5',
                            symbolName: 'tile-5',
                            display: 'block',
                            type: 'rect',
                            rect: ['465px', '322px', '350px', '200px', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'tile-6',
                            symbolName: 'tile-6',
                            display: 'block',
                            type: 'rect',
                            rect: ['825px', '322px', '350px', '200px', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'tile-7',
                            symbolName: 'tile-7',
                            display: 'block',
                            type: 'rect',
                            rect: ['105px', '532px', '710px', '200px', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'tile-4',
                            symbolName: 'tile-4',
                            display: 'block',
                            type: 'rect',
                            rect: ['105px', '322px', '350px', '200px', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'tile-3',
                            symbolName: 'tile-3',
                            display: 'block',
                            type: 'rect',
                            rect: ['825px', '112px', '350px', '200px', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'tile-2',
                            symbolName: 'tile-2',
                            display: 'block',
                            type: 'rect',
                            rect: ['465px', '112px', '350px', '200px', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'tile-0',
                            symbolName: 'tile-0',
                            display: 'block',
                            type: 'rect',
                            rect: ['105px', '112px', '350px', '200px', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'submit',
                            symbolName: 'submit',
                            display: 'block',
                            type: 'rect',
                            rect: ['auto', '69px', '70px', '30px', '105px', 'auto'],
                            cursor: 'pointer',
                            userClass: "submit"
                        },
                        {
                            id: 'lightbox',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '0px', '100%', '98.7%', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0.56)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'download-pdf-1',
                            symbolName: 'download-pdf',
                            display: 'none',
                            type: 'rect',
                            rect: ['1136px', '71px', '123px', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer',
                            userClass: "download-pdf-1"
                        },
                        {
                            id: 'edit',
                            symbolName: 'edit',
                            display: 'none',
                            type: 'rect',
                            rect: ['auto', '71px', '70px', '30px', '154px', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'q7',
                            symbolName: 'q7',
                            display: 'none',
                            type: 'rect',
                            rect: ['105px', '532px', '710px', '504px', 'auto', 'auto']
                        },
                        {
                            id: 'q6',
                            symbolName: 'q6',
                            display: 'none',
                            type: 'rect',
                            rect: ['825px', '322px', '350px', '555px', 'auto', 'auto']
                        },
                        {
                            id: 'q5',
                            symbolName: 'q5',
                            display: 'none',
                            type: 'rect',
                            rect: ['465px', '322px', '350px', '584px', 'auto', 'auto']
                        },
                        {
                            id: 'q4',
                            symbolName: 'q4',
                            display: 'none',
                            type: 'rect',
                            rect: ['464px', '322px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'q3',
                            symbolName: 'q3',
                            display: 'none',
                            type: 'rect',
                            rect: ['824px', '112px', '350px', '355px', 'auto', 'auto']
                        },
                        {
                            id: 'q2',
                            symbolName: 'q2',
                            display: 'none',
                            type: 'rect',
                            rect: ['465px', '112px', '350px', '356px', 'auto', 'auto']
                        },
                        {
                            id: 'q1',
                            symbolName: 'q1',
                            display: 'none',
                            type: 'rect',
                            rect: ['105px', '113px', '350px', '530px', 'auto', 'auto']
                        },
                        {
                            id: 'information-box-7',
                            symbolName: 'information-box-7',
                            display: 'none',
                            type: 'rect',
                            rect: ['825px', '532px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'information-box-6',
                            symbolName: 'information-box-6',
                            display: 'none',
                            type: 'rect',
                            rect: ['465px', '382px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'information-box-5',
                            symbolName: 'information-box-5',
                            display: 'none',
                            type: 'rect',
                            rect: ['825px', '382px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'information-box-4',
                            symbolName: 'information-box-4',
                            display: 'none',
                            type: 'rect',
                            rect: ['825px', '322px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'information-box-3',
                            symbolName: 'information-box-3',
                            display: 'none',
                            type: 'rect',
                            rect: ['105px', '112px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'information-box-2',
                            symbolName: 'information-box-2',
                            display: 'none',
                            type: 'rect',
                            rect: ['825px', '112px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'information-box-1',
                            symbolName: 'information-box-1',
                            display: 'none',
                            type: 'rect',
                            rect: ['465px', '112px', 'undefined', '140px', 'auto', 'auto']
                        },
                        {
                            id: 'information-box',
                            symbolName: 'information-box',
                            display: 'none',
                            type: 'rect',
                            rect: ['465px', '112px', '350px', '140px', 'auto', 'auto']
                        },
                        {
                            id: 'Framework',
                            symbolName: 'Framework',
                            display: 'none',
                            type: 'rect',
                            rect: ['-9px', '90px', '1303px', '870px', 'auto', 'auto'],
                            transform: [[],[],[],['0.95','0.95']]
                        },
                        {
                            id: 'information-box-2-1',
                            symbolName: 'information-box-2-1',
                            display: 'none',
                            type: 'rect',
                            rect: ['825px', '112px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'taxonomy-1',
                            symbolName: 'taxonomy-1',
                            display: 'none',
                            type: 'rect',
                            rect: ['825px', '112px', 'undefined', 'undefined', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1280px', '1400px', 'auto', 'auto'],
                            sizeRange: ['600px','','',''],
                            overflow: 'hidden',
                            fill: ["rgba(75,75,75,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    labels: {
                        "mobile-ui": 0,
                        "result": 1000
                    },
                    data: [
                        [
                            "eid983",
                            "height",
                            0,
                            0,
                            "linear",
                            "${tile-submit}",
                            '200px',
                            '200px'
                        ],
                        [
                            "eid1883",
                            "left",
                            0,
                            0,
                            "linear",
                            "${tile-6}",
                            '825px',
                            '825px'
                        ],
                        [
                            "eid1093",
                            "height",
                            0,
                            0,
                            "linear",
                            "${q6}",
                            '555px',
                            '555px'
                        ],
                        [
                            "eid1918",
                            "top",
                            0,
                            0,
                            "linear",
                            "${information-box-2}",
                            '112px',
                            '112px'
                        ],
                        [
                            "eid2017",
                            "height",
                            0,
                            0,
                            "linear",
                            "${tile-6}",
                            '200px',
                            '200px'
                        ],
                        [
                            "eid1818",
                            "display",
                            0,
                            0,
                            "linear",
                            "${q4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1627",
                            "display",
                            0,
                            0,
                            "linear",
                            "${information-box-6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid893",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${tile-6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1999",
                            "top",
                            0,
                            0,
                            "linear",
                            "${information-box}",
                            '112px',
                            '112px'
                        ],
                        [
                            "eid1887",
                            "left",
                            0,
                            0,
                            "linear",
                            "${tile-3}",
                            '825px',
                            '825px'
                        ],
                        [
                            "eid1861",
                            "top",
                            0,
                            0,
                            "linear",
                            "${tile-2}",
                            '112px',
                            '112px'
                        ],
                        [
                            "eid2004",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${download-pdf-1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid987",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${tile-0}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1621",
                            "display",
                            0,
                            0,
                            "linear",
                            "${information-box-4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid905",
                            "width",
                            0,
                            0,
                            "linear",
                            "${tile-6}",
                            '350px',
                            '350px'
                        ],
                        [
                            "eid2265",
                            "top",
                            0,
                            0,
                            "linear",
                            "${q6}",
                            '322px',
                            '322px'
                        ],
                        [
                            "eid2016",
                            "top",
                            0,
                            0,
                            "linear",
                            "${tile-6}",
                            '322px',
                            '322px'
                        ],
                        [
                            "eid982",
                            "width",
                            0,
                            0,
                            "linear",
                            "${tile-submit}",
                            '350px',
                            '350px'
                        ],
                        [
                            "eid1819",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${Framework}",
                            'none',
                            'block'
                        ],
                        [
                            "eid862",
                            "display",
                            0,
                            0,
                            "linear",
                            "${q6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid460",
                            "display",
                            500,
                            0,
                            "linear",
                            "${q6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid913",
                            "width",
                            0,
                            0,
                            "linear",
                            "${tile-5}",
                            '350px',
                            '350px'
                        ],
                        [
                            "eid2262",
                            "width",
                            0,
                            0,
                            "linear",
                            "${tile-7}",
                            '710px',
                            '710px'
                        ],
                        [
                            "eid2277",
                            "display",
                            0,
                            0,
                            "linear",
                            "${taxonomy-1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid2271",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${taxonomy-1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid2015",
                            "height",
                            0,
                            0,
                            "linear",
                            "${tile-5}",
                            '200px',
                            '200px'
                        ],
                        [
                            "eid1655",
                            "display",
                            0,
                            0,
                            "linear",
                            "${information-box-1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1876",
                            "top",
                            0,
                            0,
                            "linear",
                            "${tile-submit}",
                            '532px',
                            '532px'
                        ],
                        [
                            "eid678",
                            "display",
                            0,
                            0,
                            "easeInBack",
                            "${q1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid441",
                            "display",
                            500,
                            0,
                            "linear",
                            "${q1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid720",
                            "height",
                            0,
                            0,
                            "linear",
                            "${q2}",
                            '356px',
                            '356px'
                        ],
                        [
                            "eid1924",
                            "left",
                            0,
                            0,
                            "linear",
                            "${q1}",
                            '105px',
                            '105px'
                        ],
                        [
                            "eid2263",
                            "display",
                            0,
                            0,
                            "linear",
                            "${information-box-2-1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1880",
                            "left",
                            0,
                            0,
                            "linear",
                            "${tile-0}",
                            '105px',
                            '105px'
                        ],
                        [
                            "eid1903",
                            "top",
                            0,
                            0,
                            "linear",
                            "${information-box-5}",
                            '382px',
                            '382px'
                        ],
                        [
                            "eid1860",
                            "top",
                            0,
                            0,
                            "linear",
                            "${tile-0}",
                            '112px',
                            '112px'
                        ],
                        [
                            "eid1865",
                            "top",
                            0,
                            0,
                            "linear",
                            "${tile-4}",
                            '322px',
                            '322px'
                        ],
                        [
                            "eid865",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${tile-2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid868",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${tile-4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1616",
                            "display",
                            0,
                            0,
                            "linear",
                            "${information-box-3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1921",
                            "left",
                            0,
                            0,
                            "linear",
                            "${information-box-7}",
                            '825px',
                            '825px'
                        ],
                        [
                            "eid976",
                            "height",
                            0,
                            0,
                            "linear",
                            "${tile-2}",
                            '200px',
                            '200px'
                        ],
                        [
                            "eid1920",
                            "left",
                            0,
                            0,
                            "linear",
                            "${information-box-5}",
                            '825px',
                            '825px'
                        ],
                        [
                            "eid676",
                            "width",
                            0,
                            0,
                            "easeInBack",
                            "${q1}",
                            '350px',
                            '350px'
                        ],
                        [
                            "eid953",
                            "top",
                            0,
                            0,
                            "linear",
                            "${q1}",
                            '113px',
                            '113px'
                        ],
                        [
                            "eid1926",
                            "top",
                            0,
                            0,
                            "linear",
                            "${q2}",
                            '112px',
                            '112px'
                        ],
                        [
                            "eid1913",
                            "top",
                            0,
                            0,
                            "linear",
                            "${information-box-3}",
                            '112px',
                            '112px'
                        ],
                        [
                            "eid1987",
                            "left",
                            0,
                            0,
                            "linear",
                            "${q7}",
                            '105px',
                            '105px'
                        ],
                        [
                            "eid977",
                            "height",
                            0,
                            0,
                            "linear",
                            "${tile-3}",
                            '200px',
                            '200px'
                        ],
                        [
                            "eid974",
                            "height",
                            0,
                            0,
                            "linear",
                            "${tile-0}",
                            '200px',
                            '200px'
                        ],
                        [
                            "eid1100",
                            "width",
                            0,
                            0,
                            "linear",
                            "${q7}",
                            '710px',
                            '710px'
                        ],
                        [
                            "eid1086",
                            "width",
                            0,
                            0,
                            "linear",
                            "${q5}",
                            '350px',
                            '350px'
                        ],
                        [
                            "eid1087",
                            "height",
                            0,
                            0,
                            "linear",
                            "${q5}",
                            '584px',
                            '584px'
                        ],
                        [
                            "eid964",
                            "width",
                            0,
                            0,
                            "linear",
                            "${tile-3}",
                            '350px',
                            '350px'
                        ],
                        [
                            "eid2264",
                            "top",
                            0,
                            0,
                            "linear",
                            "${q5}",
                            '322px',
                            '322px'
                        ],
                        [
                            "eid1911",
                            "top",
                            0,
                            0,
                            "linear",
                            "${information-box-4}",
                            '322px',
                            '322px'
                        ],
                        [
                            "eid1909",
                            "top",
                            0,
                            0,
                            "linear",
                            "${information-box-7}",
                            '532px',
                            '532px'
                        ],
                        [
                            "eid978",
                            "width",
                            0,
                            0,
                            "linear",
                            "${tile-4}",
                            '350px',
                            '350px'
                        ],
                        [
                            "eid1912",
                            "left",
                            0,
                            0,
                            "linear",
                            "${information-box-3}",
                            '105px',
                            '105px'
                        ],
                        [
                            "eid1434",
                            "width",
                            0,
                            0,
                            "linear",
                            "${information-box}",
                            '350px',
                            '350px'
                        ],
                        [
                            "eid979",
                            "height",
                            0,
                            0,
                            "linear",
                            "${tile-4}",
                            '200px',
                            '200px'
                        ],
                        [
                            "eid1997",
                            "height",
                            0,
                            0,
                            "linear",
                            "${information-box}",
                            '140px',
                            '140px'
                        ],
                        [
                            "eid866",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${tile-3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid963",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${tile-submit}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1878",
                            "left",
                            0,
                            0,
                            "linear",
                            "${tile-4}",
                            '105px',
                            '105px'
                        ],
                        [
                            "eid1919",
                            "left",
                            0,
                            0,
                            "linear",
                            "${information-box-4}",
                            '825px',
                            '825px'
                        ],
                        [
                            "eid1101",
                            "height",
                            0,
                            0,
                            "linear",
                            "${q7}",
                            '504px',
                            '504px'
                        ],
                        [
                            "eid1184",
                            "display",
                            0,
                            0,
                            "linear",
                            "${information-box}",
                            'none',
                            'none'
                        ],
                        [
                            "eid904",
                            "display",
                            0,
                            0,
                            "linear",
                            "${q5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid457",
                            "display",
                            500,
                            0,
                            "linear",
                            "${q5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1886",
                            "left",
                            0,
                            0,
                            "linear",
                            "${tile-2}",
                            '465px',
                            '465px'
                        ],
                        [
                            "eid1991",
                            "top",
                            0,
                            0,
                            "linear",
                            "${q7}",
                            '532px',
                            '532px'
                        ],
                        [
                            "eid703",
                            "display",
                            0,
                            0,
                            "linear",
                            "${q2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid442",
                            "display",
                            500,
                            0,
                            "linear",
                            "${q2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid957",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${tile-7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1624",
                            "display",
                            0,
                            0,
                            "linear",
                            "${information-box-5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid863",
                            "display",
                            0,
                            0,
                            "linear",
                            "${q7}",
                            'none',
                            'none'
                        ],
                        [
                            "eid459",
                            "display",
                            500,
                            0,
                            "linear",
                            "${q7}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1881",
                            "left",
                            0,
                            0,
                            "linear",
                            "${tile-5}",
                            '465px',
                            '465px'
                        ],
                        [
                            "eid1935",
                            "left",
                            0,
                            0,
                            "linear",
                            "${q6}",
                            '825px',
                            '825px'
                        ],
                        [
                            "eid1933",
                            "left",
                            0,
                            0,
                            "linear",
                            "${q5}",
                            '465px',
                            '465px'
                        ],
                        [
                            "eid1185",
                            "display",
                            0,
                            0,
                            "linear",
                            "${lightbox}",
                            'none',
                            'none'
                        ],
                        [
                            "eid2299",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${lightbox}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1882",
                            "left",
                            0,
                            0,
                            "linear",
                            "${tile-submit}",
                            '825px',
                            '825px'
                        ],
                        [
                            "eid1916",
                            "top",
                            0,
                            0,
                            "linear",
                            "${information-box-1}",
                            '112px',
                            '112px'
                        ],
                        [
                            "eid1879",
                            "left",
                            0,
                            0,
                            "linear",
                            "${tile-7}",
                            '105px',
                            '105px'
                        ],
                        [
                            "eid1907",
                            "top",
                            0,
                            0,
                            "linear",
                            "${information-box-6}",
                            '382px',
                            '382px'
                        ],
                        [
                            "eid1906",
                            "left",
                            0,
                            0,
                            "linear",
                            "${information-box-6}",
                            '465px',
                            '465px'
                        ],
                        [
                            "eid1632",
                            "display",
                            0,
                            0,
                            "linear",
                            "${information-box-7}",
                            'none',
                            'none'
                        ],
                        [
                            "eid117",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${submit}",
                            'block',
                            'none'
                        ],
                        [
                            "eid971",
                            "width",
                            0,
                            0,
                            "linear",
                            "${tile-0}",
                            '350px',
                            '350px'
                        ],
                        [
                            "eid719",
                            "width",
                            0,
                            0,
                            "linear",
                            "${q2}",
                            '350px',
                            '350px'
                        ],
                        [
                            "eid2000",
                            "left",
                            0,
                            0,
                            "linear",
                            "${information-box}",
                            '465px',
                            '465px'
                        ],
                        [
                            "eid980",
                            "height",
                            0,
                            0,
                            "linear",
                            "${tile-7}",
                            '200px',
                            '200px'
                        ],
                        [
                            "eid1817",
                            "display",
                            0,
                            0,
                            "linear",
                            "${q3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1874",
                            "top",
                            0,
                            0,
                            "linear",
                            "${tile-7}",
                            '532px',
                            '532px'
                        ],
                        [
                            "eid1925",
                            "left",
                            0,
                            0,
                            "linear",
                            "${q2}",
                            '465px',
                            '465px'
                        ],
                        [
                            "eid975",
                            "width",
                            0,
                            0,
                            "linear",
                            "${tile-2}",
                            '350px',
                            '350px'
                        ],
                        [
                            "eid1092",
                            "width",
                            0,
                            0,
                            "linear",
                            "${q6}",
                            '350px',
                            '350px'
                        ],
                        [
                            "eid2014",
                            "top",
                            0,
                            0,
                            "linear",
                            "${tile-5}",
                            '322px',
                            '322px'
                        ],
                        [
                            "eid1917",
                            "left",
                            0,
                            0,
                            "linear",
                            "${information-box-2}",
                            '825px',
                            '825px'
                        ],
                        [
                            "eid677",
                            "height",
                            0,
                            0,
                            "easeInBack",
                            "${q1}",
                            '530px',
                            '530px'
                        ],
                        [
                            "eid1904",
                            "left",
                            0,
                            0,
                            "linear",
                            "${information-box-1}",
                            '465px',
                            '465px'
                        ],
                        [
                            "eid38",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${edit}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1863",
                            "top",
                            0,
                            0,
                            "linear",
                            "${tile-3}",
                            '112px',
                            '112px'
                        ],
                        [
                            "eid897",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${tile-5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1613",
                            "display",
                            0,
                            0,
                            "linear",
                            "${information-box-2}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "edit": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '70px', '30px', 'auto', 'auto'],
                            fill: ['rgba(235,0,0,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['0px', '4px', '70px', '19px', 'auto', 'auto'],
                            align: 'center',
                            id: 'Text2',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 15px;\">EDIT</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(255,255,255,1.00)', '900', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            userClass: '',
                            borderRadius: ['0px', '0px', '0px', '0px 0px'],
                            rect: ['0px', '25px', '70px', '5px', 'auto', 'auto'],
                            id: 'submit-boxCopy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(125,19,19,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '70px', '30px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "submit": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '70px', '30px', 'auto', 'auto'],
                            borderRadius: ['0px', '0px', '0px', '0px 0px'],
                            userClass: '',
                            id: 'submit-box',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(45,164,26,1.00)']
                        },
                        {
                            rect: ['0px', '25px', '70px', '5px', 'auto', 'auto'],
                            borderRadius: ['0px', '0px', '0px', '0px 0px'],
                            userClass: '',
                            id: 'submit-boxCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(34,125,19,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">SUBMIT</span></p>',
                            id: 'Text3',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            rect: ['8px', '6px', '54px', '17px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '70px', '30px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Header": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '100%', '66px', 'auto', 'auto'],
                            id: 'header-box',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(57,57,57,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '100%', '66px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Subheader": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [

                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "q1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '350px', '613px', 'auto', 'auto'],
                            boxShadow: ['', 0, 0, 50, 10, 'rgba(0,0,0,0.26)'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Question1-boxCopy',
                            opacity: '1',
                            type: 'rect',
                            fill: ['rgba(213,0,70,1.00)']
                        },
                        {
                            rect: ['11px', '60px', '292px', '40px', 'auto', 'auto'],
                            font: ['lato, sans-serif', [15, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            id: 'Question1',
                            opacity: '1',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-weight: 300; color: rgb(255, 255, 255); font-size: 23px;\">Organizational Objectives</span><span style=\"font-weight: 300; color: rgb(255, 255, 255);\"> </span></p><p style=\"margin: 0px;\"><span style=\"font-size: 25px;\">\n</span></p>',
                            type: 'text'
                        },
                        {
                            rect: ['0px', '0', '350px', '40', 'auto', 'auto'],
                            id: 'Group2',
                            cursor: 'pointer',
                            type: 'group',
                            c: [
                            {
                                rect: ['0px', '0px', '350px', '40px', 'auto', 'auto'],
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                id: 'Question1-boxCopy4',
                                opacity: '1',
                                type: 'rect',
                                fill: ['rgba(228,108,147,1.00)']
                            },
                            {
                                id: 'Group',
                                type: 'group',
                                rect: ['308', '11', '30', '18', 'auto', 'auto'],
                                c: [
                                {
                                    rect: ['12px', '7px', '21px', '3px', 'auto', 'auto'],
                                    transform: [[], ['45']],
                                    id: 'Arrow2Copy',
                                    stroke: [0, 'rgb(255, 255, 255)', 'solid'],
                                    type: 'rect',
                                    fill: ['rgba(255,255,255,1.00)']
                                },
                                {
                                    rect: ['-2px', '7px', '21px', '3px', 'auto', 'auto'],
                                    transform: [[], ['-45']],
                                    id: 'Arrow1Copy',
                                    stroke: [0, 'rgb(255, 255, 255)', 'solid'],
                                    type: 'rect',
                                    fill: ['rgba(255,255,255,1.00)']
                                }]
                            },
                            {
                                rect: ['11px', '0px', '292px', '40px', 'auto', 'auto'],
                                font: ['lato, sans-serif', [15, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                id: 'Question1Copy4',
                                opacity: '1',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-weight: 300; color: rgb(255, 255, 255); font-size: 25px;\">Objectives</span><span style=\"font-weight: 300; color: rgb(255, 255, 255);\"> </span></p><p style=\"margin: 0px;\"><span style=\"font-size: 25px;\">\n</span></p>',
                                type: 'text'
                            }]
                        },
                        {
                            rect: ['16px', '105px', '287px', '54px', 'auto', 'auto'],
                            textStyle: ['', '', '15px', '', ''],
                            font: ['lato, sans-serif', [20, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Question1Copy2',
                            opacity: '1',
                            text: '<p style=\"margin: 0px; line-height: 25px;\">​What are the broad objectives of your organisation?</p><p style=\"margin: 0px;\"><span style=\"font-size: 25px;\">\n</span></p>',
                            type: 'text'
                        },
                        {
                            rect: ['16px', '376px', '276px', '54px', 'auto', 'auto'],
                            textStyle: ['', '', '15px', '', ''],
                            font: ['lato, sans-serif', [15, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Question1Copy3',
                            opacity: '1',
                            text: '<p style=\"margin: 0px; line-height: 25px;\">​<span style=\"font-size: 20px;\">What are your communication objectives for this program?</span>\n</p><p style=\"margin: 0px;\"><span style=\"font-size: 25px;\">\n</span></p>',
                            type: 'text'
                        },
                        {
                            rect: ['11px', '165px', '327px', '155px', 'auto', 'auto'],
                            userClass: 'textbox1',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'textbox1',
                            opacity: '1',
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.12)']
                        },
                        {
                            rect: ['11px', '330px', '320px', '40px', 'auto', 'auto'],
                            font: ['lato, sans-serif', [15, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            id: 'Question1Copy',
                            opacity: '1',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-weight: 300; color: rgb(255, 255, 255); font-size: 23px;\">Communications Objectives</span><span style=\"font-weight: 300; color: rgb(255, 255, 255);\"> </span></p><p style=\"margin: 0px;\"><span style=\"font-size: 25px;\">\n</span></p>',
                            type: 'text'
                        },
                        {
                            rect: ['11px', '439px', '327px', '155px', 'auto', 'auto'],
                            userClass: 'textbox1-2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'textbox1-2',
                            opacity: '1',
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.12)']
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['0.78242', '0.78242']],
                            id: 'Information-2',
                            symbolName: 'Information-2',
                            cursor: 'pointer',
                            rect: ['306px', '132px', '34px', '30px', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['0.78242', '0.78242']],
                            id: 'Information-2Copy',
                            symbolName: 'Information-2',
                            cursor: 'pointer',
                            rect: ['306px', '403px', '34px', '30px', 'auto', 'auto']
                        },
                        {
                            rect: ['0px', '608px', '350px', '5px', 'auto', 'auto'],
                            id: 'Question1-boxCopy6',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(171,0,56,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '350px', '200px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid671",
                            "width",
                            0,
                            0,
                            "easeInBack",
                            "${Question1}",
                            '292px',
                            '292px'
                        ],
                        [
                            "eid426",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Question1}",
                            '11px',
                            '11px'
                        ],
                        [
                            "eid535",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Question1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1003",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Question1-boxCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid990",
                            "display",
                            0,
                            0,
                            "linear",
                            "${textbox1-2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid991",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${textbox1-2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid608",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Question1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid670",
                            "height",
                            0,
                            0,
                            "easeInBack",
                            "${Question1}",
                            '40px',
                            '40px'
                        ],
                        [
                            "eid427",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Question1}",
                            '60px',
                            '60px'
                        ],
                        [
                            "eid1057",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Question1-boxCopy4}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1060",
                            "height",
                            0,
                            0,
                            "easeInBack",
                            "${Question1-boxCopy4}",
                            '40px',
                            '40px'
                        ],
                        [
                            "eid421",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox1}",
                            '11px',
                            '11px'
                        ],
                        [
                            "eid993",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox1-2}",
                            '327px',
                            '327px'
                        ],
                        [
                            "eid1037",
                            "width",
                            0,
                            0,
                            "easeInBack",
                            "${Question1Copy3}",
                            '276px',
                            '276px'
                        ],
                        [
                            "eid1189",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Information-2Copy}",
                            '403px',
                            '403px'
                        ],
                        [
                            "eid998",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Question1Copy}",
                            '11px',
                            '11px'
                        ],
                        [
                            "eid1010",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Question1Copy2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1000",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Question1-boxCopy}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid424",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox1}",
                            '155px',
                            '155px'
                        ],
                        [
                            "eid1063",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Question1-boxCopy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1065",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Question1Copy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1994",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Question1-boxCopy}",
                            '613px',
                            '613px'
                        ],
                        [
                            "eid1009",
                            "height",
                            0,
                            0,
                            "easeInBack",
                            "${Question1Copy2}",
                            '54px',
                            '54px'
                        ],
                        [
                            "eid996",
                            "height",
                            0,
                            0,
                            "easeInBack",
                            "${Question1Copy}",
                            '40px',
                            '40px'
                        ],
                        [
                            "eid1069",
                            "width",
                            0,
                            0,
                            "easeInBack",
                            "${Question1Copy4}",
                            '292px',
                            '292px'
                        ],
                        [
                            "eid1032",
                            "height",
                            0,
                            0,
                            "easeInBack",
                            "${Question1Copy3}",
                            '54px',
                            '54px'
                        ],
                        [
                            "eid1011",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Question1Copy2}",
                            '16px',
                            '16px'
                        ],
                        [
                            "eid1035",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Question1Copy3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1068",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Question1Copy4}",
                            '11px',
                            '11px'
                        ],
                        [
                            "eid1007",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Question1Copy2}",
                            '105px',
                            '105px'
                        ],
                        [
                            "eid1075",
                            "font-size",
                            0,
                            0,
                            "linear",
                            "${Question1Copy2}",
                            '20px',
                            '20px'
                        ],
                        [
                            "eid1435",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox1}",
                            'rgba(255,255,255,0.12)',
                            'rgba(255,255,255,0.12)'
                        ],
                        [
                            "eid989",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox1-2}",
                            '155px',
                            '155px'
                        ],
                        [
                            "eid1031",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Question1Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2270",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${Question1-boxCopy4}",
                            'rgba(228,108,147,1.00)',
                            'rgba(228,108,147,1.00)'
                        ],
                        [
                            "eid609",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${textbox1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1048",
                            "boxShadow.blur",
                            0,
                            0,
                            "linear",
                            "${Question1-boxCopy}",
                            '50px',
                            '50px'
                        ],
                        [
                            "eid997",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Question1Copy}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1036",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Question1Copy3}",
                            '16px',
                            '16px'
                        ],
                        [
                            "eid534",
                            "display",
                            0,
                            0,
                            "linear",
                            "${textbox1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1005",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Question1-boxCopy}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1067",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Question1Copy4}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1014",
                            "color",
                            0,
                            0,
                            "linear",
                            "${Question1Copy2}",
                            'rgba(255,255,255,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid1006",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Question1-boxCopy}",
                            '350px',
                            '350px'
                        ],
                        [
                            "eid1064",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Question1Copy4}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1436",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox1-2}",
                            'rgba(255,255,255,0.12)',
                            'rgba(255,255,255,0.12)'
                        ],
                        [
                            "eid999",
                            "width",
                            0,
                            0,
                            "easeInBack",
                            "${Question1Copy}",
                            '320px',
                            '320px'
                        ],
                        [
                            "eid994",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Question1Copy}",
                            '330px',
                            '330px'
                        ],
                        [
                            "eid992",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox1-2}",
                            '11px',
                            '11px'
                        ],
                        [
                            "eid1045",
                            "boxShadow.offsetH",
                            0,
                            0,
                            "linear",
                            "${Question1-boxCopy}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1047",
                            "boxShadow.spread",
                            0,
                            0,
                            "linear",
                            "${Question1-boxCopy}",
                            '10px',
                            '10px'
                        ],
                        [
                            "eid995",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Question1Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1046",
                            "boxShadow.offsetV",
                            0,
                            0,
                            "linear",
                            "${Question1-boxCopy}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1030",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Question1Copy3}",
                            '376px',
                            '376px'
                        ],
                        [
                            "eid1004",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Question1-boxCopy}",
                            '1',
                            '1'
                        ],
                        [
                            "eid2267",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${Question1-boxCopy}",
                            'rgba(213,0,70,1.00)',
                            'rgba(213,0,70,1.00)'
                        ],
                        [
                            "eid1188",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Information-2}",
                            '132px',
                            '132px'
                        ],
                        [
                            "eid1013",
                            "line-height",
                            0,
                            0,
                            "linear",
                            "${Question1Copy2}",
                            '15px',
                            '15px'
                        ],
                        [
                            "eid669",
                            "top",
                            0,
                            0,
                            "easeInBack",
                            "${textbox1}",
                            '165px',
                            '165px'
                        ],
                        [
                            "eid1054",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Question1-boxCopy4}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1034",
                            "color",
                            0,
                            0,
                            "linear",
                            "${Question1Copy3}",
                            'rgba(255,255,255,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid1066",
                            "height",
                            0,
                            0,
                            "easeInBack",
                            "${Question1Copy4}",
                            '40px',
                            '40px'
                        ],
                        [
                            "eid1012",
                            "width",
                            0,
                            0,
                            "easeInBack",
                            "${Question1Copy2}",
                            '287px',
                            '287px'
                        ],
                        [
                            "eid1055",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Question1-boxCopy4}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid423",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox1}",
                            '327px',
                            '327px'
                        ],
                        [
                            "eid1008",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Question1Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1056",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Question1-boxCopy4}",
                            '350px',
                            '350px'
                        ],
                        [
                            "eid1049",
                            "boxShadow.color",
                            0,
                            0,
                            "linear",
                            "${Question1-boxCopy}",
                            'rgba(0,0,0,0.26)',
                            'rgba(0,0,0,0.26)'
                        ],
                        [
                            "eid1033",
                            "line-height",
                            0,
                            0,
                            "linear",
                            "${Question1Copy3}",
                            '15px',
                            '15px'
                        ],
                        [
                            "eid988",
                            "top",
                            0,
                            0,
                            "easeInBack",
                            "${textbox1-2}",
                            '439px',
                            '439px'
                        ]
                    ]
                }
            },
            "q2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '350px', '690px', 'auto', 'auto'],
                            fill: ['rgba(241,123,0,1.00)'],
                            display: 'block',
                            id: 'Question1-box',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            boxShadow: ['', 0, 0, 50, 10, 'rgba(0,0,0,0.21)']
                        },
                        {
                            font: ['lato, sans-serif', [15, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Question1',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255); font-size: 18px;\">Define your key target audiences</span><span style=\"font-size: 18px;\">\n\n</span></p><p style=\"margin: 0px; font-family: lato, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 11px; color: rgb(138, 138, 138); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: start; text-indent: 0px; line-height: normal;\"></p><p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255); font-size: 20px;\">\n</span></p>',
                            display: 'block',
                            rect: ['17px', '90px', '291px', '30px', 'auto', 'auto']
                        },
                        {
                            userClass: 'textbox2-1',
                            rect: ['36px', '127px', '299px', '30px', 'auto', 'auto'],
                            display: 'block',
                            id: 'textbox2-1',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.09)']
                        },
                        {
                            userClass: 'textbox2-2',
                            rect: ['36px', '170px', '299px', '30px', 'auto', 'auto'],
                            display: 'block',
                            id: 'textbox2-2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.09)']
                        },
                        {
                            userClass: 'textbox2-3',
                            rect: ['36px', '214px', '299px', '30px', 'auto', 'auto'],
                            display: 'block',
                            id: 'textbox2-3',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.09)']
                        },
                        {
                            userClass: 'textbox2-4',
                            rect: ['36px', '257px', '299px', '30px', 'auto', 'auto'],
                            display: 'block',
                            id: 'textbox2-4',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.09)']
                        },
                        {
                            userClass: 'textbox2-5',
                            rect: ['36px', '301px', '299px', '30px', 'auto', 'auto'],
                            display: 'block',
                            id: 'textbox2-5',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.09)']
                        },
                        {
                            type: 'group',
                            id: 'Group3',
                            cursor: 'pointer',
                            rect: ['0px', '0px', '350', '40', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '350px', '40px', 'auto', 'auto'],
                                opacity: '1',
                                id: 'Question1-boxCopy5',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(255,154,49,1.00)']
                            },
                            {
                                rect: ['308', '11', '30', '18', 'auto', 'auto'],
                                id: 'GroupCopy4',
                                type: 'group',
                                c: [
                                {
                                    transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                    rect: ['12px', '7px', '21px', '3px', 'auto', 'auto'],
                                    id: 'Arrow2Copy2',
                                    stroke: [0, 'rgb(255, 255, 255)', 'solid'],
                                    type: 'rect',
                                    fill: ['rgba(255,255,255,1.00)']
                                },
                                {
                                    transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                                    rect: ['-2px', '7px', '21px', '3px', 'auto', 'auto'],
                                    id: 'Arrow1Copy2',
                                    stroke: [0, 'rgb(255, 255, 255)', 'solid'],
                                    type: 'rect',
                                    fill: ['rgba(255,255,255,1.00)']
                                }]
                            },
                            {
                                font: ['lato, sans-serif', [15, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                type: 'text',
                                id: 'Question1Copy5',
                                opacity: '1',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-weight: 300; color: rgb(255, 255, 255); font-size: 25px;\">Inputs</span><span style=\"font-weight: 300; color: rgb(255, 255, 255);\"></span></p><p style=\"margin: 0px;\"><span style=\"font-size: 25px;\">\n</span></p>',
                                rect: ['11px', '0px', '292px', '40px', 'auto', 'auto']
                            }]
                        },
                        {
                            transform: [[], [], [], ['0.78242', '0.78242']],
                            rect: ['306px', '93px', '34px', '30px', 'auto', 'auto'],
                            id: 'Information-2',
                            symbolName: 'Information-2',
                            cursor: 'pointer',
                            type: 'rect'
                        },
                        {
                            transform: [[], [], [], ['0.78242', '0.78242']],
                            rect: ['306px', '412px', '34px', '30px', 'auto', 'auto'],
                            id: 'Information-2-1',
                            symbolName: 'Information-2',
                            cursor: 'pointer',
                            type: 'rect'
                        },
                        {
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            align: 'left',
                            id: 'Text2',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">1.</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['13px', '127px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            align: 'left',
                            id: 'Text2Copy',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">2.</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['13px', '170px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            align: 'left',
                            id: 'Text2Copy3',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">4.</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['13px', '257px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            align: 'left',
                            id: 'Text2Copy4',
                            text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255);\">5.</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['13px', '301px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            align: 'left',
                            id: 'Text2Copy2',
                            text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255);\">3.</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['13px', '214px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            userClass: 'textbox2-6',
                            rect: ['36px', '457px', '299px', '30px', 'auto', 'auto'],
                            display: 'block',
                            id: 'textbox2-6',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.09)']
                        },
                        {
                            userClass: 'textbox2-7',
                            rect: ['36px', '500px', '299px', '30px', 'auto', 'auto'],
                            display: 'block',
                            id: 'textbox2-7',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.09)']
                        },
                        {
                            userClass: 'textbox2-8',
                            rect: ['36px', '544px', '299px', '30px', 'auto', 'auto'],
                            display: 'block',
                            id: 'textbox2-8',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.09)']
                        },
                        {
                            userClass: 'textbox2-9',
                            rect: ['36px', '587px', '299px', '30px', 'auto', 'auto'],
                            display: 'block',
                            id: 'textbox2-9',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.09)']
                        },
                        {
                            userClass: 'textbox2-10',
                            rect: ['36px', '631px', '299px', '30px', 'auto', 'auto'],
                            display: 'block',
                            id: 'textbox2-10',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.09)']
                        },
                        {
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            align: 'left',
                            id: 'Text2Copy9',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">1.</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['13px', '457px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            align: 'left',
                            id: 'Text2Copy8',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">2.</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['13px', '500px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            align: 'left',
                            id: 'Text2Copy7',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">4.</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['13px', '587px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            align: 'left',
                            id: 'Text2Copy6',
                            text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255);\">5.</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['13px', '631px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            align: 'left',
                            id: 'Text2Copy5',
                            text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255);\">3.</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['13px', '544px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'Question1-boxCopy7',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '685px', '350px', '5px', 'auto', 'auto'],
                            fill: ['rgba(187,95,0,1.00)']
                        },
                        {
                            font: ['lato, sans-serif', [15, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Question1Copy',
                            opacity: '1',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-weight: 300; color: rgb(255, 255, 255); font-size: 23px;\">Target Audience</span><span style=\"font-weight: 300; color: rgb(255, 255, 255);\"></span></p><p style=\"margin: 0px;\"><span style=\"font-size: 25px;\">\n</span></p>',
                            rect: ['11px', '53px', '292px', '40px', 'auto', 'auto']
                        },
                        {
                            font: ['lato, sans-serif', [18, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Question1Copy3',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 18px; color: rgb(255, 255, 255);\">Highlight your strategic plan and other ‘inputs’</span>\n<span style=\"font-size: 18px;\">\n\n</span></p><p style=\"margin: 0px; font-family: lato, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 11px; color: rgb(138, 138, 138); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: start; text-indent: 0px; line-height: normal;\"></p><p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255); font-size: 20px;\">\n</span></p>',
                            display: 'block',
                            rect: ['17px', '393px', '248px', '55px', 'auto', 'auto']
                        },
                        {
                            font: ['lato, sans-serif', [15, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Question1Copy2',
                            opacity: '1',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255); font-size: 23px; font-weight: 300;\">Strategy and other inputs</span>\n</p><p style=\"margin: 0px;\"><span style=\"font-size: 25px;\">\n</span></p>',
                            rect: ['11px', '355px', '292px', '40px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '350px', '355px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: false,
                    data: [
                        [
                            "eid2186",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox2-5}",
                            '301px',
                            '301px'
                        ],
                        [
                            "eid1283",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox2-2}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid2147",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Question1}",
                            '291px',
                            '291px'
                        ],
                        [
                            "eid2175",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Question1}",
                            '17px',
                            '17px'
                        ],
                        [
                            "eid23",
                            "display",
                            250,
                            0,
                            "linear",
                            "${Question1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1298",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox2-4}",
                            'rgba(255,255,255,0.09)',
                            'rgba(255,255,255,0.09)'
                        ],
                        [
                            "eid1296",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox2-4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1289",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox2-3}",
                            'rgba(255,255,255,0.09)',
                            'rgba(255,255,255,0.09)'
                        ],
                        [
                            "eid1287",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox2-2}",
                            'rgba(255,255,255,0.09)',
                            'rgba(255,255,255,0.09)'
                        ],
                        [
                            "eid2109",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Question1}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid2255",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Question1Copy3}",
                            '393px',
                            '393px'
                        ],
                        [
                            "eid1071",
                            "boxShadow.offsetV",
                            0,
                            0,
                            "linear",
                            "${Question1-box}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid2181",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Information-2}",
                            '306px',
                            '306px'
                        ],
                        [
                            "eid2179",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox2-3}",
                            '36px',
                            '36px'
                        ],
                        [
                            "eid2177",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox2-1}",
                            '36px',
                            '36px'
                        ],
                        [
                            "eid2040",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox2-10}",
                            'rgba(255,255,255,0.09)',
                            'rgba(255,255,255,0.09)'
                        ],
                        [
                            "eid2044",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox2-10}",
                            '299px',
                            '299px'
                        ],
                        [
                            "eid2043",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox2-10}",
                            '36px',
                            '36px'
                        ],
                        [
                            "eid2062",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox2-7}",
                            '299px',
                            '299px'
                        ],
                        [
                            "eid1072",
                            "boxShadow.blur",
                            0,
                            0,
                            "linear",
                            "${Question1-box}",
                            '50px',
                            '50px'
                        ],
                        [
                            "eid2067",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox2-6}",
                            '36px',
                            '36px'
                        ],
                        [
                            "eid1180",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${Information-2}",
                            '0.78242',
                            '0.78242'
                        ],
                        [
                            "eid1070",
                            "boxShadow.offsetH",
                            0,
                            0,
                            "linear",
                            "${Question1-box}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1284",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox2-2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2178",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox2-1}",
                            '127px',
                            '127px'
                        ],
                        [
                            "eid2212",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Question1Copy3}",
                            '55px',
                            '55px'
                        ],
                        [
                            "eid2198",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Information-2-1}",
                            '34px',
                            '34px'
                        ],
                        [
                            "eid2060",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox2-7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2045",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox2-9}",
                            'rgba(255,255,255,0.09)',
                            'rgba(255,255,255,0.09)'
                        ],
                        [
                            "eid1286",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox2-2}",
                            '299px',
                            '299px'
                        ],
                        [
                            "eid1187",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Information-2}",
                            '34px',
                            '34px'
                        ],
                        [
                            "eid2183",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox2-2}",
                            '36px',
                            '36px'
                        ],
                        [
                            "eid2052",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox2-8}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid2180",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox2-3}",
                            '214px',
                            '214px'
                        ],
                        [
                            "eid2059",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox2-7}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid1297",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox2-4}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid2061",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox2-7}",
                            '36px',
                            '36px'
                        ],
                        [
                            "eid2174",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox2-4}",
                            '257px',
                            '257px'
                        ],
                        [
                            "eid2257",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox2-9}",
                            '587px',
                            '587px'
                        ],
                        [
                            "eid2258",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox2-6}",
                            '457px',
                            '457px'
                        ],
                        [
                            "eid2256",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox2-7}",
                            '500px',
                            '500px'
                        ],
                        [
                            "eid1294",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox2-3}",
                            '299px',
                            '299px'
                        ],
                        [
                            "eid2189",
                            "display",
                            250,
                            0,
                            "linear",
                            "${Question1Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2260",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox2-8}",
                            '544px',
                            '544px'
                        ],
                        [
                            "eid376",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox2-1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2197",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Information-2-1}",
                            '306px',
                            '306px'
                        ],
                        [
                            "eid1304",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox2-5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2056",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox2-8}",
                            '299px',
                            '299px'
                        ],
                        [
                            "eid2185",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox2-5}",
                            '36px',
                            '36px'
                        ],
                        [
                            "eid2190",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Question1Copy3}",
                            '17px',
                            '17px'
                        ],
                        [
                            "eid2047",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox2-9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2065",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox2-6}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid2254",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Question1}",
                            '90px',
                            '90px'
                        ],
                        [
                            "eid694",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${Question1-box}",
                            'rgba(241,123,0,1.00)',
                            'rgba(241,123,0,1.00)'
                        ],
                        [
                            "eid2259",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox2-10}",
                            '631px',
                            '631px'
                        ],
                        [
                            "eid423",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox2-1}",
                            '299px',
                            '299px'
                        ],
                        [
                            "eid2050",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox2-9}",
                            '299px',
                            '299px'
                        ],
                        [
                            "eid1292",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox2-3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2053",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox2-8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2055",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox2-8}",
                            '36px',
                            '36px'
                        ],
                        [
                            "eid2041",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox2-10}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid420",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Question1-box}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1073",
                            "boxShadow.spread",
                            0,
                            0,
                            "linear",
                            "${Question1-box}",
                            '10px',
                            '10px'
                        ],
                        [
                            "eid1305",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox2-5}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid2184",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox2-2}",
                            '170px',
                            '170px'
                        ],
                        [
                            "eid418",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Question1-box}",
                            '350px',
                            '350px'
                        ],
                        [
                            "eid2196",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Information-2-1}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid377",
                            "display",
                            250,
                            0,
                            "linear",
                            "${Question1-box}",
                            'block',
                            'none'
                        ],
                        [
                            "eid708",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Question1-box}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid2049",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox2-9}",
                            '36px',
                            '36px'
                        ],
                        [
                            "eid2261",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Question1-box}",
                            '690px',
                            '690px'
                        ],
                        [
                            "eid2051",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox2-8}",
                            'rgba(255,255,255,0.09)',
                            'rgba(255,255,255,0.09)'
                        ],
                        [
                            "eid2058",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox2-7}",
                            'rgba(255,255,255,0.09)',
                            'rgba(255,255,255,0.09)'
                        ],
                        [
                            "eid1307",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox2-5}",
                            '299px',
                            '299px'
                        ],
                        [
                            "eid2195",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${Information-2-1}",
                            '0.78242',
                            '0.78242'
                        ],
                        [
                            "eid2042",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox2-10}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2194",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${Information-2-1}",
                            '0.78242',
                            '0.78242'
                        ],
                        [
                            "eid424",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox2-1}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid2063",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox2-6}",
                            'rgba(255,255,255,0.09)',
                            'rgba(255,255,255,0.09)'
                        ],
                        [
                            "eid1181",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${Information-2}",
                            '0.78242',
                            '0.78242'
                        ],
                        [
                            "eid1300",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox2-4}",
                            '299px',
                            '299px'
                        ],
                        [
                            "eid2215",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Question1Copy3}",
                            '248px',
                            '248px'
                        ],
                        [
                            "eid1186",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Information-2}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid2182",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Information-2}",
                            '93px',
                            '93px'
                        ],
                        [
                            "eid2173",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox2-4}",
                            '36px',
                            '36px'
                        ],
                        [
                            "eid1074",
                            "boxShadow.color",
                            0,
                            0,
                            "linear",
                            "${Question1-box}",
                            'rgba(0,0,0,0.21)',
                            'rgba(0,0,0,0.21)'
                        ],
                        [
                            "eid1291",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox2-3}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid2249",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Information-2-1}",
                            '412px',
                            '412px'
                        ],
                        [
                            "eid2046",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox2-9}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid1288",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox2-1}",
                            'rgba(255,255,255,0.09)',
                            'rgba(255,255,255,0.09)'
                        ],
                        [
                            "eid2068",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox2-6}",
                            '299px',
                            '299px'
                        ],
                        [
                            "eid1302",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox2-5}",
                            'rgba(255,255,255,0.09)',
                            'rgba(255,255,255,0.09)'
                        ],
                        [
                            "eid2064",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox2-6}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "q5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '2px', '350px', '580px', 'auto', 'auto'],
                            fill: ['rgba(0,83,127,1.00)'],
                            id: 'Question1-box',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            boxShadow: ['', 0, 0, 50, 10, 'rgba(0,0,0,0.30)']
                        },
                        {
                            type: 'rect',
                            id: 'Question1-boxCopy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '577px', '350px', '5px', 'auto', 'auto'],
                            fill: ['rgba(0,65,100,1.00)']
                        },
                        {
                            type: 'text',
                            id: 'Question1',
                            text: '<p style=\"margin: 0px; line-height: 24px;\">​<span style=\"font-size: 18px; color: rgb(255, 255, 255);\">List here what your target audiences took out of your communication and how they reacted to it. Click i for more info.</span>\n<font color=\"#ffffff\"><span style=\"font-size: 29px;\"></span></font></p><p style=\"margin: 0px;\">\n</p>',
                            rect: ['18px', '54px', '290px', '103px', 'auto', 'auto'],
                            font: ['lato, sans-serif', [15, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal']
                        },
                        {
                            rect: ['0', '0', '350', '40', 'auto', 'auto'],
                            id: 'Group6',
                            type: 'group',
                            c: [
                            {
                                rect: ['0px', '0px', '350px', '40px', 'auto', 'auto'],
                                opacity: '1',
                                id: 'Question1-boxCopy8',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,114,175,1.00)']
                            },
                            {
                                rect: ['308', '11', '30', '18', 'auto', 'auto'],
                                id: 'GroupCopy7',
                                type: 'group',
                                c: [
                                {
                                    transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                    rect: ['12px', '7px', '21px', '3px', 'auto', 'auto'],
                                    id: 'Arrow2Copy5',
                                    stroke: [0, 'rgb(255, 255, 255)', 'solid'],
                                    type: 'rect',
                                    fill: ['rgba(255,255,255,1.00)']
                                },
                                {
                                    transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                                    rect: ['-2px', '7px', '21px', '3px', 'auto', 'auto'],
                                    id: 'Arrow1Copy5',
                                    stroke: [0, 'rgb(255, 255, 255)', 'solid'],
                                    type: 'rect',
                                    fill: ['rgba(255,255,255,1.00)']
                                }]
                            },
                            {
                                type: 'text',
                                rect: ['11px', '0px', '292px', '40px', 'auto', 'auto'],
                                id: 'Question1Copy8',
                                opacity: '1',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-weight: 300; color: rgb(255, 255, 255); font-size: 25px;\">Out-takes</span><span style=\"font-weight: 300; color: rgb(255, 255, 255);\"></span></p><p style=\"margin: 0px;\"><span style=\"font-size: 25px;\">\n</span></p>',
                                font: ['lato, sans-serif', [15, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal']
                            }]
                        },
                        {
                            userClass: 'textbox5-1',
                            rect: ['11px', '168px', '329px', '30px', 'auto', 'auto'],
                            display: 'block',
                            id: 'textbox5-1',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.13)']
                        },
                        {
                            userClass: 'textbox5-2',
                            rect: ['11px', '208px', '329px', '30px', 'auto', 'auto'],
                            display: 'block',
                            id: 'textbox5-2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.13)']
                        },
                        {
                            userClass: 'textbox5-3',
                            rect: ['11px', '248px', '329px', '30px', 'auto', 'auto'],
                            display: 'block',
                            id: 'textbox5-3',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.13)']
                        },
                        {
                            userClass: 'textbox5-4',
                            rect: ['11px', '288px', '329px', '30px', 'auto', 'auto'],
                            display: 'block',
                            id: 'textbox5-4',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.13)']
                        },
                        {
                            userClass: 'textbox5-5',
                            rect: ['11px', '328px', '329px', '30px', 'auto', 'auto'],
                            display: 'block',
                            id: 'textbox5-5',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.13)']
                        },
                        {
                            userClass: 'textbox5-6',
                            rect: ['11px', '368px', '329px', '30px', 'auto', 'auto'],
                            display: 'block',
                            id: 'textbox5-6',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.13)']
                        },
                        {
                            userClass: 'textbox5-7',
                            rect: ['11px', '408px', '329px', '30px', 'auto', 'auto'],
                            display: 'block',
                            id: 'textbox5-7',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.13)']
                        },
                        {
                            userClass: 'textbox5-8',
                            rect: ['11px', '448px', '329px', '30px', 'auto', 'auto'],
                            display: 'block',
                            id: 'textbox5-8',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.13)']
                        },
                        {
                            userClass: 'textbox5-9',
                            rect: ['11px', '488px', '329px', '30px', 'auto', 'auto'],
                            display: 'block',
                            id: 'textbox5-9',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.13)']
                        },
                        {
                            userClass: 'textbox5-10',
                            rect: ['11px', '529px', '329px', '30px', 'auto', 'auto'],
                            display: 'block',
                            id: 'textbox5-10',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.13)']
                        },
                        {
                            rect: ['306px', '132px', '34px', '30px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Information-2Copy4',
                            symbolName: 'Information-2',
                            cursor: 'pointer',
                            transform: [[], [], [], ['0.78242', '0.78242']]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '350px', '600px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: false,
                    data: [
                        [
                            "eid1176",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox5-7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1131",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox5-3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1633",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox5-3}",
                            '11px',
                            '11px'
                        ],
                        [
                            "eid1636",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox5-8}",
                            '329px',
                            '329px'
                        ],
                        [
                            "eid1651",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox5-10}",
                            '11px',
                            '11px'
                        ],
                        [
                            "eid1135",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox5-2}",
                            'rgba(255,255,255,0.13)',
                            'rgba(255,255,255,0.13)'
                        ],
                        [
                            "eid1652",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox5-10}",
                            '329px',
                            '329px'
                        ],
                        [
                            "eid1645",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox5-5}",
                            '11px',
                            '11px'
                        ],
                        [
                            "eid1635",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox5-8}",
                            '11px',
                            '11px'
                        ],
                        [
                            "eid1147",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox5-5}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid1152",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox5-4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1150",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox5-4}",
                            'rgba(255,255,255,0.13)',
                            'rgba(255,255,255,0.13)'
                        ],
                        [
                            "eid1153",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox5-4}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid1132",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox5-3}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid1163",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox5-9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1174",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox5-7}",
                            '408px',
                            '408px'
                        ],
                        [
                            "eid1649",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox5-7}",
                            '11px',
                            '11px'
                        ],
                        [
                            "eid376",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox5-1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1145",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox5-5}",
                            'rgba(255,255,255,0.13)',
                            'rgba(255,255,255,0.13)'
                        ],
                        [
                            "eid1139",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox5-6}",
                            '368px',
                            '368px'
                        ],
                        [
                            "eid1157",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox5-10}",
                            'rgba(255,255,255,0.13)',
                            'rgba(255,255,255,0.13)'
                        ],
                        [
                            "eid1151",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox5-4}",
                            '288px',
                            '288px'
                        ],
                        [
                            "eid1158",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox5-10}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid1643",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox5-4}",
                            '11px',
                            '11px'
                        ],
                        [
                            "eid1165",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox5-9}",
                            'rgba(255,255,255,0.13)',
                            'rgba(255,255,255,0.13)'
                        ],
                        [
                            "eid1146",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox5-5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1130",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox5-3}",
                            '248px',
                            '248px'
                        ],
                        [
                            "eid1127",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox5-2}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid1650",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox5-7}",
                            '329px',
                            '329px'
                        ],
                        [
                            "eid1144",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox5-5}",
                            '328px',
                            '328px'
                        ],
                        [
                            "eid1644",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox5-4}",
                            '329px',
                            '329px'
                        ],
                        [
                            "eid1126",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox5-2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1125",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox5-2}",
                            '208px',
                            '208px'
                        ],
                        [
                            "eid1159",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox5-10}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1162",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox5-9}",
                            '488px',
                            '488px'
                        ],
                        [
                            "eid1156",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox5-10}",
                            '529px',
                            '529px'
                        ],
                        [
                            "eid1141",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox5-6}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid1637",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox5-2}",
                            '11px',
                            '11px'
                        ],
                        [
                            "eid1169",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox5-8}",
                            'rgba(255,255,255,0.13)',
                            'rgba(255,255,255,0.13)'
                        ],
                        [
                            "eid1646",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox5-5}",
                            '329px',
                            '329px'
                        ],
                        [
                            "eid1140",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox5-6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1136",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox5-1}",
                            'rgba(255,255,255,0.13)',
                            'rgba(255,255,255,0.13)'
                        ],
                        [
                            "eid1175",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox5-7}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid1648",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox5-6}",
                            '329px',
                            '329px'
                        ],
                        [
                            "eid1647",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox5-6}",
                            '11px',
                            '11px'
                        ],
                        [
                            "eid1640",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox5-9}",
                            '329px',
                            '329px'
                        ],
                        [
                            "eid1138",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox5-6}",
                            'rgba(255,255,255,0.13)',
                            'rgba(255,255,255,0.13)'
                        ],
                        [
                            "eid1168",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox5-8}",
                            '448px',
                            '448px'
                        ],
                        [
                            "eid1177",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox5-7}",
                            'rgba(255,255,255,0.13)',
                            'rgba(255,255,255,0.13)'
                        ],
                        [
                            "eid1639",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox5-9}",
                            '11px',
                            '11px'
                        ],
                        [
                            "eid1641",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox5-1}",
                            '11px',
                            '11px'
                        ],
                        [
                            "eid1171",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox5-8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1091",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox5-1}",
                            '168px',
                            '168px'
                        ],
                        [
                            "eid1137",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox5-3}",
                            'rgba(255,255,255,0.13)',
                            'rgba(255,255,255,0.13)'
                        ],
                        [
                            "eid1089",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox5-1}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid1164",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox5-9}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid1190",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Information-2Copy4}",
                            '132px',
                            '132px'
                        ],
                        [
                            "eid1170",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox5-8}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid1634",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox5-3}",
                            '329px',
                            '329px'
                        ],
                        [
                            "eid1642",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox5-1}",
                            '329px',
                            '329px'
                        ],
                        [
                            "eid1638",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox5-2}",
                            '329px',
                            '329px'
                        ]
                    ]
                }
            },
            "q6": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '350px', '559px', 'auto', 'auto'],
                            fill: ['rgba(0,90,138,1.00)'],
                            display: 'block',
                            id: 'Question1-box',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            boxShadow: ['', 0, 0, 50, 10, 'rgba(0,0,0,0.30)']
                        },
                        {
                            type: 'text',
                            rect: ['11px', '55px', '327px', '73px', 'auto', 'auto'],
                            id: 'Question1',
                            text: '<p style=\"margin: 0px; line-height: 24px;\">​<span style=\"font-size: 18px; color: rgb(255, 255, 255);\">List here evidence of the effects of your communication on your target audience. Click i for more info on outcomes.</span>\n</p><p style=\"margin: 0px;\">\n</p>',
                            display: 'block',
                            font: ['lato, sans-serif', [15, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal']
                        },
                        {
                            userClass: 'textbox6-1',
                            rect: ['11px', '152px', '327px', '30px', 'auto', 'auto'],
                            display: 'block',
                            id: 'textbox6-1',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.21)']
                        },
                        {
                            userClass: 'textbox6-2',
                            rect: ['11px', '192px', '327px', '30px', 'auto', 'auto'],
                            display: 'block',
                            id: 'textbox6-2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.21)']
                        },
                        {
                            userClass: 'textbox6-3',
                            rect: ['11px', '232px', '327px', '30px', 'auto', 'auto'],
                            display: 'block',
                            id: 'textbox6-3',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.21)']
                        },
                        {
                            userClass: 'textbox6-4',
                            rect: ['11px', '272px', '327px', '30px', 'auto', 'auto'],
                            display: 'block',
                            id: 'textbox6-4',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.21)']
                        },
                        {
                            userClass: 'textbox6-5',
                            rect: ['11px', '312px', '327px', '30px', 'auto', 'auto'],
                            display: 'block',
                            id: 'textbox6-5',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.21)']
                        },
                        {
                            userClass: 'textbox6-6',
                            rect: ['11px', '352px', '327px', '30px', 'auto', 'auto'],
                            display: 'block',
                            id: 'textbox6-6',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.21)']
                        },
                        {
                            userClass: 'textbox6-7',
                            rect: ['11px', '392px', '327px', '30px', 'auto', 'auto'],
                            display: 'block',
                            id: 'textbox6-7',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.21)']
                        },
                        {
                            userClass: 'textbox6-8',
                            rect: ['11px', '432px', '327px', '30px', 'auto', 'auto'],
                            display: 'block',
                            id: 'textbox6-8',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.21)']
                        },
                        {
                            userClass: 'textbox6-9',
                            rect: ['11px', '472px', '327px', '30px', 'auto', 'auto'],
                            display: 'block',
                            id: 'textbox6-9',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.21)']
                        },
                        {
                            userClass: 'textbox6-10',
                            rect: ['11px', '512px', '327px', '30px', 'auto', 'auto'],
                            display: 'block',
                            id: 'textbox6-10',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.21)']
                        },
                        {
                            rect: ['0', '0', '350', '40', 'auto', 'auto'],
                            id: 'Group11',
                            type: 'group',
                            c: [
                            {
                                rect: ['0px', '0px', '350px', '40px', 'auto', 'auto'],
                                opacity: '1',
                                id: 'Question1-boxCopy9',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,114,175,1.00)']
                            },
                            {
                                rect: ['308', '11', '30', '18', 'auto', 'auto'],
                                id: 'GroupCopy8',
                                type: 'group',
                                c: [
                                {
                                    transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                    rect: ['12px', '7px', '21px', '3px', 'auto', 'auto'],
                                    id: 'Arrow2Copy6',
                                    stroke: [0, 'rgb(255, 255, 255)', 'solid'],
                                    type: 'rect',
                                    fill: ['rgba(255,255,255,1.00)']
                                },
                                {
                                    transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                                    rect: ['-2px', '7px', '21px', '3px', 'auto', 'auto'],
                                    id: 'Arrow1Copy6',
                                    stroke: [0, 'rgb(255, 255, 255)', 'solid'],
                                    type: 'rect',
                                    fill: ['rgba(255,255,255,1.00)']
                                }]
                            },
                            {
                                type: 'text',
                                rect: ['11px', '0px', '292px', '40px', 'auto', 'auto'],
                                id: 'Question1Copy9',
                                opacity: '1',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-weight: 300; color: rgb(255, 255, 255); font-size: 25px;\">Outcomes</span><span style=\"font-weight: 300; color: rgb(255, 255, 255);\"></span></p><p style=\"margin: 0px;\"><span style=\"font-size: 25px;\">\n</span></p>',
                                font: ['lato, sans-serif', [15, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal']
                            }]
                        },
                        {
                            rect: ['306px', '113px', '34px', '30px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Information-2Copy5',
                            symbolName: 'Information-2',
                            cursor: 'pointer',
                            transform: [[], [], [], ['0.78242', '0.78242']]
                        },
                        {
                            type: 'rect',
                            id: 'Question1-boxCopy4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '554px', '350px', '5px', 'auto', 'auto'],
                            fill: ['rgba(0,65,100,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '350px', '600px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: false,
                    data: [
                        [
                            "eid1513",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox6-4}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid1548",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox6-10}",
                            '512px',
                            '512px'
                        ],
                        [
                            "eid368",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Question1}",
                            '327px',
                            '327px'
                        ],
                        [
                            "eid426",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Question1}",
                            '11px',
                            '11px'
                        ],
                        [
                            "eid1537",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox6-8}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid23",
                            "display",
                            250,
                            0,
                            "linear",
                            "${Question1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1547",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox6-10}",
                            'rgba(255,255,255,0.21)',
                            'rgba(255,255,255,0.21)'
                        ],
                        [
                            "eid1521",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox6-5}",
                            '11px',
                            '11px'
                        ],
                        [
                            "eid1511",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox6-4}",
                            '272px',
                            '272px'
                        ],
                        [
                            "eid1503",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox6-2}",
                            '327px',
                            '327px'
                        ],
                        [
                            "eid1502",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox6-2}",
                            '11px',
                            '11px'
                        ],
                        [
                            "eid1508",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox6-3}",
                            '232px',
                            '232px'
                        ],
                        [
                            "eid1532",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox6-7}",
                            'rgba(255,255,255,0.21)',
                            'rgba(255,255,255,0.21)'
                        ],
                        [
                            "eid427",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Question1}",
                            '55px',
                            '55px'
                        ],
                        [
                            "eid1498",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox6-2}",
                            'rgba(255,255,255,0.21)',
                            'rgba(255,255,255,0.21)'
                        ],
                        [
                            "eid1551",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox6-10}",
                            '11px',
                            '11px'
                        ],
                        [
                            "eid1520",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox6-5}",
                            'rgba(255,255,255,0.21)',
                            'rgba(255,255,255,0.21)'
                        ],
                        [
                            "eid1507",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox6-3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1536",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox6-8}",
                            'rgba(255,255,255,0.21)',
                            'rgba(255,255,255,0.21)'
                        ],
                        [
                            "eid1506",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox6-3}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid1517",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox6-5}",
                            '312px',
                            '312px'
                        ],
                        [
                            "eid1519",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox6-5}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid1518",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox6-5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1095",
                            "boxShadow.blur",
                            0,
                            0,
                            "linear",
                            "${Question1-box}",
                            '50px',
                            '50px'
                        ],
                        [
                            "eid1097",
                            "boxShadow.offsetH",
                            0,
                            0,
                            "linear",
                            "${Question1-box}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1529",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox6-7}",
                            '392px',
                            '392px'
                        ],
                        [
                            "eid1530",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox6-7}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid1524",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox6-6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid420",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Question1-box}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1525",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox6-6}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid1549",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox6-10}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid1528",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox6-6}",
                            '327px',
                            '327px'
                        ],
                        [
                            "eid1437",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox6-1}",
                            'rgba(255,255,255,0.21)',
                            'rgba(255,255,255,0.21)'
                        ],
                        [
                            "eid1552",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox6-10}",
                            '327px',
                            '327px'
                        ],
                        [
                            "eid1094",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${Question1-box}",
                            'rgba(0,90,138,1.00)',
                            'rgba(0,90,138,1.00)'
                        ],
                        [
                            "eid1543",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox6-9}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid1535",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox6-8}",
                            '432px',
                            '432px'
                        ],
                        [
                            "eid423",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox6-1}",
                            '327px',
                            '327px'
                        ],
                        [
                            "eid1501",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox6-2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1538",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox6-8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1544",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox6-9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1540",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox6-8}",
                            '327px',
                            '327px'
                        ],
                        [
                            "eid1509",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox6-3}",
                            '11px',
                            '11px'
                        ],
                        [
                            "eid1546",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox6-9}",
                            '327px',
                            '327px'
                        ],
                        [
                            "eid1617",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Information-2Copy5}",
                            '113px',
                            '113px'
                        ],
                        [
                            "eid1515",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox6-4}",
                            '11px',
                            '11px'
                        ],
                        [
                            "eid1499",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox6-2}",
                            '192px',
                            '192px'
                        ],
                        [
                            "eid1981",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Question1-box}",
                            '559px',
                            '559px'
                        ],
                        [
                            "eid1505",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox6-3}",
                            'rgba(255,255,255,0.21)',
                            'rgba(255,255,255,0.21)'
                        ],
                        [
                            "eid1542",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox6-9}",
                            '472px',
                            '472px'
                        ],
                        [
                            "eid1099",
                            "boxShadow.color",
                            0,
                            0,
                            "linear",
                            "${Question1-box}",
                            'rgba(0,0,0,0.30)',
                            'rgba(0,0,0,0.30)'
                        ],
                        [
                            "eid377",
                            "display",
                            250,
                            0,
                            "linear",
                            "${Question1-box}",
                            'block',
                            'none'
                        ],
                        [
                            "eid419",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Question1-box}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid418",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Question1-box}",
                            '350px',
                            '350px'
                        ],
                        [
                            "eid421",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox6-1}",
                            '11px',
                            '11px'
                        ],
                        [
                            "eid1527",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox6-6}",
                            '11px',
                            '11px'
                        ],
                        [
                            "eid1550",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox6-10}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1539",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox6-8}",
                            '11px',
                            '11px'
                        ],
                        [
                            "eid1500",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox6-2}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid376",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox6-1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1512",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox6-4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid425",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox6-1}",
                            '152px',
                            '152px'
                        ],
                        [
                            "eid1510",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox6-3}",
                            '327px',
                            '327px'
                        ],
                        [
                            "eid1534",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox6-7}",
                            '327px',
                            '327px'
                        ],
                        [
                            "eid1545",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox6-9}",
                            '11px',
                            '11px'
                        ],
                        [
                            "eid1096",
                            "boxShadow.spread",
                            0,
                            0,
                            "linear",
                            "${Question1-box}",
                            '10px',
                            '10px'
                        ],
                        [
                            "eid1522",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox6-5}",
                            '327px',
                            '327px'
                        ],
                        [
                            "eid424",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox6-1}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid1541",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox6-9}",
                            'rgba(255,255,255,0.21)',
                            'rgba(255,255,255,0.21)'
                        ],
                        [
                            "eid1514",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox6-4}",
                            'rgba(255,255,255,0.21)',
                            'rgba(255,255,255,0.21)'
                        ],
                        [
                            "eid1504",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Question1}",
                            '73px',
                            '73px'
                        ],
                        [
                            "eid1523",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox6-6}",
                            '352px',
                            '352px'
                        ],
                        [
                            "eid1098",
                            "boxShadow.offsetV",
                            0,
                            0,
                            "linear",
                            "${Question1-box}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1531",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox6-7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1516",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox6-4}",
                            '327px',
                            '327px'
                        ],
                        [
                            "eid1533",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox6-7}",
                            '11px',
                            '11px'
                        ],
                        [
                            "eid1526",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox6-6}",
                            'rgba(255,255,255,0.21)',
                            'rgba(255,255,255,0.21)'
                        ]
                    ]
                }
            },
            "q7": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '710px', '507px', 'auto', 'auto'],
                            fill: ['rgba(104,0,138,1.00)'],
                            display: 'block',
                            id: 'Question1-box',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            boxShadow: ['', 0, 0, 50, 10, 'rgba(0,0,0,0.30)']
                        },
                        {
                            type: 'text',
                            rect: ['11px', '51px', '681px', '40px', 'auto', 'auto'],
                            id: 'Question1',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255); font-size: 20px; font-weight: 300;\">How has the organisation been impacted during the campaign?</span></p><p style=\"margin: 0px; font-family: lato, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 11px; color: rgb(138, 138, 138); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: start; text-indent: 0px; line-height: normal;\"></p><p style=\"margin: 0px;\">\n</p>',
                            display: 'block',
                            font: ['lato, sans-serif', [15, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal']
                        },
                        {
                            userClass: 'textbox7',
                            rect: ['12px', '96px', '679px', '30px', 'auto', 'auto'],
                            display: 'block',
                            id: 'textbox7',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.19)']
                        },
                        {
                            userClass: 'textbox7-2',
                            rect: ['12px', '136px', '679px', '30px', 'auto', 'auto'],
                            display: 'block',
                            id: 'textbox7-2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.19)']
                        },
                        {
                            userClass: 'textbox7-3',
                            rect: ['12px', '176px', '679px', '30px', 'auto', 'auto'],
                            display: 'block',
                            id: 'textbox7-3',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.19)']
                        },
                        {
                            userClass: 'textbox7-4',
                            rect: ['12px', '216px', '679px', '30px', 'auto', 'auto'],
                            display: 'block',
                            id: 'textbox7-4',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.19)']
                        },
                        {
                            userClass: 'textbox7-5',
                            rect: ['12px', '256px', '679px', '30px', 'auto', 'auto'],
                            display: 'block',
                            id: 'textbox7-5',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.19)']
                        },
                        {
                            userClass: 'textbox7-6',
                            rect: ['12px', '296px', '679px', '30px', 'auto', 'auto'],
                            display: 'block',
                            id: 'textbox7-6',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.19)']
                        },
                        {
                            userClass: 'textbox7-7',
                            rect: ['12px', '336px', '679px', '30px', 'auto', 'auto'],
                            display: 'block',
                            id: 'textbox7-7',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.19)']
                        },
                        {
                            userClass: 'textbox7-8',
                            rect: ['12px', '376px', '679px', '30px', 'auto', 'auto'],
                            display: 'block',
                            id: 'textbox7-8',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.19)']
                        },
                        {
                            userClass: 'textbox7-9',
                            rect: ['12px', '416px', '679px', '30px', 'auto', 'auto'],
                            display: 'block',
                            id: 'textbox7-9',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.19)']
                        },
                        {
                            userClass: 'textbox7-10',
                            rect: ['12px', '456px', '679px', '30px', 'auto', 'auto'],
                            display: 'block',
                            id: 'textbox7-10',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.19)']
                        },
                        {
                            rect: ['0', '0px', '710px', '40', 'auto', 'auto'],
                            id: 'Group',
                            type: 'group',
                            c: [
                            {
                                rect: ['0px', '0px', '710px', '40px', 'auto', 'auto'],
                                opacity: '1',
                                id: 'Question1-boxCopy10',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(138,0,182,1.00)']
                            },
                            {
                                rect: ['661px', '11', '30', '18', 'auto', 'auto'],
                                id: 'GroupCopy9',
                                type: 'group',
                                c: [
                                {
                                    transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                    rect: ['12px', '7px', '21px', '3px', 'auto', 'auto'],
                                    id: 'Arrow2Copy7',
                                    stroke: [0, 'rgb(255, 255, 255)', 'solid'],
                                    type: 'rect',
                                    fill: ['rgba(255,255,255,1.00)']
                                },
                                {
                                    transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                                    rect: ['-2px', '7px', '21px', '3px', 'auto', 'auto'],
                                    id: 'Arrow1Copy7',
                                    stroke: [0, 'rgb(255, 255, 255)', 'solid'],
                                    type: 'rect',
                                    fill: ['rgba(255,255,255,1.00)']
                                }]
                            },
                            {
                                type: 'text',
                                rect: ['11px', '0px', '292px', '40px', 'auto', 'auto'],
                                id: 'Question1Copy10',
                                opacity: '1',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-weight: 300; color: rgb(255, 255, 255); font-size: 25px;\">Organizational Impact</span><span style=\"font-weight: 300; color: rgb(255, 255, 255);\"></span></p><p style=\"margin: 0px;\"><span style=\"font-size: 25px;\">\n</span></p>',
                                font: ['lato, sans-serif', [15, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal']
                            }]
                        },
                        {
                            rect: ['659px', '50px', '34px', '30px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Information-2Copy6',
                            symbolName: 'Information-2',
                            cursor: 'pointer',
                            transform: [[], [], [], ['0.78242', '0.78242']]
                        },
                        {
                            type: 'rect',
                            id: 'Question1-boxCopy5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '502px', '710px', '5px', 'auto', 'auto'],
                            fill: ['rgba(77,0,102,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '710px', '619px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: false,
                    data: [
                        [
                            "eid1569",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox7-4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid424",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox7}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid1601",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox7-9}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid368",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Question1}",
                            '681px',
                            '681px'
                        ],
                        [
                            "eid426",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Question1}",
                            '11px',
                            '11px'
                        ],
                        [
                            "eid1585",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox7-7}",
                            'rgba(255,255,255,0.19)',
                            'rgba(255,255,255,0.19)'
                        ],
                        [
                            "eid23",
                            "display",
                            250,
                            0,
                            "linear",
                            "${Question1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1593",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox7-8}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid1589",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox7-7}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid1566",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox7-3}",
                            '679px',
                            '679px'
                        ],
                        [
                            "eid1553",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Question1}",
                            '40px',
                            '40px'
                        ],
                        [
                            "eid1561",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox7-3}",
                            'rgba(255,255,255,0.19)',
                            'rgba(255,255,255,0.19)'
                        ],
                        [
                            "eid427",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Question1}",
                            '51px',
                            '51px'
                        ],
                        [
                            "eid1587",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox7-7}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid1106",
                            "boxShadow.offsetV",
                            0,
                            0,
                            "linear",
                            "${Question1-box}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid421",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox7}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid425",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox7}",
                            '96px',
                            '96px'
                        ],
                        [
                            "eid1559",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox7-2}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid1606",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox7-10}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid1578",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox7-5}",
                            '679px',
                            '679px'
                        ],
                        [
                            "eid1604",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox7-10}",
                            '456px',
                            '456px'
                        ],
                        [
                            "eid1583",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox7-6}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid1603",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox7-10}",
                            'rgba(255,255,255,0.19)',
                            'rgba(255,255,255,0.19)'
                        ],
                        [
                            "eid1572",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox7-4}",
                            '679px',
                            '679px'
                        ],
                        [
                            "eid1105",
                            "boxShadow.offsetH",
                            0,
                            0,
                            "linear",
                            "${Question1-box}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1599",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox7-9}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid1573",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox7-5}",
                            '256px',
                            '256px'
                        ],
                        [
                            "eid1556",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox7-2}",
                            '136px',
                            '136px'
                        ],
                        [
                            "eid1584",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox7-6}",
                            '679px',
                            '679px'
                        ],
                        [
                            "eid1607",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox7-10}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid1104",
                            "boxShadow.spread",
                            0,
                            0,
                            "linear",
                            "${Question1-box}",
                            '10px',
                            '10px'
                        ],
                        [
                            "eid1554",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox7}",
                            'rgba(255,255,255,0.19)',
                            'rgba(255,255,255,0.19)'
                        ],
                        [
                            "eid1600",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox7-9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1571",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox7-4}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid1594",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox7-8}",
                            '376px',
                            '376px'
                        ],
                        [
                            "eid1576",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox7-5}",
                            'rgba(255,255,255,0.19)',
                            'rgba(255,255,255,0.19)'
                        ],
                        [
                            "eid1602",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox7-9}",
                            '679px',
                            '679px'
                        ],
                        [
                            "eid1567",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox7-4}",
                            'rgba(255,255,255,0.19)',
                            'rgba(255,255,255,0.19)'
                        ],
                        [
                            "eid1590",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox7-7}",
                            '679px',
                            '679px'
                        ],
                        [
                            "eid1564",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox7-3}",
                            '176px',
                            '176px'
                        ],
                        [
                            "eid1558",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox7-2}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid376",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1605",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox7-10}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1591",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox7-8}",
                            'rgba(255,255,255,0.19)',
                            'rgba(255,255,255,0.19)'
                        ],
                        [
                            "eid1586",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox7-7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1597",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox7-9}",
                            'rgba(255,255,255,0.19)',
                            'rgba(255,255,255,0.19)'
                        ],
                        [
                            "eid1557",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox7-2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1598",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox7-9}",
                            '416px',
                            '416px'
                        ],
                        [
                            "eid1560",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox7-2}",
                            '679px',
                            '679px'
                        ],
                        [
                            "eid1563",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox7-3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid419",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Question1-box}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1565",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox7-3}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid377",
                            "display",
                            250,
                            0,
                            "linear",
                            "${Question1-box}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1595",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox7-8}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid418",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Question1-box}",
                            '710px',
                            '710px'
                        ],
                        [
                            "eid1993",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Question1-box}",
                            '507px',
                            '507px'
                        ],
                        [
                            "eid1608",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox7-10}",
                            '679px',
                            '679px'
                        ],
                        [
                            "eid423",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox7}",
                            '679px',
                            '679px'
                        ],
                        [
                            "eid1592",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox7-8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1568",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox7-4}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid1574",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox7-5}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid1582",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox7-6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1596",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox7-8}",
                            '679px',
                            '679px'
                        ],
                        [
                            "eid420",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Question1-box}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1577",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox7-5}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid1580",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox7-6}",
                            '296px',
                            '296px'
                        ],
                        [
                            "eid1588",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox7-7}",
                            '336px',
                            '336px'
                        ],
                        [
                            "eid1579",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox7-6}",
                            'rgba(255,255,255,0.19)',
                            'rgba(255,255,255,0.19)'
                        ],
                        [
                            "eid1102",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${Question1-box}",
                            'rgba(104,0,138,1.00)',
                            'rgba(104,0,138,1.00)'
                        ],
                        [
                            "eid1555",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox7-2}",
                            'rgba(255,255,255,0.19)',
                            'rgba(255,255,255,0.19)'
                        ],
                        [
                            "eid1107",
                            "boxShadow.color",
                            0,
                            0,
                            "linear",
                            "${Question1-box}",
                            'rgba(0,0,0,0.30)',
                            'rgba(0,0,0,0.30)'
                        ],
                        [
                            "eid1575",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox7-5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1103",
                            "boxShadow.blur",
                            0,
                            0,
                            "linear",
                            "${Question1-box}",
                            '50px',
                            '50px'
                        ],
                        [
                            "eid1279",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Information-2Copy6}",
                            '50px',
                            '50px'
                        ],
                        [
                            "eid1570",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox7-4}",
                            '216px',
                            '216px'
                        ],
                        [
                            "eid1562",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox7-3}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid1581",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox7-6}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid1278",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Information-2Copy6}",
                            '659px',
                            '659px'
                        ]
                    ]
                }
            },
            "tile-1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Tile-bg-1',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '255px', '189px', 'auto', 'auto'],
                            fill: ['rgba(138,138,138,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 30px; font-family: lato, sans-serif; font-weight: 300; color: rgb(255, 255, 255);\">Orgnizational</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 30px; font-family: lato, sans-serif; font-weight: 300; color: rgb(255, 255, 255);\">objectives</span></p>',
                            id: 'Tile-title-1',
                            textStyle: ['', '', '40px', '', ''],
                            opacity: '1',
                            rect: ['13px', '2px', '229px', '93px', 'auto', 'auto']
                        },
                        {
                            type: 'group',
                            id: 'GroupCopy2',
                            rect: ['158px', '88px', '119', '119', 'auto', 'auto'],
                            transform: [[], [], [], ['0.5', '0.5']],
                            c: [
                            {
                                rect: ['0px', '0px', '109px', '109px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'EllipseCopy2',
                                stroke: [5, 'rgba(255,255,255,1.00)', 'solid'],
                                type: 'ellipse',
                                fill: ['rgba(138,138,138,0.00)']
                            },
                            {
                                type: 'rect',
                                id: 'Arrow3',
                                stroke: [0, 'rgb(255, 255, 255)', 'solid'],
                                rect: ['29px', '57px', '51px', '5px', 'auto', 'auto'],
                                fill: ['rgba(255,255,255,1.00)']
                            },
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['65px', '52px', '21px', '5px', 'auto', 'auto'],
                                id: 'Arrow2',
                                stroke: [0, 'rgb(255, 255, 255)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(255,255,255,1.00)']
                            },
                            {
                                transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['65px', '63px', '21px', '5px', 'auto', 'auto'],
                                id: 'Arrow1',
                                stroke: [0, 'rgb(255, 255, 255)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(255,255,255,1.00)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '255px', '189px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "tile-2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '350px', '200px', 'auto', 'auto'],
                            id: 'Tile-bg-1',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,154,49,1.00)']
                        },
                        {
                            rect: ['20px', '11px', '214px', '95px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            textStyle: ['', '', '36px', '', ''],
                            id: 'Tile-title-1',
                            opacity: '1',
                            text: '<p style=\"margin: 0px; line-height: 40px;\">​<span style=\"font-size: 35px; font-family: lato, sans-serif; font-weight: 300; color: rgb(255, 255, 255);\">Inputs</span></p>',
                            type: 'text'
                        },
                        {
                            rect: ['282px', '132px', '51px', '51px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            stroke: [3, 'rgba(255,255,255,1.00)', 'solid'],
                            id: 'Ellipse',
                            opacity: '1',
                            type: 'ellipse',
                            fill: ['rgba(238,121,0,1.00)']
                        },
                        {
                            rect: ['298px', '139px', '26px', '35px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', ''],
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text2',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: lato, sans-serif; color: rgb(255, 255, 255); font-size: 28px; font-weight: 900;\">2</span></p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['0px', '195px', '350px', '5px', 'auto', 'auto'],
                            borderRadius: ['0px 0px', '0px', '0px', '0px 0px'],
                            id: 'Rectangle2Copy2',
                            stroke: [0, 'rgb(255, 255, 255)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(238,121,0,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '350px', '200px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "tile-3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '350px', '200px', 'auto', 'auto'],
                            id: 'Tile-bg-1',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,195,148,1.00)']
                        },
                        {
                            rect: ['282px', '130px', '51px', '51px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            stroke: [3, 'rgba(255,255,255,1.00)', 'solid'],
                            id: 'Ellipse',
                            opacity: '1',
                            type: 'ellipse',
                            fill: ['rgba(0,146,111,1.00)']
                        },
                        {
                            rect: ['20px', '11px', '204px', '96px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            textStyle: ['', '', '37px', '', ''],
                            id: 'Tile-title-1',
                            opacity: '1',
                            text: '<p style=\"margin: 0px; line-height: 40px; color: rgb(255, 255, 255); font-family: lato, sans-serif; font-size: 35px; font-weight: 300;\">Activity</p>',
                            type: 'text'
                        },
                        {
                            rect: ['298px', '139px', '26px', '35px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', ''],
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text2',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: lato, sans-serif; color: rgb(255, 255, 255); font-size: 28px; font-weight: 900;\">3</span></p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['0px', '195px', '350px', '5px', 'auto', 'auto'],
                            borderRadius: ['0px 0px', '0px', '0px', '0px 0px'],
                            id: 'Rectangle2Copy3',
                            stroke: [0, 'rgb(255, 255, 255)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(0,146,111,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '350px', '200px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "tile-5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '350px', '200px', 'auto', 'auto'],
                            id: 'Tile-bg-1',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,114,175,1.00)']
                        },
                        {
                            rect: ['282px', '127px', '51px', '51px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            stroke: [3, 'rgba(255,255,255,1.00)', 'solid'],
                            id: 'EllipseCopy2',
                            opacity: '1',
                            type: 'ellipse',
                            fill: ['rgba(0,96,148,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['19px', '8px', '214px', '67px', 'auto', 'auto'],
                            id: 'Tile-title-1',
                            opacity: '1',
                            text: '<p style=\"margin: 0px;\"><span style=\"font-size: 35px; font-weight: 300; color: rgb(255, 255, 255); font-family: lato, sans-serif;\">Out-takes</span></p>',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['298px', '136px', '26px', '35px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text2Copy2',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: lato, sans-serif; color: rgb(255, 255, 255); font-size: 28px; font-weight: 900;\">5</span></p>',
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', '']
                        },
                        {
                            rect: ['0px', '195px', '350px', '5px', 'auto', 'auto'],
                            borderRadius: ['0px 0px', '0px', '0px', '0px 0px'],
                            id: 'Rectangle2Copy5',
                            stroke: [0, 'rgb(255, 255, 255)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(0,96,148,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '350px', '200px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "tile-4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '350px', '200px', 'auto', 'auto'],
                            id: 'Tile-bg-1',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,144,255,1.00)']
                        },
                        {
                            rect: ['0px', '195px', '350px', '5px', 'auto', 'auto'],
                            borderRadius: ['0px 0px', '0px', '0px', '0px 0px'],
                            id: 'Rectangle2Copy4',
                            stroke: [0, 'rgb(255, 255, 255)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(0,123,218,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['21px', '14px', '214px', '87px', 'auto', 'auto'],
                            opacity: '1',
                            id: 'Tile-title-1',
                            text: '<p style=\"margin: 0px; line-height: 40px;\"><span style=\"font-weight: 300; font-size: 35px; font-family: lato, sans-serif; color: rgb(255, 255, 255);\">Outputs</span></p>',
                            textStyle: ['', '', '34px', '', ''],
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal']
                        },
                        {
                            rect: ['282px', '130px', '51px', '51px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            stroke: [3, 'rgba(255,255,255,1.00)', 'solid'],
                            id: 'EllipseCopy',
                            opacity: '1',
                            type: 'ellipse',
                            fill: ['rgba(0,123,218,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['297px', '138px', '26px', '35px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text2Copy',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: lato, sans-serif; color: rgb(255, 255, 255); font-size: 28px; font-weight: 900;\">4</span></p>',
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '350px', '200px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "tile-6": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '350px', '200px', 'auto', 'auto'],
                            id: 'Tile-bg-1',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,114,175,1.00)']
                        },
                        {
                            rect: ['282px', '129px', '51px', '51px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            stroke: [3, 'rgba(255,255,255,1.00)', 'solid'],
                            id: 'EllipseCopy3',
                            opacity: '1',
                            type: 'ellipse',
                            fill: ['rgba(0,92,141,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['16px', '12px', '214px', '54px', 'auto', 'auto'],
                            id: 'Tile-title-1',
                            opacity: '1',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 35px; font-family: lato, sans-serif; font-weight: 300; color: rgb(255, 255, 255);\">Outcomes</span></p>',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['297px', '136px', '26px', '35px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text2Copy3',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: lato, sans-serif; color: rgb(255, 255, 255); font-size: 28px; font-weight: 900;\">6</span></p>',
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', '']
                        },
                        {
                            rect: ['0px', '195px', '350px', '5px', 'auto', 'auto'],
                            borderRadius: ['0px 0px', '0px', '0px', '0px 0px'],
                            id: 'Rectangle2Copy6',
                            stroke: [0, 'rgb(255, 255, 255)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(0,92,141,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '350px', '200px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "tile-7": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Tile-bg-1',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '710px', '200px', 'auto', 'auto'],
                            fill: ['rgba(138,0,182,1.00)']
                        },
                        {
                            rect: ['645px', '128px', '51px', '51px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            opacity: '1',
                            id: 'EllipseCopy4',
                            stroke: [3, 'rgba(255,255,255,1.00)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(112,0,148,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['16px', '12px', '533px', '124px', 'auto', 'auto'],
                            id: 'Tile-title-1',
                            opacity: '1',
                            text: '<p style=\"margin: 0px; line-height: 40px;\">​<span style=\"font-size: 35px; font-family: lato, sans-serif; font-weight: 300; color: rgb(255, 255, 255);\">Impact</span></p>',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['661px', '136px', '26px', '35px', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text2Copy4',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: lato, sans-serif; color: rgb(255, 255, 255); font-size: 28px; font-weight: 900;\">7</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', '']
                        },
                        {
                            rect: ['0px', '195px', '710px', '5px', 'auto', 'auto'],
                            borderRadius: ['0px 0px', '0px', '0px', '0px 0px'],
                            id: 'Rectangle2Copy7',
                            stroke: [0, 'rgb(255, 255, 255)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(112,0,148,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '710px', '200px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "tile-8": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Tile-bg-1',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '350px', '250px', 'auto', 'auto'],
                            fill: ['rgba(255,0,84,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Tile-title-1',
                            opacity: '1',
                            text: '<p style=\"margin: 0px; line-height: 40px;\"><span style=\"font-weight: 300; color: rgb(255, 255, 255); font-size: 35px; font-family: lato, sans-serif;\">Measurement</span></p><p style=\"margin: 0px; line-height: 40px;\"><span style=\"font-weight: 300; color: rgb(255, 255, 255); font-size: 35px; font-family: lato, sans-serif;\">Story</span></p>',
                            rect: ['20px', '12px', '321px', '124px', 'auto', 'auto']
                        },
                        {
                            type: 'group',
                            id: 'Group',
                            rect: ['252px', '150px', '119', '119', 'auto', 'auto'],
                            transform: [[], [], [], ['0.5', '0.5']],
                            c: [
                            {
                                rect: ['0px', '0px', '109px', '109px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'Ellipse',
                                stroke: [5, 'rgba(255,255,255,1.00)', 'solid'],
                                type: 'ellipse',
                                fill: ['rgba(138,138,138,0.00)']
                            },
                            {
                                type: 'rect',
                                id: 'Arrow3',
                                stroke: [0, 'rgb(255, 255, 255)', 'solid'],
                                rect: ['29px', '57px', '51px', '5px', 'auto', 'auto'],
                                fill: ['rgba(255,255,255,1.00)']
                            },
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['65px', '52px', '21px', '5px', 'auto', 'auto'],
                                id: 'Arrow2',
                                stroke: [0, 'rgb(255, 255, 255)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(255,255,255,1.00)']
                            },
                            {
                                transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['65px', '63px', '21px', '5px', 'auto', 'auto'],
                                id: 'Arrow1',
                                stroke: [0, 'rgb(255, 255, 255)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(255,255,255,1.00)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '350px', '250px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "tile-submit": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Tile-bg-1',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '350px', '200px', 'auto', 'auto'],
                            fill: ['rgba(31,31,31,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Tile-bg-1Copy2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '120px', '350px', '80px', 'auto', 'auto'],
                            fill: ['rgba(45,164,26,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Tile-bg-1Copy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '195px', '350px', '5px', 'auto', 'auto'],
                            fill: ['rgba(36,133,21,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [21, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Tile-title-1',
                            opacity: '1',
                            text: '<p style=\"margin: 0px; text-align: center;\"><span style=\"font-family: lato, sans-serif; color: rgb(255, 255, 255); font-size: 25px;\">SUBMIT</span></p>',
                            rect: ['106px', '138px', '138px', '41px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [21, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Tile-title-1Copy',
                            opacity: '1',
                            text: '<p style=\"margin: 0px; text-align: left;\"><span style=\"font-family: lato, sans-serif; color: rgb(255, 255, 255); font-size: 19px; font-weight: 300;\">Click on submit button to view your content in the Integrated Evaluation Framework by AMEC.</span></p>',
                            rect: ['27px', '22px', '307px', '80px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '350px', '200px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "tile-1_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Tile-bg-1',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '255px', '189px', 'auto', 'auto'],
                            fill: ['rgba(138,138,138,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Tile-title-1',
                            opacity: '1',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 30px; font-family: lato, sans-serif; font-weight: 300; color: rgb(255, 255, 255);\">Communications Objectives</span></p>',
                            rect: ['15px', '4px', '225px', '91px', 'auto', 'auto']
                        },
                        {
                            type: 'group',
                            id: 'Group',
                            rect: ['158px', '88px', '119', '119', 'auto', 'auto'],
                            transform: [[], [], [], ['0.5', '0.5']],
                            c: [
                            {
                                rect: ['0px', '0px', '109px', '109px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'Ellipse',
                                stroke: [5, 'rgba(255,255,255,1.00)', 'solid'],
                                type: 'ellipse',
                                fill: ['rgba(138,138,138,0.00)']
                            },
                            {
                                type: 'rect',
                                id: 'Arrow3',
                                stroke: [0, 'rgb(255, 255, 255)', 'solid'],
                                rect: ['29px', '57px', '51px', '5px', 'auto', 'auto'],
                                fill: ['rgba(255,255,255,1.00)']
                            },
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['65px', '52px', '21px', '5px', 'auto', 'auto'],
                                id: 'Arrow2',
                                stroke: [0, 'rgb(255, 255, 255)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(255,255,255,1.00)']
                            },
                            {
                                transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['65px', '63px', '21px', '5px', 'auto', 'auto'],
                                id: 'Arrow1',
                                stroke: [0, 'rgb(255, 255, 255)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(255,255,255,1.00)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '255px', '189px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "tile-0": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '350px', '200px', 'auto', 'auto'],
                            id: 'Tile-bg-1',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(213,0,70,1.00)']
                        },
                        {
                            rect: ['15px', '8px', '214px', '61px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            id: 'Tile-title-1',
                            opacity: '1',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 35px; font-family: lato, sans-serif; font-weight: 300; color: rgb(255, 255, 255);\">Objectives</span></p>',
                            type: 'text'
                        },
                        {
                            rect: ['0px', '142px', '296px', '37px', 'auto', 'auto'],
                            borderRadius: ['0px 0px', '0px', '0px', '0px 0px'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(255, 255, 255)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(170,0,55,1.00)']
                        },
                        {
                            rect: ['0px', '195px', '350px', '5px', 'auto', 'auto'],
                            borderRadius: ['0px 0px', '0px', '0px', '0px 0px'],
                            id: 'Rectangle2Copy',
                            stroke: [0, 'rgb(255, 255, 255)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(161,0,53,1.00)']
                        },
                        {
                            rect: ['282px', '130px', '51px', '51px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            stroke: [3, 'rgba(255,255,255,1.00)', 'solid'],
                            id: 'EllipseCopy5',
                            opacity: '1',
                            type: 'ellipse',
                            fill: ['rgba(170,0,55,1.00)']
                        },
                        {
                            rect: ['298px', '137px', '26px', '35px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', ''],
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: lato, sans-serif; color: rgb(255, 255, 255); font-size: 28px; font-weight: 900;\">1</span></p>',
                            id: 'Text2Copy5',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            type: 'text'
                        },
                        {
                            type: 'text',
                            id: 'Text2',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['128px', '146px', '137px', '26px', 'auto', 'auto'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            opacity: '1',
                            text: '<p style=\"margin: 0px; line-height: 24px; text-align: right;\"><span style=\"color: rgb(255, 255, 255); font-family: lato, sans-serif; font-size: 15px;\">START HERE</span></p>'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '350px', '200px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "information-box": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '350px', '145px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle2',
                            opacity: '1',
                            type: 'rect',
                            fill: ['rgba(234,234,234,1.00)']
                        },
                        {
                            type: 'text',
                            align: 'left',
                            textStyle: ['', '', '18px', '', 'none'],
                            rect: ['14px', '16px', '330px', '96px', 'auto', 'auto'],
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'normal'],
                            userClass: 'information-text',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-weight: 500;\">ORGANIZATIONAL OBJECTIVES</span>&nbsp;are usually published in the organization’s business plan or strategy. They are often long-term and require more than communication. Identify which organizational objectives your communication program can support.</p>',
                            id: 'Text2'
                        },
                        {
                            type: 'text',
                            id: 'Text2Copy',
                            text: '<p style=\"margin: 0px;\">For Further information <span style=\"text-decoration: underline;\">click here</span></p>',
                            cursor: 'pointer',
                            userClass: '',
                            textStyle: ['', '', '18px', '', 'none'],
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'normal'],
                            rect: ['14px', '115px', '330px', '20px', 'auto', 'auto'],
                            align: 'left'
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'tax-1',
                            rect: ['0', '158', '350', '405', 'auto', 'auto'],
                            id: 'tax-1'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '350px', '150px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid2279",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tax-1}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "Information-2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '30px', '30px', 'auto', 'auto'],
                            borderRadius: ['143.2%', '143.2%', '143.2%', '143.2% 143.2%'],
                            id: 'Rectangle4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(255,255,255,1)', '900', 'none', 'normal', 'break-word', ''],
                            type: 'text',
                            align: 'center',
                            id: 'Text2',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(142, 142, 142); font-size: 23px;\">i</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['4px', '3px', '22px', '22px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '30px', '30px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "tick": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['2px', '2px', '30px', '30px', 'auto', 'auto'],
                            boxShadow: ['inset', 0, 0, 2, 0, 'rgba(0,0,0,0.35)'],
                            id: 'Rectangle2',
                            stroke: [3, 'rgba(255,255,255,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.52)']
                        },
                        {
                            rect: ['5px', '4px', '31px', '31px', 'auto', 'auto'],
                            id: 'tick2',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/tick.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '40px', '40px']
                        }
                    }
                },
                timeline: {
                    duration: 43,
                    autoPlay: true,
                    data: [
                        [
                            "eid1670",
                            "display",
                            43,
                            0,
                            "linear",
                            "${tick2}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "information-box-2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '350px', '179px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,242,229,1.00)']
                        },
                        {
                            type: 'text',
                            align: 'left',
                            textStyle: ['', '', '18px', '', 'none'],
                            rect: ['14px', '22px', '325px', '115px', 'auto', 'auto'],
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'normal'],
                            userClass: 'information-text',
                            text: '<p style=\"margin: 0px; line-height: 18px;\"><span style=\"font-weight: 500;\">TARGET AUDIENCE</span> ​define clearly with which audiences you are looking to communicate. Be as specific as possible. The more refined your audience definition, the more focussed your targeting can be. Think demographics, socio-economic data and media consumption habits.</p>',
                            id: 'Text2'
                        },
                        {
                            type: 'text',
                            id: 'Text2Copy3',
                            text: '<p style=\"margin: 0px;\">For Further information <span style=\"text-decoration: underline;\">click here</span></p><p style=\"margin:0px\">​</p>',
                            cursor: 'pointer',
                            userClass: '',
                            textStyle: ['', '', '18px', '', 'none'],
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'normal'],
                            rect: ['14px', '144px', '325px', '20px', 'auto', 'auto'],
                            align: 'left'
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['0.99429', '1.0001']],
                            display: 'none',
                            symbolName: 'tax-1',
                            rect: ['1px', '185px', null, null, 'auto', 'auto'],
                            id: 'tax-13'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '350px', '200px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid2281",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tax-13}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "information-box-3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '350px', '200px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(230,255,249,1.00)']
                        },
                        {
                            type: 'text',
                            align: 'left',
                            textStyle: ['', '', '18px', '', 'none'],
                            rect: ['13px', '13px', '328px', '20px', 'auto', 'auto'],
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'normal'],
                            userClass: 'information-text',
                            text: '<p style=\"margin: 0px; line-height: 18px;\">​<span style=\"font-weight: 500;\">ACTIVITIES</span> include:</p>',
                            id: 'Text2'
                        },
                        {
                            type: 'text',
                            align: 'left',
                            textStyle: ['', '', '18px', '', 'none'],
                            rect: ['36px', '35px', '305px', '132px', 'auto', 'auto'],
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'normal'],
                            userClass: 'information-text',
                            text: '<p style=\"margin: 0px; line-height: 18px;\">​Formative research (e.g., surveys, focus groups, pre-testing)</p><p style=\"margin: 0px; line-height: 18px;\">Planning (including SWOT analysis, PEST or PESTLE, etc.)</p><p style=\"margin: 0px; line-height: 18px;\">​Design of materials</p><p style=\"margin: 0px; line-height: 18px;\">Writing and production of communication materials, events, etc.</p><p style=\"margin: 0px;\">​</p><p style=\"margin:0px\">​</p>',
                            id: 'Text2Copy5'
                        },
                        {
                            type: 'text',
                            id: 'Text2Copy4',
                            text: '<p style=\"margin: 0px;\">For Further information <span style=\"text-decoration: underline;\">click here</span></p><p style=\"margin:0px\">​</p>',
                            cursor: 'pointer',
                            userClass: '',
                            textStyle: ['', '', '18px', '', 'none'],
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'normal'],
                            rect: ['16px', '172px', '325px', '20px', 'auto', 'auto'],
                            align: 'left'
                        },
                        {
                            rect: ['23px', '42px', '4px', '4px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(138,138,138,1.00)']
                        },
                        {
                            rect: ['23px', '79px', '4px', '4px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(138,138,138,1.00)']
                        },
                        {
                            rect: ['23px', '115px', '4px', '4px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(138,138,138,1.00)']
                        },
                        {
                            rect: ['23px', '133px', '4px', '4px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(138,138,138,1.00)']
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'tax-2',
                            rect: ['0', '207', '350', '754', 'auto', 'auto'],
                            id: 'tax-2'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '350px', '200px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid2283",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tax-2}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "information-box-4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '350px', '294px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(232,245,254,1.00)']
                        },
                        {
                            type: 'text',
                            align: 'left',
                            textStyle: ['', '', '18px', '', 'none'],
                            rect: ['16px', '12px', '323px', '22px', 'auto', 'auto'],
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'normal'],
                            userClass: 'information-text',
                            text: '<p style=\"margin: 0px; line-height: 18px;\">​<span style=\"font-weight: 500;\">OUTPUTS</span> include:&nbsp;</p>',
                            id: 'Text2'
                        },
                        {
                            type: 'text',
                            align: 'left',
                            textStyle: ['', '', '18px', '', 'none'],
                            rect: ['35px', '34px', '304px', '216px', 'auto', 'auto'],
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'normal'],
                            userClass: 'information-text',
                            text: '<p style=\"margin: 0px; line-height: 18px;\">​<span style=\"font-weight: 500;\">Advertising (paid media)</span> – what audience reach, impressions, CPM?</p><p style=\"margin: 0px; line-height: 18px;\"><span style=\"font-weight: 500;\">Publicity (earned media) </span>– what volume, how many impressions?</p><p style=\"margin: 0px; line-height: 18px;\"><span style=\"font-weight: 500;\">Web sites, blogs, partnerships or supplements </span>(owned media)</p><p style=\"margin: 0px; line-height: 18px;\"><span style=\"font-weight: 500;\">Social media sites (shared media)</span> – how many posts, videos, etc.?</p><p style=\"margin: 0px; line-height: 18px;\"><span style=\"font-weight: 500;\">Events held</span> – how many attended?</p><p style=\"margin: 0px; line-height: 18px;\"><span style=\"font-weight: 500;\">Sponsorships launched</span> – what audience reach?\n<span style=\"font-weight: 500;\">Direct mail, e-mail, or e-marketing, etc.</span> – what audience reach?</p>',
                            id: 'Text2Copy6'
                        },
                        {
                            rect: ['21px', '42px', '4px', '4px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(138,138,138,1.00)']
                        },
                        {
                            rect: ['21px', '78px', '4px', '4px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse2Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(138,138,138,1.00)']
                        },
                        {
                            rect: ['21px', '114px', '4px', '4px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse2Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(138,138,138,1.00)']
                        },
                        {
                            rect: ['21px', '150px', '4px', '4px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse2Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(138,138,138,1.00)']
                        },
                        {
                            rect: ['21px', '186px', '4px', '4px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse2Copy4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(138,138,138,1.00)']
                        },
                        {
                            rect: ['21px', '204px', '4px', '4px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse2Copy5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(138,138,138,1.00)']
                        },
                        {
                            rect: ['21px', '222px', '4px', '4px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse2Copy6',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(138,138,138,1.00)']
                        },
                        {
                            type: 'text',
                            id: 'Text2Copy7',
                            text: '<p style=\"margin: 0px;\">For Further information <span style=\"text-decoration: underline;\">click here</span></p>',
                            cursor: 'pointer',
                            userClass: '',
                            textStyle: ['', '', '18px', '', 'none'],
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'normal'],
                            rect: ['15px', '260px', '325px', '20px', 'auto', 'auto'],
                            align: 'left'
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'tax-3',
                            rect: ['0', '300', '350', '663', 'auto', 'auto'],
                            id: 'tax-3'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '350px', '200px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid2284",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tax-3}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "information-box-5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '350px', '308px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(225,244,255,1.00)']
                        },
                        {
                            type: 'text',
                            align: 'left',
                            textStyle: ['', '', '18px', '', 'none'],
                            rect: ['14px', '12px', '323px', '59px', 'auto', 'auto'],
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'normal'],
                            userClass: 'information-text',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-weight: 500;\">OUT-TAKES</span> are your target audiences’ initial responses and reactions to your communication. </p><p style=\"margin: 0px;\">​You should try to show evidence of:</p>',
                            id: 'Text2'
                        },
                        {
                            type: 'text',
                            align: 'left',
                            textStyle: ['', '', '18px', '', 'none'],
                            rect: ['37px', '71px', '300px', '205px', 'auto', 'auto'],
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'normal'],
                            userClass: 'information-text',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-weight: 500;\">Audience attention</span> – e.g., unique visitors, views, clickthroughs</p><p style=\"margin: 0px;\"><span style=\"font-weight: 500;\">Awareness</span> – e.g., recall</p><p style=\"margin: 0px;\"><span style=\"font-weight: 500;\">Understanding</span> – e.g., comments, post-campaign survey data</p><p style=\"margin: 0px;\"><span style=\"font-weight: 500;\">Interest and liking</span> – e.g., likes, follows, shares, retweets, pins, etc.</p><p style=\"margin: 0px;\"><span style=\"font-weight: 500;\">Engagement</span> – e.g., return visits, subscribing, positive comments</p><p style=\"margin: 0px;\"><span style=\"font-weight: 500;\">Consideration</span> – e.g., comments, post-campaign survey data</p>',
                            id: 'Text2Copy8'
                        },
                        {
                            rect: ['23px', '79px', '4px', '4px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(138,138,138,1.00)']
                        },
                        {
                            rect: ['23px', '116px', '4px', '4px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(138,138,138,1.00)']
                        },
                        {
                            rect: ['23px', '133px', '4px', '4px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(138,138,138,1.00)']
                        },
                        {
                            rect: ['23px', '168px', '4px', '4px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(138,138,138,1.00)']
                        },
                        {
                            rect: ['23px', '205px', '4px', '4px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(138,138,138,1.00)']
                        },
                        {
                            rect: ['23px', '241px', '4px', '4px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(138,138,138,1.00)']
                        },
                        {
                            type: 'text',
                            id: 'Text2Copy9',
                            text: '<p style=\"margin: 0px;\">For Further information <span style=\"text-decoration: underline;\">click here</span></p>',
                            cursor: 'pointer',
                            userClass: '',
                            textStyle: ['', '', '18px', '', 'none'],
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'normal'],
                            rect: ['18px', '276px', '325px', '20px', 'auto', 'auto'],
                            align: 'left'
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'tax-4',
                            rect: ['0', '315', '350', '794', 'auto', 'auto'],
                            id: 'tax-4'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '350px', '200px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid2285",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tax-4}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "information-box-6": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '350px', '290px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(232,247,255,1.00)']
                        },
                        {
                            type: 'text',
                            align: 'left',
                            textStyle: ['', '', '18px', '', 'none'],
                            rect: ['16px', '12px', '323px', '59px', 'auto', 'auto'],
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'normal'],
                            userClass: 'information-text',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: lato, sans-serif; font-weight: 500; font-style: normal; text-decoration: none; font-size: 14px; color: rgb(138, 138, 138); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">OUTCOMES</span><span style=\"font-family: lato, sans-serif; font-weight: 300; font-style: normal; text-decoration: none; font-size: 14px; color: rgb(138, 138, 138); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\"> are the effects that your communication had on your target audiences. </span></p><p style=\"margin: 0px;\"><span style=\"font-family: lato, sans-serif; font-weight: 300; font-style: normal; text-decoration: none; font-size: 14px; color: rgb(138, 138, 138); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">You should try to show evidence of:</span></p>',
                            id: 'Text2Copy12'
                        },
                        {
                            type: 'text',
                            align: 'left',
                            textStyle: ['', '', '18px', '', 'none'],
                            rect: ['39px', '71px', '300px', '187px', 'auto', 'auto'],
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'normal'],
                            userClass: 'information-text',
                            text: '<p style=\"margin: 0px; font-family: lato, sans-serif; font-weight: 300; font-style: normal; text-decoration: none; font-size: 14px; color: rgb(138, 138, 138); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 18px;\"><span style=\"font-weight: 500;\">Learning/knowledge</span> – e.g., survey or interview data, quizzes, tests</p><p style=\"margin: 0px; font-family: lato, sans-serif; font-weight: 300; font-style: normal; text-decoration: none; font-size: 14px; color: rgb(138, 138, 138); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 18px;\"><span style=\"font-weight: 500;\">Attitude change</span> – e.g., survey or interview data</p><p style=\"margin: 0px; font-family: lato, sans-serif; font-weight: 300; font-style: normal; text-decoration: none; font-size: 14px; color: rgb(138, 138, 138); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 18px;\"><span style=\"font-weight: 500;\">Trust</span> – e.g., increased trust ratings in surveys</p><p style=\"margin: 0px; font-family: lato, sans-serif; font-weight: 300; font-style: normal; text-decoration: none; font-size: 14px; color: rgb(138, 138, 138); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 18px;\"><span style=\"font-weight: 500;\">Preference</span> – e.g., stated preference in surveys, social media comments</p><p style=\"margin: 0px; font-family: lato, sans-serif; font-weight: 300; font-style: normal; text-decoration: none; font-size: 14px; color: rgb(138, 138, 138); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 18px;\"><span style=\"font-weight: 500;\">Intention</span> – e.g., inquiries, registrations, trialling, survey data</p><p style=\"margin: 0px; font-family: lato, sans-serif; font-weight: 300; font-style: normal; text-decoration: none; font-size: 14px; color: rgb(138, 138, 138); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 18px;\"><span style=\"font-weight: 500;\">Advocacy</span> – e.g., endorsements in online comments</p>',
                            id: 'Text2Copy11'
                        },
                        {
                            rect: ['25px', '79px', '4px', '4px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy11',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(138,138,138,1.00)']
                        },
                        {
                            rect: ['25px', '116px', '4px', '4px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy10',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(138,138,138,1.00)']
                        },
                        {
                            rect: ['25px', '133px', '4px', '4px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy9',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(138,138,138,1.00)']
                        },
                        {
                            rect: ['25px', '151px', '4px', '4px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy8',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(138,138,138,1.00)']
                        },
                        {
                            rect: ['25px', '187px', '4px', '4px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy7',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(138,138,138,1.00)']
                        },
                        {
                            rect: ['25px', '223px', '4px', '4px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy6',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(138,138,138,1.00)']
                        },
                        {
                            type: 'text',
                            id: 'Text2Copy10',
                            text: '<p style=\"margin: 0px;\">For Further information <span style=\"text-decoration: underline;\">click here</span></p>',
                            cursor: 'pointer',
                            userClass: '',
                            textStyle: ['', '', '18px', '', 'none'],
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'normal'],
                            rect: ['16px', '260px', '325px', '20px', 'auto', 'auto'],
                            align: 'left'
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'tax-5',
                            rect: ['0', '295', '350', '832', 'auto', 'auto'],
                            id: 'tax-5'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '350px', '200px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid2286",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tax-5}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "information-box-7": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '350px', '311px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(251,241,255,1.00)']
                        },
                        {
                            type: 'text',
                            align: 'left',
                            textStyle: ['', '', '18px', '', 'none'],
                            rect: ['16px', '12px', '323px', '59px', 'auto', 'auto'],
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'normal'],
                            userClass: 'information-text',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-weight: 500;\">IMPACT</span> is the flow-on results of your communication related to your objectives. </p><p style=\"margin: 0px;\">Impact can include:\n<span style=\"font-family: lato, sans-serif; font-weight: 300; font-style: normal; text-decoration: none; font-size: 14px; color: rgb(138, 138, 138); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\"></span></p><p style=\"margin: 0px;\"><span style=\"font-family: lato, sans-serif; font-weight: 300; font-style: normal; text-decoration: none; font-size: 14px; color: rgb(138, 138, 138); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\"></span></p>',
                            id: 'Text2Copy16'
                        },
                        {
                            type: 'text',
                            align: 'left',
                            textStyle: ['', '', '18px', '', 'none'],
                            rect: ['39px', '71px', '300px', '201px', 'auto', 'auto'],
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'normal'],
                            userClass: 'information-text',
                            text: '<p style=\"margin: 0px;\"><span style=\"font-weight: 500;\">Reputation</span> improvement</p><p style=\"margin: 0px;\"><span style=\"font-weight: 500;\">Relationships</span> established or improved\n<span style=\"font-weight: 500;\">Compliance / complying action</span> – e.g., sales, donations, meeting membership targets, increased staff or customer retention, reduced  smoking, improved health outcomes, etc.\n<span style=\"font-weight: 500;\">Organizational change </span>– e.g., insights to inform future strategy, realignment of policies to stakeholders</p><p style=\"margin: 0px;\"><span style=\"font-weight: 500;\">Social change</span> – e.g., improved health and well-being, increased access to information, etc.&nbsp;\n​</p>',
                            id: 'Text2Copy15'
                        },
                        {
                            rect: ['25px', '79px', '4px', '4px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy17',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(138,138,138,1.00)']
                        },
                        {
                            rect: ['25px', '116px', '4px', '4px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy16',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(138,138,138,1.00)']
                        },
                        {
                            rect: ['25px', '97px', '4px', '4px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy15',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(138,138,138,1.00)']
                        },
                        {
                            rect: ['25px', '187px', '4px', '4px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy13',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(138,138,138,1.00)']
                        },
                        {
                            rect: ['25px', '241px', '4px', '4px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy12',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(138,138,138,1.00)']
                        },
                        {
                            type: 'text',
                            id: 'Text2Copy14',
                            text: '<p style=\"margin: 0px;\">For Further information <span style=\"text-decoration: underline;\">click here</span></p>',
                            cursor: 'pointer',
                            userClass: '',
                            textStyle: ['', '', '18px', '', 'none'],
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'normal'],
                            rect: ['16px', '281px', '325px', '20px', 'auto', 'auto'],
                            align: 'left'
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'tax-6',
                            rect: ['0', '318', '350', '721', 'auto', 'auto'],
                            id: 'tax-6'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '350px', '200px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid2287",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tax-6}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "information-box-1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '350px', '242px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle2',
                            opacity: '1',
                            type: 'rect',
                            fill: ['rgba(234,234,234,1.00)']
                        },
                        {
                            type: 'text',
                            align: 'left',
                            textStyle: ['', '', '18px', '', 'none'],
                            rect: ['12px', '16px', '330px', '184px', 'auto', 'auto'],
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'normal'],
                            userClass: 'information-text',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-weight: 500;\">COMMUNICATION OBJECTIVES</span> are the specific objectives that your communication program, campaign, or project is designed to achieve. Your communication objectives must support one or more organizational objectives; identify which one/s.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​Make sure your communications are SMART – Specific, Measurable,  Achievable, Relevant and Time bound. Clearly define them and set targets for what you are looking to achieve\n</p>',
                            id: 'Text2'
                        },
                        {
                            type: 'text',
                            id: 'Text2Copy2',
                            text: '<p style=\"margin: 0px;\">For Further information <span style=\"text-decoration: underline;\">click here</span></p><p style=\"margin:0px\">​</p>',
                            cursor: 'pointer',
                            userClass: '',
                            textStyle: ['', '', '18px', '', 'none'],
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'normal'],
                            rect: ['12px', '209px', '330px', '20px', 'auto', 'auto'],
                            align: 'left'
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'tax-1',
                            rect: ['0px', '248px', null, null, 'auto', 'auto'],
                            id: 'tax-12'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '350px', '150px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid2280",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tax-12}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "q3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['-359px', '0px', '710px', '783px', 'auto', 'auto'],
                            boxShadow: ['', 0, 0, 50, 10, 'rgba(0,0,0,0.21)'],
                            type: 'rect',
                            id: 'Question1-box',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'block',
                            fill: ['rgba(0,156,118,1.00)']
                        },
                        {
                            rect: ['-359px', '778px', '710px', '5px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Question1-boxCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'block',
                            fill: ['rgba(0,126,95,1.00)']
                        },
                        {
                            rect: ['-310px', '85px', '137px', '30px', 'auto', 'auto'],
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.19)']
                        },
                        {
                            rect: ['-310px', '126px', '137px', '640px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.58)']
                        },
                        {
                            rect: ['-310px', '161px', '137px', '1px', 'auto', 'auto'],
                            id: 'Rectangle2Copy4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,195,148,1.00)']
                        },
                        {
                            rect: ['-310px', '202px', '137px', '1px', 'auto', 'auto'],
                            id: 'Rectangle2Copy5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,195,148,1.00)']
                        },
                        {
                            rect: ['-310px', '242px', '137px', '1px', 'auto', 'auto'],
                            id: 'Rectangle2Copy6',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,195,148,1.00)']
                        },
                        {
                            rect: ['-310px', '282px', '137px', '1px', 'auto', 'auto'],
                            id: 'Rectangle2Copy7',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,195,148,1.00)']
                        },
                        {
                            rect: ['-310px', '322px', '137px', '1px', 'auto', 'auto'],
                            id: 'Rectangle2Copy8',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,195,148,1.00)']
                        },
                        {
                            rect: ['-310px', '362px', '137px', '1px', 'auto', 'auto'],
                            id: 'Rectangle2Copy9',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,195,148,1.00)']
                        },
                        {
                            rect: ['-310px', '402px', '137px', '1px', 'auto', 'auto'],
                            id: 'Rectangle2Copy10',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,195,148,1.00)']
                        },
                        {
                            rect: ['-310px', '442px', '137px', '1px', 'auto', 'auto'],
                            id: 'Rectangle2Copy11',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,195,148,1.00)']
                        },
                        {
                            rect: ['-310px', '482px', '137px', '1px', 'auto', 'auto'],
                            id: 'Rectangle2Copy12',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,195,148,1.00)']
                        },
                        {
                            rect: ['-310px', '522px', '137px', '1px', 'auto', 'auto'],
                            id: 'Rectangle2Copy13',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,195,148,1.00)']
                        },
                        {
                            rect: ['-310px', '562px', '137px', '1px', 'auto', 'auto'],
                            id: 'Rectangle2Copy14',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,195,148,1.00)']
                        },
                        {
                            rect: ['-310px', '602px', '137px', '1px', 'auto', 'auto'],
                            id: 'Rectangle2Copy15',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,195,148,1.00)']
                        },
                        {
                            rect: ['-310px', '642px', '137px', '1px', 'auto', 'auto'],
                            id: 'Rectangle2Copy16',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,195,148,1.00)']
                        },
                        {
                            rect: ['-310px', '682px', '137px', '1px', 'auto', 'auto'],
                            id: 'Rectangle2Copy17',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,195,148,1.00)']
                        },
                        {
                            rect: ['-310px', '722px', '137px', '1px', 'auto', 'auto'],
                            id: 'Rectangle2Copy18',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,195,148,1.00)']
                        },
                        {
                            rect: ['-277px', '85px', '1px', '681px', 'auto', 'auto'],
                            id: 'Rectangle2Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,195,148,1.00)']
                        },
                        {
                            rect: ['-243px', '85px', '1px', '681px', 'auto', 'auto'],
                            id: 'Rectangle2Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,195,148,1.00)']
                        },
                        {
                            rect: ['-208px', '85px', '1px', '681px', 'auto', 'auto'],
                            id: 'Rectangle2Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,195,148,1.00)']
                        },
                        {
                            rect: ['-335px', '50px', '492px', '35px', 'auto', 'auto'],
                            font: ['lato, sans-serif', [15, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            id: 'Question1',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 18px; color: rgb(255, 255, 255);\">List all the key activities that you will or did undertake.</span></p><p style=\"margin: 0px;\">\n</p>',
                            display: 'block',
                            type: 'text'
                        },
                        {
                            rect: ['-299px', '88px', '126px', '20px', 'auto', 'auto'],
                            font: ['lato, sans-serif', [15, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            id: 'Question1Copy',
                            text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255); font-size: 18px;\">P &nbsp; &nbsp; E &nbsp; &nbsp; S &nbsp; &nbsp;O</span></p><p style=\"margin: 0px;\">\n</p>',
                            display: 'block',
                            type: 'text'
                        },
                        {
                            rect: ['-147px', '90px', '445px', '20px', 'auto', 'auto'],
                            font: ['lato, sans-serif', [15, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            id: 'Question1Copy2',
                            text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255); font-weight: 300;\">P=Paid &nbsp; &nbsp; E=Earned &nbsp; &nbsp; S=Shared &nbsp; &nbsp;O=Owned</span></p><p style=\"margin: 0px;\">\n</p>',
                            display: 'block',
                            type: 'text'
                        },
                        {
                            rect: ['-162px', '126px', '487px', '30px', 'auto', 'auto'],
                            userClass: 'textbox3',
                            type: 'rect',
                            id: 'textbox3',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            display: 'block',
                            fill: ['rgba(255,255,255,0.35)']
                        },
                        {
                            rect: ['-162px', '166px', '487px', '30px', 'auto', 'auto'],
                            userClass: 'textbox3-2',
                            type: 'rect',
                            id: 'textbox3-2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            display: 'block',
                            fill: ['rgba(255,255,255,0.35)']
                        },
                        {
                            rect: ['-162px', '206px', '487px', '30px', 'auto', 'auto'],
                            userClass: 'textbox3-3',
                            type: 'rect',
                            id: 'textbox3-3',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            display: 'block',
                            fill: ['rgba(255,255,255,0.35)']
                        },
                        {
                            rect: ['-162px', '246px', '487px', '30px', 'auto', 'auto'],
                            userClass: 'textbox3-4',
                            type: 'rect',
                            id: 'textbox3-4',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            display: 'block',
                            fill: ['rgba(255,255,255,0.35)']
                        },
                        {
                            rect: ['-162px', '286px', '487px', '30px', 'auto', 'auto'],
                            userClass: 'textbox3-5',
                            type: 'rect',
                            id: 'textbox3-5',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            display: 'block',
                            fill: ['rgba(255,255,255,0.35)']
                        },
                        {
                            rect: ['-162px', '327px', '487px', '30px', 'auto', 'auto'],
                            userClass: 'textbox3-6',
                            type: 'rect',
                            id: 'textbox3-6',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            display: 'block',
                            fill: ['rgba(255,255,255,0.35)']
                        },
                        {
                            rect: ['-162px', '367px', '487px', '30px', 'auto', 'auto'],
                            userClass: 'textbox3-7',
                            type: 'rect',
                            id: 'textbox3-7',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            display: 'block',
                            fill: ['rgba(255,255,255,0.35)']
                        },
                        {
                            rect: ['-162px', '407px', '487px', '30px', 'auto', 'auto'],
                            userClass: 'textbox3-8',
                            type: 'rect',
                            id: 'textbox3-8',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            display: 'block',
                            fill: ['rgba(255,255,255,0.35)']
                        },
                        {
                            rect: ['-162px', '447px', '487px', '30px', 'auto', 'auto'],
                            userClass: 'textbox3-9',
                            type: 'rect',
                            id: 'textbox3-9',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            display: 'block',
                            fill: ['rgba(255,255,255,0.35)']
                        },
                        {
                            rect: ['-162px', '487px', '487px', '30px', 'auto', 'auto'],
                            userClass: 'textbox3-10',
                            type: 'rect',
                            id: 'textbox3-10',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            display: 'block',
                            fill: ['rgba(255,255,255,0.35)']
                        },
                        {
                            rect: ['-162px', '527px', '487px', '30px', 'auto', 'auto'],
                            userClass: 'textbox3-11',
                            type: 'rect',
                            id: 'textbox3-11',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            display: 'block',
                            fill: ['rgba(255,255,255,0.35)']
                        },
                        {
                            rect: ['-162px', '568px', '487px', '30px', 'auto', 'auto'],
                            userClass: 'textbox3-12',
                            type: 'rect',
                            id: 'textbox3-12',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            display: 'block',
                            fill: ['rgba(255,255,255,0.35)']
                        },
                        {
                            rect: ['-162px', '609px', '487px', '30px', 'auto', 'auto'],
                            userClass: 'textbox3-13',
                            type: 'rect',
                            id: 'textbox3-13',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            display: 'block',
                            fill: ['rgba(255,255,255,0.35)']
                        },
                        {
                            rect: ['-162px', '650px', '487px', '30px', 'auto', 'auto'],
                            userClass: 'textbox3-14',
                            type: 'rect',
                            id: 'textbox3-14',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            display: 'block',
                            fill: ['rgba(255,255,255,0.35)']
                        },
                        {
                            rect: ['-162px', '690px', '487px', '30px', 'auto', 'auto'],
                            userClass: 'textbox3-15',
                            type: 'rect',
                            id: 'textbox3-15',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            display: 'block',
                            fill: ['rgba(255,255,255,0.35)']
                        },
                        {
                            rect: ['-162px', '730px', '487px', '30px', 'auto', 'auto'],
                            userClass: 'textbox3-16',
                            type: 'rect',
                            id: 'textbox3-16',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            display: 'block',
                            fill: ['rgba(255,255,255,0.35)']
                        },
                        {
                            rect: ['0px', '0', '350px', '40', 'auto', 'auto'],
                            id: 'Group4',
                            cursor: 'pointer',
                            type: 'group',
                            c: [
                            {
                                rect: ['-359px', '0px', '709px', '40px', 'auto', 'auto'],
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                id: 'Question1-boxCopy6',
                                opacity: '1',
                                type: 'rect',
                                fill: ['rgba(0,195,148,1.00)']
                            },
                            {
                                type: 'group',
                                id: 'GroupCopy5',
                                rect: ['308', '11', '30', '18', 'auto', 'auto'],
                                c: [
                                {
                                    rect: ['12px', '7px', '21px', '3px', 'auto', 'auto'],
                                    transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                    id: 'Arrow2Copy3',
                                    stroke: [0, 'rgb(255, 255, 255)', 'solid'],
                                    type: 'rect',
                                    fill: ['rgba(255,255,255,1.00)']
                                },
                                {
                                    rect: ['-2px', '7px', '21px', '3px', 'auto', 'auto'],
                                    transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                                    id: 'Arrow1Copy3',
                                    stroke: [0, 'rgb(255, 255, 255)', 'solid'],
                                    type: 'rect',
                                    fill: ['rgba(255,255,255,1.00)']
                                }]
                            },
                            {
                                rect: ['-332px', '0px', '292px', '40px', 'auto', 'auto'],
                                font: ['lato, sans-serif', [15, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                id: 'Question1Copy6',
                                opacity: '1',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-weight: 300; color: rgb(255, 255, 255); font-size: 25px;\">Activity</span><span style=\"font-weight: 300; color: rgb(255, 255, 255);\"></span></p><p style=\"margin: 0px;\"><span style=\"font-size: 25px;\">\n</span></p>',
                                type: 'text'
                            }]
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['0.78242', '0.78242']],
                            id: 'Information-2Copy2',
                            symbolName: 'Information-2',
                            cursor: 'pointer',
                            rect: ['306px', '50px', '34px', '30px', 'auto', 'auto']
                        },
                        {
                            rect: ['-336px', '447px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'nowrap'],
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text2Copy9',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">9.</span></p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['-336px', '487px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'nowrap'],
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text2Copy8',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">10.</span></p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['-336px', '568px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'nowrap'],
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text2Copy7',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">12.</span></p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['-336px', '527px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'nowrap'],
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text2Copy5',
                            text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255);\">11.</span></p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['-334px', '126px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'nowrap'],
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text2Copy13',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">1.</span></p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['-334px', '166px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'nowrap'],
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text2Copy12',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">2.</span></p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['-334px', '247px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'nowrap'],
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text2Copy11',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">4.</span></p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['-334px', '206px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'nowrap'],
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text2Copy10',
                            text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255);\">3.</span></p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['-336px', '611px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'nowrap'],
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text2Copy21',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">13.</span></p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['-336px', '651px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'nowrap'],
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text2Copy20',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">14.</span></p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['-336px', '732px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'nowrap'],
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text2Copy19',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">16.</span></p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['-336px', '691px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'nowrap'],
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text2Copy18',
                            text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255);\">15.</span></p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['-334px', '288px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'nowrap'],
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text2Copy17',
                            text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255);\">5.</span></p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['-334px', '328px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'nowrap'],
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text2Copy16',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">6.</span></p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['-334px', '409px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'nowrap'],
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text2Copy15',
                            text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255);\">8.</span></p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['-334px', '368px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'nowrap'],
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text2Copy14',
                            text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255);\">7.</span></p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['-304px', '134px', '142px', '30px', 'auto', 'auto'],
                            borderRadius: ['0px', '0px', '0px', '0px 0px'],
                            userClass: '',
                            id: 'peso-1',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['-304px', '174px', '142px', '30px', 'auto', 'auto'],
                            borderRadius: ['0px', '0px', '0px', '0px 0px'],
                            userClass: '',
                            id: 'peso-2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['-304px', '214px', '142px', '30px', 'auto', 'auto'],
                            borderRadius: ['0px', '0px', '0px', '0px 0px'],
                            userClass: '',
                            id: 'peso-3',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['-304px', '254px', '142px', '30px', 'auto', 'auto'],
                            borderRadius: ['0px', '0px', '0px', '0px 0px'],
                            userClass: '',
                            id: 'peso-4',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['-304px', '295px', '142px', '30px', 'auto', 'auto'],
                            borderRadius: ['0px', '0px', '0px', '0px 0px'],
                            userClass: '',
                            id: 'peso-5',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['-304px', '335px', '142px', '30px', 'auto', 'auto'],
                            borderRadius: ['0px', '0px', '0px', '0px 0px'],
                            userClass: '',
                            id: 'peso-6',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['-304px', '375px', '142px', '30px', 'auto', 'auto'],
                            borderRadius: ['0px', '0px', '0px', '0px 0px'],
                            userClass: '',
                            id: 'peso-7',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['-304px', '415px', '142px', '30px', 'auto', 'auto'],
                            borderRadius: ['0px', '0px', '0px', '0px 0px'],
                            userClass: '',
                            id: 'peso-8',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['-304px', '455px', '142px', '30px', 'auto', 'auto'],
                            borderRadius: ['0px', '0px', '0px', '0px 0px'],
                            userClass: '',
                            id: 'peso-9',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['-304px', '495px', '142px', '30px', 'auto', 'auto'],
                            borderRadius: ['0px', '0px', '0px', '0px 0px'],
                            userClass: '',
                            id: 'peso-10',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['-304px', '535px', '142px', '30px', 'auto', 'auto'],
                            borderRadius: ['0px', '0px', '0px', '0px 0px'],
                            userClass: '',
                            id: 'peso-11',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['-304px', '576px', '142px', '30px', 'auto', 'auto'],
                            borderRadius: ['0px', '0px', '0px', '0px 0px'],
                            userClass: '',
                            id: 'peso-12',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['-304px', '618px', '142px', '30px', 'auto', 'auto'],
                            borderRadius: ['0px', '0px', '0px', '0px 0px'],
                            userClass: '',
                            id: 'peso-13',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['-304px', '658px', '142px', '30px', 'auto', 'auto'],
                            borderRadius: ['0px', '0px', '0px', '0px 0px'],
                            userClass: '',
                            id: 'peso-14',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['-304px', '698px', '142px', '30px', 'auto', 'auto'],
                            borderRadius: ['0px', '0px', '0px', '0px 0px'],
                            userClass: '',
                            id: 'peso-15',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['-304px', '738px', '142px', '30px', 'auto', 'auto'],
                            borderRadius: ['0px', '0px', '0px', '0px 0px'],
                            userClass: '',
                            id: 'peso-16',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '350px', '355px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: false,
                    data: [
                        [
                            "eid1280",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Information-2Copy2}",
                            '50px',
                            '50px'
                        ],
                        [
                            "eid2011",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox3-13}",
                            '609px',
                            '609px'
                        ],
                        [
                            "eid701",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Question1}",
                            '492px',
                            '492px'
                        ],
                        [
                            "eid722",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Question1}",
                            '-335px',
                            '-335px'
                        ],
                        [
                            "eid1973",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox3-6}",
                            '327px',
                            '327px'
                        ],
                        [
                            "eid23",
                            "display",
                            250,
                            0,
                            "linear",
                            "${Question1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1764",
                            "display",
                            0,
                            0,
                            "linear",
                            "${textbox3-13}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1315",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox3-13}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1234",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox3-9}",
                            'rgba(255,255,255,0.35)',
                            'rgba(255,255,255,0.35)'
                        ],
                        [
                            "eid1937",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox3-7}",
                            '487px',
                            '487px'
                        ],
                        [
                            "eid1766",
                            "display",
                            0,
                            0,
                            "linear",
                            "${textbox3-15}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1327",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox3-15}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1760",
                            "display",
                            0,
                            0,
                            "linear",
                            "${textbox3-9}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1235",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox3-9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1757",
                            "display",
                            0,
                            0,
                            "linear",
                            "${textbox3-6}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1218",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox3-6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1767",
                            "display",
                            0,
                            0,
                            "linear",
                            "${textbox3-16}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1334",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox3-16}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1759",
                            "display",
                            0,
                            0,
                            "linear",
                            "${textbox3-8}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1230",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox3-8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1946",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox3-14}",
                            '-162px',
                            '-162px'
                        ],
                        [
                            "eid1954",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox3-4}",
                            '-162px',
                            '-162px'
                        ],
                        [
                            "eid1281",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Information-2Copy2}",
                            '306px',
                            '306px'
                        ],
                        [
                            "eid1332",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox3-16}",
                            'rgba(255,255,255,0.35)',
                            'rgba(255,255,255,0.35)'
                        ],
                        [
                            "eid427",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Question1}",
                            '50px',
                            '50px'
                        ],
                        [
                            "eid1943",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox3-16}",
                            '487px',
                            '487px'
                        ],
                        [
                            "eid1956",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox3-9}",
                            '-162px',
                            '-162px'
                        ],
                        [
                            "eid1077",
                            "boxShadow.offsetV",
                            0,
                            0,
                            "linear",
                            "${Question1-box}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1980",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox3-8}",
                            '407px',
                            '407px'
                        ],
                        [
                            "eid1985",
                            "display",
                            250,
                            0,
                            "linear",
                            "${Question1Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1955",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox3-4}",
                            '487px',
                            '487px'
                        ],
                        [
                            "eid2003",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Question1Copy}",
                            '88px',
                            '88px'
                        ],
                        [
                            "eid1203",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox3}",
                            'rgba(255,255,255,0.35)',
                            'rgba(255,255,255,0.35)'
                        ],
                        [
                            "eid1223",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox3-7}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid2001",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Question1Copy}",
                            '-299px',
                            '-299px'
                        ],
                        [
                            "eid1941",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox3-15}",
                            '487px',
                            '487px'
                        ],
                        [
                            "eid1317",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox3-13}",
                            'rgba(255,255,255,0.35)',
                            'rgba(255,255,255,0.35)'
                        ],
                        [
                            "eid1205",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox3-4}",
                            'rgba(255,255,255,0.35)',
                            'rgba(255,255,255,0.35)'
                        ],
                        [
                            "eid1243",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox3-10}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid1231",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox3-8}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid1765",
                            "display",
                            0,
                            0,
                            "linear",
                            "${textbox3-14}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1321",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox3-14}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1995",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Question1Copy}",
                            '20px',
                            '20px'
                        ],
                        [
                            "eid1961",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox3-11}",
                            '487px',
                            '487px'
                        ],
                        [
                            "eid1756",
                            "display",
                            0,
                            0,
                            "linear",
                            "${textbox3-5}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1211",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox3-5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1078",
                            "boxShadow.blur",
                            0,
                            0,
                            "linear",
                            "${Question1-box}",
                            '50px',
                            '50px'
                        ],
                        [
                            "eid1944",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox3}",
                            '-162px',
                            '-162px'
                        ],
                        [
                            "eid1940",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox3-15}",
                            '-162px',
                            '-162px'
                        ],
                        [
                            "eid1816",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Question1}",
                            '35px',
                            '35px'
                        ],
                        [
                            "eid1240",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox3-10}",
                            'rgba(255,255,255,0.35)',
                            'rgba(255,255,255,0.35)'
                        ],
                        [
                            "eid420",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Question1-box}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1958",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox3-12}",
                            '-162px',
                            '-162px'
                        ],
                        [
                            "eid1976",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox3-11}",
                            '527px',
                            '527px'
                        ],
                        [
                            "eid1328",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox3-15}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid1213",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox3-5}",
                            'rgba(255,255,255,0.35)',
                            'rgba(255,255,255,0.35)'
                        ],
                        [
                            "eid1255",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox3-12}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid1942",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox3-16}",
                            '-162px',
                            '-162px'
                        ],
                        [
                            "eid1762",
                            "display",
                            0,
                            0,
                            "linear",
                            "${textbox3-11}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1247",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox3-11}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1952",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox3-10}",
                            '-162px',
                            '-162px'
                        ],
                        [
                            "eid2005",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Question1Copy2}",
                            '20px',
                            '20px'
                        ],
                        [
                            "eid1252",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox3-12}",
                            'rgba(255,255,255,0.35)',
                            'rgba(255,255,255,0.35)'
                        ],
                        [
                            "eid1246",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox3-11}",
                            'rgba(255,255,255,0.35)',
                            'rgba(255,255,255,0.35)'
                        ],
                        [
                            "eid1949",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox3-3}",
                            '487px',
                            '487px'
                        ],
                        [
                            "eid2010",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Question1Copy2}",
                            '445px',
                            '445px'
                        ],
                        [
                            "eid1322",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox3-14}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid1948",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox3-3}",
                            '-162px',
                            '-162px'
                        ],
                        [
                            "eid2009",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Question1Copy2}",
                            '-147px',
                            '-147px'
                        ],
                        [
                            "eid1968",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox3}",
                            '126px',
                            '126px'
                        ],
                        [
                            "eid1971",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox3-4}",
                            '246px',
                            '246px'
                        ],
                        [
                            "eid1206",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox3-4}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid1972",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox3-3}",
                            '206px',
                            '206px'
                        ],
                        [
                            "eid1962",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox3-8}",
                            '-162px',
                            '-162px'
                        ],
                        [
                            "eid1197",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox3-3}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid1950",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox3-13}",
                            '-162px',
                            '-162px'
                        ],
                        [
                            "eid1754",
                            "display",
                            0,
                            0,
                            "linear",
                            "${textbox3-3}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1198",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox3-3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2013",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Question1Copy2}",
                            '90px',
                            '90px'
                        ],
                        [
                            "eid1229",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox3-8}",
                            'rgba(255,255,255,0.35)',
                            'rgba(255,255,255,0.35)'
                        ],
                        [
                            "eid2002",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Question1Copy}",
                            '126px',
                            '126px'
                        ],
                        [
                            "eid1212",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox3-5}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid1326",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox3-15}",
                            'rgba(255,255,255,0.35)',
                            'rgba(255,255,255,0.35)'
                        ],
                        [
                            "eid699",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${Question1-box}",
                            'rgba(0,156,118,1.00)',
                            'rgba(0,156,118,1.00)'
                        ],
                        [
                            "eid1763",
                            "display",
                            0,
                            0,
                            "linear",
                            "${textbox3-12}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1254",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox3-12}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1982",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox3-14}",
                            '650px',
                            '650px'
                        ],
                        [
                            "eid1936",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox3-7}",
                            '-162px',
                            '-162px'
                        ],
                        [
                            "eid1938",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox3-5}",
                            '-162px',
                            '-162px'
                        ],
                        [
                            "eid1945",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox3}",
                            '487px',
                            '487px'
                        ],
                        [
                            "eid1758",
                            "display",
                            0,
                            0,
                            "linear",
                            "${textbox3-7}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1224",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox3-7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1969",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox3-15}",
                            '690px',
                            '690px'
                        ],
                        [
                            "eid1752",
                            "display",
                            0,
                            0,
                            "linear",
                            "${textbox3}",
                            'block',
                            'block'
                        ],
                        [
                            "eid376",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1966",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox3-6}",
                            '-162px',
                            '-162px'
                        ],
                        [
                            "eid2012",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox3-5}",
                            '286px',
                            '286px'
                        ],
                        [
                            "eid1316",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox3-13}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid424",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox3}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid1320",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox3-14}",
                            'rgba(255,255,255,0.35)',
                            'rgba(255,255,255,0.35)'
                        ],
                        [
                            "eid1927",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Question1-box}",
                            '710px',
                            '710px'
                        ],
                        [
                            "eid1960",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox3-11}",
                            '-162px',
                            '-162px'
                        ],
                        [
                            "eid1201",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox3-2}",
                            'rgba(255,255,255,0.35)',
                            'rgba(255,255,255,0.35)'
                        ],
                        [
                            "eid1939",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox3-5}",
                            '487px',
                            '487px'
                        ],
                        [
                            "eid1959",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox3-12}",
                            '487px',
                            '487px'
                        ],
                        [
                            "eid1236",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox3-9}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid2006",
                            "display",
                            250,
                            0,
                            "linear",
                            "${Question1Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1964",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox3-2}",
                            '-162px',
                            '-162px'
                        ],
                        [
                            "eid1248",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox3-11}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid1219",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox3-6}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid1217",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox3-6}",
                            'rgba(255,255,255,0.35)',
                            'rgba(255,255,255,0.35)'
                        ],
                        [
                            "eid377",
                            "display",
                            250,
                            0,
                            "linear",
                            "${Question1-box}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1928",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Question1-box}",
                            '-359px',
                            '-359px'
                        ],
                        [
                            "eid1974",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox3-10}",
                            '487px',
                            '487px'
                        ],
                        [
                            "eid1867",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Question1-box}",
                            '783px',
                            '783px'
                        ],
                        [
                            "eid1963",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox3-8}",
                            '487px',
                            '487px'
                        ],
                        [
                            "eid1193",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox3-2}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid1957",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox3-9}",
                            '487px',
                            '487px'
                        ],
                        [
                            "eid1970",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox3-9}",
                            '447px',
                            '447px'
                        ],
                        [
                            "eid1975",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox3-2}",
                            '166px',
                            '166px'
                        ],
                        [
                            "eid1222",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox3-7}",
                            'rgba(255,255,255,0.35)',
                            'rgba(255,255,255,0.35)'
                        ],
                        [
                            "eid1979",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox3-12}",
                            '568px',
                            '568px'
                        ],
                        [
                            "eid1079",
                            "boxShadow.spread",
                            0,
                            0,
                            "linear",
                            "${Question1-box}",
                            '10px',
                            '10px'
                        ],
                        [
                            "eid1947",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox3-14}",
                            '487px',
                            '487px'
                        ],
                        [
                            "eid1978",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox3-7}",
                            '367px',
                            '367px'
                        ],
                        [
                            "eid1967",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox3-6}",
                            '487px',
                            '487px'
                        ],
                        [
                            "eid1965",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox3-2}",
                            '487px',
                            '487px'
                        ],
                        [
                            "eid1983",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox3-16}",
                            '730px',
                            '730px'
                        ],
                        [
                            "eid1753",
                            "display",
                            0,
                            0,
                            "linear",
                            "${textbox3-2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1192",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox3-2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1080",
                            "boxShadow.color",
                            0,
                            0,
                            "linear",
                            "${Question1-box}",
                            'rgba(0,0,0,0.21)',
                            'rgba(0,0,0,0.21)'
                        ],
                        [
                            "eid1951",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox3-13}",
                            '487px',
                            '487px'
                        ],
                        [
                            "eid1953",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox3-10}",
                            '487px',
                            '487px'
                        ],
                        [
                            "eid1202",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox3-3}",
                            'rgba(255,255,255,0.35)',
                            'rgba(255,255,255,0.35)'
                        ],
                        [
                            "eid1335",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox3-16}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid1076",
                            "boxShadow.offsetH",
                            0,
                            0,
                            "linear",
                            "${Question1-box}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1755",
                            "display",
                            0,
                            0,
                            "linear",
                            "${textbox3-4}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1207",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox3-4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1761",
                            "display",
                            0,
                            0,
                            "linear",
                            "${textbox3-10}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1242",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox3-10}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "Information-2_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '30px', '30px', 'auto', 'auto'],
                            borderRadius: ['143.2%', '143.2%', '143.2%', '143.2% 143.2%'],
                            id: 'Rectangle4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(255,255,255,1)', '900', 'none', 'normal', 'break-word', ''],
                            type: 'text',
                            align: 'center',
                            id: 'Text2',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(142, 142, 142); font-size: 23px;\">i</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['4px', '3px', '22px', '22px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '30px', '30px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "q4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['-359px', '0px', '710px', '804px', 'auto', 'auto'],
                            fill: ['rgba(0,117,208,1.00)'],
                            display: 'block',
                            id: 'Question1-box',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            boxShadow: ['', 0, 0, 50, 10, 'rgba(0,0,0,0.21)']
                        },
                        {
                            type: 'rect',
                            rect: ['-359px', '799px', '710px', '5px', 'auto', 'auto'],
                            id: 'Question1-boxCopy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'block',
                            fill: ['rgba(0,91,163,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['-310px', '105px', '137px', '30px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,0.19)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['-310px', '146px', '137px', '640px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,0.58)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2Copy4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['-310px', '181px', '137px', '1px', 'auto', 'auto'],
                            fill: ['rgba(0,144,255,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2Copy5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['-310px', '222px', '137px', '1px', 'auto', 'auto'],
                            fill: ['rgba(0,144,255,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2Copy6',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['-310px', '262px', '137px', '1px', 'auto', 'auto'],
                            fill: ['rgba(0,144,255,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2Copy7',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['-310px', '302px', '137px', '1px', 'auto', 'auto'],
                            fill: ['rgba(0,144,255,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2Copy8',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['-310px', '342px', '137px', '1px', 'auto', 'auto'],
                            fill: ['rgba(0,144,255,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2Copy9',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['-310px', '382px', '137px', '1px', 'auto', 'auto'],
                            fill: ['rgba(0,144,255,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2Copy10',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['-310px', '422px', '137px', '1px', 'auto', 'auto'],
                            fill: ['rgba(0,144,255,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2Copy11',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['-310px', '462px', '137px', '1px', 'auto', 'auto'],
                            fill: ['rgba(0,144,255,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2Copy12',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['-310px', '502px', '137px', '1px', 'auto', 'auto'],
                            fill: ['rgba(0,144,255,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2Copy13',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['-310px', '542px', '137px', '1px', 'auto', 'auto'],
                            fill: ['rgba(0,144,255,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2Copy14',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['-310px', '582px', '137px', '1px', 'auto', 'auto'],
                            fill: ['rgba(0,144,255,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2Copy15',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['-310px', '622px', '137px', '1px', 'auto', 'auto'],
                            fill: ['rgba(0,144,255,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2Copy16',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['-310px', '662px', '137px', '1px', 'auto', 'auto'],
                            fill: ['rgba(0,144,255,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2Copy17',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['-310px', '702px', '137px', '1px', 'auto', 'auto'],
                            fill: ['rgba(0,144,255,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2Copy18',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['-310px', '742px', '137px', '1px', 'auto', 'auto'],
                            fill: ['rgba(0,144,255,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['-277px', '105px', '1px', '681px', 'auto', 'auto'],
                            fill: ['rgba(0,144,255,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['-243px', '105px', '1px', '681px', 'auto', 'auto'],
                            fill: ['rgba(0,144,255,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['-208px', '105px', '1px', '681px', 'auto', 'auto'],
                            fill: ['rgba(0,144,255,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['-299px', '108px', '126px', '20px', 'auto', 'auto'],
                            id: 'Question1Copy',
                            text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255); font-size: 18px;\">P &nbsp; &nbsp; E &nbsp; &nbsp; S &nbsp; &nbsp;O</span></p><p style=\"margin: 0px;\">\n</p>',
                            display: 'block',
                            font: ['lato, sans-serif', [15, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['-147px', '110px', '445px', '20px', 'auto', 'auto'],
                            id: 'Question1Copy2',
                            text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255); font-weight: 300;\">P=Paid &nbsp; &nbsp; E=Earned &nbsp; &nbsp; S=Shared &nbsp; &nbsp;O=Owned</span></p><p style=\"margin: 0px;\">\n</p>',
                            display: 'block',
                            font: ['lato, sans-serif', [15, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal']
                        },
                        {
                            userClass: 'textbox4-1',
                            rect: ['-162px', '146px', '487px', '30px', 'auto', 'auto'],
                            display: 'block',
                            id: 'textbox4-1',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.35)']
                        },
                        {
                            userClass: 'textbox4-2',
                            rect: ['-162px', '186px', '487px', '30px', 'auto', 'auto'],
                            display: 'block',
                            id: 'textbox4-2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.35)']
                        },
                        {
                            userClass: 'textbox4-3',
                            rect: ['-162px', '226px', '487px', '30px', 'auto', 'auto'],
                            display: 'block',
                            id: 'textbox4-3',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.35)']
                        },
                        {
                            userClass: 'textbox4-4',
                            rect: ['-162px', '266px', '487px', '30px', 'auto', 'auto'],
                            display: 'block',
                            id: 'textbox4-4',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.35)']
                        },
                        {
                            userClass: 'textbox4-5',
                            rect: ['-162px', '306px', '487px', '30px', 'auto', 'auto'],
                            display: 'block',
                            id: 'textbox4-5',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.35)']
                        },
                        {
                            userClass: 'textbox4-6',
                            rect: ['-162px', '347px', '487px', '30px', 'auto', 'auto'],
                            display: 'block',
                            id: 'textbox4-6',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.35)']
                        },
                        {
                            userClass: 'textbox4-7',
                            rect: ['-162px', '387px', '487px', '30px', 'auto', 'auto'],
                            display: 'block',
                            id: 'textbox4-7',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.35)']
                        },
                        {
                            userClass: 'textbox4-8',
                            rect: ['-162px', '427px', '487px', '30px', 'auto', 'auto'],
                            display: 'block',
                            id: 'textbox4-8',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.35)']
                        },
                        {
                            userClass: 'textbox4-9',
                            rect: ['-162px', '467px', '487px', '30px', 'auto', 'auto'],
                            display: 'block',
                            id: 'textbox4-9',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.35)']
                        },
                        {
                            userClass: 'textbox4-10',
                            rect: ['-162px', '507px', '487px', '30px', 'auto', 'auto'],
                            display: 'block',
                            id: 'textbox4-10',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.35)']
                        },
                        {
                            userClass: 'textbox4-11',
                            rect: ['-162px', '547px', '487px', '30px', 'auto', 'auto'],
                            display: 'block',
                            id: 'textbox4-11',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.35)']
                        },
                        {
                            userClass: 'textbox4-12',
                            rect: ['-162px', '588px', '487px', '30px', 'auto', 'auto'],
                            display: 'block',
                            id: 'textbox4-12',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.35)']
                        },
                        {
                            userClass: 'textbox4-13',
                            rect: ['-162px', '629px', '487px', '30px', 'auto', 'auto'],
                            display: 'block',
                            id: 'textbox4-13',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.35)']
                        },
                        {
                            userClass: 'textbox4-14',
                            rect: ['-162px', '670px', '487px', '30px', 'auto', 'auto'],
                            display: 'block',
                            id: 'textbox4-14',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.35)']
                        },
                        {
                            userClass: 'textbox4-15',
                            rect: ['-162px', '710px', '487px', '30px', 'auto', 'auto'],
                            display: 'block',
                            id: 'textbox4-15',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.35)']
                        },
                        {
                            userClass: 'textbox4-16',
                            rect: ['-162px', '750px', '487px', '30px', 'auto', 'auto'],
                            display: 'block',
                            id: 'textbox4-16',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.35)']
                        },
                        {
                            type: 'group',
                            id: 'Group4',
                            cursor: 'pointer',
                            rect: ['0px', '0', '350px', '40', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['-359px', '0px', '710px', '40px', 'auto', 'auto'],
                                opacity: '1',
                                id: 'Question1-boxCopy6',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,144,255,1.00)']
                            },
                            {
                                rect: ['308', '11', '30', '18', 'auto', 'auto'],
                                id: 'GroupCopy5',
                                type: 'group',
                                c: [
                                {
                                    transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                    rect: ['12px', '7px', '21px', '3px', 'auto', 'auto'],
                                    id: 'Arrow2Copy3',
                                    stroke: [0, 'rgb(255, 255, 255)', 'solid'],
                                    type: 'rect',
                                    fill: ['rgba(255,255,255,1.00)']
                                },
                                {
                                    transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                                    rect: ['-2px', '7px', '21px', '3px', 'auto', 'auto'],
                                    id: 'Arrow1Copy3',
                                    stroke: [0, 'rgb(255, 255, 255)', 'solid'],
                                    type: 'rect',
                                    fill: ['rgba(255,255,255,1.00)']
                                }]
                            },
                            {
                                type: 'text',
                                rect: ['-337px', '0px', '292px', '40px', 'auto', 'auto'],
                                id: 'Question1Copy6',
                                opacity: '1',
                                text: '<p style=\"margin:0px\">​<span style=\"color: rgb(255, 255, 255); font-size: 25px;\">Outputs</span></p><p style=\"margin: 0px;\">​</p>',
                                font: ['lato, sans-serif', [15, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal']
                            }]
                        },
                        {
                            type: 'text',
                            rect: ['-336px', '467px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text2Copy9',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">9.</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['-336px', '507px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text2Copy8',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">10.</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['-336px', '588px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text2Copy7',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">12.</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['-336px', '547px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text2Copy5',
                            text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255);\">11.</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['-334px', '146px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text2Copy13',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">1.</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['-334px', '186px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text2Copy12',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">2.</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['-334px', '267px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text2Copy11',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">4.</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['-334px', '226px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text2Copy10',
                            text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255);\">3.</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['-336px', '631px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text2Copy21',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">13.</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['-336px', '671px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text2Copy20',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">14.</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['-336px', '752px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text2Copy19',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">16.</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['-336px', '711px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text2Copy18',
                            text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255);\">15.</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['-334px', '308px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text2Copy17',
                            text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255);\">5.</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['-334px', '348px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text2Copy16',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">6.</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['-334px', '429px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text2Copy15',
                            text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255);\">8.</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['-334px', '388px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text2Copy14',
                            text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255);\">7.</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            userClass: '',
                            borderRadius: ['0px', '0px', '0px', '0px 0px'],
                            rect: ['-304px', '154px', '142px', '30px', 'auto', 'auto'],
                            id: 'peso-21',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            userClass: '',
                            borderRadius: ['0px', '0px', '0px', '0px 0px'],
                            rect: ['-304px', '194px', '142px', '30px', 'auto', 'auto'],
                            id: 'peso-22',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            userClass: '',
                            borderRadius: ['0px', '0px', '0px', '0px 0px'],
                            rect: ['-304px', '234px', '142px', '30px', 'auto', 'auto'],
                            id: 'peso-23',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            userClass: '',
                            borderRadius: ['0px', '0px', '0px', '0px 0px'],
                            rect: ['-304px', '274px', '142px', '30px', 'auto', 'auto'],
                            id: 'peso-24',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            userClass: '',
                            borderRadius: ['0px', '0px', '0px', '0px 0px'],
                            rect: ['-304px', '315px', '142px', '30px', 'auto', 'auto'],
                            id: 'peso-25',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            userClass: '',
                            borderRadius: ['0px', '0px', '0px', '0px 0px'],
                            rect: ['-304px', '355px', '142px', '30px', 'auto', 'auto'],
                            id: 'peso-26',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            userClass: '',
                            borderRadius: ['0px', '0px', '0px', '0px 0px'],
                            rect: ['-304px', '395px', '142px', '30px', 'auto', 'auto'],
                            id: 'peso-27',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            userClass: '',
                            borderRadius: ['0px', '0px', '0px', '0px 0px'],
                            rect: ['-304px', '435px', '142px', '30px', 'auto', 'auto'],
                            id: 'peso-28',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            userClass: '',
                            borderRadius: ['0px', '0px', '0px', '0px 0px'],
                            rect: ['-304px', '475px', '142px', '30px', 'auto', 'auto'],
                            id: 'peso-29',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            userClass: '',
                            borderRadius: ['0px', '0px', '0px', '0px 0px'],
                            rect: ['-304px', '515px', '142px', '30px', 'auto', 'auto'],
                            id: 'peso-30',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            userClass: '',
                            borderRadius: ['0px', '0px', '0px', '0px 0px'],
                            rect: ['-304px', '555px', '142px', '30px', 'auto', 'auto'],
                            id: 'peso-31',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            userClass: '',
                            borderRadius: ['0px', '0px', '0px', '0px 0px'],
                            rect: ['-304px', '596px', '142px', '30px', 'auto', 'auto'],
                            id: 'peso-32',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            userClass: '',
                            borderRadius: ['0px', '0px', '0px', '0px 0px'],
                            rect: ['-304px', '638px', '142px', '30px', 'auto', 'auto'],
                            id: 'peso-33',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            userClass: '',
                            borderRadius: ['0px', '0px', '0px', '0px 0px'],
                            rect: ['-304px', '678px', '142px', '30px', 'auto', 'auto'],
                            id: 'peso-34',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            userClass: '',
                            borderRadius: ['0px', '0px', '0px', '0px 0px'],
                            rect: ['-304px', '718px', '142px', '30px', 'auto', 'auto'],
                            id: 'peso-35',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            userClass: '',
                            borderRadius: ['0px', '0px', '0px', '0px 0px'],
                            rect: ['-304px', '758px', '142px', '30px', 'auto', 'auto'],
                            id: 'peso-36',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            type: 'text',
                            rect: ['-336px', '50px', '609px', '40px', 'auto', 'auto'],
                            display: 'block',
                            id: 'Question1Copy3',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 18px; color: rgb(255, 255, 255);\">List the content, materials, and activities that you distributed and which your target audiences were exposed to.</span></p><p style=\"margin: 0px;\">\n</p>',
                            textStyle: ['', '', '20px', '', ''],
                            font: ['lato, sans-serif', [15, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal']
                        },
                        {
                            rect: ['315px', '55px', '34px', '30px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Information-2',
                            symbolName: 'Information-2',
                            cursor: 'pointer',
                            transform: [[], [], [], ['0.78242', '0.78242']]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '350px', '355px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: false,
                    data: [
                        [
                            "eid1962",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox4-8}",
                            '-162px',
                            '-162px'
                        ],
                        [
                            "eid2037",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox4-4}",
                            '266px',
                            '266px'
                        ],
                        [
                            "eid1942",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox4-16}",
                            '-162px',
                            '-162px'
                        ],
                        [
                            "eid2031",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox4-9}",
                            '467px',
                            '467px'
                        ],
                        [
                            "eid2022",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox4-13}",
                            '629px',
                            '629px'
                        ],
                        [
                            "eid1959",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox4-12}",
                            '487px',
                            '487px'
                        ],
                        [
                            "eid1762",
                            "display",
                            0,
                            0,
                            "linear",
                            "${textbox4-11}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1247",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox4-11}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1955",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox4-4}",
                            '487px',
                            '487px'
                        ],
                        [
                            "eid1763",
                            "display",
                            0,
                            0,
                            "linear",
                            "${textbox4-12}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1254",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox4-12}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1753",
                            "display",
                            0,
                            0,
                            "linear",
                            "${textbox4-2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1192",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox4-2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1938",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox4-5}",
                            '-162px',
                            '-162px'
                        ],
                        [
                            "eid1320",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox4-14}",
                            'rgba(255,255,255,0.35)',
                            'rgba(255,255,255,0.35)'
                        ],
                        [
                            "eid1945",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox4-1}",
                            '487px',
                            '487px'
                        ],
                        [
                            "eid1954",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox4-4}",
                            '-162px',
                            '-162px'
                        ],
                        [
                            "eid1077",
                            "boxShadow.offsetV",
                            0,
                            0,
                            "linear",
                            "${Question1-box}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1946",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox4-14}",
                            '-162px',
                            '-162px'
                        ],
                        [
                            "eid1326",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox4-15}",
                            'rgba(255,255,255,0.35)',
                            'rgba(255,255,255,0.35)'
                        ],
                        [
                            "eid1197",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox4-3}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid1940",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox4-15}",
                            '-162px',
                            '-162px'
                        ],
                        [
                            "eid1941",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox4-15}",
                            '487px',
                            '487px'
                        ],
                        [
                            "eid1953",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox4-10}",
                            '487px',
                            '487px'
                        ],
                        [
                            "eid1332",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox4-16}",
                            'rgba(255,255,255,0.35)',
                            'rgba(255,255,255,0.35)'
                        ],
                        [
                            "eid1255",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox4-12}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid1960",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox4-11}",
                            '-162px',
                            '-162px'
                        ],
                        [
                            "eid1961",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox4-11}",
                            '487px',
                            '487px'
                        ],
                        [
                            "eid1316",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox4-13}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid1967",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox4-6}",
                            '487px',
                            '487px'
                        ],
                        [
                            "eid2026",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox4-3}",
                            '226px',
                            '226px'
                        ],
                        [
                            "eid1205",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox4-4}",
                            'rgba(255,255,255,0.35)',
                            'rgba(255,255,255,0.35)'
                        ],
                        [
                            "eid1958",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox4-12}",
                            '-162px',
                            '-162px'
                        ],
                        [
                            "eid1766",
                            "display",
                            0,
                            0,
                            "linear",
                            "${textbox4-15}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1327",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox4-15}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1944",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox4-1}",
                            '-162px',
                            '-162px'
                        ],
                        [
                            "eid424",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox4-1}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid1202",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox4-3}",
                            'rgba(255,255,255,0.35)',
                            'rgba(255,255,255,0.35)'
                        ],
                        [
                            "eid1752",
                            "display",
                            0,
                            0,
                            "linear",
                            "${textbox4-1}",
                            'block',
                            'block'
                        ],
                        [
                            "eid376",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox4-1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1078",
                            "boxShadow.blur",
                            0,
                            0,
                            "linear",
                            "${Question1-box}",
                            '50px',
                            '50px'
                        ],
                        [
                            "eid2001",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Question1Copy}",
                            '-299px',
                            '-299px'
                        ],
                        [
                            "eid2027",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox4-16}",
                            '750px',
                            '750px'
                        ],
                        [
                            "eid1764",
                            "display",
                            0,
                            0,
                            "linear",
                            "${textbox4-13}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1315",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox4-13}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1076",
                            "boxShadow.offsetH",
                            0,
                            0,
                            "linear",
                            "${Question1-box}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1248",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox4-11}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid2030",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox4-15}",
                            '710px',
                            '710px'
                        ],
                        [
                            "eid1246",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox4-11}",
                            'rgba(255,255,255,0.35)',
                            'rgba(255,255,255,0.35)'
                        ],
                        [
                            "eid1767",
                            "display",
                            0,
                            0,
                            "linear",
                            "${textbox4-16}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1334",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox4-16}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2033",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox4-6}",
                            '347px',
                            '347px'
                        ],
                        [
                            "eid2005",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Question1Copy2}",
                            '20px',
                            '20px'
                        ],
                        [
                            "eid1948",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox4-3}",
                            '-162px',
                            '-162px'
                        ],
                        [
                            "eid1995",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Question1Copy}",
                            '20px',
                            '20px'
                        ],
                        [
                            "eid2023",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox4-1}",
                            '146px',
                            '146px'
                        ],
                        [
                            "eid1965",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox4-2}",
                            '487px',
                            '487px'
                        ],
                        [
                            "eid1754",
                            "display",
                            0,
                            0,
                            "linear",
                            "${textbox4-3}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1198",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox4-3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1231",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox4-8}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid2036",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox4-11}",
                            '547px',
                            '547px'
                        ],
                        [
                            "eid1317",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox4-13}",
                            'rgba(255,255,255,0.35)',
                            'rgba(255,255,255,0.35)'
                        ],
                        [
                            "eid1079",
                            "boxShadow.spread",
                            0,
                            0,
                            "linear",
                            "${Question1-box}",
                            '10px',
                            '10px'
                        ],
                        [
                            "eid1937",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox4-7}",
                            '487px',
                            '487px'
                        ],
                        [
                            "eid2028",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox4-12}",
                            '588px',
                            '588px'
                        ],
                        [
                            "eid1219",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox4-6}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid1956",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox4-9}",
                            '-162px',
                            '-162px'
                        ],
                        [
                            "eid2010",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Question1Copy2}",
                            '445px',
                            '445px'
                        ],
                        [
                            "eid1252",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox4-12}",
                            'rgba(255,255,255,0.35)',
                            'rgba(255,255,255,0.35)'
                        ],
                        [
                            "eid2035",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Question1Copy2}",
                            '110px',
                            '110px'
                        ],
                        [
                            "eid1957",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox4-9}",
                            '487px',
                            '487px'
                        ],
                        [
                            "eid1760",
                            "display",
                            0,
                            0,
                            "linear",
                            "${textbox4-9}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1235",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox4-9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1322",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox4-14}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid1756",
                            "display",
                            0,
                            0,
                            "linear",
                            "${textbox4-5}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1211",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox4-5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2020",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${Question1-box}",
                            'rgba(0,117,208,1.00)',
                            'rgba(0,117,208,1.00)'
                        ],
                        [
                            "eid1949",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox4-3}",
                            '487px',
                            '487px'
                        ],
                        [
                            "eid1193",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox4-2}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid1229",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox4-8}",
                            'rgba(255,255,255,0.35)',
                            'rgba(255,255,255,0.35)'
                        ],
                        [
                            "eid1939",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox4-5}",
                            '487px',
                            '487px'
                        ],
                        [
                            "eid2002",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Question1Copy}",
                            '126px',
                            '126px'
                        ],
                        [
                            "eid1930",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Question1-box}",
                            '-359px',
                            '-359px'
                        ],
                        [
                            "eid1964",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox4-2}",
                            '-162px',
                            '-162px'
                        ],
                        [
                            "eid1950",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox4-13}",
                            '-162px',
                            '-162px'
                        ],
                        [
                            "eid1335",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox4-16}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid2009",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Question1Copy2}",
                            '-147px',
                            '-147px'
                        ],
                        [
                            "eid420",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Question1-box}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1222",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox4-7}",
                            'rgba(255,255,255,0.35)',
                            'rgba(255,255,255,0.35)'
                        ],
                        [
                            "eid1757",
                            "display",
                            0,
                            0,
                            "linear",
                            "${textbox4-6}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1218",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox4-6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1240",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox4-10}",
                            'rgba(255,255,255,0.35)',
                            'rgba(255,255,255,0.35)'
                        ],
                        [
                            "eid1943",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox4-16}",
                            '487px',
                            '487px'
                        ],
                        [
                            "eid1755",
                            "display",
                            0,
                            0,
                            "linear",
                            "${textbox4-4}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1207",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox4-4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2024",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox4-2}",
                            '186px',
                            '186px'
                        ],
                        [
                            "eid2006",
                            "display",
                            250,
                            0,
                            "linear",
                            "${Question1Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1206",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox4-4}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid1759",
                            "display",
                            0,
                            0,
                            "linear",
                            "${textbox4-8}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1230",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox4-8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1952",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox4-10}",
                            '-162px',
                            '-162px'
                        ],
                        [
                            "eid2038",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox4-8}",
                            '427px',
                            '427px'
                        ],
                        [
                            "eid2032",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox4-14}",
                            '670px',
                            '670px'
                        ],
                        [
                            "eid1236",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox4-9}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid377",
                            "display",
                            250,
                            0,
                            "linear",
                            "${Question1-box}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1936",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox4-7}",
                            '-162px',
                            '-162px'
                        ],
                        [
                            "eid1929",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Question1-box}",
                            '710px',
                            '710px'
                        ],
                        [
                            "eid2039",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Question1-box}",
                            '804px',
                            '804px'
                        ],
                        [
                            "eid1966",
                            "left",
                            0,
                            0,
                            "linear",
                            "${textbox4-6}",
                            '-162px',
                            '-162px'
                        ],
                        [
                            "eid1765",
                            "display",
                            0,
                            0,
                            "linear",
                            "${textbox4-14}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1321",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox4-14}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1328",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox4-15}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid1985",
                            "display",
                            250,
                            0,
                            "linear",
                            "${Question1Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1203",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox4-1}",
                            'rgba(255,255,255,0.35)',
                            'rgba(255,255,255,0.35)'
                        ],
                        [
                            "eid1243",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox4-10}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid1201",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox4-2}",
                            'rgba(255,255,255,0.35)',
                            'rgba(255,255,255,0.35)'
                        ],
                        [
                            "eid1213",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox4-5}",
                            'rgba(255,255,255,0.35)',
                            'rgba(255,255,255,0.35)'
                        ],
                        [
                            "eid1963",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox4-8}",
                            '487px',
                            '487px'
                        ],
                        [
                            "eid1947",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox4-14}",
                            '487px',
                            '487px'
                        ],
                        [
                            "eid2034",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox4-10}",
                            '507px',
                            '507px'
                        ],
                        [
                            "eid2029",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Question1Copy}",
                            '108px',
                            '108px'
                        ],
                        [
                            "eid2021",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox4-5}",
                            '306px',
                            '306px'
                        ],
                        [
                            "eid1234",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox4-9}",
                            'rgba(255,255,255,0.35)',
                            'rgba(255,255,255,0.35)'
                        ],
                        [
                            "eid1080",
                            "boxShadow.color",
                            0,
                            0,
                            "linear",
                            "${Question1-box}",
                            'rgba(0,0,0,0.21)',
                            'rgba(0,0,0,0.21)'
                        ],
                        [
                            "eid1212",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox4-5}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid1951",
                            "width",
                            0,
                            0,
                            "linear",
                            "${textbox4-13}",
                            '487px',
                            '487px'
                        ],
                        [
                            "eid2025",
                            "top",
                            0,
                            0,
                            "linear",
                            "${textbox4-7}",
                            '387px',
                            '387px'
                        ],
                        [
                            "eid1223",
                            "height",
                            0,
                            0,
                            "linear",
                            "${textbox4-7}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid1761",
                            "display",
                            0,
                            0,
                            "linear",
                            "${textbox4-10}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1242",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox4-10}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1217",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${textbox4-6}",
                            'rgba(255,255,255,0.35)',
                            'rgba(255,255,255,0.35)'
                        ],
                        [
                            "eid1758",
                            "display",
                            0,
                            0,
                            "linear",
                            "${textbox4-7}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1224",
                            "display",
                            250,
                            0,
                            "linear",
                            "${textbox4-7}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "Information-2_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '30px', '30px', 'auto', 'auto'],
                            borderRadius: ['143.2%', '143.2%', '143.2%', '143.2% 143.2%'],
                            id: 'Rectangle4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            type: 'text',
                            rect: ['4px', '3px', '22px', '22px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(142, 142, 142); font-size: 23px;\">i</span></p>',
                            id: 'Text2',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(255,255,255,1)', '900', 'none', 'normal', 'break-word', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '30px', '30px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Framework": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['50px', '1px', '628px', '25px', 'auto', 'auto'],
                            id: 'Rectangle5Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(215,0,71,1.00)']
                        },
                        {
                            rect: ['1px', '0px', '41px', '236px', 'auto', 'auto'],
                            id: 'Rectangle5Copy12',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(138,138,138,1.00)']
                        },
                        {
                            rect: ['1px', '254px', '42px', '613px', 'auto', 'auto'],
                            id: 'Rectangle5Copy13',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(138,138,138,1.00)']
                        },
                        {
                            rect: ['303px', '254px', '42px', '613px', 'auto', 'auto'],
                            id: 'Rectangle5Copy17',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(138,138,138,1.00)']
                        },
                        {
                            rect: ['1006px', '30px', '295px', '25px', 'auto', 'auto'],
                            id: 'Rectangle5Copy10',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,154,49,1.00)']
                        },
                        {
                            rect: ['1071px', '253px', '230px', '25px', 'auto', 'auto'],
                            id: 'Rectangle5Copy16',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(93,0,123,1.00)']
                        },
                        {
                            rect: ['350px', '253px', '230px', '25px', 'auto', 'auto'],
                            id: 'Rectangle5Copy14',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,82,146,1.00)']
                        },
                        {
                            rect: ['50px', '253px', '230px', '25px', 'auto', 'auto'],
                            id: 'Rectangle5Copy15',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,151,114,1.00)']
                        },
                        {
                            rect: ['350px', '309px', '230px', '557px', 'auto', 'auto'],
                            id: 'Rectangle3Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(205,233,255,1.00)']
                        },
                        {
                            rect: ['1071px', '309px', '230px', '557px', 'auto', 'auto'],
                            id: 'Rectangle2Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(242,203,255,1.00)']
                        },
                        {
                            rect: ['350px', '55px', '328px', '181px', 'auto', 'auto'],
                            userClass: '',
                            id: 'textbox4-outputCopy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(226,226,226,1.00)']
                        },
                        {
                            rect: ['50px', '55px', '295px', '181px', 'auto', 'auto'],
                            userClass: '',
                            id: 'textbox4-outputCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(226,226,226,1.00)']
                        },
                        {
                            rect: ['56px', '65px', '278px', '148px', 'auto', 'auto'],
                            userClass: 'textbox1-output',
                            id: 'textbox1-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(138,138,138,0.00)']
                        },
                        {
                            rect: ['688px', '55px', '313px', '181px', 'auto', 'auto'],
                            id: 'Rectangle3Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,237,218,1.00)']
                        },
                        {
                            rect: ['50px', '309px', '230px', '557px', 'auto', 'auto'],
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(201,244,234,1.00)']
                        },
                        {
                            rect: ['590px', '309px', '230px', '556px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(169,225,254,1.00)']
                        },
                        {
                            rect: ['831px', '309px', '230px', '556px', 'auto', 'auto'],
                            id: 'Rectangle2Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(169,225,254,1.00)']
                        },
                        {
                            rect: ['688px', '30px', '313px', '25px', 'auto', 'auto'],
                            id: 'Rectangle5Copy5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,154,49,1.00)']
                        },
                        {
                            rect: ['50px', '284px', '230px', '25px', 'auto', 'auto'],
                            id: 'Rectangle5Copy6',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,195,148,1.00)']
                        },
                        {
                            rect: ['350px', '284px', '230px', '25px', 'auto', 'auto'],
                            id: 'Rectangle5Copy7',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,144,255,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['693px', '35px', '306px', '13px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\"><span style=\"font-weight: 500; font-size: 13px; text-transform: uppercase;\">Target Audience</span></p>',
                            id: 'Text3Copy3',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(255,255,255,1)', '900', 'none', 'normal', 'break-word', '']
                        },
                        {
                            type: 'text',
                            rect: ['1008px', '36px', '288px', '12px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\"><span style=\"font-weight: 500; font-size: 13px; text-transform: uppercase;\">STRATEGY</span></p>',
                            id: 'Text3Copy16',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(255,255,255,1)', '900', 'none', 'normal', 'break-word', '']
                        },
                        {
                            type: 'text',
                            rect: ['50px', '284px', '230px', '24px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px; font-family: lato, sans-serif; font-size: 13px; font-weight: 300; line-height: 25px;\"><span style=\"font-size: 14px; font-weight: 500; text-transform: uppercase;\">Activity</span></p>',
                            id: 'Text3Copy4',
                            textStyle: ['', '', '13px', '', 'none'],
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(255,255,255,1)', '900', 'none', 'normal', 'break-word', '']
                        },
                        {
                            rect: ['590px', '253px', '472px', '25px', 'auto', 'auto'],
                            id: 'Rectangle5Copy8',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,71,126,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['350px', '284px', '230px', '25px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px; font-family: lato, sans-serif; font-size: 13px; font-weight: 300; line-height: 24px;\"><span style=\"font-size: 13px; font-weight: 500; text-transform: uppercase;\">Output</span></p>',
                            id: 'Text3Copy5',
                            textStyle: ['', '', '13px', '', 'none'],
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(255,255,255,1)', '900', 'none', 'normal', 'break-word', '']
                        },
                        {
                            type: 'text',
                            rect: ['56px', '259px', '224px', '18px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-weight: 400; font-size: 11px;\">IMPLEMENT</span></p>',
                            id: 'Text3Copy18',
                            textStyle: ['', '', '13px', '', 'none'],
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(255,255,255,1)', '900', 'none', 'normal', 'break-word', '']
                        },
                        {
                            type: 'text',
                            rect: ['350px', '258px', '230px', '15px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-weight: 400; font-size: 11px;\">MEASURE ACTIVITY</span></p>',
                            id: 'Text3Copy17',
                            textStyle: ['', '', '13px', '', 'none'],
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(255,255,255,1)', '900', 'none', 'normal', 'break-word', '']
                        },
                        {
                            type: 'text',
                            rect: ['591px', '259px', '470px', '18px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 11px; font-weight: 400;\">AUDIENCE RESPONSE &amp; EFFECTS</span></p>',
                            id: 'Text3Copy6',
                            textStyle: ['', '', '13px', '', 'none'],
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(255,255,255,1)', '900', 'none', 'normal', 'break-word', '']
                        },
                        {
                            rect: ['590px', '284px', '230px', '25px', 'auto', 'auto'],
                            id: 'Rectangle5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,103,182,1.00)']
                        },
                        {
                            rect: ['1071px', '284px', '230px', '25px', 'auto', 'auto'],
                            id: 'Rectangle5Copy9',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(138,0,182,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['1073px', '289px', '228px', '19px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 13px; font-weight: 500;\">IMPACT</span></p>',
                            id: 'Text3Copy7',
                            textStyle: ['', '', '13px', '', 'none'],
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(255,255,255,1)', '900', 'none', 'normal', 'break-word', '']
                        },
                        {
                            type: 'text',
                            rect: ['1071px', '258px', '230px', '19px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-weight: 400; font-size: 10px;\">ORGANISATION &amp; STAKEHOLDER EFFECTS</span></p>',
                            id: 'Text3Copy19',
                            textStyle: ['', '', '13px', '', 'none'],
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(255,255,255,1)', '900', 'none', 'normal', 'break-word', '']
                        },
                        {
                            rect: ['1071px', '319px', '230px', '30px', 'auto', 'auto'],
                            userClass: 'textbox7-output',
                            id: 'textbox7-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['831px', '309px', '230px', '30px', 'auto', 'auto'],
                            userClass: 'textbox6-1-output',
                            id: 'textbox6-1-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['595px', '310px', '225px', '30px', 'auto', 'auto'],
                            userClass: 'textbox5-1-output',
                            id: 'textbox5-1-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['78px', '300px', '202px', '30px', 'auto', 'auto'],
                            userClass: 'textbox3-1-output',
                            id: 'textbox3-1-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['697px', '50px', '292px', '30px', 'auto', 'auto'],
                            userClass: 'textbox2-1-output',
                            id: 'textbox2-1-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['697px', '85px', '292px', '30px', 'auto', 'auto'],
                            userClass: 'textbox2-2-output',
                            id: 'textbox2-2-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['697px', '120px', '292px', '30px', 'auto', 'auto'],
                            userClass: 'textbox2-3-output',
                            id: 'textbox2-3-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['697px', '155px', '292px', '30px', 'auto', 'auto'],
                            userClass: 'textbox2-4-output',
                            id: 'textbox2-4-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['1006px', '55px', '295px', '181px', 'auto', 'auto'],
                            id: 'Rectangle3Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,237,218,1.00)']
                        },
                        {
                            rect: ['697px', '190px', '292px', '30px', 'auto', 'auto'],
                            userClass: 'textbox2-5-output',
                            id: 'textbox2-5-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['354px', '59px', '317px', '148px', 'auto', 'auto'],
                            userClass: 'textbox1-2-output',
                            id: 'textbox1-2-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(138,138,138,0.00)']
                        },
                        {
                            rect: ['50px', '30px', '295px', '25px', 'auto', 'auto'],
                            id: 'Rectangle5Copy4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,0,84,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['50px', '35px', '295px', '13px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\"><span style=\"font-weight: 500; text-transform: uppercase; font-size: 13px;\">Organizational Objectives</span></p>',
                            id: 'Text3Copy2',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(255,255,255,1)', '900', 'none', 'normal', 'break-word', '']
                        },
                        {
                            type: 'text',
                            rect: ['50px', '7px', '628px', '13px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\"><span style=\"font-weight: 500; text-transform: uppercase; font-size: 13px;\">ALIGN Objectives</span></p>',
                            id: 'Text3Copy11',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(255,255,255,1)', '900', 'none', 'normal', 'break-word', '']
                        },
                        {
                            rect: ['688px', '1px', '613px', '25px', 'auto', 'auto'],
                            id: 'Rectangle5Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(254,131,3,1.00)']
                        },
                        {
                            rect: ['350px', '30px', '328px', '25px', 'auto', 'auto'],
                            id: 'Rectangle5Copy11',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,0,84,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['350px', '35px', '328px', '15px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\"><span style=\"font-weight: 500; font-size: 13px; text-transform: uppercase;\">Communications Objectives</span></p>',
                            id: 'Text3Copy9',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(255,255,255,1)', '900', 'none', 'normal', 'break-word', '']
                        },
                        {
                            rect: ['831px', '284px', '230px', '25px', 'auto', 'auto'],
                            id: 'Rectangle5Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,103,182,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['593px', '290px', '226px', '19px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 13px; font-weight: 500;\">OUT-TAKES</span></p>',
                            id: 'Text3',
                            textStyle: ['', '', '13px', '', 'none'],
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(255,255,255,1)', '900', 'none', 'normal', 'break-word', '']
                        },
                        {
                            type: 'text',
                            rect: ['831px', '289px', '230px', '19px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 13px; font-weight: 500;\">OUTCOMES</span></p>',
                            id: 'Text3Copy',
                            textStyle: ['', '', '13px', '', 'none'],
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(255,255,255,1)', '900', 'none', 'normal', 'break-word', '']
                        },
                        {
                            rect: ['378px', '300px', '202px', '30px', 'auto', 'auto'],
                            userClass: 'textbox4-1-output',
                            id: 'textbox4-1-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,0,0,0.00)']
                        },
                        {
                            rect: ['56px', '314px', '17px', '25px', 'auto', 'auto'],
                            userClass: 'paid-1-output',
                            id: 'peso-1-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['78px', '335px', '202px', '30px', 'auto', 'auto'],
                            userClass: 'textbox3-2-output',
                            id: 'textbox3-2-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['56px', '349px', '17px', '25px', 'auto', 'auto'],
                            userClass: '',
                            id: 'peso-2-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['78px', '370px', '202px', '30px', 'auto', 'auto'],
                            userClass: 'textbox3-3-output',
                            id: 'textbox3-3-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['56px', '384px', '17px', '25px', 'auto', 'auto'],
                            userClass: '',
                            id: 'peso-3-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['78px', '405px', '202px', '30px', 'auto', 'auto'],
                            userClass: 'textbox3-4-output',
                            id: 'textbox3-4-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['56px', '419px', '17px', '25px', 'auto', 'auto'],
                            userClass: '',
                            id: 'peso-4-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['78px', '440px', '202px', '30px', 'auto', 'auto'],
                            userClass: 'textbox3-5-output',
                            id: 'textbox3-5-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['56px', '454px', '17px', '25px', 'auto', 'auto'],
                            userClass: '',
                            id: 'peso-5-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['78px', '475px', '202px', '30px', 'auto', 'auto'],
                            userClass: 'textbox3-6-output',
                            id: 'textbox3-6-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['56px', '489px', '17px', '25px', 'auto', 'auto'],
                            userClass: '',
                            id: 'peso-6-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['78px', '510px', '202px', '30px', 'auto', 'auto'],
                            userClass: 'textbox3-7-output',
                            id: 'textbox3-7-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['56px', '524px', '17px', '25px', 'auto', 'auto'],
                            userClass: '',
                            id: 'peso-7-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['78px', '545px', '202px', '30px', 'auto', 'auto'],
                            userClass: 'textbox3-8-output',
                            id: 'textbox3-8-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['56px', '559px', '17px', '25px', 'auto', 'auto'],
                            userClass: '',
                            id: 'peso-8-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['78px', '580px', '202px', '30px', 'auto', 'auto'],
                            userClass: 'textbox3-9-output',
                            id: 'textbox3-9-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['56px', '594px', '17px', '25px', 'auto', 'auto'],
                            userClass: '',
                            id: 'peso-9-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['78px', '615px', '202px', '30px', 'auto', 'auto'],
                            userClass: 'textbox3-10-output',
                            id: 'textbox3-10-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['56px', '629px', '17px', '25px', 'auto', 'auto'],
                            userClass: '',
                            id: 'peso-10-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['78px', '650px', '202px', '30px', 'auto', 'auto'],
                            userClass: 'textbox3-11-output',
                            id: 'textbox3-11-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['56px', '664px', '17px', '25px', 'auto', 'auto'],
                            userClass: '',
                            id: 'peso-11-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['78px', '685px', '202px', '30px', 'auto', 'auto'],
                            userClass: 'textbox3-12-output',
                            id: 'textbox3-12-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['56px', '699px', '17px', '25px', 'auto', 'auto'],
                            userClass: '',
                            id: 'peso-12-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['78px', '720px', '202px', '30px', 'auto', 'auto'],
                            userClass: 'textbox3-13-output',
                            id: 'textbox3-13-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['56px', '734px', '17px', '25px', 'auto', 'auto'],
                            userClass: '',
                            id: 'peso-13-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['78px', '755px', '202px', '30px', 'auto', 'auto'],
                            userClass: 'textbox3-14-output',
                            id: 'textbox3-14-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['56px', '769px', '17px', '25px', 'auto', 'auto'],
                            userClass: '',
                            id: 'peso-14-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['78px', '790px', '202px', '30px', 'auto', 'auto'],
                            userClass: 'textbox3-15-output',
                            id: 'textbox3-15-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['56px', '804px', '17px', '25px', 'auto', 'auto'],
                            userClass: '',
                            id: 'peso-15-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['78px', '824px', '202px', '30px', 'auto', 'auto'],
                            userClass: 'textbox3-15-output',
                            id: 'textbox3-16-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['378px', '335px', '202px', '30px', 'auto', 'auto'],
                            userClass: 'textbox4-2-output',
                            id: 'textbox4-2-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['378px', '370px', '202px', '30px', 'auto', 'auto'],
                            userClass: 'textbox4-3-output',
                            id: 'textbox4-3-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['378px', '405px', '202px', '30px', 'auto', 'auto'],
                            userClass: 'textbox4-4-output',
                            id: 'textbox4-4-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['378px', '440px', '202px', '30px', 'auto', 'auto'],
                            userClass: 'textbox4-5-output',
                            id: 'textbox4-5-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['378px', '475px', '202px', '30px', 'auto', 'auto'],
                            userClass: 'textbox4-6-output',
                            id: 'textbox4-6-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['378px', '510px', '202px', '30px', 'auto', 'auto'],
                            userClass: 'textbox4-7-output',
                            id: 'textbox4-7-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['378px', '545px', '202px', '30px', 'auto', 'auto'],
                            userClass: 'textbox4-8-output',
                            id: 'textbox4-8-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['378px', '580px', '202px', '30px', 'auto', 'auto'],
                            userClass: 'textbox4-9-output',
                            id: 'textbox4-9-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['378px', '615px', '202px', '30px', 'auto', 'auto'],
                            userClass: 'textbox4-10-output',
                            id: 'textbox4-10-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['378px', '650px', '202px', '30px', 'auto', 'auto'],
                            userClass: 'textbox4-11-output',
                            id: 'textbox4-11-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['378px', '685px', '202px', '30px', 'auto', 'auto'],
                            userClass: 'textbox4-12-output',
                            id: 'textbox4-12-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['378px', '720px', '202px', '30px', 'auto', 'auto'],
                            userClass: 'textbox4-13-output',
                            id: 'textbox4-13-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['378px', '755px', '202px', '30px', 'auto', 'auto'],
                            userClass: 'textbox4-14-output',
                            id: 'textbox4-14-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['378px', '790px', '202px', '30px', 'auto', 'auto'],
                            userClass: 'textbox4-15-output',
                            id: 'textbox4-15-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['378px', '824px', '202px', '30px', 'auto', 'auto'],
                            userClass: 'textbox3-15-output',
                            id: 'textbox4-16-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['56px', '838px', '17px', '25px', 'auto', 'auto'],
                            userClass: '',
                            id: 'peso-16-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['356px', '314px', '17px', '25px', 'auto', 'auto'],
                            userClass: 'paid-1-output',
                            id: 'peso-21-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['356px', '349px', '17px', '25px', 'auto', 'auto'],
                            userClass: '',
                            id: 'peso-22-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['356px', '384px', '17px', '25px', 'auto', 'auto'],
                            userClass: '',
                            id: 'peso-23-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['356px', '419px', '17px', '25px', 'auto', 'auto'],
                            userClass: '',
                            id: 'peso-24-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['356px', '454px', '17px', '25px', 'auto', 'auto'],
                            userClass: '',
                            id: 'peso-25-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['356px', '489px', '17px', '25px', 'auto', 'auto'],
                            userClass: '',
                            id: 'peso-26-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['356px', '524px', '17px', '25px', 'auto', 'auto'],
                            userClass: '',
                            id: 'peso-27-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['356px', '559px', '17px', '25px', 'auto', 'auto'],
                            userClass: '',
                            id: 'peso-28-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['356px', '594px', '17px', '25px', 'auto', 'auto'],
                            userClass: '',
                            id: 'peso-29-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['356px', '629px', '17px', '25px', 'auto', 'auto'],
                            userClass: '',
                            id: 'peso-30-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['356px', '664px', '17px', '25px', 'auto', 'auto'],
                            userClass: '',
                            id: 'peso-31-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['356px', '699px', '17px', '25px', 'auto', 'auto'],
                            userClass: '',
                            id: 'peso-32-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['356px', '734px', '17px', '25px', 'auto', 'auto'],
                            userClass: '',
                            id: 'peso-33-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['356px', '769px', '17px', '25px', 'auto', 'auto'],
                            userClass: '',
                            id: 'peso-34-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['356px', '804px', '17px', '25px', 'auto', 'auto'],
                            userClass: '',
                            id: 'peso-35-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['356px', '838px', '17px', '25px', 'auto', 'auto'],
                            userClass: '',
                            id: 'peso-36-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            type: 'text',
                            rect: ['710px', '3px', '577px', '21px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px; line-height: 21px;\"><span style=\"font-size: 11px;\">PLAN, SET TARGETS &amp; OTHER INPUTS</span></p>',
                            id: 'Text3Copy10',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(255,255,255,1)', '300', 'none', 'normal', 'break-word', '']
                        },
                        {
                            rect: ['1014px', '50px', '275px', '30px', 'auto', 'auto'],
                            userClass: 'textbox2-6-output',
                            id: 'textbox2-6-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['1014px', '85px', '275px', '30px', 'auto', 'auto'],
                            userClass: 'textbox2-7-output',
                            id: 'textbox2-7-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['1014px', '120px', '275px', '30px', 'auto', 'auto'],
                            userClass: 'textbox2-8-output',
                            id: 'textbox2-8-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['1014px', '155px', '275px', '30px', 'auto', 'auto'],
                            userClass: 'textbox2-9-output',
                            id: 'textbox2-9-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['1014px', '190px', '275px', '30px', 'auto', 'auto'],
                            userClass: 'textbox2-10-output',
                            id: 'textbox2-10-output',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            type: 'image',
                            id: 'Artboard1',
                            rect: ['6px', '0px', '31px', '236px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Artboard1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'Artboard2',
                            rect: ['6px', '435px', '31px', '239px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Artboard2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'Artboard3',
                            rect: ['308px', '414px', '31px', '274px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Artboard3.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'integrated-framework-logo-white-small2',
                            rect: ['20px', '-71px', '109px', '68px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/integrated-framework-logo-white-small.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1300px', '867px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "footer": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Rectangle5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '1280px', '180px', 'auto', 'auto'],
                            fill: ['rgba(50,50,50,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['296px', '153px', '723px', '27px', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text2',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(198, 198, 198); font-weight: 300; font-size: 10px;\">Copyright © 2016 AMEC. All Rights Reserved.&nbsp;</span><span style=\"color: rgb(198, 198, 198); font-size: 10px;\">All Trademarks Acknowledged.</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['lato, sans-serif', [15, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['102px', '13px', '592px', '118px', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text2Copy',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(199, 199, 199); font-weight: 300; font-size: 22px;\">About AMEC</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(199, 199, 199); font-weight: 300;\">As the world’s largest professional body for communications research, media intelligence and insights, AMEC is the first point of call for communications and PR professionals to get expert, knowledge &amp; advice.</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['lato, sans-serif', [15, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['956px', '13px', '219px', '110px', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text2Copy3',
                            text: '<p style=\"margin: 0px; text-align: right;\"><span style=\"color: rgb(199, 199, 199); font-size: 22px; font-weight: 300;\">Keep in Touch</span><br></p><p style=\"margin: 0px; text-align: right;\">​</p><p style=\"margin: 0px; text-align: right;\">​<span style=\"color: rgb(199, 199, 199); font-weight: 300;\">Twitter @AMECORG</span></p><p style=\"margin: 0px; text-align: right;\"><span style=\"color: rgb(199, 199, 199); font-weight: 300;\">​YouTube.com/amecorgks</span></p><p style=\"margin: 0px; text-align: right;\"><span style=\"color: rgb(199, 199, 199); font-weight: 300;\">​</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['lato, sans-serif', [15, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280px', '180px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "download-pdf": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            userClass: '',
                            borderRadius: ['0px', '0px', '0px', '0px 0px'],
                            rect: ['0px', '0px', '123px', '30px', 'auto', 'auto'],
                            id: 'submit-box',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(45,164,26,1.00)']
                        },
                        {
                            userClass: '',
                            borderRadius: ['0px', '0px', '0px', '0px 0px'],
                            rect: ['0px', '25px', '123px', '5px', 'auto', 'auto'],
                            id: 'submit-boxCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(34,125,19,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['0px', '6px', '123px', '17px', 'auto', 'auto'],
                            align: 'center',
                            id: 'Text3',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255); font-weight: 900;\">DOWNLOAD PDF</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '123px', '30px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "information-box-2-1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '350px', '372px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,242,229,1.00)']
                        },
                        {
                            type: 'text',
                            align: 'left',
                            textStyle: ['', '', '18px', '', 'none'],
                            rect: ['15px', '14px', '325px', '115px', 'auto', 'auto'],
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'normal'],
                            userClass: 'information-text',
                            text: '<p style=\"margin: 0px;\"><span style=\"font-weight: 500;\">STRATEGY</span>&nbsp;define the plan to reach your key target audiences and crucially achieve the SMART communications objectives and pre-defined targets that you have set. What are the key highlights from your plan?\n\n​</p>',
                            id: 'Text2'
                        },
                        {
                            type: 'text',
                            align: 'left',
                            textStyle: ['', '', '18px', '', 'none'],
                            rect: ['15px', '120px', '325px', '19px', 'auto', 'auto'],
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'normal'],
                            userClass: 'information-text',
                            text: '<p style=\"margin: 0px;\"><span style=\"font-weight: 500;\">INPUTS</span> might include:</p>',
                            id: 'Text2Copy17'
                        },
                        {
                            type: 'text',
                            align: 'left',
                            textStyle: ['', '', '18px', '', 'none'],
                            rect: ['40px', '144px', '300px', '183px', 'auto', 'auto'],
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'normal'],
                            userClass: 'information-text',
                            text: '<p style=\"margin: 0px;\"><span style=\"font-weight: 500;\">Environmental scanning</span> – what environmental and contextual factors will affect your communication?</p><p style=\"margin: 0px;\">Having <span style=\"font-weight: 500;\">SMART objectives</span> – make sure your objectives are SMART in the context and circumstances<br></p><p style=\"margin: 0px;\"><span style=\"font-weight: 500;\">Budget </span>– set a budget and identify the  most cost-effective approaches</p><p style=\"margin: 0px;\"><span style=\"font-weight: 500;\">Resources</span> – what skills do you need? Are there potential partners?\n​</p>',
                            id: 'Text2Copy18'
                        },
                        {
                            type: 'text',
                            id: 'Text2Copy3',
                            text: '<p style=\"margin: 0px;\">For Further information <span style=\"text-decoration: underline;\">click here</span></p>',
                            cursor: 'pointer',
                            userClass: '',
                            textStyle: ['', '', '18px', '', 'none'],
                            font: ['lato, sans-serif', [14, 'px'], 'rgba(138,138,138,1)', '300', 'none', 'normal', 'break-word', 'normal'],
                            rect: ['15px', '335px', '325px', '20px', 'auto', 'auto'],
                            align: 'left'
                        },
                        {
                            rect: ['21px', '152px', '4px', '4px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(138,138,138,1.00)']
                        },
                        {
                            rect: ['21px', '206px', '4px', '4px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse4Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(138,138,138,1.00)']
                        },
                        {
                            rect: ['21px', '260px', '4px', '4px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse4Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(138,138,138,1.00)']
                        },
                        {
                            rect: ['21px', '296px', '4px', '4px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse4Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(138,138,138,1.00)']
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'tax-1',
                            rect: ['0px', '377px', null, null, 'auto', 'auto'],
                            id: 'tax-14'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '350px', '200px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid2282",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tax-14}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "taxonomy-1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [

                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '350px', '200px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "tax-1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-44px', '-51px', '438px', '506px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.8', '0.8']],
                            id: 'Taxonomy-updated-design-13',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/Taxonomy-updated-design-1.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '350px', '405px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid2278",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Taxonomy-updated-design-13}",
                            'block',
                            'block'
                        ]
                    ]
                }
            },
            "tax-2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-20px', '-42px', '389px', '838px', 'auto', 'auto'],
                            id: 'Taxonomy-updated-design-22',
                            transform: [[], [], [], ['0.9', '0.9']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Taxonomy-updated-design-2.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '350px', '754px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "tax-3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-19px', '-37px', '389px', '737px', 'auto', 'auto'],
                            id: 'Taxonomy-updated-design-32',
                            transform: [[], [], [], ['0.9', '0.9']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Taxonomy-updated-design-3.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '350px', '663px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "tax-4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'Taxonomy-updated-design-42',
                            rect: ['0px', '0px', '350px', '795px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Taxonomy-updated-design-4.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '350px', '794px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "tax-5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'Taxonomy-updated-design-52',
                            rect: ['0px', '0px', '350px', '832px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Taxonomy-updated-design-5.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '350px', '832px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "tax-6": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'Taxonomy-updated-design-62',
                            rect: ['0px', '0px', '350px', '721px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Taxonomy-updated-design-6.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '350px', '721px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("interactive-framework-edge_edgeActions.js");
})("EDGE-30417591");
