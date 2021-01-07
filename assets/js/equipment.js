let tshirtw=110;
let tshirtv=0.22;
let fleecew=220;
let fleecev=0.44;
let lwindjw=180;
let lwindjv=0.36;
let wpjackw=300;
let wpjackv=0.6;
let tjackw=800;
let tjackv=1.6;
let fllegsw=150;
let fllegsv=0.3;
let flsleevsw=150;
let flsleevsv=0.3;
let lwpantw=150;
let lwpantv=0.3;
let skiw=560;
let skiv=1.2;
let shortw=100;
let shortv=0.2;
let boxerw=100;
let boxerv=0.2;
let socketw=100;
let socketv=0.2;
let glovew=180;
let glovev=0.36;
let shoew=800;
let shoev=1.5;
let capw=100;
let capv=0.2;
let feetw=100;
let feetv=0.2;
let neckw=30;
let neckv=0.06;
let towellw=100;
let towellv=0.2;
let helmw=220;
let helmv=2;
let multitw=130;
let multitv=0.09;
let stubew=130;
let stubev=0.25;
let pumpw=50;
let pumpv=0.09;
let sgooglew=30;
let sgooglev=0.1;
let tubefixw=30;
let tubefixv=0.05;
let leverw=30;
let leverv=0.05;
let tentw=1800;
let tentv=3.5;
let matresw=500;
let matresv=1;
let slepbw=900;
let slepbv=4;
let pillow=60;
let pillov=0.2;
let headw=70;
let headv=0.3;
let floorinsw=200;
let floorinsv=0.5;
let soapw=20;
let soapv=0.016;
let tbrushw=10;
let tbrushv=0.012;
let tpastew=30;
let tpastev=0.108;
let suncw=50;
let suncv=0.04;
let potw=260;
let potv=1.8;
let cupw=100;
let cupv=0.2;
let utensilw=100;
let utensilv=0.05;
let stovew=300;
let stovev=0.3;
let canisterw=200;
let canisterv=1;
let igniterw=30;
let igniterv=0.05;
let petrolw=200;
let petrolv=0.2;
let detergentw=20;
let detergentv=0.05;
let dishcw=10;
let dishcv=0.05;
let docuw=150;
let docuv=0.2;
let phonew=180;
let phonev=0.1;
let chargerw=40;
let chargerv=0.05;
let pbankw=350;
let pbankv=0.05;
let pannierw=500;
let pannierv=23;
let lightfirstaidw=200;
let lightfirstaidv=0.2;
let equipment;
let equipment2;
let equipment3;
let equipment4;
var totalcampingv;
var totalcampingw;
var totalelectronicsv;
var totalelectronicsw;
var totalhealthbodyv1;
var totalhealthbodyw1;
var totalhealthbodyv2;
var totalhealthbodyw2;
var totalhealthbodyv3;
var totalhealthbodyw3;
var totalbikerelatedv;
var totalbikerelatedw;
var totalropav;
var totalropaw;
var totaldocumv;
var totaldocumw;
var graphf;



equipment = function() {
        var dayslength = document.getElementById('triplenght').value;
        var campop = document.getElementById('camping').value;
        var rain = document.getElementById('rain').value;
        var tempmin = document.getElementById('mintemp').value;

        //bikestuff
        //camping
        var tentq;
        var matresq;
        var slepbq;
        var pilloq;
        var headq;
        var floorinsq;
        var potq;
        var cupq;
        var utensilq;
        var stoveq;
        var canisterq;
        var igniterq;
        var petrolq;
        var detergentq;
        var dishcq;
        var soapq;
        var tbrushq;
        var tpasteq;
        //bodycare
        //documents
        //electronics
        //panniers
        var pannierq;
        //lets fix camping equipment
        if (campop >= 1 && dayslength >=2 ) {
          tentq=1;
          matresq=1;
          slepbq=1;
          pilloq=1;
          headq=1;
          floorinsq=1;
          potq=1;
          cupq=1;
          utensilq=1;
          stoveq=1;
          canisterq=1;
          igniterq=1;
          petrolq=1;
          detergentq=1;
          dishcq=1;
          soapq=1;
          tbrushq=1;
          tpasteq=1;

          document.getElementById("campinghead").innerHTML = "Camping Equipment";
          document.getElementById("tentcd").innerHTML = "Tent";
          document.getElementById("tentq").innerHTML = tentq + " [unit]";
          document.getElementById("tenttw").innerHTML = ((tentq*tentw)/1000) + " [kg]";
          document.getElementById("tenttv").innerHTML = (tentq*tentv) + " [lt]";
          document.getElementById("matrescd").innerHTML = "Air mattress";
          document.getElementById("matresq").innerHTML = matresq + " [unit]";
          document.getElementById("matrestw").innerHTML = ((matresq*matresw)/1000) + " [kg]";
          document.getElementById("matrestv").innerHTML = (matresq*matresv) + " [lt]";
          document.getElementById("slepbcd").innerHTML = "Sleeping bag";
          document.getElementById("slepbq").innerHTML = slepbq + " [unit]";
          document.getElementById("slepbtw").innerHTML = ((slepbq*slepbw)/1000) + " [kg]";
          document.getElementById("slepbtv").innerHTML = (slepbq*slepbv) + " [lt]";
          document.getElementById("pillocd").innerHTML = "Air pillow";
          document.getElementById("pilloq").innerHTML = pilloq + " [unit]";
          document.getElementById("pillotw").innerHTML = ((pilloq*pillow)/1000) + " [kg]";
          document.getElementById("pillotv").innerHTML = (pilloq*pillov) + " [lt]";
          document.getElementById("headcd").innerHTML = "Head lamp";
          document.getElementById("headq").innerHTML = headq + " [unit]";
          document.getElementById("headtw").innerHTML = ((headq*headw)/1000) + " [kg]";
          document.getElementById("headtv").innerHTML = (headq*headv) + " [lt]";
          document.getElementById("floorinscd").innerHTML = "Floor insulator";
          document.getElementById("floorinsq").innerHTML = floorinsq + " [unit]";
          document.getElementById("floorinstw").innerHTML = ((floorinsq*floorinsw)/1000) + " [kg]";
          document.getElementById("floorinstv").innerHTML = (floorinsq*floorinsv) + " [lt]";
          document.getElementById("potcd").innerHTML = "Pot camping";
          document.getElementById("potq").innerHTML = potq + " [unit]";
          document.getElementById("pottw").innerHTML = ((potq*potw)/1000) + " [kg]";
          document.getElementById("pottv").innerHTML = (potq*potv) + " [lt]";
          document.getElementById("cupcd").innerHTML = "Cup camping";
          document.getElementById("cupq").innerHTML = cupq + " [unit]";
          document.getElementById("cuptw").innerHTML = ((cupq*cupw)/1000) + " [kg]";
          document.getElementById("cuptv").innerHTML = (cupq*cupv) + " [lt]";
          document.getElementById("utensilcd").innerHTML = "Utensil camping";
          document.getElementById("utensilq").innerHTML = utensilq + " [unit]";
          document.getElementById("utensiltw").innerHTML = ((utensilq*utensilw)/1000) + " [kg]";
          document.getElementById("utensiltv").innerHTML = (utensilq*utensilv) + " [lt]";
          document.getElementById("stovecd").innerHTML = "Stove camping";
          document.getElementById("stoveq").innerHTML = stoveq + " [unit]";
          document.getElementById("stovetw").innerHTML = ((stoveq*stovew)/1000) + " [kg]";
          document.getElementById("stovetv").innerHTML = (stoveq*stovev) + " [lt]";
          document.getElementById("canistercd").innerHTML = "Canister gas";
          document.getElementById("canisterq").innerHTML = canisterq + " [unit]";
          document.getElementById("canistertw").innerHTML = ((canisterq*canisterw)/1000) + " [kg]";
          document.getElementById("canistertv").innerHTML = (stoveq*canisterv) + " [lt]";
          document.getElementById("ignitercd").innerHTML = "Igniter";
          document.getElementById("igniterq").innerHTML = igniterq + " [unit]";
          document.getElementById("ignitertw").innerHTML = ((igniterq*igniterw)/1000) + " [kg]";
          document.getElementById("ignitertv").innerHTML = (igniterq*igniterv) + " [lt]";
          document.getElementById("petrolcd").innerHTML = "Petrol bottle";
          document.getElementById("petrolq").innerHTML = petrolq + " [unit]";
          document.getElementById("petroltw").innerHTML = ((petrolq*petrolw)/1000) + " [kg]";
          document.getElementById("petroltv").innerHTML = (petrolq*petrolv) + " [lt]";
          document.getElementById("detergentcd").innerHTML = "Detergent";
          document.getElementById("detergentq").innerHTML = detergentq + " [unit]";
          document.getElementById("detergenttw").innerHTML = ((detergentq*detergentw)/1000) + " [kg]";
          document.getElementById("detergenttv").innerHTML = (detergentq*detergentv) + " [lt]";
          document.getElementById("dishccd").innerHTML = "Dish sponge";
          document.getElementById("dishcq").innerHTML = dishcq + " [unit]";
          document.getElementById("dishctw").innerHTML = ((dishcq*dishcw)/1000) + " [kg]";
          document.getElementById("dishctv").innerHTML = (dishcq*dishcv) + " [lt]";
          document.getElementById("bodycare").innerHTML = "Health and bodycare";
          document.getElementById("soapcd").innerHTML = "Soap";
          document.getElementById("soapq").innerHTML = soapq + " [unit]";
          document.getElementById("soaptw").innerHTML = ((soapq*soapw)/1000) + " [kg]";
          document.getElementById("soaptv").innerHTML = (soapq*soapv) + " [lt]";
          document.getElementById("tbrushcd").innerHTML = "Tooth brush";
          document.getElementById("tbrushq").innerHTML = tbrushq + " [unit]";
          document.getElementById("tbrushtw").innerHTML = ((tbrushq*tbrushw)/1000) + " [kg]";
          document.getElementById("tbrushtv").innerHTML = (tbrushq*tbrushv) + " [lt]";
          document.getElementById("tpastecd").innerHTML = "Tooth paste";
          document.getElementById("tpasteq").innerHTML = tpasteq + " [unit]";
          document.getElementById("tpastetw").innerHTML = ((tpasteq*tpastew)/1000) + " [kg]";
          document.getElementById("tpastetv").innerHTML = (tpasteq*tpastev) + " [lt]";



        } else {
          tentq=0;
          matresq=0;
          slepbq=0;
          pilloq=0;
          headq=0;
          floorinsq=0;
          potq=0;
          cupq=0;
          utensilq=0;
          stoveq=0;
          canisterq=0;
          igniterq=0;
          petrolq=0;
          detergentq=0;
          dishcq=0;
          soapq=0;
          tbrushq=0;
          tpasteq=0;
          document.getElementById("campinghead").innerHTML = "";
          document.getElementById("tentcd").innerHTML = "" ;
          document.getElementById("tentq").innerHTML = "";
          document.getElementById("tenttw").innerHTML = "";
          document.getElementById("tenttv").innerHTML = "";
          document.getElementById("matrescd").innerHTML = "";
          document.getElementById("matresq").innerHTML = "";
          document.getElementById("matrestw").innerHTML ="" ;
          document.getElementById("matrestv").innerHTML = "";
          document.getElementById("slepbcd").innerHTML = "";
          document.getElementById("slepbq").innerHTML = "";
          document.getElementById("slepbtw").innerHTML = "";
          document.getElementById("slepbtv").innerHTML = "";
          document.getElementById("pillocd").innerHTML = "";
          document.getElementById("pilloq").innerHTML = "";
          document.getElementById("pillotw").innerHTML = "";
          document.getElementById("pillotv").innerHTML = "";
          document.getElementById("headcd").innerHTML = "";
          document.getElementById("headq").innerHTML = "";
          document.getElementById("headtw").innerHTML = "";
          document.getElementById("headtv").innerHTML = "";
          document.getElementById("floorinscd").innerHTML = "";
          document.getElementById("floorinsq").innerHTML = "";
          document.getElementById("floorinstw").innerHTML = "";
          document.getElementById("floorinstv").innerHTML = "";
          document.getElementById("potcd").innerHTML = "";
          document.getElementById("potq").innerHTML = "";
          document.getElementById("pottw").innerHTML = "";
          document.getElementById("pottv").innerHTML = "";
          document.getElementById("cupcd").innerHTML = "";
          document.getElementById("cupq").innerHTML = "";
          document.getElementById("cuptw").innerHTML = "";
          document.getElementById("cuptv").innerHTML = "";
          document.getElementById("utensilcd").innerHTML = "";
          document.getElementById("utensilq").innerHTML = "";
          document.getElementById("utensiltw").innerHTML = "";
          document.getElementById("utensiltv").innerHTML = "";
          document.getElementById("stovecd").innerHTML = "";
          document.getElementById("stoveq").innerHTML = "";
          document.getElementById("stovetw").innerHTML = "";
          document.getElementById("stovetv").innerHTML = "";
          document.getElementById("canistercd").innerHTML = "";
          document.getElementById("canisterq").innerHTML = "";
          document.getElementById("canistertw").innerHTML = "";
          document.getElementById("canistertv").innerHTML = "";
          document.getElementById("ignitercd").innerHTML = "";
          document.getElementById("igniterq").innerHTML = "";
          document.getElementById("ignitertw").innerHTML = "";
          document.getElementById("ignitertv").innerHTML = "";
          document.getElementById("petrolcd").innerHTML = "";
          document.getElementById("petrolq").innerHTML = "";
          document.getElementById("petroltw").innerHTML = "";
          document.getElementById("petroltv").innerHTML = "";
          document.getElementById("detergentcd").innerHTML = "";
          document.getElementById("detergentq").innerHTML = "";
          document.getElementById("detergenttw").innerHTML = "";
          document.getElementById("detergenttv").innerHTML = "";
          document.getElementById("dishccd").innerHTML = "";
          document.getElementById("dishcq").innerHTML = "";
          document.getElementById("dishctw").innerHTML = "";
          document.getElementById("dishctv").innerHTML = "";
          document.getElementById("bodycare").innerHTML = "";
          document.getElementById("soapcd").innerHTML = "";
          document.getElementById("soapq").innerHTML = "";
          document.getElementById("soaptw").innerHTML = "";
          document.getElementById("soaptv").innerHTML = "";
          document.getElementById("tbrushcd").innerHTML = "";
          document.getElementById("tbrushq").innerHTML = "";
          document.getElementById("tbrushtw").innerHTML = "";
          document.getElementById("tbrushtv").innerHTML = "";
          document.getElementById("tpastecd").innerHTML = "";
          document.getElementById("tpasteq").innerHTML = "";
          document.getElementById("tpastetw").innerHTML = "";
          document.getElementById("tpastetv").innerHTML = "";
        };
        // poner aqui la suma del equipo.
        totalcampingv = ((tentq*tentv)+(matresq*matresv)+(slepbq*slepbv)+(pilloq*pillov)+(headq*headv)+(floorinsq*floorinsv)+(potq*potv)+(cupq*cupv)+(utensilq*utensilv)+(stoveq*stovev)+(canisterq*canisterv)+(igniterq*igniterv)+(petrolq*petrolv)+(detergentq*detergentv)+(dishcq*dishcv));
        totalcampingw = ((tentq*tentw)+(matresq*matresw)+(slepbq*slepbw)+(pilloq*pillow)+(headq*headw)+(floorinsq*floorinsw)+(potq*potw)+(cupq*cupw)+(utensilq*utensilw)+(stoveq*stovew)+(canisterq*canisterw)+(igniterq*igniterw)+(petrolq*petrolw)+(detergentq*detergentw)+(dishcq*dishcw))/1000;
        totalhealthbodyv1=((soapq*soapv)+(tbrushq*tbrushv)+(tpasteq*tpastev));
        totalhealthbodyw1=((soapq*soapw)+(tbrushq*tbrushw)+(tpasteq*tpastew))/1000;


};

equipment2 = function () {
  var helmq;
  var multitq;
  var stubeq;
  var pumpq;
  var sgoogleq;
  var tubefixq;
  var leverq;
 var docuq;
 var phoneq;
 var chargerq;
 var pbankq;
 var suncq;
 var lightfirstaidq;
 var dayslength = document.getElementById('triplenght').value;
 var campop = document.getElementById('camping').value;
 var rain = document.getElementById('rain').value;
 var tempmin = document.getElementById('mintemp').value;
 if ( dayslength >= 1 ){
       docuq=1;
       phoneq=1;
       lightfirstaidq=1;
       helmq=1;
       multitq=1;
       pumpq=1;
       sgoogleq=1;
       stubeq=1;
       leverq=1;
       document.getElementById("docuhead").innerHTML = "Documents";
       document.getElementById("docucd").innerHTML = "Wallet";
       document.getElementById("docuq").innerHTML = docuq + " [unit]";
       document.getElementById("docutw").innerHTML = ((docuq*docuw)/1000) + " [kg]";
       document.getElementById("docutv").innerHTML = (docuq*docuv) + " [lt]";
       document.getElementById("electronics").innerHTML = "Electronic devices.";
       document.getElementById("phonecd").innerHTML = "Phone";
       document.getElementById("phoneq").innerHTML = phoneq + " [unit]";
       document.getElementById("phonetw").innerHTML = ((phoneq*phonew)/1000) + " [kg]";
       document.getElementById("phonetv").innerHTML = (phoneq*phonev) + " [lt]";
       document.getElementById("lightfirstaidcd").innerHTML = "First aid kit";
       document.getElementById("lightfirstaidq").innerHTML = lightfirstaidq + " [unit]";
       document.getElementById("lightfirstaidtw").innerHTML = ((lightfirstaidq*lightfirstaidw)/1000) + " [kg]";
       document.getElementById("lightfirstaidtv").innerHTML = (lightfirstaidq*lightfirstaidv) + " [lt]";
       document.getElementById("basicbike").innerHTML = "Bike related";
       document.getElementById("helmcd").innerHTML = "Helmet";
       document.getElementById("helmq").innerHTML = helmq + " [unit]";
       document.getElementById("helmtw").innerHTML = ((helmq*helmw)/1000) + " [kg]";
       document.getElementById("helmtv").innerHTML = (helmq*helmv) + " [lt]";
       document.getElementById("multitcd").innerHTML = "Multitool";
       document.getElementById("multitq").innerHTML = multitq + " [unit]";
       document.getElementById("multittw").innerHTML = ((multitq*multitw)/1000) + " [kg]";
       document.getElementById("multittv").innerHTML = (multitq*multitv) + " [lt]";
       document.getElementById("pumpcd").innerHTML = "Bike pump";
       document.getElementById("pumpq").innerHTML = pumpq + " [unit]";
       document.getElementById("pumptw").innerHTML = ((pumpq*pumpw)/1000) + " [kg]";
       document.getElementById("pumptv").innerHTML = (pumpq*pumpv) + " [lt]";
       document.getElementById("sgooglecd").innerHTML = "Safety google";
       document.getElementById("sgoogleq").innerHTML = sgoogleq + " [unit]";
       document.getElementById("sgoogletw").innerHTML = ((sgoogleq*sgooglew)/1000) + " [kg]";
       document.getElementById("sgoogletv").innerHTML = (sgoogleq*sgooglev) + " [lt]";
       document.getElementById("stubecd").innerHTML = "Spare tube";
       document.getElementById("stubeq").innerHTML = stubeq + " [unit]";
       document.getElementById("stubetw").innerHTML = ((stubeq*stubew)/1000) + " [kg]";
       document.getElementById("stubetv").innerHTML = (stubeq*stubev) + " [lt]";
       document.getElementById("levercd").innerHTML = "Wheel tube levers";
       document.getElementById("leverq").innerHTML = leverq + " [unit]";
       document.getElementById("levertw").innerHTML = ((leverq*leverw)/1000) + " [kg]";
       document.getElementById("levertv").innerHTML = (leverq*leverv) + " [lt]";
     } else {
       docuq=0;
       phoneq=0;
       lightfirstaidq=0;
       helmq=0;
       multitq=0;
       pumpq=0;
       sgoogleq=0;
       stubeq=0;
       leverq=0;
       document.getElementById("docuhead").innerHTML = "";
       document.getElementById("electronics").innerHTML = "";
       document.getElementById("docucd").innerHTML = "";
       document.getElementById("docuq").innerHTML = "";
       document.getElementById("docutw").innerHTML = "";
       document.getElementById("docutv").innerHTML = "";
       document.getElementById("phonecd").innerHTML = "";
       document.getElementById("phoneq").innerHTML = "";
       document.getElementById("phonetw").innerHTML = "";
       document.getElementById("phonetv").innerHTML = "";
       document.getElementById("lightfirstaidcd").innerHTML = "";
       document.getElementById("lightfirstaidq").innerHTML = "";
       document.getElementById("lightfirstaidtw").innerHTML = "";
       document.getElementById("lightfirstaidtv").innerHTML = "";
       document.getElementById("basicbike").innerHTML = "";
       document.getElementById("helmcd").innerHTML = "";
       document.getElementById("helmq").innerHTML = "";
       document.getElementById("helmtw").innerHTML = "";
       document.getElementById("helmtv").innerHTML = "";
       document.getElementById("multitcd").innerHTML = "";
       document.getElementById("multitq").innerHTML ="";
       document.getElementById("multittw").innerHTML = "";
       document.getElementById("multittv").innerHTML = "";
       document.getElementById("pumpcd").innerHTML = "";
       document.getElementById("pumpq").innerHTML = "";
       document.getElementById("pumptw").innerHTML = "";
       document.getElementById("pumptv").innerHTML = "";
       document.getElementById("sgooglecd").innerHTML = "";
       document.getElementById("sgoogleq").innerHTML = "";
       document.getElementById("sgoogletw").innerHTML = "";
       document.getElementById("sgoogletv").innerHTML = "";
       document.getElementById("stubecd").innerHTML = "";
       document.getElementById("stubeq").innerHTML = "";
       document.getElementById("stubetw").innerHTML = "";
       document.getElementById("stubetv").innerHTML = "";
       document.getElementById("levercd").innerHTML = "";
       document.getElementById("leverq").innerHTML = "";
       document.getElementById("levertw").innerHTML = "";
       document.getElementById("levertv").innerHTML = "";
     };

  if (dayslength >= 2){
        chargerq=1;
        pbankq=1;
        tubefixq=1;
        document.getElementById("chargercd").innerHTML = "Phone charger";
        document.getElementById("chargerq").innerHTML = chargerq + " [unit]";
        document.getElementById("chargertw").innerHTML = ((chargerq*chargerw)/1000) + " [kg]";
        document.getElementById("chargertv").innerHTML = (chargerq*chargerv) + " [lt]";
        document.getElementById("pbankcd").innerHTML = "Power Bank";
        document.getElementById("pbankq").innerHTML = pbankq + " [unit]";
        document.getElementById("pbanktw").innerHTML = ((pbankq*pbankw)/1000) + " [kg]";
        document.getElementById("pbanktv").innerHTML = (pbankq*pbankv) + " [lt]";
        document.getElementById("tubefixcd").innerHTML = "Tube fix kit";
        document.getElementById("tubefixq").innerHTML = tubefixq + " [unit]";
        document.getElementById("tubefixtw").innerHTML = ((tubefixq*tubefixw)/1000) + " [kg]";
        document.getElementById("tubefixtv").innerHTML = (tubefixq*tubefixv) + " [lt]";
      } else {
        chargerq=0;
        pbankq=0;
        tubefixq=0;
        document.getElementById("chargercd").innerHTML = "";
        document.getElementById("chargerq").innerHTML = "";
        document.getElementById("chargertw").innerHTML = "";
        document.getElementById("chargertv").innerHTML = "";
        document.getElementById("pbankcd").innerHTML = "";
        document.getElementById("pbankq").innerHTML = "";
        document.getElementById("pbanktw").innerHTML = "";
        document.getElementById("pbanktv").innerHTML = "";
        document.getElementById("tubefixcd").innerHTML = "";
        document.getElementById("tubefixq").innerHTML = "";
        document.getElementById("tubefixtw").innerHTML = "";
        document.getElementById("tubefixtv").innerHTML = "";
      };
  if ( (dayslength >= 1) && (tempmin >= 10) ){
    suncq=1;
    document.getElementById("sunccd").innerHTML = "Sunscreen";
    document.getElementById("suncq").innerHTML = suncq + " [unit]";
    document.getElementById("sunctw").innerHTML = ((suncq*suncw)/1000) + " [kg]";
    document.getElementById("sunctv").innerHTML = (suncq*suncv) + " [lt]";
  } else {
    suncq=0;
    document.getElementById("sunccd").innerHTML = "";
    document.getElementById("suncq").innerHTML = "";
    document.getElementById("sunctw").innerHTML = "";
    document.getElementById("sunctv").innerHTML = "";
  };
//poner aqui la suma del equipo
 totalbikerelatedv=((helmq*helmv)+(multitq*multitv)+(stubeq*stubev)+(pumpq*pumpv)+(sgoogleq*sgooglev)+(tubefixq*tubefixv)+(leverq*leverv));
 totalbikerelatedw=((helmq*helmw)+(multitq*multitw)+(stubeq*stubew)+(pumpq*pumpw)+(sgoogleq*sgooglew)+(tubefixq*tubefixw)+(leverq*leverw))/1000;
 totalelectronicsv=((phoneq*phonev)+(chargerq*chargerv)+(pbankq*pbankv));
 totalelectronicsw=((phoneq*phonew)+(chargerq*chargerw)+(pbankq*pbankw))/1000;
 totalhealthbodyv2=((suncq*suncv)+(lightfirstaidq*lightfirstaidv));
 totalhealthbodyw2=((suncq*suncw)+(lightfirstaidq*lightfirstaidw))/1000;
 totaldocumv=((docuq*docuv));
 totaldocumw=((docuq*docuw))/1000;

};
// third function is going to fix the clothing equipment.
equipment3 = function() {
  var dayslength = document.getElementById('triplenght').value;
  var campop = document.getElementById('camping').value;
  var rain = document.getElementById('rain').value;
  var tempmin = document.getElementById('mintemp').value;
  //clothing
  var tshirtq;
  var fleeceq;
  var lwindjq;
  var wpjackq;
  var tjackq;
  var fllegsq;
  var flsleevsq;
  var lwpantq;
  var skiq;
  var shortq;
  var boxerq;
  var socketq;
  var gloveq;
  var shoeq;
  var capq;
  var feetq;
  var neckq;
  var towellq;
  //lets fix one at a time.
  //Tshirt
  if (tempmin >= 5 ) {
          if (dayslength >= 4 ) {
            tshirtq = 4;
          } else if (dayslength >= 3) {
            tshirtq = 3;
          } else if (dayslength >= 2) {
            tshirtq = 2;
          } else if (dayslength >= 1) {
            tshirtq = 1;
          } else {
            tshirtq = 0;
          }
        } else {
          if (dayslength >= 4 ) {
            tshirtq = 3;
          } else if (dayslength >= 2) {
            tshirtq = 1;
          } else if (dayslength>=1) {
            tshirtq = 0;
          } else {
            tshirtq = 0;
          }
        };
  if (tshirtq >0 ) {
    document.getElementById("tshirtcd").innerHTML = "Breathable tshirt";
    document.getElementById("tshirtq").innerHTML = tshirtq + " [unit]";
    document.getElementById("tshirttw").innerHTML = ((tshirtq*tshirtw)/1000) + " [kg]";
    document.getElementById("tshirttv").innerHTML = (tshirtq*tshirtv) + " [lt]";
  } else {
    document.getElementById("tshirtcd").innerHTML = "";
    document.getElementById("tshirtq").innerHTML = "";
    document.getElementById("tshirttw").innerHTML = "";
    document.getElementById("tshirttv").innerHTML = "";
  };
//Fleece
if (tempmin >= 15 ) {
  fleeceq=0;
  } else if( tempmin >= 10) {
      if (dayslength >= 1 ) {
          fleeceq = 1;
          } else {
          fleeceq = 0;
          }
 } else {
      if (dayslength >= 4 ) {
          fleeceq = 2;
          } else if (dayslength >= 1 ) {
            fleeceq = 1;
          } else {
            fleeceq = 0;
          }
};
if (fleeceq > 0 ) {
  document.getElementById("fleececd").innerHTML = "Thermal Fleece";
  document.getElementById("fleeceq").innerHTML = fleeceq + " [unit]";
  document.getElementById("fleecetw").innerHTML = ((fleeceq*fleecew)/1000) + " [kg]";
  document.getElementById("fleecetv").innerHTML = (fleeceq*fleecev) + " [lt]";
} else {
  document.getElementById("fleececd").innerHTML = "";
  document.getElementById("fleeceq").innerHTML = "";
  document.getElementById("fleecetw").innerHTML = "";
  document.getElementById("fleecetv").innerHTML = "";
};
//Light weight wind stop jacket
if (tempmin >= 15 && rain==0 && dayslength >0 ) {
  lwindjq=1;
} else {
  lwindjq=0;
};
if (lwindjq > 0 ) {
  document.getElementById("lwindjcd").innerHTML = "Light windstop jacket";
  document.getElementById("lwindjq").innerHTML = lwindjq + " [unit]";
  document.getElementById("lwindjtw").innerHTML = ((lwindjq*lwindjw)/1000) + " [kg]";
  document.getElementById("lwindjtv").innerHTML = (lwindjq*lwindjv) + " [lt]";
} else {
  document.getElementById("lwindjcd").innerHTML = "";
  document.getElementById("lwindjq").innerHTML = "";
  document.getElementById("lwindjtw").innerHTML = "";
  document.getElementById("lwindjtv").innerHTML = "";
};
//water proof rain jacekt goretex shit.
if  ( rain==1 && dayslength >0) {
  wpjackq=1;
  document.getElementById("lwindjcd").innerHTML = "Waterproof jacket";
  document.getElementById("lwindjq").innerHTML = wpjackq + " [unit]";
  document.getElementById("lwindjtw").innerHTML = ((wpjackq*wpjackw)/1000) + " [kg]";
  document.getElementById("lwindjtv").innerHTML = (wpjackq*wpjackv) + " [lt]";
} else {
  wpjackq=0;
  document.getElementById("lwindjcd").innerHTML = "";
  document.getElementById("lwindjq").innerHTML = "";
  document.getElementById("lwindjtw").innerHTML = "";
  document.getElementById("lwindjtv").innerHTML = "";
};
//thermal waterproof jacket tjack
if  ( (tempmin < 0) && (dayslength > 0) ) {
  tjackq=1;
} else if (tempmin <5 && dayslength>=4){
  tjackq=1;
} else {
  tjackq=0;
}
if (tjackq>0) {
  document.getElementById("tjackcd").innerHTML = "Thermal w.p jacket";
  document.getElementById("tjackq").innerHTML = tjackq + " [unit]";
  document.getElementById("tjacktw").innerHTML = ((tjackq*tjackw)/1000) + " [kg]";
  document.getElementById("tjacktv").innerHTML = (tjackq*tjackv) + " [lt]";
} else {
  document.getElementById("tjackcd").innerHTML = "";
  document.getElementById("tjackq").innerHTML = "";
  document.getElementById("tjacktw").innerHTML = "";
  document.getElementById("tjacktv").innerHTML = "";
};
//First Layer Leg fllegs
if  ( (tempmin < 10) && (dayslength >= 4) ) {
        fllegsq=2;
      } else if ((tempmin < 10) && (dayslength>=1)){
      fllegsq=1;
    } else {
      fllegsq=0;
}
if (fllegsq>0) {
  document.getElementById("fllegscd").innerHTML = "First layer leg";
  document.getElementById("fllegsq").innerHTML = fllegsq + " [unit]";
  document.getElementById("fllegstw").innerHTML = ((fllegsq*fllegsw)/1000) + " [kg]";
  document.getElementById("fllegstv").innerHTML = (fllegsq*fllegsv) + " [lt]";
} else {
  document.getElementById("fllegscd").innerHTML = "";
  document.getElementById("fllegsq").innerHTML = "";
  document.getElementById("fllegstw").innerHTML = "";
  document.getElementById("fllegstv").innerHTML = "";
};
//First Layer sleeve flsleevs
if  ( (tempmin < 10) && (dayslength >= 4) ) {
        flsleevsq=2;
      } else if ((tempmin < 10) && (dayslength>=1)){
      flsleevsq=1;
    } else {
      flsleevsq=0;
}
if (flsleevsq>0) {
  document.getElementById("flsleevscd").innerHTML = "First layer sleeve";
  document.getElementById("flsleevsq").innerHTML = flsleevsq + " [unit]";
  document.getElementById("flsleevstw").innerHTML = ((flsleevsq*flsleevsw)/1000) + " [kg]";
  document.getElementById("flsleevstv").innerHTML = (flsleevsq*flsleevsv) + " [lt]";
} else {
  document.getElementById("flsleevscd").innerHTML = "";
  document.getElementById("flsleevsq").innerHTML = "";
  document.getElementById("flsleevstw").innerHTML = "";
  document.getElementById("flsleevstv").innerHTML = "";
};
//light weight pants lwpant
if  ( (tempmin <= 7) && (dayslength > 1) ) {
  lwpantq=1;
  document.getElementById("lwpantcd").innerHTML = "Light weight pant";
  document.getElementById("lwpantq").innerHTML = lwpantq + " [unit]";
  document.getElementById("lwpanttw").innerHTML = ((lwpantq*lwpantw)/1000) + " [kg]";
  document.getElementById("lwpanttv").innerHTML = (lwpantq*lwpantv) + " [lt]";
  } else {
  lwpantq=0;
  document.getElementById("lwpantcd").innerHTML = "";
  document.getElementById("lwpantq").innerHTML = "";
  document.getElementById("lwpanttw").innerHTML = "";
  document.getElementById("lwpanttv").innerHTML = "";
};
//ski pant ski
if  ( (tempmin < 0) && (dayslength > 0) ) {
  skiq=1;
} else if (tempmin <5 && dayslength>=4){
  skiq=1;
} else {
  skiq=0;
}
if (skiq>0) {
  document.getElementById("skicd").innerHTML = "Ski pant";
  document.getElementById("skiq").innerHTML = skiq + " [unit]";
  document.getElementById("skitw").innerHTML = ((skiq*skiw)/1000) + " [kg]";
  document.getElementById("skitv").innerHTML = (skiq*skiv) + " [lt]";
} else {
  document.getElementById("skicd").innerHTML = "";
  document.getElementById("skiq").innerHTML = "";
  document.getElementById("skitw").innerHTML = "";
  document.getElementById("skitv").innerHTML = "";
};
//short pant short
if (dayslength >= 4) {
  shortq=2;
} else if (dayslength > 0) {
  shortq=1;
}
if (shortq>0) {
  document.getElementById("shortcd").innerHTML = "Short";
  document.getElementById("shortq").innerHTML = shortq + " [unit]";
  document.getElementById("shorttw").innerHTML = ((shortq*shortw)/1000) + " [kg]";
  document.getElementById("shorttv").innerHTML = (shortq*shortv) + " [lt]";
} else {
  document.getElementById("shortcd").innerHTML = "";
  document.getElementById("shortq").innerHTML = "";
  document.getElementById("shorttw").innerHTML = "";
  document.getElementById("shorttv").innerHTML = "";
};
//boxer boxer
if (dayslength >= 4) {
  boxerq=4;
} else if (dayslength >= 3) {
  boxerq=3;
} else if (dayslength >= 2) {
  boxerq=2;
} else if (dayslength >= 1) {
  boxerq=1;
} else {
  boxerq=0;
}
if (boxerq>0) {
  document.getElementById("clothing").innerHTML = "Clothing";
  document.getElementById("boxercd").innerHTML = "Underwear";
  document.getElementById("boxerq").innerHTML = boxerq + " [unit]";
  document.getElementById("boxertw").innerHTML = ((boxerq*boxerw)/1000) + " [kg]";
  document.getElementById("boxertv").innerHTML = (boxerq*boxerv) + " [lt]";
} else {
  document.getElementById("boxercd").innerHTML = "";
  document.getElementById("boxerq").innerHTML = "";
  document.getElementById("boxertw").innerHTML = "";
  document.getElementById("boxertv").innerHTML = "";
};
//socks socket
if (dayslength >= 4) {
  socketq=4;
} else if (dayslength >= 3) {
  socketq=3;
} else if (dayslength >= 2) {
  socketq=2;
} else if (dayslength >= 1) {
  socketq=1;
} else {
  socketq=0;
}
if (socketq>0) {
  document.getElementById("socketcd").innerHTML = "Socks";
  document.getElementById("socketq").innerHTML = socketq + " [unit]";
  document.getElementById("sockettw").innerHTML = ((socketq*socketw)/1000) + " [kg]";
  document.getElementById("sockettv").innerHTML = (socketq*socketv) + " [lt]";
} else {
  document.getElementById("socketcd").innerHTML = "";
  document.getElementById("socketq").innerHTML = "";
  document.getElementById("sockettw").innerHTML = "";
  document.getElementById("sockettv").innerHTML = "";
};
//thermal gloves glove
if  ( (tempmin < 8) && (dayslength > 0) ) {
  gloveq=1;
  document.getElementById("glovecd").innerHTML = "Thermal Gloves";
  document.getElementById("gloveq").innerHTML = gloveq + " [unit]";
  document.getElementById("glovetw").innerHTML = ((gloveq*glovew)/1000) + " [kg]";
  document.getElementById("glovetv").innerHTML = (gloveq*glovev) + " [lt]";
} else {
  gloveq=0;
  document.getElementById("glovecd").innerHTML = "";
  document.getElementById("gloveq").innerHTML = "";
  document.getElementById("glovetw").innerHTML = "";
  document.getElementById("glovetv").innerHTML = "";
};
//All terrain running shoes
if  ( dayslength > 0 ) {
  shoeq=1;
  document.getElementById("shoecd").innerHTML = "Shoes";
  document.getElementById("shoeq").innerHTML = shoeq + " [unit]";
  document.getElementById("shoetw").innerHTML = ((shoeq*shoew)/1000) + " [kg]";
  document.getElementById("shoetv").innerHTML = (shoeq*shoev) + " [lt]";
} else {
  shoeq=0;
  document.getElementById("shoecd").innerHTML = "";
  document.getElementById("shoeq").innerHTML = "";
  document.getElementById("shoetw").innerHTML = "";
  document.getElementById("shoetv").innerHTML = "";
};
//thermal cap
if  ( (tempmin <= 5) && (dayslength > 0) ) {
  capq=1;
  document.getElementById("capcd").innerHTML = "Cap";
  document.getElementById("capq").innerHTML = capq + " [unit]";
  document.getElementById("captw").innerHTML = ((capq*capw)/1000) + " [kg]";
  document.getElementById("captv").innerHTML = (capq*capv) + " [lt]";
} else {
  capq=0;
  document.getElementById("capcd").innerHTML = "";
  document.getElementById("capq").innerHTML = "";
  document.getElementById("captw").innerHTML = "";
  document.getElementById("captv").innerHTML = "";
};
//feet insulation feet
if  ( (tempmin <= 5) && (dayslength > 0) ) {
  feetq=1;
  document.getElementById("feetcd").innerHTML = "Feet insulation";
  document.getElementById("feetq").innerHTML = feetq + " [unit]";
  document.getElementById("feettw").innerHTML = ((feetq*feetw)/1000) + " [kg]";
  document.getElementById("feettv").innerHTML = (feetq*feetv) + " [lt]";
} else {
  feetq=0;
  document.getElementById("feetcd").innerHTML = "";
  document.getElementById("feetq").innerHTML = "";
  document.getElementById("feettw").innerHTML = "";
  document.getElementById("feettv").innerHTML = "";
};
//neck neck
if  ( (tempmin <= 8) && (dayslength > 0) ) {
  neckq=1;
  document.getElementById("neckcd").innerHTML = "Neck gaiter";
  document.getElementById("neckq").innerHTML = neckq + " [unit]";
  document.getElementById("necktw").innerHTML = ((neckq*neckw)/1000) + " [kg]";
  document.getElementById("necktv").innerHTML = (neckq*neckv) + " [lt]";
} else {
  neckq=0;
  document.getElementById("neckcd").innerHTML = "";
  document.getElementById("neckq").innerHTML = "";
  document.getElementById("necktw").innerHTML = "";
  document.getElementById("necktv").innerHTML = "";
};
//towell towell
if  ( ( campop == 1 ) && (dayslength >= 2) ) {
  towellq=1;
  document.getElementById("towellcd").innerHTML = "Towell";
  document.getElementById("towellq").innerHTML = towellq + " [unit]";
  document.getElementById("towelltw").innerHTML = ((towellq*towellw)/1000) + " [kg]";
  document.getElementById("towelltv").innerHTML = (towellq*towellv) + " [lt]";
} else {
  towellq=1;
  document.getElementById("towellcd").innerHTML = "";
  document.getElementById("towellq").innerHTML = "";
  document.getElementById("towelltw").innerHTML = "";
  document.getElementById("towelltv").innerHTML = "";
};
//poner aqui la suma del equipo
totalropav=((tshirtq*tshirtv)+(fleeceq*fleecev)+(lwindjq*lwindjv)+(wpjackq*wpjackv)+(tjackq*tjackv)+(fllegsq*fllegsv)+(flsleevsq*flsleevsv)+(lwpantq*lwpantv)+(skiq*skiv)+(shortq*shortv)+(boxerq*boxerv)+(socketq*socketv)+(gloveq*glovev)+(shoeq*shoev)+(capq*capv)+(feetq*feetv)+(neckq*neckv)+(towellq*towellv));
totalropaw=((tshirtq*tshirtw)+(fleeceq*fleecew)+(lwindjq*lwindjw)+(wpjackq*wpjackw)+(tjackq*tjackw)+(fllegsq*fllegsw)+(flsleevsq*flsleevsw)+(lwpantq*lwpantw)+(skiq*skiw)+(shortq*shortw)+(boxerq*boxerw)+(socketq*socketw)+(gloveq*glovew)+(shoeq*shoew)+(capq*capw)+(feetq*feetw)+(neckq*neckw)+(towellq*towellw))/1000;
};
//Resuming totals function here.
//This part of the code will sum up the weight the ciclist will bring for the trip.
equipment4 = function () {
  volumenresume = Math.round((totalropav+totalbikerelatedv+totalelectronicsv+totalhealthbodyv2+totaldocumv+totalcampingv+totalhealthbodyv1), 3);
  weightresume = Math.round((totalropaw+totalbikerelatedw+totalelectronicsw+totalhealthbodyw2+totaldocumw+totalcampingw+totalhealthbodyw1), 3);
  document.getElementById("volume").innerHTML = volumenresume;
  document.getElementById("weight").innerHTML = weightresume;
};
