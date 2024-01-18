$(document).ready(function () {
  let callData = new CallData();
  let listChosen= new ListChosen();
  renderHTML();

  function renderHTML() {
    callData
      .getListData()
      .done(function (res) {
        // console.log(res.navPills);
        let contentNavPills = "";
        let contentTabPanes = "";

        res.navPills.forEach((item, index) => {
          let activeClass = item.tabName === "tabTopClothes" ? "active" : "";
          let fadeClass = item.tabName !== "tabTopClothes" ? "fade" : "";

          contentNavPills += getTabPills(item, activeClass);

          contentTabPanes += `
          <div class="tab-pane container ${activeClass} ${fadeClass}" id="${
            item.tabName
          }">
          <div class="row">
          ${renderTabPanes(item.tabName, res.tabPanes)}
          </div>
          </div>`;
        });
        $(".nav-pills").html(contentNavPills);
        $(".tab-content").html(contentTabPanes);
      })
      .fail(function (err) {
        console.log(err);
      });
  }

  function getTabPills(item, activeClass) {
    return `
               <li class="nav-item">
    <a class="nav-link ${activeClass} btn-default" data-toggle="pill" href="#${item.tabName}">${item.showName}</a>
  </li>`;
  }

  function getTypeArray(tabType, data) {
    let typeArray = [];
    data.forEach(function (item) {
      if (item.type === tabType) {
        typeArray.push(item);
      }
    });
    return typeArray;
  }

  function getEleItem(typeArray) {
    let elementItem = "";
    typeArray.forEach(function (item) {
      elementItem += `
        <div class="col-md-3">
                      <div class="card text-center">
                        <img src="${item.imgSrc_jpg}">
                        <h4>${item.name}</h4>
                        <button data-id="${item.id}" data-type="${item.type}" data-name= "${item.name}" data-desc="${item.desc}" data-jpg="${item.imgSrc_jpg}" data-png="${item.imgSrc_png}" class="changeStyle">Thử đồ</button>
                      </div>
                    </div>`;
    });
    return elementItem;
  }

  function renderTabPanes(tabName, arrTabPane) {
    let typeArray = null;
    let elementItem= null;

    switch (tabName) {
      case "tabTopClothes":
        typeArray = getTypeArray("topclothes", arrTabPane);
        // console.log(typeArray);

        elementItem = getEleItem(typeArray);
        // console.log(elementItem)
        break;

      case "tabBotClothes":
        typeArray = getTypeArray("botclothes", arrTabPane);
        // console.log(typeArray);

        elementItem = getEleItem(typeArray);
        // console.log(elementItem)
        break;

      case "tabShoes":
        typeArray = getTypeArray("shoes", arrTabPane);
        // console.log(typeArray);

        elementItem = getEleItem(typeArray);
        // console.log(elementItem)
        break;

      case "tabBotClothes":
        typeArray = getTypeArray("botclothes", arrTabPane);
        // console.log(typeArray);

        elementItem = getEleItem(typeArray);
        // console.log(elementItem)
        break;

      case "tabHandBags":
        typeArray = getTypeArray("handbags", arrTabPane);
        // console.log(typeArray);

        elementItem = getEleItem(typeArray);
        // console.log(elementItem)
        break;

      case "tabNecklaces":
        typeArray = getTypeArray("necklaces", arrTabPane);
        // console.log(typeArray);

        elementItem = getEleItem(typeArray);
        // console.log(elementItem)
        break;

      case "tabHairStyle":
        typeArray = getTypeArray("hairstyle", arrTabPane);
        // console.log(typeArray);

        elementItem = getEleItem(typeArray);
        // console.log(elementItem)
        break;

      case "tabBackground":
        typeArray = getTypeArray("background", arrTabPane);
        // console.log(typeArray);

        elementItem = getEleItem(typeArray);
        // console.log(elementItem)
        break;

      default:
        break;
    }

    return elementItem;
  }

  function findIndex(type){
    let index= -1;
    if(listChosen.array && listChosen.array.length>0){
        listChosen.array.forEach(function(item, i){
            if(item.type===type){
                index= i;
            }
        })
    }
    return index;
  }

$("body").delegate(".changeStyle", "click", function(){
 let id= $(this).data("id");
 let type = $(this).data("type");
 let name = $(this).data("name");
 let desc= $(this).data("desc");
 let jpg= $(this).data("jpg");
 let png= $(this).data("png");

 let choseItem= new ChoseItem(id, type, name, desc, jpg, png);
//  console.log(choseItem);

let index= findIndex(choseItem.type);
if (index !== -1){
    listChosen.array[index]=choseItem;
} else{
    listChosen.addItem(choseItem);
}
 
//  console.log(listChosen.array)
renderContain(listChosen.array);


});

function renderBikiniTop(img){
    $(".bikinitop").css({
        background: `url(${img})`,
        width: "500px",
        height: "500px",
        position: "absolute",
        top: "-9%",
        left: "-5%",
        zIndex: "3",
        transform: "scale(0.5)",

    })
}

function renderBikiniBottom(img){
    $(".bikinibottom").css({
      background: `url(${img})`,
      width: "500px",
      height: "1000px",
      position: "absolute",
      top: "-30%",
      left: "-5%",
      zIndex: "2",
      transform: "scale(0.5)",
    });
}

function renderShoe(img) {
  $(".feet").css({
    background: `url(${img})`,
    width: "500px",
    height: "1000px",
    position: "absolute",
    bottom: "-37%",
    right: "-3.5%",
    zIndex: "1",
    transform: "scale(0.5)",
  });
}

function renderHandbag(img) {
  $(".handbag").css({
    background: `url(${img})`,
    width: "500px",
    height: "1000px",
    position: "absolute",
    bottom: "-40%",
    right: "-3.5%",
    zIndex: "4",
    transform: "scale(0.5)",
  });
}

function renderNecklace(img) {
  $(".necklace").css({
    background: `url(${img})`,
    width: "500px",
    height: "1000px",
    position: "absolute",
    bottom: "-40%",
    right: "-3.5%",
    zIndex: "4",
    transform: "scale(0.5)",
  });
}

function renderHairstyle(img) {
  $(".hairstyle").css({
    background: `url(${img})`,
    width: "1000px",
    height: "1000px",
    position: "absolute",
    top: "-75%",
    right: "-57%",
    zIndex: "4",
    transform: "scale(0.15)",
  });
}

function renderBackground(img) {
  $(".background").css({
    background: `url(${img})`,
    width: "900px",
    height: "1500px",
    position: "absolute",
    bottom: "-90%",
    right: "-50%",
    zIndex: "-1",
    transform: "scale(0.5)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  });
}

  function renderContain(chosenItems) {
    if (chosenItems && chosenItems.length > 0) {
        console.log(chosenItems)
        chosenItems.forEach(function(item){
            switch (item.type) {
              case "topclothes":
                renderBikiniTop(item.png);
                break;

              case "botclothes":
                renderBikiniBottom(item.png);
                break;

              case "shoes":
                renderShoe(item.png);
                break;

              case "handbags":
                renderHandbag(item.png);
                break;

              case "necklaces":
                renderNecklace(item.png);
                break;

              case "hairstyle":
                renderHairstyle(item.png);
                break;

              case "background":
                renderBackground(item.png);
                break;

              default:
                break;
            }
            
        })
    }
  } 

});
