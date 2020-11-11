const ResolveRoutes = (route) => {
    if (route != 'about'){
        if (route === '/'){
            return route
        }else if (route.includes('page')){
            return '/:pages'
        }
    }
    return `/${route}`;
}
export default ResolveRoutes