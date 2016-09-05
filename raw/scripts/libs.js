export default function libUrl(lib) {
  // url's to framework icons
  var allUrls = {
    Node: "http://i.imgur.com/kj7Vf48.png",
    Meteor: "http://i.imgur.com/omS8IRf.png",
    Bootstrap: "http://i.imgur.com/QoiOUgk.png",
    Python: "http://i.imgur.com/amG0nzx.png",
    "Material UI": "http://i.imgur.com/CyxO34A.png",
    React: "http://i.imgur.com/7joJzVB.png",
    jQuery: "http://i.imgur.com/ONbLw10.png",
    mongoDB: "http://i.imgur.com/QYRfoqQ.png",
    D3: "http://i.imgur.com/rnBzCfm.png",
    Highcharts: "http://i.imgur.com/9R1IGev.png"
  };

  return allUrls[lib];
}