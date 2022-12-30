
import Carousel from 'react-bootstrap/Carousel';
import imagefirst from '../../assets/ImageCaruselone.jpg'
import imagesecond from '../../assets/ImageCaruselTwo.jpg'

import imagetree from '../../assets/ImageCaruselTree.jpg'
import '../Itemsproducts/_ItemsProducts.scss'
function ItemsProduct() {
  return (
    <Carousel>

      <Carousel.Item>
        <img
          className="imagecarrusel "
          src={imagefirst}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="imagecarrusel"
          src={imagesecond}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="imagecarrusel"
          src={imagetree}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default ItemsProduct;
