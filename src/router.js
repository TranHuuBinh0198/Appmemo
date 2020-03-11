import React from "react";
import TaskForm from './components/MenuRight/TaskForm';

import MenuRight from '../src/components/MenuRight/MenuRight';

export const routes = [

    {
        path: "/new",
        exact: true,
        main: () => (
            <TaskForm/>
        )
    },
    {
        path: "/content",
        exact: true,
        main: () => (
            <MenuRight/>
        )
    },

];

export default routes;