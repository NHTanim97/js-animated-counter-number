

    // for project
    /*
    * count = 0;
    ---1st num1 এর value মানে count এর মান 0 ধরা হয়েছে ।

    * setInterval
    ---মানে হল নির্দিষ্ট time গতিতে increment হবে ।
    ---project = function name;
    ---1000 milisec = 1 sec এখানে 10 দেয়া হয়েছে । 
    */
    var count = 0;
    var project = setInterval(project,10);



    function project(){
        /*
        * count ++ মানে ১ করে বারবে ।
        * var num1 = document.getElementById('num1').innerHTML = count;
        --- innerHTML = count মানে count এর মান বসিয়ে দেয়া হয়েছে ।
        */
        count ++;
        var num1 = document.getElementById('num1').innerHTML = count;

        /*
        * count === 200
        --- ২০০ পর্যন্ত হবে ।

        *clearInterval(project)
        ---২০০ পর্যন্ত যাবে পরে stop & clear হয়ে যাবে ।
        */
        if(count === 200)
        {
            clearInterval(project)
        }
    }




    // ---------for client
    var count2 = 0;
    var client = setInterval(client,10);

    function client(){   
        count2 ++;
        var num2 = document.getElementById('num2').innerHTML = count2;

        if(count2 === 300)
        {
            clearInterval(client)
        }
    }



    
    //-----------for achive
    var count3 = 0;
    var achive = setInterval(achive,10);

    function achive(){   
        count3 ++;
        var num3 = document.getElementById('num3').innerHTML = count3;

        if(count3 === 300)
        {
            clearInterval(achive)
        }
    }