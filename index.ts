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
    console.log('Callback executed.');
  }
  
  async function run(): Promise<void> {
    console.log('Before callback.');
  
    await delay(2000); // Wait for 2000 milliseconds
  
    console.log('After callback.');
  
    await callback(); // Execute the callback asynchronously
  
    console.log('Callback finished.');
  }
  
  run();
  

}catch(error){

}finally{

}