/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "esp-nimble-cpp / NimBLE-Arduino", "index.html", [
    [ "Overview", "index.html", [
      [ "What is NimBLE?", "index.html#autotoc_md19", null ],
      [ "Arduino Installation", "index.html#autotoc_md20", null ],
      [ "ESP-IDF Installation", "index.html#autotoc_md21", null ],
      [ "Using", "index.html#autotoc_md24", null ],
      [ "Need help? Have a question or suggestion?", "index.html#autotoc_md27", null ],
      [ "Acknowledgments", "index.html#autotoc_md28", null ]
    ] ],
    [ "Changelog", "md__c_h_a_n_g_e_l_o_g.html", [
      [ "[1.1.0] - 2021-01-20", "md__c_h_a_n_g_e_l_o_g.html#autotoc_md1", [
        [ "Added", "md__c_h_a_n_g_e_l_o_g.html#autotoc_md2", null ],
        [ "Changed", "md__c_h_a_n_g_e_l_o_g.html#autotoc_md3", null ],
        [ "Fixed", "md__c_h_a_n_g_e_l_o_g.html#autotoc_md4", null ]
      ] ],
      [ "[1.0.2] - 2020-09-13", "md__c_h_a_n_g_e_l_o_g.html#autotoc_md5", [
        [ "Changed", "md__c_h_a_n_g_e_l_o_g.html#autotoc_md6", null ]
      ] ],
      [ "[1.0.1] - 2020-09-02", "md__c_h_a_n_g_e_l_o_g.html#autotoc_md7", [
        [ "Added", "md__c_h_a_n_g_e_l_o_g.html#autotoc_md8", null ],
        [ "Changed", "md__c_h_a_n_g_e_l_o_g.html#autotoc_md9", null ],
        [ "Fixed", "md__c_h_a_n_g_e_l_o_g.html#autotoc_md10", null ]
      ] ],
      [ "[1.0.0] - 2020-08-22", "md__c_h_a_n_g_e_l_o_g.html#autotoc_md11", null ]
    ] ],
    [ "Arduino command line and platformio config options", "md_docs__command_line_config.html", null ],
    [ "Improvements and updates", "md_docs__improvements_and_updates.html", [
      [ "Server", "md_docs__improvements_and_updates.html#autotoc_md14", null ],
      [ "Advertising", "md_docs__improvements_and_updates.html#autotoc_md15", null ],
      [ "Client", "md_docs__improvements_and_updates.html#autotoc_md16", null ],
      [ "General", "md_docs__improvements_and_updates.html#autotoc_md17", null ]
    ] ],
    [ "Migrating from Bluedroid to NimBLE", "md_docs__migration_guide.html", [
      [ "General Information", "md_docs__migration_guide.html#autotoc_md30", [
        [ "Header Files", "md_docs__migration_guide.html#autotoc_md31", null ],
        [ "Class Names", "md_docs__migration_guide.html#autotoc_md32", null ],
        [ "BLE Addresses", "md_docs__migration_guide.html#autotoc_md33", null ]
      ] ],
      [ "Server API", "md_docs__migration_guide.html#autotoc_md34", [
        [ "Services", "md_docs__migration_guide.html#autotoc_md35", null ],
        [ "Characteristics", "md_docs__migration_guide.html#autotoc_md36", [
          [ "v4.0+", "index.html#autotoc_md22", null ],
          [ "v3.2 & v3.3", "index.html#autotoc_md23", null ],
          [ "Arduino specific", "index.html#autotoc_md25", null ],
          [ "Arduino command line and platformio", "index.html#autotoc_md26", null ],
          [ "Originally", "md_docs__migration_guide.html#autotoc_md37", null ],
          [ "Is Now", "md_docs__migration_guide.html#autotoc_md38", null ],
          [ "The full list of properties", "md_docs__migration_guide.html#autotoc_md39", null ]
        ] ],
        [ "Descriptors", "md_docs__migration_guide.html#autotoc_md40", null ],
        [ "Server Security", "md_docs__migration_guide.html#autotoc_md43", null ]
      ] ],
      [ "Advertising API", "md_docs__migration_guide.html#autotoc_md44", null ],
      [ "Client API", "md_docs__migration_guide.html#autotoc_md45", [
        [ "Remote Services", "md_docs__migration_guide.html#autotoc_md46", null ],
        [ "Remote Characteristics", "md_docs__migration_guide.html#autotoc_md47", null ],
        [ "Client Security", "md_docs__migration_guide.html#autotoc_md48", null ]
      ] ],
      [ "Security API", "md_docs__migration_guide.html#autotoc_md49", null ],
      [ "Arduino Configuration", "md_docs__migration_guide.html#autotoc_md50", null ]
    ] ],
    [ "New User Guide", "md_docs__new_user_guide.html", [
      [ "Include Files", "md_docs__new_user_guide.html#autotoc_md52", null ],
      [ "Using the Library", "md_docs__new_user_guide.html#autotoc_md53", null ],
      [ "Creating a Server", "md_docs__new_user_guide.html#autotoc_md54", null ],
      [ "Creating a Client", "md_docs__new_user_guide.html#autotoc_md55", null ]
    ] ],
    [ "Usage Tips", "md_docs__usage_tips.html", [
      [ "Put BLE functions in a task running on the NimBLE stack core", "md_docs__usage_tips.html#autotoc_md57", null ],
      [ "Do not delete client instances unless necessary or unused", "md_docs__usage_tips.html#autotoc_md58", null ],
      [ "Only retrieve the services and characteriscs needed", "md_docs__usage_tips.html#autotoc_md59", null ],
      [ "Check return values", "md_docs__usage_tips.html#autotoc_md60", null ],
      [ "There will be bugs - please report them", "md_docs__usage_tips.html#autotoc_md61", null ]
    ] ],
    [ "Deprecated List", "deprecated.html", null ],
    [ "Todo List", "todo.html", null ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Enumerations", "functions_enum.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"_h_i_d_keyboard_types_8h_source.html",
"class_nim_b_l_e_h_i_d_device.html#a5e996a1668785f7a978f9874b4ff3b3e",
"md_docs__migration_guide.html#autotoc_md44"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';