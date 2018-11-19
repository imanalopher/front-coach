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
    lt: 51.160534,
    ln: 71.470356,
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
    lt: 51.161423,
    ln: 71.443256,
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
    lt: 51.14871,
    ln: 71.460127,
  },
];

let map;
let mapObj = [];

function init() {
  let map = new google.maps.Map(document.getElementById("coach-list-map"), {
    zoom: 13,
    center: new google.maps.LatLng(51.157845, 71.454424),
  });
}

google.maps.event.addDomListener(window, "load", init);
