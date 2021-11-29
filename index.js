//jshint esversion:8
const modal = document.getElementById('modal');
const modalShow = document.getElementById('show-modal');
const modalClose = document.getElementById('close-modal');
const bookmarkForm = document.getElementById('bookmark-form');
const websiteNameEl = document.getElementById('website-name');
const websiteUrlEl = document.getElementById('website-url');
const bookmarksContainer = document.getElementById('bookmarks-container');

// Main Bookmarks array
let bookmarks = [];

// Show Modal 
function showModal() {
    modal.classList.add('show-modal');
    // Focus on first input in the form   
    websiteNameEl.focus();
}

function closeModal() {
    modal.classList.remove('show-modal');
}

// Modal Event Listeners
modalShow.addEventListener('click', showModal);
modalClose.addEventListener('click', closeModal);
window.addEventListener('click', (e) => (e.target === modal ? modal.classList.remove('show-modal') : false));

//Fetch Bookmarks
function fetchBookmarks() {
    if (localStorage.getItem('bookmarks')) {
        bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    } else {
        bookmarks = [
            {
                name: 'Class B Website',
                url: 'https://evozone.github.io/ClassBWebSite/',
            },
        ];
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }
    buildBookmarks();
}

// Handle Data entered in form
function storeBookmark(e) {
    e.preventDefault();
    const nameValue = websiteNameEl.value;
    let urlValue = websiteUrlEl.value;
    if (!nameValue || !urlValue) {
        alert('Please Submit values for both fields.');
        return false;
    }
    const bookmark = {
        name: nameValue,
        url: urlValue,
    };
    bookmarks.push(bookmark);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    fetchBookmarks();
    bookmarkForm.reset();
    closeModal();
}

//Delete Bookmarks(
function deleteBookmark(url){
    bookmarks.forEach((bookmark, i) => {
        if (bookmark.url === url) {
            bookmarks.splice(i,1);  
        } 
    });
    //Update bookmarks array
    localStorage.setItem('bookmarks' , JSON.stringify(bookmarks) );
    fetchBookmarks();
}

// Build Bookmarks DOM
function buildBookmarks(){
    //Remove all Bookmarks 
    bookmarksContainer.textContent = '';
    // Build Items
    bookmarks.forEach((bookmark) => {
        const { name , url} = bookmark;
        // Item
        const item = document.createElement('div');
        item.classList.add('item');
        // Trash Icon
        const trashIcon = document.createElement('i');
        trashIcon.classList.add('fas' , 'fa-trash-alt');
        trashIcon.setAttribute('title' , 'Delete Bookmark');
        trashIcon.setAttribute('onclick' , `deleteBookmark('${url}')`);
        // Favicon Link Container
        const linkInfo = document.createElement('div');
        linkInfo.classList.add('name');
        //Favicon
        const favicon = document.createElement('img');
        favicon.setAttribute('src' , url === 'https://evozone.github.io/ClassBWebSite/' ? 'https://evozone.github.io/ClassBWebSite/favicon.ico' :`https://s2.googleusercontent.com/s2/favicons?domain=${url}`);
        favicon.setAttribute('alt' , 'Logo');
        //Link
        const link = document.createElement('a');
        link.setAttribute('href' , `${url}`);
        link.setAttribute('target' ,'_blank' );
        link.textContent= name;

        //Append everything in a container
        linkInfo.append(favicon,link);
        item.append(trashIcon,linkInfo);
        bookmarksContainer.appendChild(item);
    });
}

// Submit Event Listener
bookmarkForm.addEventListener('submit', storeBookmark);

//Dark Mode       
const toggleSwitch = document.querySelector('input[type = "checkbox"]');
const toggleIcon =  document.getElementById('toggle-icon');

//Switch Theme
function switchTheme(event){
   if(event.target.checked){
       document.documentElement.setAttribute('data-theme' , 'dark');
       localStorage.setItem('theme' , 'dark');
       toggleIcon.children[0].classList.replace('fa-sun' , 'fa-moon');
   }else{
       document.documentElement.setAttribute('data-theme' , 'light');
       localStorage.setItem('theme' , 'light');
       toggleIcon.children[0].classList.replace('fa-moon','fa-sun');
   }
}

// Checkbox Event listener
toggleSwitch.addEventListener('change' , switchTheme);

//Check Local Storage for theme
const currentTheme = localStorage.getItem('theme');
if(currentTheme){
    document.documentElement.setAttribute('data-theme' , currentTheme);
    if(currentTheme === 'dark'){
        toggleSwitch.checked = true;
        toggleIcon.children[0].classList.replace('fa-sun' , 'fa-moon');
    }
}

// On load fetch bookmarks
fetchBookmarks();