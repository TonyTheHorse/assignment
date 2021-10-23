import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import terms from "./terms";
import "./styles.scss";
const ALL = () => {
  const ofTotalPostFormatter = (cell) => {
    let percent = cell + "%";
    let remain = 100 - cell + "%";
    return (
      <div className="progressbar">
        <div className="progress" style={{ width: percent }}></div>

        <div
          className="remain"
          style={{
            width: remain
          }}
        >
          {percent}
        </div>
      </div>
    );
  };

  const ofPostFormatter = (cell) => {
    return <div className="align-right">{cell}</div>;
  };

  return (
    <BootstrapTable data={terms} hover>
      <TableHeaderColumn width="80px" dataField="name" isKey>
        TERMS
      </TableHeaderColumn>
      <TableHeaderColumn
        width="180px"
        dataField="count"
        dataFormat={ofTotalPostFormatter}
      >
        % OF TOTAL POSTS
      </TableHeaderColumn>
      <TableHeaderColumn
        width="100px"
        dataField="count"
        dataFormat={ofPostFormatter}
      >
        # OF POSTS
      </TableHeaderColumn>
    </BootstrapTable>
  );
};

export default ALL;
