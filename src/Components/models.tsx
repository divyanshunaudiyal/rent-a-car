import React from "react";
import CAR_DATA from "./CarData";

const Models = () => {
  return (
    <div id="model">
      <div className="container text-center parent" id="showModel">
        <h1>Models</h1>

        <div className="my-5 button-container d-flex flex-column gap-2 w-25">
          {CAR_DATA.map((cars, i) => {
            const [car] = cars;
            return (
              <button
                className="btn btn-outline-danger"
                key={i + 1}
                // onClick={displayModel}
              >
                {car.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );

  //   function
  //   function displayModel(e) {
  //     const parentEl = e.target.closest(".parent");
  //     console.log(parentEl);
  //     const div = document.createElement("div");
  //     div.innerHTML = `
  //     <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false">
  //       <div class="modal-dialog">
  //         <div class="modal-content">
  //           <div class="modal-header">
  //             <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
  //             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  //           </div>
  //           <div class="modal-body">
  //             sxxaxsaxsasxasx
  //           </div>
  //           <div class="modal-footer">
  //             <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
  //             <button type="button" class="btn btn-primary">Understood</button>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     `;

  //     parentEl.insertAdjacentHTML("beforeend", div);
  //     console.log(parentEl.innerHTML);
  //   }
};

export default Models;
