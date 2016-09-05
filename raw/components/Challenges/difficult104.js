import React from 'react';

export default class Difficult104 extends React.Component {

  constructor() {
    super();

    this.state = {l: []}
  }

  changeState = (s) => {
    return this.setState({l: s})
  };

  displayPalette = () => {
    return this.state.l.map((p) => {
      return (
        <div key={p} style={{
        color: 'white',
        background: 'rgb(' + p + ')',
        width: '50%',
        height: '5%',
        outline: '2px solid white',
        marginTop: '1em',
        marginLeft: '1em'
        }}>
          rgb({p})
        </div>
      )
    })
  };

  activate = () => {

    document.getElementById('pal').innerHTML = 'Processing...';

    let out = this.changeState;
    let url = this.refs.url.value;
    let img = new Image();
    img.onload = function () {
      let canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      let ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, img.width, img.height);
      //let col = ctx.getImageData(0, 0, 1, 1).data;
      processImage(ctx, canvas.width, canvas.height)
    };
    img.src = url + '?' + new Date().getTime();
    img.setAttribute('crossOrigin', '');

    function processImage(d, w, h) {

      let con = [];
      let avg = {};

      for (let x = 0; x < w; x += Math.round(w / 128)) {
        for (let y = 0; y < h; y += Math.round(h / 128)) {
          let pixel = d.getImageData(x, y, 1, 1).data;
          let r = pixel[0];
          let g = pixel[1];
          let b = pixel[2];
          let k = r + ',' + g + ',' + b;
          if (avg.hasOwnProperty) {
            avg[k] += 1
          }
          else {
            avg[k] = 1
          }
        }
      }

      let sorted = Object.keys(avg).sort(function (a, b) {
        return avg[b] - avg[a]
      });
      //console.log(sorted);
      if (sorted.length <= 10) {
        out(sorted);
      } else {
        let piece = sorted.slice(0, 100);
        let runs = 2;
        while (piece.length > 10 || runs > 0) {
          piece = reducer(piece);
          runs -= 1
        }
        document.getElementById('pal').innerHTML = '';
        out(piece);
      }
    }

    function reducer(arr) {
      arr.forEach(function (e) {
        let s = e.split(',');
        let r = s[0];
        let g = s[1];
        let b = s[2];
        arr.forEach(function (ee, index) {
          let ss = ee.split(',');
          let rr = ss[0];
          let gg = ss[1];
          let bb = ss[2];
          if (dif(r, rr) && dif(g, gg) && dif(b, bb)) {
            arr.splice(index, 1)
          }
        })
      });
      return arr;
    }

    function dif(a, b) {
      let threshold = 10; // similarity threshold
      return Math.abs(a - b) <= threshold
    }
  };

  render() {
    return (
      <div>
        <br />
        <div className="challenge-description">
          More like a top color picker.
          Takes a while to compute and only works
          on direct links form imgur as far as I have tested
          because of Cross-Origin Resource Sharing
        </div>
        <div className="challenge-output">
          <input className="challenge-input" type="text" ref="url" placeholder="img url" style={{width: '60%'}}/>
          <button className="filter-button" onClick={() => this.activate()}
                  style={{float: 'none'}}> Submit
          </button>
          <div id="pal">
            {this.displayPalette()}
          </div>
        </div>
      </div>
    )
  }

}