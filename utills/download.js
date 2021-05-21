const download = require('image-downloader')
const {createproduct}= require('../controlers/product')

const {spices}=require('./data/spices.json')

//console.log(vegetable.length);



// let type="mobile";
// let subtype="mi";


// let a=1;
// for(let i=1;i<17;i++){
//   let p=name[i-1];
//   let nam=p.name
//   let price=p.price
//   let description="";
//   for(a of p.body){
//     description+=`${a.name}`
//     // console.log(`${a.name}`)
//   }
//   let quantity=5;
//   let user=1
//   image='/images/mobile/mi/'+`1(${i}).jpeg`;
//   createproduct(nam,type,subtype,price,quantity,description,image,user)
//   //console.log(nam,type,subtype,price,quantity,description,image,user)

// }




// for(p of spices){
 
//   console.log(p.name);
// }







for(p of spices){

   //console.log(p.name);
   let str=p.name;
   str=str.substr(0,str.indexOf('\n'));
   //console.log(str);
   p.name=str;
    options = {
        url: `${p.images}`,//'https://images.pexels.com/photos/2899679/pexels-photo-2899679.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        dest: __dirname+`/spices/${p.name}.jpg`     // will be saved to /path/to/dest/photo.jpg

      }

      console.log(p.name);

      download.image(options)
        .then(({ filename }) => {
          console.log('Saved to', filename)  // saved to /path/to/dest/photo.jpg
        })
        .catch((err) => console.error(err))

}