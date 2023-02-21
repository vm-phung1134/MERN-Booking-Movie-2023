import { Link } from "react-router-dom";

function Events({event}) {
  return (
    <>
      <div className="relative lg:w-[290px] h-[338px] lg:h-[480px]">
        <img
          className="w-full h-full"
          src={event.topImage}
          alt=""
        ></img>
        <Link to={`/event-detail/${event._id}`}>
          <div className="absolute ease-in-out duration-500 opacity-0 hover:opacity-100 top-0 right-0 left-0 bottom-0 w-full h-full overflow-hidden bg-fixed bg-black/80">
            <div className="text-white text-center p-5 absolute top-[3%] md:top-[15%]">
              <p className="font-medium py-3 uppercase text-[15px] md:text-[18px]">
                {event.name}
              </p>
              <p className="md:text-sm text-[12px]">
                {event.topContent}
              </p>
            </div>
            <Link className="md:block hidden" to={`/event-detail/${event._id}`}>
             <button
              className="absolute bottom-[5%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white
                                     border border-white text-sm py-[13px] px-[18px] md:px-[25px] hover:bg-[#c40404] hover:border-none
                                    "
            >
              CHI TIẾT
            </button>
            </Link>
           
          </div>
        </Link>
      </div>
    </>
  );
}

export default Events;
