

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

            //Выведем на консоль все id элементов и значения высоты
            // var i = 1;
            // while (document.getElementById('line'+i) != undefined)
            //     {
            //         var ido = document.getElementById('line'+i).getAttribute('id');
            //         console.log(ido);
            //         var s = getStyles(document.getElementById('line'+i));
            //         var cs = getComputedStyle(document.getElementById('line'+i)).height;
            //         console.log(cs);
            //         i++;
            //     }
            

            
                
                var list_index = 1;
                for (var i = 1; i < arr.length+1; i++) {

                    
                    

                    var clonedNode = document.getElementById('line'+i).cloneNode(true);
                    clonedNode.id = "new_line"+i;
                    document.querySelector('#container'+list_index).appendChild(clonedNode);   

                    var cont = document.getElementById("container"+list_index);
                    var st = getComputedStyle(cont).height; 
                    var val = Number.parseInt(st.replace("px",""));
                        if(val>677)
                            {
                                document.getElementById('new_line'+i).remove();
                                list_index++;
                                i--;
                            }




                    console.log("подсчитано:"+st);

                }
            


                












            // var videoElement = document.getElementById('line1');
            // var idOfElement = videoElement.getAttribute('id');
            // console.log(idOfElement);



            //   var  i=1;
            // while (document.getElementById('line'+i) != undefined)
            // {
            //     var clonedNode = document.getElementById("line"+i).cloneNode(true);
            //     document.querySelector(".speccontainer").appendChild(clonedNode);     

            // }

               







        function getStyles( elem ) {
            return window.getComputedStyle( elem, null );
        }



       