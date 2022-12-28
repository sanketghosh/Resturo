import "./Tables.scss";

import { tables } from "../../data/tablesData";
import SingleTable from "../../components/SingleTable/SingleTable";

const Tables = () => {
  return (
    <div className="tables">
      <div className="tableWrapper">
        {tables.map((table) => {
          return (
            <SingleTable
              key={table.id}
              status={table.status}
              tableNumber={table.tableNumber}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Tables;
