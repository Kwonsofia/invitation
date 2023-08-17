import './Gallery.css';

function ImageZoomIn(src) {
    window.open(src);
}

function Gallery() {
    const ImageZoomIn = (image) => {
        window.open(image);
    }
    return (
        <div className='Gallery'>
        <header className='Gallery-header'>
            <div className='Gallery-Main'>
                <img src='/img/w4.jpg' className='Gallery-MainImage' onClick={ImageZoomIn(this.src)} alt='gallery'/>
                <img src='/img/w2.jpg' className='Gallery-MainImage' onClick={ImageZoomIn(this.src)} alt='gallery'/>
                <img src='/img/w3.jpg' className='Gallery-MainImage' onClick={ImageZoomIn(this.src)} alt='gallery'/>
                <img src='/img/w5.jpg' className='Gallery-MainImage' onClick={ImageZoomIn(this.src)} alt='gallery'/>
                <img src='/img/w9.png' className='Gallery-MainImage' onClick={ImageZoomIn(this.src)} alt='gallery'/>
                <img src='/img/w8.png' className='Gallery-MainImage' onClick={ImageZoomIn(this.src)} alt='gallery'/>
                <img src='/img/w7.png' className='Gallery-MainImage' onClick={ImageZoomIn(this.src)} alt='gallery'/>
                <img src='/img/w10.png' className='Gallery-MainImage' onClick={ImageZoomIn(this.src)} alt='gallery'/>
                <img src='/img/w11.png' className='Gallery-MainImage' onClick={ImageZoomIn(this.src)} alt='gallery'/>
                <img src='/img/w6.png' className='Gallery-MainImage' onClick={ImageZoomIn(this.src)} alt='gallery'/>
                <img src='/img/w12.png' className='Gallery-MainImage' onClick={ImageZoomIn(this.src)} alt='gallery'/>
                <img src='/img/ring.png' className='Gallery-MainImage' onClick={ImageZoomIn(this.src)} alt='gallery'/>
            </div>
        </header>
        </div>
    );
}

export default Gallery;
