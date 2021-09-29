function totalSales(shirt,pant,panjabi){
    const shirtPrice = 500;
    const pantPrice = 600;
    const panjabiPrice = 1200;
    const totalPriceOfShirt = shirtPrice * shirt;
    const totalPriceOfPant  = pantPrice * pant;
    const totalPriceOfpanjabi = panjabiPrice * panjabi;
    const totalsale = totalPriceOfShirt + totalPriceOfPant + totalPriceOfpanjabi;
    return totalsale;
}
shirtQuantity = 2;
pantQuantity = 3;
panjabiQuantity = 1;
const totalSale = totalSales(shirtQuantity,pantQuantity,panjabiQuantity)
console.log(totalSale);