import './Gallery.css';


function Gallery() {
    var modal = document.querySelector(".Gallery-Modal");

    function modalDisplay(text){
        console.log(2222, text)
        console.log(3333, modal)
        modal.style.display = text;
    }

    const imgClick = (event) => {
        const img = event.target;
        const modal_img = document.querySelector(".modal_content");
        modal = document.querySelector(".Gallery-Modal");

        console.log(1111, img)
        modalDisplay("block");
        console.log(4444, img.src)
        modal_img.src = img.src;
    }

    const closeClick = function () {
        modalDisplay("none");
    }

    const modalClick = function () {
        modalDisplay("none");
    }

    return (
        <div className='Gallery'>
        <header className='Gallery-header'>
            <div className='Gallery-Main'>
                <img src='/img/w4.jpg' onClick={imgClick} className='Gallery-MainImage' alt='gallery'/>
                <div class="Gallery-Modal">
                    <span class="close" onClick={closeClick}>&times;</span>
                    <img class="modal_content" onClick={modalClick} id="img01"/>
                </div>
                <img src='/img/w2.jpg' onClick={imgClick} className='Gallery-MainImage' alt='gallery'/>
                <div class="Gallery-Modal">
                    <span class="close" onClick={closeClick}>&times;</span>
                    <img class="modal_content" onClick={modalClick} id="img01"/>
                </div>
                <img src='/img/w3.jpg' onClick={imgClick} className='Gallery-MainImage' alt='gallery'/>
                <div class="Gallery-Modal">
                    <span class="close" onClick={closeClick}>&times;</span>
                    <img class="modal_content" onClick={modalClick} id="img01"/>
                </div>
                <img src='/img/w5.jpg' onClick={imgClick} className='Gallery-MainImage' alt='gallery'/>
                <div class="Gallery-Modal">
                    <span class="close" onClick={closeClick}>&times;</span>
                    <img class="modal_content" onClick={modalClick} id="img01"/>
                </div>
                <img src='/img/w9.png' onClick={imgClick} className='Gallery-MainImage' alt='gallery'/>
                <div class="Gallery-Modal">
                    <span class="close" onClick={closeClick}>&times;</span>
                    <img class="modal_content" onClick={modalClick} id="img01"/>
                </div>
                <img src='/img/w8.png' onClick={imgClick} className='Gallery-MainImage' alt='gallery'/>
                <div class="Gallery-Modal">
                    <span class="close" onClick={closeClick}>&times;</span>
                    <img class="modal_content" onClick={modalClick} id="img01"/>
                </div>
                <img src='/img/w7.png' onClick={imgClick} className='Gallery-MainImage' alt='gallery'/>
                <div class="Gallery-Modal">
                    <span class="close" onClick={closeClick}>&times;</span>
                    <img class="modal_content" onClick={modalClick} id="img01"/>
                </div>
                <img src='/img/w10.png' onClick={imgClick} className='Gallery-MainImage' alt='gallery'/>
                <div class="Gallery-Modal">
                    <span class="close" onClick={closeClick}>&times;</span>
                    <img class="modal_content" onClick={modalClick} id="img01"/>
                </div>
                <img src='/img/w11.png' onClick={imgClick} className='Gallery-MainImage' alt='gallery'/>
                <div class="Gallery-Modal">
                    <span class="close" onClick={closeClick}>&times;</span>
                    <img class="modal_content" onClick={modalClick} id="img01"/>
                </div>
                <img src='/img/w6.png' onClick={imgClick} className='Gallery-MainImage' alt='gallery'/>
                <div class="Gallery-Modal">
                    <span class="close" onClick={closeClick}>&times;</span>
                    <img class="modal_content" onClick={modalClick} id="img01"/>
                </div>
                <img src='/img/w12.png' onClick={imgClick} className='Gallery-MainImage' alt='gallery'/>
                <div class="Gallery-Modal">
                    <span class="close" onClick={closeClick}>&times;</span>
                    <img class="modal_content" onClick={modalClick} id="img01"/>
                </div>
                <img src='/img/ring.png' onClick={imgClick} className='Gallery-MainImage' alt='gallery'/>
                <div class="Gallery-Modal">
                    <span class="close" onClick={closeClick}>&times;</span>
                    <img class="modal_content" onClick={modalClick} id="img01"/>
                </div>
            </div>
        </header>
        </div>
    );
}

export default Gallery;
