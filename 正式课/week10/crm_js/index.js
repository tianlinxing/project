let list = document.getElementById('list');

function bindHTML(data) {
  let str = ``;
  data.forEach(({id, name, age, phone, address}) => {
    str += `<li>
      <span class="w50">${id}</span>
      <span class="w150">${name}</span>
      <span class="w50">${age}</span>
      <span class="w200">${phone}</span>
      <span class="w200">${address}</span>
      <span class="w150">
        <a href="/modify.html?id=${id}">修改</a>
        <a href="javascript: void 0;" type="del" data-id="${id}">删除</a>
      </span>
    </li>`
  });
  list.innerHTML = str;
}

axios.get('/api/getList').then(({data}) => {
  if (data.code === 0) {
    bindHTML(data.data)
  }
});

list.onclick = function (e) {
  if (e.target.nodeName.toUpperCase() === 'A' && e.target.getAttribute('type') === 'del') {
    let id = e.target.getAttribute('data-id');
    let isDel =confirm(`您要删除id为${id}的用户吗`)
    if (isDel) {
      axios.get(`/api/removeInfo?id=${id}`).then(({data}) => {
        if (data.code === 0) {
          window.location.href = '/'
        }
      })
    }
  }
};