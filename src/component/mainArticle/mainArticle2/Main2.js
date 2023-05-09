import "./Main2.css"

export default function SecondMain(props) {
return(
    <div className="main2-container">
        <div className="main2-split1">
            <div className='main2-Split2-mobile'>
                <img src={props.img} alt='' className='img-main2'></img>
            </div>
            <div className="Submain2-split1">
                 <h3 className="titolo-articolo1">{props.titolo2}</h3> 
                <p className="paragraph-articolo1">{props.abstract2}</p>
            </div>
            <div className="Submain2-split2">
                <h3 className="titolo-articolo2">{props.titolo3}</h3>
            </div>
        </div>
        <div className='main2-Split2'>
            <img src={props.img} alt='' className='img-main2'></img>
        </div>
    </div>
)
}