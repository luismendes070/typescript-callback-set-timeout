// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

try{

  function delay(ms: number): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  
  async function callback(): Promise<void> {
    appDiv.innerHTML = "<h1>Callback executed.</h1>";
    console.log('Callback executed.');
  }
  
  async function run(): Promise<void> {
    appDiv.innerHTML = "<h1>Before Callback.</h1>";
    console.log('Before callback.');
  
    await delay(2000); // Wait for 2000 milliseconds
  
    appDiv.innerHTML = "<h1>After callback.</h1>";
    console.log('After callback.');
  
    await callback(); // Execute the callback asynchronously
  
    appDiv.innerHTML = "<h1>Callback finished.</h1>";
    console.log('Callback finished.');
  }
  
  run();
  

}catch(error){

}finally{

}