//Making a class -- 
class Ecom
{
    constructor(itemName,price,discount,itemCode)
    {
        this.name = itemName;
        this.mrp = price;
        this.discount = discount;
        this.itemCode = itemCode;
    }
    //Getter--
    get itemName()
    {
        return this.name + " is a product";
    }
    get discountValue()
    {
        return this.mrp*(1-(this.discount/100));
    }
    //Setter--
    set setDiscount(value)
    {
        this.discount = value;
    }
}
//Extending a class ***!!!***
class Furninture extends Ecom
{
    constructor(itemName,price,discount,itemCode)
    {
        super(itemName,price,discount,itemCode);
        
    }
    get getitemName()
    {
        return this.itemName + "is a furiniture";
    }
}
let penicl = new Ecom('pencil',75,5,"P-108");
let chair = new Furninture("chair",499,10,"c-90");



