let navtoggle = true
let btnHolder = document.getElementById("menu")
let navMenu = document.getElementById("nav-menu")
btnHolder.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 24 24"><path fill="white" d="M3 4h18v2H3V4Zm0 7h12v2H3v-2Zm0 7h18v2H3v-2Z" /></svg>`
const toggle = async ()=>{
    if (navtoggle){
        navtoggle = false
        btnHolder.innerHTML =`<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="white" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z" /></svg>`
        
        navMenu.style.bottom='0px'
    }
    else{
        navtoggle = true
        btnHolder.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 24 24"><path fill="white" d="M3 4h18v2H3V4Zm0 7h12v2H3v-2Zm0 7h18v2H3v-2Z" /></svg>`
        navMenu.style.bottom= '350px'
        
    }
}
