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



// intersection = &

type Employee = {
    id: string;
    name: string;
    phoneNo: string;
};

type Manager = {
    designation: string;
    teamSize: number;
}

type EmployeeManger = Employee & Manager;

const Chowdhury: EmployeeManger = {
    id: "C-01",
    name: "M.H. Chowdhury",
    phoneNo: "0111",
    designation: "Manager",
    teamSize: 12
}