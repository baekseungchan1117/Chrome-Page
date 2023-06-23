const searchInput = document.getElementById("search-input");

const showSearchReasult = () =>{
    let searchWord  = searchInput.value;
    window.location.href = `https://www.google.com/search?q=${searchWord}`
    searchWord="";
}

const enterKey = (event) =>{
    if(event.code === "Enter"){
        showSearchReasult();
    }
}

searchInput.addEventListener("keypress", (event) => {
    enterKey(event);
})