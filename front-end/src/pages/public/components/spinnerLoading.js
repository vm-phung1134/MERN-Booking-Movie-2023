function SpinnerLoading() {
  return (
    <>
      <div className="relative items-center block w-full h-screen bg-black ">
        <div
          role="status"
          className="absolute -translate-x-1/2 -translate-y-1/2 top-[45%] left-[51%]"
        >
          <div className="">
            <div className="w-16 ml-11 mb-3 h-16 border-t-[5px] border-b-[5px] border-[#E50914] rounded-full animate-spin"></div>
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#fc3a3a] to-[#fccb2d] text-[27px] pr-5 w-full font-bold">
              REACT FLIX
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default SpinnerLoading;
