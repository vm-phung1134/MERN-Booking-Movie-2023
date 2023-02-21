import { useDispatch } from "react-redux";
import { memo, useEffect } from "react";
import { increment, decrement } from "../../../redux/actions/ticketActions";
//import { getOneTicket } from '../../../redux/actions/ticketActions';

function TicketTable({ tickets, setvlPriceTicket }) {
  const dispatch = useDispatch();
  useEffect(() => {
    let total = 0;
    tickets.map((ticket) => (total = total + ticket.quantity * ticket.price));
    setvlPriceTicket(total);
  }, [setvlPriceTicket, tickets]);
  return (
    <>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="w-full inline-block align-middle">
            <div className="overflow-auto border border-gray-500 ">
              <table className="min-w-full divide-y divide-gray-500">
                <thead className="bg-[#206cb391]">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
                    >
                      Loại vé
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-center text-white uppercase "
                    >
                      Số Lượng
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-center text-white uppercase "
                    >
                      Giá
                      <p className="text-[11px] font-thin">
                        &#40; 1 RF = 1000 VNĐ   &#41;
                      </p>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-center text-white uppercase "
                    >
                      Tổng &emsp;
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {tickets.map((ticket, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 text-[12px] font-medium text-white whitespace-nowrap">
                        <p className="uppercase">{ticket.typeTicket}</p>
                        <p className="text-gray-300 font-thin">{ticket.discription}</p>
                      </td>
                      <td className="lg:px-6 px-3 py-4 text-sm text-white whitespace-nowrap">
                        <div className="flex justify-between">
                          <button
                            className="border rounded-full px-1"
                            onClick={() => dispatch(decrement(ticket._id))}
                          >
                            <i className="fa-solid fa-minus"></i>
                          </button>
                          <p>{ticket.quantity}</p>
                          <button
                            className="border rounded-full px-1"
                            onClick={() => dispatch(increment(ticket._id))}
                          >
                            <i className="fa-solid fa-plus"></i>
                          </button>
                        </div>
                      </td>
                      <td className="lg:px-6 px-16 text-center py-4 text-sm text-white whitespace-nowrap">
                        {ticket.price} <span className="text-[10px]">RF</span>
                      </td>
                      <td className="lg:px-6 px-6 text-center py-4 text-sm text-white whitespace-nowrap">
                        {ticket.price * ticket.quantity}
                        <span className="text-[10px]"> RF</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(TicketTable);
