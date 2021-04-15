

        var obj = document.getElementsByClassName('specitem');
        var arr = Object.entries(obj);
       
        
        console.log(arr.length);

        
       
        var list= document.getElementsByClassName("speccontainer");
            for (var i = 0; i < list.length; i++) {
            //    list[i].style.background= "red";
            var st = getStyles(list[i]);
        
            console.log(getComputedStyle(list[i]).height);

            // var val = Number.parseFloat(list[i].height);
            // if(val < 650) alert("Данные не влезают на первую странцу");
            

        }





        function getStyles( elem ) {
            return window.getComputedStyle( elem, null );
        }



       