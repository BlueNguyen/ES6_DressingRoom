$(document).ready(function () {
  let callData = new CallData();
  renderHTML();

  function renderHTML() {
    callData
      .getListData()
      .done(function (res) {
        console.log(res.navPills);
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
                        <button>Thử đồ</button>
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
        console.log(typeArray);

        elementItem = getEleItem(typeArray);
        // console.log(elementItem)
        break;

      case "tabBotClothes":
        typeArray = getTypeArray("botclothes", arrTabPane);
        console.log(typeArray);

        elementItem = getEleItem(typeArray);
        // console.log(elementItem)
        break;

      case "tabShoes":
        typeArray = getTypeArray("shoes", arrTabPane);
        console.log(typeArray);

        elementItem = getEleItem(typeArray);
        // console.log(elementItem)
        break;

      case "tabBotClothes":
        typeArray = getTypeArray("botclothes", arrTabPane);
        console.log(typeArray);

        elementItem = getEleItem(typeArray);
        // console.log(elementItem)
        break;

      case "tabHandBags":
        typeArray = getTypeArray("handbags", arrTabPane);
        console.log(typeArray);

        elementItem = getEleItem(typeArray);
        // console.log(elementItem)
        break;

      case "tabNecklaces":
        typeArray = getTypeArray("necklaces", arrTabPane);
        console.log(typeArray);

        elementItem = getEleItem(typeArray);
        // console.log(elementItem)
        break;

      case "tabHairStyle":
        typeArray = getTypeArray("hairstyle", arrTabPane);
        console.log(typeArray);

        elementItem = getEleItem(typeArray);
        // console.log(elementItem)
        break;

      case "tabBackground":
        typeArray = getTypeArray("background", arrTabPane);
        console.log(typeArray);

        elementItem = getEleItem(typeArray);
        // console.log(elementItem)
        break;

      default:
        break;
    }

    return elementItem;
  }
});
