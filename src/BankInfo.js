import './BankInfo.css';


function BankInfo() {
    var modal = document.querySelector(".BankInfo-Modal");

    function modalDisplay(text){
        console.log('++ modalDisplay: ', modal)
        modal.style.display = text;
    }

    const onClick = function () {
        modal = document.querySelector(".BankInfo-Modal");
        modalDisplay("block");
    }

    const closeClick = function () {
        modalDisplay("none");
    }

    return (
        <div className='BankInfo'>
            <div className='BankInfo-Main'>
                <div>
                    <button onClick={onClick} className='BankInfo-Account'>
                        계좌번호 1
                    </button>
                </div>
                <div class="BankInfo-Modal">
                    <div onClick={onClick} class="modal_content">
                        <p>
                            계좌번호: 우리 1111
                        </p>
                        <p>
                            계좌번호: 우리 1111
                        </p>
                    </div>
                    <button class="close" onClick={closeClick}>Close</button>
                </div>
                <div>
                    <button onClick={onClick} className='BankInfo-Account'>
                        계좌번호 2
                    </button>
                </div>
                <div class="BankInfo-Modal">
                    <div onClick={onClick} class="modal_content">
                        <p>
                            계좌번호: 우리 1111
                        </p>
                        <p>
                            계좌번호: 우리 1111
                        </p>
                    </div>
                    <button class="close" onClick={closeClick}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default BankInfo;
