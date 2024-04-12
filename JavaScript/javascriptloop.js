      
       
      
    function count( str )
    {
        for( let i = 0 ;i < str.length ;i++)
        { 
            let count = 0;
            for( let j = 0 ;j < str.length ;j++)
            {
                if( str[i].toUpperCase() == str[j].toUpperCase() && i > j  )
                    {
                    break;
                    }
                if( str[i].toUpperCase() == str[j].toUpperCase() )
                    {
                    count++;
                    }
                }
                if( count > 0)
                console.log(str[i].toUpperCase()+"====>"+count );
        }
            
    }
        let strng="Hey there ! how are you today?\n";
        console.log("\nYour String:\n"+strng)
        str =strng.split(" ").join("");
        count( str);
        