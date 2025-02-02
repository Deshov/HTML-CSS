window.onload = function(){
    updateContent(cashwaveInfo);
};

const cashwaveInfo = `European digital gift cards and savings.
    
    Cashwave helps global employee engagement platforms reward millions of employees of Fortune 500 companies in Europe.
            We are your trusted partner for instant digital gift cards and employee savings throughout the continent.`

const logoElement = document.querySelector(".logo");

logoElement.addEventListener("click", function(){
   updateContent(cashwaveInfo);
});

function updateContent(text) {
    document.getElementById('content-text').innerText = text ;
}

function toggleDropdown(event) {
         const dropdownContent = event.target.nextElementSibling;
         const isVisible = dropdownContent.style.display === 'block';
         dropdownContent.style.display = isVisible ? 'none' : 'block';
    }