import { TABLE_STATUS } from "../../enums/enums";
import "./SingleTable.scss";

interface TableProps {
  tableNumber: number;
  status: string;
}

const SingleTable = ({ tableNumber, status }: TableProps) => {
  return (
    <div
      className={
        status == TABLE_STATUS.OCCUPIED ? "occupiedTable" : "availableTable"
      }
    >
      <span className="tableNumber">T {tableNumber}</span>
      <span className="tableStatus">{status}</span>
    </div>
  );
};

export default SingleTable;
