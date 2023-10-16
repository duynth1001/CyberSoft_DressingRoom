import data from "./data/Data.json" assert { type: "json" };
const { tabPanes } = data;

//Helper Function

function getRenderedList(listName) {
  let resList = [];
  for (const iterator of tabPanes) {
    const { type } = iterator;
    if (type === listName) {
      resList.push(iterator);
    }
  }
  return resList;
}

function getElement(name) {
  return document.querySelector(name);
}

function renderToScreen(listToRender) {
  let contentHTML = "";
  for (const iterator of listToRender) {
    const { name, imgSrc_jpg, id } = iterator;
    let contentStr = `
        <div class="card p-2 my-2" style="width:18rem ">
  <img class="card-img-top" src=${imgSrc_jpg} alt="Card image cap">
  <div class="card-body">
    <p class="card-text">${name}</p>
    <button class="btn btn-success" onClick="btnThuDo('${id}')" >Thử đồ</button>
  </div>
</div>
        `;
    contentHTML += contentStr;
  }
  const finalHTMLContent = ` <div class="card-group">
    ${contentHTML}
    </div>`;
  return finalHTMLContent;
}

//remove active btn on pageload
function removeBtnAoActive() {
  getElement("#btnAo").classList.remove("active");
}

//Load asset

//btn Ao
getElement("#btnAo").onclick = () => {
  const renderedList = getRenderedList("topclothes");
  const HTMLContent = renderToScreen(renderedList);
  getElement(".tab-content").innerHTML = HTMLContent;
};

//Load body
window.loadBody = () => {
  getElement("#btnAo").classList.add("active");
  getElement("#btnAo").click();
};

//btn Quan
getElement("#btnQuan").onclick = () => {
  removeBtnAoActive();
  const renderedList = getRenderedList("botclothes");
  const HTMLContent = renderToScreen(renderedList);
  getElement(".tab-content").innerHTML = HTMLContent;
};

//btn Giay
getElement("#btnGiay").onclick = () => {
  removeBtnAoActive();
  const renderedList = getRenderedList("shoes");
  const HTMLContent = renderToScreen(renderedList);
  getElement(".tab-content").innerHTML = HTMLContent;
};

//btn Tui Xach
getElement("#btnTuiXach").onclick = () => {
  removeBtnAoActive();
  const renderedList = getRenderedList("handbags");
  const HTMLContent = renderToScreen(renderedList);
  getElement(".tab-content").innerHTML = HTMLContent;
};

//btn Day Chuyen
getElement("#btnDayChuyen").onclick = () => {
  removeBtnAoActive();
  const renderedList = getRenderedList("necklaces");
  const HTMLContent = renderToScreen(renderedList);
  getElement(".tab-content").innerHTML = HTMLContent;
};

//btn Kieu Toc
getElement("#btnKieuToc").onclick = () => {
  removeBtnAoActive();
  const renderedList = getRenderedList("hairstyle");
  const HTMLContent = renderToScreen(renderedList);
  getElement(".tab-content").innerHTML = HTMLContent;
};

//btn Nen
getElement("#btnNen").onclick = () => {
  removeBtnAoActive();
  const renderedList = getRenderedList("background");
  const HTMLContent = renderToScreen(renderedList);
  getElement(".tab-content").innerHTML = HTMLContent;
};

//Render Model

window.btnThuDo = (id) => {
  const foundObjByID = tabPanes.find((ele) => {
    return ele.id === id;
  });
  const { type, imgSrc_png } = foundObjByID;
  switch (type) {
    case "topclothes": {
      getElement(".bikinitop").style.backgroundImage = `url(${imgSrc_png})`;
      break;
    }
    case "botclothes": {
      getElement(".bikinibottom").style.backgroundImage = `url(${imgSrc_png})`;
      break;
    }
    case "shoes": {
      getElement(".feet").style.backgroundImage = `url(${imgSrc_png})`;
      break;
    }
    case "handbags": {
      getElement(".handbag").style.backgroundImage = `url(${imgSrc_png})`;
      break;
    }
    case "necklaces": {
      getElement(".necklace").style.backgroundImage = `url(${imgSrc_png})`;
      break;
    }
    case "hairstyle": {
      getElement(".hairstyle").style.backgroundImage = `url(${imgSrc_png})`;
      break;
    }
    case "background": {
      getElement(".background").style.backgroundImage = `url(${imgSrc_png})`;
      break;
    }
  }
};
