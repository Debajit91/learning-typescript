// union = |

type UserRole = 'admin' | 'member' | 'guest';

const getDashboard = (role: UserRole) => {
    if(role === "admin"){
        return "Admin Dashboard"
    } else if (role === "member"){
        return "Member Dashboard"
    } else return "Guest Dashboard"
}

console.log(getDashboard("admin"));