function Book(){
    return (
        <div className="card">
<img src="" width="400" height="400" alt="book image"/>
<h3>Title:physics</h3>
<h4>Price:RS 381 </h4>
<button> ADD TO CART</button>
        </div>
    );
}
const parent=document.getElementById("root");
const root=ReactDOM.createRooT(parent)