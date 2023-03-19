async function main(){
    const countContainer = document.querySelector('#count-container');
    const incrementButton = document.querySelector('#increment-button');
    const decrementButton = document.querySelector('#decrement-button');
    const resetButton = document.querySelector('#Reset');

    const response = await fetch('http://localhost:9001/counter');

    const result = await response.json();
    
    let countValue = result.value;

    function increment(){
        countValue++;
        countContainer.textContent = countValue;
        update()
    }

    function decrement(){
        countValue--;
        countContainer.textContent = countValue;
        update()
    }

    function resetTest(){
        countValue = 11;
        countContainer.textContent = countValue;
        
    }

    async function update(){
        await fetch('http://localhost:9001/counter',{
            method:'PATCH',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({ 
            'value': countValue
            })
        })
    }

    incrementButton.addEventListener('click', increment);
    decrementButton.addEventListener('click', decrement);
    resetButton.addEventListener('click', resetTest)
    countContainer.textContent = countValue;
}
main()