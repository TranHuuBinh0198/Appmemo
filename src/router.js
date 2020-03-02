import React from "react";
import EditMenuRight from '../src/components/MenuRight/EditMenuRight';

import MenuRight from '../src/components/MenuRight/MenuRight';

export const routes = [

    {
        path: "/new",
        exact: true,
        main: () => (
            <EditMenuRight/>
        )
    },
    {
        path: "/content",
        exact: false,
        main: () => (
            <MenuRight/>
        )
    },

];

export default routes;