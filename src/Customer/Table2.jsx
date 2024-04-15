import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import { IconDotsVertical } from '@tabler/icons-react';

function Table2() {
  return (
    <div className='bg-slate-100 border-solid border-2 rounded-lg m-3' style={{ maxHeight: '350px', overflow: 'auto' }}>
      <p className='p-2 font-bold font-[Century Gothic]'>
        Customer List
      </p>
      <div className='p-1'>
        <Table responsive="sm" bordered>
          <thead>
            <tr>
              <th className="border">S.no</th>
              <th className="border">Customer ID</th>
              <th className="border">Customer Name</th>
              <th className="border">Date & Time</th>
              <th className="border">Phone Number</th>
              <th className="border">Email ID</th>
              <th className="border"><IconDotsVertical stroke={1} /></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border">1</td>
              <td className="border">#543568</td>
              <td className="border">Karan</td>
              <td className="border">20,Mar 04:23</td>
              <td className="border">00000 00000</td>
              <td className="border">minions10karan@gmail.com</td>
              <td className="border"><IconDotsVertical stroke={1} /></td>
            </tr>
            <tr>
              <td className="border">2</td>
              <td className="border">#543568</td>
              <td className="border">Karan</td>
              <td className="border">20,Mar 04:23</td>
              <td className="border">00000 00000</td>
              <td className="border">minions10karan@gmail.com</td>
              <td className="border"><IconDotsVertical stroke={1} /></td>
            </tr>
            <tr>
              <td className="border">3</td>
              <td className="border">#543568</td>
              <td className="border">Karan</td>
              <td className="border">20,Mar 04:23</td>
              <td className="border">00000 00000</td>
              <td className="border">minions10karan@gmail.com</td>
              <td className="border"><IconDotsVertical stroke={1} /></td>
            </tr>
            <tr>
              <td className="border">4</td>
              <td className="border">#543568</td>
              <td className="border">Karan</td>
              <td className="border">20,Mar 04:23</td>
              <td className="border">00000 00000</td>
              <td className="border">minions10karan@gmail.com</td>
              <td className="border"><IconDotsVertical stroke={1} /></td>
            </tr>
            <tr>
              <td className="border">5</td>
              <td className="border">#543568</td>
              <td className="border">Karan</td>
              <td className="border">20,Mar 04:23</td>
              <td className="border">00000 00000</td>
              <td className="border">minions10karan@gmail.com</td>
              <td className="border"><IconDotsVertical stroke={1} /></td>
            </tr>
            <tr>
              <td className="border">6</td>
              <td className="border">#543568</td>
              <td className="border">Karan</td>
              <td className="border">20,Mar 04:23</td>
              <td className="border">00000 00000</td>
              <td className="border">minions10karan@gmail.com</td>
              <td className="border"><IconDotsVertical stroke={1} /></td>
            </tr>
            <tr>
              <td className="border">7</td>
              <td className="border">#543568</td>
              <td className="border">Karan</td>
              <td className="border">20,Mar 04:23</td>
              <td className="border">00000 00000</td>
              <td className="border">minions10karan@gmail.com</td>
              <td className="border"><IconDotsVertical stroke={1} /></td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Table2;
