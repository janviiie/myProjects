var pageno = 1;
        function onpage(pagno){
function fetchData(per_page) {
    let totalpage = 0;
    const apiUrl = `https://reqres.in/api/users?page=${pageno}&per_page=${per_page}`; 
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
   
            totalpage=data.total/per_page;
            const grid = document.getElementById('grid');
            const pagination = document.getElementById('pagination');
            // Clear the existing table data
            while(grid.rows.length>1)
            {
              grid.deleteRow(1);

            }
            // grid.innerHTML = '';
            // Populate the grid with data
            data.data.forEach(user => {
                const row = grid.insertRow();
                const cell1 = row.insertCell(0);
                const cell2 = row.insertCell(1);
                const cell3 = row.insertCell(2);
                const cell4 = row.insertCell(3);
                cell1.innerHTML = user.id;
                cell2.innerHTML = user.email;
                cell3.innerHTML = user.first_name + ' ' + user.last_name;
                cell4.innerHTML = `<img src="${user.avatar}" alt="Avatar">`;
            });
            // You can implement pagination logic here
            // For simplicity, you can simply display a message about pagination or load more data.
            // document.getElementById('page-number').textContent = `${pagno}`;
        
            // Update the button labels to show the page numbers
            const previousButton = document.getElementById('prev-button');
            const nextButton = document.getElementById('next-button');
   
            // You can update the button labels as per your requirement
            previousButton.textContent = `${pagno - 1}`;
            nextButton.textContent = `${pagno}`;
        
            // Enable or disable buttons as needed
            if(pageno === 1){
                previousButton.textContent = 'first'
                previousButton.disabled = true;
            }
            else {
                previousButton.textContent = `${pagno - 1}`;
                previousButton.disabled = false;
            }
            if(pageno === totalpage){
                nextButton.textContent = 'last'
                nextButton.disabled = true;
            }
            else{
                nextButton.textContent = `${pagno}`
                nextButton.disabled = false;
            }
         

        })
        .catch(error => console.error('Error fetching data:', error));
    
           
      
       
}
// Call the fetchData function to load data from the API
fetchData(3);
        }
        function getnextPage(){
            pageno+=1;
            onpage(pageno);
        };
        onpage(1);
        function getPreviousPage(){
            pageno-=1;
            onpage(pageno);
        };

onpage(1);


        








































// var pageno =1;
// function onpage(pageno){
// fetch (`https://reqres.in/api/users?page=${pageno}&per_page=2`)
//     .then(res =>{
//           return res.json();
//     })
//     .then(data =>{
//         console.log(data);
//         const box = document.querySelector('.box');
//         box.innerHTML = '';
//         for(let i of data.data)
//         {
//             const div = document.createElement('div')
//             div.classList = "col-md-6"
//             div.style.width = "18rem"
//             div.innerHTML=`<img src="${i.avatar}" class="card-img-top" alt="...">
//             <div class="card-body">
//               <h5 class="card-title">${i.first_name}</h5>
//               <h5 class="card-title"> ${i.email}</h5>
//               <a href="#" class="btn btn-primary">Go somewhere</a>
//             </div> `
//             box.appendChild(div);
//         }
//     });
// }
// function getNext()
// {
//    pageno+=1;
//    onpage(pageno);
// }
// function getPrevious()
// {
//     pageno-=1;
//     onpage(pageno);
// }
// onpage(1);   