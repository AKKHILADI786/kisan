const download = require('image-downloader')
const { createproduct } = require('../controlers/product')

const { spices } = require('./data/spices.json')

// console.log(vegetable.length);



let type = "spices";
let price = 100;

const fs = require('fs')



for (p of spices) {

  let name = p.name;

  let str=p.name;
   str=str.substr(0,str.indexOf('\n'));
   //console.log(str);
  name=str;

  var file = __dirname + `/images/spices/${name}.jpg`;

  try {
    if (fs.existsSync(file) && name) {
      console.log('exits')
      let image = `../images/spices/${name}.jpg`;
    createproduct(name,type,price,image);
  console.log(name, type, price, image)
    }
    else {
      console.log('not exits')
    }
  }
  catch (err) {
    console.log(err)
  }

}



// for(p of spices){

//   console.log(p.name);
// }







// for(p of spices){

//    //console.log(p.name);
//    let str=p.name;
//    str=str.substr(0,str.indexOf('\n'));
//    //console.log(str);
//    p.name=str;
//     options = {
//         url: `${p.images}`,//'https://images.pexels.com/photos/2899679/pexels-photo-2899679.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//         dest: __dirname+`/spices/${p.name}.jpg`     // will be saved to /path/to/dest/photo.jpg

//       }

//       console.log(p.name);

//       download.image(options)
//         .then(({ filename }) => {
//           console.log('Saved to', filename)  // saved to /path/to/dest/photo.jpg
//         })
//         .catch((err) => console.error(err))

// }