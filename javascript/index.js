// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  // getInstruction("mashedPotatoes", 0, (step1) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 1, (step2) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 2, (step3) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 3, (step4) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 4, (step5) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  //   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  // }, (error) => console.log(error));



// Iteration 1 - using callbacks
// ...
getInstruction("mashedPotatoes", 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction("mashedPotatoes", 1, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
        getInstruction("mashedPotatoes", 2, (step3) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
            getInstruction("mashedPotatoes", 3, (step4) => {
              document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
                getInstruction("mashedPotatoes", 4, (step5) => {
                  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
                  document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed Potatoes</li>`;
                  document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
                  
                }, (error) => console.log(error));
            }, (error) => console.log(error));
        }, (error) => console.log(error));
    }, (error) => console.log(error));
}, (error) => console.log(error));


// Iteration 2 - using promises
// ...
  obtainInstruction('steak', 0)
  .then( (step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    return obtainInstruction ('steak',1);
  })
  .then( (step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    return obtainInstruction ('steak',2);
  })
  .then( (step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    return obtainInstruction ('steak',3);
  })
  .then( (step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    return obtainInstruction ('steak',4);
  })
  .then( (step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    return obtainInstruction ('steak',5);
  })
  .then( (step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
    return obtainInstruction ('steak',6);
  })
  .then( (step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
    document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`
    return obtainInstruction ('steak',7);
  })
  // .then( (step8) => {
  //   document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`
  //   return obtainInstruction ('steak',8);
  



  


// Iteration 3 using async/await
// ...
async function makeBroccoli (){
  await obtainInstruction('broccoli', 0);
  document.querySelector("#broccoli").innerHTML += `<li>${broccoli[0]}</li>`
  
  await obtainInstruction('broccoli', 1);
  document.querySelector("#broccoli").innerHTML += `<li>${broccoli[1]}</li>`

  await obtainInstruction('broccoli', 2);
  document.querySelector("#broccoli").innerHTML += `<li>${broccoli[2]}</li>`

  await obtainInstruction('broccoli', 3);
  document.querySelector("#broccoli").innerHTML += `<li>${broccoli[3]}</li>`

  await obtainInstruction('broccoli', 4);
  document.querySelector("#broccoli").innerHTML += `<li>${broccoli[4]}</li>`

  await obtainInstruction('broccoli', 5);
  document.querySelector("#broccoli").innerHTML += `<li>${broccoli[5]}</li>`

  await obtainInstruction('broccoli', 6);
  document.querySelector("#broccoli").innerHTML += `<li>${broccoli[6]}</li>`

  await obtainInstruction('broccoli', 7);
  document.querySelector("#broccoli").innerHTML += `<li>${broccoli[7]}</li>`
  document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`
  




}
makeBroccoli();

// Bonus 2 - Promise all
// ...

// async function makeBrussels (){
//   for (let i = 0; i<brusselsSprouts.length; i++){
//     await obtainInstruction('brusselsSprouts', i);
//     document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSprouts[i]}</li>`
//   }
// }
// makeBrussels ();
// async function makeBrussels (){
//   const promise = new Promise ((resolve, reject)=>{

//   })


// }

let p0, p1, p2, p3, p4, p5, p6, p7, p8, p9;

p0= obtainInstruction("brusselsSprouts", 0);
p1= obtainInstruction("brusselsSprouts", 1);
p2= obtainInstruction("brusselsSprouts", 2);
p3= obtainInstruction("brusselsSprouts", 3);
p4= obtainInstruction("brusselsSprouts", 4);
p5= obtainInstruction("brusselsSprouts", 5);
p6= obtainInstruction("brusselsSprouts", 6);
p7= obtainInstruction("brusselsSprouts", 7);
// p8= obtainInstruction("brusselsSprouts", 8);
// p9= obtainInstruction("brusselsSprouts", 9);

function makeBrussels (){

Promise.all([p0, p1, p2, p3, p4, p5, p6, p7])
.then(()=>{
  for(let i = 0; i<brusselsSprouts.length; i++ ){
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSprouts[i]}</li>`
  }
  document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`
 
})



}
makeBrussels()


function imagenes(){
 

  setTimeout(()=>{
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
    document.querySelector("#broccoliImg").removeAttribute("hidden");
    document.querySelector("#steakImg").removeAttribute("hidden");
  }, 4000)

}

imagenes()



// document.getElementsByTagName("img").removeAttribute("hidden");
// // document.getElementById("#brusselsSproutsImg").removeAttribute("hidden");




