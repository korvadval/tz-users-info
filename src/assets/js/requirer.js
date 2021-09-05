var axios = require('axios');

function GetUser(id, callback) {
  const options = {
    method: "GET",
    url: "https://reqres.in/api/users/"+id
  }
  axios(options)
    .then(res => {
        callback(res.data);
    })
  .catch(err => {
    if (err.response) { 
      callback("Страница не найдена")
    } else if (err.request) { 
      callback("Подключение не установлено") 
    } 
  });
};

function GetResources(page, callback) {
  const options = {
    method: "GET",
    url: "https://reqres.in/api/unknown?page="+page
  }
  axios(options)
    .then(res => {
        callback(res.data);
    })
  .catch(err => {
    if (err.response) { 
      callback("Страница не найдена")
    } else if (err.request) { 
      callback("Подключение не установлено") 
    } 
  });
};

function GetListOfUsers(page, callback) {
  const options = {
    method: "GET",
    url: "https://reqres.in/api/users?page="+page
  }
  axios(options)
    .then(res => {
        callback(res.data);
    })
  .catch(err => {
    if (err.response) { 
      callback("Пользователь не найден")
    } else if (err.request) { 
      callback("Подключение не установлено") 
    } 
  });
};

function DeleteUser(id, callback) {
  const options = {
    method: "DELETE",
    url: "https://reqres.in/api/users/2"
  }
  axios(options)
    .then(res => {
        callback(res);
    })
  .catch(err => {
    if (err.response) { 
      callback("Страница не найдена")
    } else if (err.request) { 
      callback("Подключение не установлено") 
    } 
  });
};

function CheckLogin(login,password, callback) {
  const options = {
    method: "POST",
    data:{"email": login,"password": password},
    url: "https://reqres.in/api/login"
  }
  axios(options)
    .then(res => {
        callback(res);
    })
    .catch(err => {
      if (err.response) { 
        callback("Пользователь не найден")
      } else if (err.request) { 
        callback("Подключение не установлено")  
      } 
    });
};

function RegisterUser(login,password, callback) {
  const options = {
    method: "POST",
    data:{"email":login,"password":password},
    url: "https://reqres.in/api/register"
  }
  axios(options)
    .then(res => {
        callback("Пользователь зарегистрирован");
    })
    .catch(err => {
      if (err.response) { 
        callback("Проверьте данные")
      } else if (err.request) { 
        callback("Подключение не установлено")  
      } 
    });
};

function CreateUser(login,name,password,callback) {
  const options = {
    method: "POST",
    data:{"name":name,"email":login,"password":password},
    url: "https://reqres.in/api/users"
  }
  axios(options)
    .then(res => {
        callback(res);
    })
    .catch(err => {
      if (err.response) { 
        callback("Проверьте данные")
      } else if (err.request) { 
        callback("Подключение не установлено")  
      } 
    });
};
export default {GetUser,GetListOfUsers,CheckLogin,RegisterUser,CreateUser,DeleteUser,GetResources};