
// JSON 파일 Fetch를 이용하여 가져오기
function loadItems() {
    return fetch('data/data.json')
    .then(response => response.json())
    .then(json => json.items);

}

//  가져온 아이템들을 리스트 하기
function displayItems(items) {
    const container = document.querySelector('.items');
    const html = items.map(item => createHTMLString(item)).join('');
    // console.log(html);
    container.innerHTML = items.map(item => createHTMLString(item)).join('');
}

// item 리스트 HTML로 만들기
function createHTMLString(item){
    return `
        <li class="item">
            <img src="${item.image}" alt="${item.type}" class="item_thumbnail" />
            <span class="item_description">${item.gender}, ${item.size}</span>
        </li>
    `;
}

// main
loadItems()
.then(items => {
    // console.log(items);
    displayItems(items);
    // setEventListeners(items)
})
.catch(console.log);