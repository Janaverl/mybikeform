$(document).ready(function(){
    console.log("I asked the document and it's ready");

    var bikes = [];
        
    class Bike {
        constructor(type, name, sizes, colors, icon) {
            this.type = type,
            this.name = name,
            this.sizes = sizes,
            this.colors = colors,
            this.icon = icon,
            bikes.push(this);
        };
    }

    let cityMale = new Bike("cityMale", "stadsfiets heren", ["50", "57", "61"], ["blue", "red", "pink"], "<i class='fas fa-bicycle'></i>");
    let cityFemale = new Bike("cityFemale", "stadsfiets dames", ["50", "57"], ["blue", "yellow", "pink"], "<i class='fas fa-bicycle'></i>");
    let electrMale = new Bike("electrMale", "electrische fiets heren", ["50", "57", "61"], ["blue"], '<i class="fas fa-motorcycle"></i>');
    let electrFemale = new Bike("electrFemale", "electrische fiets dames", ["43", "50", "57"], ["green", "red", "pink"], '<i class="fas fa-motorcycle"></i>');
    let portable = new Bike("portable", "plooifiets", ["40"], ["black", "red", "pink"], '<i class="fas fa-sleigh"></i>');

    let accessoires = ["fietsbel", "lichtjes", "slot", "diefstalverzekering"];

    var text = '<h3>kies eerst uw fiets</h3>';
    bikes.forEach(function(item){
        text += '<input class="w3-radio" type="radio" name="type" value="'+item.type+'"><label for="'+item.type+'">'+item.name+'</label><br></br>';
    });
    $( "#types" ).html( text );

    var text = '<h3>kies uw extras</h3>';
    accessoires.forEach(function(accessoire){
        text += '<input class="w3-check" type="checkbox" name="option" value="'+accessoire+'"><label for="'+accessoire+'">optie '+accessoire+' </label><br><br>';
    });        
    $( "#options" ).html( text );
    
    var price = '<h3>bereken uw prijs</h3>'
    price += '<p>hier komt dan de prijs</p>'
    $( "#price" ).html( price );


    $('input:radio[name="type"]').change( function(){
        console.log("I asked the radio-buttons, and it told me you've made a change");
        var chosenType = $("input[name='type']:checked").val();
        console.log(chosenType);
        bikes.forEach(function(bike){
            if(bike.type == chosenType){
                var text = '<h3>kies uw grootte</h3>';
                bike.sizes.forEach(function(size){
                    text += '<input class="w3-radio" type="radio" name="size" value="'+size+'"><label for="'+size+'">'+size+'</label><br><br>';
                });
                $('.thebike').html(bike.icon);
            }
            $( "#size" ).html( text );
            $('input:radio[name="size"]').change( function(){
                console.log($('input:radio[name="size"]:checked').val());
                $('.thebike').css("font-size", 4*$('input:radio[name="size"]:checked').val()+"px")
            });
        });

        bikes.forEach(function(bike){
            if(bike.type == chosenType){
                var text = '<h3>kies een kleur</h3>';
                bike.colors.forEach(function(color){
                    text += '<label><input class="w3-radio" name="color" type="radio" value="'+color+'"><span class="color" style="background-color:'+color+';"></span></label><br><br>';
                });
                $( "#color" ).html( text );
            }
            $('input:radio[name="color"]').change( function(){
                console.log($('input:radio[name="color"]:checked').val());
                $('.thebike').css("color", $('input:radio[name="color"]:checked').val())
            });
        });
    
    });





});