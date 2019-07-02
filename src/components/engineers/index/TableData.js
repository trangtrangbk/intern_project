import React, { Component } from 'react';
import RowData from './RowData';

class TableData extends Component {
    render() {
        return (
            <div className="table-scrollable">
            <table className="table table-striped table-bordered table-advance table-hover">
              <thead>
                <tr>
                  <th style={{fontWeight: 'bold'}}>Name </th>
                  <th style={{fontWeight: 'bold'}}>Email </th>
                  <th style={{fontWeight: 'bold'}}>Phone </th>
                  <th style={{fontWeight: 'bold'}}>Experiences </th>
                  <th style={{fontWeight: 'bold'}}>Skills </th>
                  <th style={{fontWeight: 'bold'}}>Actions </th>
                </tr>
              </thead>
              <tbody>
                <RowData />
                <RowData />
                <RowData />
              </tbody>
            </table>
          </div>
        );
    }
}

export default TableData;