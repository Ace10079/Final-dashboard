import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import { IconDotsVertical } from '@tabler/icons-react';
import { IconSearch } from '@tabler/icons-react';

function Table3() {
    return (
        <div className='bg-slate-100 border-solid border-2 rounded-lg m-3' style={{ maxHeight: '400px', overflow: 'auto' }}>
            <div className='flex justify-between'>
                <p className='p-2 font-bold text-2xl font-[rubik]' >
                    Recently Searched
                </p>
                <div className='flex justify-end bg-white m-2 border rounded-lg'>
                    <div className='m-2'>
                    <IconSearch stroke={2} />
                    </div>
                    <div>
                    <input
                        type="text"
                        className="w-full px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Search   "
                    />
                    </div>
                    

                </div>
            </div>

            <div className='p-1'>
                <Table responsive="sm" bordered>
                    <thead>
                        <tr>
                            <th className="border">S.no</th>
                            <th className="border">Image ID</th>
                            <th className="border">Customer Name</th>
                            <th className="border">Disease Name</th>
                            <th className="border">Date & Time</th>
                            <th className='border'>Image</th>
                            <th className="border"><IconDotsVertical stroke={1} /></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border">1</td>
                            <td className="border">#543568</td>
                            <td className="border">Karan</td>
                            <td className="border">00000 00000</td>
                            <td className="border">20,Mar 04:23</td>
                            <td className="border">lorem ipsum</td>
                            <td className="border"><IconDotsVertical stroke={1} /></td>
                        </tr>
                        <tr>
                            <td className="border">2</td>
                            <td className="border">#543568</td>
                            <td className="border">Karan</td>
                            <td className="border">00000 00000</td>
                            <td className="border">20,Mar 04:23</td>
                            <td className="border">lorem ipsum</td>
                            <td className="border"><IconDotsVertical stroke={1} /></td>
                        </tr>
                        <tr>
                            <td className="border">3</td>
                            <td className="border">#543568</td>
                            <td className="border">Karan</td>
                            <td className="border">00000 00000</td>
                            <td className="border">20,Mar 04:23</td>
                            <td className="border">lorem ipsum</td>
                            <td className="border"><IconDotsVertical stroke={1} /></td>
                        </tr>
                        <tr>
                            <td className="border">4</td>
                            <td className="border">#543568</td>
                            <td className="border">Karan</td>
                            <td className="border">00000 00000</td>
                            <td className="border">20,Mar 04:23</td>
                            <td className="border">lorem ipsum</td>
                            <td className="border"><IconDotsVertical stroke={1} /></td>
                        </tr>
                        <tr>
                            <td className="border">5</td>
                            <td className="border">#543568</td>
                            <td className="border">Karan</td>
                            <td className="border">00000 00000</td>
                            <td className="border">20,Mar 04:23</td>
                            <td className="border">lorem ipsum</td>
                            <td className="border"><IconDotsVertical stroke={1} /></td>
                        </tr>
                        <tr>
                            <td className="border">6</td>
                            <td className="border">#543568</td>
                            <td className="border">Karan</td>
                            <td className="border">00000 00000</td>
                            <td className="border">20,Mar 04:23</td>
                            <td className="border">lorem ipsum</td>
                            <td className="border"><IconDotsVertical stroke={1} /></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default Table3;
