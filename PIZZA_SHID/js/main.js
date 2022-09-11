const header_title = document.querySelectorAll('.menu_iteam')

header_title.forEach(function (iteam) {
    iteam.addEventListener('click', function () {
        header_title.forEach(function (iteam) {
            iteam.classList.remove('_active')
        })
        iteam.classList.add('_active')
    })
})


document.querySelectorAll('.dropdown').forEach(function (Dropdown) {

    // Нахождение елементов каждого Dropdown
    const dropdown_btn = Dropdown.querySelector('.dropdown_btn')
    const dropdown_list = Dropdown.querySelector('.dropdown_list')
    const dropdown_iteam = Dropdown.querySelectorAll('.dropdown_iteam')

    // Открытие dropdown_list по кнопке
    dropdown_btn.addEventListener('click', function () {
        dropdown_list.classList.toggle('_hidden')
    })

    // Передача контента с dropdown_iteam на кнопку и закрытие dropdown_list после нажатия
    dropdown_iteam.forEach(function(iteam) {
        iteam.addEventListener('click', function (event) {
            event.stopPropagation()
            let i = iteam.textContent
            let list_btn = Dropdown.querySelector(`[data-btn]`)
            iteam.innerText = list_btn.innerText
            list_btn.innerText = i
            document.querySelector(`[data-input]`).value = i
            document.querySelector('[data-list]').classList.add('_hidden')
        })  
    })
    
    // Закрытие с помощью клика в окне браузера
    document.addEventListener('click', function (event) {
        if (event.target !== dropdown_btn) {
            dropdown_list.classList.add('_hidden')
        }
    })
    
    // Закрытие с помощью Tab or Esc
    document.addEventListener('keydown', function (e) {
        if ( e.key == 'Tab' || 'Escape') {
            dropdown_list.classList.add('_hidden')
        }
    })
})

