function deliveryCost(deliveryQuantity){
    const deliveryCostOneToHunderdPerPic = 100;
    const deliveryCostOneHunderdToTwoHunderdPerPic = 80; 
  if(deliveryQuantity <= 100){
    const onetoHunderdDreliverycost = deliveryQuantity * deliveryCostOneToHunderdPerPic;
    return onetoHunderdDreliverycost;
  }
  else if(deliveryQuantity <= 200){
     var OneToHunderdTotalcost = 100 * deliveryCostOneToHunderdPerPic ;
     var oneHunderdToTowHunderdQuntity = deliveryQuantity - 100;
     var totalDeliveryCostOneHunderdTotwoHunderd = oneHunderdToTowHunderdQuntity * deliveryCostOneHunderdToTwoHunderdPerPic;
     var totalDeliveryCostOneToTwoHundreade = OneToHunderdTotalcost + totalDeliveryCostOneHunderdTotwoHunderd;
     return totalDeliveryCostOneToTwoHundreade;
  }
  else{
     var deliveryCostOneToHunderd = 100 * 100;
     var deliverycostOneHunderdTotowHunderd = 80 * 100;
     var totalcostOneToTowHundread = deliverycostOneHunderdTotowHunderd + deliveryCostOneToHunderd;
     var OtherQuantity = deliveryQuantity - 200;
     var totalCostOthersQuantity = OtherQuantity * 50; 
     var oneToOtherQuntityTotalDeliveryCost = totalcostOneToTowHundread + totalCostOthersQuantity; 
     return oneToOtherQuntityTotalDeliveryCost;
  }
}
 b = deliveryCost(201);
 console.log(b);