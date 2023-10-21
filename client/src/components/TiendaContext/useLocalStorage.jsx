import React from "react";


function useLocalStorage(itemName, initialValue) {

    const [item, setItem] = React.useState(initialValue);
    
    
    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localGetElementItem = localStorage.getItem(itemName);
                let parsedItem;
    
                if(!localGetElementItem) {
                localStorage.setItem('COMPRA_300', JSON.stringify(initialValue));
                parsedItem = initialValue;
                }else {
                parsedItem = JSON.parse(localGetElementItem);
                setItem(parsedItem);
                };
    
                
            }catch(error) {
                console.log('error')
            }
        },1000)
    }, []);

    


    const saveItem = (newItem) => {
        localStorage.setItem('COMPRA_300', JSON.stringify(newItem));
        setItem(newItem);
    }

    return {
            item, 
            saveItem, 
        }
}

export { useLocalStorage }