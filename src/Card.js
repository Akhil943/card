
import Item from "./Data.json";

export default function Card() {
    return (
        <div>
            { Item.map((Akhil) => (
                    <>
                        <div class=" col-lg-2 card w-25 h-25">
                                <img src={Akhil.image} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">{Akhil.title}</h5>
                                    <p class="card-text">{Akhil.rating.rate}</p>
                                    <a href="#" class="btn btn-primary">{Akhil.rating.count}</a>
                                </div>
                        </div>
                        
                    </>    
            ))}
        </div>
    )
}
