let isModify = /\?id=(\d+)/.exec(location.search);
let $ = selector => document.querySelector(selector);
let submit = $('.submit');
let name = $('#username');
let age = $('#age');
let phone = $('#phone');
let address = $('#address');

// 如果是修改，首先根据id获取数据
if (isModify) {
  let [,id] = isModify;
  axios.get(`/api/getInfo?id=${id}`).then(({data}) => {
    if (data.code === 0) {
      name.value = data.data.name;
      age.value = data.data.age;
      phone.value = data.data.phone;
      address.value = data.data.address;
    } else {
      alert(data.msg)
    }
  });
}

submit.onclick = function () {
  let params = {
    name: name.value,
    age: age.value,
    phone: phone.value,
    address: address.value
  };

  let api = ''
  if (isModify) {
    let [,id] = isModify;
    params.id = +id;
    api = '/api/updateInfo'
  } else {
    api = '/api/addInfo'
  }

  axios.post(api, params).then(({data}) => {
    if (data.code === 0) {
      window.location.href = '/'
    } else {
      alert(data.msg)
    }
  });
};