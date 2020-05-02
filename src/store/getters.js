const getters = {
    role: state => state.user.role,
    token: state => state.user.token,
    addRoutes: state => state.permission.addRoutes,
    category: state => state.resource.category
}

export default getters;