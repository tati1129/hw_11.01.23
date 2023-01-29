let myProducts =[];
const container = document.querySelector('.container')


fetch("https://fakestoreapi.com/products")
    .then((response) => {
        return response.json()
    })
    .then((products) => {
        myProducts = [...products];
        render()
})

function render(){
    container.innerHTML = '';
    myProducts.forEach((prod) => {
        const card = document.createElement('div');
        card.classList.add('card')
        card.innerHTML = `
        <div class="title">${prod.title}</div>
            <div class="category">${prod.category}</div>
            <div class="image">
                <img src=${prod.image} alt="">
            </div>
            <div class="description">${prod.description}</div>
            <div class="price">${prod.price}$</div>
            <div class="rating">
                <div class="rate">rate - ${prod.rating.rate}</div>
                <div class="count">count - ${prod.rating.count}</div>
            </div>
            <button class="del">Удалить</button>
        `
        container.append(card)
        const del = card.querySelector('.del')
        del.addEventListener('click', () => removeCard(prod))
    })
}


function removeCard(prod){
    myProducts = [...myProducts.filter(item => item.id != prod.id)]
    render()
}
