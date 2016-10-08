export default function libUrl(lib) {
  // url's to framework icons
  let allUrls = {
    Node: "https://i.imgur.com/kj7Vf48.png",
    Meteor: "https://i.imgur.com/omS8IRf.png",
    Bootstrap: "https://i.imgur.com/QoiOUgk.png",
    Python: "https://i.imgur.com/amG0nzx.png",
    "Material UI": "https://i.imgur.com/CyxO34A.png",
    React: "https://i.imgur.com/7joJzVB.png",
    jQuery: "https://i.imgur.com/ONbLw10.png",
    mongoDB: "https://i.imgur.com/QYRfoqQ.png",
    D3: "https://i.imgur.com/rnBzCfm.png",
    Highcharts: "https://i.imgur.com/9R1IGev.png"
  };

  return allUrls[lib];
}
