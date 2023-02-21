import NavBars from "../components/navBars";
import SideBars from "../components/sideBars";

function MovieSoonAdd() {
  return (
    <div>
      <div className="grid grid-cols-10">
        <div className="col-span-2 border-r max-h-max border-gray-500 text-[15px]">
          <SideBars />
        </div>
        <div className="col-span-8">
          <NavBars />
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieSoonAdd;
