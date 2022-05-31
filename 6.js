/*
QUESTION 6

You are working on the product categories page and are responsible to display all the products for the given category (i.e. product tiles).
Each product tile can contain multiple images for the given product (will be displayed using a carousel).

The image src needs to scale according to screen size in order to better optimize page loading times.
This can be done by using the image `srcset` attribute whose value should be a string with the following format: `${imageUrl} #{widthInPixels}w`

Multiple widths can be specified by comma separating the values. 

E.g.
srcset="https://myCdn.com/productId_1_320x480.png 320w, https://myCdn.com/productId_1_640x960.png 640w, https://myCdn.com/productId_1_768x1152.png 1080w"


Your task is to add this `srcset` to each image of every product tile.
You will be given the list of raw product Objects which will be used to generate the page:
- Each product Object will have an `imageUrls` attribute which will be a list of image URLs
    - Each URL will contain within it the corresponding product Id, the image index, and the image size: 
    `https://myCdn.com/${productId}_${index}_${width}x${height}.png`

- Some products might be missing some image sizes (in which case just omit that case from the `srcset`)
- All images have a 3/2 image aspect ratio (height/width = 1.5)
- Some browser do not yet suport the `srcset` attribute so you need to also provide a `src` attribute that defaults to using the *LARGEST* image resolution
  This allows the browser to fallback to using the `src` if `srcset` is not yet supported

You need to prodive a way to map each `srcset` and `src` to the given product and it's image index.

e.g.

const rawProducts = [
    {
        id: 'product_id_1',
        imagesUrls: [
            https://myCdn.com/productId-1_1_320x480.png,
            https://myCdn.com/productId-1_1_768x1152.png,
            https://myCdn.com/productId-1_2_320x480.png,
            https://myCdn.com/productId-1_2_640x960.png,
            https://myCdn.com/productId-1_2_768x1152.png,
            https://myCdn.com/productId-1_3_320x480.png,
        ]
    }
]

should become

const formattedProducts = [
    {
        id: 'product_id_1',
        imageUrls: [...],
        srcset: {
            1: 'https://myCdn.com/productId-1_1_320x480.png 320w, https://myCdn.com/productId-1_1_768x1152.png 1080w',
            2: 'https://myCdn.com/productId-1_2_320x480.png 320w, https://myCdn.com/productId-1_2_640x960.png 640w, https://myCdn.com/productId-1_2_768x1152.png 1080w',
            3: 'https://myCdn.com/productId-1_3_320x480.png 320w',
        },
        src: {
            1: 'https://myCdn.com/productId-1_1_768x1152.png',
            2: ' https://myCdn.com/productId-1_2_768x1152.png',
            3: 'https://myCdn.com/productId-1_3_320x480.png'
        } 
    }
]

*/

//DO NOT modify this
const input = require('./6-input')