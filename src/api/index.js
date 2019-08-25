import array from '@/library/array';

export default (() => {
  const obj = {
    server: {
      url: 'http://localhost:3000/graphql',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        alg: 'HS256',
        typ: 'JWT',
      },
    },
  };
  obj.request = async (args) => {
    const res = await fetch(obj.server.url, {
      method: obj.server.method,
      headers: {
        ...obj.server.headers,
        ...args.headers,
      },
      body: args.body,
    });
    const ret = await res.json();
    return ret;
  };
  obj.login = async (email, password) => {
    const key = 'login';
    const query = `
        mutation ${key}{
          ${key}(
          email: "${email}",
          password: "${password}")
        }
      `;
    const res = await obj.request({ body: array.s({ query }) });
    return { data: res.data[key], errors: res.errors };
  };
  obj.signup = async (username, email, password) => {
    const key = 'signup';
    const query = `
        mutation ${key}{
          ${key}(
          username: "${username},"
          email: "${email}",
          password: "${password}")
        }
      `;
    const res = await obj.request({ body: array.s({ query }) });
    return { data: res.data[key], errors: res.errors };
  };
  obj.addTodo = async (token, title) => {
    const key = 'addTodo';
    const query = `
        mutation ${key}{
          ${key}(
          title: "${title}"){
            id
            userId
            title
          }
        }
      `;
    const res = await obj.request({
      headers: { token },
      body: array.s({ query }),
    });
    return { data: res.data[key], errors: res.errors };
  };
  obj.me = async (token) => {
    const key = 'me';
    const query = `
      query ${key}{
        ${key}{
          id,
          username,
          email
        }
      }
    `;
    const res = await obj.request({
      headers: { token },
      body: array.s({ query }),
    });
    return { data: res.data[key], errors: res.errors };
  };

  obj.myTodos = async (token) => {
    const key = 'myTodos';
    const query = `
      query ${key}{
        ${key}{
          userId,
          title
        }
      }
    `;
    const res = await obj.request({
      headers: { token },
      body: array.s({ query }),
    });
    return { data: res.data[key], errors: res.errors };
  };

  return obj;
})();
