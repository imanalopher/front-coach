import infoBubble from 'js-info-bubble';

/*
 * Sets InfoBubble Position
 * */
InfoBubble.prototype.setBubbleOffset = function(xOffset, yOffset) {
  this.bubbleOffsetX = parseInt(xOffset);
  this.bubbleOffsetY = parseInt(yOffset);
};


/*
 * Gets InfoBubble Position
 * */
InfoBubble.prototype.getBubbleOffset = function() {
  return {
    x: this.bubbleOffsetX || 0,
    y: this.bubbleOffsetY || 0
  }
};

/**
 * Draw the InfoBubble
 * Implementing the OverlayView interface
 */
InfoBubble.prototype.draw = function() {
  var projection = this.getProjection();

  if (!projection) {
    // The map projection is not ready yet so do nothing
    return;
  }

  var latLng = /** @type {google.maps.LatLng} */ (this.get('position'));

  if (!latLng) {
    this.close();
    return;
  }

  var tabHeight = 0;

  if (this.activeTab_) {
    tabHeight = this.activeTab_.offsetHeight;
  }

  var anchorHeight = this.getAnchorHeight_();
  var arrowSize = this.getArrowSize_();
  var arrowPosition = this.getArrowPosition_();

  arrowPosition = arrowPosition / 100;

  var pos = projection.fromLatLngToDivPixel(latLng);
  var width = this.contentContainer_.offsetWidth;
  var height = this.bubble_.offsetHeight;

  if (!width) {
    return;
  }

  // Adjust for the height of the info bubble
  var top = pos.y - (height + arrowSize) + this.getBubbleOffset().y;

  if (anchorHeight) {
    // If there is an anchor then include the height
    top -= anchorHeight;
  }

  var left = pos.x - (width * arrowPosition) + this.getBubbleOffset().x;

  this.bubble_.style['top'] = this.px(top);
  this.bubble_.style['left'] = this.px(left);

  var shadowStyle = parseInt(this.get('shadowStyle'), 10);

  switch (shadowStyle) {
    case 1:
      // Shadow is behind
      this.bubbleShadow_.style['top'] = this.px(top + tabHeight - 1);
      this.bubbleShadow_.style['left'] = this.px(left);
      this.bubbleShadow_.style['width'] = this.px(width);
      this.bubbleShadow_.style['height'] =
        this.px(this.contentContainer_.offsetHeight - arrowSize);
      break;
    case 2:
      // Shadow is below
      width = width * 0.8;
      if (anchorHeight) {
        this.bubbleShadow_.style['top'] = this.px(pos.y);
      } else {
        this.bubbleShadow_.style['top'] = this.px(pos.y + arrowSize);
      }
      this.bubbleShadow_.style['left'] = this.px(pos.x - width * arrowPosition);

      this.bubbleShadow_.style['width'] = this.px(width);
      this.bubbleShadow_.style['height'] = this.px(2);
      break;
  }
};

let dataList = [
  {
    id: 1,
    type: "1",
    plantedDate: "30.01.2018",
    plantedBy: "Alexander Lantsov",
    plantInfo: "Береза, 3 года",
    nameplate: "Отсуствует",
    shared: 123,
    liked: 500,
    lt: 42.8867097,
    ln: 74.4589972,
  },
  {
    id: 2,
    type: "2",
    plantedDate: "16.05.2018",
    plantedBy: "Vladimir Prohorov",
    plantInfo: "Ель, 3 года",
    nameplate: "Отсуствует",
    shared: 123,
    liked: 500,
    lt: 42.8787997,
    ln: 74.4559072,
  },
  {
    id: 3,
    type: "0",
    plantedDate: "05.09.2018",
    plantedBy: "Stanislav Glushakov",
    plantInfo: "Яблоко, 3 года",
    nameplate: "Отсуствует",
    shared: 123,
    liked: 500,
    lt: 42.8797087,
    ln: 74.4539072,
  },
];

let map;
let mapObj = [];

function init() {
  map = new google.maps.Map(document.getElementById("coach-list-map"), {
    zoom: 15,
    center: new google.maps.LatLng(42.8767997, 74.4517972),
  });

  dataList.forEach((e, i) => {
    mapObj.push({
      marker: new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(e.lt, e.ln),
      }),
      infoBubble: new InfoBubble({
        content: createBubbleInfo(e),
        minWidth: 300,
        maxWidth: 300,
        maxHeight: 300,
        padding: 0,
        backgroundClassName: 'map-coach-card',
        backgroundColor: "#fff",
        shadowStyle: 0,
        arrowStyle: 2,
        borderRadius: 15,
      })
    });

    google.maps.event.addListener(mapObj[i].marker, "click", () => {
      closeMaps(mapObj[i].infoBubble);
      if (!mapObj[i].infoBubble.isOpen()) {
        mapObj[i].infoBubble.open(map, mapObj[i].marker);
        $(".map-coach-card").parent().css("border-radius", "15px");
      } else {
        mapObj[i].infoBubble.close();
      }
    });
  });
}

function createBubbleInfo(e) {
  return `
    <div class="coach-card">
        <div class="card-top-info">
          <div class="add-to-wishlist"></div>
          <div class="top-right-side">
            <div class="rating">
              <div class="rating-star">
                <i class="far fa-star"></i>
              </div>
              <div class="rating-star">
                <i class="far fa-star"></i>
              </div>
              <div class="rating-star">
                <i class="far fa-star"></i>
              </div>
              <div class="rating-star">
                <i class="far fa-star"></i>
              </div>
              <div class="rating-star">
                <i class="far fa-star"></i>
              </div>
            </div>
          </div>
        </div>
        <a class="link-body" href="#">
          <div class="link-header" style="background-image:url('./img/health-coaching.jpg');">
            <div class="info-belt">
              <div class="in-call txt-item">
                <span class="txt-label">In-Call</span>
                <span class="price">Unavailable</span>
              </div>
              <div class="coach-avatar" style="background-image:url('./img/life-coaching.jpg');"></div>
              <div class="in-call txt-item">
                <span class="txt-label">House-Call</span>
                <span class="price">€39</span>
              </div>
            </div>
          </div>
          <div class="link-footer">
            <h5 class="coach-full-name">Cristina Nunez Pabon</h5>
            <p class="location">Madrid, Spain</p>
          </div>
        </a>
    </div>
    `;
}

function closeMaps(objInfoBubble) {
  mapObj.forEach(e => {
    if (objInfoBubble !== e.infoBubble) {
      if (e.infoBubble.isOpen()) {
        e.infoBubble.close();
      }
    }
  });
}

$(document).ready(function () {
  init();
});
