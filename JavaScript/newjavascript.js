

    const sales = [ 
    
        { item: 'PS4 Pro', stock: 3, original: 399.99 }, 
        
        { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 }, 
        
        { item: 'Nintendo Switch', stock: 4, original: 299.99 }, 
        
        { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 }, 
        
        { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 } 
        
        ]; 
        let  total,sale,original,item,stock,Discount,allitems;
        const details = sales.map((items) => {
            if (items.discount==null) {
                total=items.stock * items.original,sale =items.original;
                Discount=items.discount,original=items.original,item=items.item;stock=items.stock;
                allitems={ item,stock,original,total,sale }
            } 
            else {
                sale=((items.original - (items.original*items.discount)).toFixed(2)) ,total = items.stock *sale 
                    {   Discount=items.discount,original=items.original,item=items.item;stock=items.stock;
                        allitems= {item,stock,original,Discount,total,sale }
                    } 
                }  
                console.log(allitems)
        } ) 


            

