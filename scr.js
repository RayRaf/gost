

        var obj = document.getElementsByClassName('specitem');
        var arr = Object.entries(obj);
       
        
        console.log(arr.length);

        
       
        var list= document.getElementsByClassName("speccontainer");
            for (var i = 0; i < list.length; i++) {
            //    list[i].style.background= "red";
            var st = getStyles(list[i]);
            var compst = getComputedStyle(list[i]).height;     

            console.log(compst);

            //console.log(getComputedStyle(list[i]).height);




            var val = Number.parseInt(compst.replace("px",""));
            console.log(val);
            if(val > 677) alert("Данные не влезают на первую странцу");
            

        }





        function getStyles( elem ) {
            return window.getComputedStyle( elem, null );
        }



       