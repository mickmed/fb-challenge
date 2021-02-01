### Challenge

Welcome to the FB-Challenge

- assigned 1/28 @ 5pm
- due 2/1 @ 9am
- delivered 2/1 @ 9am

#### Component Heirarchy

```
            App
        /    |    \
Shipping  Billing  OrderReview
```


#### Deployed 
- [Live Example](https://fb-challenge.netlify.app/)

#### Summary
- The most enjoyable part of the challenge was calculating the discounts and totals for the 'A' and 'B' items, i,e., ```buy 2 for 100``` and ```buy two get one free```. The code for this can be seen in the [Helpers/index.js file](/src/Components/Helpers/index.js).

<br>
#### Challenge Directions

<details>
<summary>Instructions Here</summary>

```
Create an order review page with two headers

· First header has the brand name and image. The header disappears as you scroll down the page

· Second header has the different steps of checkout – Shipping, Billing and Review. This is a sticky header

· Display shipping information in a content block

· Display billing information in a content block

· Use 3 different CSS methods for displaying the items in the order in columns.

o Assume the following for the columns –
// name | price | Qty | discount

· Given the above items, write a function to calculate the order total and display in a separate line.

Assume items in the order are

//scenario 1= ['A', 'A', 'B', 'C', 'C', 'D']
//scenario 2 = ['A', 'A', 'A', 'A','A', 'B', 'B', 'C', 'D']

//Pricing and promotions on items

// name | price | discount

// A | 60 | Buy 2 for 100
// B | 70 | Buy 2 get 1 free
// C | 10 | -
// D | 20 | -

```
</details>