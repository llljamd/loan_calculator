
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount: 4000, years: 2, rate:5})).toEqual("175.49");
  expect(calculateMonthlyPayment({amount: 8000, years: 2, rate:5})).toEqual("350.97");
  expect(calculateMonthlyPayment({amount: 4000, years: 4, rate:5})).toEqual("92.12");
  expect(calculateMonthlyPayment({amount: 4000, years: 2, rate:10})).toEqual("184.58");
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({amount: 4558.7, years: 2, rate:5})).toEqual("200.00");
});

