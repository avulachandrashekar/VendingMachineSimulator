/// <reference path="Quater.ts" />

class VendingMachine {
    private paid:number =0;

    acceptCoin = (coin: Quarter): void => {
        this.paid = this.paid + coin.Value;
        var element = document.getElementById("total");
        element.innerHTML = this.paid.toString();
    }
}