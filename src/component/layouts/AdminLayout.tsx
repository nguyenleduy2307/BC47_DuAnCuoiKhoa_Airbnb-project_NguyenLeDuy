
import React, { useState } from 'react';
// import {
//     MenuFoldOutlined,
//     MenuUnfoldOutlined,
// } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { NavLink, Outlet } from 'react-router-dom';
import { PATH } from 'constant';
import styled from "styled-components"

const {Sider, Content } = Layout;

export const AdminLayout: React.FC = () => {
    const [collapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <AdLayout>
            <Layout className='border border-gray-400'>
                <Sider trigger={null} collapsible collapsed={collapsed} className='!bg-white'>
                    <div className='font-600 text-20 py-16 ps-[32px]'>
                        DASHBOARD
                    </div>
                    <Menu
                        className='!mt-[20px] font-500'
                        theme="light"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={[
                            {
                                key: '1',
                                icon: <NavLink to={PATH.adminQLND}>Quản lý người dùng</NavLink>,
                                label: '',
                            },
                            {
                                key: '2',
                                icon: <NavLink to={PATH.adminQLVT}>Quản lý vị trí</NavLink>,
                                label: '',
                            },
                            {
                                key: '3',
                                icon: <NavLink to={PATH.adminQLP}>Quản lý phòng</NavLink>,
                                label: '',
                            }, 
                            {
                                key: '4',
                                icon: <NavLink to={PATH.adminQLDP}>Quản lý đặt phòng</NavLink>,
                                label: '',
                            },                         
                            {
                                key: '5',
                                icon: <NavLink to={PATH.adminQLBL}>Quản lý bình luận</NavLink>,
                                label: '',
                            },
                        ]}
                    />
                </Sider>
                <Layout className='!bg-gray-200'>
                    {/* <Header style={{ padding: 0, background: colorBgContainer }}>
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                fontSize: '16px',
                                width: 64,
                                height: 64,
                            }}
                        />
                    </Header> */}
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                            background: colorBgContainer,
                        }}
                    >
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>

        </AdLayout>
    );
};

const AdLayout = styled.div`
    max-width: var(--max-width);
    margin: auto;
    padding: 40px;
`


// import { SideBar } from 'component/templates/Admin/SideBar'
// import { Outlet } from 'react-router-dom'

// export const AdminLayout = () => {

//     return (
//         <AdLayout className="grid grid-cols-4 mb-16">

//             <div className='col-span-1'>
//                 <SideBar/>
//             </div>

//             <div className='col-span-3'>
//                 <Outlet />
//             </div>

//         </AdLayout>
//     )
// }

// const AdLayout = styled.div`
//     max-width: var(--max-width);
//     margin: auto;
//     padding: 80px;
// `