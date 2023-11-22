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

  
  function showPopup(elem) {
    if(isOpen){
      // document.body.classList.toggle('_lock');
      isOpen = false;
      //popup.classList.add("pop_up_menu");
      popup.classList.add("active")
  
      popup.ontouchmove = () => {
        // Hide the popup
        hidePopup();
      };
  
      popup.innerHTML = `
      <div class="nav_line"><span class="nav_line_el"></span></div>
      <img class="photo_menu_pop_up" src=${elem.img} alt="">
      <div class="container_text_menu_pop_up">
        <p class="title_dish_pop_up">${elem.name}</p>
        <p class="price_dish_pop_up">${elem.price} грн</p>
      </div>
      `;

      document.body.appendChild(popup);
    }
  }
  
  
  function hidePopup() {

        if(isOpen === false){
            document.body.classList.remove('_lock');
            isOpen = true;
            const popup = document.querySelector(".popup");
            document.body.removeChild(document.querySelector(".popup"));
        }


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
  