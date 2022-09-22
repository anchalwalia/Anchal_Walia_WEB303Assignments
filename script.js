/*
	WEB 303 Assignment 1 - jQuery
	{Anchal Walia}
*/
$("document").ready(() => {

	const annualEarning = $("#yearly-salary");
	const techPortion = $("#percent");
	const techCost = $("#amount");

	function calculateExpense(){
		let amount = annualEarning.val() * techPortion.val() / 100;
		techCost.text(`$${amount.toFixed(2)}`);
	}
	annualEarning.keyup(calculateExpense);
	techPortion.keyup(calculateExpense);
});
