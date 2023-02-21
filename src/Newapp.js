import './App.css';

function Newapp(){
    return(
        <div>
        <h1>Gaurav's portfolio</h1>
        <p>Hey gaurav how is your college lorem</p>
        </div>
    )
}
function Card(){
    return(
        <div>
        <h3>Card</h3>
        <div className="card">
  <img className="card-img-top" alt='abc' src="https://th.bing.com/th/id/OIP.2bJ9_f9aKoGCME7ZIff-ZwHaJ4?pid=ImgDet&rs=1" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
    </div>
</div>
    )
}
export default Newapp;
export {Card};