
const calculateTax = (price, houseType)=>{
    
    tax = 0;
    if (houseType === 'apartment') {
        tax= price * 2 /100;
    } 
    else if(houseType === 'villa' ){
        tax= price * 4 /100;
    }
    else
    {
        throw new Error('House type is not valid!!!');
    }
    return tax;
}   

module.exports = calculateTax