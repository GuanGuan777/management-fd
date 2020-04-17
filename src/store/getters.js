const getters = {
    role: state => state.user.role,
    token: state => state.user.token,
    addRoutes: state => state.permission.addRoutes,
}

export default getters;