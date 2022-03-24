
function greet() {
    console.log('logging completed');
}
setTimeout(greet, 9000);
console.log('logger started...');

setTimeout(greet, 5000);
console.log('logger delayed...');