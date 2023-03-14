const goods = {
    1:   {id:1, 
        name: 'молоко',
        description:  '2,5%',
        sizes: "1 л", 
        price: 90, 
        available:  'в наличии'
    },
    2:   {id: 2,
        name: 'творог',
        description:  '9%',
        sizes: "200 гр.", 
        price: 150, 
        available:  'в наличии'
    },
    3: {id: 3,
        name: 'сметана',
        description:  '20%',
        sizes: "300 гр.", 
        price: 160, 
        available:  'в наличии'
    },
    4: { id: 4,
        name: 'сыр',
        description:  '45%',
        sizes: "200 гр.", 
        price: 350, 
        available:  'в наличии'
    },
    5: { id: 5,
        name: 'кефир',
        description:  '1,0%',
        sizes: "900 гр.", 
        price: 90, 
        available:  'в наличии'
    },
};
const basket = [
    {
      good: goods[3],
      amount: 3,
    },   
    {
      good: goods[5],
      amount: 2,
    },    
    {
    good: goods[1],
        amount: 10,
     }    
]
//очистка корзины
function emptyTrash() {
    basket.splice(0,basket.length);      
}

//удаление элемента корзины
function delBasketElement(i) {
    basket.splice(i,1);       
    }  

//Добавление элемента в корзин
function addBasketElement(i) {
    basket.push(goods[i]);
}

//Подсчет количества товаров в корзине
function countBasketGoods() {
    let counter_goods = 0;
    for(let i=0; i<basket.length;i++) {
        counter_goods+=basket[i].amount;
    }
    return counter_goods;
}
//Подсчет стоимости товаров в корзине
function orderCost() {
    let counter_orderCost = 0;
    for(let i=0; i<basket.length;i++) {
        productCost=basket[i].amount * basket[i].good.price;
        counter_orderCost+=productCost;
    }
    return counter_orderCost;
}
//Подсчет стоимости и количества товаров в корзине
function total() {   
    let totalvalue = {};
    let counter_goods = 0;
    for(let i=0; i<basket.length;i++) {
        counter_goods+=basket[i].amount;        
    }
    let counter_orderCost = 0;
    for(let i=0; i<basket.length;i++) {
        productCost=basket[i].amount * basket[i].good.price;
        counter_orderCost+=productCost;
    }    
    totalvalue.totalAmount= counter_goods;
    totalvalue.totalSumm = counter_orderCost;
    return totalvalue;
    
}
console.log(total());



