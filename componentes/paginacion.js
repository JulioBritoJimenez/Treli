import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

function Paginacion() {
  return(
    <>
      <div className="order-list-paginate">
        <div className="numorders">4 suscripciones</div>
          <div className="paginate">
            <div className="paginate-perv" data-page data-what="prev"><BsChevronLeft /></div>
            <div className="ofofof">
              <span className="first-of">1</span> de <span className="second-of">2</span>
            </div>
            <div className="paginate-next" data-page="2" data-what="next"><BsChevronRight /></div>
        </div>
      </div>
    </>
  )
}

export default Paginacion;