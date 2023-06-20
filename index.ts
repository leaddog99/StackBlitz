
import { Carousel } from '@syncfusion/ej2-navigations';


    

    const carouselObj: Carousel = new Carousel({
        cssClass: 'default-carousel',
        items: [
            { template: '<figure class="img-container"><img src="https://www.mashed.com/img/gallery/ranking-the-most-popular-cooking-channels-on-youtube-from-best-to-worst/intro-1551377187.jpg" alt="bridge" style="height:100%;width:100%;" /><figcaption class="img-caption">Golden Gate Bridge, San Francisco</figcaption></figure>' },
            { template: '<figure class="img-container"><img src="//ej2.syncfusion.com/demos/src/carousel/images/trees.jpg" alt="spring_trees" style="height:100%;width:100%;" /><figcaption class="img-caption">Spring Flower Trees</figcaption></figure>' },
            { template: '<figure class="img-container"><img src="//ej2.syncfusion.com/demos/src/carousel/images/waterfall.jpg" alt="waterfall" style="height:100%;width:100%;" /><figcaption class="img-caption">Oddadalen Waterfalls, Norway</figcaption></figure>' },
            { template: '<figure class="img-container"><img src="//ej2.syncfusion.com/demos/src/carousel/images/sea.jpg" alt="sea" style="height:100%;width:100%;" /><figcaption class="img-caption">Anse Source d`Argent, Seychelles</figcaption></figure>' },
            { template: '<figure class="img-container"><img src="//ej2.syncfusion.com/demos/src/carousel/images/rocks.jpeg" alt="rocks" style="height:100%;width:100%;" /><figcaption class="img-caption">Stonehenge, England</figcaption></figure>' }
        ]
    });
    carouselObj.appendTo('#carousel');

