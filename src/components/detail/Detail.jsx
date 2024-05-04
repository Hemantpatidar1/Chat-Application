 import './detail.css'
const Detail = () => {
    return(
        <div className="detail">
            <div className="user">
                <img src="./avatar.png" alt="" />
                <h2>Abhishek</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adip</p>

            </div>
            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Chat Setting</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Privacy & help</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared photos</span>
                        <img src="./arrowDown.png" alt="" />
                    </div>
                    <div className="photos">
                        <div className="photoItem">
                            <div className="photoDetail">
                            <img src="https://assets.vogue.in/photos/63d0f920e3b54291fa98dbf1/2:3/w_1920,c_limit/Kiara%20Advani%20.jpg" alt="" />
                            <span>photo_2024_2.png</span>
                            </div>
                       
                        <img src="./download.png"className="icon"  alt="" />
                    </div>
                    <div className="photoItem">
                            <div className="photoDetail">
                            <img src="https://assets.vogue.in/photos/63d0f920e3b54291fa98dbf1/2:3/w_1920,c_limit/Kiara%20Advani%20.jpg" alt="" />
                            <span>photo_2024_2.png</span>
                            </div>
                       
                        <img src="./download.png" className="icon" alt="" />
                    </div>
                    <div className="photoItem">
                            <div className="photoDetail">
                            <img src="https://assets.vogue.in/photos/63d0f920e3b54291fa98dbf1/2:3/w_1920,c_limit/Kiara%20Advani%20.jpg" alt="" />
                            <span>photo_2024_2.png</span>
                            </div>
                       
                        <img src="./download.png" className="icon" alt="" />
                    </div>
                    <div className="photoItem">
                            <div className="photoDetail">
                            <img src="https://assets.vogue.in/photos/63d0f920e3b54291fa98dbf1/2:3/w_1920,c_limit/Kiara%20Advani%20.jpg" alt="" />
                            <span>photo_2024_2.png</span>
                            </div>
                       
                        <img src="./download.png" className="icon" alt="" />
                    </div>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared Files</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <button>Block User</button>
                <button className='logout'>Log out</button>
            </div>
        </div>
    )
}
export default Detail