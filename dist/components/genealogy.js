window.onload = function () {
    OrgChart.templates.ana.field_0  = '<text width="230" style="font-size: 18px;" fill="#ffffff" x="125" y="95" text-anchor="middle" class="field_0">{val}</text>';
    OrgChart.templates.ana.field_1 =  '<text width="130" text-overflow="multiline" style="font-size: 16px;" fill="#facc15" x="230" y="30" text-anchor="end" class="field_1">{val}</text>';
    
    var chart = new OrgChart(document.getElementById("tree"), {
                mode: "dark",
                enableSearch: false,
                enableDragDrop: true,
                tags: {
                    "head": {
                        template: "rony"
                    },
                },
                mouseScrool: OrgChart.action.none,
                nodeMenu: {
                   details: { text: "Details" },
                   edit: { text: "Edit" },
                   add: { text: "Add" },
                   remove: { text: "Remove" }
               },
               nodeBinding: {
                   field_0: "Name",
                   field_1: "Title",
                   img_0: "img"
               },     
               nodes: [
                   { id: 1, tags: ["head"], Name: "THOMAS SAWYER", Title: "SQUIRE", img: "/dist/img/tom.jpg" },
                   { id: 2, pid: 1, Name: "Ava Field", Title: "Left", img: "/dist/img/Logo TLC.PNG", mobile: "0878108255" },
                   { id: 3, pid: 1, Name: "Peter Stevens", Title: "Left", img: "/dist/img/Logo TLC.PNG" },
                   { id: 4, pid: 1, Name: "Avery Woods", Title: "Left", img: "/dist/img/Logo TLC.PNG" },
                   { id: 5, pid: 2, Name: "Ava Field", Title: "Left", img: "/dist/img/Logo TLC.PNG", mobile: "0878108255" },
                   { id: 6, pid: 2,  Name: "Peter Stevens", Title: "Right", img: "/dist/img/Logo TLC.PNG" },
                   { id: 7, pid: 3, Name: "Avery Woods", Title: "Left", img: "/dist/img/Logo TLC.PNG" }
               ]
               
           });      
           }

           chart.on('init', function(sender){
            sender.editUI.show(1);
        });
        
        chart.load(nodes);    
