interface RouteCollection {
    [key: string]: any;
}

export const routesCollection : Record<string,RouteCollection> = {
    login :{
      path: '/login',
    },

    test :{
      path: '/test',
    },
}

