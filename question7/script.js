const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise 1 resolved');
    }, 1000);
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Promise 2 rejected');
    }, 2000);
  });
  
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise 3 resolved');
    }, 3000);
  });
  Promise.allSettled([promise1,promise2,promise3])
  .then((value)=>{
console.log(value)
  })
  .catch((err) =>{
    console.log(err)
  })