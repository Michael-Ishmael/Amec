/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         var editable1 = sym.getSymbol("q1").$("textbox1") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':630, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 155);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable1);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek1 = $('.textbox1-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:15px;" class="update-here1"></p>').appendTo(elek1).css({            'left': '0px', 'top': '0px', 'padding-left':'4px',
         });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update1(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update1()
         
             {
         
                 $('p.update-here1').html($('.textbox1 textarea').val());
         
             } // add input to textarea
         
         
         //1//////////////////////////////////////////////////////////////////
         //1//////////////////////////////////////////////////////////////////
         
         	 var editable12 = sym.getSymbol("q1").$("textbox1-2") // editable = the div update-it
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':630, 'wrap':'true', 'value':''});
         inputEditable .css ('font-size', 16);
         inputEditable .css ('width', '100%');
         inputEditable .css ('height', 155);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         inputEditable .appendTo(editable12);
         // add textarea to the div update-it with all the css and stuff
         
         
             var elek12 = $('.textbox1-2-output');
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:15px;" class="update-here1-2"></p>').appendTo(elek12).css({            'left': '0px', 'top': '0px', 'padding-left':'4px',
         });/// add textarea to placeholder
         
         
                 $('.submit').click(
                     function (){update12(); }
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
             function update12()
             {
                 $('p.update-here1-2').html($('.textbox1-2 textarea').val());
             } // add input to textarea
         
         //1-2//////////////////////////////////////////////////////////////////
         //1-2//////////////////////////////////////////////////////////////////
         
         var editable21 = sym.getSymbol("q2").$("textbox2-1") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':100, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable21);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek21 = $('.textbox2-1-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;" class="update-here2-1"></p>').appendTo(elek21).css({            'left': '0px', 'top': '0px', 'padding-left':'4px',
         });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update21(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update21()
         
             {
         
                 $('p.update-here2-1').html($('.textbox2-1 textarea').val());
         
             } // add input to textarea
         
         //2-1//////////////////////////////////////////////////////////////////
         //2-1//////////////////////////////////////////////////////////////////
         
         	 	 var editable22 = sym.getSymbol("q2").$("textbox2-2") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':100, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable22);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek22 = $('.textbox2-2-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here2-2"></p>').appendTo(elek22).css({            'left': '0px', 'top': '0px', 'padding-left':'4px',
         });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update22(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update22()
         
             {
         
                 $('p.update-here2-2').html($('.textbox2-2 textarea').val());
         
             } // add input to textarea
         
         //2-2//////////////////////////////////////////////////////////////////
         //2-2//////////////////////////////////////////////////////////////////
         
         	 var editable23 = sym.getSymbol("q2").$("textbox2-3") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':100, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable23);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek23 = $('.textbox2-3-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here2-3"></p>').appendTo(elek23).css({            'left': '0px', 'top': '0px', 'padding-left':'4px',
         });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update23(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update23()
         
             {
         
                 $('p.update-here2-3').html($('.textbox2-3 textarea').val());
         
             } // add input to textarea
         
         //2-3//////////////////////////////////////////////////////////////////
         //2-3//////////////////////////////////////////////////////////////////
         
         	 var editable24 = sym.getSymbol("q2").$("textbox2-4") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':100, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable24);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek24 = $('.textbox2-4-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here2-4"></p>').appendTo(elek24).css({            'left': '0px', 'top': '0px', 'padding-left':'4px',
         });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update24(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update24()
         
             {
         
                 $('p.update-here2-4').html($('.textbox2-4 textarea').val());
         
             } // add input to textarea
         
         //2-4//////////////////////////////////////////////////////////////////
         //2-4//////////////////////////////////////////////////////////////////
         
         var editable25 = sym.getSymbol("q2").$("textbox2-5") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':100, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable25);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek25 = $('.textbox2-5-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here2-5"></p>').appendTo(elek25).css({            'left': '0px', 'top': '0px', 'padding-left':'4px',
         });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update25(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update25()
         
             {
         
                 $('p.update-here2-5').html($('.textbox2-5 textarea').val());
         
             } // add input to textarea
         
         //2-5//////////////////////////////////////////////////////////////////
         //2-5//////////////////////////////////////////////////////////////////
         
         	 var editable26 = sym.getSymbol("q2").$("textbox2-6") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':100, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable26);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek26 = $('.textbox2-6-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here2-6"></p>').appendTo(elek26).css({            'left': '0px', 'top': '0px', 'padding-left':'4px',
         });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update26(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update26()
         
             {
         
                 $('p.update-here2-6').html($('.textbox2-6 textarea').val());
         
             } // add input to textarea
         
         //2-6//////////////////////////////////////////////////////////////////
         //2-6//////////////////////////////////////////////////////////////////
         
         var editable27 = sym.getSymbol("q2").$("textbox2-7") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':100, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable27);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek27 = $('.textbox2-7-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here2-7"></p>').appendTo(elek27).css({            'left': '0px', 'top': '0px', 'padding-left':'4px',
         });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update27(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update27()
         
             {
         
                 $('p.update-here2-7').html($('.textbox2-7 textarea').val());
         
             } // add input to textarea
         
         //2-7//////////////////////////////////////////////////////////////////
         //2-7//////////////////////////////////////////////////////////////////
         
         var editable28 = sym.getSymbol("q2").$("textbox2-8") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':100, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable28);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek28 = $('.textbox2-8-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here2-8"></p>').appendTo(elek28).css({            'left': '0px', 'top': '0px', 'padding-left':'4px',
         });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update28(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update28()
         
             {
         
                 $('p.update-here2-8').html($('.textbox2-8 textarea').val());
         
             } // add input to textarea
         
         //2-8//////////////////////////////////////////////////////////////////
         //2-8//////////////////////////////////////////////////////////////////
         
         	var editable29 = sym.getSymbol("q2").$("textbox2-9") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':100, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable29);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek29 = $('.textbox2-9-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here2-9"></p>').appendTo(elek29).css({            'left': '0px', 'top': '0px', 'padding-left':'4px',
         });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update29(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update29()
         
             {
         
                 $('p.update-here2-9').html($('.textbox2-9 textarea').val());
         
             } // add input to textarea
         
         //2-9//////////////////////////////////////////////////////////////////
         //2-9////////////////////////////////////////////////////////////////// 
         
         var editable210 = sym.getSymbol("q2").$("textbox2-10") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':100, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable210);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek210 = $('.textbox2-10-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here2-10"></p>').appendTo(elek210).css({            'left': '0px', 'top': '0px', 'padding-left':'4px',
         });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update210(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update210()
         
             {
         
                 $('p.update-here2-10').html($('.textbox2-10 textarea').val());
         
             } // add input to textarea
         
         //2-10//////////////////////////////////////////////////////////////////
         //2-10//////////////////////////////////////////////////////////////////
         
         var editable3 = sym.getSymbol("q3").$("textbox3") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':60, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable3);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek3 = $('.textbox3-1-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here3"></p>').appendTo(elek3).css({            'left': '0px', 'top': '0px', 'padding-left':'4px',
         });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update3(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update3()
         
             {
         
                 $('p.update-here3').html($('.textbox3 textarea').val());
         
             } // add input to textarea
         
         
         //3//////////////////////////////////////////////////////////////////
         //3//////////////////////////////////////////////////////////////////
         
         	 var editable32 = sym.getSymbol("q3").$("textbox3-2") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':60, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable32);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek32 = $('.textbox3-2-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here3-2"></p>').appendTo(elek32).css({            'left': '0px', 'top': '0px', 'padding-left':'4px',
         });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update32(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update32()
         
             {
         
                 $('p.update-here3-2').html($('.textbox3-2 textarea').val());
         
             } // add input to textarea
         
         //3-2//////////////////////////////////////////////////////////////////
         //3-2//////////////////////////////////////////////////////////////////
         
         	 var editable33 = sym.getSymbol("q3").$("textbox3-3") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':60, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable33);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek33 = $('.textbox3-3-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here3-3"></p>').appendTo(elek33).css({            'left': '0px', 'top': '0px', 'padding-left':'4px',
         });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update33(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update33()
         
             {
         
                 $('p.update-here3-3').html($('.textbox3-3 textarea').val());
         
             } // add input to textarea
         
         //3-3//////////////////////////////////////////////////////////////////
         //3-3//////////////////////////////////////////////////////////////////
         
         	 var editable34 = sym.getSymbol("q3").$("textbox3-4") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':60, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable34);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek34 = $('.textbox3-4-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here3-4"></p>').appendTo(elek34).css({            'left': '0px', 'top': '0px', 'padding-left':'4px',
         });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update34(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update34()
         
             {
         
                 $('p.update-here3-4').html($('.textbox3-4 textarea').val());
         
             } // add input to textarea
         
         //3-4//////////////////////////////////////////////////////////////////
         //3-4//////////////////////////////////////////////////////////////////
         
         	 var editable35 = sym.getSymbol("q3").$("textbox3-5") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':60, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable35);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek35 = $('.textbox3-5-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here3-5"></p>').appendTo(elek35).css({            'left': '0px', 'top': '0px', 'padding-left':'4px',
         });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update35(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update35()
         
             {
         
                 $('p.update-here3-5').html($('.textbox3-5 textarea').val());
         
             } // add input to textarea
         
         //3-5//////////////////////////////////////////////////////////////////
         //3-5//////////////////////////////////////////////////////////////////
         
         	 var editable36 = sym.getSymbol("q3").$("textbox3-6") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':60, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable36);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek36 = $('.textbox3-6-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here3-6"></p>').appendTo(elek36).css({            'left': '0px', 'top': '0px', 'padding-left':'4px',
         });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update36(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update36()
         
             {
         
                 $('p.update-here3-6').html($('.textbox3-6 textarea').val());
         
             } // add input to textarea
         
         //3-6//////////////////////////////////////////////////////////////////
         //3-6//////////////////////////////////////////////////////////////////
         
         	 var editable37 = sym.getSymbol("q3").$("textbox3-7") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':60, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable37);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek37 = $('.textbox3-7-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here3-7"></p>').appendTo(elek37).css({            'left': '0px', 'top': '0px', 'padding-left':'4px',
         });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update37(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update37()
         
             {
         
                 $('p.update-here3-7').html($('.textbox3-7 textarea').val());
         
             } // add input to textarea
         
         //3-7//////////////////////////////////////////////////////////////////
         //3-7//////////////////////////////////////////////////////////////////
         
         	 var editable38 = sym.getSymbol("q3").$("textbox3-8") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':60, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable38);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek38 = $('.textbox3-8-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here3-8"></p>').appendTo(elek38).css({            'left': '0px', 'top': '0px', 'padding-left':'4px',
         });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update38(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update38()
         
             {
         
                 $('p.update-here3-8').html($('.textbox3-8 textarea').val());
         
             } // add input to textarea
         
         //3-8//////////////////////////////////////////////////////////////////
         //3-8//////////////////////////////////////////////////////////////////
         
         	 var editable39 = sym.getSymbol("q3").$("textbox3-9") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':60, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable39);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek39 = $('.textbox3-9-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here3-9"></p>').appendTo(elek39).css({            'left': '0px', 'top': '0px', 'padding-left':'4px',
         });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update39(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update39()
         
             {
         
                 $('p.update-here3-9').html($('.textbox3-9 textarea').val());
         
             } // add input to textarea
         
         //3-9//////////////////////////////////////////////////////////////////
         //3-9//////////////////////////////////////////////////////////////////
         
         	 var editable310 = sym.getSymbol("q3").$("textbox3-10") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':60, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable310);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek310 = $('.textbox3-10-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here3-10"></p>').appendTo(elek310).css({            'left': '0px', 'top': '0px', 'padding-left':'4px',
         });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update310(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update310()
         
             {
         
                 $('p.update-here3-10').html($('.textbox3-10 textarea').val());
         
             } // add input to textarea
         
         //3-10//////////////////////////////////////////////////////////////////
         //3-10//////////////////////////////////////////////////////////////////
         
         	 var editable311 = sym.getSymbol("q3").$("textbox3-11") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':60, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable311);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek311 = $('.textbox3-11-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here3-11"></p>').appendTo(elek311).css({            'left': '0px', 'top': '0px', 'padding-left':'4px',
         });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update311(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update311()
         
             {
         
                 $('p.update-here3-11').html($('.textbox3-11 textarea').val());
         
             } // add input to textarea
         
         //3-11//////////////////////////////////////////////////////////////////
         //3-11//////////////////////////////////////////////////////////////////
         
         	 var editable312 = sym.getSymbol("q3").$("textbox3-12") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':60, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable312);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek312 = $('.textbox3-12-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here3-12"></p>').appendTo(elek312).css({            'left': '0px', 'top': '0px', 'padding-left':'4px',
         });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update312(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update312()
         
             {
         
                 $('p.update-here3-12').html($('.textbox3-12 textarea').val());
         
             } // add input to textarea
         
         //3-12//////////////////////////////////////////////////////////////////
         //3-12//////////////////////////////////////////////////////////////////
         
         	  var editable313 = sym.getSymbol("q3").$("textbox3-13") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':60, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable313);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek313 = $('.textbox3-13-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here3-13"></p>').appendTo(elek313).css({            'left': '0px', 'top': '0px', 'padding-left':'4px',
         });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update313(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update313()
         
             {
         
                 $('p.update-here3-13').html($('.textbox3-13 textarea').val());
         
             } // add input to textarea
         
         //3-13//////////////////////////////////////////////////////////////////
         //3-13//////////////////////////////////////////////////////////////////
         
         	  var editable314 = sym.getSymbol("q3").$("textbox3-14") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':60, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable314);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek314 = $('.textbox3-14-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here3-14"></p>').appendTo(elek314).css({            'left': '0px', 'top': '0px', 'padding-left':'4px',
         });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update314(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update314()
         
             {
         
                 $('p.update-here3-14').html($('.textbox3-14 textarea').val());
         
             } // add input to textarea
         
         //3-14//////////////////////////////////////////////////////////////////
         //3-14//////////////////////////////////////////////////////////////////
         
         	 	  var editable315 = sym.getSymbol("q3").$("textbox3-15") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':60, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable315);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek315 = $('.textbox3-15-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here3-15"></p>').appendTo(elek315).css({            'left': '0px', 'top': '0px', 'padding-left':'4px',
         });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update315(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update315()
         
             {
         
                 $('p.update-here3-15').html($('.textbox3-15 textarea').val());
         
             } // add input to textarea
         
         //3-15//////////////////////////////////////////////////////////////////
         //3-15//////////////////////////////////////////////////////////////////
         
          	  var editable316 = sym.getSymbol("q3").$("textbox3-16") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':60, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable316);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek316 = $('.textbox3-16-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here3-16"></p>').appendTo(elek316).css({            'left': '0px', 'top': '0px', 'padding-left':'4px',
         });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update316(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update316()
         
             {
         
                 $('p.update-here3-16').html($('.textbox3-16 textarea').val());
         
             } // add input to textarea
         
         //3-16//////////////////////////////////////////////////////////////////
         //3-16//////////////////////////////////////////////////////////////////
         
         
         var editable41 = sym.getSymbol("q4").$("textbox4-1") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':60, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable41);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek41 = $('.textbox4-1-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here4-1"></p>').appendTo(elek41).css({            'left': '0px', 'top': '0px', 'padding-left':'4px',
         });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update41(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update41()
         
             {
         
                 $('p.update-here4-1').html($('.textbox4-1 textarea').val());
         
             } // add input to textarea
         
         //4-1//////////////////////////////////////////////////////////////////
         //4-1//////////////////////////////////////////////////////////////////
         
         var editable42 = sym.getSymbol("q4").$("textbox4-2") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':60, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable42);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek42 = $('.textbox4-2-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here4-2"></p>').appendTo(elek42).css({            'left': '0px', 'top': '0px', 'padding-left':'4px',
         });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update42(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update42()
         
             {
         
                 $('p.update-here4-2').html($('.textbox4-2 textarea').val());
         
             } // add input to textarea
         
         //4-2//////////////////////////////////////////////////////////////////
         //4-2//////////////////////////////////////////////////////////////////
         
         var editable43 = sym.getSymbol("q4").$("textbox4-3") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':60, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable43);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek43 = $('.textbox4-3-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here4-3"></p>').appendTo(elek43).css({            'left': '0px', 'top': '0px', 'padding-left':'4px',
         });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update43(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update43()
         
             {
         
                 $('p.update-here4-3').html($('.textbox4-3 textarea').val());
         
             } // add input to textarea
         
         //4-3//////////////////////////////////////////////////////////////////
         //4-3//////////////////////////////////////////////////////////////////
         
         	 var editable44 = sym.getSymbol("q4").$("textbox4-4") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':60, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable44);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek44 = $('.textbox4-4-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here4-4"></p>').appendTo(elek44).css({            'left': '0px', 'top': '0px', 'padding-left':'4px',
         });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update44(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update44()
         
             {
         
                 $('p.update-here4-4').html($('.textbox4-4 textarea').val());
         
             } // add input to textarea
         
         //4-4//////////////////////////////////////////////////////////////////
         //4-4//////////////////////////////////////////////////////////////////
         
         	 var editable45 = sym.getSymbol("q4").$("textbox4-5") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':60, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable45);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek45 = $('.textbox4-5-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here4-5"></p>').appendTo(elek45).css({            'left': '0px', 'top': '0px', 'padding-left':'4px',
         });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update45(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update45()
         
             {
         
                 $('p.update-here4-5').html($('.textbox4-5 textarea').val());
         
             } // add input to textarea
         
         //4-5//////////////////////////////////////////////////////////////////
         //4-5//////////////////////////////////////////////////////////////////
         
         	 var editable46 = sym.getSymbol("q4").$("textbox4-6") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':60, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable46);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek46 = $('.textbox4-6-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here4-6"></p>').appendTo(elek46).css({            'left': '0px', 'top': '0px', 'padding-left':'4px',
         });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update46(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update46()
         
             {
         
                 $('p.update-here4-6').html($('.textbox4-6 textarea').val());
         
             } // add input to textarea
         
         //4-6//////////////////////////////////////////////////////////////////
         //4-6//////////////////////////////////////////////////////////////////
         
         	 var editable47 = sym.getSymbol("q4").$("textbox4-7") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':60, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable47);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek47 = $('.textbox4-7-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here4-7"></p>').appendTo(elek47).css({            'left': '0px', 'top': '0px', 'padding-left':'4px',
         });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update47(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update47()
         
             {
         
                 $('p.update-here4-7').html($('.textbox4-7 textarea').val());
         
             } // add input to textarea
         
         //4-7//////////////////////////////////////////////////////////////////
         //4-7//////////////////////////////////////////////////////////////////
         
         	 var editable48 = sym.getSymbol("q4").$("textbox4-8") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':60, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable48);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek48 = $('.textbox4-8-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here4-8"></p>').appendTo(elek48).css({            'left': '0px', 'top': '0px', 'padding-left':'4px',
         });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update48(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update48()
         
             {
         
                 $('p.update-here4-8').html($('.textbox4-8 textarea').val());
         
             } // add input to textarea
         
         //4-8//////////////////////////////////////////////////////////////////
         //4-8//////////////////////////////////////////////////////////////////
         
         	 var editable49 = sym.getSymbol("q4").$("textbox4-9") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':60, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable49);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek49 = $('.textbox4-9-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here4-9"></p>').appendTo(elek49).css({            'left': '0px', 'top': '0px', 'padding-left':'4px',
         });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update49(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update49()
         
             {
         
                 $('p.update-here4-9').html($('.textbox4-9 textarea').val());
         
             } // add input to textarea
         
         //4-9//////////////////////////////////////////////////////////////////
         //4-9//////////////////////////////////////////////////////////////////
         
         	 var editable410 = sym.getSymbol("q4").$("textbox4-10") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':60, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable410);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek410 = $('.textbox4-10-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here4-10"></p>').appendTo(elek410).css({            'left': '0px', 'top': '0px', 'padding-left':'4px',
         });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update410(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update410()
         
             {
         
                 $('p.update-here4-10').html($('.textbox4-10 textarea').val());
         
             } // add input to textarea
         
         //4-10//////////////////////////////////////////////////////////////////
         //4-10//////////////////////////////////////////////////////////////////
         
         	 var editable411 = sym.getSymbol("q4").$("textbox4-11") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':60, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable411);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek411 = $('.textbox4-11-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here4-11"></p>').appendTo(elek411).css({            'left': '0px', 'top': '0px', 'padding-left':'4px',
         });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update411(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update411()
         
             {
         
                 $('p.update-here4-11').html($('.textbox4-11 textarea').val());
         
             } // add input to textarea
         
         //4-11//////////////////////////////////////////////////////////////////
         //4-11//////////////////////////////////////////////////////////////////
         
         	 var editable412 = sym.getSymbol("q4").$("textbox4-12") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':60, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable412);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek412 = $('.textbox4-12-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here4-12"></p>').appendTo(elek412).css({            'left': '0px', 'top': '0px', 'padding-left':'4px',
         });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update412(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update412()
         
             {
         
                 $('p.update-here4-12').html($('.textbox4-12 textarea').val());
         
             } // add input to textarea
         
         //4-12//////////////////////////////////////////////////////////////////
         //4-12//////////////////////////////////////////////////////////////////
         
         	  var editable413 = sym.getSymbol("q4").$("textbox4-13") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':60, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable413);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek413 = $('.textbox4-13-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here4-13"></p>').appendTo(elek413).css({            'left': '0px', 'top': '0px', 'padding-left':'4px',
         });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update413(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update413()
         
             {
         
                 $('p.update-here4-13').html($('.textbox4-13 textarea').val());
         
             } // add input to textarea
         
         //4-13//////////////////////////////////////////////////////////////////
         //4-13//////////////////////////////////////////////////////////////////
         
         	  var editable414 = sym.getSymbol("q4").$("textbox4-14") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':60, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable414);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek414 = $('.textbox4-14-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here4-14"></p>').appendTo(elek414).css({            'left': '0px', 'top': '0px', 'padding-left':'4px',
         });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update414(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update414()
         
             {
         
                 $('p.update-here4-14').html($('.textbox4-14 textarea').val());
         
             } // add input to textarea
         
         //4-14//////////////////////////////////////////////////////////////////
         //4-14//////////////////////////////////////////////////////////////////
         
         	  var editable415 = sym.getSymbol("q4").$("textbox4-15") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':60, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable415);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek415 = $('.textbox4-15-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here4-15"></p>').appendTo(elek415).css({            'left': '0px', 'top': '0px', 'padding-left':'4px',
         });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update415(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update415()
         
             {
         
                 $('p.update-here4-15').html($('.textbox4-15 textarea').val());
         
             } // add input to textarea
         
         //4-15//////////////////////////////////////////////////////////////////
         //4-15//////////////////////////////////////////////////////////////////
         
          var editable416 = sym.getSymbol("q4").$("textbox4-16") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':60, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable416);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek416 = $('.textbox4-16-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here4-16"></p>').appendTo(elek416).css({            'left': '0px', 'top': '0px', 'padding-left':'4px',
         });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update416(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update416()
         
             {
         
                 $('p.update-here4-16').html($('.textbox4-16 textarea').val());
         
             } // add input to textarea
         
         //4-16//////////////////////////////////////////////////////////////////
         //4-16//////////////////////////////////////////////////////////////////
         
         	 var editable51 = sym.getSymbol("q5").$("textbox5-1") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':80, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable51);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek51 = $('.textbox5-1-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here5-1"></p>').appendTo(elek51).css({
         
                     'left': '0px',
         
                     'top': '-30px',
                     'padding-left':'4px',
         
             });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update51(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update51()
         
             {
         
                 $('p.update-here5-1').html($('.textbox5-1 textarea').val());
         
             } // add input to textarea
         
         //5-1//////////////////////////////////////////////////////////////////
         //5-1//////////////////////////////////////////////////////////////////
         
         	 var editable52 = sym.getSymbol("q5").$("textbox5-2") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':80, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable52);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek52 = $('.textbox5-1-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here5-2"></p>').appendTo(elek52).css({
         
                     'left': '0px',
         
                     'top': '0px',
                     'padding-left':'4px',
         
             });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update52(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update52()
         
             {
         
                 $('p.update-here5-2').html($('.textbox5-2 textarea').val());
         
             } // add input to textarea
         
         //5-2//////////////////////////////////////////////////////////////////
         //5-2//////////////////////////////////////////////////////////////////
         
         	 var editable53 = sym.getSymbol("q5").$("textbox5-3") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':80, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable53);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek53 = $('.textbox5-1-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here5-3"></p>').appendTo(elek53).css({
         
                     'left': '0px',
         
                     'top': '-30px',
                     'padding-left':'4px',
         
             });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update53(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update53()
         
             {
         
                 $('p.update-here5-3').html($('.textbox5-3 textarea').val());
         
             } // add input to textarea
         
         //5-3//////////////////////////////////////////////////////////////////
         //5-3//////////////////////////////////////////////////////////////////
         
         	 var editable54 = sym.getSymbol("q5").$("textbox5-4") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':80, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable54);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek54 = $('.textbox5-1-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here5-4"></p>').appendTo(elek54).css({
         
                     'left': '0px',
         
                     'top': '-30px',
                     'padding-left':'4px',
         
             });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update54(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update54()
         
             {
         
                 $('p.update-here5-4').html($('.textbox5-4 textarea').val());
         
             } // add input to textarea
         
         //5-4//////////////////////////////////////////////////////////////////
         //5-4//////////////////////////////////////////////////////////////////
         
         	 var editable55 = sym.getSymbol("q5").$("textbox5-5") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':80, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable55);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek55 = $('.textbox5-1-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here5-5"></p>').appendTo(elek55).css({
         
                     'left': '0px',
         
                     'top': '-30px',
                     'padding-left':'4px',
         
             });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update55(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update55()
         
             {
         
                 $('p.update-here5-5').html($('.textbox5-5 textarea').val());
         
             } // add input to textarea
         
         //5-5//////////////////////////////////////////////////////////////////
         //5-5//////////////////////////////////////////////////////////////////
         
         	 var editable56 = sym.getSymbol("q5").$("textbox5-6") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':80, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable56);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek56 = $('.textbox5-1-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here5-6"></p>').appendTo(elek56).css({
         
                     'left': '0px',
         
                     'top': '-30px',
                     'padding-left':'4px',
         
             });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update56(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update56()
         
             {
         
                 $('p.update-here5-6').html($('.textbox5-6 textarea').val());
         
             } // add input to textarea
         
         //5-6//////////////////////////////////////////////////////////////////
         //5-6//////////////////////////////////////////////////////////////////
         
         	 var editable57 = sym.getSymbol("q5").$("textbox5-7") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':80, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable57);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek57 = $('.textbox5-1-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here5-7"></p>').appendTo(elek57).css({
         
                     'left': '0px',
         
                     'top': '-30px',
                     'padding-left':'4px',
         
             });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update57(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update57()
         
             {
         
                 $('p.update-here5-7').html($('.textbox5-7 textarea').val());
         
             } // add input to textarea
         
         //5-7//////////////////////////////////////////////////////////////////
         //5-7//////////////////////////////////////////////////////////////////
         
         	 var editable58 = sym.getSymbol("q5").$("textbox5-8") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':80, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable58);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek58 = $('.textbox5-1-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here5-8"></p>').appendTo(elek58).css({
         
                     'left': '0px',
         
                     'top': '-30px',
                     'padding-left':'4px',
         
             });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update58(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update58()
         
             {
         
                 $('p.update-here5-8').html($('.textbox5-8 textarea').val());
         
             } // add input to textarea
         
         //5-8//////////////////////////////////////////////////////////////////
         //5-8//////////////////////////////////////////////////////////////////
         
         	 var editable59 = sym.getSymbol("q5").$("textbox5-9") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':80, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable59);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek59 = $('.textbox5-1-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here5-9"></p>').appendTo(elek59).css({
         
                     'left': '0px',
         
                     'top': '-30px',
                     'padding-left':'4px',
         
             });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update59(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update59()
         
             {
         
                 $('p.update-here5-9').html($('.textbox5-9 textarea').val());
         
             } // add input to textarea
         
         //5-9//////////////////////////////////////////////////////////////////
         //5-9//////////////////////////////////////////////////////////////////
         
         	 var editable510 = sym.getSymbol("q5").$("textbox5-10") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':80, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable510);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek510 = $('.textbox5-1-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here5-10"></p>').appendTo(elek510).css({
         
                     'left': '0px',
         
                     'top': '-30px',
                     'padding-left':'4px',
         
             });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update510(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update510()
         
             {
         
                 $('p.update-here5-10').html($('.textbox5-10 textarea').val());
         
             } // add input to textarea
         
         //5-10//////////////////////////////////////////////////////////////////
         //5-10//////////////////////////////////////////////////////////////////
         
         	 var editable61 = sym.getSymbol("q6").$("textbox6-1") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':80, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable61);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek61 = $('.textbox6-1-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here6-1"></p>').appendTo(elek61).css({
         
                     'left': '0px',
         
                     'top': '-30px',
                     'padding-left':'4px',
         
             });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update61(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update61()
         
             {
         
                 $('p.update-here6-1').html($('.textbox6-1 textarea').val());
         
             } // add input to textarea
         
         //6-1//////////////////////////////////////////////////////////////////
         //6-1//////////////////////////////////////////////////////////////////
         
         	 var editable62 = sym.getSymbol("q6").$("textbox6-2") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':80, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable62);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek62 = $('.textbox6-1-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here6-2"></p>').appendTo(elek62).css({
         
                     'left': '0px',
         
                     'top': '0px',
                     'padding-left':'4px',
         
             });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update62(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update62()
         
             {
         
                 $('p.update-here6-2').html($('.textbox6-2 textarea').val());
         
             } // add input to textarea
         
         //6-2//////////////////////////////////////////////////////////////////
         //6-2//////////////////////////////////////////////////////////////////
         
         	 var editable63 = sym.getSymbol("q6").$("textbox6-3") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':80, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable63);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek63 = $('.textbox6-1-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here6-3"></p>').appendTo(elek63).css({
         
                     'left': '0px',
         
                     'top': '-30px',
                     'padding-left':'4px',
         
             });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update63(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update63()
         
             {
         
                 $('p.update-here6-3').html($('.textbox6-3 textarea').val());
         
             } // add input to textarea
         
         //6-3//////////////////////////////////////////////////////////////////
         //6-3//////////////////////////////////////////////////////////////////
         
         	 var editable64 = sym.getSymbol("q6").$("textbox6-4") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':80, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable64);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek64 = $('.textbox6-1-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here6-4"></p>').appendTo(elek64).css({
         
                     'left': '0px',
         
                     'top': '-30px',
                     'padding-left':'4px',
         
             });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update64(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update64()
         
             {
         
                 $('p.update-here6-4').html($('.textbox6-4 textarea').val());
         
             } // add input to textarea
         
         //6-4//////////////////////////////////////////////////////////////////
         //6-4//////////////////////////////////////////////////////////////////
         
         	 var editable65 = sym.getSymbol("q6").$("textbox6-5") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':80, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable65);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek65 = $('.textbox6-1-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here6-5"></p>').appendTo(elek65).css({
         
                     'left': '0px',
         
                     'top': '-30px',
                     'padding-left':'4px',
         
             });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update65(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update65()
         
             {
         
                 $('p.update-here6-5').html($('.textbox6-5 textarea').val());
         
             } // add input to textarea
         
         //6-5//////////////////////////////////////////////////////////////////
         //6-5//////////////////////////////////////////////////////////////////
         
         	 var editable66 = sym.getSymbol("q6").$("textbox6-6") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':80, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable66);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek66 = $('.textbox6-1-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here6-6"></p>').appendTo(elek66).css({
         
                     'left': '0px',
         
                     'top': '-30px',
                     'padding-left':'4px',
         
             });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update66(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update66()
         
             {
         
                 $('p.update-here6-6').html($('.textbox6-6 textarea').val());
         
             } // add input to textarea
         
         //6-6//////////////////////////////////////////////////////////////////
         //6-6//////////////////////////////////////////////////////////////////
         
         	 var editable67 = sym.getSymbol("q6").$("textbox6-7") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':80, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable67);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek67 = $('.textbox6-1-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here6-7"></p>').appendTo(elek67).css({
         
                     'left': '0px',
         
                     'top': '-30px',
                     'padding-left':'4px',
         
             });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update67(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update67()
         
             {
         
                 $('p.update-here6-7').html($('.textbox6-7 textarea').val());
         
             } // add input to textarea
         
         //6-7//////////////////////////////////////////////////////////////////
         //6-7//////////////////////////////////////////////////////////////////
         
         	 var editable68 = sym.getSymbol("q6").$("textbox6-8") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':80, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable68);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek68 = $('.textbox6-1-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here6-8"></p>').appendTo(elek68).css({
         
                     'left': '0px',
         
                     'top': '-30px',
                     'padding-left':'4px',
         
             });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update68(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update68()
         
             {
         
                 $('p.update-here6-8').html($('.textbox6-8 textarea').val());
         
             } // add input to textarea
         
         //6-8//////////////////////////////////////////////////////////////////
         //6-8//////////////////////////////////////////////////////////////////
         
         	 var editable69 = sym.getSymbol("q6").$("textbox6-9") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':80, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable69);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek69 = $('.textbox6-1-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here6-9"></p>').appendTo(elek69).css({
         
                     'left': '0px',
         
                     'top': '-30px',
                     'padding-left':'4px',
         
             });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update69(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update69()
         
             {
         
                 $('p.update-here6-9').html($('.textbox6-9 textarea').val());
         
             } // add input to textarea
         
         //6-9//////////////////////////////////////////////////////////////////
         //6-9//////////////////////////////////////////////////////////////////
         
         	 var editable610 = sym.getSymbol("q6").$("textbox6-10") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':80, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable610);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek610 = $('.textbox6-1-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here6-10"></p>').appendTo(elek610).css({
         
                     'left': '0px',
         
                     'top': '-30px',
                     'padding-left':'4px',
         
             });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update610(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update610()
         
             {
         
                 $('p.update-here6-10').html($('.textbox6-10 textarea').val());
         
             } // add input to textarea
         
         //6-10//////////////////////////////////////////////////////////////////
         //6-10//////////////////////////////////////////////////////////////////
         
         	 var editable7 = sym.getSymbol("q7").$("textbox7") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':80, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable7);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek7 = $('.textbox7-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here7"></p>').appendTo(elek7).css({            'left': '0px', 'top': '0px', 'padding-left':'4px',
         });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update7(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update7()
         
             {
         
                 $('p.update-here7').html($('.textbox7 textarea').val());
         
             } // add input to textarea
         
         
         //7//////////////////////////////////////////////////////////////////
         //7//////////////////////////////////////////////////////////////////
         
         	 var editable72 = sym.getSymbol("q7").$("textbox7-2") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':80, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable72);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek72 = $('.textbox7-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here7-2"></p>').appendTo(elek72).css({
         
                     'left': '0px',
         
                     'top': '0px',
                     'padding-left':'4px',
         
             });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update72(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update72()
         
             {
         
                 $('p.update-here7-2').html($('.textbox7-2 textarea').val());
         
             } // add input to textarea
         
         //7-2//////////////////////////////////////////////////////////////////
         //7-2//////////////////////////////////////////////////////////////////
         
         	 var editable73 = sym.getSymbol("q7").$("textbox7-3") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':80, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable73);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek73 = $('.textbox7-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here7-3"></p>').appendTo(elek73).css({
         
                     'left': '0px',
         
                     'top': '-30px',
                     'padding-left':'4px',
         
             });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update73(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update73()
         
             {
         
                 $('p.update-here7-3').html($('.textbox7-3 textarea').val());
         
             } // add input to textarea
         
         //7-3//////////////////////////////////////////////////////////////////
         //7-3//////////////////////////////////////////////////////////////////
         
         	 var editable74 = sym.getSymbol("q7").$("textbox7-4") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':80, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable74);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek74 = $('.textbox7-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here7-4"></p>').appendTo(elek74).css({
         
                     'left': '0px',
         
                     'top': '-30px',
                     'padding-left':'4px',
         
             });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update74(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update74()
         
             {
         
                 $('p.update-here7-4').html($('.textbox7-4 textarea').val());
         
             } // add input to textarea
         
         //7-4//////////////////////////////////////////////////////////////////
         //7-4//////////////////////////////////////////////////////////////////
         
         	 var editable75 = sym.getSymbol("q7").$("textbox7-5") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':80, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable75);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek75 = $('.textbox7-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here7-5"></p>').appendTo(elek75).css({
         
                     'left': '0px',
         
                     'top': '-30px',
                     'padding-left':'4px',
         
             });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update75(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update75()
         
             {
         
                 $('p.update-here7-5').html($('.textbox7-5 textarea').val());
         
             } // add input to textarea
         
         //7-5//////////////////////////////////////////////////////////////////
         //7-5//////////////////////////////////////////////////////////////////
         
         	 var editable76 = sym.getSymbol("q7").$("textbox7-6") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':80, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable76);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek76 = $('.textbox7-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here7-6"></p>').appendTo(elek76).css({
         
                     'left': '0px',
         
                     'top': '-30px',
                     'padding-left':'4px',
         
             });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update76(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update76()
         
             {
         
                 $('p.update-here7-6').html($('.textbox7-6 textarea').val());
         
             } // add input to textarea
         
         //7-6//////////////////////////////////////////////////////////////////
         //7-6//////////////////////////////////////////////////////////////////
         
         	 var editable77 = sym.getSymbol("q7").$("textbox7-7") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':80, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable77);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek77 = $('.textbox7-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here7-7"></p>').appendTo(elek77).css({
         
                     'left': '0px',
         
                     'top': '-30px',
                     'padding-left':'4px',
         
             });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update77(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update77()
         
             {
         
                 $('p.update-here7-7').html($('.textbox7-7 textarea').val());
         
             } // add input to textarea
         
         //7-7//////////////////////////////////////////////////////////////////
         //7-7//////////////////////////////////////////////////////////////////
         
         	 var editable78 = sym.getSymbol("q7").$("textbox7-8") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':80, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable78);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek78 = $('.textbox7-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here7-8"></p>').appendTo(elek78).css({
         
                     'left': '0px',
         
                     'top': '-30px',
                     'padding-left':'4px',
         
             });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update78(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update78()
         
             {
         
                 $('p.update-here7-8').html($('.textbox7-8 textarea').val());
         
             } // add input to textarea
         
         //7-8//////////////////////////////////////////////////////////////////
         //7-8//////////////////////////////////////////////////////////////////
         
         	 var editable79 = sym.getSymbol("q7").$("textbox7-9") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':80, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable79);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek79 = $('.textbox7-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here7-9"></p>').appendTo(elek79).css({
         
                     'left': '0px',
         
                     'top': '-30px',
                     'padding-left':'4px',
         
             });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update79(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update79()
         
             {
         
                 $('p.update-here7-9').html($('.textbox7-9 textarea').val());
         
             } // add input to textarea
         
         //7-9//////////////////////////////////////////////////////////////////
         //7-9//////////////////////////////////////////////////////////////////
         
         	 var editable710 = sym.getSymbol("q7").$("textbox7-10") // editable = the div update-it
         
         inputEditable = $('<textarea />').attr({'type':'text', 'name':'submit', 'maxlength':80, 'wrap':'true', 'value':''});
         
         inputEditable .css ('font-size', 16);
         
         inputEditable .css ('width', '100%');
         
         inputEditable .css ('height', 30);
         inputEditable .css ('resize', 'none');
         inputEditable .css ('border','none');
         
         inputEditable .appendTo(editable710);
         
         // add textarea to the div update-it with all the css and stuff
         
         
         
             var elek710 = $('.textbox7-output');
         
             $('<p style="font-family:lato, sans-serif;font-size:13px; color:#666666; line-height:13px;"  class="update-here7-10"></p>').appendTo(elek710).css({
         
                     'left': '0px',
         
                     'top': '-30px',
                     'padding-left':'4px',
         
             });/// add textarea to placeholder
         
         
         
                 $('.submit').click(
         
                     function (){update710(); }
         
                 ); // when clicking the div update run function update ( when clicked a button with class update )
         
         
         
             function update710()
         
             {
         
                 $('p.update-here7-10').html($('.textbox7-10 textarea').val());
         
             } // add input to textarea
         
         //7-10//////////////////////////////////////////////////////////////////
         //7-10//////////////////////////////////////////////////////////////////
         
         //PESO-1/////////////////////////////////////////////////////////////////
         ///////////////////////////////////////////////////////////////////////
         
         var PESOForm1 = '<form><input type="radio" name="PESO1" value="P"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm1 += '<input type="radio" name="PESO1" value="E"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm1 += '<input type="radio" name="PESO1" value="S"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm1 += '<input type="radio" name="PESO1" value="O"/></form>';
         
         
         sym.getSymbol("q3").$("peso-1").html(PESOForm1);
         
         $( 'input[name="PESO1"]' ).change( function(){
            var PESOChoice1 = this.value;
            sym.getSymbol("Framework").$("peso-1-output").html(PESOChoice1);
         });
         
         //PESO-2/////////////////////////////////////////////////////////////////
         ///////////////////////////////////////////////////////////////////////
         
         var PESOForm2 = '<form><input type="radio" name="PESO2" value="P"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm2 += '<input type="radio" name="PESO2" value="E"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm2 += '<input type="radio" name="PESO2" value="S"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm2 += '<input type="radio" name="PESO2" value="O"/></form>';
         
         
         sym.getSymbol("q3").$("peso-2").html(PESOForm2);
         
         $( 'input[name="PESO2"]' ).change( function(){
            var PESOChoice2 = this.value;
            sym.getSymbol("Framework").$("peso-2-output").html(PESOChoice2);
         });
         
         //PESO-3/////////////////////////////////////////////////////////////////
         ///////////////////////////////////////////////////////////////////////
         
         var PESOForm3 = '<form><input type="radio" name="PESO3" value="P"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm3 += '<input type="radio" name="PESO3" value="E"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm3 += '<input type="radio" name="PESO3" value="S"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm3 += '<input type="radio" name="PESO3" value="O"/></form>';
         
         
         sym.getSymbol("q3").$("peso-3").html(PESOForm3);
         
         $( 'input[name="PESO3"]' ).change( function(){
            var PESOChoice3 = this.value;
            sym.getSymbol("Framework").$("peso-3-output").html(PESOChoice3);
         });
         
         //PESO-4/////////////////////////////////////////////////////////////////
         ///////////////////////////////////////////////////////////////////////
         
         var PESOForm4 = '<form><input type="radio" name="PESO4" value="P"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm4 += '<input type="radio" name="PESO4" value="E"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm4 += '<input type="radio" name="PESO4" value="S"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm4 += '<input type="radio" name="PESO4" value="O"/></form>';
         
         
         sym.getSymbol("q3").$("peso-4").html(PESOForm4);
         
         $( 'input[name="PESO4"]' ).change( function(){
            var PESOChoice4 = this.value;
            sym.getSymbol("Framework").$("peso-4-output").html(PESOChoice4);
         });
         
         //PESO-5/////////////////////////////////////////////////////////////////
         ///////////////////////////////////////////////////////////////////////
         
         var PESOForm5 = '<form><input type="radio" name="PESO5" value="P"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm5 += '<input type="radio" name="PESO5" value="E"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm5 += '<input type="radio" name="PESO5" value="S"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm5 += '<input type="radio" name="PESO5" value="O"/></form>';
         
         
         sym.getSymbol("q3").$("peso-5").html(PESOForm5);
         
         $( 'input[name="PESO5"]' ).change( function(){
            var PESOChoice5 = this.value;
            sym.getSymbol("Framework").$("peso-5-output").html(PESOChoice5);
         });
         
         //PESO-6/////////////////////////////////////////////////////////////////
         ///////////////////////////////////////////////////////////////////////
         
         var PESOForm6 = '<form><input type="radio" name="PESO6" value="P"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm6 += '<input type="radio" name="PESO6" value="E"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm6 += '<input type="radio" name="PESO6" value="S"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm6 += '<input type="radio" name="PESO6" value="O"/></form>';
         
         
         sym.getSymbol("q3").$("peso-6").html(PESOForm6);
         
         $( 'input[name="PESO6"]' ).change( function(){
            var PESOChoice6 = this.value;
            sym.getSymbol("Framework").$("peso-6-output").html(PESOChoice6);
         });
         
         
         //PESO-7/////////////////////////////////////////////////////////////////
         ///////////////////////////////////////////////////////////////////////
         
         var PESOForm7 = '<form><input type="radio" name="PESO7" value="P"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm7 += '<input type="radio" name="PESO7" value="E"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm7 += '<input type="radio" name="PESO7" value="S"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm7 += '<input type="radio" name="PESO7" value="O"/></form>';
         
         
         sym.getSymbol("q3").$("peso-7").html(PESOForm7);
         
         $( 'input[name="PESO7"]' ).change( function(){
            var PESOChoice7 = this.value;
            sym.getSymbol("Framework").$("peso-7-output").html(PESOChoice7);
         });
         
         //PESO-8/////////////////////////////////////////////////////////////////
         ///////////////////////////////////////////////////////////////////////
         
         var PESOForm8 = '<form><input type="radio" name="PESO8" value="P"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm8 += '<input type="radio" name="PESO8" value="E"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm8 += '<input type="radio" name="PESO8" value="S"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm8 += '<input type="radio" name="PESO8" value="O"/></form>';
         
         
         sym.getSymbol("q3").$("peso-8").html(PESOForm8);
         
         $( 'input[name="PESO8"]' ).change( function(){
            var PESOChoice8 = this.value;
            sym.getSymbol("Framework").$("peso-8-output").html(PESOChoice8);
         });
         
         //PESO-9/////////////////////////////////////////////////////////////////
         ///////////////////////////////////////////////////////////////////////
         
         var PESOForm9 = '<form><input type="radio" name="PESO9" value="P"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm9 += '<input type="radio" name="PESO9" value="E"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm9 += '<input type="radio" name="PESO9" value="S"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm9 += '<input type="radio" name="PESO9" value="O"/></form>';
         
         
         sym.getSymbol("q3").$("peso-9").html(PESOForm9);
         
         $( 'input[name="PESO9"]' ).change( function(){
            var PESOChoice9 = this.value;
            sym.getSymbol("Framework").$("peso-9-output").html(PESOChoice9);
         });
         
         //PESO-10/////////////////////////////////////////////////////////////////
         ///////////////////////////////////////////////////////////////////////
         
         var PESOForm10 = '<form><input type="radio" name="PESO10" value="P"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm10 += '<input type="radio" name="PESO10" value="E"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm10 += '<input type="radio" name="PESO10" value="S"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm10 += '<input type="radio" name="PESO10" value="O"/></form>';
         
         
         sym.getSymbol("q3").$("peso-10").html(PESOForm10);
         
         $( 'input[name="PESO10"]' ).change( function(){
            var PESOChoice10 = this.value;
            sym.getSymbol("Framework").$("peso-10-output").html(PESOChoice10);
         });
         
         //PESO-11/////////////////////////////////////////////////////////////////
         ///////////////////////////////////////////////////////////////////////
         
         var PESOForm11 = '<form><input type="radio" name="PESO11" value="P"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm11 += '<input type="radio" name="PESO11" value="E"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm11 += '<input type="radio" name="PESO11" value="S"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm11 += '<input type="radio" name="PESO11" value="O"/></form>';
         
         
         sym.getSymbol("q3").$("peso-11").html(PESOForm11);
         
         $( 'input[name="PESO11"]' ).change( function(){
            var PESOChoice11 = this.value;
            sym.getSymbol("Framework").$("peso-11-output").html(PESOChoice11);
         });
         
         //PESO-12/////////////////////////////////////////////////////////////////
         ///////////////////////////////////////////////////////////////////////
         
         var PESOForm12 = '<form><input type="radio" name="PESO12" value="P"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm12 += '<input type="radio" name="PESO12" value="E"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm12 += '<input type="radio" name="PESO12" value="S"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm12 += '<input type="radio" name="PESO12" value="O"/></form>';
         
         
         sym.getSymbol("q3").$("peso-12").html(PESOForm12);
         
         $( 'input[name="PESO12"]' ).change( function(){
            var PESOChoice12 = this.value;
            sym.getSymbol("Framework").$("peso-12-output").html(PESOChoice12);
         });
         
         
         //PESO-13/////////////////////////////////////////////////////////////////
         ///////////////////////////////////////////////////////////////////////
         
         var PESOForm13 = '<form><input type="radio" name="PESO13" value="P"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm13 += '<input type="radio" name="PESO13" value="E"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm13 += '<input type="radio" name="PESO13" value="S"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm13 += '<input type="radio" name="PESO13" value="O"/></form>';
         
         
         sym.getSymbol("q3").$("peso-13").html(PESOForm13);
         
         $( 'input[name="PESO13"]' ).change( function(){
            var PESOChoice13 = this.value;
            sym.getSymbol("Framework").$("peso-13-output").html(PESOChoice13);
         });
         
         //PESO-14/////////////////////////////////////////////////////////////////
         ///////////////////////////////////////////////////////////////////////
         
         var PESOForm14 = '<form><input type="radio" name="PESO14" value="P"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm14 += '<input type="radio" name="PESO14" value="E"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm14 += '<input type="radio" name="PESO14" value="S"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm14 += '<input type="radio" name="PESO14" value="O"/></form>';
         
         
         sym.getSymbol("q3").$("peso-14").html(PESOForm14);
         
         $( 'input[name="PESO14"]' ).change( function(){
            var PESOChoice14 = this.value;
            sym.getSymbol("Framework").$("peso-14-output").html(PESOChoice14);
         });
         
         //PESO-15/////////////////////////////////////////////////////////////////
         ///////////////////////////////////////////////////////////////////////
         
         var PESOForm15 = '<form><input type="radio" name="PESO15" value="P"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm15 += '<input type="radio" name="PESO15" value="E"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm15 += '<input type="radio" name="PESO15" value="S"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm15 += '<input type="radio" name="PESO15" value="O"/></form>';
         
         
         sym.getSymbol("q3").$("peso-15").html(PESOForm15);
         
         $( 'input[name="PESO15"]' ).change( function(){
            var PESOChoice15 = this.value;
            sym.getSymbol("Framework").$("peso-15-output").html(PESOChoice15);
         });
         
         //PESO-16/////////////////////////////////////////////////////////////////
         ///////////////////////////////////////////////////////////////////////
         
         var PESOForm16 = '<form><input type="radio" name="PESO16" value="P"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm16 += '<input type="radio" name="PESO16" value="E"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm16 += '<input type="radio" name="PESO16" value="S"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm16 += '<input type="radio" name="PESO16" value="O"/></form>';
         
         
         sym.getSymbol("q3").$("peso-16").html(PESOForm16);
         
         $( 'input[name="PESO16"]' ).change( function(){
            var PESOChoice16 = this.value;
            sym.getSymbol("Framework").$("peso-16-output").html(PESOChoice16);
         });
         
         
         //PESO-21/////////////////////////////////////////////////////////////////
         ///////////////////////////////////////////////////////////////////////
         
         var PESOForm21 = '<form><input type="radio" name="PESO21" value="P"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm21 += '<input type="radio" name="PESO21" value="E"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm21 += '<input type="radio" name="PESO21" value="S"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm21 += '<input type="radio" name="PESO21" value="O"/></form>';
         
         
         sym.getSymbol("q4").$("peso-21").html(PESOForm21);
         
         $( 'input[name="PESO21"]' ).change( function(){
            var PESOChoice21 = this.value;
            sym.getSymbol("Framework").$("peso-21-output").html(PESOChoice21);
         });
         
         
         //PESO-22/////////////////////////////////////////////////////////////////
         ///////////////////////////////////////////////////////////////////////
         
         var PESOForm22 = '<form><input type="radio" name="PESO22" value="P"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm22 += '<input type="radio" name="PESO22" value="E"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm22 += '<input type="radio" name="PESO22" value="S"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm22 += '<input type="radio" name="PESO22" value="O"/></form>';
         
         
         sym.getSymbol("q4").$("peso-22").html(PESOForm22);
         
         $( 'input[name="PESO22"]' ).change( function(){
            var PESOChoice22 = this.value;
            sym.getSymbol("Framework").$("peso-22-output").html(PESOChoice22);
         });
         
         //PESO-23/////////////////////////////////////////////////////////////////
         ///////////////////////////////////////////////////////////////////////
         
         var PESOForm23 = '<form><input type="radio" name="PESO23" value="P"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm23 += '<input type="radio" name="PESO23" value="E"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm23 += '<input type="radio" name="PESO23" value="S"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm23 += '<input type="radio" name="PESO23" value="O"/></form>';
         
         
         sym.getSymbol("q4").$("peso-23").html(PESOForm23);
         
         $( 'input[name="PESO23"]' ).change( function(){
            var PESOChoice23 = this.value;
            sym.getSymbol("Framework").$("peso-23-output").html(PESOChoice23);
         });
         
         //PESO-24/////////////////////////////////////////////////////////////////
         ///////////////////////////////////////////////////////////////////////
         
         var PESOForm24 = '<form><input type="radio" name="PESO24" value="P"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm24 += '<input type="radio" name="PESO24" value="E"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm24 += '<input type="radio" name="PESO24" value="S"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm24 += '<input type="radio" name="PESO24" value="O"/></form>';
         
         
         sym.getSymbol("q4").$("peso-24").html(PESOForm24);
         
         $( 'input[name="PESO24"]' ).change( function(){
            var PESOChoice24 = this.value;
            sym.getSymbol("Framework").$("peso-24-output").html(PESOChoice24);
         });
         
         //PESO-25/////////////////////////////////////////////////////////////////
         ///////////////////////////////////////////////////////////////////////
         
         var PESOForm25 = '<form><input type="radio" name="PESO25" value="P"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm25 += '<input type="radio" name="PESO25" value="E"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm25 += '<input type="radio" name="PESO25" value="S"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm25 += '<input type="radio" name="PESO25" value="O"/></form>';
         
         
         sym.getSymbol("q4").$("peso-25").html(PESOForm25);
         
         $( 'input[name="PESO25"]' ).change( function(){
            var PESOChoice25 = this.value;
            sym.getSymbol("Framework").$("peso-25-output").html(PESOChoice25);
         });
         
         
         //PESO-26/////////////////////////////////////////////////////////////////
         ///////////////////////////////////////////////////////////////////////
         
         var PESOForm26 = '<form><input type="radio" name="PESO26" value="P"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm26 += '<input type="radio" name="PESO26" value="E"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm26 += '<input type="radio" name="PESO26" value="S"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm26 += '<input type="radio" name="PESO26" value="O"/></form>';
         
         
         sym.getSymbol("q4").$("peso-26").html(PESOForm26);
         
         $( 'input[name="PESO26"]' ).change( function(){
            var PESOChoice26 = this.value;
            sym.getSymbol("Framework").$("peso-26-output").html(PESOChoice26);
         });
         
         //PESO-27/////////////////////////////////////////////////////////////////
         ///////////////////////////////////////////////////////////////////////
         
         var PESOForm27 = '<form><input type="radio" name="PESO27" value="P"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm27 += '<input type="radio" name="PESO27" value="E"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm27 += '<input type="radio" name="PESO27" value="S"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm27 += '<input type="radio" name="PESO27" value="O"/></form>';
         
         
         sym.getSymbol("q4").$("peso-27").html(PESOForm27);
         
         $( 'input[name="PESO27"]' ).change( function(){
            var PESOChoice27 = this.value;
            sym.getSymbol("Framework").$("peso-27-output").html(PESOChoice27);
         });
         
         
         //PESO-28/////////////////////////////////////////////////////////////////
         ///////////////////////////////////////////////////////////////////////
         
         var PESOForm28 = '<form><input type="radio" name="PESO28" value="P"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm28 += '<input type="radio" name="PESO28" value="E"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm28 += '<input type="radio" name="PESO28" value="S"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm28 += '<input type="radio" name="PESO28" value="O"/></form>';
         
         
         sym.getSymbol("q4").$("peso-28").html(PESOForm28);
         
         $( 'input[name="PESO28"]' ).change( function(){
            var PESOChoice28 = this.value;
            sym.getSymbol("Framework").$("peso-28-output").html(PESOChoice28);
         });
         
         
         //PESO-29/////////////////////////////////////////////////////////////////
         ///////////////////////////////////////////////////////////////////////
         
         var PESOForm29 = '<form><input type="radio" name="PESO29" value="P"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm29 += '<input type="radio" name="PESO29" value="E"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm29 += '<input type="radio" name="PESO29" value="S"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm29 += '<input type="radio" name="PESO29" value="O"/></form>';
         
         
         sym.getSymbol("q4").$("peso-29").html(PESOForm29);
         
         $( 'input[name="PESO29"]' ).change( function(){
            var PESOChoice29 = this.value;
            sym.getSymbol("Framework").$("peso-29-output").html(PESOChoice29);
         });
         
         
         //PESO-30/////////////////////////////////////////////////////////////////
         ///////////////////////////////////////////////////////////////////////
         
         var PESOForm30 = '<form><input type="radio" name="PESO30" value="P"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm30 += '<input type="radio" name="PESO30" value="E"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm30 += '<input type="radio" name="PESO30" value="S"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm30 += '<input type="radio" name="PESO30" value="O"/></form>';
         
         
         sym.getSymbol("q4").$("peso-30").html(PESOForm30);
         
         $( 'input[name="PESO30"]' ).change( function(){
            var PESOChoice30 = this.value;
            sym.getSymbol("Framework").$("peso-30-output").html(PESOChoice30);
         });
         
         //PESO-31/////////////////////////////////////////////////////////////////
         ///////////////////////////////////////////////////////////////////////
         
         var PESOForm31 = '<form><input type="radio" name="PESO31" value="P"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm31 += '<input type="radio" name="PESO31" value="E"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm31 += '<input type="radio" name="PESO31" value="S"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm31 += '<input type="radio" name="PESO31" value="O"/></form>';
         
         
         sym.getSymbol("q4").$("peso-31").html(PESOForm31);
         
         $( 'input[name="PESO31"]' ).change( function(){
            var PESOChoice31 = this.value;
            sym.getSymbol("Framework").$("peso-31-output").html(PESOChoice31);
         });
         
         //PESO-32/////////////////////////////////////////////////////////////////
         ///////////////////////////////////////////////////////////////////////
         
         var PESOForm32 = '<form><input type="radio" name="PESO32" value="P"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm32 += '<input type="radio" name="PESO32" value="E"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm32 += '<input type="radio" name="PESO32" value="S"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm32 += '<input type="radio" name="PESO32" value="O"/></form>';
         
         
         sym.getSymbol("q4").$("peso-32").html(PESOForm32);
         
         $( 'input[name="PESO32"]' ).change( function(){
            var PESOChoice32 = this.value;
            sym.getSymbol("Framework").$("peso-32-output").html(PESOChoice32);
         });
         
         
         //PESO-33/////////////////////////////////////////////////////////////////
         ///////////////////////////////////////////////////////////////////////
         
         var PESOForm33 = '<form><input type="radio" name="PESO33" value="P"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm33 += '<input type="radio" name="PESO33" value="E"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm33 += '<input type="radio" name="PESO33" value="S"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm33 += '<input type="radio" name="PESO33" value="O"/></form>';
         
         
         sym.getSymbol("q4").$("peso-33").html(PESOForm33);
         
         $( 'input[name="PESO33"]' ).change( function(){
            var PESOChoice33 = this.value;
            sym.getSymbol("Framework").$("peso-33-output").html(PESOChoice33);
         });
         
         
         //PESO-34/////////////////////////////////////////////////////////////////
         ///////////////////////////////////////////////////////////////////////
         
         var PESOForm34 = '<form><input type="radio" name="PESO34" value="P"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm34 += '<input type="radio" name="PESO34" value="E"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm34 += '<input type="radio" name="PESO34" value="S"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm34 += '<input type="radio" name="PESO34" value="O"/></form>';
         
         
         sym.getSymbol("q4").$("peso-34").html(PESOForm34);
         
         $( 'input[name="PESO34"]' ).change( function(){
            var PESOChoice34 = this.value;
            sym.getSymbol("Framework").$("peso-34-output").html(PESOChoice34);
         });
         
         //PESO-35/////////////////////////////////////////////////////////////////
         ///////////////////////////////////////////////////////////////////////
         
         var PESOForm35 = '<form><input type="radio" name="PESO35" value="P"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm35 += '<input type="radio" name="PESO35" value="E"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm35 += '<input type="radio" name="PESO35" value="S"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm35 += '<input type="radio" name="PESO35" value="O"/></form>';
         
         
         sym.getSymbol("q4").$("peso-35").html(PESOForm35);
         
         $( 'input[name="PESO35"]' ).change( function(){
            var PESOChoice35 = this.value;
            sym.getSymbol("Framework").$("peso-35-output").html(PESOChoice35);
         });
         
         
         //PESO-36/////////////////////////////////////////////////////////////////
         ///////////////////////////////////////////////////////////////////////
         
         var PESOForm36 = '<form><input type="radio" name="PESO36" value="P"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm36 += '<input type="radio" name="PESO36" value="E"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm36 += '<input type="radio" name="PESO36" value="S"/>&nbsp&nbsp&nbsp&nbsp';
         PESOForm36 += '<input type="radio" name="PESO36" value="O"/></form>';
         
         
         sym.getSymbol("q4").$("peso-36").html(PESOForm36);
         
         $( 'input[name="PESO36"]' ).change( function(){
            var PESOChoice36 = this.value;
            sym.getSymbol("Framework").$("peso-36-output").html(PESOChoice36);
         });

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${edit}", "click", function(sym, e) {
         // insert code for mouse click here
         // Go to a label or specific time and stop. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${submit}", "click", function(sym, e) {
         // insert code for mouse click here
         
         // Go to a label or specific time and stop. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop("result");

      });
      //Edge binding end

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${tile-2}", "click", function(sym, e) {
         // insert code for mouse click here
         // Set a toggle to hide or show an element 
         if (sym.$("q2").is(":visible")) {
         	sym.$("q2").hide();
         
         	sym.$("q1").hide();
         	sym.$("q3").hide();
         	sym.$("q4").hide();
         	sym.$("q5").hide();
         	sym.$("q6").hide();
         	sym.$("q7").hide();
         	sym.$("q8").hide();
         	sym.$("information-box").hide();
         } else {
         	sym.$("q2").show();
         	sym.$("lightbox").show();
         
         
         	sym.$("q1").hide();
         	sym.$("q3").hide();
         	sym.$("q4").hide();
         	sym.$("q5").hide();
         	sym.$("q6").hide();
         	sym.$("q7").hide();
         	sym.$("q8").hide();
         	sym.$("information-box").hide();
         
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${tile-3}", "click", function(sym, e) {
         // insert code for mouse click here
         // Set a toggle to hide or show an element 
         if (sym.$("q3").is(":visible")) {
         	sym.$("q3").hide();
         
         	sym.$("q1").hide();
         	sym.$("q2").hide();
         
         	sym.$("q4").hide();
         	sym.$("q5").hide();
         	sym.$("q6").hide();
         	sym.$("q7").hide();
         	sym.$("q8").hide();
         	sym.$("information-box").hide();
         
         	} else {
         	sym.$("q3").show();
         	sym.$("lightbox").show();
         
         	sym.$("q1").hide();
         	sym.$("q2").hide();
         
         	sym.$("q4").hide();
         	sym.$("q5").hide();
         	sym.$("q6").hide();
         	sym.$("q7").hide();
         	sym.$("q8").hide();
         	sym.$("information-box").hide();
         
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${tile-4}", "click", function(sym, e) {
         // insert code for mouse click here
         // Set a toggle to hide or show an element 
         if (sym.$("q4").is(":visible")) {
         	sym.$("q4").hide();
         
         	sym.$("q1").hide();
         	sym.$("q2").hide();
         	sym.$("q3").hide();
         
         	sym.$("q5").hide();
         	sym.$("q6").hide();
         	sym.$("q7").hide();
         	sym.$("q8").hide();
         	sym.$("information-box").hide();
         
         } else {
         	sym.$("q4").show();
         	sym.$("lightbox").show();
         
         	sym.$("q1").hide();
         	sym.$("q2").hide();
         	sym.$("q3").hide();
         
         	sym.$("q5").hide();
         	sym.$("q6").hide();
         	sym.$("q7").hide();
         	sym.$("q8").hide();
         	sym.$("information-box").hide();
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${tile-5}", "click", function(sym, e) {
         // insert code for mouse click here
         // Set a toggle to hide or show an element 
         if (sym.$("q5").is(":visible")) {
         	sym.$("q5").hide();
         
         	sym.$("q1").hide();
         	sym.$("q2").hide();
         	sym.$("q3").hide();
         	sym.$("q4").hide();
         
         	sym.$("q6").hide();
         	sym.$("q7").hide();
         	sym.$("q8").hide();
         	sym.$("information-box").hide();
         } else {
         	sym.$("q5").show();
         	sym.$("lightbox").show();
         
         	sym.$("q1").hide();
         	sym.$("q2").hide();
         	sym.$("q3").hide();
         	sym.$("q4").hide();
         
         	sym.$("q6").hide();
         	sym.$("q7").hide();
         	sym.$("q8").hide();
         	sym.$("information-box").hide();
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${tile-submit}", "click", function(sym, e) {
         // insert code for mouse click here
         
         // Go to a label or specific time and stop. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop("result");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${tile-0}", "click", function(sym, e) {
         // insert code for mouse click here
         // Set a toggle to hide or show an element 
         if (sym.$("q1").is(":visible")) {
         	sym.$("q1").hide();
         
         	sym.$("q2").hide();
         	sym.$("q3").hide();
         	sym.$("q4").hide();
         	sym.$("q5").hide();
         	sym.$("q6").hide();
         	sym.$("q7").hide();
         	sym.$("q8").hide();
         	sym.$("information-box").hide();
         
         
         
         
         } else {
         	sym.$("q1").show();
         	sym.$("lightbox").show();
         
         	sym.$("q2").hide();
         	sym.$("q3").hide();
         	sym.$("q4").hide();
         	sym.$("q5").hide();
         	sym.$("q6").hide();
         	sym.$("q7").hide();
         	sym.$("q8").hide();
         	sym.$("information-box").hide();
         
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${tile-6}", "click", function(sym, e) {
         // insert code for mouse click here
         // Set a toggle to hide or show an element 
         if (sym.$("q6").is(":visible")) {
         	sym.$("q6").hide();
         
         	sym.$("q1").hide();
         	sym.$("q2").hide();
         	sym.$("q3").hide();
         	sym.$("q4").hide();
         	sym.$("q5").hide();
         
         	sym.$("q7").hide();
         	sym.$("q8").hide();
         	sym.$("information-box").hide();
         } else {
         	sym.$("q6").show();
         	sym.$("lightbox").show();
         
         	sym.$("q1").hide();
         	sym.$("q2").hide();
         	sym.$("q3").hide();
         	sym.$("q4").hide();
         	sym.$("q5").hide();
         
         	sym.$("q7").hide();
         	sym.$("q8").hide();
         	sym.$("information-box").hide();
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${tile-7}", "click", function(sym, e) {
         // insert code for mouse click here
         // Set a toggle to hide or show an element 
         if (sym.$("q7").is(":visible")) {
         	sym.$("q7").hide();
         
         	sym.$("q1").hide();
         	sym.$("q2").hide();
         	sym.$("q3").hide();
         	sym.$("q4").hide();
         	sym.$("q5").hide();
         	sym.$("q6").hide();
         
         	sym.$("q8").hide();
         	sym.$("information-box").hide();
         } else {
         	sym.$("q7").show();
         	sym.$("lightbox").show();
         
         	sym.$("q1").hide();
         	sym.$("q2").hide();
         	sym.$("q3").hide();
         	sym.$("q4").hide();
         	sym.$("q5").hide();
         	sym.$("q6").hide();
         
         	sym.$("q8").hide();
         	sym.$("information-box").hide();
         }
         
         
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${lightbox}", "click", function(sym, e) {
         // insert code for mouse click here
         	sym.$("q1").hide();
         	sym.$("q2").hide();
         	sym.$("q3").hide();
         	sym.$("q4").hide();
         	sym.$("q5").hide();
         	sym.$("q6").hide();
         	sym.$("q7").hide();
         	sym.$("q8").hide();
         	sym.$("lightbox").hide();
         	sym.$("information-box").hide();
         	sym.$("information-box-1").hide();
         	sym.$("information-box-2").hide();
         	sym.$("information-box-2-1").hide();
         	sym.$("information-box-3").hide();
         	sym.$("information-box-4").hide();
         	sym.$("information-box-5").hide();
         	sym.$("information-box-6").hide();
         	sym.$("information-box-7").hide();

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         

      });
      //Edge binding end

      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'edit'
   (function(symbolName) {   
   
   })("edit");
   //Edge symbol end:'edit'

   //=========================================================
   
   //Edge symbol: 'submit'
   (function(symbolName) {   
   
   })("submit");
   //Edge symbol end:'submit'

   //=========================================================
   
   //Edge symbol: 'Header'
   (function(symbolName) {   
   
   })("Header");
   //Edge symbol end:'Header'

   //=========================================================
   
   //Edge symbol: 'Subheader'
   (function(symbolName) {   
   
   })("Subheader");
   //Edge symbol end:'Subheader'

   //=========================================================
   
   //Edge symbol: 'Preloader'
   (function(symbolName) {   
   
   })("Preloader");
   //Edge symbol end:'Preloader'

   //=========================================================
   
   //Edge symbol: 'q1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${textbox1}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${textbox1-2}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${Group2}", "click", function(sym, e) {
         // insert code for mouse click here
         // Hide an element 
         sym.getSymbolElement().hide();
         
         // Hide an element 
         sym.getComposition().getStage().$("lightbox").hide();
         
         sym.getComposition().getStage().$("information-box").hide();
         sym.getComposition().getStage().$("information-box-1").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Information-2}", "click", function(sym, e) {
         // insert code for mouse click here
         // insert code for mouse click here
         // Change the text in an element
         
         // Set a toggle to hide or show an element 
         if (sym.getComposition().getStage().$("information-box").is(":visible")) {
         	sym.getComposition().getStage().$("information-box").hide();
         } else {
         	sym.getComposition().getStage().$("information-box").show();
         	sym.getComposition().getStage().$("information-box-1").hide();
         
         }
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Information-2Copy}", "click", function(sym, e) {
         // insert code for mouse click here
         // insert code for mouse click here
         // Change the text in an element
         
         // Set a toggle to hide or show an element 
         if (sym.getComposition().getStage().$("information-box-1").is(":visible")) {
         	sym.getComposition().getStage().$("information-box-1").hide();
         } else {
         	sym.getComposition().getStage().$("information-box-1").show();
         		sym.getComposition().getStage().$("information-box").hide();
         
         }
         
         
         
         

      });
      //Edge binding end

   })("q1");
   //Edge symbol end:'q1'

   //=========================================================
   
   //Edge symbol: 'q1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${textbox2-1}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Group3}", "click", function(sym, e) {
         // insert code for mouse click here
         // Hide an element 
         sym.getSymbolElement().hide();
         // Hide an element 
         sym.getComposition().getStage().$("lightbox").hide();
         sym.getComposition().getStage().$("information-box-2").hide();
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Information-2}", "click", function(sym, e) {
         // insert code for mouse click here
         // Change the text in an element
         
         // Set a toggle to hide or show an element 
         if (sym.getComposition().getStage().$("information-box-2").is(":visible")) {
         	sym.getComposition().getStage().$("information-box-2").hide();
         } else {
         	sym.getComposition().getStage().$("information-box-2").show();
         	sym.getComposition().getStage().$("information-box-2-1").hide();
         
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${textbox2-2}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${textbox2-3}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${textbox2-4}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${textbox2-5}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${textbox2-10}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${textbox2-9}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${textbox2-8}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${textbox2-7}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${textbox2-6}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Information-2-1}", "click", function(sym, e) {
         // insert code for mouse click here
         // Change the text in an element
         
         // Set a toggle to hide or show an element 
         if (sym.getComposition().getStage().$("information-box-2-1").is(":visible")) {
         	sym.getComposition().getStage().$("information-box-2-1").hide();
         } else {
         	sym.getComposition().getStage().$("information-box-2-1").show();
         	sym.getComposition().getStage().$("information-box-2").hide();
         
         }

      });
      //Edge binding end

   })("q2");
   //Edge symbol end:'q2'

   //=========================================================
   
   //Edge symbol: 'q1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${textbox5-1}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Group6}", "click", function(sym, e) {
         // insert code for mouse click here
         // Hide an element 
         sym.getSymbolElement().hide();
         
         // Hide an element 
         sym.getComposition().getStage().$("lightbox").hide();
         
         
         sym.getComposition().getStage().$("information-box-5").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${textbox5-2}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${textbox5-3}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${textbox5-6}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${textbox5-5}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${textbox5-4}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${textbox5-10}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${textbox5-9}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${textbox5-8}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${textbox5-7}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Information-2Copy4}", "click", function(sym, e) {
         // insert code for mouse click here
         // insert code for mouse click here
         // Change the text in an element
         
         // Set a toggle to hide or show an element 
         if (sym.getComposition().getStage().$("information-box-5").is(":visible")) {
         	sym.getComposition().getStage().$("information-box-5").hide();
         } else {
         	sym.getComposition().getStage().$("information-box-5").show();
         }
         
         

      });
      //Edge binding end

   })("q5");
   //Edge symbol end:'q5'

   //=========================================================
   
   //Edge symbol: 'q1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${textbox6-1}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Group11}", "click", function(sym, e) {
         // insert code for mouse click here
         // Hide an element 
         sym.getSymbolElement().hide();
         
         // Hide an element 
         sym.getComposition().getStage().$("lightbox").hide();
         
         
         sym.getComposition().getStage().$("information-box-6").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Information-2Copy5}", "click", function(sym, e) {
         // insert code for mouse click here
         // insert code for mouse click here
         // Change the text in an element
         
         // Set a toggle to hide or show an element 
         if (sym.getComposition().getStage().$("information-box-6").is(":visible")) {
         	sym.getComposition().getStage().$("information-box-6").hide();
         } else {
         	sym.getComposition().getStage().$("information-box-6").show();
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${textbox6-2}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${textbox6-3}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${textbox6-4}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${textbox6-5}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${textbox6-6}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${textbox6-7}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${textbox6-8}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${textbox6-9}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${textbox6-10}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

   })("q6");
   //Edge symbol end:'q6'

   //=========================================================
   
   //Edge symbol: 'q1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${textbox7}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Group}", "click", function(sym, e) {
         // Hide an element 
         sym.getComposition().getStage().$("lightbox").hide();
         
         
         
         // Hide an element 
         sym.getSymbolElement().hide();
         sym.getComposition().getStage().$("information-box-7").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Information-2Copy6}", "click", function(sym, e) {
         // insert code for mouse click here
         // insert code for mouse click here
         // Change the text in an element
         
         // Set a toggle to hide or show an element 
         if (sym.getComposition().getStage().$("information-box-7").is(":visible")) {
         	sym.getComposition().getStage().$("information-box-7").hide();
         } else {
         	sym.getComposition().getStage().$("information-box-7").show();
         }
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${textbox7-2}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${textbox7-3}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${textbox7-4}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${textbox7-5}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${textbox7-6}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${textbox7-7}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${textbox7-8}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${textbox7-9}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${textbox7-10}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

   })("q7");
   //Edge symbol end:'q7'

   //=========================================================
   
   //Edge symbol: 'tile-1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("tile-1");
   //Edge symbol end:'tile-1'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'tile-1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("tile-2");
   //Edge symbol end:'tile-2'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'tile-1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("tile-3");
   //Edge symbol end:'tile-3'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'tile-1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("tile-5");
   //Edge symbol end:'tile-5'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'tile-1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("tile-4");
   //Edge symbol end:'tile-4'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'tile-1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("tile-6");
   //Edge symbol end:'tile-6'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'tile-1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("tile-7");
   //Edge symbol end:'tile-7'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'tile-1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("tile-8");
   //Edge symbol end:'tile-8'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'tile-1'
   (function(symbolName) {   
   
      

   })("tile-submit");
   //Edge symbol end:'tile-submit'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'tile-1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("tile-1_2");
   //Edge symbol end:'tile-1_2'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'tile-1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("tile-0");
   //Edge symbol end:'tile-0'

   //=========================================================
   
   //Edge symbol: 'information-box'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Text2Copy}", "click", function(sym, e) {
         // insert code for mouse click here
         // Set a toggle to hide or show an element 
         if (sym.getComposition().getStage().getSymbol("information-box").$("tax-1").is(":visible")) {
         	sym.getComposition().getStage().getSymbol("information-box").$("tax-1").hide();
         } else {
         	sym.getComposition().getStage().getSymbol("information-box").$("tax-1").show();
         }
         

      });
      //Edge binding end

   })("information-box");
   //Edge symbol end:'information-box'

   //=========================================================
   
   //Edge symbol: 'Information-2'
   (function(symbolName) {   
   
   })("Information-2");
   //Edge symbol end:'Information-2'

   //=========================================================
   
   //Edge symbol: 'tick'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 43, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("tick");
   //Edge symbol end:'tick'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'information-box'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Text2Copy3}", "click", function(sym, e) {
         // insert code for mouse click here
         // Set a toggle to hide or show an element 
         if (sym.$("tax-13").is(":visible")) {
         	sym.$("tax-13").hide();
         } else {
         	sym.$("tax-13").show();
         }
         

      });
      //Edge binding end

   })("information-box-2");
   //Edge symbol end:'information-box-2'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'information-box'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Text2Copy4}", "click", function(sym, e) {
         // insert code for mouse click here
         // Set a toggle to hide or show an element 
         if (sym.$("tax-2").is(":visible")) {
         	sym.$("tax-2").hide();
         } else {
         	sym.$("tax-2").show();
         }
         

      });
      //Edge binding end

   })("information-box-3");
   //Edge symbol end:'information-box-3'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'information-box'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Text2Copy7}", "click", function(sym, e) {
         // insert code for mouse click here
         // Set a toggle to hide or show an element 
         if (sym.$("tax-3").is(":visible")) {
         	sym.$("tax-3").hide();
         } else {
         	sym.$("tax-3").show();
         }
         

      });
      //Edge binding end

   })("information-box-4");
   //Edge symbol end:'information-box-4'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'information-box'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Text2Copy9}", "click", function(sym, e) {
         // insert code for mouse click here
         // Set a toggle to hide or show an element 
         if (sym.$("tax-4").is(":visible")) {
         	sym.$("tax-4").hide();
         } else {
         	sym.$("tax-4").show();
         }
         

      });
      //Edge binding end

   })("information-box-5");
   //Edge symbol end:'information-box-5'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'information-box'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Text2Copy10}", "click", function(sym, e) {
         // insert code for mouse click here
         // Set a toggle to hide or show an element 
         if (sym.$("tax-5").is(":visible")) {
         	sym.$("tax-5").hide();
         } else {
         	sym.$("tax-5").show();
         }
         

      });
      //Edge binding end

   })("information-box-6");
   //Edge symbol end:'information-box-6'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'information-box'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Text2Copy14}", "click", function(sym, e) {
         // insert code for mouse click here
         // Set a toggle to hide or show an element 
         if (sym.$("tax-6").is(":visible")) {
         	sym.$("tax-6").hide();
         } else {
         	sym.$("tax-6").show();
         }
         

      });
      //Edge binding end

   })("information-box-7");
   //Edge symbol end:'information-box-7'

   //=========================================================
   
   //Edge symbol: 'information-box_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Text2Copy2}", "click", function(sym, e) {
         // insert code for mouse click here
         // Set a toggle to hide or show an element 
         if (sym.$("tax-12").is(":visible")) {
         	sym.$("tax-12").hide();
         } else {
         	sym.$("tax-12").show();
         }
         

      });
      //Edge binding end

      })("information-box-1");
   //Edge symbol end:'information-box-1'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'q1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${textbox3}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Group4}", "click", function(sym, e) {
         // insert code for mouse click here
         // Hide an element 
         sym.getSymbolElement().hide();
         
         // Hide an element 
         sym.getComposition().getStage().$("lightbox").hide();
         
         sym.getComposition().getStage().$("information-box-3").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Information-2Copy2}", "click", function(sym, e) {
         // insert code for mouse click here
         // insert code for mouse click here
         // Change the text in an element
         
         // Set a toggle to hide or show an element 
         if (sym.getComposition().getStage().$("information-box-3").is(":visible")) {
         	sym.getComposition().getStage().$("information-box-3").hide();
         } else {
         	sym.getComposition().getStage().$("information-box-3").show();
         }
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${textbox3-2}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${textbox3-3}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${textbox3-4}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${textbox3-5}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${textbox3-6}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${textbox3-7}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${textbox3-8}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${textbox3-9}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${textbox3-10}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${textbox3-11}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${textbox3-12}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${textbox3-13}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${textbox3-14}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${textbox3-15}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${textbox3-16}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      

      

      

      

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

   })("q3");
   //Edge symbol end:'q3'

   //=========================================================
   
   //Edge symbol: 'Information-2'
   (function(symbolName) {   
   
   })("Information-2_1");
   //Edge symbol end:'Information-2_1'

   //=========================================================

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'q1'
   (function(symbolName) {   
   
      

      Symbol.bindElementAction(compId, symbolName, "${Group4}", "click", function(sym, e) {
         // insert code for mouse click here
         // Hide an element 
         sym.getSymbolElement().hide();
         
         // Hide an element 
         sym.getComposition().getStage().$("lightbox").hide();
         
         sym.getComposition().getStage().$("information-box-3").hide();

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${Information-2}", "click", function(sym, e) {
         // insert code for mouse click here
         // Set a toggle to hide or show an element 
         if (sym.getComposition().getStage().$("information-box-4").is(":visible")) {
         	sym.getComposition().getStage().$("information-box-4").hide();
         } else {
         	sym.getComposition().getStage().$("information-box-4").show();
         }
         

      });
      //Edge binding end

   })("q4");
   //Edge symbol end:'q4'

   //=========================================================
   
   //Edge symbol: 'Information-2'
   (function(symbolName) {   
   
   })("Information-2_2");
   //Edge symbol end:'Information-2_2'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'Framework'
   (function(symbolName) {   
   
      

   })("Framework");
   //Edge symbol end:'Framework'

   //=========================================================
   
   //Edge symbol: 'footer'
   (function(symbolName) {   
   
   })("footer");
   //Edge symbol end:'footer'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'submit'
   (function(symbolName) {   
   
   })("download-pdf");
   //Edge symbol end:'download-pdf'

   //=========================================================

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'information-box'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Text2Copy3}", "click", function(sym, e) {
         // insert code for mouse click here
         // Set a toggle to hide or show an element 
         if (sym.$("tax-14").is(":visible")) {
         	sym.$("tax-14").hide();
         } else {
         	sym.$("tax-14").show();
         }
         

      });
      //Edge binding end

   })("information-box-2-1");
   //Edge symbol end:'information-box-2-1'

   //=========================================================

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'information-box'
   (function(symbolName) {   
   
   })("taxonomy-1");
   //Edge symbol end:'taxonomy-1'

   //=========================================================
   
   //Edge symbol: 'tax-1'
   (function(symbolName) {   
   
   })("tax-1");
   //Edge symbol end:'tax-1'

   //=========================================================
   
   //Edge symbol: 'tax-2'
   (function(symbolName) {   
   
   })("tax-2");
   //Edge symbol end:'tax-2'

   //=========================================================
   
   //Edge symbol: 'tax-3'
   (function(symbolName) {   
   
   })("tax-3");
   //Edge symbol end:'tax-3'

   //=========================================================
   
   //Edge symbol: 'tax-4'
   (function(symbolName) {   
   
   })("tax-4");
   //Edge symbol end:'tax-4'

   //=========================================================
   
   //Edge symbol: 'tax-5'
   (function(symbolName) {   
   
   })("tax-5");
   //Edge symbol end:'tax-5'

   //=========================================================
   
   //Edge symbol: 'tax-6'
   (function(symbolName) {   
   
   })("tax-6");
   //Edge symbol end:'tax-6'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-30417591");