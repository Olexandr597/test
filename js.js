const mains = [
    document.getElementById('main'),
    document.getElementById('main1'),
    document.getElementById('main2'),
    document.getElementById('main3'),
    document.getElementById('main4'),
    document.getElementById('main5'),
    document.getElementById('main6'),
    document.getElementById('main7'),
    document.getElementById('main8'),
    document.getElementById('main9'),
    document.getElementById('main10'),
    document.getElementById('main11'),
    document.getElementById('main12'),
    document.getElementById('main13')
  ];
  
  const test = document.getElementById('main1');
  const popup = document.getElementById('popup');
  
  const dishes = [
    {
      img: "",
      name: "Український борщ",
      price: 100,
      description: "Традиційна українська страва з буряка, капусти, картоплі, моркви, цибулі та м'яса.",
    },
    {
      img: "",
      name: "Налисники",
      description: "Тонкий млинець, який зазвичай фарширують сиром, фруктами або ягодами.",
      price: 80,
    },
    {
      img: "",
      name: "Пельмені",
      description: "Традиційна українська страва з тіста, начиненого м'ясом, картоплею або грибами.",
      price: 70,
    },
    {
      img: "",
      name: "Шашлична",
      description: "Смажена на грилі страва з м'яса, птиці або овочів.",
      price: 150,
    },
    {
      img: "",
      name: "Вареники",
      description: "Традиційна українська страва з тіста, начиненого сиром, картоплею або ягодами.",
      price: 60,
    },
    {
        img: "",
        name: "Український борщ",
        price: 100,
        description: "Традиційна українська страва з буряка, капусти, картоплі, моркви, цибулі та м'яса.",
      },
      {
        img: "",
        name: "Налисники",
        description: "Тонкий млинець, який зазвичай фарширують сиром, фруктами або ягодами.",
        price: 80,
      },
      {
        img: "",
        name: "Пельмені",
        description: "Традиційна українська страва з тіста, начиненого м'ясом, картоплею або грибами.",
        price: 70,
      },
      {
        img: "",
        name: "Шашлична",
        description: "Смажена на грилі страва з м'яса, птиці або овочів.",
        price: 150,
      },
      {
        img: "",
        name: "Вареники",
        description: "Традиційна українська страва з тіста, начиненого сиром, картоплею або ягодами.",
        price: 60,
      },
      {
        img: "",
        name: "Український борщ",
        price: 100,
        description: "Традиційна українська страва з буряка, капусти, картоплі, моркви, цибулі та м'яса.",
      },
      {
        img: "",
        name: "Налисники",
        description: "Тонкий млинець, який зазвичай фарширують сиром, фруктами або ягодами.",
        price: 80,
      },
      {
        img: "",
        name: "Пельмені",
        description: "Традиційна українська страва з тіста, начиненого м'ясом, картоплею або грибами.",
        price: 70,
      },
      {
        img: "",
        name: "Шашлична",
        description: "Смажена на грилі страва з м'яса, птиці або овочів.",
        price: 150,
      },
      {
        img: "",
        name: "Вареники",
        description: "Традиційна українська страва з тіста, начиненого сиром, картоплею або ягодами.",
        price: 60,
      },
      {
        img: "",
        name: "Український борщ",
        price: 100,
        description: "Традиційна українська страва з буряка, капусти, картоплі, моркви, цибулі та м'яса.",
      },
      {
        img: "",
        name: "Налисники",
        description: "Тонкий млинець, який зазвичай фарширують сиром, фруктами або ягодами.",
        price: 80,
      },
      {
        img: "",
        name: "Пельмені",
        description: "Традиційна українська страва з тіста, начиненого м'ясом, картоплею або грибами.",
        price: 70,
      },
      {
        img: "",
        name: "Шашлична",
        description: "Смажена на грилі страва з м'яса, птиці або овочів.",
        price: 150,
      },
      {
        img: "",
        name: "Вареники",
        description: "Традиційна українська страва з тіста, начиненого сиром, картоплею або ягодами.",
        price: 60,
      },
  ];

  let isOpen = true;
  let startY;
  
  function showPopup(elem) {
    if (isOpen) {
      isOpen = false;
      document.body.classList.add('_lock');
      const popup = document.querySelector(".popup");
  
      popup.innerHTML = `
        <div class="nav_line"><span class="nav_line_el"></span></div>
        <img class="photo_menu_pop_up" src=${elem.img} alt="">
        <div class="container_text_menu_pop_up">
          <p class="title_dish_pop_up">${elem.name}</p>
          <p class="price_dish_pop_up">${elem.price} грн</p>
        </div>
      `;
  
      // Append the popup to the body before adding the 'active' class
      document.body.appendChild(popup);
  
      // Force reflow before adding the 'active' class for smooth transition
      popup.offsetHeight;
  
      // Add the 'active' class
      popup.classList.add("active");
  
      // Add touch events to detect swipe
      popup.addEventListener('touchstart', handleTouchStart, false);
      popup.addEventListener('touchmove', handleTouchMove, false);
      popup.addEventListener('touchend', handleTouchEnd, false);
    }
  }
  
  function hidePopup() {
    if (!isOpen) {
      const popup = document.querySelector(".popup");
      
      // Add the 'active2' class
      popup.classList.add("active2");
  
      // Use a setTimeout to remove the 'active' class after the animation completes
      setTimeout(() => {
        popup.classList.remove("active");
        document.body.classList.remove('_lock');
        isOpen = true;
  
        // Remove touch events when the popup is hidden
        popup.removeEventListener('touchstart', handleTouchStart, false);
        popup.removeEventListener('touchmove', handleTouchMove, false);
        popup.removeEventListener('touchend', handleTouchEnd, false);
      }, 300); // 300 milliseconds, should match the transition duration
    }
  }
  
  function handleTouchStart(e) {
    startY = e.touches[0].clientY;
  }
  
  function handleTouchMove(e) {
    if (!startY) return;
  
    const currentY = e.touches[0].clientY;
    const diffY = currentY - startY;
  
    if (diffY > 50) { // You can adjust this threshold for sensitivity
      hidePopup();
      startY = null;
    }
  }
  
  function handleTouchEnd() {
    startY = null;
  }
  
  const showArray = (array, mm) => {
    mm.innerHTML = "";
    array.forEach(elem => {
      const el = document.createElement("div");
      el.classList.add("style");
  
      // Add onclick event to the 'el' element
      el.onclick = () => {
        // Show the popup
        showPopup(elem);
      };
  
      el.innerHTML = `
        <img class="photo_menu" src=${elem.img} alt="">
        <div class="container_text_menu">
          <p class="title_dish">${elem.name}</p>
          <p class="price_dish">${elem.price}</p>
        </div>
      `;
  
      mm.appendChild(el);
    });
  };
  
  
  showArray(dishes, mains[0]);
  