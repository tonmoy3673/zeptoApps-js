
// ============== Toggle Button Function==============//
document.getElementById('user-menu-button').addEventListener('click',function(){
    const userMenuList=document.getElementById('user-menu-item');
    const isOpen = userMenuList.classList.contains('hidden');
    if (isOpen) {
        userMenuList.classList.remove('hidden');
    } else {
        userMenuList.classList.add('hidden');
    }
});