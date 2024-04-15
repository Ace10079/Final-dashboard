import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import { IconDotsVertical } from '@tabler/icons-react';

function Table5() {
  return (
    <div className='bg-slate-100 border-solid border-2 rounded-lg m-3' style={{ maxHeight: '500px', overflow: 'auto' }}>
      <p className='p-2 font-bold  font-[Century Gothic] p-2'>
        Disease & Solution
      </p>
      <div className='p-2'>
        <Table responsive="sm" bordered>
          <thead>
            <tr>
              <th className="border">S.no</th>
              <th className="border">Disease ID</th>
              <th className="border">Disease Name</th>
              <th className="border">Description</th>
              <th className="border">Solution</th>
              <th className="border"><IconDotsVertical stroke={1} /></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border">1</td>
              <td className="border">#543568</td>
              <td className="border">Lorem ipsum</td>
              <td className="border">Lorem ipsum</td>
              <td className="border">Lorem ipsum</td>
              <td className="border"><IconDotsVertical stroke={1} /></td>
            </tr>
            <tr>
              <td className="border">2</td>
              <td className="border">#543568</td>
              <td className="border">Lorem ipsum</td>
              <td className="border">Lorem ipsum</td>
              <td className="border">Lorem ipsum</td>
              <td className="border"><IconDotsVertical stroke={1} /></td>
            </tr>
            <tr>
              <td className="border">3</td>
              <td className="border">#543568</td>
              <td className="border">Lorem ipsum</td>
              <td className="border">Lorem ipsum</td>
              <td className="border">Lorem ipsum</td>
              <td className="border"><IconDotsVertical stroke={1} /></td>
            </tr>
            <tr>
              <td className="border">4</td>
              <td className="border">#543568</td>
              <td className="border">Lorem ipsum</td>
              <td className="border">Lorem ipsum</td>
              <td className="border">Lorem ipsum</td>
              <td className="border"><IconDotsVertical stroke={1} /></td>
            </tr>
            <tr>
              <td className="border">5</td>
              <td className="border">#543568</td>
              <td className="border">Lorem ipsum</td>
              <td className="border">Lorem ipsum</td>
              <td className="border">Lorem ipsum</td>
              <td className="border"><IconDotsVertical stroke={1} /></td>
            </tr>
            <tr>
              <td className="border">6</td>
              <td className="border">#543568</td>
              <td className="border">Lorem ipsum</td>
              <td className="border">Lorem ipsum</td>
              <td className="border">Lorem ipsum</td>
              <td className="border"><IconDotsVertical stroke={1} /></td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Table5;
