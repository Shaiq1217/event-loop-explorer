export const SCREEN_WIDTH = {
	SM: 640,
};

export const CODE_BLOCK = `console.log(1);  
setTimeout(() => console.log(2), 0);  
queueMicrotask(() => console.log(3));  
Promise.resolve().then(() => {
    console.log(4);
});   
setTimeout(() => console.log(5), 500);  
console.log(6);`;
